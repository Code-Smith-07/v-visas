import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { 
  Search, User, Menu, ChevronRight, CheckCircle2, Clock, 
  FileText, Shield, ArrowLeft, Plus, Minus, MapPin, Calendar, 
  Check, Plane, GraduationCap, Home, Briefcase, SearchIcon, Globe, LogOut,
  LayoutDashboard, Settings, Bell, CreditCard, Download, Edit, Trash2, Eye,
  X, Save, DollarSign, Package, Users, TrendingUp, ShieldAlert
} from 'lucide-react';
import { VISA_TYPES, COUNTRIES_DATA, calculatePrice, getAllCountries, getCountryById, getVisaByCountryAndType } from './countryData';
import { auth, db } from './firebase';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, updateDoc, doc, getDoc, getDocs, query, where, orderBy, serverTimestamp } from 'firebase/firestore';

// Icon mapping
const iconMap = { Plane, GraduationCap, Home, Briefcase, SearchIcon };
const getIcon = (iconName, className = "w-4 h-4") => {
  const IconComponent = iconMap[iconName];
  return IconComponent ? <IconComponent className={className} /> : null;
};

// Admin check
const isAdmin = (user) => {
  return user && user.email === 'officialvishwateja@gmail.com';
};

// Navbar
const Navbar = ({ user, onLogin, onLogout }) => {
  const location = useLocation();
  const userIsAdmin = isAdmin(user);
  
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-3 md:px-4 py-2.5 md:py-3 shadow-sm flex justify-between items-center">
      <Link to="/" className="flex items-center space-x-2 md:space-x-3">
        <div className="font-bold text-xl md:text-2xl tracking-tight text-blue-600">V-Visas</div>
        <div className="hidden sm:block text-[10px] font-semibold tracking-wider text-blue-700 uppercase leading-tight border-l-2 border-blue-600 pl-2">
          Visas On<br/>Time
        </div>
      </Link>
      <div className="flex items-center space-x-2 md:space-x-4">
        <div className="hidden lg:flex items-center text-xs md:text-sm font-medium text-gray-600 bg-emerald-50 px-2 md:px-3 py-1 md:py-1.5 rounded-full">
          <Shield className="w-3 h-3 md:w-4 md:h-4 text-emerald-600 mr-1" />
          On Time Guaranteed
        </div>
        {user ? (
          <div className="flex items-center space-x-2 md:space-x-3">
            <Link to="/dashboard" className={`hidden md:flex items-center space-x-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/profile') || location.pathname.startsWith('/settings') ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}>
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>
            {userIsAdmin && (
              <Link to="/admin" className={`hidden md:flex items-center space-x-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${location.pathname.startsWith('/admin') ? 'bg-purple-50 text-purple-700' : 'text-gray-600 hover:bg-gray-50'}`}>
                <ShieldAlert className="w-4 h-4" />
                <span>Admin Panel</span>
              </Link>
            )}
            <Link to="/profile" className="flex items-center space-x-1.5 md:space-x-2 hover:opacity-80 transition-opacity">
              <img src={user.photoURL} alt={user.displayName} className="w-7 h-7 md:w-8 md:h-8 rounded-full" />
              <span className="hidden md:block text-sm font-medium text-gray-700">{user.displayName}</span>
            </Link>
            <button onClick={onLogout} className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full" title="Logout">
              <LogOut className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
            </button>
          </div>
        ) : (
          <button onClick={onLogin} className="flex items-center space-x-1.5 md:space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-all">
            <User className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span className="hidden xs:inline">Sign in with Google</span>
            <span className="xs:hidden">Sign in</span>
          </button>
        )}
      </div>
    </nav>
  );
};

// Country Card
const CountryCard = ({ country }) => {
  const navigate = useNavigate();
  const visaTypes = Object.keys(country.visas);
  const firstVisa = country.visas[visaTypes[0]];
  const pricing = calculatePrice(firstVisa, 1, false);
  
  return (
    <div 
      className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all cursor-pointer group"
      onClick={() => navigate(`/${country.id}`)}
    >
      <div className="relative h-40 md:h-48 overflow-hidden">
        <img src={country.image} alt={country.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 md:py-1.5 rounded-md md:rounded-lg shadow-lg">{country.popularityTag}</div>
      </div>
      <div className="p-4 md:p-5">
        <h3 className="font-bold text-base md:text-lg text-gray-900 mb-1">{country.name}</h3>
        <p className="text-xs md:text-sm text-gray-500 mb-2 md:mb-3">{visaTypes.length} visa {visaTypes.length > 1 ? 'types' : 'type'} available • {country.region}</p>
        <div className="flex items-baseline justify-between">
          <div><span className="text-[10px] md:text-xs text-gray-500">Starting from</span><div className="text-xl md:text-2xl font-bold text-green-600">₹{pricing.total.toLocaleString()}</div></div>
          <button className="text-blue-600 hover:text-blue-700 font-semibold text-xs md:text-sm">View →</button>
        </div>
      </div>
    </div>
  );
};

// Home View - Shows all countries
const HomeView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const countries = getAllCountries();
  
  const filteredCountries = searchQuery.trim() 
    ? countries.filter(country => 
        country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.region.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : countries.slice(0, 10); // Show top 10 countries when no search query
  
  return (
    <div className="min-h-screen bg-gray-50 pb-12 md:pb-20">
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 pt-12 md:pt-16 pb-24 md:pb-32 px-4 relative overflow-visible">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 tracking-tight leading-tight">Your Gateway to Global Opportunities</h1>
          <p className="text-blue-50 text-sm sm:text-base md:text-lg mb-6 md:mb-8">Choose your destination and explore visa options</p>
          <div className="relative max-w-2xl mx-auto z-[100]">
            <div className="absolute inset-y-0 left-3 md:left-4 flex items-center pointer-events-none"><Search className="h-4 w-4 md:h-5 md:w-5 text-gray-400" /></div>
            <input 
              type="text" 
              className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-4 bg-white text-gray-900 rounded-xl md:rounded-2xl text-base md:text-lg shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400" 
              placeholder="Search for a destination..." 
              value={searchQuery} 
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowDropdown(true);
              }}
              onFocus={() => setShowDropdown(true)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
            />
            
            {/* Search Dropdown */}
            {showDropdown && (
              <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-2xl overflow-hidden max-h-96 overflow-y-auto z-[9999] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {filteredCountries.length > 0 ? (
                  <div className="py-2">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Most Popular Destinations</div>
                    {filteredCountries.map((country) => (
                      <div
                        key={country.id}
                        onClick={() => {
                          navigate(`/${country.id}`);
                          setSearchQuery('');
                          setShowDropdown(false);
                        }}
                        className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        <img 
                          src={country.image} 
                          alt={country.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{country.name}</div>
                          <div className="text-sm text-blue-600">Visa in {Object.keys(country.visas)[0] === 'tourist' ? country.visas.tourist.processing : '2 days'}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="px-4 py-8 text-center text-gray-500">
                    <p className="mb-2">No destinations found</p>
                    <p className="text-sm">Try searching for another country</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 flex items-center"><Globe className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-3 text-blue-600" />Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {countries.map((country) => (<CountryCard key={country.id} country={country} />))}
        </div>
      </div>
    </div>
  );
};

// Country Visa Selection - Shows all visa types for a country
const CountryVisaView = () => {
  const { country: countryId } = useParams();
  const navigate = useNavigate();
  const country = getCountryById(countryId);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [countryId]);
  
  if (!country) return <div className="text-center py-20">Country not found</div>;
  
  const visaTypes = Object.entries(country.visas);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 pt-8 md:pt-12 pb-12 md:pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center text-blue-100 mb-3 md:mb-4 text-xs md:text-sm">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3 h-3 md:w-4 md:h-4 mx-1.5 md:mx-2" />
            <span className="text-white">{country.name}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">{country.name} Visas</h1>
          <p className="text-blue-50 text-sm md:text-base lg:text-xl">Choose your visa type below</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Available Visa Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {visaTypes.map(([visaType, visa]) => {
            const typeInfo = VISA_TYPES[visaType];
            const pricing = calculatePrice(visa, 1, false);
            
            return (
              <div 
                key={visaType}
                className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all cursor-pointer border-2 border-transparent hover:border-blue-300"
                onClick={() => navigate(`/${countryId}/${visaType}`)}
              >
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <div className="bg-blue-100 p-2.5 md:p-3 rounded-xl md:rounded-2xl">{getIcon(typeInfo.icon, 'w-5 h-5 md:w-6 md:h-6 text-blue-600')}</div>
                  <span className="text-[10px] md:text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium">{visa.processing}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1.5 md:mb-2">{typeInfo.name}</h3>
                <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">{visa.type} • {visa.entry} Entry</p>
                <div className="border-t border-gray-100 pt-3 md:pt-4">
                  <div className="flex items-baseline justify-between mb-2 md:mb-3">
                    <span className="text-[10px] md:text-xs text-gray-500">Starting from</span>
                    <div className="text-xl md:text-2xl font-bold text-green-600">₹{pricing.total.toLocaleString()}</div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm transition-all">
                    View Details →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Visa Details View
const VisaDetailsView = () => {
  const { country: countryId, visaType } = useParams();
  const navigate = useNavigate();
  const [travellers, setTravellers] = useState(1);
  const [timelineType, setTimelineType] = useState('standard');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [countryId, visaType]);
  
  const country = getCountryById(countryId);
  const visa = getVisaByCountryAndType(countryId, visaType);
  const typeInfo = VISA_TYPES[visaType];
  
  if (!visa || !country) return <div className="text-center py-20">Visa not found</div>;
  
  const isFastTrack = timelineType === 'fast' && visa.fastTrackFee;
  const pricing = calculatePrice(visa, travellers, isFastTrack);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[35vh] sm:h-[40vh] min-h-[280px] sm:min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img src={country.image} alt={country.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 text-center text-white px-4 max-w-3xl">
          <div className="flex items-center justify-center text-blue-200 mb-3 md:mb-4 text-xs md:text-sm">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3 h-3 md:w-4 md:h-4 mx-1.5 md:mx-2" />
            <Link to={`/${countryId}`} className="hover:text-white">{country.name}</Link>
            <ChevronRight className="w-3 h-3 md:w-4 md:h-4 mx-1.5 md:mx-2" />
            <span className="text-white">{typeInfo.name}</span>
          </div>
          <div className="inline-flex items-center bg-white/20 backdrop-blur-md px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
            <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2" />Visa guaranteed in {visa.processing}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">{visa.title}</h1>
          <button onClick={() => navigate(`/${countryId}/${visaType}/apply`)} className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 px-6 md:py-3 md:px-8 rounded-full text-sm md:text-base lg:text-lg transition-all shadow-lg hover:shadow-xl">
            Start Application
          </button>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-8 flex flex-col lg:flex-row gap-6 md:gap-8">
        <div className="lg:w-2/3 space-y-6 md:space-y-8">
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{country.name} {typeInfo.name} Information</h2>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center"><FileText className="w-5 h-5 md:w-6 md:h-6 text-gray-400 mb-1.5 md:mb-2" /><span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Visa Type</span><span className="font-semibold text-xs md:text-sm text-gray-900">{visa.type}</span></div>
              <div className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center"><Clock className="w-5 h-5 md:w-6 md:h-6 text-gray-400 mb-1.5 md:mb-2" /><span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Length of Stay</span><span className="font-semibold text-xs md:text-sm text-gray-900">{visa.lengthOfStay}</span></div>
              <div className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center"><Calendar className="w-5 h-5 md:w-6 md:h-6 text-gray-400 mb-1.5 md:mb-2" /><span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Validity</span><span className="font-semibold text-xs md:text-sm text-gray-900">{visa.validity}</span></div>
              <div className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center"><MapPin className="w-5 h-5 md:w-6 md:h-6 text-gray-400 mb-1.5 md:mb-2" /><span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Entry</span><span className="font-semibold text-xs md:text-sm text-gray-900">{visa.entry}</span></div>
            </div>
          </section>
          
          <section className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Required Documents</h3>
            <div className="grid grid-cols-1 gap-2.5 md:gap-3">
              {visa.requirements.map((req, index) => (
                <div key={index} className="flex items-start text-gray-700 text-sm md:text-base"><Check className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" /><span>{req}</span></div>
              ))}
            </div>
          </section>
          
          {visa.guaranteedDate && (
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Get a Guaranteed Visa on</h2>
              <div className="space-y-3 md:space-y-4">
                <div className={`p-4 md:p-5 rounded-xl md:rounded-2xl border-2 cursor-pointer transition-all ${timelineType === 'standard' ? 'border-blue-600 bg-blue-50/50 shadow-md' : 'border-gray-200 bg-white hover:border-blue-300'}`} onClick={() => setTimelineType('standard')}>
                  <div className="flex justify-between items-center">
                    <div><span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block">In {visa.processing}</span><div className="text-base md:text-lg font-bold text-gray-900">{visa.guaranteedDate}</div><div className="text-xs md:text-sm text-gray-500 flex items-center mt-1"><Clock className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1" /> Standard Processing</div></div>
                    <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 ${timelineType === 'standard' ? 'bg-gradient-to-r from-blue-600 to-blue-700' : 'border-2 border-gray-300'}`}>{timelineType === 'standard' && <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />}</div>
                  </div>
                </div>
                {visa.fastDate && visa.fastTrackFee && (
                  <div className={`p-4 md:p-5 rounded-xl md:rounded-2xl border-2 cursor-pointer transition-all ${timelineType === 'fast' ? 'border-blue-600 bg-blue-50/50 shadow-md' : 'border-gray-200 bg-white hover:border-blue-300'}`} onClick={() => setTimelineType('fast')}>
                    <div className="flex justify-between items-center">
                      <div><span className="text-[10px] md:text-xs font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded uppercase tracking-wider mb-1 inline-block">{visa.fastProcessing} - Faster!</span><div className="text-base md:text-lg font-bold text-gray-900">{visa.fastDate}</div><div className="text-xs md:text-sm text-gray-500 flex items-center mt-1"><Clock className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1" /> Fast Track (+₹{visa.fastTrackFee.toLocaleString()}/person)</div></div>
                      <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 ${timelineType === 'fast' ? 'bg-gradient-to-r from-blue-600 to-blue-700' : 'border-2 border-gray-300'}`}>{timelineType === 'fast' && <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />}</div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}
        </div>
        
        <div className="lg:w-1/3 relative">
          <div className="lg:sticky lg:top-24 bg-white rounded-2xl md:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden border border-gray-100">
            <div className="bg-gray-50 px-4 md:px-6 py-3 md:py-4 border-b border-gray-100"><div className="flex items-center text-xs md:text-sm font-medium text-gray-700"><Shield className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-600 mr-1.5 md:mr-2" />Guaranteed by {timelineType === 'fast' ? visa.fastDate : visa.guaranteedDate}</div></div>
            <div className="p-4 md:p-6">
              <div className="flex justify-between items-center mb-4 md:mb-6"><span className="font-semibold text-sm md:text-base text-gray-800">Travellers</span>
                <div className="flex items-center space-x-3 md:space-x-4 bg-gray-50 rounded-full px-2 py-1 border border-gray-100">
                  <button onClick={() => setTravellers(Math.max(1, travellers - 1))} className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full hover:bg-white hover:shadow-sm transition-all" disabled={travellers <= 1}><Minus className={`w-3.5 h-3.5 md:w-4 md:h-4 ${travellers <= 1 ? 'text-gray-300' : 'text-gray-600'}`} /></button>
                  <span className="font-semibold text-base md:text-lg w-7 md:w-8 text-center">{travellers}</span>
                  <button onClick={() => setTravellers(travellers + 1)} className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full hover:bg-white hover:shadow-sm transition-all"><Plus className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-600" /></button>
                </div>
              </div>
              <div className="space-y-2.5 md:space-y-3 mb-4 md:mb-6">
                <div className="flex justify-between items-center text-xs md:text-sm"><span className="text-gray-600">Government Fee ({travellers}×₹{visa.governmentFee.toLocaleString()})</span><span className="font-medium text-gray-900">₹{pricing.governmentFee.toLocaleString()}</span></div>
                <div className="flex justify-between items-center text-xs md:text-sm"><span className="text-gray-600">V-Visas Service Fee ({travellers}×₹{visa.serviceFee.toLocaleString()})</span><span className="font-medium text-gray-900">₹{pricing.serviceFee.toLocaleString()}</span></div>
                {isFastTrack && (<div className="flex justify-between items-center text-xs md:text-sm"><span className="text-green-700">Fast Track Fee ({travellers}×₹{visa.fastTrackFee.toLocaleString()})</span><span className="font-medium text-green-700">₹{pricing.fastTrackFee.toLocaleString()}</span></div>)}
                {pricing.discount > 0 && (<div className="flex justify-between items-center text-xs md:text-sm pt-2 border-t border-gray-200"><span className="text-green-600 font-medium">{travellers >= 5 ? '15% Bulk Discount' : travellers >= 3 ? '10% Group Discount' : '5% Multi-Traveller Discount'}</span><span className="font-medium text-green-600">-₹{pricing.discount.toLocaleString()}</span></div>)}
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl md:rounded-2xl p-3.5 md:p-4 mb-4 md:mb-6 border border-green-200">
                <div className="flex justify-between items-center"><div><div className="text-[10px] md:text-xs text-gray-600 uppercase tracking-wider font-semibold mb-1">Total Amount</div><div className="text-2xl md:text-3xl font-bold text-green-700">₹{pricing.total.toLocaleString()}</div><div className="text-[10px] md:text-xs text-gray-600 mt-1">For {travellers} {travellers === 1 ? 'traveller' : 'travellers'}</div></div></div>
              </div>
              <button onClick={() => navigate(`/${countryId}/${visaType}/apply`)} className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 md:py-4 rounded-xl md:rounded-2xl text-base md:text-lg transition-all shadow-md hover:shadow-lg mb-4 md:mb-6 flex items-center justify-center">Start Application <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-1" /></button>
              <div className="bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 rounded-xl md:rounded-2xl p-3 md:p-4 flex items-start"><Shield className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mt-0.5 mr-2 md:mr-3 flex-shrink-0" /><div><h4 className="font-semibold text-xs md:text-sm text-gray-900 mb-1">V-Visas Protect Included</h4><p className="text-[10px] md:text-xs text-gray-600 leading-relaxed">If Visa Delayed — No V-Visas Fee.<br/>If Rejected — 100% Refund.</p></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Application Flow with Card-Based UI
const ApplicationView = () => {
  const { country: countryId, visaType } = useParams();
  const navigate = useNavigate();
  const country = getCountryById(countryId);
  const visa = getVisaByCountryAndType(countryId, visaType);
  const typeInfo = VISA_TYPES[visaType];
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [travellers, setTravellers] = useState([]);
  const [currentTraveller, setCurrentTraveller] = useState({ name: '', email: '', phone: '', dob: '', passport: '', passportExpiry: '', nationality: 'Indian' });
  const [documents, setDocuments] = useState({});
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [travelDate, setTravelDate] = useState('');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [countryId, visaType]);
  
  const handleFileUpload = (docType, e) => {
    const file = e.target.files[0];
    if (file) {
      setDocuments({ ...documents, [docType]: file });
    }
  };
  
  const addTraveller = () => {
    if (currentTraveller.name.trim()) {
      setTravellers([...travellers, { ...currentTraveller, id: Date.now() }]);
      setCurrentTraveller({ name: '', email: '', phone: '', dob: '', passport: '', passportExpiry: '', nationality: 'Indian' });
    }
  };
  
  const pricing = calculatePrice(visa, Math.max(1, travellers.length), false);
  
  const questions = [
    { id: 'traveller-name', type: 'traveller', title: `Who's going on this trip to ${country?.name}?`, subtitle: 'You can add all travellers or continue solo' },
    { id: 'travel-date', type: 'date', title: 'When are you planning to travel?', subtitle: 'Select your intended travel date' },
    { id: 'documents', type: 'documents', title: 'The Essential Documents', subtitle: `These are as per the official ${country?.name} embassy requirements for visa processing` },
    { id: 'payment', type: 'payment', title: 'Complete Your Payment', subtitle: 'Secure payment powered by V-Visas' },
    { id: 'confirmation', type: 'confirmation', title: 'Application Submitted!', subtitle: 'Your visa application has been received' }
  ];
  
  const currentQ = questions[currentQuestion];
  
  const handleNext = () => {
    if (currentQuestion === 0 && travellers.length === 0 && currentTraveller.name) {
      addTraveller();
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  
  const handleBack = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
    else navigate(-1);
  };
  
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      {/* Header */}
      <div className="relative z-10 px-4 py-4 md:py-6">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <button onClick={handleBack} className="p-1.5 md:p-2 hover:bg-white/50 rounded-full transition-all">
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
          </button>
          <div className="w-8 md:w-10"></div>
        </div>
      </div>
      
      {/* Side Navigation */}
      <div className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col space-y-4 md:space-y-6 z-20">
        <div className="flex flex-col items-center space-y-1 md:space-y-2">
          <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all ${currentQuestion >= 0 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'}`}>
            <User className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <span className={`text-[10px] md:text-xs font-semibold ${currentQuestion >= 0 ? 'text-blue-700' : 'text-gray-400'}`}>Travelers</span>
        </div>
        <div className="flex flex-col items-center space-y-1 md:space-y-2">
          <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all ${currentQuestion >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'}`}>
            <FileText className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <span className={`text-[10px] md:text-xs font-semibold ${currentQuestion >= 1 ? 'text-blue-700' : 'text-gray-400'}`}>Docs</span>
        </div>
        <div className="flex flex-col items-center space-y-1 md:space-y-2">
          <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all ${currentQuestion >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'}`}>
            <Calendar className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <span className={`text-[10px] md:text-xs font-semibold ${currentQuestion >= 2 ? 'text-blue-700' : 'text-gray-400'}`}>Essentials</span>
        </div>
        <div className="flex flex-col items-center space-y-1 md:space-y-2">
          <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all ${currentQuestion >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'}`}>
            <Shield className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <span className={`text-[10px] md:text-xs font-semibold ${currentQuestion >= 3 ? 'text-blue-700' : 'text-gray-400'}`}>Checkout</span>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 py-6 md:py-8">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">{currentQ.title}</h1>
          <p className="text-sm md:text-base text-gray-600">{currentQ.subtitle}</p>
        </div>
        
        {/* Question Card */}
        <div className="flex justify-center">
          {/* Traveller Question */}
          {currentQ.type === 'traveller' && (
            <div className="w-full max-w-md">
              {travellers.length > 0 && (
                <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                  {travellers.map((t, idx) => (
                    <div key={t.id} className="bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20">
                      <div className="flex items-center space-x-3 md:space-x-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold text-base md:text-lg flex-shrink-0">
                          {getInitials(t.name)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-sm md:text-base text-gray-900 uppercase tracking-wide truncate">{t.name}</div>
                          <div className="text-xs md:text-sm text-green-600 font-medium">Main traveler</div>
                          <div className="text-[10px] md:text-xs text-gray-500 mt-1 truncate">Name: {t.name}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {travellers.length === 0 && (
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-[0_20px_60px_rgb(0,0,0,0.15)] border border-white/20 transform hover:scale-[1.02] transition-transform">
                  <input 
                    type="text" 
                    value={currentTraveller.name}
                    onChange={(e) => setCurrentTraveller({...currentTraveller, name: e.target.value})}
                    className="w-full text-center text-base md:text-lg font-medium bg-transparent border-b-2 border-gray-300 focus:border-blue-500 outline-none pb-2 md:pb-3 text-gray-900 placeholder-gray-400"
                    placeholder="Enter traveler's full name"
                    autoFocus
                  />
                </div>
              )}
              
              <div className="mt-8 flex flex-col items-center space-y-4">
                {travellers.length > 0 ? (
                  <>
                    <button onClick={() => setTravellers([])} className="flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                      <Plus className="w-5 h-5 mr-2" /> Add more travelers
                    </button>
                    <span className="text-gray-400 text-sm">OR</span>
                    <button onClick={handleNext} className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white font-semibold py-4 px-12 rounded-2xl transition-all shadow-xl flex items-center space-x-2">
                      <span>Continue with {travellers.length} traveler</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={() => {
                      if (currentTraveller.name.trim()) {
                        addTraveller();
                      }
                    }}
                    disabled={!currentTraveller.name.trim()}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-300 disabled:to-gray-400 text-white font-semibold py-4 px-12 rounded-2xl transition-all shadow-xl disabled:cursor-not-allowed"
                  >
                    Continue →
                  </button>
                )}
              </div>
            </div>
          )}
          
          {/* Travel Date Question */}
          {currentQ.type === 'date' && (
            <div className="w-full max-w-md">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-[0_20px_60px_rgb(0,0,0,0.15)] border border-white/20">
                <input 
                  type="date" 
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full text-center text-xl font-medium bg-transparent border-b-2 border-gray-300 focus:border-blue-500 outline-none pb-3 text-gray-900"
                  autoFocus
                />
              </div>
              <div className="mt-8 flex justify-center">
                <button 
                  onClick={handleNext}
                  disabled={!travelDate}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-300 disabled:to-gray-400 text-white font-semibold py-4 px-12 rounded-2xl transition-all shadow-xl disabled:cursor-not-allowed"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}
          
          {/* Documents Question */}
          {currentQ.type === 'documents' && (
            <div className="w-full max-w-md">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-[0_20px_60px_rgb(0,0,0,0.15)] border border-white/20">
                {travellers.map((t, idx) => (
                  <div key={t.id} className="mb-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold">
                        {getInitials(t.name)}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 uppercase text-sm">{t.name}</div>
                        <div className="text-xs text-gray-500">{Object.keys(documents).length}/{visa?.requirements.length || 0} docs uploaded</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {visa?.requirements.slice(0, 2).map((req) => (
                        <label key={req} className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl cursor-pointer transition-all">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                              {documents[req] ? <Check className="w-5 h-5 text-blue-600" /> : <FileText className="w-5 h-5 text-blue-600" />}
                            </div>
                            <span className="text-sm font-medium text-gray-700">{req}</span>
                          </div>
                          <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => handleFileUpload(req, e)} />
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <button 
                  onClick={handleNext}
                  className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white font-semibold py-4 px-12 rounded-2xl transition-all shadow-xl flex items-center space-x-2"
                >
                  <span className= "flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Proceed to checkout
                  </span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
          
          {/* Payment */}
          {currentQ.type === 'payment' && (
            <div className="w-full max-w-md">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-[0_20px_60px_rgb(0,0,0,0.15)] border border-white/20 mb-6">
                <div className="text-center mb-6">
                  <div className="text-gray-500 text-sm mb-1">Total Amount</div>
                  <div className="text-4xl font-bold text-gray-900">₹{pricing.total.toLocaleString()}</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {['card', 'upi', 'netbanking'].map((method) => (
                    <div key={method} onClick={() => setPaymentMethod(method)} className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === method ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}>
                      <span className="font-medium text-gray-900 capitalize">{method === 'upi' ? 'UPI' : method === 'netbanking' ? 'Net Banking' : 'Credit/Debit Card'}</span>
                    </div>
                  ))}
                </div>
                
                {paymentMethod === 'card' && (
                  <div className="space-y-3">
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none" placeholder="Card number" />
                    <div className="grid grid-cols-2 gap-3">
                      <input type="text" className="px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 outline-none" placeholder="MM/YY" />
                      <input type="text" className="px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 outline-none" placeholder="CVV" />
                    </div>
                  </div>
                )}
                
                {paymentMethod === 'upi' && (
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none" placeholder="your@upi" />
                )}
              </div>
              
              <button onClick={handleNext} className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 rounded-2xl transition-all shadow-xl">
                Pay Now
              </button>
            </div>
          )}
          
          {/* Confirmation */}
          {currentQ.type === 'confirmation' && (
            <div className="w-full max-w-md text-center">
              <div className="mb-8 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl">
                  <Check className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-[0_20px_60px_rgb(0,0,0,0.15)] border border-white/20 mb-8">
                <div className="text-sm text-gray-600 mb-2">Application Reference</div>
              <div className="text-2xl font-bold text-blue-700 mb-6">V-VIS-{Math.random().toString(36).substr(2, 9).toUpperCase()}</div>
                <div className="text-sm text-gray-700 mb-1">Expected Processing: <span className="font-semibold">{visa.processing}</span></div>
                <div className="text-sm text-gray-700">Guaranteed Delivery: <span className="font-semibold">{visa.guaranteedDate}</span></div>
              </div>
              
              <button onClick={() => navigate('/')} className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 rounded-2xl transition-all shadow-xl">
                Back to Home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Profile Page
const ProfilePage = ({ user }) => {
  const navigate = useNavigate();
  
  if (!user) {
    navigate('/');
    return null;
  }

  const mockStats = {
    totalApplications: 3,
    approved: 2,
    pending: 1,
    rejected: 0
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 pt-12 pb-32 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2">My Profile</h1>
          <p className="text-blue-100">Manage your account and track your applications</p>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 -mt-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
          <div className="flex items-start space-x-6 mb-8">
            <img src={user.photoURL} alt={user.displayName} className="w-24 h-24 rounded-full border-4 border-white shadow-lg" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">{user.displayName}</h2>
              <p className="text-gray-600 mb-4">{user.email}</p>
              <Link to="/settings" className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all">
                <Edit className="w-4 h-4" />
                <span>Edit Profile</span>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-700 mb-1">{mockStats.totalApplications}</div>
              <div className="text-sm text-gray-600 font-medium">Total Applications</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-green-700 mb-1">{mockStats.approved}</div>
              <div className="text-sm text-gray-600 font-medium">Approved</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-yellow-700 mb-1">{mockStats.pending}</div>
              <div className="text-sm text-gray-600 font-medium">Pending</div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-red-700 mb-1">{mockStats.rejected}</div>
              <div className="text-sm text-gray-600 font-medium">Rejected</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/dashboard" className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">My Applications</div>
                <div className="text-sm text-gray-500">View all applications</div>
              </div>
            </Link>
            <Link to="/" className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Plus className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">New Application</div>
                <div className="text-sm text-gray-500">Apply for a visa</div>
              </div>
            </Link>
            <Link to="/settings" className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Settings className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Settings</div>
                <div className="text-sm text-gray-500">Account preferences</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Dashboard - Applications Page
const DashboardPage = ({ user }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedApp, setSelectedApp] = useState(null);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  
  if (!user) {
    navigate('/');
    return null;
  }

  // Fetch user's applications from Firestore
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setLoading(true);
        const q = query(
          collection(db, 'applications'), 
          where('userId', '==', user.uid),
          orderBy('createdAt', 'desc')
        );
        const snapshot = await getDocs(q);
        const apps = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        // If no applications found, show mock data for demo purposes
        if (apps.length === 0) {
          setApplications(mockApplications);
        } else {
          setApplications(apps);
        }
      } catch (error) {
        console.error('Error fetching applications:', error);
        // Fallback to mock data on error
        setApplications(mockApplications);
      } finally {
        setLoading(false);
      }
    };
    
    fetchApplications();
  }, [user]);

  // Mock application data - will be replaced with Firestore data later
  const mockApplications = [
    {
      id: 'V-VIS-ABC123',
      countryId: 'uae',
      country: 'United Arab Emirates',
      visaType: 'Tourist E-Visa',
      status: 'approved',
      submittedDate: '2026-02-15',
      completedDate: '2026-02-20',
      amount: 13000,
      travellers: 2,
      processingTime: '5 days'
    },
    {
      id: 'V-VIS-DEF456',
      countryId: 'thailand',
      country: 'Thailand',
      visaType: 'Tourist Visa',
      status: 'processing',
      submittedDate: '2026-02-22',
      completedDate: null,
      amount: 8500,
      travellers: 1,
      processingTime: '3-5 days',
      progress: 65
    },
    {
      id: 'V-VIS-GHI789',
      countryId: 'japan',
      country: 'Japan',
      visaType: 'Tourist Visa',
      status: 'approved',
      submittedDate: '2026-01-10',
      completedDate: '2026-01-30',
      amount: 11000,
      travellers: 1,
      processingTime: '20 days'
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'approved': return 'bg-green-100 text-green-700 border-green-200';
      case 'processing': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'rejected': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'approved': return <CheckCircle2 className="w-5 h-5" />;
      case 'processing': return <Clock className="w-5 h-5" />;
      case 'rejected': return <FileText className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading applications...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 pt-12 pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2">My Applications</h1>
          <p className="text-blue-100">Track and manage all your visa applications</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 -mt-20 pb-20">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Applications</p>
                <h3 className="text-3xl font-bold text-gray-900">{applications.length}</h3>
              </div>
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                <FileText className="w-7 h-7 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Processing</p>
                <h3 className="text-3xl font-bold text-yellow-600">{applications.filter(a => a.status === 'processing').length}</h3>
              </div>
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center">
                <Clock className="w-7 h-7 text-yellow-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Approved</p>
                <h3 className="text-3xl font-bold text-green-600">{applications.filter(a => a.status === 'approved').length}</h3>
              </div>
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Applications List */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">All Applications</h2>
            <Link to="/" className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all">
              <Plus className="w-4 h-4" />
              <span>New Application</span>
            </Link>
          </div>
          
          <div className="divide-y divide-gray-100">
            {applications.length === 0 ? (
              <div className="p-12 text-center">
                <FileText className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Applications Yet</h3>
                <p className="text-gray-600 mb-6">Start your visa journey by creating your first application</p>
                <Link to="/" className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                  <Plus className="w-5 h-5" />
                  <span>Create Application</span>
                </Link>
              </div>
            ) : (
              applications.map((app) => {
              const countryData = getCountryById(app.countryId);
              return (
                <div key={app.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4 flex-1">
                      <img 
                        src={countryData?.image} 
                        alt={app.country}
                        className="w-16 h-16 rounded-xl object-cover shadow-md"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{app.country}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getStatusColor(app.status)} flex items-center space-x-1`}>
                            {getStatusIcon(app.status)}
                            <span className="capitalize">{app.status}</span>
                          </span>
                        </div>
                      <p className="text-sm text-gray-600 mb-2">{app.visaType} • {app.travellers} {app.travellers > 1 ? 'travellers' : 'traveller'}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>Applied: {new Date(app.submittedDate).toLocaleDateString()}</span>
                        {app.completedDate && <span>Completed: {new Date(app.completedDate).toLocaleDateString()}</span>}
                        <span>Processing: {app.processingTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600 mb-1">₹{app.amount.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">Ref: {app.id}</div>
                  </div>
                </div>
                
                {app.status === 'processing' && app.progress && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Processing Progress</span>
                      <span className="text-sm font-bold text-blue-600">{app.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full transition-all" style={{width: `${app.progress}%`}}></div>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => setSelectedApp(app)}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-all"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </button>
                  {app.status === 'approved' && (
                    <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-semibold transition-all">
                      <Download className="w-4 h-4" />
                      <span>Download Visa</span>
                    </button>
                  )}
                </div>
              </div>
              );
            }))}
          </div>
        </div>
      </div>

      {/* View Details Modal */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4" onClick={() => setSelectedApp(null)}>
          <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-t-3xl">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  {getCountryById(selectedApp.countryId) && (
                    <img 
                      src={getCountryById(selectedApp.countryId).image} 
                      alt={selectedApp.country}
                      className="w-16 h-16 rounded-xl object-cover shadow-lg"
                    />
                  )}
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">{selectedApp.country}</h2>
                    <p className="text-blue-100">{selectedApp.visaType}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedApp(null)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Status and Reference */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600 mb-1">Application Status</p>
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(selectedApp.status)}`}>
                    {getStatusIcon(selectedApp.status)}
                    <span className="capitalize">{selectedApp.status}</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600 mb-1">Reference Number</p>
                  <p className="font-bold text-gray-900">{selectedApp.id}</p>
                </div>
              </div>

              {/* Progress Bar (if processing) */}
              {selectedApp.status === 'processing' && selectedApp.progress && (
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">Processing Progress</span>
                    <span className="text-lg font-bold text-blue-600">{selectedApp.progress}%</span>
                  </div>
                  <div className="w-full bg-white rounded-full h-3 shadow-inner">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-blue-700 h-3 rounded-full transition-all duration-500"
                      style={{width: `${selectedApp.progress}%`}}
                    />
                  </div>
                  <p className="text-xs text-gray-600 mt-2">Your application is being processed</p>
                </div>
              )}

              {/* Application Details Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-4 h-4 text-gray-600" />
                    <p className="text-sm text-gray-600">Submitted Date</p>
                  </div>
                  <p className="font-semibold text-gray-900">{selectedApp.submittedDate}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-4 h-4 text-gray-600" />
                    <p className="text-sm text-gray-600">Processing Time</p>
                  </div>
                  <p className="font-semibold text-gray-900">{selectedApp.processingTime}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="w-4 h-4 text-gray-600" />
                    <p className="text-sm text-gray-600">Travellers</p>
                  </div>
                  <p className="font-semibold text-gray-900">{selectedApp.travellers} {selectedApp.travellers === 1 ? 'Person' : 'People'}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <DollarSign className="w-4 h-4 text-gray-600" />
                    <p className="text-sm text-gray-600">Total Amount</p>
                  </div>
                  <p className="font-bold text-green-600 text-lg">₹{selectedApp.amount.toLocaleString()}</p>
                </div>
              </div>

              {/* Completion Date (if approved) */}
              {selectedApp.status === 'approved' && selectedApp.completedDate && (
                <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Visa Approved</p>
                      <p className="text-sm text-gray-600">Completed on {selectedApp.completedDate}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4 border-t border-gray-200">
                {selectedApp.status === 'approved' && (
                  <button className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-all">
                    <Download className="w-5 h-5" />
                    <span>Download Visa</span>
                  </button>
                )}
                <button 
                  onClick={() => setSelectedApp(null)}
                  className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-xl font-semibold transition-all"
                >
                  <span>Close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Settings Page
const SettingsPage = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [marketingEmails, setMarketingEmails] = useState(true);
  
  if (!user) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 pt-12 pb-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
          <p className="text-blue-100">Manage your account preferences and security</p>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 -mt-20">
        {/* Account Information */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <User className="w-5 h-5 mr-2 text-blue-600" />
            Account Information
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input type="text" defaultValue={user.displayName} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input type="email" defaultValue={user.email} className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50" disabled />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all">
              Save Changes
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <Bell className="w-5 h-5 mr-2 text-blue-600" />
            Notifications
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <div className="font-semibold text-gray-900">Email Notifications</div>
                <div className="text-sm text-gray-500">Receive updates about your applications</div>
              </div>
              <button 
                onClick={() => setEmailNotifications(!emailNotifications)}
                className={`relative w-12 h-6 rounded-full transition-colors ${emailNotifications ? 'bg-blue-600' : 'bg-gray-300'}`}
              >
                <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${emailNotifications ? 'translate-x-6' : ''}`}></div>
              </button>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <div className="font-semibold text-gray-900">SMS Notifications</div>
                <div className="text-sm text-gray-500">Get text messages for important updates</div>
              </div>
              <button 
                onClick={() => setSmsNotifications(!smsNotifications)}
                className={`relative w-12 h-6 rounded-full transition-colors ${smsNotifications ? 'bg-blue-600' : 'bg-gray-300'}`}
              >
                <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${smsNotifications ? 'translate-x-6' : ''}`}></div>
              </button>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <div className="font-semibold text-gray-900">Marketing Emails</div>
                <div className="text-sm text-gray-500">Receive offers and promotional content</div>
              </div>
              <button 
                onClick={() => setMarketingEmails(!marketingEmails)}
                className={`relative w-12 h-6 rounded-full transition-colors ${marketingEmails ? 'bg-blue-600' : 'bg-gray-300'}`}
              >
                <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${marketingEmails ? 'translate-x-6' : ''}`}></div>
              </button>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <CreditCard className="w-5 h-5 mr-2 text-blue-600" />
            Payment Methods
          </h2>
          <div className="text-center py-8 text-gray-500">
            <CreditCard className="w-12 h-12 mx-auto mb-3 text-gray-400" />
            <p>No payment methods saved</p>
            <button className="mt-4 text-blue-600 hover:text-blue-700 font-semibold">+ Add Payment Method</button>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-red-200">
          <h2 className="text-xl font-bold text-red-600 mb-6">Danger Zone</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg">
              <div>
                <div className="font-semibold text-gray-900">Delete Account</div>
                <div className="text-sm text-gray-500">Permanently delete your account and all data</div>
              </div>
              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all">
                Delete
              </button>
            </div>
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <div className="font-semibold text-gray-900">Sign Out</div>
                <div className="text-sm text-gray-500">Sign out from this device</div>
              </div>
              <button onClick={onLogout} className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold transition-all">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Admin Panel
const AdminPanel = ({ user }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('prices');
  const [applications, setApplications] = useState([]);
  const [editingPrice, setEditingPrice] = useState(null);
  const [priceData, setPriceData] = useState({});
  const [saving, setSaving] = useState(false);

  // Check if user is admin
  useEffect(() => {
    if (user && !isAdmin(user)) {
      navigate('/');
    }
  }, [user, navigate]);

  // Fetch all applications
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const q = query(collection(db, 'applications'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        const apps = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setApplications(apps);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };
    
    if (activeTab === 'applications' && isAdmin(user)) {
      fetchApplications();
    }
  }, [activeTab, user]);

  // Update application progress
  const updateProgress = async (appId, newProgress) => {
    try {
      await updateDoc(doc(db, 'applications', appId), {
        progress: newProgress,
        updatedAt: serverTimestamp()
      });
      
      // Log admin action
      await addDoc(collection(db, 'adminLogs'), {
        action: 'update_progress',
        applicationId: appId,
        newProgress,
        adminEmail: user.email,
        timestamp: serverTimestamp()
      });
      
      // Update local state
      setApplications(prev => prev.map(app => 
        app.id === appId ? { ...app, progress: newProgress } : app
      ));
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  };

  // Update application status
  const updateStatus = async (appId, newStatus) => {
    try {
      await updateDoc(doc(db, 'applications', appId), {
        status: newStatus,
        updatedAt: serverTimestamp()
      });
      
      // Log admin action
      await addDoc(collection(db, 'adminLogs'), {
        action: 'update_status',
        applicationId: appId,
        newStatus,
        adminEmail: user.email,
        timestamp: serverTimestamp()
      });
      
      // Update local state
      setApplications(prev => prev.map(app => 
        app.id === appId ? { ...app, status: newStatus } : app
      ));
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  // Save price changes to Firestore
  const savePrice = async (countryId, visaType, prices) => {
    setSaving(true);
    try {
      const priceDocRef = doc(db, 'visaPricing', `${countryId}_${visaType}`);
      await updateDoc(priceDocRef, {
        ...prices,
        updatedAt: serverTimestamp(),
        updatedBy: user.email
      });
      
      // Log admin action
      await addDoc(collection(db, 'adminLogs'), {
        action: 'update_price',
        countryId,
        visaType,
        prices,
        adminEmail: user.email,
        timestamp: serverTimestamp()
      });
      
      setEditingPrice(null);
      alert('Price updated successfully!');
    } catch (error) {
      console.error('Error saving price:', error);
      alert('Error saving price. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  // Loading state
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Not admin - will be redirected by useEffect
  if (!isAdmin(user)) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <ShieldAlert className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
          <p className="text-gray-600">You don't have permission to access this page</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center">
                <ShieldAlert className="w-10 h-10 mr-3 text-purple-600" />
                Admin Panel
              </h1>
              <p className="text-gray-600">Manage prices, applications, and user progress</p>
            </div>
            <button onClick={() => navigate('/')} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-all">
              Back to Home
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8 border-b border-gray-200">
          <div className="flex space-x-8">
            <button 
              onClick={() => setActiveTab('prices')}
              className={`pb-4 px-2 font-semibold transition-all ${activeTab === 'prices' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <DollarSign className="w-5 h-5 inline mr-2" />
              Price Management
            </button>
            <button 
              onClick={() => setActiveTab('applications')}
              className={`pb-4 px-2 font-semibold transition-all ${activeTab === 'applications' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <FileText className="w-5 h-5 inline mr-2" />
              Applications
            </button>
          </div>
        </div>

        {/* Price Management Tab */}
        {activeTab === 'prices' && (
          <div className="space-y-6">
            {getAllCountries().filter(country => country && country.visaTypes && country.visaTypes.length > 0).map(country => (
              <div key={country.id} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <img src={country.image} alt={country.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                  <h2 className="text-2xl font-bold text-gray-900">{country.name}</h2>
                </div>
                
                <div className="space-y-4">
                  {country.visaTypes.map(visa => {
                    if (!visa || !visa.type) return null;
                    
                    const isEditing = editingPrice === `${country.id}_${visa.type}`;
                    const currentPrices = priceData[`${country.id}_${visa.type}`] || {
                      governmentFee: visa.governmentFee || 0,
                      serviceFee: visa.serviceFee || 0,
                      fastTrackFee: visa.fastTrackFee || 0
                    };
                    
                    return (
                      <div key={visa.type} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-lg text-gray-900">{visa.type}</h3>
                          {!isEditing && (
                            <button 
                              onClick={() => {
                                setEditingPrice(`${country.id}_${visa.type}`);
                                setPriceData({
                                  ...priceData,
                                  [`${country.id}_${visa.type}`]: {
                                    governmentFee: visa.governmentFee,
                                    serviceFee: visa.serviceFee,
                                    fastTrackFee: visa.fastTrackFee || 0
                                  }
                                });
                              }}
                              className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                            >
                              <Edit className="w-4 h-4 inline mr-1" />
                              Edit
                            </button>
                          )}
                        </div>
                        
                        {isEditing ? (
                          <div className="space-y-3">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Government Fee ($)</label>
                              <input 
                                type="number"
                                value={currentPrices.governmentFee}
                                onChange={(e) => setPriceData({
                                  ...priceData,
                                  [`${country.id}_${visa.type}`]: {
                                    ...currentPrices,
                                    governmentFee: parseInt(e.target.value) || 0
                                  }
                                })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Service Fee ($)</label>
                              <input 
                                type="number"
                                value={currentPrices.serviceFee}
                                onChange={(e) => setPriceData({
                                  ...priceData,
                                  [`${country.id}_${visa.type}`]: {
                                    ...currentPrices,
                                    serviceFee: parseInt(e.target.value) || 0
                                  }
                                })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Fast Track Fee ($)</label>
                              <input 
                                type="number"
                                value={currentPrices.fastTrackFee}
                                onChange={(e) => setPriceData({
                                  ...priceData,
                                  [`${country.id}_${visa.type}`]: {
                                    ...currentPrices,
                                    fastTrackFee: parseInt(e.target.value) || 0
                                  }
                                })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                              />
                            </div>
                            <div className="flex space-x-3">
                              <button 
                                onClick={() => savePrice(country.id, visa.type, currentPrices)}
                                disabled={saving}
                                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-all disabled:opacity-50"
                              >
                                <Save className="w-4 h-4 inline mr-1" />
                                {saving ? 'Saving...' : 'Save'}
                              </button>
                              <button 
                                onClick={() => setEditingPrice(null)}
                                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold transition-all"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="text-gray-600">Government Fee:</span>
                              <span className="font-semibold text-gray-900 ml-2">${visa.governmentFee}</span>
                            </div>
                            <div>
                              <span className="text-gray-600">Service Fee:</span>
                              <span className="font-semibold text-gray-900 ml-2">${visa.serviceFee}</span>
                            </div>
                            <div>
                              <span className="text-gray-600">Fast Track:</span>
                              <span className="font-semibold text-gray-900 ml-2">${visa.fastTrackFee || 0}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Applications Tab */}
        {activeTab === 'applications' && (
          <div className="space-y-6">
            {applications.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <FileText className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600 text-lg">No applications yet</p>
              </div>
            ) : (
              applications.map(app => {
                const country = getCountryById(app.countryId);
                return (
                  <div key={app.id} className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        {country && (
                          <img src={country.image} alt={country.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                        )}
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{app.destination || country?.name}</h3>
                          <p className="text-gray-600">{app.visaType}</p>
                          <p className="text-sm text-gray-500">User: {app.userEmail}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2 ${
                          app.status === 'approved' ? 'bg-green-100 text-green-700' :
                          app.status === 'processing' ? 'bg-blue-100 text-blue-700' :
                          app.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {app.status}
                        </div>
                        <p className="text-sm text-gray-600">ID: {app.id.slice(0, 8)}</p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Progress</span>
                        <span className="text-sm font-bold text-purple-600">{app.progress || 0}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-500"
                          style={{ width: `${app.progress || 0}%` }}
                        />
                      </div>
                    </div>

                    {/* Admin Controls */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Update Status</label>
                        <select 
                          value={app.status}
                          onChange={(e) => updateStatus(app.id, e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="pending">Pending</option>
                          <option value="processing">Processing</option>
                          <option value="approved">Approved</option>
                          <option value="rejected">Rejected</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Update Progress</label>
                        <input 
                          type="number"
                          min="0"
                          max="100"
                          value={app.progress || 0}
                          onChange={(e) => updateProgress(app.id, parseInt(e.target.value) || 0)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="0-100"
                        />
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Main App
function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
      alert("Failed to sign in. Please try again.");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="font-sans text-gray-900 bg-gray-50 min-h-screen selection:bg-blue-100 selection:text-blue-900">
        <Navbar user={user} onLogin={handleGoogleLogin} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/profile" element={<ProfilePage user={user} />} />
          <Route path="/dashboard" element={<DashboardPage user={user} />} />
          <Route path="/settings" element={<SettingsPage user={user} onLogout={handleLogout} />} />
          <Route path="/admin" element={<AdminPanel user={user} />} />
          <Route path="/:country" element={<CountryVisaView />} />
          <Route path="/:country/:visaType" element={<VisaDetailsView />} />
          <Route path="/:country/:visaType/apply" element={<ApplicationView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
