// Only includes players who have explicitly opted in to be listed publicly
// TODO: Replace sample entries with real opted-in player data before launch

const playerDirectory = [
  {
    id: 1,
    name: 'Thandi Mokoena',
    company: 'Standard Bank',
    role: 'Senior Analyst',
    industry: 'Finance',
    position: 'Goal Attack',
    linkedIn: 'https://linkedin.com',
    avatar: 'https://placehold.co/200x200/6B2D5C/ffffff?text=TM',
    isSample: true,
  },
  {
    id: 2,
    name: 'Sipho Dlamini',
    company: 'Deloitte',
    role: 'Consulting Manager',
    industry: 'Consulting',
    position: 'Centre',
    linkedIn: 'https://linkedin.com',
    avatar: 'https://placehold.co/200x200/8C4A7A/ffffff?text=SD',
    isSample: true,
  },
  {
    id: 3,
    name: 'Priya Naidoo',
    company: 'Vodacom',
    role: 'Product Lead',
    industry: 'Tech',
    position: 'Wing Defence',
    linkedIn: 'https://linkedin.com',
    avatar: 'https://placehold.co/200x200/E0A43A/ffffff?text=PN',
    isSample: true,
  },
]

export const industries = ['All', 'Finance', 'Law', 'Tech', 'Consulting', 'Insurance', 'Energy', 'Marketing', 'Other']

export default playerDirectory
