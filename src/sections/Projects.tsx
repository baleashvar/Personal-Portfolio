import { useState } from 'react'
import { projectGroups } from '../data/projects'
import type { Project } from '../types'

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

function ProjectCard({ project }: { project: Project }) {
  return (
    <div style={{ padding: '20px', borderRadius: '10px', background: 'var(--surface)', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '12px', height: '100%' }}>
      <h4 style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.95rem' }}>{project.title}</h4>
      <p style={{ color: 'var(--muted)', fontSize: '0.8rem', lineHeight: 1.6, flex: 1 }}>{project.description}</p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {project.tags.map((tag) => (
          <span key={tag} style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '999px', background: 'rgba(99,102,241,0.1)', color: 'var(--accent)', border: '1px solid rgba(99,102,241,0.2)' }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      {(project.github || project.live) && (
        <div style={{ display: 'flex', gap: '12px' }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--muted)', fontSize: '0.8rem', textDecoration: 'none' }}>
              <GithubIcon /> GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent)', fontSize: '0.8rem', textDecoration: 'none' }}>
              <ExternalIcon /> Live Demo
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const categories = ['All', ...projectGroups.map((g) => g.category)]

  const filtered = activeCategory === 'All'
    ? projectGroups
    : projectGroups.filter((g) => g.category === activeCategory)

  return (
    <section id="projects" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1152px', width: '100%', margin: '0 auto' }}>

        {/* Heading */}
        <div style={{ marginBottom: '32px' }}>
          <span style={{ color: 'var(--accent)', fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>What I've built</span>
          <h2 style={{ color: 'var(--text)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, marginTop: '8px' }}>Projects</h2>
          <div style={{ width: '48px', height: '3px', background: 'var(--accent)', marginTop: '12px', borderRadius: '2px' }} />
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              style={{ padding: '6px 16px', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 500, cursor: 'pointer', border: '1px solid', transition: 'all 0.2s',
                background: activeCategory === cat ? 'var(--accent)' : 'transparent',
                color: activeCategory === cat ? 'white' : 'var(--muted)',
                borderColor: activeCategory === cat ? 'var(--accent)' : 'var(--border)',
              }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Project Groups */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {filtered.map((group) => (
            <div key={group.category}>
              <h3 style={{ color: 'var(--muted)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
                {group.category}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
                {group.projects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
