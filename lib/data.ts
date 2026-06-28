import type { LucideIcon } from 'lucide-react'
import { Atom, Stethoscope, BookOpen } from 'lucide-react'

export type Course = {
  slug: string
  name: string
  tagline: string
  icon: LucideIcon
  duration: string
  mode: string
  highlights: string[]
  subjects: string[]
  accent: string
}

export const courses: Course[] = [
  {
    slug: 'jee',
    name: 'JEE (Main + Advanced)',
    tagline: 'Crack IIT-JEE with concept-first learning',
    icon: Atom,
    duration: '1–2 Years',
    mode: 'Classroom & Online',
    highlights: [
      'Daily practice problems & doubt sessions',
      'Advanced-level test series',
      'Mentorship from IIT alumni',
      'Performance analytics dashboard',
    ],
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    accent: 'text-chart-1',
  },
  {
    slug: 'neet',
    name: 'NEET',
    tagline: 'Your pathway to top medical colleges',
    icon: Stethoscope,
    duration: '1–2 Years',
    mode: 'Classroom & Online',
    highlights: [
      'NCERT-focused conceptual clarity',
      'Weekly full-length mock tests',
      'Biology specialisation track',
      'Personalised revision plans',
    ],
    subjects: ['Physics', 'Chemistry', 'Biology'],
    accent: 'text-chart-4',
  },
  {
    slug: 'foundation',
    name: 'Foundation (Class 8–10)',
    tagline: 'Build strong fundamentals early',
    icon: BookOpen,
    duration: 'Annual Program',
    mode: 'Classroom & Online',
    highlights: [
      'Olympiad & NTSE preparation',
      'Conceptual science & maths building',
      'Habit & study-skill coaching',
      'Regular parent-teacher meetings',
    ],
    subjects: ['Science', 'Mathematics', 'Mental Ability'],
    accent: 'text-chart-3',
  },
]

export const stats = [
  { value: '25K+', label: 'Students Mentored' },
  { value: '500+', label: 'Selections in IITs' },
  { value: '1200+', label: 'Medical Selections' },
  { value: '18', label: 'Years of Excellence' },
]

export const toppers = [
  { name: 'Aarav Sharma', exam: 'JEE Advanced', rank: 'AIR 12', year: '2025' },
  { name: 'Diya Patel', exam: 'NEET', rank: 'AIR 27', year: '2025' },
  { name: 'Rohan Verma', exam: 'JEE Advanced', rank: 'AIR 45', year: '2025' },
  { name: 'Ananya Iyer', exam: 'NEET', rank: 'AIR 53', year: '2025' },
  { name: 'Kabir Mehta', exam: 'JEE Main', rank: '99.98 %ile', year: '2025' },
  { name: 'Saanvi Rao', exam: 'NEET', rank: 'AIR 88', year: '2025' },
]

export const testimonials = [
  {
    quote:
      'The mentorship at Apex changed how I approach problems. The faculty genuinely care about every student.',
    name: 'Ishan Gupta',
    detail: 'IIT Bombay, CSE',
  },
  {
    quote:
      'Structured test series and instant doubt support helped me stay consistent through two years of prep.',
    name: 'Meera Nair',
    detail: 'AIIMS Delhi',
  },
  {
    quote:
      'Joining the Foundation program early gave my daughter a head start. Her concepts are rock solid now.',
    name: 'Rajesh Kulkarni',
    detail: 'Parent, Class 10',
  },
]
