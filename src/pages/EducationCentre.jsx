import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const sections = [
  {
    id: 'rules',
    icon: '📋',
    title: 'Rules & Laws of the Game',
    content: `## The Basics

Netball is a fast-paced team sport played on a rectangular court, divided into thirds. Each team has seven players on court at a time, each assigned a specific position with defined movement zones.

### Key Rules

**Footwork:** When you catch the ball, you must land on one foot (the pivot foot) and can move the other — but you cannot drag, re-ground, or jump from the pivot foot while in possession. This is called a footwork violation.

**Held ball:** You have three seconds to release the ball after catching or receiving it. Holding longer is a "held ball" infringement.

**Obstruction:** You must be at least 0.9 metres (3 feet) from a player with the ball before attempting to intercept or defend. Getting closer while attempting to defend is obstruction.

**Contact:** You cannot push, hold, or knock an opponent. Any physical contact that affects the game is penalised.

**Offside:** Each position has a defined zone on the court. Moving outside your zone — even without the ball — is offside.

### Penalties

When a rule is broken, the opposing team is awarded a **free pass** from the spot of the infringement. For obstruction and contact infringements, the player is penalised and must stand beside the thrower until the pass is made.

### Starting & Restarting Play

The game starts with a **centre pass** — taken by Centre — alternating between teams after each goal. After a goal, the team that was scored against takes the centre pass.`,
  },
  {
    id: 'positions',
    icon: '🏃',
    title: 'Positions Explained',
    content: `## The Seven Positions

Each of the seven positions has a specific role and a defined area of the court in which they can operate.

| Position | Abbreviation | Primary Role |
|----------|-------------|-------------|
| Goal Shooter | GS | Score goals; operates only in the goal third and shooting circle |
| Goal Attack | GA | Score and attack; can move into centre third and shooting circle |
| Wing Attack | WA | Create attacking play; moves in centre third and opposing goal third (not the circle) |
| Centre | C | Link defence and attack; the only player who can access all three thirds (not the circles) |
| Wing Defence | WD | Apply pressure to opposing WA; moves in centre third and defensive goal third |
| Goal Defence | GD | Defend against opposing GA; can enter the defensive shooting circle |
| Goal Keeper | GK | Last line of defence; stays in defensive goal third and circle |

### Tips for New Players

- **GS & GK** have the smallest zones — great for players building court awareness.
- **Centre** is the most physically demanding position — requiring the most running.
- **GA & GD** are versatile attacking/defending positions — great for gaining a full picture of the game.
- At Simunye, we actively encourage rotating positions so everyone experiences different perspectives on the game.`,
  },
  {
    id: 'tactics',
    icon: '🧠',
    title: 'Tactics & Strategies',
    content: `## Attacking Play

### Creating Space
The most fundamental attacking principle: if you don't have the ball, your job is to create space — either for yourself or for a teammate. This involves timing runs, changing direction sharply, and reading where the ball is going.

### The Give-and-Go
A simple but effective move: pass the ball to a teammate, then immediately sprint into space to receive it back. This exploits defensive players who ball-watch.

### Working the Circle
Goal Attack and Goal Shooter need to create and protect space in the shooting circle. Screens (within the rules — no contact), timing, and reading the play are key.

## Defensive Play

### Man-to-Man Marking
Each defender is assigned to an opposing player. The goal is to prevent that player from receiving the ball cleanly and to contest any passes or shots.

### Zone Defence
Rather than following individual players, defenders cover zones of the court. More complex but can disrupt patterned attacking play.

### Forcing Errors
Applying legal pressure at 0.9m — arms up, body low, staying legal — forces attackers to rush their passes and decisions. Turnovers often come from patience, not aggression.

## General Principles

- **Communicate constantly.** Call for the ball, call warnings, call positions.
- **Look before you catch.** Scan the court as the ball comes to you so you know where to go next before you have it.
- **Keep it simple.** In social netball especially, the simple, accurate pass beats the flashy long one.`,
  },
  {
    id: 'fitness',
    icon: '💪',
    title: 'Fitness & Drills',
    content: `## What Netball Fitness Looks Like

Netball is an intermittent sport — short bursts of sprint, change of direction, jump, and stop, repeated throughout a 60-minute game. The fitness demands are quite different from distance running or weight training.

### Key Fitness Components

**Agility:** The ability to change direction quickly and efficiently. Ladder drills and cone patterns are excellent for this.

**Speed off the mark:** Netball rewards short, explosive acceleration over sustained pace. Box jump variations and short sprint work help here.

**Jump height & landing:** Shooting and defending both involve jumping. Plyometric training — squat jumps, broad jumps — develops this, and safe landing mechanics protect your ankles and knees.

**Aerobic base:** Sustained fitness across a match requires a solid aerobic foundation. Interval running (e.g., 30 seconds on, 30 seconds off) mirrors the demands of the sport better than steady-state running.

## Drills for Practice

### The Triangle Drill
Three players form a triangle about 3m apart. Pass the ball around the triangle as fast as possible, moving clockwise. After 30 seconds, switch direction. Focus on flat, accurate passes and quick footwork.

### Star Footwork
One player in the centre, five cones around them like a star at 2m distance. Sprint to each cone and back in sequence — both clockwise and anti-clockwise. Develops the quick direction changes common in match play.

### Shooting Under Pressure
Shooter takes a shot; if they score, they take a step back. If they miss, they take a step forward. Aim to get as far from the post as possible. Builds shooting accuracy and nerve.`,
  },
  {
    id: 'injury',
    icon: '🩺',
    title: 'Injury Prevention & Wellness',
    content: `## The Most Common Netball Injuries

Understanding what tends to go wrong helps you prevent it.

**Ankle sprains** are the most common netball injury — caused by landing awkwardly or changing direction on uneven ground. Strengthening the muscles around your ankle and always warming up properly reduces risk significantly.

**Knee injuries** — particularly ACL and meniscal injuries — can occur from high-impact landings or twisting while bearing weight. Strong quads and hamstrings, and proper landing mechanics (land on both feet, absorb through your knees and hips) are protective.

**Finger injuries** — fractures and dislocations from catching bad passes. Use proper catching technique: fingers spread, hands form a "W" or "basket" shape to receive the ball.

## Warm-Up Protocol (10 minutes)

1. **Light jog around the court** — 2 minutes
2. **Dynamic stretches** — leg swings, arm circles, hip circles — 3 minutes
3. **Agility work** — side shuffles, high knees, lateral bounds — 2 minutes
4. **Sport-specific movements** — catching drills, short sprints — 3 minutes

Never skip the warm-up. Cold muscles and joints are significantly more injury-prone.

## Cool-Down & Recovery

After play, spend 5–10 minutes on static stretching (holding each stretch 20–30 seconds):
- Quad stretch (standing, one leg)
- Hamstring stretch (seated or standing)
- Calf stretch (against a wall)
- Hip flexor lunge stretch
- Shoulder and chest stretches

Drink water. Your calves and feet did a lot of work.

## When to See a Physio

Don't tough out persistent pain. Rule of thumb: if something hurts for more than 48 hours after activity, or the pain is sharp rather than muscular soreness — see a physiotherapist. Injuries caught early are dramatically easier to treat.`,
  },
]

export default function EducationCentre() {
  const [active, setActive] = useState('rules')
  const activeSection = sections.find((s) => s.id === active)

  return (
    <main>
      {/* Hero */}
      <section
        className="py-20 px-4 text-white"
        style={{ background: 'linear-gradient(135deg, #2540E8, #121E6B)' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ fontFamily: "'Space Mono', monospace", color: '#A5B4FC', letterSpacing: '2px' }}
          >
            Education Centre
          </p>
          <h1 className="text-4xl sm:text-5xl tracking-tight mb-4" style={{ color: '#fff' }}>
            Understand the game.
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Inter', sans-serif", fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}
          >
            Everything you need to know about netball — whether you've never played or just want to sharpen your knowledge.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Sidebar nav */}
          <aside className="lg:w-64 shrink-0">
            <nav className="lg:sticky lg:top-24 space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => setActive(section.id)}
                  className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-full text-sm font-medium transition-all"
                  style={
                    active === section.id
                      ? { background: '#2540E8', color: '#fff' }
                      : { color: '#565F6E' }
                  }
                  onMouseEnter={e => {
                    if (active !== section.id) (e.currentTarget).style.background = '#ECEEE7'
                  }}
                  onMouseLeave={e => {
                    if (active !== section.id) (e.currentTarget).style.background = 'transparent'
                  }}
                >
                  <span className="text-lg">{section.icon}</span>
                  {section.title}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {active === 'positions' && <CourtDiagram />}

            <div className="prose max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {activeSection?.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function CourtDiagram() {
  return (
    <div
      className="mb-8 rounded-2xl overflow-hidden p-6"
      style={{ background: '#ECEEE7', border: '1px solid rgba(37,64,232,0.12)' }}
    >
      <h3
        className="text-sm font-bold uppercase tracking-wider mb-4 mono"
        style={{ color: '#2540E8', fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', letterSpacing: '2px' }}
      >
        Court Zones
      </h3>
      <svg
        viewBox="0 0 300 520"
        className="w-full max-w-xs mx-auto"
        aria-label="Netball court diagram showing player zones"
      >
        {/* Court background */}
        <rect x="10" y="10" width="280" height="500" rx="4" fill="#ffffff" stroke="#2540E8" strokeWidth="2" />

        {/* Third lines */}
        <line x1="10" y1="177" x2="290" y2="177" stroke="#2540E8" strokeWidth="1.5" strokeDasharray="6,3" />
        <line x1="10" y1="343" x2="290" y2="343" stroke="#2540E8" strokeWidth="1.5" strokeDasharray="6,3" />

        {/* Shooting circles */}
        <path d="M 80 10 A 120 120 0 0 1 220 10" fill="none" stroke="#4E63EE" strokeWidth="1.5" />
        <path d="M 80 510 A 120 120 0 0 0 220 510" fill="none" stroke="#4E63EE" strokeWidth="1.5" />

        {/* Centre circle */}
        <circle cx="150" cy="260" r="24" fill="none" stroke="#2540E8" strokeWidth="1.5" />
        <circle cx="150" cy="260" r="3" fill="#2540E8" />

        {/* GS */}
        <rect x="110" y="30" width="80" height="26" rx="13" fill="#2540E8" />
        <text x="150" y="48" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">GS</text>

        {/* GK */}
        <rect x="110" y="463" width="80" height="26" rx="13" fill="#121E6B" />
        <text x="150" y="481" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">GK</text>

        {/* GA */}
        <rect x="55" y="88" width="80" height="26" rx="13" fill="#4E63EE" />
        <text x="95" y="106" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">GA</text>

        {/* GD */}
        <rect x="165" y="404" width="80" height="26" rx="13" fill="#4E63EE" />
        <text x="205" y="422" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">GD</text>

        {/* WA */}
        <rect x="165" y="88" width="80" height="26" rx="13" fill="#FF3E7F" />
        <text x="205" y="106" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">WA</text>

        {/* WD */}
        <rect x="55" y="404" width="80" height="26" rx="13" fill="#FF3E7F" />
        <text x="95" y="422" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">WD</text>

        {/* C */}
        <rect x="110" y="246" width="80" height="26" rx="13" fill="#10131A" />
        <text x="150" y="264" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">C</text>

        {/* Zone labels */}
        <text x="150" y="155" textAnchor="middle" fill="#565F6E" fontSize="9">Attacking Third</text>
        <text x="150" y="235" textAnchor="middle" fill="#565F6E" fontSize="9">Centre Third</text>
        <text x="150" y="380" textAnchor="middle" fill="#565F6E" fontSize="9">Defensive Third</text>
      </svg>

      <div className="mt-4 flex flex-wrap gap-2 justify-center text-xs">
        {[
          { color: '#2540E8', label: 'Shooting positions (GS, GK)' },
          { color: '#4E63EE', label: 'Attack/Defence (GA, GD)' },
          { color: '#FF3E7F', label: 'Wing positions (WA, WD)' },
          { color: '#10131A', label: 'Centre (C)' },
        ].map((item) => (
          <span key={item.label} className="flex items-center gap-1.5" style={{ color: '#565F6E' }}>
            <span className="inline-block w-3 h-3 rounded-full" style={{ background: item.color }} />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  )
}
