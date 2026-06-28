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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'start' }}>

          {/* Bio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
              Proactive AWS Cloud DevOps Engineer with 2.8+ years of experience building scalable,
              high-performance cloud enterprise applications and data pipelines in the aviation sector.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
              Strong expertise in Python and AWS, with a proven track record of improving system
              latency, reliability, and business-critical reporting workflows for TCS clients like
              British Airways.
            </p>

            {/* AWS Badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
              {[
                { name: 'AWS Certified Cloud Practitioner', id: '5699481c96934d21870503ff80bac4aa' },
                { name: 'AWS Certified AI Practitioner', id: 'd2b8ecd3ad44469e8a467d625e986494' },
              ].map((cert) => (
                <a
                  key={cert.id}
                  href={`https://cp.certmetrics.com/amazon/en/public/verify/credential/${cert.id}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '8px', background: 'var(--surface)', border: '1px solid var(--border)', textDecoration: 'none', width: 'fit-content' }}
                >
                  <span style={{ fontSize: '1.5rem' }}>☁️</span>
                  <div>
                    <div style={{ color: 'var(--text)', fontSize: '0.875rem', fontWeight: 600 }}>{cert.name}</div>
                    <div style={{ color: 'var(--muted)', fontSize: '0.75rem', marginTop: '2px' }}>Verify Credential →</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
