// Countries and their available visas
export const VISA_TYPES = {
  tourist: { name: 'Tourist Visa', icon: 'Plane', description: 'Explore the world with ease' },
  'study-visa': { name: 'Study Visa', icon: 'GraduationCap', description: 'Pursue your education abroad' },
  pr: { name: 'PR Visa', icon: 'Home', description: 'Permanent residency solutions' },
  'work-visa': { name: 'Work Visa', icon: 'Briefcase', description: 'Build your career internationally' },
  'job-seeker': { name: 'Job Seeker Visa', icon: 'SearchIcon', description: 'Find opportunities abroad' }
};

export const COUNTRIES_DATA = {
  uae: {
    id: 'uae',
    name: 'United Arab Emirates',
    shortName: 'UAE',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
    flag: '🇦🇪',
    region: 'Middle East',
    popularityTag: '53K+ Visas Processed',
    visas: {
      tourist: {
        id: 'uae-tourist',
        title: 'UAE Tourist Visa',
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
      'work-visa': {
        id: 'uae-work',
        title: 'UAE Work Permit',
        governmentFee: 4500,
        serviceFee: 8500,
        type: 'Work Permit',
        processing: '14 days',
        lengthOfStay: '2 years',
        validity: '2 years',
        entry: 'Multiple',
        guaranteedDate: '11 Mar 2026',
        requirements: ['Passport', 'Photo', 'Job Offer', 'Education Certificate Attested', 'Medical Test', 'Emirates ID']
      },
      'job-seeker': {
        id: 'uae-jobseeker',
        title: 'UAE Job Seeker Visa',
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
    }
  },
  thailand: {
    id: 'thailand',
    name: 'Thailand',
    shortName: 'Thailand',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800',
    flag: '🇹🇭',
    region: 'Southeast Asia',
    popularityTag: '32K+ Visas Processed',
    visas: {
      'study-visa': {
        id: 'thailand-study',
        title: 'Thailand Student Visa (ED)',
        governmentFee: 1500,
        serviceFee: 8000,
        type: 'Student Visa',
        processing: '14 days',
        lengthOfStay: '1 year (renewable)',
        validity: '1 year',
        entry: 'Multiple',
        guaranteedDate: '11 Mar 2026',
        requirements: ['Passport', 'Photo', 'Admission Letter', 'Bank Statement', 'Academic Documents', 'Medical Certificate']
      },
      tourist: {
        id: 'thailand-tourist',
        title: 'Thailand Tourist Visa',
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
      }
    }
  },
  usa: {
    id: 'usa',
    name: 'United States',
    shortName: 'USA',
    image: 'https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?auto=format&fit=crop&q=80&w=800',
    flag: '🇺🇸',
    region: 'North America',
    popularityTag: '25K+ Visas Processed',
    visas: {
      tourist: {
        id: 'usa-tourist',
        title: 'USA Tourist Visa (B1/B2)',
        governmentFee: 13600,
        serviceFee: 8000,
        type: 'Sticker Visa',
        processing: '30 days',
        lengthOfStay: '180 days',
        validity: '10 years',
        entry: 'Multiple',
        guaranteedDate: '27 Mar 2026',
        requirements: ['Passport', 'Photo', 'DS-160 Form', 'Interview Appointment', 'Bank Statement', 'Travel Itinerary', 'Employment Letter']
      },
      'study-visa': {
        id: 'usa-study',
        title: 'USA F-1 Student Visa',
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
      'work-visa': {
        id: 'usa-work',
        title: 'USA H-1B Work Visa',
        governmentFee: 38000,
        serviceFee: 45000,
        type: 'Work Visa',
        processing: '90 days',
        lengthOfStay: '3 years (extendable)',
        validity: '3 years',
        entry: 'Multiple',
        guaranteedDate: '26 May 2026',
        requirements: ['Passport', 'Photo', 'LCA', 'I-129 Petition', 'Job Offer', 'University Degree', 'Work Experience']
      }
    }
  },
  canada: {
    id: 'canada',
    name: 'Canada',
    shortName: 'Canada',
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80&w=800',
    flag: '🇨🇦',
    region: 'North America',
    popularityTag: '40K+ Visas Processed',
    visas: {
      tourist: {
        id: 'canada-tourist',
        title: 'Canada Visitor Visa',
        governmentFee: 7500,
        serviceFee: 6000,
        type: 'Visitor Visa',
        processing: '21 days',
        lengthOfStay: '6 months',
        validity: '10 years',
        entry: 'Multiple',
        guaranteedDate: '18 Mar 2026',
        requirements: ['Passport', 'Photo', 'Bank Statement', 'Travel Itinerary', 'Employment Letter', 'Travel History']
      },
      'study-visa': {
        id: 'canada-study',
        title: 'Canada Study Permit',
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
      'work-visa': {
        id: 'canada-work',
        title: 'Canada Work Permit',
        governmentFee: 11500,
        serviceFee: 18000,
        type: 'Work Permit',
        processing: '35 days',
        lengthOfStay: '2 years',
        validity: '2 years',
        entry: 'Multiple',
        guaranteedDate: '2 Apr 2026',
        requirements: ['Passport', 'Photo', 'LMIA', 'Job Offer', 'Educational Documents', 'Work Experience', 'Medical Exam']
      },
      pr: {
        id: 'canada-pr',
        title: 'Canada PR - Express Entry',
        governmentFee: 90000,
        serviceFee: 150000,
        type: 'Permanent Residency',
        processing: '6 months',
        lengthOfStay: 'Permanent',
        validity: 'Permanent',
        entry: 'Multiple',
        guaranteedDate: '25 Aug 2026',
        requirements: ['Passport', 'Photo', 'IELTS', 'ECA', 'Work Experience', 'Police Clearance', 'Medical Exam', 'Bank Statement']
      }
    }
  },
  australia: {
    id: 'australia',
    name: 'Australia',
    shortName: 'Australia',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=800',
    flag: '🇦🇺',
    region: 'Oceania',
    popularityTag: '35K+ Visas Processed',
    visas: {
      tourist: {
        id: 'australia-tourist',
        title: 'Australia Visitor Visa (600)',
        governmentFee: 11000,
        serviceFee: 7000,
        type: 'E-Visa',
        processing: '21 days',
        lengthOfStay: '90 days',
        validity: '1 year',
        entry: 'Multiple',
        guaranteedDate: '18 Mar 2026',
        requirements: ['Passport', 'Photo', 'Bank Statement', 'Travel Itinerary', 'Employment Letter', 'Health Insurance']
      },
      'study-visa': {
        id: 'australia-study',
        title: 'Australia Student Visa (500)',
        governmentFee: 47000,
        serviceFee: 15000,
        type: 'Student Visa',
        processing: '30 days',
        lengthOfStay: 'Course Duration + 2 months',
        validity: '5 years',
        entry: 'Multiple',
        guaranteedDate: '27 Mar 2026',
        requirements: ['Passport', 'Photo', 'CoE', 'OSHC', 'Bank Statement', 'Academic Documents', 'English Test (IELTS/PTE)']
      },
      'work-visa': {
        id: 'australia-work',
        title: 'Australia Temporary Skill Shortage (482)',
        governmentFee: 98000,
        serviceFee: 35000,
        type: 'Work Visa',
        processing: '60 days',
        lengthOfStay: '4 years',
        validity: '4 years',
        entry: 'Multiple',
        guaranteedDate: '26 Apr 2026',
        requirements: ['Passport', 'Photo', 'Skills Assessment', 'Nomination', 'English Test', 'Work Experience', 'Medical Exam']
      },
      pr: {
        id: 'australia-pr',
        title: 'Australia PR - Skilled Independent (189)',
        governmentFee: 320000,
        serviceFee: 180000,
        type: 'Permanent Residency',
        processing: '12 months',
        lengthOfStay: 'Permanent',
        validity: 'Permanent',
        entry: 'Multiple',
        guaranteedDate: '25 Feb 2027',
        requirements: ['Passport', 'Photo', 'Skills Assessment', 'IELTS/PTE', 'Work Experience', 'Police Clearance', 'Medical Exam']
      }
    }
  },
  uk: {
    id: 'uk',
    name: 'United Kingdom',
    shortName: 'UK',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800',
    flag: '🇬🇧',
    region: 'Europe',
    popularityTag: '28K+ Visas Processed',
    visas: {
      tourist: {
        id: 'uk-tourist',
        title: 'UK Standard Visitor Visa',
        governmentFee: 9500,
        serviceFee: 6500,
        type: 'Sticker Visa',
        processing: '21 days',
        lengthOfStay: '180 days',
        validity: '6 months',
        entry: 'Multiple',
        guaranteedDate: '18 Mar 2026',
        requirements: ['Passport', 'Photo', 'Bank Statement', 'Travel Itinerary', 'Hotel Booking', 'Employment Letter', 'TB Test']
      },
      'study-visa': {
        id: 'uk-study',
        title: 'UK Student Visa (Tier 4)',
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
      'work-visa': {
        id: 'uk-work',
        title: 'UK Skilled Worker Visa',
        governmentFee: 52000,
        serviceFee: 28000,
        type: 'Work Visa',
        processing: '21 days',
        lengthOfStay: '5 years',
        validity: '5 years',
        entry: 'Multiple',
        guaranteedDate: '18 Mar 2026',
        requirements: ['Passport', 'Photo', 'CoS', 'Job Offer', 'English Test', 'Bank Statement', 'TB Test']
      }
    }
  },
  germany: {
    id: 'germany',
    name: 'Germany',
    shortName: 'Germany',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800',
    flag: '🇩🇪',
    region: 'Europe',
    popularityTag: '22K+ Visas Processed',
    visas: {
      tourist: {
        id: 'germany-tourist',
        title: 'Germany Schengen Tourist Visa',
        governmentFee: 6000,
        serviceFee: 4500,
        type: 'Sticker Visa',
        processing: '15 days',
        lengthOfStay: '90 days (in 180 days)',
        validity: '180 days',
        entry: 'Multiple',
        guaranteedDate: '12 Mar 2026',
        requirements: ['Passport', 'Photo', 'Travel Insurance', 'Bank Statement', 'Flight Booking', 'Hotel Booking', 'Cover Letter']
      },
      'study-visa': {
        id: 'germany-study',
        title: 'Germany Student Visa',
        governmentFee: 6000,
        serviceFee: 30000,
        type: 'Student Visa',
        processing: '60 days',
        lengthOfStay: 'Course Duration',
        validity: 'Course Duration',
        entry: 'Multiple',
        guaranteedDate: '26 Apr 2026',
        requirements: ['Passport', 'Photo', 'Admission Letter', 'Blocked Account (€11,208)', 'Health Insurance', 'Academic Documents', 'German Language (A1/B1)']
      },
      'work-visa': {
        id: 'germany-work',
        title: 'Germany Work Visa',
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
      pr: {
        id: 'germany-pr',
        title: 'Germany PR - Blue Card',
        governmentFee: 8500,
        serviceFee: 80000,
        type: 'EU Blue Card',
        processing: '90 days',
        lengthOfStay: 'Permanent',
        validity: '4 years (path to PR)',
        entry: 'Multiple',
        guaranteedDate: '26 May 2026',
        requirements: ['Passport', 'Photo', 'University Degree', 'Job Offer', 'German Language (A1)', 'Health Insurance']
      },
      'job-seeker': {
        id: 'germany-jobseeker',
        title: 'Germany Job Seeker Visa',
        governmentFee: 6000,
        serviceFee: 25000,
        type: 'Job Seeker Visa',
        processing: '45 days',
        lengthOfStay: '6 months',
        validity: '6 months',
        entry: 'Single',
        guaranteedDate: '12 Apr 2026',
        requirements: ['Passport', 'Photo', 'University Degree', 'Bank Statement (€5,184)', 'Travel Insurance', 'CV', 'Cover Letter']
      }
    }
  },
  switzerland: {
    id: 'switzerland',
    name: 'Switzerland',
    shortName: 'Switzerland',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800',
    flag: '🇨🇭',
    region: 'Europe',
    popularityTag: '18K+ Visas Processed',
    visas: {
      'study-visa': {
        id: 'switzerland-study',
        title: 'Switzerland Student Visa',
        governmentFee: 8000,
        serviceFee: 28000,
        type: 'Student Visa',
        processing: '90 days',
        lengthOfStay: 'Course Duration',
        validity: 'Course Duration',
        entry: 'Multiple',
        guaranteedDate: '26 May 2026',
        requirements: ['Passport', 'Photo', 'Admission Letter', 'Bank Statement (CHF 21,000/year)', 'Health Insurance', 'Academic Documents', 'Motivation Letter']
      },
      tourist: {
        id: 'switzerland-tourist',
        title: 'Switzerland Schengen Tourist Visa',
        governmentFee: 6000,
        serviceFee: 4500,
        type: 'Sticker Visa',
        processing: '15 days',
        lengthOfStay: '90 days',
        validity: '180 days',
        entry: 'Multiple',
        guaranteedDate: '12 Mar 2026',
        requirements: ['Passport', 'Photo', 'Travel Insurance', 'Bank Statement', 'Hotel Booking']
      }
    }
  },
  vietnam: {
    id: 'vietnam',
    name: 'Vietnam',
    shortName: 'Vietnam',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800',
    flag: '🇻🇳',
    region: 'Southeast Asia',
    popularityTag: '20K+ Visas Processed',
    visas: {
      tourist: {
        id: 'vietnam-tourist',
        title: 'Vietnam Tourist Visa',
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
      }
    }
  },
  japan: {
    id: 'japan',
    name: 'Japan',
    shortName: 'Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
    flag: '🇯🇵',
    region: 'East Asia',
    popularityTag: '15K+ Visas Processed',
    visas: {
      'study-visa': {
        id: 'japan-study',
        title: 'Japan Student Visa',
        governmentFee: 2700,
        serviceFee: 18000,
        type: 'Student Visa',
        processing: '30 days',
        lengthOfStay: 'Course Duration',
        validity: 'Course Duration',
        entry: 'Multiple',
        guaranteedDate: '27 Mar 2026',
        requirements: ['Passport', 'Photo', 'CoE (Certificate of Eligibility)', 'Admission Letter', 'Bank Statement', 'Academic Documents', 'Guarantor Documents']
      },
      tourist: {
        id: 'japan-tourist',
        title: 'Japan Tourist Visa',
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
      },
      'work-visa': {
        id: 'japan-work',
        title: 'Japan Work Visa (Engineer/Specialist)',
        governmentFee: 2700,
        serviceFee: 22000,
        type: 'Work Visa',
        processing: '60 days',
        lengthOfStay: '5 years',
        validity: '5 years',
        entry: 'Multiple',
        guaranteedDate: '26 Apr 2026',
        requirements: ['Passport', 'Photo', 'CoE (Certificate of Eligibility)', 'Job Contract', 'University Degree', 'Work Experience']
      }
    }
  },
  austria: {
    id: 'austria',
    name: 'Austria',
    shortName: 'Austria',
    image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&q=80&w=800',
    flag: '🇦🇹',
    region: 'Europe',
    popularityTag: '8K+ Visas Processed',
    visas: {
      tourist: {
        id: 'austria-tourist',
        title: 'Austria Schengen Tourist Visa',
        governmentFee: 6000,
        serviceFee: 4500,
        type: 'Sticker Visa',
        processing: '15 days',
        lengthOfStay: '90 days (in 180 days)',
        validity: '180 days',
        entry: 'Multiple',
        guaranteedDate: '12 Mar 2026',
        requirements: ['Passport', 'Photo', 'Travel Insurance', 'Bank Statement', 'Flight Booking', 'Hotel Booking', 'Cover Letter']
      },
      'study-visa': {
        id: 'austria-study',
        title: 'Austria Student Visa',
        governmentFee: 7500,
        serviceFee: 24000,
        type: 'Student Visa',
        processing: '90 days',
        lengthOfStay: 'Course Duration',
        validity: 'Course Duration',
        entry: 'Multiple',
        guaranteedDate: '26 May 2026',
        requirements: ['Passport', 'Photo', 'Admission Letter', 'Bank Statement (€12,816/year)', 'Health Insurance', 'Academic Documents', 'Accommodation Proof']
      },
      'job-seeker': {
        id: 'austria-jobseeker',
        title: 'Austria Job Seeker Visa',
        governmentFee: 12000,
        serviceFee: 22000,
        type: 'Job Seeker Visa',
        processing: '60 days',
        lengthOfStay: '6 months',
        validity: '6 months',
        entry: 'Single',
        guaranteedDate: '26 Apr 2026',
        requirements: ['Passport', 'Photo', 'University Degree', 'Bank Statement', 'Travel Insurance', 'Accommodation Proof']
      }
    }
  },
  china: {
    id: 'china',
    name: 'China',
    shortName: 'China',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&q=80&w=800',
    flag: '🇨🇳',
    region: 'East Asia',
    popularityTag: '18K+ Visas Processed',
    visas: {
      tourist: {
        id: 'china-tourist',
        title: 'China Tourist Visa (L)',
        governmentFee: 6800,
        serviceFee: 3500,
        type: 'Sticker Visa',
        processing: '7 days',
        lengthOfStay: '30 days',
        validity: '3 months',
        entry: 'Single',
        guaranteedDate: '4 Mar 2026',
        requirements: ['Passport', 'Photo', 'Hotel Booking', 'Flight Tickets', 'Bank Statement', 'Travel Itinerary']
      },
      'work-visa': {
        id: 'china-work',
        title: 'China Work Visa (Z)',
        governmentFee: 8500,
        serviceFee: 18000,
        type: 'Work Permit',
        processing: '30 days',
        lengthOfStay: '1 year',
        validity: '1 year',
        entry: 'Multiple',
        guaranteedDate: '27 Mar 2026',
        requirements: ['Passport', 'Photo', 'Work Permit Notice', 'Invitation Letter', 'Health Certificate', 'Police Clearance']
      },
      'study-visa': {
        id: 'china-study',
        title: 'China Student Visa (X1)',
        governmentFee: 6800,
        serviceFee: 12000,
        type: 'Student Visa',
        processing: '14 days',
        lengthOfStay: 'Course Duration',
        validity: 'Course Duration',
        entry: 'Single',
        guaranteedDate: '11 Mar 2026',
        requirements: ['Passport', 'Photo', 'JW201/JW202 Form', 'Admission Letter', 'Physical Examination Report']
      }
    }
  },
  singapore: {
    id: 'singapore',
    name: 'Singapore',
    shortName: 'Singapore',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=800',
    flag: '🇸🇬',
    region: 'Southeast Asia',
    popularityTag: '45K+ Visas Processed',
    visas: {
      tourist: {
        id: 'singapore-tourist',
        title: 'Singapore Tourist Visa',
        governmentFee: 2500,
        serviceFee: 2000,
        fastTrackFee: 1500,
        type: 'E-Visa',
        processing: '3 days',
        fastProcessing: '1 day',
        lengthOfStay: '30 days',
        validity: '90 days',
        entry: 'Single',
        guaranteedDate: '28 Feb 2026',
        fastDate: '26 Feb 2026',
        requirements: ['Passport', 'Photo', 'Flight Tickets', 'Hotel Booking', 'Bank Statement']
      },
      'work-visa': {
        id: 'singapore-work',
        title: 'Singapore Employment Pass',
        governmentFee: 18500,
        serviceFee: 25000,
        type: 'Work Permit',
        processing: '21 days',
        lengthOfStay: '2 years',
        validity: '2 years',
        entry: 'Multiple',
        guaranteedDate: '18 Mar 2026',
        requirements: ['Passport', 'Photo', 'Job Offer', 'University Degree', 'Work Experience', 'Medical Exam']
      },
      'study-visa': {
        id: 'singapore-study',
        title: 'Singapore Student Pass',
        governmentFee: 2500,
        serviceFee: 8000,
        type: 'Student Pass',
        processing: '14 days',
        lengthOfStay: 'Course Duration',
        validity: 'Course Duration',
        entry: 'Multiple',
        guaranteedDate: '11 Mar 2026',
        requirements: ['Passport', 'Photo', 'IPA Letter', 'Admission Letter', 'Bank Statement', 'Medical Report']
      }
    }
  },
  'south-korea': {
    id: 'south-korea',
    name: 'South Korea',
    shortName: 'South Korea',
    image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&q=80&w=800',
    flag: '🇰🇷',
    region: 'East Asia',
    popularityTag: '15K+ Visas Processed',
    visas: {
      tourist: {
        id: 'korea-tourist',
        title: 'South Korea Tourist Visa',
        governmentFee: 3100,
        serviceFee: 2500,
        type: 'Sticker Visa',
        processing: '7 days',
        lengthOfStay: '90 days',
        validity: '3 months',
        entry: 'Single',
        guaranteedDate: '4 Mar 2026',
        requirements: ['Passport', 'Photo', 'Bank Statement', 'Flight Tickets', 'Hotel Booking', 'Travel Plan']
      },
      'study-visa': {
        id: 'korea-study',
        title: 'South Korea Student Visa (D-2)',
        governmentFee: 5000,
        serviceFee: 12000,
        type: 'Student Visa',
        processing: '14 days',
        lengthOfStay: 'Course Duration',
        validity: 'Course Duration',
        entry: 'Multiple',
        guaranteedDate: '11 Mar 2026',
        requirements: ['Passport', 'Photo', 'Certificate of Admission', 'Bank Statement', 'Academic Documents']
      },
      'work-visa': {
        id: 'korea-work',
        title: 'South Korea Work Visa (E-7)',
        governmentFee: 5000,
        serviceFee: 15000,
        type: 'Work Visa',
        processing: '21 days',
        lengthOfStay: '2 years',
        validity: '2 years',
        entry: 'Multiple',
        guaranteedDate: '18 Mar 2026',
        requirements: ['Passport', 'Photo', 'Certificate of Confirmation', 'Job Contract', 'University Degree', 'Health Certificate']
      }
    }
  },
  brazil: {
    id: 'brazil',
    name: 'Brazil',
    shortName: 'Brazil',
    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80&w=800',
    flag: '🇧🇷',
    region: 'South America',
    popularityTag: '8K+ Visas Processed',
    visas: {
      tourist: {
        id: 'brazil-tourist',
        title: 'Brazil Tourist Visa',
        governmentFee: 7700,
        serviceFee: 4500,
        type: 'E-Visa',
        processing: '10 days',
        lengthOfStay: '90 days',
        validity: '1 year',
        entry: 'Multiple',
        guaranteedDate: '7 Mar 2026',
        requirements: ['Passport', 'Photo', 'Bank Statement', 'Hotel Reservation', 'Flight Tickets']
      },
      'work-visa': {
        id: 'brazil-work',
        title: 'Brazil Work Visa (VITEM V)',
        governmentFee: 15000,
        serviceFee: 20000,
        type: 'Work Visa',
        processing: '30 days',
        lengthOfStay: '2 years',
        validity: '2 years',
        entry: 'Multiple',
        guaranteedDate: '27 Mar 2026',
        requirements: ['Passport', 'Photo', 'Work Authorization', 'Job Contract', 'Police Clearance', 'Health Certificate']
      }
    }
  },
  russia: {
    id: 'russia',
    name: 'Russia',
    shortName: 'Russia',
    image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80&w=800',
    flag: '🇷🇺',
    region: 'Europe/Asia',
    popularityTag: '12K+ Visas Processed',
    visas: {
      tourist: {
        id: 'russia-tourist',
        title: 'Russia Tourist Visa',
        governmentFee: 4600,
        serviceFee: 3500,
        type: 'Sticker Visa',
        processing: '10 days',
        lengthOfStay: '30 days',
        validity: '6 months',
        entry: 'Single',
        guaranteedDate: '7 Mar 2026',
        requirements: ['Passport', 'Photo', 'Tourist Voucher', 'Hotel Confirmation', 'Travel Insurance']
      },
      'work-visa': {
        id: 'russia-work',
        title: 'Russia Work Visa',
        governmentFee: 8500,
        serviceFee: 18000,
        type: 'Work Visa',
        processing: '30 days',
        lengthOfStay: '1 year',
        validity: '1 year',
        entry: 'Multiple',
        guaranteedDate: '27 Mar 2026',
        requirements: ['Passport', 'Photo', 'Work Invitation', 'Medical Certificate', 'HIV Test', 'Police Clearance']
      },
      'study-visa': {
        id: 'russia-study',
        title: 'Russia Student Visa',
        governmentFee: 5500,
        serviceFee: 12000,
        type: 'Student Visa',
        processing: '21 days',
        lengthOfStay: 'Course Duration',
        validity: '1 year',
        entry: 'Multiple',
        guaranteedDate: '18 Mar 2026',
        requirements: ['Passport', 'Photo', 'Invitation from University', 'Admission Letter', 'Medical Certificate', 'HIV Test']
      }
    }
  },
  egypt: {
    id: 'egypt',
    name: 'Egypt',
    shortName: 'Egypt',
    image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&q=80&w=800',
    flag: '🇪🇬',
    region: 'Middle East/Africa',
    popularityTag: '28K+ Visas Processed',
    visas: {
      tourist: {
        id: 'egypt-tourist',
        title: 'Egypt Tourist E-Visa',
        governmentFee: 2100,
        serviceFee: 1500,
        fastTrackFee: 1000,
        type: 'E-Visa',
        processing: '3 days',
        fastProcessing: '1 day',
        lengthOfStay: '30 days',
        validity: '90 days',
        entry: 'Single',
        guaranteedDate: '28 Feb 2026',
        fastDate: '26 Feb 2026',
        requirements: ['Passport', 'Photo', 'Flight Tickets', 'Hotel Booking']
      }
    }
  },
  turkey: {
    id: 'turkey',
    name: 'Turkey',
    shortName: 'Turkey',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800',
    flag: '🇹🇷',
    region: 'Europe/Asia',
    popularityTag: '35K+ Visas Processed',
    visas: {
      tourist: {
        id: 'turkey-tourist',
        title: 'Turkey E-Visa',
        governmentFee: 3900,
        serviceFee: 2000,
        fastTrackFee: 1500,
        type: 'E-Visa',
        processing: '2 days',
        fastProcessing: '1 day',
        lengthOfStay: '90 days',
        validity: '180 days',
        entry: 'Multiple',
        guaranteedDate: '27 Feb 2026',
        fastDate: '26 Feb 2026',
        requirements: ['Passport', 'Photo']
      },
      'study-visa': {
        id: 'turkey-study',
        title: 'Turkey Student Visa',
        governmentFee: 5000,
        serviceFee: 8000,
        type: 'Student Visa',
        processing: '21 days',
        lengthOfStay: 'Course Duration',
        validity: '1 year',
        entry: 'Multiple',
        guaranteedDate: '18 Mar 2026',
        requirements: ['Passport', 'Photo', 'Acceptance Letter', 'Bank Statement', 'Health Insurance']
      },
      'work-visa': {
        id: 'turkey-work',
        title: 'Turkey Work Permit',
        governmentFee: 12000,
        serviceFee: 15000,
        type: 'Work Permit',
        processing: '30 days',
        lengthOfStay: '1 year',
        validity: '1 year',
        entry: 'Multiple',
        guaranteedDate: '27 Mar 2026',
        requirements: ['Passport', 'Photo', 'Work Permit Approval', 'Job Contract', 'University Degree']
      }
    }
  },
  'new-zealand': {
    id: 'new-zealand',
    name: 'New Zealand',
    shortName: 'New Zealand',
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&q=80&w=800',
    flag: '🇳🇿',
    region: 'Oceania',
    popularityTag: '18K+ Visas Processed',
    visas: {
      tourist: {
        id: 'nz-tourist',
        title: 'New Zealand Visitor Visa',
        governmentFee: 21000,
        serviceFee: 8000,
        type: 'E-Visa',
        processing: '21 days',
        lengthOfStay: '90 days',
        validity: '18 months',
        entry: 'Multiple',
        guaranteedDate: '18 Mar 2026',
        requirements: ['Passport', 'Photo', 'Bank Statement', 'Travel Itinerary', 'Employment Letter', 'Health Insurance']
      },
      'study-visa': {
        id: 'nz-study',
        title: 'New Zealand Student Visa',
        governmentFee: 22000,
        serviceFee: 15000,
        type: 'Student Visa',
        processing: '30 days',
        lengthOfStay: 'Course Duration',
        validity: '4 years',
        entry: 'Multiple',
        guaranteedDate: '27 Mar 2026',
        requirements: ['Passport', 'Photo', 'Offer of Place', 'Bank Statement', 'Medical Certificate', 'Police Certificate']
      },
      'work-visa': {
        id: 'nz-work',
        title: 'New Zealand Work Visa',
        governmentFee: 40000,
        serviceFee: 25000,
        type: 'Work Visa',
        processing: '60 days',
        lengthOfStay: '3 years',
        validity: '3 years',
        entry: 'Multiple',
        guaranteedDate: '26 Apr 2026',
        requirements: ['Passport', 'Photo', 'Job Offer', 'Skills Assessment', 'Medical Certificate', 'Police Certificate']
      },
      pr: {
        id: 'nz-pr',
        title: 'New Zealand Skilled Migrant PR',
        governmentFee: 280000,
        serviceFee: 150000,
        type: 'Permanent Residency',
        processing: '12 months',
        lengthOfStay: 'Permanent',
        validity: 'Permanent',
        entry: 'Multiple',
        guaranteedDate: '25 Feb 2027',
        requirements: ['Passport', 'Photo', 'EOI', 'IELTS', 'Skills Assessment', 'Work Experience', 'Medical', 'Police Clearance']
      }
    }
  },
  'south-africa': {
    id: 'south-africa',
    name: 'South Africa',
    shortName: 'South Africa',
    image: 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?auto=format&fit=crop&q=80&w=800',
    flag: '🇿🇦',
    region: 'Africa',
    popularityTag: '12K+ Visas Processed',
    visas: {
      tourist: {
        id: 'sa-tourist',
        title: 'South Africa Tourist Visa',
        governmentFee: 4500,
        serviceFee: 3000,
        type: 'Sticker Visa',
        processing: '14 days',
        lengthOfStay: '90 days',
        validity: '3 months',
        entry: 'Single',
        guaranteedDate: '11 Mar 2026',
        requirements: ['Passport', 'Photo', 'Bank Statement', 'Flight Tickets', 'Hotel Booking', 'Yellow Fever Certificate']
      },
      'study-visa': {
        id: 'sa-study',
        title: 'South Africa Study Visa',
        governmentFee: 6000,
        serviceFee: 10000,
        type: 'Study Permit',
        processing: '30 days',
        lengthOfStay: 'Course Duration',
        validity: 'Course Duration',
        entry: 'Multiple',
        guaranteedDate: '27 Mar 2026',
        requirements: ['Passport', 'Photo', 'Admission Letter', 'Bank Statement', 'Medical Certificate', 'Police Clearance']
      },
      'work-visa': {
        id: 'sa-work',
        title: 'South Africa Work Visa',
        governmentFee: 8000,
        serviceFee: 15000,
        type: 'Work Permit',
        processing: '45 days',
        lengthOfStay: '5 years',
        validity: '5 years',
        entry: 'Multiple',
        guaranteedDate: '12 Apr 2026',
        requirements: ['Passport', 'Photo', 'Job Offer', 'Qualification Certificate', 'Medical Certificate', 'Police Clearance']
      }
    }
  },
  france: {
    id: 'france',
    name: 'France',
    shortName: 'France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800',
    flag: '🇫🇷',
    region: 'Europe',
    popularityTag: '32K+ Visas Processed',
    visas: {
      tourist: {
        id: 'france-tourist',
        title: 'France Schengen Tourist Visa',
        governmentFee: 6000,
        serviceFee: 4500,
        type: 'Sticker Visa',
        processing: '15 days',
        lengthOfStay: '90 days (in 180 days)',
        validity: '180 days',
        entry: 'Multiple',
        guaranteedDate: '12 Mar 2026',
        requirements: ['Passport', 'Photo', 'Travel Insurance', 'Bank Statement', 'Flight Booking', 'Hotel Booking', 'Cover Letter']
      },
      'study-visa': {
        id: 'france-study',
        title: 'France Student Visa',
        governmentFee: 4200,
        serviceFee: 18000,
        type: 'Student Visa',
        processing: '21 days',
        lengthOfStay: 'Course Duration',
        validity: 'Course Duration',
        entry: 'Multiple',
        guaranteedDate: '18 Mar 2026',
        requirements: ['Passport', 'Photo', 'Campus France Approval', 'Admission Letter', 'Bank Statement', 'Academic Documents', 'French Test']
      },
      'work-visa': {
        id: 'france-work',
        title: 'France Work Visa',
        governmentFee: 6500,
        serviceFee: 22000,
        type: 'Work Visa',
        processing: '30 days',
        lengthOfStay: '1 year',
        validity: '1 year',
        entry: 'Multiple',
        guaranteedDate: '27 Mar 2026',
        requirements: ['Passport', 'Photo', 'Work Authorization', 'Job Contract', 'Qualification Documents', 'Health Insurance']
      }
    }
  },
  spain: {
    id: 'spain',
    name: 'Spain',
    shortName: 'Spain',
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&q=80&w=800',
    flag: '🇪🇸',
    region: 'Europe',
    popularityTag: '28K+ Visas Processed',
    visas: {
      tourist: {
        id: 'spain-tourist',
        title: 'Spain Schengen Tourist Visa',
        governmentFee: 6000,
        serviceFee: 4500,
        type: 'Sticker Visa',
        processing: '15 days',
        lengthOfStay: '90 days (in 180 days)',
        validity: '180 days',
        entry: 'Multiple',
        guaranteedDate: '12 Mar 2026',
        requirements: ['Passport', 'Photo', 'Travel Insurance', 'Bank Statement', 'Flight Booking', 'Hotel Booking']
      },
      'study-visa': {
        id: 'spain-study',
        title: 'Spain Student Visa',
        governmentFee: 5000,
        serviceFee: 15000,
        type: 'Student Visa',
        processing: '30 days',
        lengthOfStay: 'Course Duration',
        validity: 'Course Duration',
        entry: 'Multiple',
        guaranteedDate: '27 Mar 2026',
        requirements: ['Passport', 'Photo', 'Admission Letter', 'Bank Statement', 'Health Insurance', 'Medical Certificate']
      },
      'work-visa': {
        id: 'spain-work',
        title: 'Spain Work Visa',
        governmentFee: 6500,
        serviceFee: 20000,
        type: 'Work Visa',
        processing: '45 days',
        lengthOfStay: '1 year',
        validity: '1 year',
        entry: 'Multiple',
        guaranteedDate: '12 Apr 2026',
        requirements: ['Passport', 'Photo', 'Work Authorization', 'Job Contract', 'University Degree', 'Health Insurance']
      }
    }
  },
  italy: {
    id: 'italy',
    name: 'Italy',
    shortName: 'Italy',
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&q=80&w=800',
    flag: '🇮🇹',
    region: 'Europe',
    popularityTag: '26K+ Visas Processed',
    visas: {
      tourist: {
        id: 'italy-tourist',
        title: 'Italy Schengen Tourist Visa',
        governmentFee: 6000,
        serviceFee: 4500,
        type: 'Sticker Visa',
        processing: '15 days',
        lengthOfStay: '90 days (in 180 days)',
        validity: '180 days',
        entry: 'Multiple',
        guaranteedDate: '12 Mar 2026',
        requirements: ['Passport', 'Photo', 'Travel Insurance', 'Bank Statement', 'Flight Booking', 'Hotel Booking']
      },
      'study-visa': {
        id: 'italy-study',
        title: 'Italy Student Visa',
        governmentFee: 4200,
        serviceFee: 16000,
        type: 'Student Visa',
        processing: '30 days',
        lengthOfStay: 'Course Duration',
        validity: 'Course Duration',
        entry: 'Multiple',
        guaranteedDate: '27 Mar 2026',
        requirements: ['Passport', 'Photo', 'Declaration of Value', 'Admission Letter', 'Bank Statement', 'Health Insurance']
      },
      'work-visa': {
        id: 'italy-work',
        title: 'Italy Work Visa',
        governmentFee: 6500,
        serviceFee: 19000,
        type: 'Work Visa',
        processing: '60 days',
        lengthOfStay: '1 year',
        validity: '1 year',
        entry: 'Multiple',
        guaranteedDate: '26 Apr 2026',
        requirements: ['Passport', 'Photo', 'Nulla Osta', 'Job Contract', 'Qualification Documents']
      }
    }
  },
  netherlands: {
    id: 'netherlands',
    name: 'Netherlands',
    shortName: 'Netherlands',
    image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&q=80&w=800',
    flag: '🇳🇱',
    region: 'Europe',
    popularityTag: '22K+ Visas Processed',
    visas: {
      tourist: {
        id: 'netherlands-tourist',
        title: 'Netherlands Schengen Tourist Visa',
        governmentFee: 6000,
        serviceFee: 4500,
        type: 'Sticker Visa',
        processing: '15 days',
        lengthOfStay: '90 days (in 180 days)',
        validity: '180 days',
        entry: 'Multiple',
        guaranteedDate: '12 Mar 2026',
        requirements: ['Passport', 'Photo', 'Travel Insurance', 'Bank Statement', 'Flight Booking', 'Hotel Booking']
      },
      'study-visa': {
        id: 'netherlands-study',
        title: 'Netherlands Student Visa (MVV)',
        governmentFee: 27000,
        serviceFee: 18000,
        type: 'Student Visa',
        processing: '90 days',
        lengthOfStay: 'Course Duration',
        validity: 'Course Duration',
        entry: 'Multiple',
        guaranteedDate: '26 May 2026',
        requirements: ['Passport', 'Photo', 'Admission Letter', 'NUFFIC Certificate', 'Bank Statement', 'Tuberculosis Test']
      },
      'work-visa': {
        id: 'netherlands-work',
        title: 'Netherlands Highly Skilled Migrant Visa',
        governmentFee: 35000,
        serviceFee: 25000,
        type: 'Work Visa',
        processing: '90 days',
        lengthOfStay: '5 years',
        validity: '5 years',
        entry: 'Multiple',
        guaranteedDate: '26 May 2026',
        requirements: ['Passport', 'Photo', 'Job Offer', 'University Degree', 'Salary Requirements', 'Tuberculosis Test']
      }
    }
  },
  malaysia: {
    id: 'malaysia',
    name: 'Malaysia',
    shortName: 'Malaysia',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=800',
    flag: '🇲🇾',
    region: 'Southeast Asia',
    popularityTag: 'Visa Free',
    visas: {
      'study-visa': {
        id: 'malaysia-study',
        title: 'Malaysia Student Pass',
        governmentFee: 2500,
        serviceFee: 6000,
        type: 'Student Pass',
        processing: '30 days',
        lengthOfStay: 'Course Duration',
        validity: 'Course Duration',
        entry: 'Multiple',
        guaranteedDate: '27 Mar 2026',
        requirements: ['Passport', 'Photo', 'Admission Letter', 'Bank Statement', 'Medical Report', 'EMGS Approval']
      },
      'work-visa': {
        id: 'malaysia-work',
        title: 'Malaysia Employment Pass',
        governmentFee: 8500,
        serviceFee: 12000,
        type: 'Employment Pass',
        processing: '45 days',
        lengthOfStay: '2 years',
        validity: '2 years',
        entry: 'Multiple',
        guaranteedDate: '12 Apr 2026',
        requirements: ['Passport', 'Photo', 'Job Offer', 'University Degree', 'Work Experience', 'Medical Exam']
      }
    }
  },
  philippines: {
    id: 'philippines',
    name: 'Philippines',
    shortName: 'Philippines',
    image: 'https://images.unsplash.com/photo-1555217851-6141535bd771?auto=format&fit=crop&q=80&w=800',
    flag: '🇵🇭',
    region: 'Southeast Asia',
    popularityTag: '15K+ Visas Processed',
    visas: {
      tourist: {
        id: 'philippines-tourist',
        title: 'Philippines Tourist Visa',
        governmentFee: 5700,
        serviceFee: 3500,
        type: 'Sticker Visa',
        processing: '7 days',
        lengthOfStay: '59 days',
        validity: '3 months',
        entry: 'Single',
        guaranteedDate: '4 Mar 2026',
        requirements: ['Passport', 'Photo', 'Bank Statement', 'Flight Tickets', 'Hotel Booking']
      },
      'work-visa': {
        id: 'philippines-work',
        title: 'Philippines Work Visa (9G)',
        governmentFee: 12000,
        serviceFee: 18000,
        type: 'Work Visa',
        processing: '60 days',
        lengthOfStay: '1 year',
        validity: '1 year',
        entry: 'Multiple',
        guaranteedDate: '26 Apr 2026',
        requirements: ['Passport', 'Photo', 'AEP', 'Job Contract', 'NBI Clearance', 'Medical Certificate']
      }
    }
  },
  'saudi-arabia': {
    id: 'saudi-arabia',
    name: 'Saudi Arabia',
    shortName: 'Saudi Arabia',
    image: 'https://images.moneycontrol.com/static-mcnews/2025/06/20250601181453_Hajj.jpg?impolicy=website&width=770&height=431',
    flag: '🇸🇦',
    region: 'Middle East',
    popularityTag: '38K+ Visas Processed',
    visas: {
      tourist: {
        id: 'saudi-tourist',
        title: 'Saudi Arabia Tourist E-Visa',
        governmentFee: 9000,
        serviceFee: 4000,
        fastTrackFee: 3000,
        type: 'E-Visa',
        processing: '3 days',
        fastProcessing: '1 day',
        lengthOfStay: '90 days',
        validity: '1 year',
        entry: 'Multiple',
        guaranteedDate: '28 Feb 2026',
        fastDate: '26 Feb 2026',
        requirements: ['Passport', 'Photo', 'Travel Insurance', 'Hotel Booking']
      },
      'work-visa': {
        id: 'saudi-work',
        title: 'Saudi Arabia Work Visa',
        governmentFee: 8000,
        serviceFee: 15000,
        type: 'Work Visa',
        processing: '21 days',
        lengthOfStay: '2 years',
        validity: '2 years',
        entry: 'Multiple',
        guaranteedDate: '18 Mar 2026',
        requirements: ['Passport', 'Photo', 'Block Visa Number', 'Job Contract', 'Medical Report', 'Police Clearance']
      }
    }
  },
  mexico: {
    id: 'mexico',
    name: 'Mexico',
    shortName: 'Mexico',
    image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&q=80&w=800',
    flag: '🇲🇽',
    region: 'North America',
    popularityTag: '10K+ Visas Processed',
    visas: {
      tourist: {
        id: 'mexico-tourist',
        title: 'Mexico Tourist Visa',
        governmentFee: 3000,
        serviceFee: 2500,
        type: 'Sticker Visa',
        processing: '10 days',
        lengthOfStay: '180 days',
        validity: '6 months',
        entry: 'Multiple',
        guaranteedDate: '7 Mar 2026',
        requirements: ['Passport', 'Photo', 'Bank Statement', 'Flight Tickets', 'Hotel Booking', 'Invitation Letter']
      },
      'work-visa': {
        id: 'mexico-work',
        title: 'Mexico Temporary Resident Work Visa',
        governmentFee: 8000,
        serviceFee: 12000,
        type: 'Work Visa',
        processing: '30 days',
        lengthOfStay: '1 year',
        validity: '1 year',
        entry: 'Multiple',
        guaranteedDate: '27 Mar 2026',
        requirements: ['Passport', 'Photo', 'Job Offer', 'Work Authorization', 'Bank Statement']
      }
    }
  },
  israel: {
    id: 'israel',
    name: 'Israel',
    shortName: 'Israel',
    image: 'https://cdn.wallpapersafari.com/28/61/rRhwD0.jpg',
    flag: '🇮🇱',
    region: 'Middle East',
    popularityTag: '8K+ Visas Processed',
    visas: {
      tourist: {
        id: 'israel-tourist',
        title: 'Israel Tourist Visa (B/2)',
        governmentFee: 2500,
        serviceFee: 2000,
        type: 'Sticker Visa',
        processing: '14 days',
        lengthOfStay: '90 days',
        validity: '10 years',
        entry: 'Multiple',
        guaranteedDate: '11 Mar 2026',
        requirements: ['Passport', 'Photo', 'Bank Statement', 'Hotel Confirmation', 'Travel Insurance']
      },
      'work-visa': {
        id: 'israel-work',
        title: 'Israel Work Visa (B/1)',
        governmentFee: 9000,
        serviceFee: 18000,
        type: 'Work Visa',
        processing: '60 days',
        lengthOfStay: '5 years',
        validity: '5 years',
        entry: 'Multiple',
        guaranteedDate: '26 Apr 2026',
        requirements: ['Passport', 'Photo', 'Work Permit', 'Job Contract', 'Police Clearance', 'Medical Certificate']
      }
    }
  },
  kenya: {
    id: 'kenya',
    name: 'Kenya',
    shortName: 'Kenya',
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80&w=800',
    flag: '🇰🇪',
    region: 'Africa',
    popularityTag: '22K+ Visas Processed',
    visas: {
      tourist: {
        id: 'kenya-tourist',
        title: 'Kenya E-Visa',
        governmentFee: 2800,
        serviceFee: 1800,
        fastTrackFee: 1200,
        type: 'E-Visa',
        processing: '3 days',
        fastProcessing: '1 day',
        lengthOfStay: '90 days',
        validity: '3 months',
        entry: 'Single',
        guaranteedDate: '28 Feb 2026',
        fastDate: '26 Feb 2026',
        requirements: ['Passport', 'Photo', 'Hotel Booking', 'Flight Tickets', 'Yellow Fever Certificate']
      },
      'work-visa': {
        id: 'kenya-work',
        title: 'Kenya Work Permit',
        governmentFee: 25000,
        serviceFee: 30000,
        type: 'Work Permit',
        processing: '90 days',
        lengthOfStay: '2 years',
        validity: '2 years',
        entry: 'Multiple',
        guaranteedDate: '26 May 2026',
        requirements: ['Passport', 'Photo', 'Job Offer', 'Work Permit Approval', 'Academic Certificates', 'Medical Certificate']
      }
    }
  },
  morocco: {
    id: 'morocco',
    name: 'Morocco',
    shortName: 'Morocco',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&q=80&w=800',
    flag: '🇲🇦',
    region: 'Africa',
    popularityTag: '12K+ Visas Processed',
    visas: {
      tourist: {
        id: 'morocco-tourist',
        title: 'Morocco Tourist Visa',
        governmentFee: 7300,
        serviceFee: 4000,
        type: 'Sticker Visa',
        processing: '10 days',
        lengthOfStay: '90 days',
        validity: '3 months',
        entry: 'Single',
        guaranteedDate: '7 Mar 2026',
        requirements: ['Passport', 'Photo', 'Bank Statement', 'Hotel Booking', 'Flight Tickets']
      }
    }
  },
  cambodia: {
    id: 'cambodia',
    name: 'Cambodia',
    shortName: 'Cambodia',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800',
    flag: '🇰🇭',
    region: 'Southeast Asia',
    popularityTag: '18K+ Visas Processed',
    visas: {
      tourist: {
        id: 'cambodia-tourist',
        title: 'Cambodia E-Visa',
        governmentFee: 2500,
        serviceFee: 1500,
        fastTrackFee: 1000,
        type: 'E-Visa',
        processing: '3 days',
        fastProcessing: '1 day',
        lengthOfStay: '30 days',
        validity: '3 months',
        entry: 'Single',
        guaranteedDate: '28 Feb 2026',
        fastDate: '26 Feb 2026',
        requirements: ['Passport', 'Photo']
      },
      'work-visa': {
        id: 'cambodia-work',
        title: 'Cambodia Business E-Visa',
        governmentFee: 3500,
        serviceFee: 5000,
        type: 'Business Visa',
        processing: '7 days',
        lengthOfStay: '1 year (renewable)',
        validity: '1 year',
        entry: 'Multiple',
        guaranteedDate: '4 Mar 2026',
        requirements: ['Passport', 'Photo', 'Business Letter', 'Work Permit']
      }
    }
  },
  portugal: {
    id: 'portugal',
    name: 'Portugal',
    shortName: 'Portugal',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&q=80&w=800',
    flag: '🇵🇹',
    region: 'Europe',
    popularityTag: '18K+ Visas Processed',
    visas: {
      tourist: {
        id: 'portugal-tourist',
        title: 'Portugal Schengen Tourist Visa',
        governmentFee: 6000,
        serviceFee: 4500,
        type: 'Sticker Visa',
        processing: '15 days',
        lengthOfStay: '90 days (in 180 days)',
        validity: '180 days',
        entry: 'Multiple',
        guaranteedDate: '12 Mar 2026',
        requirements: ['Passport', 'Photo', 'Travel Insurance', 'Bank Statement', 'Flight Booking', 'Hotel Booking']
      },
      'study-visa': {
        id: 'portugal-study',
        title: 'Portugal Student Visa',
        governmentFee: 6500,
        serviceFee: 15000,
        type: 'Student Visa',
        processing: '60 days',
        lengthOfStay: 'Course Duration',
        validity: 'Course Duration',
        entry: 'Multiple',
        guaranteedDate: '26 Apr 2026',
        requirements: ['Passport', 'Photo', 'Admission Letter', 'Bank Statement', 'Health Insurance', 'Accommodation Proof']
      },
      'work-visa': {
        id: 'portugal-work',
        title: 'Portugal Work Visa',
        governmentFee: 8000,
        serviceFee: 18000,
        type: 'Work Visa',
        processing: '90 days',
        lengthOfStay: '1 year',
        validity: '1 year',
        entry: 'Multiple',
        guaranteedDate: '26 May 2026',
        requirements: ['Passport', 'Photo', 'Job Offer', 'Work Authorization', 'University Degree', 'Health Insurance']
      }
    }
  },
  belgium: {
    id: 'belgium',
    name: 'Belgium',
    shortName: 'Belgium',
    image: 'https://i.pinimg.com/1200x/e0/3b/53/e03b53945824a1a90c56bca3278f83e5.jpg',
    flag: '🇧🇪',
    region: 'Europe',
    popularityTag: '22K+ Visas Processed',
    visas: {
      tourist: {
        id: 'belgium-tourist',
        title: 'Belgium Schengen Tourist Visa',
        governmentFee: 6000,
        serviceFee: 5000,
        type: 'Sticker Visa',
        processing: '15 days',
        lengthOfStay: '90 days (in 180 days)',
        validity: '180 days',
        entry: 'Multiple',
        guaranteedDate: '12 Mar 2026',
        requirements: ['Passport', 'Photo', 'Travel Insurance', 'Bank Statement', 'Flight Booking', 'Hotel Booking']
      }
    }
  },
  sweden: {
    id: 'sweden',
    name: 'Sweden',
    shortName: 'Sweden',
    image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&q=80&w=800',
    flag: '🇸🇪',
    region: 'Europe',
    popularityTag: '24K+ Visas Processed',
    visas: {
      tourist: {
        id: 'sweden-tourist',
        title: 'Sweden Schengen Tourist Visa',
        governmentFee: 6000,
        serviceFee: 5500,
        type: 'Sticker Visa',
        processing: '15 days',
        lengthOfStay: '90 days (in 180 days)',
        validity: '180 days',
        entry: 'Multiple',
        guaranteedDate: '12 Mar 2026',
        requirements: ['Passport', 'Photo', 'Travel Insurance', 'Bank Statement', 'Flight Booking', 'Hotel Booking']
      },
      'work-visa': {
        id: 'sweden-work',
        title: 'Sweden Work Permit',
        governmentFee: 12000,
        serviceFee: 20000,
        type: 'Work Permit',
        processing: '90 days',
        lengthOfStay: '2 years',
        validity: '2 years',
        entry: 'Multiple',
        guaranteedDate: '26 May 2026',
        requirements: ['Passport', 'Photo', 'Job Offer', 'Work Permit', 'Health Insurance']
      }
    }
  },
  norway: {
    id: 'norway',
    name: 'Norway',
    shortName: 'Norway',
    image: 'https://images.unsplash.com/photo-1601439678777-b2b3c56fa627?auto=format&fit=crop&q=80&w=800',
    flag: '🇳🇴',
    region: 'Europe',
    popularityTag: '19K+ Visas Processed',
    visas: {
      tourist: {
        id: 'norway-tourist',
        title: 'Norway Schengen Tourist Visa',
        governmentFee: 6000,
        serviceFee: 5800,
        type: 'Sticker Visa',
        processing: '15 days',
        lengthOfStay: '90 days (in 180 days)',
        validity: '180 days',
        entry: 'Multiple',
        guaranteedDate: '12 Mar 2026',
        requirements: ['Passport', 'Photo', 'Travel Insurance', 'Bank Statement', 'Flight Booking', 'Hotel Booking']
      },
      'work-visa': {
        id: 'norway-work',
        title: 'Norway Work Permit',
        governmentFee: 15000,
        serviceFee: 22000,
        type: 'Work Permit',
        processing: '90 days',
        lengthOfStay: '1 year',
        validity: '1 year',
        entry: 'Multiple',
        guaranteedDate: '26 May 2026',
        requirements: ['Passport', 'Photo', 'Job Offer', 'Work Permit Approval']
      }
    }
  },
  denmark: {
    id: 'denmark',
    name: 'Denmark',
    shortName: 'Denmark',
    image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&q=80&w=800',
    flag: '🇩🇰',
    region: 'Europe',
    popularityTag: '21K+ Visas Processed',
    visas: {
      tourist: {
        id: 'denmark-tourist',
        title: 'Denmark Schengen Tourist Visa',
        governmentFee: 6000,
        serviceFee: 5300,
        type: 'Sticker Visa',
        processing: '15 days',
        lengthOfStay: '90 days (in 180 days)',
        validity: '180 days',
        entry: 'Multiple',
        guaranteedDate: '12 Mar 2026',
        requirements: ['Passport', 'Photo', 'Travel Insurance', 'Bank Statement', 'Flight Booking', 'Hotel Booking']
      }
    }
  },
  finland: {
    id: 'finland',
    name: 'Finland',
    shortName: 'Finland',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80&w=800',
    flag: '🇫🇮',
    region: 'Europe',
    popularityTag: '17K+ Visas Processed',
    visas: {
      tourist: {
        id: 'finland-tourist',
        title: 'Finland Schengen Tourist Visa',
        governmentFee: 6000,
        serviceFee: 5400,
        type: 'Sticker Visa',
        processing: '15 days',
        lengthOfStay: '90 days (in 180 days)',
        validity: '180 days',
        entry: 'Multiple',
        guaranteedDate: '12 Mar 2026',
        requirements: ['Passport', 'Photo', 'Travel Insurance', 'Bank Statement', 'Flight Booking', 'Hotel Booking']
      }
    }
  },
  iceland: {
    id: 'iceland',
    name: 'Iceland',
    shortName: 'Iceland',
    image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&q=80&w=800',
    flag: '🇮🇸',
    region: 'Europe',
    popularityTag: '12K+ Visas Processed',
    visas: {
      tourist: {
        id: 'iceland-tourist',
        title: 'Iceland Schengen Tourist Visa',
        governmentFee: 6000,
        serviceFee: 6000,
        type: 'Sticker Visa',
        processing: '15 days',
        lengthOfStay: '90 days (in 180 days)',
        validity: '180 days',
        entry: 'Multiple',
        guaranteedDate: '12 Mar 2026',
        requirements: ['Passport', 'Photo', 'Travel Insurance', 'Bank Statement', 'Flight Booking', 'Hotel Booking']
      }
    }
  },
  ireland: {
    id: 'ireland',
    name: 'Ireland',
    shortName: 'Ireland',
    image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&q=80&w=800',
    flag: '🇮🇪',
    region: 'Europe',
    popularityTag: '26K+ Visas Processed',
    visas: {
      tourist: {
        id: 'ireland-tourist',
        title: 'Ireland Visit Visa',
        governmentFee: 6000,
        serviceFee: 5500,
        type: 'Visit Visa',
        processing: '21 days',
        lengthOfStay: '90 days',
        validity: '90 days',
        entry: 'Single',
        guaranteedDate: '18 Mar 2026',
        requirements: ['Passport', 'Photo', 'Travel Insurance', 'Bank Statement', 'Flight Booking', 'Hotel Booking']
      },
      'study-visa': {
        id: 'ireland-study',
        title: 'Ireland Student Visa',
        governmentFee: 6000,
        serviceFee: 14000,
        type: 'Student Visa',
        processing: '60 days',
        lengthOfStay: 'Course Duration',
        validity: 'Course Duration',
        entry: 'Multiple',
        guaranteedDate: '26 Apr 2026',
        requirements: ['Passport', 'Photo', 'Admission Letter', 'Proof of Fees', 'Bank Statement', 'Health Insurance']
      }
    }
  },
  greece: {
    id: 'greece',
    name: 'Greece',
    shortName: 'Greece',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=800',
    flag: '🇬🇷',
    region: 'Europe',
    popularityTag: '35K+ Visas Processed',
    visas: {
      tourist: {
        id: 'greece-tourist',
        title: 'Greece Schengen Tourist Visa',
        governmentFee: 6000,
        serviceFee: 4500,
        type: 'Sticker Visa',
        processing: '15 days',
        lengthOfStay: '90 days (in 180 days)',
        validity: '180 days',
        entry: 'Multiple',
        guaranteedDate: '12 Mar 2026',
        requirements: ['Passport', 'Photo', 'Travel Insurance', 'Bank Statement', 'Flight Booking', 'Hotel Booking']
      }
    }
  },
  poland: {
    id: 'poland',
    name: 'Poland',
    shortName: 'Poland',
    image: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&q=80&w=800',
    flag: '🇵🇱',
    region: 'Europe',
    popularityTag: '30K+ Visas Processed',
    visas: {
      tourist: {
        id: 'poland-tourist',
        title: 'Poland Schengen Tourist Visa',
        governmentFee: 6000,
        serviceFee: 4200,
        type: 'Sticker Visa',
        processing: '15 days',
        lengthOfStay: '90 days (in 180 days)',
        validity: '180 days',
        entry: 'Multiple',
        guaranteedDate: '12 Mar 2026',
        requirements: ['Passport', 'Photo', 'Travel Insurance', 'Bank Statement', 'Flight Booking', 'Hotel Booking']
      },
      'work-visa': {
        id: 'poland-work',
        title: 'Poland Work Permit',
        governmentFee: 7000,
        serviceFee: 12000,
        type: 'Work Permit',
        processing: '60 days',
        lengthOfStay: '1 year',
        validity: '1 year',
        entry: 'Multiple',
        guaranteedDate: '26 Apr 2026',
        requirements: ['Passport', 'Photo', 'Job Offer', 'Work Permit']
      }
    }
  },
  czechrepublic: {
    id: 'czechrepublic',
    name: 'Czech Republic',
    shortName: 'Czech Rep.',
    image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&q=80&w=800',
    flag: '🇨🇿',
    region: 'Europe',
    popularityTag: '23K+ Visas Processed',
    visas: {
      tourist: {
        id: 'czechrepublic-tourist',
        title: 'Czech Republic Schengen Tourist Visa',
        governmentFee: 6000,
        serviceFee: 4500,
        type: 'Sticker Visa',
        processing: '15 days',
        lengthOfStay: '90 days (in 180 days)',
        validity: '180 days',
        entry: 'Multiple',
        guaranteedDate: '12 Mar 2026',
        requirements: ['Passport', 'Photo', 'Travel Insurance', 'Bank Statement', 'Flight Booking', 'Hotel Booking']
      }
    }
  },
  hungary: {
    id: 'hungary',
    name: 'Hungary',
    shortName: 'Hungary',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800',
    flag: '🇭🇺',
    region: 'Europe',
    popularityTag: '20K+ Visas Processed',
    visas: {
      tourist: {
        id: 'hungary-tourist',
        title: 'Hungary Schengen Tourist Visa',
        governmentFee: 6000,
        serviceFee: 4300,
        type: 'Sticker Visa',
        processing: '15 days',
        lengthOfStay: '90 days (in 180 days)',
        validity: '180 days',
        entry: 'Multiple',
        guaranteedDate: '12 Mar 2026',
        requirements: ['Passport', 'Photo', 'Travel Insurance', 'Bank Statement', 'Flight Booking', 'Hotel Booking']
      }
    }
  },
  croatia: {
    id: 'croatia',
    name: 'Croatia',
    shortName: 'Croatia',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&q=80&w=800',
    flag: '🇭🇷',
    region: 'Europe',
    popularityTag: '25K+ Visas Processed',
    visas: {
      tourist: {
        id: 'croatia-tourist',
        title: 'Croatia Schengen Tourist Visa',
        governmentFee: 6000,
        serviceFee: 4500,
        type: 'Sticker Visa',
        processing: '15 days',
        lengthOfStay: '90 days (in 180 days)',
        validity: '180 days',
        entry: 'Multiple',
        guaranteedDate: '12 Mar 2026',
        requirements: ['Passport', 'Photo', 'Travel Insurance', 'Bank Statement', 'Flight Booking', 'Hotel Booking']
      }
    }
  },
  romania: {
    id: 'romania',
    name: 'Romania',
    shortName: 'Romania',
    image: 'https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&q=80&w=800',
    flag: '🇷🇴',
    region: 'Europe',
    popularityTag: '18K+ Visas Processed',
    visas: {
      tourist: {
        id: 'romania-tourist',
        title: 'Romania Tourist Visa',
        governmentFee: 6000,
        serviceFee: 4000,
        type: 'Sticker Visa',
        processing: '15 days',
        lengthOfStay: '90 days',
        validity: '180 days',
        entry: 'Multiple',
        guaranteedDate: '12 Mar 2026',
        requirements: ['Passport', 'Photo', 'Travel Insurance', 'Bank Statement', 'Flight Booking', 'Hotel Booking']
      }
    }
  },
  bulgaria: {
    id: 'bulgaria',
    name: 'Bulgaria',
    shortName: 'Bulgaria',
    image: 'https://i.pinimg.com/736x/74/7f/23/747f239efe1ee5352706e1ed063088b6.jpg',
    flag: '🇧🇬',
    region: 'Europe',
    popularityTag: '16K+ Visas Processed',
    visas: {
      tourist: {
        id: 'bulgaria-tourist',
        title: 'Bulgaria Tourist Visa',
        governmentFee: 6000,
        serviceFee: 3800,
        type: 'Sticker Visa',
        processing: '15 days',
        lengthOfStay: '90 days',
        validity: '180 days',
        entry: 'Multiple',
        guaranteedDate: '12 Mar 2026',
        requirements: ['Passport', 'Photo', 'Travel Insurance', 'Bank Statement', 'Flight Booking', 'Hotel Booking']
      }
    }
  },
  malta: {
    id: 'malta',
    name: 'Malta',
    shortName: 'Malta',
    image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&q=80&w=800',
    flag: '🇲🇹',
    region: 'Europe',
    popularityTag: '14K+ Visas Processed',
    visas: {
      tourist: {
        id: 'malta-tourist',
        title: 'Malta Schengen Tourist Visa',
        governmentFee: 6000,
        serviceFee: 5000,
        type: 'Sticker Visa',
        processing: '15 days',
        lengthOfStay: '90 days (in 180 days)',
        validity: '180 days',
        entry: 'Multiple',
        guaranteedDate: '12 Mar 2026',
        requirements: ['Passport', 'Photo', 'Travel Insurance', 'Bank Statement', 'Flight Booking', 'Hotel Booking']
      }
    }
  },
  cyprus: {
    id: 'cyprus',
    name: 'Cyprus',
    shortName: 'Cyprus',
    image: 'https://i.pinimg.com/1200x/0a/db/c8/0adbc898004f4b4dc2af3f3587312e15.jpg',
    flag: '🇨🇾',
    region: 'Europe',
    popularityTag: '15K+ Visas Processed',
    visas: {
      tourist: {
        id: 'cyprus-tourist',
        title: 'Cyprus Tourist Visa',
        governmentFee: 6000,
        serviceFee: 4800,
        type: 'Sticker Visa',
        processing: '15 days',
        lengthOfStay: '90 days',
        validity: '180 days',
        entry: 'Multiple',
        guaranteedDate: '12 Mar 2026',
        requirements: ['Passport', 'Photo', 'Travel Insurance', 'Bank Statement', 'Flight Booking', 'Hotel Booking']
      }
    }
  },
  southkorea: {
    id: 'southkorea',
    name: 'South Korea',
    shortName: 'South Korea',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800',
    flag: '🇰🇷',
    region: 'East Asia',
    popularityTag: '40K+ Visas Processed',
    visas: {
      tourist: {
        id: 'southkorea-tourist',
        title: 'South Korea Tourist Visa',
        governmentFee: 3500,
        serviceFee: 4500,
        type: 'Sticker Visa',
        processing: '7 days',
        lengthOfStay: '90 days',
        validity: '90 days',
        entry: 'Single',
        guaranteedDate: '4 Mar 2026',
        requirements: ['Passport', 'Photo', 'Bank Statement', 'Flight Booking']
      },
      'study-visa': {
        id: 'southkorea-study',
        title: 'South Korea Student Visa (D-2)',
        governmentFee: 5000,
        serviceFee: 10000,
        type: 'Student Visa',
        processing: '14 days',
        lengthOfStay: 'Course Duration',
        validity: 'Course Duration',
        entry: 'Multiple',
        guaranteedDate: '11 Mar 2026',
        requirements: ['Passport', 'Photo', 'Admission Letter', 'Bank Statement', 'Academic Documents']
      }
    }
  },
  taiwan: {
    id: 'taiwan',
    name: 'Taiwan',
    shortName: 'Taiwan',
    image: 'https://images.unsplash.com/photo-1508248467877-aec1b08de376?auto=format&fit=crop&q=80&w=800',
    flag: '🇹🇼',
    region: 'East Asia',
    popularityTag: '22K+ Visas Processed',
    visas: {
      tourist: {
        id: 'taiwan-tourist',
        title: 'Taiwan Visitor Visa',
        governmentFee: 3000,
        serviceFee: 4000,
        type: 'Sticker Visa',
        processing: '5 days',
        lengthOfStay: '90 days',
        validity: '180 days',
        entry: 'Multiple',
        guaranteedDate: '2 Mar 2026',
        requirements: ['Passport', 'Photo', 'Bank Statement', 'Flight Booking']
      }
    }
  },
  hongkong: {
    id: 'hongkong',
    name: 'Hong Kong',
    shortName: 'Hong Kong',
    image: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&q=80&w=800',
    flag: '🇭🇰',
    region: 'East Asia',
    popularityTag: '38K+ Visas Processed',
    visas: {
      tourist: {
        id: 'hongkong-tourist',
        title: 'Hong Kong Visit Visa',
        governmentFee: 2500,
        serviceFee: 3500,
        type: 'E-Visa',
        processing: '4 days',
        lengthOfStay: '14 days',
        validity: '90 days',
        entry: 'Single',
        guaranteedDate: '29 Feb 2026',
        requirements: ['Passport', 'Photo', 'Hotel Booking']
      }
    }
  },
  indonesia: {
    id: 'indonesia',
    name: 'Indonesia',
    shortName: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&q=80&w=800',
    flag: '🇮🇩',
    region: 'Southeast Asia',
    popularityTag: '52K+ Visas Processed',
    visas: {
      tourist: {
        id: 'indonesia-tourist',
        title: 'Indonesia Tourist Visa on Arrival',
        governmentFee: 2500,
        serviceFee: 2000,
        fastTrackFee: 1500,
        type: 'Visa on Arrival',
        processing: '2 days',
        fastProcessing: '1 day',
        lengthOfStay: '30 days',
        validity: '90 days',
        entry: 'Single',
        guaranteedDate: '27 Feb 2026',
        fastDate: '26 Feb 2026',
        requirements: ['Passport', 'Photo', 'Flight Booking']
      }
    }
  },
  maldives: {
    id: 'maldives',
    name: 'Maldives',
    shortName: 'Maldives',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800',
    flag: '🇲🇻',
    region: 'South Asia',
    popularityTag: '55K+ Visas Processed',
    visas: {
      tourist: {
        id: 'maldives-tourist',
        title: 'Maldives On-Arrival Visa',
        governmentFee: 1500,
        serviceFee: 1500,
        type: 'Visa on Arrival',
        processing: '1 day',
        lengthOfStay: '30 days',
        validity: '90 days',
        entry: 'Single',
        guaranteedDate: '26 Feb 2026',
        requirements: ['Passport', 'Photo', 'Hotel Booking', 'Return Ticket']
      }
    }
  },
  srilanka: {
    id: 'srilanka',
    name: 'Sri Lanka',
    shortName: 'Sri Lanka',
    image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&q=80&w=800',
    flag: '🇱🇰',
    region: 'South Asia',
    popularityTag: '44K+ Visas Processed',
    visas: {
      tourist: {
        id: 'srilanka-tourist',
        title: 'Sri Lanka ETA (E-Visa)',
        governmentFee: 2500,
        serviceFee: 2000,
        fastTrackFee: 1500,
        type: 'E-Visa',
        processing: '2 days',
        fastProcessing: '1 day',
        lengthOfStay: '30 days',
        validity: '180 days',
        entry: 'Double',
        guaranteedDate: '27 Feb 2026',
        fastDate: '26 Feb 2026',
        requirements: ['Passport', 'Photo']
      }
    }
  },
  nepal: {
    id: 'nepal',
    name: 'Nepal',
    shortName: 'Nepal',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800',
    flag: '🇳🇵',
    region: 'South Asia',
    popularityTag: '28K+ Visas Processed',
    visas: {
      tourist: {
        id: 'nepal-tourist',
        title: 'Nepal Tourist Visa',
        governmentFee: 2000,
        serviceFee: 2500,
        type: 'Visa on Arrival',
        processing: '2 days',
        lengthOfStay: '30 days',
        validity: '30 days',
        entry: 'Single',
        guaranteedDate: '27 Feb 2026',
        requirements: ['Passport', 'Photo']
      }
    }
  },
  bhutan: {
    id: 'bhutan',
    name: 'Bhutan',
    shortName: 'Bhutan',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800',
    flag: '🇧🇹',
    region: 'South Asia',
    popularityTag: '8K+ Visas Processed',
    visas: {
      tourist: {
        id: 'bhutan-tourist',
        title: 'Bhutan Tourist Visa',
        governmentFee: 3000,
        serviceFee: 4000,
        type: 'Tourist Visa',
        processing: '7 days',
        lengthOfStay: '15 days',
        validity: '15 days',
        entry: 'Single',
        guaranteedDate: '4 Mar 2026',
        requirements: ['Passport', 'Photo', 'Tour Package Booking']
      }
    }
  },
  bangladesh: {
    id: 'bangladesh',
    name: 'Bangladesh',
    shortName: 'Bangladesh',
    image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80&w=800',
    flag: '🇧🇩',
    region: 'South Asia',
    popularityTag: '18K+ Visas Processed',
    visas: {
      tourist: {
        id: 'bangladesh-tourist',
        title: 'Bangladesh Tourist Visa',
        governmentFee: 3500,
        serviceFee: 4500,
        type: 'Sticker Visa',
        processing: '10 days',
        lengthOfStay: '90 days',
        validity: '180 days',
        entry: 'Single',
        guaranteedDate: '7 Mar 2026',
        requirements: ['Passport', 'Photo', 'Invitation Letter', 'Hotel Booking']
      }
    }
  },
  myanmar: {
    id: 'myanmar',
    name: 'Myanmar',
    shortName: 'Myanmar',
    image: 'https://i.pinimg.com/736x/51/d8/60/51d860b223bcd15b1bca41dbb2c9e26f.jpg',
    flag: '🇲🇲',
    region: 'Southeast Asia',
    popularityTag: '14K+ Visas Processed',
    visas: {
      tourist: {
        id: 'myanmar-tourist',
        title: 'Myanmar E-Visa',
        governmentFee: 3000,
        serviceFee: 3500,
        type: 'E-Visa',
        processing: '5 days',
        lengthOfStay: '28 days',
        validity: '90 days',
        entry: 'Single',
        guaranteedDate: '2 Mar 2026',
        requirements: ['Passport', 'Photo', 'Flight Booking']
      }
    }
  },
  laos: {
    id: 'laos',
    name: 'Laos',
    shortName: 'Laos',
    image: 'https://images.unsplash.com/photo-1540611025311-01df3cef54b5?auto=format&fit=crop&q=80&w=800',
    flag: '🇱🇦',
    region: 'Southeast Asia',
    popularityTag: '12K+ Visas Processed',
    visas: {
      tourist: {
        id: 'laos-tourist',
        title: 'Laos Tourist Visa',
        governmentFee: 2500,
        serviceFee: 3000,
        type: 'Visa on Arrival',
        processing: '3 days',
        lengthOfStay: '30 days',
        validity: '60 days',
        entry: 'Single',
        guaranteedDate: '28 Feb 2026',
        requirements: ['Passport', 'Photo']
      }
    }
  },
  mongolia: {
    id: 'mongolia',
    name: 'Mongolia',
    shortName: 'Mongolia',
    image: 'https://i.pinimg.com/736x/af/e2/4d/afe24d3c2bde741bb89a109d5ad55e56.jpg',
    flag: '🇲🇳',
    region: 'East Asia',
    popularityTag: '6K+ Visas Processed',
    visas: {
      tourist: {
        id: 'mongolia-tourist',
        title: 'Mongolia Tourist Visa',
        governmentFee: 3500,
        serviceFee: 4500,
        type: 'Sticker Visa',
        processing: '7 days',
        lengthOfStay: '30 days',
        validity: '90 days',
        entry: 'Single',
        guaranteedDate: '4 Mar 2026',
        requirements: ['Passport', 'Photo', 'Hotel Booking', 'Travel Insurance']
      }
    }
  },
  kazakhstan: {
    id: 'kazakhstan',
    name: 'Kazakhstan',
    shortName: 'Kazakhstan',
    image: 'https://i.pinimg.com/736x/e6/ff/f1/e6fff177f7b959f3a2681021cadf0579.jpg',
    flag: '🇰🇿',
    region: 'Central Asia',
    popularityTag: '10K+ Visas Processed',
    visas: {
      tourist: {
        id: 'kazakhstan-tourist',
        title: 'Kazakhstan Tourist Visa',
        governmentFee: 4000,
        serviceFee: 5000,
        type: 'E-Visa',
        processing: '5 days',
        lengthOfStay: '30 days',
        validity: '90 days',
        entry: 'Single',
        guaranteedDate: '2 Mar 2026',
        requirements: ['Passport', 'Photo', 'Hotel Booking']
      }
    }
  },
  uzbekistan: {
    id: 'uzbekistan',
    name: 'Uzbekistan',
    shortName: 'Uzbekistan',
    image: 'https://i.pinimg.com/736x/f7/0f/f5/f70ff501c71d17b26c7eed2c35ec8fb1.jpg',
    flag: '🇺🇿',
    region: 'Central Asia',
    popularityTag: '9K+ Visas Processed',
    visas: {
      tourist: {
        id: 'uzbekistan-tourist',
        title: 'Uzbekistan Tourist E-Visa',
        governmentFee: 2000,
        serviceFee: 3000,
        type: 'E-Visa',
        processing: '3 days',
        lengthOfStay: '30 days',
        validity: '90 days',
        entry: 'Single',
        guaranteedDate: '28 Feb 2026',
        requirements: ['Passport', 'Photo']
      }
    }
  },
  azerbaijan: {
    id: 'azerbaijan',
    name: 'Azerbaijan',
    shortName: 'Azerbaijan',
    image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?auto=format&fit=crop&q=80&w=800',
    flag: '🇦🇿',
    region: 'Caucasus',
    popularityTag: '11K+ Visas Processed',
    visas: {
      tourist: {
        id: 'azerbaijan-tourist',
        title: 'Azerbaijan E-Visa',
        governmentFee: 2500,
        serviceFee: 3500,
        type: 'E-Visa',
        processing: '3 days',
        lengthOfStay: '30 days',
        validity: '90 days',
        entry: 'Single',
        guaranteedDate: '28 Feb 2026',
        requirements: ['Passport', 'Photo']
      }
    }
  },
  georgia: {
    id: 'georgia',
    name: 'Georgia',
    shortName: 'Georgia',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=800',
    flag: '🇬🇪',
    region: 'Caucasus',
    popularityTag: '16K+ Visas Processed',
    visas: {
      tourist: {
        id: 'georgia-tourist',
        title: 'Georgia E-Visa',
        governmentFee: 1500,
        serviceFee: 2500,
        type: 'E-Visa',
        processing: '3 days',
        lengthOfStay: '90 days',
        validity: '120 days',
        entry: 'Single',
        guaranteedDate: '28 Feb 2026',
        requirements: ['Passport', 'Photo']
      }
    }
  },
  armenia: {
    id: 'armenia',
    name: 'Armenia',
    shortName: 'Armenia',
    image: 'https://i.pinimg.com/1200x/9d/93/4e/9d934ed543f4ab47225ae2e2ca62c0a9.jpg',
    flag: '🇦🇲',
    region: 'Caucasus',
    popularityTag: '8K+ Visas Processed',
    visas: {
      tourist: {
        id: 'armenia-tourist',
        title: 'Armenia E-Visa',
        governmentFee: 1500,
        serviceFee: 2500,
        type: 'E-Visa',
        processing: '3 days',
        lengthOfStay: '120 days',
        validity: '120 days',
        entry: 'Single',
        guaranteedDate: '28 Feb 2026',
        requirements: ['Passport', 'Photo']
      }
    }
  },
  argentina: {
    id: 'argentina',
    name: 'Argentina',
    shortName: 'Argentina',
    image: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&q=80&w=800',
    flag: '🇦🇷',
    region: 'South America',
    popularityTag: '18K+ Visas Processed',
    visas: {
      tourist: {
        id: 'argentina-tourist',
        title: 'Argentina Tourist Visa',
        governmentFee: 5000,
        serviceFee: 6000,
        type: 'E-Visa',
        processing: '10 days',
        lengthOfStay: '90 days',
        validity: '90 days',
        entry: 'Single',
        guaranteedDate: '7 Mar 2026',
        requirements: ['Passport', 'Photo', 'Bank Statement', 'Hotel Booking']
      }
    }
  },
  chile: {
    id: 'chile',
    name: 'Chile',
    shortName: 'Chile',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
    flag: '🇨🇱',
    region: 'South America',
    popularityTag: '14K+ Visas Processed',
    visas: {
      tourist: {
        id: 'chile-tourist',
        title: 'Chile Tourist Visa',
        governmentFee: 4000,
        serviceFee: 5000,
        type: 'E-Visa',
        processing: '10 days',
        lengthOfStay: '90 days',
        validity: '90 days',
        entry: 'Single',
        guaranteedDate: '7 Mar 2026',
        requirements: ['Passport', 'Photo', 'Bank Statement', 'Hotel Booking']
      }
    }
  },
  peru: {
    id: 'peru',
    name: 'Peru',
    shortName: 'Peru',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=800',
    flag: '🇵🇪',
    region: 'South America',
    popularityTag: '16K+ Visas Processed',
    visas: {
      tourist: {
        id: 'peru-tourist',
        title: 'Peru Tourist Visa',
        governmentFee: 4500,
        serviceFee: 5500,
        type: 'Sticker Visa',
        processing: '10 days',
        lengthOfStay: '183 days',
        validity: '183 days',
        entry: 'Multiple',
        guaranteedDate: '7 Mar 2026',
        requirements: ['Passport', 'Photo', 'Bank Statement', 'Hotel Booking']
      }
    }
  },
  colombia: {
    id: 'colombia',
    name: 'Colombia',
    shortName: 'Colombia',
    image: 'https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?auto=format&fit=crop&q=80&w=800',
    flag: '🇨🇴',
    region: 'South America',
    popularityTag: '22K+ Visas Processed',
    visas: {
      tourist: {
        id: 'colombia-tourist',
        title: 'Colombia Tourist Visa',
        governmentFee: 3500,
        serviceFee: 4500,
        type: 'E-Visa',
        processing: '10 days',
        lengthOfStay: '90 days',
        validity: '180 days',
        entry: 'Multiple',
        guaranteedDate: '7 Mar 2026',
        requirements: ['Passport', 'Photo', 'Bank Statement', 'Hotel Booking']
      }
    }
  },
  ecuador: {
    id: 'ecuador',
    name: 'Ecuador',
    shortName: 'Ecuador',
    image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&q=80&w=800',
    flag: '🇪🇨',
    region: 'South America',
    popularityTag: '10K+ Visas Processed',
    visas: {
      tourist: {
        id: 'ecuador-tourist',
        title: 'Ecuador Tourist Visa',
        governmentFee: 3000,
        serviceFee: 4000,
        type: 'Tourist Visa',
        processing: '10 days',
        lengthOfStay: '90 days',
        validity: '90 days',
        entry: 'Single',
        guaranteedDate: '7 Mar 2026',
        requirements: ['Passport', 'Photo', 'Bank Statement']
      }
    }
  },
  bolivia: {
    id: 'bolivia',
    name: 'Bolivia',
    shortName: 'Bolivia',
    image: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&q=80&w=800',
    flag: '🇧🇴',
    region: 'South America',
    popularityTag: '7K+ Visas Processed',
    visas: {
      tourist: {
        id: 'bolivia-tourist',
        title: 'Bolivia Tourist Visa',
        governmentFee: 4000,
        serviceFee: 5000,
        type: 'Visa on Arrival',
        processing: '5 days',
        lengthOfStay: '90 days',
        validity: '90 days',
        entry: 'Single',
        guaranteedDate: '2 Mar 2026',
        requirements: ['Passport', 'Photo', 'Bank Statement', 'Yellow Fever Certificate']
      }
    }
  },
  uruguay: {
    id: 'uruguay',
    name: 'Uruguay',
    shortName: 'Uruguay',
    image: 'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?auto=format&fit=crop&q=80&w=800',
    flag: '🇺🇾',
    region: 'South America',
    popularityTag: '8K+ Visas Processed',
    visas: {
      tourist: {
        id: 'uruguay-tourist',
        title: 'Uruguay Tourist Visa',
        governmentFee: 4000,
        serviceFee: 5000,
        type: 'Tourist Visa',
        processing: '10 days',
        lengthOfStay: '90 days',
        validity: '90 days',
        entry: 'Single',
        guaranteedDate: '7 Mar 2026',
        requirements: ['Passport', 'Photo', 'Bank Statement', 'Hotel Booking']
      }
    }
  },
  costarica: {
    id: 'costarica',
    name: 'Costa Rica',
    shortName: 'Costa Rica',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800',
    flag: '🇨🇷',
    region: 'Central America',
    popularityTag: '24K+ Visas Processed',
    visas: {
      tourist: {
        id: 'costarica-tourist',
        title: 'Costa Rica Tourist Visa',
        governmentFee: 3500,
        serviceFee: 4500,
        type: 'Tourist Visa',
        processing: '10 days',
        lengthOfStay: '90 days',
        validity: '90 days',
        entry: 'Single',
        guaranteedDate: '7 Mar 2026',
        requirements: ['Passport', 'Photo', 'Bank Statement', 'Hotel Booking']
      }
    }
  },
  panama: {
    id: 'panama',
    name: 'Panama',
    shortName: 'Panama',
    image: 'https://i.pinimg.com/1200x/1b/62/71/1b627132a91f0e948eca18e18ba49899.jpg',
    flag: '🇵🇦',
    region: 'Central America',
    popularityTag: '15K+ Visas Processed',
    visas: {
      tourist: {
        id: 'panama-tourist',
        title: 'Panama Tourist Visa',
        governmentFee: 4000,
        serviceFee: 5000,
        type: 'Tourist Visa',
        processing: '10 days',
        lengthOfStay: '180 days',
        validity: '180 days',
        entry: 'Multiple',
        guaranteedDate: '7 Mar 2026',
        requirements: ['Passport', 'Photo', 'Bank Statement', 'Hotel Booking']
      }
    }
  },
  guatemala: {
    id: 'guatemala',
    name: 'Guatemala',
    shortName: 'Guatemala',
    image: 'https://i.pinimg.com/736x/1f/d6/c8/1fd6c823a7ae856e2f38a9abfc1124a0.jpg',
    flag: '🇬🇹',
    region: 'Central America',
    popularityTag: '9K+ Visas Processed',
    visas: {
      tourist: {
        id: 'guatemala-tourist',
        title: 'Guatemala Tourist Visa',
        governmentFee: 3000,
        serviceFee: 4000,
        type: 'Tourist Visa',
        processing: '10 days',
        lengthOfStay: '90 days',
        validity: '90 days',
        entry: 'Single',
        guaranteedDate: '7 Mar 2026',
        requirements: ['Passport', 'Photo', 'Bank Statement']
      }
    }
  },
  newzealand: {
    id: 'newzealand',
    name: 'New Zealand',
    shortName: 'New Zealand',
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&q=80&w=800',
    flag: '🇳🇿',
    region: 'Oceania',
    popularityTag: '32K+ Visas Processed',
    visas: {
      tourist: {
        id: 'newzealand-tourist',
        title: 'New Zealand Visitor Visa',
        governmentFee: 12000,
        serviceFee: 8000,
        type: 'E-Visa',
        processing: '21 days',
        lengthOfStay: '9 months',
        validity: '9 months',
        entry: 'Multiple',
        guaranteedDate: '18 Mar 2026',
        requirements: ['Passport', 'Photo', 'Bank Statement', 'Travel Itinerary', 'Employment Letter']
      },
      'study-visa': {
        id: 'newzealand-study',
        title: 'New Zealand Student Visa',
        governmentFee: 18000,
        serviceFee: 14000,
        type: 'Student Visa',
        processing: '30 days',
        lengthOfStay: 'Course Duration',
        validity: 'Course Duration',
        entry: 'Multiple',
        guaranteedDate: '27 Mar 2026',
        requirements: ['Passport', 'Photo', 'Offer Letter', 'Financial Proof', 'Medical Certificate']
      }
    }
  },
  tunisia: {
    id: 'tunisia',
    name: 'Tunisia',
    shortName: 'Tunisia',
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&q=80&w=800',
    flag: '🇹🇳',
    region: 'North Africa',
    popularityTag: '14K+ Visas Processed',
    visas: {
      tourist: {
        id: 'tunisia-tourist',
        title: 'Tunisia Tourist Visa',
        governmentFee: 3500,
        serviceFee: 4500,
        type: 'Sticker Visa',
        processing: '10 days',
        lengthOfStay: '90 days',
        validity: '90 days',
        entry: 'Single',
        guaranteedDate: '7 Mar 2026',
        requirements: ['Passport', 'Photo', 'Hotel Booking', 'Travel Insurance']
      }
    }
  },
  jordan: {
    id: 'jordan',
    name: 'Jordan',
    shortName: 'Jordan',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&q=80&w=800',
    flag: '🇯🇴',
    region: 'Middle East',
    popularityTag: '22K+ Visas Processed',
    visas: {
      tourist: {
        id: 'jordan-tourist',
        title: 'Jordan Tourist Visa',
        governmentFee: 3000,
        serviceFee: 3500,
        type: 'Visa on Arrival',
        processing: '3 days',
        lengthOfStay: '30 days',
        validity: '90 days',
        entry: 'Single',
        guaranteedDate: '28 Feb 2026',
        requirements: ['Passport', 'Photo']
      }
    }
  },
  oman: {
    id: 'oman',
    name: 'Oman',
    shortName: 'Oman',
    image: 'https://i.pinimg.com/1200x/32/78/93/3278938f25c13ae4f4e518c6dd4282df.jpg',
    flag: '🇴🇲',
    region: 'Middle East',
    popularityTag: '26K+ Visas Processed',
    visas: {
      tourist: {
        id: 'oman-tourist',
        title: 'Oman Tourist E-Visa',
        governmentFee: 3500,
        serviceFee: 4000,
        fastTrackFee: 2500,
        type: 'E-Visa',
        processing: '4 days',
        fastProcessing: '2 days',
        lengthOfStay: '30 days',
        validity: '30 days',
        entry: 'Single',
        guaranteedDate: '29 Feb 2026',
        fastDate: '27 Feb 2026',
        requirements: ['Passport', 'Photo', 'Hotel Booking']
      }
    }
  },
  qatar: {
    id: 'qatar',
    name: 'Qatar',
    shortName: 'Qatar',
    image: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d?auto=format&fit=crop&q=80&w=800',
    flag: '🇶🇦',
    region: 'Middle East',
    popularityTag: '38K+ Visas Processed',
    visas: {
      tourist: {
        id: 'qatar-tourist',
        title: 'Qatar Tourist E-Visa',
        governmentFee: 4000,
        serviceFee: 5000,
        fastTrackFee: 3000,
        type: 'E-Visa',
        processing: '4 days',
        fastProcessing: '2 days',
        lengthOfStay: '30 days',
        validity: '30 days',
        entry: 'Single',
        guaranteedDate: '29 Feb 2026',
        fastDate: '27 Feb 2026',
        requirements: ['Passport', 'Photo', 'Hotel Booking']
      }
    }
  },
  kuwait: {
    id: 'kuwait',
    name: 'Kuwait',
    shortName: 'Kuwait',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800',
    flag: '🇰🇼',
    region: 'Middle East',
    popularityTag: '20K+ Visas Processed',
    visas: {
      tourist: {
        id: 'kuwait-tourist',
        title: 'Kuwait Tourist E-Visa',
        governmentFee: 3000,
        serviceFee: 4000,
        type: 'E-Visa',
        processing: '5 days',
        lengthOfStay: '90 days',
        validity: '90 days',
        entry: 'Single',
        guaranteedDate: '2 Mar 2026',
        requirements: ['Passport', 'Photo', 'Hotel Booking']
      }
    }
  },
  bahrain: {
    id: 'bahrain',
    name: 'Bahrain',
    shortName: 'Bahrain',
    image: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&q=80&w=800',
    flag: '🇧🇭',
    region: 'Middle East',
    popularityTag: '18K+ Visas Processed',
    visas: {
      tourist: {
        id: 'bahrain-tourist',
        title: 'Bahrain Tourist E-Visa',
        governmentFee: 2500,
        serviceFee: 3000,
        fastTrackFee: 2000,
        type: 'E-Visa',
        processing: '3 days',
        fastProcessing: '1 day',
        lengthOfStay: '14 days',
        validity: '30 days',
        entry: 'Single',
        guaranteedDate: '28 Feb 2026',
        fastDate: '26 Feb 2026',
        requirements: ['Passport', 'Photo']
      }
    }
  },
  tanzania: {
    id: 'tanzania',
    name: 'Tanzania',
    shortName: 'Tanzania',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=800',
    flag: '🇹🇿',
    region: 'East Africa',
    popularityTag: '24K+ Visas Processed',
    visas: {
      tourist: {
        id: 'tanzania-tourist',
        title: 'Tanzania E-Visa',
        governmentFee: 3500,
        serviceFee: 4000,
        type: 'E-Visa',
        processing: '7 days',
        lengthOfStay: '90 days',
        validity: '90 days',
        entry: 'Single',
        guaranteedDate: '4 Mar 2026',
        requirements: ['Passport', 'Photo', 'Yellow Fever Certificate']
      }
    }
  },
  southafrica: {
    id: 'southafrica',
    name: 'South Africa',
    shortName: 'South Africa',
    image: 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?auto=format&fit=crop&q=80&w=800',
    flag: '🇿🇦',
    region: 'Southern Africa',
    popularityTag: '36K+ Visas Processed',
    visas: {
      tourist: {
        id: 'southafrica-tourist',
        title: 'South Africa Tourist Visa',
        governmentFee: 5000,
        serviceFee: 6000,
        type: 'Sticker Visa',
        processing: '15 days',
        lengthOfStay: '90 days',
        validity: '90 days',
        entry: 'Single',
        guaranteedDate: '12 Mar 2026',
        requirements: ['Passport', 'Photo', 'Bank Statement', 'Travel Itinerary', 'Yellow Fever Certificate']
      }
    }
  },
  ethiopia: {
    id: 'ethiopia',
    name: 'Ethiopia',
    shortName: 'Ethiopia',
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=800',
    flag: '🇪🇹',
    region: 'East Africa',
    popularityTag: '16K+ Visas Processed',
    visas: {
      tourist: {
        id: 'ethiopia-tourist',
        title: 'Ethiopia E-Visa',
        governmentFee: 3500,
        serviceFee: 4000,
        type: 'E-Visa',
        processing: '5 days',
        lengthOfStay: '90 days',
        validity: '90 days',
        entry: 'Single',
        guaranteedDate: '2 Mar 2026',
        requirements: ['Passport', 'Photo', 'Yellow Fever Certificate']
      }
    }
  },
  zimbabwe: {
    id: 'zimbabwe',
    name: 'Zimbabwe',
    shortName: 'Zimbabwe',
    image: 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?auto=format&fit=crop&q=80&w=800',
    flag: '🇿🇼',
    region: 'Southern Africa',
    popularityTag: '12K+ Visas Processed',
    visas: {
      tourist: {
        id: 'zimbabwe-tourist',
        title: 'Zimbabwe E-Visa',
        governmentFee: 4000,
        serviceFee: 4500,
        type: 'E-Visa',
        processing: '7 days',
        lengthOfStay: '90 days',
        validity: '90 days',
        entry: 'Single',
        guaranteedDate: '4 Mar 2026',
        requirements: ['Passport', 'Photo', 'Yellow Fever Certificate']
      }
    }
  }
};

// Helper function to calculate total price
export const calculatePrice = (visa, travellers = 1, isFastTrack = false) => {
  const baseCost = visa.governmentFee + visa.serviceFee;
  const fastTrackCost = isFastTrack && visa.fastTrackFee ? visa.fastTrackFee : 0;
  const totalPerPerson = baseCost + fastTrackCost;
  
  let discount = 0;
  if (travellers >= 5) {
    discount = 0.15;
  } else if (travellers >= 3) {
    discount = 0.10;
  } else if (travellers >= 2) {
    discount = 0.05;
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

// Get all countries
export const getAllCountries = () => {
  return Object.values(COUNTRIES_DATA);
};

// Get country by ID
export const getCountryById = (countryId) => {
  return COUNTRIES_DATA[countryId];
};

// Get visa for a specific country and type
export const getVisaByCountryAndType = (countryId, visaType) => {
  const country = COUNTRIES_DATA[countryId];
  return country?.visas?.[visaType];
};
