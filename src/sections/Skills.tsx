import { useEffect, useRef, useState } from 'react'
import { skillCategories } from '../data/skills'

function SkillBar({ name, level }: { name: string; level: number }) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), 100)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [level])

  return (
    <div ref={ref}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span style={{ color: 'var(--text)', fontSize: '0.875rem' }}>{name}</span>
        <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 600 }}>{level}%</span>
      </div>
      <div style={{ height: '6px', borderRadius: '3px', background: 'var(--border)', overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          borderRadius: '3px',
          background: 'linear-gradient(90deg, var(--accent), #818cf8)',
          width: `${width}%`,
          transition: 'width 1s ease',
        }} />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1152px', width: '100%', margin: '0 auto' }}>

        {/* Heading */}
        <div style={{ marginBottom: '48px' }}>
          <span style={{ color: 'var(--accent)', fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>What I know</span>
          <h2 style={{ color: 'var(--text)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, marginTop: '8px' }}>Technical Skills</h2>
          <div style={{ width: '48px', height: '3px', background: 'var(--accent)', marginTop: '12px', borderRadius: '2px' }} />
        </div>

        {/* Skill Categories Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {skillCategories.map((cat) => (
            <div key={cat.category} style={{ padding: '24px', borderRadius: '12px', background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <h3 style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '20px' }}>
                {cat.category}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
