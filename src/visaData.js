// Visa data organized by type and country
export const VISA_TYPES = {
  tourist: {
    name: 'Tourist Visa',
    slug: 'tourist',
    icon: 'Plane',
    description: 'Explore the world with ease'
  },
  'study-visa': {
    name: 'Study Visa',
    slug: 'study-visa',
    icon: 'GraduationCap',
    description: 'Pursue your education abroad'
  },
  pr: {
    name: 'PR Visa',
    slug: 'pr',
    icon: 'Home',
    description: 'Permanent residency solutions'
  },
  'work-visa': {
    name: 'Work Visa', 
    slug: 'work-visa',
    icon: 'Briefcase',
    description: 'Build your career internationally'
  },
  'job-seeker': {
    name: 'Job Seeker Visa',
    slug: 'job-seeker',
    icon: 'SearchIcon',
    description: 'Find opportunities abroad'
  }
};

export const VISA_DATA = {
  // TOURIST VISAS
  tourist: [
    {
      id: 'uae-tourist',
      countryId: 'uae',
      name: 'United Arab Emirates',
      title: 'Dubai (UAE) Tourist Visa',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
      tag: '53K+ Visas on Time',
      governmentFee: 2700,
      serviceFee: 4050,
      fastTrackFee: 3240,
      type: 'E-Visa',
      processing: '2 days',
      fastProcessing: '1 day',
      lengthOfStay: '30 days',
      validity: '60 days',
      entry: 'Single',
      guaranteedDate: '27 Feb 2026',
      fastDate: '26 Feb 2026',
      requirements: ['Passport', 'Photo', 'Flight Tickets', 'Hotel Booking']
    },
    {
      id: 'thailand-tourist',
      countryId: 'thailand',
      name: 'Thailand',
      title: 'Thailand Tourist Visa',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800',
      tag: '32K+ Visas on Time',
      governmentFee: 1400,
      serviceFee: 2100,
      fastTrackFee: 1500,
      type: 'E-Visa',
      processing: '4 days',
      fastProcessing: '2 days',
      lengthOfStay: '30 days',
      validity: '90 days',
      entry: 'Single',
      guaranteedDate: '29 Feb 2026',
      fastDate: '27 Feb 2026',
      requirements: ['Passport', 'Photo', 'Bank Statement']
    },
    {
      id: 'switzerland-tourist',
      countryId: 'switzerland',
      name: 'Switzerland',
      title: 'Switzerland Schengen Tourist Visa',
      image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800',
      tag: '30K+ Visas on Time',
      governmentFee: 6000,
      serviceFee: 4500,
      type: 'Sticker Visa',
      processing: '15 days',
      lengthOfStay: '90 days',
      validity: '180 days',
      entry: 'Multiple',
      guaranteedDate: '12 Mar 2026',
      requirements: ['Passport', 'Photo', 'Travel Insurance', 'Bank Statement', 'Hotel Booking']
    },
    {
      id: 'vietnam-tourist',
      countryId: 'vietnam',
      name: 'Vietnam',
      title: 'Vietnam Tourist Visa',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800',
      tag: '27K+ Visas on Time',
      governmentFee: 1000,
      serviceFee: 1500,
      fastTrackFee: 1000,
      type: 'E-Visa',
      processing: '3 days',
      fastProcessing: '1 day',
      lengthOfStay: '30 days',
      validity: '30 days',
      entry: 'Single',
      guaranteedDate: '28 Feb 2026',
      fastDate: '26 Feb 2026',
      requirements: ['Passport', 'Photo']
    },
    {
      id: 'germany-tourist',
      countryId: 'germany',
      name: 'Germany',
      title: 'Germany Schengen Tourist Visa',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800',
      tag: '6K+ Visas on Time',
      governmentFee: 6400,
      serviceFee: 4800,
      type: 'Sticker Visa',
      processing: '28 days',
      lengthOfStay: '90 days',
      validity: '180 days',
      entry: 'Multiple',
      guaranteedDate: '25 Mar 2026',
      requirements: ['Passport', 'Photo', 'Travel Insurance', 'Bank Statement', 'Flight Tickets', 'Hotel Booking']
    },
    {
      id: 'japan-tourist',
      countryId: 'japan',
      name: 'Japan',
      title: 'Japan Tourist Visa',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
      tag: '15K+ Visas on Time',
      governmentFee: 2700,
      serviceFee: 2700,
      fastTrackFee: 1800,
      type: 'Sticker Visa',
      processing: '7 days',
      fastProcessing: '4 days',
      lengthOfStay: '15 days',
      validity: '90 days',
      entry: 'Single',
      guaranteedDate: '4 Mar 2026',
      fastDate: '29 Feb 2026',
      requirements: ['Passport', 'Photo', 'Bank Statement', 'Travel Itinerary']
    }
  ],

  // STUDY VISAS
  'study-visa': [
    {
      id: 'usa-study',
      countryId: 'usa',
      name: 'United States',
      title: 'USA F-1 Student Visa',
      image: 'https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?auto=format&fit=crop&q=80&w=800',
      tag: '12K+ Visas on Time',
      governmentFee: 12800,
      serviceFee: 15000,
      type: 'Sticker Visa',
      processing: '45 days',
      lengthOfStay: 'Course Duration',
      validity: '5 years',
      entry: 'Multiple',
      guaranteedDate: '12 Apr 2026',
      requirements: ['Passport', 'Photo', 'I-20 Form', 'Bank Statement', 'Academic Documents', 'SEVIS Fee Receipt']
    },
    {
      id: 'uk-study',
      countryId: 'uk',
      name: 'United Kingdom',
      title: 'UK Student Visa (Tier 4)',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800',
      tag: '8K+ Visas on Time',
      governmentFee: 28000,
      serviceFee: 18000,
      type: 'Sticker Visa',
      processing: '21 days',
      lengthOfStay: 'Course Duration + 4 months',
      validity: 'Course Duration',
      entry: 'Multiple',
      guaranteedDate: '18 Mar 2026',
      requirements: ['Passport', 'Photo', 'CAS Letter', 'Bank Statement', 'Academic Documents', 'TB Test Certificate']
    },
    {
      id: 'canada-study',
      countryId: 'canada',
      name: 'Canada',
      title: 'Canada Study Permit',
      image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80&w=800',
      tag: '15K+ Visas on Time',
      governmentFee: 11500,
      serviceFee: 12000,
      type: 'Study Permit',
      processing: '35 days',
      lengthOfStay: 'Course Duration',
      validity: 'Course Duration',
      entry: 'Multiple',
      guaranteedDate: '2 Apr 2026',
      requirements: ['Passport', 'Photo', 'Letter of Acceptance', 'Bank Statement', 'Academic Documents', 'Medical Exam']
    },
    {
      id: 'australia-study',
      countryId: 'australia',
      name: 'Australia',
      title: 'Australia Student Visa (500)',
      image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=800',
      tag: '10K+ Visas on Time',
      governmentFee: 47000,
      serviceFee: 15000,
      type: 'Student Visa',
      processing: '30 days',
      lengthOfStay: 'Course Duration + 2 months',
      validity: '5 years',
      entry: 'Multiple',
      guaranteedDate: '27 Mar 2026',
      requirements: ['Passport', 'Photo', 'CoE', 'OSHC', 'Bank Statement', 'Academic Documents', 'English Test (IELTS/PTE)']
    }
  ],

  // PR VISAS
  pr: [
    {
      id: 'canada-pr',
      countryId: 'canada',
      name: 'Canada',
      title: 'Canada PR - Express Entry',
      image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80&w=800',
      tag: 'Most Popular PR',
      governmentFee: 90000,
      serviceFee: 150000,
      type: 'Permanent Residency',
      processing: '6 months',
      lengthOfStay: 'Permanent',
      validity: 'Permanent',
      entry: 'Multiple',
      guaranteedDate: '25 Aug 2026',
      requirements: ['Passport', 'Photo', 'IELTS', 'ECA', 'Work Experience', 'Police Clearance', 'Medical Exam', 'Bank Statement']
    },
    {
      id: 'australia-pr',
      countryId: 'australia',
      name: 'Australia',
      title: 'Australia PR - Skilled Independent (189)',
      image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=800',
      tag: 'High Demand',
      governmentFee: 320000,
      serviceFee: 180000,
      type: 'Permanent Residency',
      processing: '12 months',
      lengthOfStay: 'Permanent',
      validity: 'Permanent',
      entry: 'Multiple',
      guaranteedDate: '25 Feb 2027',
      requirements: ['Passport', 'Photo', 'Skills Assessment', 'IELTS/PTE', 'Work Experience', 'Police Clearance', 'Medical Exam']
    },
    {
      id: 'germany-pr',
      countryId: 'germany',
      name: 'Germany',
      title: 'Germany PR - Blue Card',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800',
      tag: 'EU Access',
      governmentFee: 8500,
      serviceFee: 80000,
      type: 'EU Blue Card',
      processing: '90 days',
      lengthOfStay: 'Permanent',
      validity: '4 years (path to PR)',
      entry: 'Multiple',
      guaranteedDate: '26 May 2026',
      requirements: ['Passport', 'Photo', 'University Degree', 'Job Offer', 'German Language (A1)', 'Health Insurance']
    }
  ],

  // WORK VISAS
  'work-visa': [
    {
      id: 'usa-work',
      countryId: 'usa',
      name: 'United States',
      title: 'USA H-1B Work Visa',
      image: 'https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?auto=format&fit=crop&q=80&w=800',
      tag: 'Premium Processing Available',
      governmentFee: 38000,
      serviceFee: 45000,
      type: 'Work Visa',
      processing: '90 days',
      lengthOfStay: '3 years (extendable)',
      validity: '3 years',
      entry: 'Multiple',
      guaranteedDate: '26 May 2026',
      requirements: ['Passport', 'Photo', 'LCA', 'I-129 Petition', 'Job Offer', 'University Degree', 'Work Experience']
    },
    {
      id: 'uk-work',
      countryId: 'uk',
      name: 'United Kingdom',
      title: 'UK Skilled Worker Visa',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800',
      tag: 'Fast Processing',
      governmentFee: 52000,
      serviceFee: 28000,
      type: 'Work Visa',
      processing: '21 days',
      lengthOfStay: '5 years',
      validity: '5 years',
      entry: 'Multiple',
      guaranteedDate: '18 Mar 2026',
      requirements: ['Passport', 'Photo', 'CoS', 'Job Offer', 'English Test', 'Bank Statement', 'TB Test']
    },
    {
      id: 'germany-work',
      countryId: 'germany',
      name: 'Germany',
      title: 'Germany Work Visa',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800',
      tag: 'EU Work Rights',
      governmentFee: 6000,
      serviceFee: 35000,
      type: 'Work Visa',
      processing: '60 days',
      lengthOfStay: '4 years',
      validity: '4 years',
      entry: 'Multiple',
      guaranteedDate: '26 Apr 2026',
      requirements: ['Passport', 'Photo', 'Job Contract', 'University Degree', 'German Language (A1)', 'Health Insurance']
    },
    {
      id: 'uae-work',
      countryId: 'uae',
      name: 'United Arab Emirates',
      title: 'UAE Work Permit',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
      tag: 'Quick Processing',
      governmentFee: 4500,
      serviceFee: 8500,
      type: 'Work Permit',
      processing: '14 days',
      lengthOfStay: '2 years',
      validity: '2 years',
      entry: 'Multiple',
      guaranteedDate: '11 Mar 2026',
      requirements: ['Passport', 'Photo', 'Job Offer', 'Education Certificate Attested', 'Medical Test', 'Emirates ID']
    }
  ],

  // JOB SEEKER VISAS
  'job-seeker': [
    {
      id: 'germany-jobseeker',
      countryId: 'germany',
      name: 'Germany',
      title: 'Germany Job Seeker Visa',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800',
      tag: 'Find Jobs in EU',
      governmentFee: 6000,
      serviceFee: 25000,
      type: 'Job Seeker Visa',
      processing: '45 days',
      lengthOfStay: '6 months',
      validity: '6 months',
      entry: 'Single',
      guaranteedDate: '12 Apr 2026',
      requirements: ['Passport', 'Photo', 'University Degree', 'Bank Statement (€5,184)', 'Travel Insurance', 'CV', 'Cover Letter']
    },
    {
      id: 'austria-jobseeker',
      countryId: 'austria',
      name: 'Austria',
      title: 'Austria Job Seeker Visa',
      image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&q=80&w=800',
      tag: 'EU Opportunities',
      governmentFee: 12000,
      serviceFee: 22000,
      type: 'Job Seeker Visa',
      processing: '60 days',
      lengthOfStay: '6 months',
      validity: '6 months',
      entry: 'Single',
      guaranteedDate: '26 Apr 2026',
      requirements: ['Passport', 'Photo', 'University Degree', 'Bank Statement', 'Travel Insurance', 'Accommodation Proof']
    },
    {
      id: 'uae-jobseeker',
      countryId: 'uae',
      name: 'United Arab Emirates',
      title: 'UAE Job Seeker Visa',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
      tag: 'Gulf Opportunities',
      governmentFee: 5000,
      serviceFee: 7000,
      type: 'Job Seeker Visa',
      processing: '7 days',
      lengthOfStay: '60 days',
      validity: '60 days',
      entry: 'Single',
      guaranteedDate: '4 Mar 2026',
      requirements: ['Passport', 'Photo', 'University Degree', 'Bank Statement', 'CV']
    }
  ]
};

// Helper function to calculate total price
export const calculatePrice = (visa, travellers = 1, isFastTrack = false) => {
  const baseCost = visa.governmentFee + visa.serviceFee;
  const fastTrackCost = isFastTrack && visa.fastTrackFee ? visa.fastTrackFee : 0;
  const totalPerPerson = baseCost + fastTrackCost;
  
  // Volume discount for multiple travellers
  let discount = 0;
  if (travellers >= 5) {
    discount = 0.15; // 15% discount for 5+ travellers
  } else if (travellers >= 3) {
    discount = 0.10; // 10% discount for 3-4 travellers
  } else if (travellers >= 2) {
    discount = 0.05; // 5% discount for 2 travellers
  }
  
  const subtotal = totalPerPerson * travellers;
  const discountAmount = Math.round(subtotal * discount);
  const total = subtotal - discountAmount;
  
  return {
    governmentFee: visa.governmentFee * travellers,
    serviceFee: visa.serviceFee * travellers,
    fastTrackFee: fastTrackCost * travellers,
    subtotal,
    discount: discountAmount,
    total
  };
};

// Get all visas for a specific type
export const getVisasByType = (visaType) => {
  return VISA_DATA[visaType] || [];
};

// Get a specific visa by type and country
export const getVisaByTypeAndCountry = (visaType, countryId) => {
  const visas = VISA_DATA[visaType] || [];
  return visas.find(v => v.countryId === countryId);
};
