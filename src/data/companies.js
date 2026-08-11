const BASE = import.meta.env.BASE_URL

const companies = [
  { id: 1, name: 'Investec',  logo: `${BASE}images/companies/investec.png`,  industry: 'Finance' },
  { id: 2, name: 'Nedbank',   logo: `${BASE}images/companies/nedbank.png`,   industry: 'Finance' },
  { id: 3, name: 'BSG',       logo: `${BASE}images/companies/bsg.png`,       industry: 'Consulting' },
  { id: 4, name: 'ABSA',      logo: `${BASE}images/companies/absa.png`,      industry: 'Finance' },
  { id: 5, name: 'Discovery', logo: `${BASE}images/companies/discovery.png`, industry: 'Insurance' },
  { id: 6, name: 'SABC',      logo: `${BASE}images/companies/sabc.png`,      industry: 'Media' },
  { id: 7, name: 'Sasol',     logo: `${BASE}images/companies/sasol.png`,     industry: 'Energy' },
  { id: 8, name: 'Heineken',  logo: `${BASE}images/companies/heineken.png`,  industry: 'FMCG' },
]

export default companies
