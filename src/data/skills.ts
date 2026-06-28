import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    category: 'Backend',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Node.js', level: 75 },
      { name: 'AWS Lambda & EC2', level: 85 },
      { name: 'ECS Fargate', level: 80 },
      { name: 'Java (Basics)', level: 50 },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 80 },
      { name: 'JavaScript (ES6+)', level: 80 },
      { name: 'HTML5 & CSS3', level: 85 },
    ],
  },
  {
    category: 'Data & Streaming',
    skills: [
      { name: 'Confluent Kafka & MSK', level: 80 },
      { name: 'IBM MQ', level: 75 },
      { name: 'AWS SQS & SES', level: 80 },
      { name: 'API Gateway', level: 80 },
      { name: 'CAML Layer', level: 70 },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL & RDS', level: 80 },
      { name: 'MongoDB & DynamoDB', level: 75 },
      { name: 'Aurora Postgres', level: 70 },
      { name: 'MemoryDB (Redis)', level: 65 },
    ],
  },
  {
    category: 'DevOps & Cloud',
    skills: [
      { name: 'AWS (Overall)', level: 85 },
      { name: 'Terraform', level: 75 },
      { name: 'Docker', level: 80 },
      { name: 'GitHub Actions', level: 80 },
      { name: 'Datadog & CloudWatch', level: 80 },
    ],
  },
  {
    category: 'Security & Testing',
    skills: [
      { name: 'AWS IAM', level: 80 },
      { name: 'Akamai WAF', level: 65 },
      { name: 'Azure Entra Auth', level: 65 },
      { name: 'Pytest & Jest', level: 75 },
      { name: 'Postman & JMeter', level: 75 },
    ],
  },
]
