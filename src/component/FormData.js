const month = [
  'Jan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const day = Array.from(Array(32).keys()).slice(1);
const year = Array.from(Array(new Date().getFullYear() - 1949), (_, i) =>
  (i + 1950).toString(),
);

const gender = ['Male', 'Female'];

const question = [
  'White',
  'Black or African American',
  'American Indian and Alaska Native Alone',
  'Native Hawaiian or Other Pacific Islander',
  'Hispanic',
];

const internalMedicane = [
  'Internal Medicine Consultation',
  'Establish Care',
  'Immigration Exam',
  'IV infusion',
  'Weight Loss Consultation',
  'Lipocel Body Contouring',
  'Aesthetics-Botox, Dysport, Fillers',
  'Sexual Health',
  'Preoperative Evaluations',
  'Medical Marijuana Certification for',
  'Chronic Pain and other indicated',
  'Conditions',
  'Hormone Replacement Therapy',
];

const exerciseDays = ['Never', '1 - 2 Days', '3 - 4 Days', '5 + Days'];
const dietFollow = [
  'I have a well-rounded, Healthy Diet',
  'I have a Modified Diet / Diet Plan',
  "I don't have a particular Diet Plan",
];
const alcoholCheck = [
  "I don't drink",
  'Occasionally (less than monthy)',
  'A few times a month',
  'A few times a week',
  '1 - 2 Drinks / Day',
  '3 - 4 Drinks / Day',
  '5 +  Drinks / Day',
];

const smokeCheck = [
  'No',
  '0 - 1 Pack / Day',
  '1 - 2 Packs / Day',
  '2 + Packs / Day',
];

const caffeineCheck = [
  "I don't use caffeine",
  'Occasionally',
  'A few times a month',
  'A few times a week',
  '1 - 2 Drinks / Day',
  '3 - 4 Drinks / Day',
  '5 +  Drinks / Day',
];

const checking = ['In Office', 'Phone', 'Online (facetime)'];
const country = ['Pakistan', 'India', 'USA'];

const fatigue = [
  'No, Never',
  'Yes, Currently',
  'Not Currently, But within the last year',
  'No Currently and longer than 1 year ago',
];

const reasonForTest = [
  'Symptoms',
  'Exposure or Potential Exposure',
  'Event',
  'Pre-Travel Testing',
  'General Screening',
  'Work Requirement',
  'School or Daycare Requirement',
  'Pre Op Requirement',
  'Traveling to China - Please call our office for details',
];

const rapidTest1 = [
  'Rapid COVID-19 Antigen Test (Results in 15 minutes, Insurance accepted, $40 without Insurance)',
];
const rapidTest2 = [
  'Rapid COVID-19 Molecular NAAT Test (results in 30 minutes, $185 - Insurance Not Accepted)',
  'Rapid COVID-19 RT-PCR Test (Results in 1-3 hours $240 - Insurance Not Accepted',
];

const pcrCheck = [
  'Fever, Chills, Body',
  'Difficulty Breathing',
  'Cough',
  'Sore Throat',
  'Runny Nose',
  'Loss of Taste Or Smell',
  'All of them',
  'None of them',
];

const yn = ['Yes', 'No'];
const ynd = ['Yes', 'No', 'Don’t Know'];
const vaccine = ['Pfizer', 'Moderna', 'J&J', 'Others'];
const ethnicity = [
  'Caucacian',
  'Black or African American',
  'Native Hawaiin and Other Pacific Islander',
  ' American Indian and Alaskan Native',
  'Asian',
  'Hispanic',
];
const covidTest = [
  'I had a positive test that was performed at a Clinic or Laboratory',
  'I had a positive at-home test',
];
const covidCheck = ['COVID-19 Vaccine', 'COVID-19 Test'];

const timeZone = [
  'Abidjan (GMT)                                         10:48 PM',
  'Accra (GMT)                                            10:48 PM',
  'Addis Abadba (GMT+01:00)                  01:48 AM',
  'Asmara (GMT+03:00)                             11:48 PM',
];

const appointments = [
  'Medical Tourism',
  'Primary Care',
  'Aesthetic Services',
  'Medical Weight Loss',
  'Covid-19 Testing',
  'Covid-19 Treatment',
  'Covid-19 Vaccine',
  'Immigration Exams & Forms',
  'Lipocel Appointment',
  'Pre-Op Evaluations',
];

const Appointmentdata = [
  {
    title: 'Grace Totoe, Md, FACP',
    text: 'Telemedicine Doctor',
    date: '09:15 PM - 10:30 PM',
    phone: '763-496-5708',
    image: require('../assets/profile.png'),
  },
  {
    title: 'Grace Totoe, Md, FACP',
    text: 'Telemedicine Doctor',
    date: '09:15 PM - 10:30 PM',
    phone: '763-496-5708',
    image: require('../assets/profile.png'),
  },
  {
    title: 'Grace Totoe, Md, FACP',
    text: 'Telemedicine Doctor',
    date: '09:15 PM - 10:30 PM',
    phone: '763-496-5708',
    image: require('../assets/profile.png'),
  },
  {
    title: 'Grace Totoe, Md, FACP',
    text: 'Telemedicine Doctor',
    date: '09:15 PM - 10:30 PM',
    phone: '763-496-5708',
    image: require('../assets/profile.png'),
  },
  {
    title: 'Grace Totoe, Md, FACP',
    text: 'Telemedicine Doctor',
    date: '09:15 PM - 10:30 PM',
    phone: '763-496-5708',
    image: require('../assets/profile.png'),
  },
  {
    title: 'Grace Totoe, Md, FACP',
    text: 'Telemedicine Doctor',
    date: '09:15 PM - 10:30 PM',
    phone: '763-496-5708',
    image: require('../assets/profile.png'),
  },
  {
    title: 'Grace Totoe, Md, FACP',
    text: 'Telemedicine Doctor',
    date: '09:15 PM - 10:30 PM',
    phone: '763-496-5708',
    image: require('../assets/profile.png'),
  },
];
export {
  month,
  day,
  year,
  gender,
  question,
  internalMedicane,
  exerciseDays,
  dietFollow,
  alcoholCheck,
  smokeCheck,
  caffeineCheck,
  checking,
  country,
  fatigue,
  reasonForTest,
  rapidTest1,
  rapidTest2,
  pcrCheck,
  yn,
  ethnicity,
  covidTest,
  ynd,
  vaccine,
  covidCheck,
  timeZone,
  appointments,
  Appointmentdata,
};
