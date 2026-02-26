import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { 
  Search, User, Menu, ChevronRight, CheckCircle2, Clock, 
  FileText, Shield, ArrowLeft, Plus, Minus, MapPin, Calendar, 
  Check, Plane, GraduationCap, Home, Briefcase, SearchIcon
} from 'lucide-react';
import { VISA_TYPES, VISA_DATA, calculatePrice, getVisasByType, getVisaByTypeAndCountry } from './visaData';

// Icon mapping
const iconMap = {
  Plane,
  GraduationCap,
  Home,
  Briefcase,
  SearchIcon
};

const getIcon = (iconName, className = "w-4 h-4") => {
  const IconComponent = iconMap[iconName];
  return IconComponent ? <IconComponent className={className} /> : null;
};

// Navbar
const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-3 shadow-sm flex justify-between items-center">
    <Link to="/" className="flex items-center space-x-3">
      <div className="font-bold text-2xl tracking-tight text-cyan-600">V-Visas</div>
      <div className="text-[10px] font-semibold tracking-wider text-cyan-700 uppercase leading-tight border-l-2 border-cyan-600 pl-2">
        Visas On<br/>Time
      </div>
    </Link>
    <div className="flex items-center space-x-4">
      <div className="hidden md:flex items-center text-sm font-medium text-gray-600 bg-emerald-50 px-3 py-1.5 rounded-full">
        <Shield className="w-4 h-4 text-emerald-600 mr-1" />
        On Time Guaranteed
      </div>
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <User className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  </nav>
);

// Visa Type Selector
const VisaTypeSelector = ({ selectedType }) => {
  const types = Object.values(VISA_TYPES);
  return (
    <div className="bg-white border-b border-gray-100 sticky top-[60px] z-40">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex overflow-x-auto space-x-3 pb-2">
          <Link to="/" className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-medium whitespace-nowrap transition-all ${!selectedType ? 'bg-gradient-to-r from-cyan-600 to-cyan-700 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            <Plane className="w-4 h-4" /><span>All Visas</span>
          </Link>
          {types.map((type) => (
            <Link key={type.slug} to={`/${type.slug}`} className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-medium whitespace-nowrap transition-all ${selectedType === type.slug ? 'bg-gradient-to-r from-cyan-600 to-cyan-700 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              {getIcon(type.icon)}<span>{type.name}</span>
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
};

// Visa Card
const VisaCard = ({ visa, visaType }) => {
  const navigate = useNavigate();
  const pricing = calculatePrice(visa, 1, false);
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all cursor-pointer group" onClick={() => navigate(`/${visaType}/${visa.countryId}`)}>
      <div className="relative h-48 overflow-hidden">
        <img src={visa.image} alt={visa.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute bottom-3 left-3 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">{visa.tag}</div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-900 mb-1">{visa.name}</h3>
        <p className="text-sm text-gray-500 mb-3">{visa.processing} • {visa.type}</p>
        <div className="flex items-baseline justify-between">
          <div><span className="text-xs text-gray-500">From</span><div className="text-2xl font-bold text-cyan-600">₹{pricing.total.toLocaleString()}</div></div>
          <button className="text-cyan-600 hover:text-cyan-700 font-semibold text-sm">View →</button>
        </div>
      </div>
    </div>
  );
};

// Home View
const HomeView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 pt-16 pb-24 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Your Gateway to Global Opportunities</h1>
          <p className="text-cyan-50 text-lg mb-8">Tourist • Study • PR • Work • Job Seeker Visas</p>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none"><Search className="h-5 w-5 text-gray-400" /></div>
            <input type="text" className="w-full pl-12 pr-4 py-4 rounded-2xl text-lg shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Search for a destination or visa type..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>
      </div>
      <VisaTypeSelector />
      <div className="max-w-7xl mx-auto px-4 py-12">
        {Object.entries(VISA_DATA).map(([typeSlug, visas]) => {
          const typeInfo = VISA_TYPES[typeSlug];
          if (!typeInfo) return null;
          return (
            <section key={typeSlug} className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <div><h2 className="text-3xl font-bold text-gray-900 flex items-center"><span className="mr-3">{getIcon(typeInfo.icon, 'w-8 h-8')}</span>{typeInfo.name}</h2><p className="text-gray-600 mt-1">{typeInfo.description}</p></div>
                <Link to={`/${typeSlug}`} className="text-cyan-600 hover:text-cyan-700 font-semibold flex items-center">View All <ChevronRight className="w-4 h-4 ml-1" /></Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {visas.slice(0, 4).map((visa) => (<VisaCard key={visa.id} visa={visa} visaType={typeSlug} />))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

// Visa Type List View
const VisaTypeListView = () => {
  const { visaType } = useParams();
  const visas = getVisasByType(visaType);
  const typeInfo = VISA_TYPES[visaType];
  if (!typeInfo) return <div className="text-center py-20">Visa type not found</div>;
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center text-cyan-100 mb-4"><Link to="/" className="hover:text-white">Home</Link><ChevronRight className="w-4 h-4 mx-2" /><span className="text-white">{typeInfo.name}</span></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center"><span className="mr-4">{getIcon(typeInfo.icon, 'w-10 h-10')}</span>{typeInfo.name}</h1>
          <p className="text-cyan-50 text-xl">{typeInfo.description}</p>
        </div>
      </div>
      <VisaTypeSelector selectedType={visaType} />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visas.map((visa) => (<VisaCard key={visa.id} visa={visa} visaType={visaType} />))}
        </div>
      </div>
    </div>
  );
};

// Destination Details View
const DestinationDetailsView = () => {
  const { visaType, countryId } = useParams();
  const navigate = useNavigate();
  const [travellers, setTravellers] = useState(1);
  const [timelineType, setTimelineType] = useState('standard');
  const visa = getVisaByTypeAndCountry(visaType, countryId);
  const typeInfo = VISA_TYPES[visaType];
  if (!visa) return <div className="text-center py-20">Visa not found</div>;
  const isFastTrack = timelineType === 'fast' && visa.fastTrackFee;
  const pricing = calculatePrice(visa, travellers, isFastTrack);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img src={visa.image} alt={visa.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 text-center text-white px-4 max-w-3xl">
          <div className="flex items-center justify-center text-cyan-200 mb-4"><Link to="/" className="hover:text-white">Home</Link><ChevronRight className="w-4 h-4 mx-2" /><Link to={`/${visaType}`} className="hover:text-white">{typeInfo.name}</Link><ChevronRight className="w-4 h-4 mx-2" /><span className="text-white">{visa.name}</span></div>
          <div className="inline-flex items-center bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium mb-4"><CheckCircle2 className="w-4 h-4 mr-2" />Visa guaranteed in {visa.processing}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{visa.title}</h1>
          <button onClick={() => navigate(`/${visaType}/${countryId}/apply`)} className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all shadowlg hover:shadow-xl">Start Application</button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3 space-y-8">
          <section><h2 className="text-2xl font-bold text-gray-900 mb-4">{visa.name} {typeInfo.name} Information</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center"><FileText className="w-6 h-6 text-gray-400 mb-2" /><span className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Visa Type</span><span className="font-semibold text-gray-900">{visa.type}</span></div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center"><Clock className="w-6 h-6 text-gray-400 mb-2" /><span className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Length of Stay</span><span className="font-semibold text-gray-900">{visa.lengthOfStay}</span></div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center"><Calendar className="w-6 h-6 text-gray-400 mb-2" /><span className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Validity</span><span className="font-semibold text-gray-900">{visa.validity}</span></div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center"><MapPin className="w-6 h-6 text-gray-400 mb-2" /><span className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Entry</span><span className="font-semibold text-gray-900">{visa.entry}</span></div>
            </div>
          </section>
          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"><h3 className="text-xl font-bold text-gray-900 mb-4">Required Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {visa.requirements.map((req, index) => (<div key={index} className="flex items-center text-gray-700"><Check className="w-5 h-5 text-cyan-600 mr-2 flex-shrink-0" /><span>{req}</span></div>))}
            </div>
          </section>
          {visa.guaranteedDate && (
            <section><h2 className="text-2xl font-bold text-gray-900 mb-4">Get a Guaranteed Visa on</h2>
              <div className="space-y-4">
                <div className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${timelineType === 'standard' ? 'border-cyan-600 bg-cyan-50/50 shadow-md' : 'border-gray-200 bg-white hover:border-cyan-300'}`} onClick={() => setTimelineType('standard')}>
                  <div className="flex justify-between items-center">
                    <div><span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block">In {visa.processing}</span><div className="text-lg font-bold text-gray-900">{visa.guaranteedDate}</div><div className="text-sm text-gray-500 flex items-center mt-1"><Clock className="w-4 h-4 mr-1" /> Standard Processing</div></div>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${timelineType === 'standard' ? 'bg-gradient-to-r from-cyan-600 to-cyan-700' : 'border-2 border-gray-300'}`}>{timelineType === 'standard' && <Check className="w-4 h-4 text-white" />}</div>
                  </div>
                </div>
                {visa.fastDate && visa.fastTrackFee && (
                  <div className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${timelineType === 'fast' ? 'border-cyan-600 bg-cyan-50/50 shadow-md' : 'border-gray-200 bg-white hover:border-cyan-300'}`} onClick={() => setTimelineType('fast')}>
                    <div className="flex justify-between items-center">
                      <div><span className="text-xs font-bold text-cyan-700 bg-cyan-100 px-2 py-0.5 rounded uppercase tracking-wider mb-1 inline-block">{visa.fastProcessing} - Faster!</span><div className="text-lg font-bold text-gray-900">{visa.fastDate}</div><div className="text-sm text-gray-500 flex items-center mt-1"><Clock className="w-4 h-4 mr-1" /> Fast Track (+₹{visa.fastTrackFee.toLocaleString()}/person)</div></div>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${timelineType === 'fast' ? 'bg-gradient-to-r from-cyan-600 to-cyan-700' : 'border-2 border-gray-300'}`}>{timelineType === 'fast' && <Check className="w-4 h-4 text-white" />}</div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}
        </div>
        <div className="lg:w-1/3 relative">
          <div className="sticky top-24 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden border border-gray-100">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100"><div className="flex items-center text-sm font-medium text-gray-700"><Shield className="w-4 h-4 text-cyan-600 mr-2" />Guaranteed by {timelineType === 'fast' ? visa.fastDate : visa.guaranteedDate}</div></div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-6"><span className="font-semibold text-gray-800">Travellers</span>
                <div className="flex items-center space-x-4 bg-gray-50 rounded-full px-2 py-1 border border-gray-100">
                  <button onClick={() => setTravellers(Math.max(1, travellers - 1))} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:shadow-sm transition-all" disabled={travellers <= 1}><Minus className={`w-4 h-4 ${travellers <= 1 ? 'text-gray-300' : 'text-gray-600'}`} /></button>
                  <span className="font-semibold text-lg w-8 text-center">{travellers}</span>
                  <button onClick={() => setTravellers(travellers + 1)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:shadow-sm transition-all"><Plus className="w-4 h-4 text-gray-600" /></button>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center text-sm"><span className="text-gray-600">Government Fee ({travellers}×₹{visa.governmentFee.toLocaleString()})</span><span className="font-medium text-gray-900">₹{pricing.governmentFee.toLocaleString()}</span></div>
                <div className="flex justify-between items-center text-sm"><span className="text-gray-600">V-Visas Service Fee ({travellers}×₹{visa.serviceFee.toLocaleString()})</span><span className="font-medium text-gray-900">₹{pricing.serviceFee.toLocaleString()}</span></div>
                {isFastTrack && (<div className="flex justify-between items-center text-sm"><span className="text-cyan-700">Fast Track Fee ({travellers}×₹{visa.fastTrackFee.toLocaleString()})</span><span className="font-medium text-cyan-700">₹{pricing.fastTrackFee.toLocaleString()}</span></div>)}
                {pricing.discount > 0 && (<div className="flex justify-between items-center text-sm pt-2 border-t border-gray-200"><span className="text-green-600 font-medium">{travellers >= 5 ? '15% Bulk Discount' : travellers >= 3 ? '10% Group Discount' : '5% Multi-Traveller Discount'}</span><span className="font-medium text-green-600">-₹{pricing.discount.toLocaleString()}</span></div>)}
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-4 mb-6 border border-cyan-200">
                <div className="flex justify-between items-center"><div><div className="text-xs text-gray-600 uppercase tracking-wider font-semibold mb-1">Total Amount</div><div className="text-3xl font-bold text-cyan-700">₹{pricing.total.toLocaleString()}</div><div className="text-xs text-gray-600 mt-1">For {travellers} {travellers === 1 ? 'traveller' : 'travellers'}</div></div></div>
              </div>
              <button onClick={() => navigate(`/${visaType}/${countryId}/apply`)} className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white font-semibold py-4 rounded-2xl text-lg transition-all shadow-md hover:shadow-lg mb-6 flex items-center justify-center">Start Application <ChevronRight className="w-5 h-5 ml-1" /></button>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-2xl p-4 flex items-start"><Shield className="w-5 h-5 text-cyan-600 mt-0.5 mr-3 flex-shrink-0" /><div><h4 className="font-semibold text-sm text-gray-900 mb-1">V-Visas Protect Included</h4><p className="text-xs text-gray-600 leading-relaxed">If Visa Delayed — No V-Visas Fee.<br/>If Rejected — 100% Refund.</p></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Application placeholder
const ApplicationView = () => {
  const { visaType, countryId } = useParams();
  const navigate = useNavigate();
  const visa = getVisaByTypeAndCountry(visaType, countryId);
  const typeInfo = VISA_TYPES[visaType];
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50/50 via-white to-blue-50/30 flex flex-col">
      <div className="px-4 py-4 flex items-center justify-between border-b border-gray-100 bg-white/50 backdrop-blur-sm">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><ArrowLeft className="w-6 h-6 text-gray-700" /></button>
        <div className="flex flex-col items-center"><span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{visa?.name} {typeInfo?.name}</span></div>
        <div className="w-10"></div>
      </div>
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Flow Coming Soon</h2>
          <p className="text-gray-600 mb-8">We're building an amazing application experience for {visa?.title}. This will include document upload, form filling, and payment processing.</p>
          <button onClick={() => navigate(-1)} className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all">Go Back</button>
        </div>
      </div>
    </div>
  );
};

// Main App
function App() {
  return (
    <BrowserRouter>
      <div className="font-sans text-gray-900 bg-gray-50 min-h-screen selection:bg-cyan-100 selection:text-cyan-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/:visaType" element={<VisaTypeListView />} />
          <Route path="/:visaType/:countryId" element={<DestinationDetailsView />} />
          <Route path="/:visaType/:countryId/apply" element={<ApplicationView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
