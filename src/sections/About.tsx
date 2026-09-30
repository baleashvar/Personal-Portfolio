const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    expiry: 'Issued Aug 2025 · Expires Aug 2028',
    icon: '☁️',
    url: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/5699481c96934d21870503ff80bac4aa',
  },
  {
    name: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    expiry: 'Issued Apr 2026 · Expires Apr 2028',
    icon: '🤖',
    url: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/d2b8ecd3ad44469e8a467d625e986494',
  },
]

const badges = [
  {
    name: 'Build with Gemini',
    issuer: 'Google',
    icon: '💎',
    url: 'https://www.credly.com/badges/5e83572a-0bd8-4cc6-81e3-17ac911905a6',
  },
]

export default function About() {
  return (
    <section id="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1152px', width: '100%', margin: '0 auto' }}>

        {/* Heading */}
        <div style={{ marginBottom: '48px' }}>
          <span style={{ color: 'var(--accent)', fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>Who I am</span>
          <h2 style={{ color: 'var(--text)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, marginTop: '8px' }}>About Me</h2>
          <div style={{ width: '48px', height: '3px', background: 'var(--accent)', marginTop: '12px', borderRadius: '2px' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>

          {/* Bio */}
          <div style={{ maxWidth: '720px' }}>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '12px' }}>
              Proactive AWS Cloud DevOps Engineer with 3+ years of experience building scalable,
              high-performance cloud enterprise applications and data pipelines in the aviation sector.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
              Strong expertise in Python and AWS, with a proven track record of improving system
              latency, reliability, and business-critical reporting workflows for TCS clients like
              British Airways.
            </p>
          </div>

          {/* Certifications */}
          <div>
            <h3 style={{ color: 'var(--text)', fontSize: '1rem', fontWeight: 600, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--accent)' }}>📜</span> Certifications
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {certifications.map((cert) => (
                <a
                  key={cert.name}
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '14px 18px', borderRadius: '10px', background: 'var(--surface)', border: '1px solid var(--border)', textDecoration: 'none', minWidth: '260px' }}
                >
                  <span style={{ fontSize: '1.75rem' }}>{cert.icon}</span>
                  <div>
                    <div style={{ color: 'var(--text)', fontSize: '0.875rem', fontWeight: 600 }}>{cert.name}</div>
                    <div style={{ color: 'var(--muted)', fontSize: '0.75rem', marginTop: '2px' }}>{cert.issuer}</div>
                    <div style={{ color: 'var(--accent)', fontSize: '0.7rem', marginTop: '2px' }}>{cert.expiry}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Badges */}
          <div>
            <h3 style={{ color: 'var(--text)', fontSize: '1rem', fontWeight: 600, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--accent)' }}>🏅</span> Badges
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {badges.map((badge) => {
                const content = (
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '14px 18px', borderRadius: '10px', background: 'var(--surface)', border: '1px solid var(--border)', textDecoration: 'none', minWidth: '200px' }}>
                    <span style={{ fontSize: '1.75rem' }}>{badge.icon}</span>
                    <div>
                      <div style={{ color: 'var(--text)', fontSize: '0.875rem', fontWeight: 600 }}>{badge.name}</div>
                      <div style={{ color: 'var(--muted)', fontSize: '0.75rem', marginTop: '2px' }}>{badge.issuer}</div>
                    </div>
                  </div>
                )
                return badge.url ? (
                  <a key={badge.name} href={badge.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>{content}</a>
                ) : (
                  <div key={badge.name}>{content}</div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
