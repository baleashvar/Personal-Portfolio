export interface Experience {
  title: string
  company: string
  client?: string
  period: string
  points: string[]
}

export interface Education {
  degree: string
  school: string
  period: string
  gpa: string
}

export interface Publication {
  title: string
  description: string
  year: string
}

export interface Skill {
  name: string
  level: number // 0-100
}

export interface SkillCategory {
  category: string
  skills: Skill[]
}

export interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  live?: string
}

export interface KnowMeCard {
  image: string
  title: string
  description: string
}

export interface SocialLink {
  label: string
  url: string
  icon: string
}
