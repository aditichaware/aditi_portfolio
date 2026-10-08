import React from 'react'
import Hero from '../components/Hero.jsx'
import ProjectsSection from '../components/ProjectsSection.jsx'
import OtherWorkSection from '../components/OtherWorkSection.jsx'
import ProjectCursor from '../components/ProjectCursor.jsx'

export default function HomePage() {
  return (
    <main>
      <ProjectCursor />
      <Hero />
      <ProjectsSection />
      <OtherWorkSection />
    </main>
  )
}
