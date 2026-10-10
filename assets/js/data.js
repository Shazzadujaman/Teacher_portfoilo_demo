// Authentic portfolio data for Professor Dr. A K M Motinur Rahman, Ph.D.
// Vice-Chancellor, Islamic University, Kushtia-7003, Bangladesh
// Source: Official CV (https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf)

const DEFAULT_TEACHER_DATA = {
  profile: {
    name: "Professor Dr. A K M Motinur Rahman",
    shortName: "Prof. Dr. A K M Motinur Rahman",
    title: "Vice-Chancellor & Professor",
    department: "Department of Public Administration",
    faculty: "Faculty of Social Sciences",
    university: "Islamic University, Kushtia–7003, Bangladesh",
    email: "akmrahman1971@gmail.com",
    altEmail: "vc@iu.ac.bd",
    phone: "+880 1712-888054",
    fax: "+88-071-74905",
    office: "Office of the Vice-Chancellor, Administration Building, Islamic University, Kushtia–7003",
    officeHours: "Sunday – Thursday: 09:00 AM – 04:00 PM",
    photo: "assets/images/vc-motinur-rahman-office.jpg",
    aboutPhoto: "assets/images/vc-motinur-rahman-portrait.png",
    cvLink: "https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf",
    birthDate: "10 June 1970",
    birthPlace: "Bogura, Bangladesh",
    permanentAddress: "Khalishakandi, Mazira, Shajahanpur, Bogura, Bangladesh",
    bio: "Professor Dr. A K M Motinur Rahman is the Vice-Chancellor of Islamic University, Kushtia, Bangladesh, and a distinguished Professor in the Department of Public Administration. He holds a Doctoral Degree (Ph.D.) in Development and NGO Operations from Islamic University, an M.A. in International Relations from the University of New South Wales (UNSW), Sydney, Australia, and B.S.S (Hon's) & M.S.S in Political Science from the University of Dhaka (First Class 3rd).\n\nWith over 28 years of academic teaching, high-level university administration, and international research expertise, he has served as Proctor, Hall Provost, Press Administrator, Department Chairman, and Director of the Centre for Social Studies. He was also elected President of the Islamic University Teachers' Association and Vice-President of the Federation of Bangladesh University Teachers' Association.",
    typingTexts: [
      "Vice-Chancellor, Islamic University, Kushtia",
      "Professor of Public Administration",
      "Ph.D. in Development & NGO Governance",
      "M.A. in International Relations, UNSW Australia",
      "Former President, IU Teachers' Association"
    ],
    social: {
      scholar: "https://scholar.google.com",
      researchgate: "https://www.researchgate.net",
      orcid: "https://orcid.org",
      linkedin: "https://www.linkedin.com",
      email: "mailto:akmrahman1971@gmail.com",
      phone: "tel:+8801712888054"
    },
    stats: {
      experienceYears: "28+",
      publicationsCount: "35+",
      booksCount: "02",
      conferencesCount: "12+"
    }
  },

  skills: [
    { id: "s1", name: "Public Administration & Good Governance", category: "academic", level: 98, icon: "fas fa-landmark" },
    { id: "s2", name: "Poverty Alleviation & NGO Management", category: "academic", level: 96, icon: "fas fa-hand-holding-heart" },
    { id: "s3", name: "Public Policy & Development Planning", category: "tech", level: 94, icon: "fas fa-project-diagram" },
    { id: "s4", name: "Islamic Financial System & Zakat Security Programs", category: "islamic", level: 92, icon: "fas fa-coins" },
    { id: "s5", name: "International Relations & Geo-Politics", category: "ai", level: 95, icon: "fas fa-globe-asia" },
    { id: "s6", name: "Sustainable Development Goals (SDGs)", category: "tech", level: 92, icon: "fas fa-seedling" },
    { id: "s7", name: "Local Government & Field Administration", category: "academic", level: 90, icon: "fas fa-city" },
    { id: "s8", name: "E-Governance & Administrative Accountability", category: "tech", level: 88, icon: "fas fa-desktop" },
    { id: "s9", name: "Higher Education & University Governance", category: "academic", level: 98, icon: "fas fa-university" },
    { id: "s10", name: "Solid Waste Management Policy", category: "tech", level: 86, icon: "fas fa-recycle" },
    { id: "s11", name: "Disaster Management & Climate Change Response", category: "academic", level: 89, icon: "fas fa-cloud-sun-rain" },
    { id: "s12", name: "Organizational Theory & Behaviour", category: "academic", level: 92, icon: "fas fa-users-cog" }
  ],

  education: [
    {
      id: "e1",
      degree: "Doctor of Philosophy (Ph.D.) in Public Administration & Development",
      institution: "Faculty of Humanities & Social Sciences, Islamic University, Kushtia, Bangladesh",
      year: "2007",
      details: "Doctoral dissertation on 'Poverty Alleviation and Development: A Study of NGO Operations in Bangladesh'. Extensive field evaluation of microcredit institutions, governance models, and grassroots socio-economic impact.",
      badge: "Ph.D. Degree"
    },
    {
      id: "e2",
      degree: "Master of Arts (M.A.) in International Relations",
      institution: "University of New South Wales (UNSW), Sydney, Australia",
      year: "2000",
      details: "Comprehensive postgraduate degree focusing on global diplomacy, international security conventions, regionalism (ASEAN, OIC), and transnational policy.",
      badge: "M.A. (Australia)"
    },
    {
      id: "e3",
      degree: "Master of Social Sciences (M.S.S.) in Political Science",
      institution: "Department of Political Science, University of Dhaka, Bangladesh",
      year: "1991",
      details: "Graduated with First Class 3rd Position. Advanced study in administrative political theory, comparative government, and development planning.",
      badge: "First Class 3rd (DU)"
    },
    {
      id: "e4",
      degree: "Bachelor of Social Sciences (B.S.S. Hons.) in Political Science",
      institution: "Department of Political Science, University of Dhaka, Bangladesh",
      year: "1990",
      details: "Four-year graduation with Second Class. In-depth curriculum in political organizations, constitutional governance, and public affairs.",
      badge: "Honours Degree (DU)"
    },
    {
      id: "e5",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Kahaloo College, Bogura, Bangladesh",
      year: "1987",
      details: "Passed with First Division under Rajshahi Education Board.",
      badge: "First Division"
    },
    {
      id: "e6",
      degree: "Secondary School Certificate (SSC)",
      institution: "Chopinagar M. L. High School, Mazira, Bogura, Bangladesh",
      year: "1985",
      details: "Passed with Second Division under Rajshahi Education Board.",
      badge: "Secondary Certificate"
    }
  ],

  experiences: [
    {
      id: "exp0",
      role: "Vice-Chancellor",
      organization: "Islamic University, Kushtia–7003, Bangladesh",
      period: "Current",
      description: "Serving as the Chief Executive and Academic Head of Islamic University. Presiding over the University Senate, Syndicate, and Academic Council. Directing comprehensive educational reforms, research funding, campus governance, and institutional advancement.",
      highlight: "Chief University Executive"
    },
    {
      id: "exp1",
      role: "Professor",
      organization: "Department of Public Administration, Islamic University, Kushtia",
      period: "September 2008 – Present",
      description: "Delivering advanced postgraduate and undergraduate lectures in Good Governance, Development Planning, Sustainable Development Goals (SDGs), and Geo-politics. Mentoring M.Phil. and Ph.D. research candidates.",
      highlight: "Senior Professor"
    },
    {
      id: "exp2",
      role: "Director, Centre for Social Studies (CSS)",
      organization: "Islamic University, Kushtia–7003, Bangladesh",
      period: "2010 – Present",
      description: "Coordinating interdisciplinary social science research initiatives, national seminars, policy dialogues, and publication of scholarly monographs.",
      highlight: "Research Center Leadership"
    },
    {
      id: "exp3",
      role: "Coordinator, Master's of Development Studies (MDS)",
      organization: "Department of Politics and Public Administration, Islamic University, Kushtia",
      period: "January 2010 – December 2010",
      description: "Supervised curriculum coordination, postgraduate student admissions, thesis evaluations, and executive weekend master's program governance.",
      highlight: "Executive Degree Coordinator"
    },
    {
      id: "exp4",
      role: "Proctor",
      organization: "Islamic University, Kushtia–7003, Bangladesh",
      period: "May 2007 – May 2008",
      description: "Administered university disciplinary affairs, maintained peaceful campus environment, coordinated student safety, law enforcement liaison, and proctorial body supervision.",
      highlight: "Campus Proctor"
    },
    {
      id: "exp5",
      role: "Chairman of the Department",
      organization: "Department of Politics and Public Administration, Islamic University, Kushtia",
      period: "September 2005 – August 2008",
      description: "Managed department academic curricula, conducted faculty recruitment, upgraded seminar library, and led educational planning for undergraduate and master's cohorts.",
      highlight: "Department Chairman"
    },
    {
      id: "exp6",
      role: "Provost, Saddam Hossain Hall",
      organization: "Islamic University, Kushtia–7003, Bangladesh",
      period: "May 2005",
      description: "Headed residential hall administration, student welfare, dining services, and residential discipline for university students.",
      highlight: "Hall Provost"
    },
    {
      id: "exp7",
      role: "Press Administrator",
      organization: "Islamic University, Kushtia–7003, Bangladesh",
      period: "March 2003 – March 2005",
      description: "Managed university central press, official publications, academic journals printing, and administrative document production.",
      highlight: "Press Administration"
    },
    {
      id: "exp8",
      role: "Associate Professor & Assistant Professor",
      organization: "Department of Politics and Public Administration, Islamic University, Kushtia",
      period: "April 1999 – September 2008",
      description: "Conducted core courses in Comparative Politics, Development Administration, and Field Administration. Published research articles in indexed university studies.",
      highlight: "Faculty Advancement"
    },
    {
      id: "exp9",
      role: "Lecturer in Political Studies and Public Affairs",
      organization: "Shahjalal University of Science & Technology (SUST), Sylhet, Bangladesh",
      period: "April 1996 – October 1996",
      description: "Delivered foundational courses in Political Theory and Public Administration before joining Islamic University in October 1996.",
      highlight: "Early Academic Career"
    }
  ],

  publications: [
    {
      id: "b1",
      title: "Poverty and Development in Bangladesh",
      authors: "Prof. Dr. A K M Motinur Rahman",
      venue: "Lambert Academic Publishing, Germany (ISBN 978-3-659-27242-4)",
      year: 2012,
      category: "book",
      doi: "https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf",
      badge: "International Book (Germany)",
      abstract: "Comprehensive scholarly monograph examining poverty dynamics, economic indicators, structural barriers, and sustainable development paradigms in Bangladesh."
    },
    {
      id: "b2",
      title: "NGO and Development: Myth & Reality",
      authors: "Prof. Dr. A K M Motinur Rahman",
      venue: "A.H Development Publishing House, Dhaka, Bangladesh (ISBN 978-984-8810-02-6)",
      year: 2010,
      category: "book",
      doi: "https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf",
      badge: "National Book (Dhaka)",
      abstract: "Critical analysis of non-governmental organization operations, microfinance models, participatory development frameworks, and community empowerment in rural Bangladesh."
    },
    {
      id: "p1",
      title: "Socio-Political, Religious and Military Causes of Warfare Vis-a-Vis Present Non-Traditional Threats for Bangladesh",
      authors: "Prof. Dr. A K M Motinur Rahman",
      venue: "The Journal of Islamic University Studies, Faculty of Humanities and Social Sciences, Vol. 19, No. 1",
      year: 2019,
      category: "journal",
      doi: "https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf",
      badge: "Islamic University Studies",
      abstract: "An examination of emerging geopolitical security dynamics, non-traditional security challenges, cyber threats, and policy preparedness for Bangladesh."
    },
    {
      id: "p2",
      title: "Sustainable Development Goals in Bangladesh: Issues and Challenges",
      authors: "Prof. Dr. A K M Motinur Rahman",
      venue: "The Journal of Politics and Administration (ISSN 1818-9571), Vol. 05, No. 01&2",
      year: 2018,
      category: "journal",
      doi: "https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf",
      badge: "Politics & Administration",
      abstract: "Explores the institutional framework, budgetary allocations, and administrative challenges in achieving the UN 2030 Sustainable Development Goals in Bangladesh."
    },
    {
      id: "p3",
      title: "Solid Waste Management Situation of City Corporations in Dhaka: An Insight into Management and Policy Perspective",
      authors: "Prof. Dr. A K M Motinur Rahman",
      venue: "The Journal of Politics and Administration (ISSN 1818-9571), Vol. 05, No. 01&2",
      year: 2018,
      category: "journal",
      doi: "https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf",
      badge: "Urban Policy Research",
      abstract: "Empirical policy analysis evaluating municipal waste collection, stakeholder coordination, and environmental health across Dhaka North and South City Corporations."
    },
    {
      id: "p4",
      title: "Solid Waste Management in Developing Countries: Strategic Practitioners' View Points",
      authors: "Prof. Dr. A K M Motinur Rahman",
      venue: "Journal of The Islamic University Studies (ISSN 2521-3083), Vol. 17, No. 01",
      year: 2017,
      category: "journal",
      doi: "https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf",
      badge: "IU Studies (ISSN)",
      abstract: "Synthesizes strategic viewpoints from urban planners and public sector practitioners on sustainable waste recycling and regulatory enforcement."
    },
    {
      id: "p5",
      title: "Solid Waste Management Situation in Dhaka: An Analysis on Management and Policy Perspective",
      authors: "Prof. Dr. A K M Motinur Rahman",
      venue: "Journal of Jessore University of Science and Technology (ISSN 2521-5493), Vol. 1, No. 01",
      year: 2016,
      category: "journal",
      doi: "https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf",
      badge: "JUST Journal",
      abstract: "Focuses on strategic policy options for megacity environmental management, public-private partnerships, and sustainable municipal infrastructure."
    },
    {
      id: "p6",
      title: "Good Governance and Climate Change: Bangladesh Perspectives",
      authors: "Prof. Dr. A K M Motinur Rahman",
      venue: "Bangladesh Rural Development Studies, Rural Development Academy (RDA), Bogura, Vol. 15, No. 1",
      year: 2013,
      category: "journal",
      doi: "https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf",
      badge: "RDA Bogura Studies",
      abstract: "Analyzes the crucial role of institutional transparency, climate fund accountability, and local government coordination in climate-vulnerable coastal regions."
    },
    {
      id: "p7",
      title: "Student Politics and Quality of Education at the University Level in the Context of Bangladesh",
      authors: "Prof. Dr. A K M Motinur Rahman",
      venue: "Development Compilation, Centre for Human Resources Information and Development, Rajshahi University, Vol. 9, No. 1",
      year: 2013,
      category: "journal",
      doi: "https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf",
      badge: "Rajshahi University",
      abstract: "Investigates the historical evolution of student politics, academic environment disruptions, and policy recommendations for quality higher education governance."
    },
    {
      id: "p8",
      title: "Development Approaches of NGOs in Bangladesh: An Analysis",
      authors: "Prof. Dr. A K M Motinur Rahman",
      venue: "The Journal of Politics and Administration (ISSN 1818-9571), Vol. 04, No. 01&2",
      year: 2012,
      category: "journal",
      doi: "https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf",
      badge: "Politics & Administration",
      abstract: "Examines evolving NGO methodologies from relief and rehabilitation towards rights-based empowerment, microcredit financial services, and civic advocacy."
    },
    {
      id: "p9",
      title: "Emergence of NGO in Bangladesh: An Overview",
      authors: "Prof. Dr. A K M Motinur Rahman",
      venue: "Journal of Islamic Education and Research, Vol. 08, No. 2, Islamic University, Kushtia",
      year: 2012,
      category: "journal",
      doi: "https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf",
      badge: "Islamic Edu & Research",
      abstract: "Traces the post-liberation emergence of non-governmental development organizations in Bangladesh and evaluates state-NGO relations over four decades."
    },
    {
      id: "p10",
      title: "How Does Islamic Economy Face the Challenges of Poverty? An Analysis",
      authors: "Prof. Dr. A K M Motinur Rahman",
      venue: "Journal of Islamic Education and Research, Islamic University, Kushtia, Vol. 7, No. 2",
      year: 2011,
      category: "journal",
      doi: "https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf",
      badge: "Islamic Economics",
      abstract: "Explores the socio-economic instruments of Islamic economics including Zakat, Waqf, and interest-free micro-equity financing in addressing extreme rural poverty."
    },
    {
      id: "p11",
      title: "Zakat and Security Programmes in Modern Society: A Comparative Analysis",
      authors: "Prof. Dr. A K M Motinur Rahman",
      venue: "Islamic University Studies, Faculty of Humanities and Social Sciences, Vol. 13, No. 2",
      year: 2012,
      category: "journal",
      doi: "https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf",
      badge: "IU Studies (Social Sciences)",
      abstract: "Compares statutory Western social security welfare systems with institutionalized Zakat mechanisms for sustainable social safety nets in developing countries."
    },
    {
      id: "p12",
      title: "E-Governance Initiatives in Bangladesh: Some Observations",
      authors: "Prof. Dr. A K M Motinur Rahman",
      venue: "Nepalese Journal of Public Policy and Governance, Vol. 29, Nepal",
      year: 2011,
      category: "journal",
      doi: "https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf",
      badge: "International Journal (Nepal)",
      abstract: "Evaluates citizen-centric digital public service delivery, district e-service centers, and public administrative readiness in Bangladesh."
    },
    {
      id: "p13",
      title: "Disaster Management in Bangladesh: Response and Recovery",
      authors: "Prof. Dr. A K M Motinur Rahman",
      venue: "Journal of Politics and Administration, Islamic University, Kushtia, Vol. 3, No. 1&2",
      year: 2008,
      category: "journal",
      doi: "https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf",
      badge: "Disaster Governance",
      abstract: "Analyzes cyclone preparedness, community shelter management, and disaster risk reduction (DRR) policies in coastal and riverine Bangladesh."
    },
    {
      id: "p14",
      title: "Poverty, Poverty Alleviation and Development: The Linkages",
      authors: "Prof. Dr. A K M Motinur Rahman",
      venue: "The Islamic University Studies, Vol. 11, No. 02",
      year: 2008,
      category: "journal",
      doi: "https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf",
      badge: "IU Studies",
      abstract: "Theorizes structural linkages between multidimensional poverty indicators, capability deprivation, and macroeconomic development policy."
    },
    {
      id: "p15",
      title: "Islamic Financial System: An Overview",
      authors: "Prof. Dr. A K M Motinur Rahman",
      venue: "Annual Journal of Bangladesh Public Administration Training Centre (BPATC), Savar, Dhaka, Vol. 11",
      year: 2006,
      category: "journal",
      doi: "https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf",
      badge: "BPATC Savar (Dhaka)",
      abstract: "Published in the apex national civil service training journal, examining Shariah governance, ethical banking principles, and public administrative relevance."
    },
    {
      id: "p16",
      title: "Impact of NGO Operations in Bangladesh: A Field Study on ASA, BRAC and Grameen Bank",
      authors: "Prof. Dr. A K M Motinur Rahman",
      venue: "Quarterly Journal of Bangladesh Public Administration Training Centre (BPATC), Savar, Dhaka, Vol. 41",
      year: 2006,
      category: "journal",
      doi: "https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf",
      badge: "BPATC Savar Field Study",
      abstract: "Rigorous empirical field study analyzing the comparative operational impacts of BRAC, ASA, and Grameen Bank microcredit borrowers across multiple districts."
    },
    {
      id: "p17",
      title: "The Debate on Reformation of Caretaker Government: An Evaluation",
      authors: "Prof. Dr. A K M Motinur Rahman",
      venue: "The Islamic University Studies, Vol. 10, No. 02",
      year: 2005,
      category: "journal",
      doi: "https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf",
      badge: "Constitutional Governance",
      abstract: "Evaluates the constitutional provisions, election administration dynamics, and democratic institutional debates surrounding the Non-Party Caretaker Government system."
    },
    {
      id: "p18",
      title: "The Role of OIC and Muslim Ummah",
      authors: "Prof. Dr. A K M Motinur Rahman",
      venue: "The Islamic University Studies, Vol. 09, No. 02",
      year: 2001,
      category: "journal",
      doi: "https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf",
      badge: "OIC & International Affairs",
      abstract: "Assesses the diplomatic role, conflict resolution mechanisms, and economic cooperation potential of the Organization of Islamic Cooperation."
    },
    {
      id: "p19",
      title: "Theory of Development Planning and the Planning Process in Bangladesh",
      authors: "Prof. Dr. A K M Motinur Rahman",
      venue: "Social Science Review, The Dhaka University Studies, Part-D, Vol. 17, No. 01",
      year: 2000,
      category: "journal",
      doi: "https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf",
      badge: "Dhaka University Studies",
      abstract: "Published in the Dhaka University Social Science Review, critically analyzing national Five-Year Plans, Planning Commission structures, and implementation bottlenecks."
    },
    {
      id: "p20",
      title: "Dependency Theory: Quest for Development in Underdeveloped Countries",
      authors: "Prof. Dr. A K M Motinur Rahman",
      venue: "Journal of the Rural Development Academy (RDA), Bogra, Vol. 07, No. 01",
      year: 1997,
      category: "journal",
      doi: "https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf",
      badge: "RDA Bogra",
      abstract: "Analyzes center-periphery dependency paradigms, unequal international trade terms, and endogenous rural development models in post-colonial states."
    },
    {
      id: "c1",
      title: "Generation Approaches of NGO in Bangladesh: An Overview",
      authors: "Prof. Dr. A K M Motinur Rahman",
      venue: "4th International Conference on Public Organization (ICONPO IV), Kuala Lumpur, Malaysia",
      year: 2014,
      category: "conference",
      doi: "https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf",
      badge: "ICONPO IV (Malaysia)",
      abstract: "Presented at ICONPO IV, mapping generational paradigms of non-governmental development organizations from relief services to social entrepreneurship."
    },
    {
      id: "c2",
      title: "Climate Change and Urban Governance in Bangladesh: An Overview on Dhaka Mega-City",
      authors: "Prof. Dr. A K M Motinur Rahman",
      venue: "8th NAPSIPAG International Conference, Kathmandu, Nepal",
      year: 2011,
      category: "conference",
      doi: "https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf",
      badge: "NAPSIPAG (Nepal)",
      abstract: "Presented at NAPSIPAG international summit organized by Tribhuvan University and Network of Asia-Pacific Schools of Public Administration."
    },
    {
      id: "c3",
      title: "Effective Leadership to Ensure Women Empowerment Through NGO Activities: A Study",
      authors: "Prof. Dr. A K M Motinur Rahman",
      venue: "9th NAPSIPAG International Conference, Colombo, Sri Lanka",
      year: 2012,
      category: "conference",
      doi: "https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf",
      badge: "NAPSIPAG (Sri Lanka)",
      abstract: "Empirical field study on rural women leadership development through participatory micro-finance programs."
    },
    {
      id: "c4",
      title: "Disaster Management in Bangladesh: Response and Recovery",
      authors: "Prof. Dr. A K M Motinur Rahman",
      venue: "10th NAPSIPAG International Conference, Jawaharlal Nehru University (JNU), New Delhi, India",
      year: 2013,
      category: "conference",
      doi: "https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf",
      badge: "NAPSIPAG & JNU (India)",
      abstract: "Presented at JNU New Delhi on post-2015 development agenda for disaster management and land governance."
    },
    {
      id: "c5",
      title: "Sustainable Development Goals in Bangladesh: Issues and Challenges",
      authors: "Prof. Dr. A K M Motinur Rahman",
      venue: "International Conference on Religion, Culture and Governance in the Contemporary World (ICRCG), Kuala Lumpur, Malaysia",
      year: 2018,
      category: "conference",
      doi: "https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf",
      badge: "ICRCG 2018 (Malaysia)",
      abstract: "Presented in Kuala Lumpur on socio-cultural alignment and administrative frameworks for SDG implementation."
    }
  ]
};

// Storage helper functions - Versioned key to immediately update to authentic VC data
const STORAGE_KEY = "vc_motinur_rahman_portfolio_v4";

function loadTeacherData() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    saveTeacherData(DEFAULT_TEACHER_DATA);
    return JSON.parse(JSON.stringify(DEFAULT_TEACHER_DATA));
  }
  try {
    const parsed = JSON.parse(stored);
    return {
      profile: { ...DEFAULT_TEACHER_DATA.profile, ...(parsed.profile || {}) },
      skills: Array.isArray(parsed.skills) && parsed.skills.length > 0 ? parsed.skills : DEFAULT_TEACHER_DATA.skills,
      education: Array.isArray(parsed.education) && parsed.education.length > 0 ? parsed.education : DEFAULT_TEACHER_DATA.education,
      experiences: Array.isArray(parsed.experiences) && parsed.experiences.length > 0 ? parsed.experiences : DEFAULT_TEACHER_DATA.experiences,
      publications: Array.isArray(parsed.publications) && parsed.publications.length > 0 ? parsed.publications : DEFAULT_TEACHER_DATA.publications
    };
  } catch (e) {
    console.error("Error reading localStorage, reverting to defaults", e);
    return JSON.parse(JSON.stringify(DEFAULT_TEACHER_DATA));
  }
}

function saveTeacherData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (e) {
    console.error("Error saving data to localStorage", e);
    return false;
  }
}

function resetTeacherData() {
  localStorage.removeItem(STORAGE_KEY);
  return loadTeacherData();
}
