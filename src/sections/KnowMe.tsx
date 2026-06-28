import me1 from '../assets/me1.png'
import ss2 from '../assets/ss2.png'
import me3 from '../assets/me3.png'

const cards = [
  {
    image: me1,
    title: 'Hosting TT and FF',
    description:
      'As lead organizer of ThinkInfinity\'s popular programs "Thoughtful Thursdays" and "Fun Fridays", I transformed experimental events into the company\'s most loved weekly happenings!',
  },
  {
    image: ss2,
    title: 'TT and FF Unveiled',
    description:
      'Thoughtful Thursdays became a platform where employees could showcase presentation skills and teach valuable lessons to others. Fun Fridays brought joy to cap off the week with exciting games like treasure hunts and balloon bursting.',
  },
  {
    image: me3,
    title: 'Curator of Insights and Joy',
    description:
      'Through meticulous research, creative planning, and charismatic on-stage presence, I curated one-of-a-kind experiences for colleagues — bringing more lightness and collaboration across departments.',
  },
]

export default function KnowMe() {
  return (
    <section id="know-me" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1152px', width: '100%', margin: '0 auto' }}>

        {/* Heading */}
        <div style={{ marginBottom: '48px' }}>
          <span style={{ color: 'var(--accent)', fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>Beyond the code</span>
          <h2 style={{ color: 'var(--text)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, marginTop: '8px' }}>Know Me</h2>
          <div style={{ width: '48px', height: '3px', background: 'var(--accent)', marginTop: '12px', borderRadius: '2px' }} />
        </div>

        {/* Quote */}
        <blockquote style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '20px', marginBottom: '48px', maxWidth: '600px' }}>
          <p style={{ color: 'var(--muted)', fontSize: '1rem', fontStyle: 'italic', lineHeight: 1.8 }}>
            "It is the people you never imagine anything of, do the things no one imagines."
          </p>
        </blockquote>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {cards.map((card) => (
            <div key={card.title} style={{ borderRadius: '12px', background: 'var(--surface)', border: '1px solid var(--border)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '100%', height: '220px', overflow: 'hidden' }}>
                <img src={card.image} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h3 style={{ color: 'var(--text)', fontWeight: 600, fontSize: '1rem' }}>{card.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.7 }}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
