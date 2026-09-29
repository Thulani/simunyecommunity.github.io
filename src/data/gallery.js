// Team photos, oldest first - full-size in public/images/photos, 600px versions in photos/small
const BASE = import.meta.env.BASE_URL

const photo = (name) => `${BASE}images/photos/${name}.jpg`

const gallery = [
  { id: 1,  src: photo('2026-07-one-community'),    caption: 'One community, one court - July 2026' },
  { id: 2,  src: photo('2026-07-three-months'),     caption: 'Three months in - 1 July 2026' },
  { id: 3,  src: photo('2026-06-growing-squad'),    caption: 'The squad keeps growing - June 2026' },
  { id: 4,  src: photo('2026-06-hands-up'),         caption: 'Hands up for Simunye - June 2026' },
  { id: 5,  src: photo('2026-05-final-whistle'),    caption: 'All smiles after the final whistle - May 2026' },
  { id: 6,  src: photo('2026-05-winter-crew'),      caption: 'Winter training crew - May 2026' },
  { id: 7,  src: photo('2026-05-floodlights'),      caption: 'Bibs on under the floodlights - May 2026' },
  { id: 8,  src: photo('2026-04-wednesday-evening'), caption: 'Wednesday evening at Parkmore - April 2026' },
  { id: 9,  src: photo('2026-04-early-session'),    caption: 'One of our first sessions - April 2026' },
  { id: 10, src: photo('2025-10-under-the-lights'), caption: 'Under the lights - October 2025' },
  { id: 11, src: photo('2025-10-full-court'),       caption: 'A full court of players - October 2025' },
  { id: 12, src: photo('2025-10-warm-ups'),         caption: 'Warm-ups before the game - October 2025' },
  { id: 13, src: photo('2025-10-golden-hour'),      caption: 'Golden hour at the courts - October 2025' },
  { id: 14, src: photo('2025-10-spring-session'),   caption: 'Spring session - October 2025' },
  { id: 15, src: photo('2025-09-night-squad'),      caption: 'Where it started - September 2025' },
]

export default gallery
