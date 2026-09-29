// Updated manually by team admin - weekly training details from @simunye_community
const TRAINING_VENUE = 'Discovery Sports Park, Parkmore, Sandton'

const trainingDates = ['2026-09-30', '2026-10-07', '2026-10-14', '2026-10-21', '2026-10-28']

const training = trainingDates.map((date, i) => ({
  id: i + 1,
  type: 'practice',
  title: 'Wednesday Training',
  date,
  time: '18:00',
  venue: TRAINING_VENUE,
  description: 'Our weekly session, led by a certified coach. All ages, genders and skill levels welcome - new faces especially.',
}))

const events = [
  ...training,
  {
    id: 100,
    type: 'tournament',
    title: 'Simunye Women\'s Month Netball Tournament',
    date: '2026-08-29',
    time: '09:00 – 13:00',
    venue: TRAINING_VENUE,
    description: 'Our first ever tournament - four teams, one court, a bring & braai, and a charity drive for two women\'s shelters.',
  },
]

export default events
