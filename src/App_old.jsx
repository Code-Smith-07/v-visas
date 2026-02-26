import React, { useState, useEffect } from 'react';
import { 
  Search, User, Menu, ChevronRight, CheckCircle2, Clock, 
  FileText, Shield, ArrowLeft, Plus, Minus, Info, 
  MapPin, Calendar, Check
} from 'lucide-react';

// --- MOCK DATA ---
const DESTINATIONS = [
  {
    id: 'uae',
    name: 'United Arab Emirates',
    title: 'Dubai (UAE) Visa for Indians',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
    tag: '53K+ Visas on Time',
    basePrice: 6750,
    fastPrice: 9990,
    type: 'E-Visa',
    processing: '2 days',
    lengthOfStay: '30 days',
    validity: '60 days',
    entry: 'Single',
    guaranteedDate: '27 Feb 2026',
    fastDate: '26 Feb 2026'
  },
  {
    id: 'thailand',
    name: 'Thailand',
    title: 'Thailand Visa for Indians',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800',
    tag: '32K+ Visas on Time',
    basePrice: 3500,
    type: 'E-Visa',
    processing: '4 days'
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    title: 'Switzerland Schengen Visa',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800',
    tag: '30K+ Visas on Time',
    basePrice: 7500,
    type: 'Sticker Visa',
    processing: '15 days'
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    title: 'Vietnam Visa for Indians',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800',
    tag: '27K+ Visas on Time',
    basePrice: 2500,
    type: 'E-Visa',
    processing: '3 days'
  },
  {
    id: 'germany',
    name: 'Germany',
    title: 'Germany Visa for Indians',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800',
    tag: '6K+ Visas on Time',
    basePrice: 8000,
    type: 'Sticker Visa',
    processing: '28 days'
  },
  {
    id: 'japan',
    name: 'Japan',
    title: 'Japan Visa for Indians',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
    tag: '15K+ Visas on Time',
    basePrice: 4500,
    type: 'Sticker Visa',
    processing: '7 days'
  }
];

// --- COMPONENTS ---

const Navbar = ({ onViewChange }) => (
  <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-3 shadow-sm flex justify-between items-center">
    <div 
      className="flex items-center space-x-3 cursor-pointer"
      onClick={() => onViewChange('home')}
    >
      <div className="font-bold text-2xl tracking-tight text-cyan-600">V-Visas</div>
      <div className="text-[10px] font-semibold tracking-wider text-cyan-700 uppercase leading-tight border-l-2 border-cyan-600 pl-2">
        Visas On<br/>Time
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <div className="hidden md:flex items-center text-sm font-medium text-gray-600 bg-emerald-50 px-3 py-1.5 rounded-full">
        <Shield className="w-4 h-4 text-emerald-600 mr-1" />
        On Time Guaranteed
      </div>
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <User className="w-5 h-5 text-gray-700" />
      </button>
      <button className="p-2 md:hidden hover:bg-gray-100 rounded-full">
        <Menu className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  </nav>
);

const HomeView = ({ onSelectDestination }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 pt-16 pb-24 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Get Your Visa on Time
          </h1>
          
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full pl-12 pr-4 py-4 rounded-2xl text-lg shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Search for a destination..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {DESTINATIONS.map((dest) => (
            <div 
              key={dest.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all cursor-pointer group"
              onClick={() => onSelectDestination(dest)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center shadow-lg">
                  {dest.tag}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-900 mb-1">{dest.name}</h3>
                <p className="text-sm text-gray-500 flex items-center">
                  Get on {dest.guaranteedDate || 'Standard Time'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DestinationDetailsView = ({ destination, onStartApplication }) => {
  const [travellers, setTravellers] = useState(1);
  const [timelineType, setTimelineType] = useState('standard'); // 'standard' or 'fast'

  const currentPrice = timelineType === 'fast' ? destination.fastPrice || destination.basePrice : destination.basePrice;
  const totalAmount = currentPrice * travellers;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Detail Hero */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src={destination.image} 
          alt={destination.name} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4 max-w-3xl">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Visa guaranteed in {destination.processing}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{destination.title}</h1>
          <button 
            onClick={onStartApplication}
            className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all shadow-lg hover:shadow-xl"
          >
            Check Required Documents
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        
        {/* Left Column - Info */}
        <div className="lg:w-2/3 space-y-8">
          
          {/* Visa Information Cards */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{destination.name} Visa Information</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <FileText className="w-6 h-6 text-gray-400 mb-2" />
                <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Visa Type</span>
                <span className="font-semibold text-gray-900">{destination.type}</span>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <Clock className="w-6 h-6 text-gray-400 mb-2" />
                <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Length of Stay</span>
                <span className="font-semibold text-gray-900">{destination.lengthOfStay || 'Varies'}</span>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <Calendar className="w-6 h-6 text-gray-400 mb-2" />
                <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Validity</span>
                <span className="font-semibold text-gray-900">{destination.validity || 'Varies'}</span>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <MapPin className="w-6 h-6 text-gray-400 mb-2" />
                <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Entry</span>
                <span className="font-semibold text-gray-900">{destination.entry || 'Multiple'}</span>
              </div>
            </div>
          </section>

          {/* Timeline Selection */}
          {destination.guaranteedDate && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                Get a Guaranteed Visa on
              </h2>
              <div className="space-y-4">
                {/* Standard Timeline Option */}
                <div 
                  className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                    timelineType === 'standard' ? 'border-cyan-600 bg-cyan-50/50 shadow-md' : 'border-gray-200 bg-white hover:border-cyan-300'
                  }`}
                  onClick={() => setTimelineType('standard')}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block">In {destination.processing}</span>
                      <div className="text-lg font-bold text-gray-900">{destination.guaranteedDate}</div>
                      <div className="text-sm text-gray-500 flex items-center mt-1">
                        <Clock className="w-4 h-4 mr-1" /> View Timeline
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      timelineType === 'standard' ? 'bg-gradient-to-r from-cyan-600 to-cyan-700' : 'border-2 border-gray-300'
                    }`}>
                      {timelineType === 'standard' && <Check className="w-4 h-4 text-white" />}
                    </div>
                  </div>
                </div>

                {/* Fast Track Option (if available) */}
                {destination.fastDate && (
                  <div 
                    className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                      timelineType === 'fast' ? 'border-cyan-600 bg-cyan-50/50 shadow-md' : 'border-gray-200 bg-white hover:border-cyan-300'
                    }`}
                    onClick={() => setTimelineType('fast')}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-xs font-bold text-cyan-700 bg-cyan-100 px-2 py-0.5 rounded uppercase tracking-wider mb-1 inline-block">1 day faster</span>
                        <div className="text-lg font-bold text-gray-900">{destination.fastDate}</div>
                      </div>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        timelineType === 'fast' ? 'bg-gradient-to-r from-cyan-600 to-cyan-700' : 'border-2 border-gray-300'
                      }`}>
                        {timelineType === 'fast' && <Check className="w-4 h-4 text-white" />}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}
        </div>

        {/* Right Column - Sticky Pricing Card */}
        <div className="lg:w-1/3 relative">
          <div className="sticky top-24 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden border border-gray-100">
            {/* Guarantee Header */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center text-sm font-medium text-gray-700">
                <Shield className="w-4 h-4 text-cyan-600 mr-2" />
                Guaranteed by {timelineType === 'fast' ? destination.fastDate : destination.guaranteedDate || 'estimated time'}
              </div>
            </div>

            <div className="p-6">
              {/* Traveller Counter */}
              <div className="flex justify-between items-center mb-8">
                <span className="font-semibold text-gray-800">Travellers</span>
                <div className="flex items-center space-x-4 bg-gray-50 rounded-full px-2 py-1 border border-gray-100">
                  <button 
                    onClick={() => setTravellers(Math.max(1, travellers - 1))}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:shadow-sm transition-all"
                    disabled={travellers <= 1}
                  >
                    <Minus className={`w-4 h-4 ${travellers <= 1 ? 'text-gray-300' : 'text-gray-600'}`} />
                  </button>
                  <span className="font-semibold text-lg w-4 text-center">{travellers}</span>
                  <button 
                    onClick={() => setTravellers(travellers + 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:shadow-sm transition-all"
                  >
                    <Plus className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Pricing breakdown */}
              <div className="mb-6">
                <div className="flex items-end mb-1">
                  <span className="text-4xl font-bold text-gray-900 tracking-tight">₹{currentPrice.toLocaleString()}</span>
                </div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">TO BE PAID NOW</div>
              </div>

              {/* Action Button */}
              <button 
                onClick={onStartApplication}
                className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white font-semibold py-4 rounded-2xl text-lg transition-all shadow-md hover:shadow-lg mb-6 flex items-center justify-center"
              >
                Start Application <ChevronRight className="w-5 h-5 ml-1" />
              </button>

              {/* Fee Breakdown Details */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 rounded-full bg-gray-300 mr-2"></div>
                    Government fee
                  </div>
                  <span className="font-medium text-sm text-gray-900">₹{(destination.basePrice * 0.4).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 rounded-full bg-cyan-600 mr-2"></div>
                    V-Visas Fees
                  </div>
                  <span className="font-medium text-sm text-gray-900">₹{(destination.basePrice * 0.6).toLocaleString()}</span>
                </div>
              </div>

              {/* Total Box */}
              <div className="bg-gray-50 rounded-2xl p-4 flex justify-between items-center border border-gray-100">
                <div className="font-bold text-gray-900">Total Amount</div>
                <div className="font-bold text-lg text-gray-900">₹{totalAmount.toLocaleString()}</div>
              </div>

              {/* V-Visas Protect Banner */}
              <div className="mt-4 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-2xl p-4 flex items-start">
                <Shield className="w-5 h-5 text-cyan-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm text-gray-900 mb-1">V-Visas Protect Included</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    If Visa Delayed — No V-Visas Fee.<br/>
                    If Rejected — 100% Refund.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Application Flow Stages
const FlowStart = ({ onNext }) => (
  <div className="flex flex-col items-center justify-center h-[60vh]">
    <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Welcome to your application</h2>
    <div className="w-full max-w-md space-y-4">
      <button 
        onClick={onNext}
        className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white py-4 rounded-2xl font-semibold text-lg transition-all shadow-md hover:shadow-lg"
      >
        Start New Application
      </button>
      <button 
        className="w-full bg-white border-2 border-gray-200 text-gray-700 py-4 rounded-2xl font-semibold text-lg hover:border-gray-300 transition-colors"
      >
        Resume Application
      </button>
    </div>
  </div>
);

const FlowNameInput = ({ onNext }) => {
  const [name, setName] = useState('');
  
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] max-w-lg mx-auto w-full px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900 tracking-tight">
        Let's start with your full name
      </h2>
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value.toUpperCase())}
        className="w-full text-center text-3xl font-bold text-cyan-600 border-b-2 border-gray-200 focus:border-cyan-600 pb-4 bg-transparent outline-none placeholder-gray-300 transition-colors"
        placeholder="ENTER FULL NAME"
        autoFocus
      />
      <button 
        onClick={() => name.trim() && onNext()}
        disabled={!name.trim()}
        className={`mt-12 w-full py-4 rounded-2xl font-semibold text-lg transition-all ${
          name.trim() 
            ? 'bg-gray-900 text-white hover:bg-black shadow-lg' 
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        Continue <ChevronRight className="inline w-5 h-5" />
      </button>
    </div>
  );
};

const FlowDocuments = ({ onComplete }) => (
  <div className="max-w-2xl mx-auto px-4 py-12 w-full">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">The Essential Documents</h2>
      <p className="text-gray-500">These are as per the official embassy requirements.</p>
    </div>

    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-8 relative">
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
         <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 text-cyan-700 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl border-4 border-gray-50 shadow-md">
           U
         </div>
      </div>
      
      <div className="text-center mt-6 mb-6">
        <h3 className="font-bold text-lg">Main Traveler</h3>
        <p className="text-sm text-gray-500">0/2 docs uploaded</p>
      </div>

      <div className="space-y-4">
        <div className="border-2 border-dashed border-gray-200 rounded-2xl p-4 flex items-center justify-between hover:border-cyan-400 cursor-pointer transition-colors bg-gray-50">
          <div className="flex items-center">
            <User className="w-6 h-6 text-gray-400 mr-3" />
            <span className="font-semibold text-gray-700">Photo</span>
          </div>
          <Plus className="w-5 h-5 text-gray-400" />
        </div>
        
        <div className="border-2 border-dashed border-gray-200 rounded-2xl p-4 flex items-center justify-between hover:border-cyan-400 cursor-pointer transition-colors bg-gray-50">
          <div className="flex items-center">
            <FileText className="w-6 h-6 text-gray-400 mr-3" />
            <span className="font-semibold text-gray-700">Passport</span>
          </div>
          <Plus className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>

    <button 
      onClick={onComplete}
      className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white font-semibold py-4 rounded-2xl text-lg transition-all shadow-md hover:shadow-lg"
    >
      Proceed to checkout
    </button>
  </div>
);

const ApplicationFlowView = ({ destination, onBack }) => {
  const [step, setStep] = useState(1); // 1: Start, 2: Name, 3: Docs

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50/50 via-white to-blue-50/30 flex flex-col">
      {/* Flow Header */}
      <div className="px-4 py-4 flex items-center justify-between border-b border-gray-100 bg-white/50 backdrop-blur-sm sticky top-0 z-10">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <div className="flex flex-col items-center">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{destination.name}</span>
        </div>
        <div className="w-10"></div> {/* Spacer for centering */}
      </div>

      {/* Flow Content */}
      <div className="flex-1 flex items-center justify-center">
        {step === 1 && <FlowStart onNext={() => setStep(2)} />}
        {step === 2 && <FlowNameInput onNext={() => setStep(3)} />}
        {step === 3 && <FlowDocuments onComplete={() => alert('Proceeding to checkout simulation...')} />}
      </div>
    </div>
  );
};


// --- MAIN APP COMPONENT ---
export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'details', 'apply'
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleSelectDestination = (dest) => {
    setSelectedDestination(dest);
    setCurrentView('details');
    window.scrollTo(0, 0);
  };

  const handleStartApplication = () => {
    setCurrentView('apply');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedDestination(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="font-sans text-gray-900 bg-gray-50 min-h-screen selection:bg-cyan-100 selection:text-cyan-900">
      {currentView !== 'apply' && <Navbar onViewChange={handleBackToHome} />}
      
      {currentView === 'home' && (
        <HomeView onSelectDestination={handleSelectDestination} />
      )}
      
      {currentView === 'details' && selectedDestination && (
        <DestinationDetailsView 
          destination={selectedDestination} 
          onStartApplication={handleStartApplication}
        />
      )}

      {currentView === 'apply' && selectedDestination && (
        <ApplicationFlowView 
          destination={selectedDestination}
          onBack={() => setCurrentView('details')}
        />
      )}
    </div>
  );
}