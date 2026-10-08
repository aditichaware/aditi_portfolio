import React from 'react'
import ProjectCard from './ProjectCard.jsx'
import ScrollReveal from './ScrollReveal.jsx'

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Deloitte Summer Internship',
      description: 'Turning a developer-dependent process into a self-serve experience.',
      tags: ['Interaction Design', 'Enterprise UX'],
      tagBorderColor: 'border-[#4A7C59]/60',
      tagBgColor: 'bg-[#EDF4EE]/40',
      imageSrc: '/images/projects/portfolio_work1.png',
      route: '/work/nexus',
      layoutReversed: false,
    },
    {
      title: 'Krushikendra Management',
      description: 'Turning a complex supply chain into one clear system.',
      tags: ['Object-Oriented UX', 'Dashboard UI'],
      tagBorderColor: 'border-[#6D8A5E]/60',
      tagBgColor: 'bg-[#EFF4EC]/40',
      imageSrc: '/images/projects/portfolio_work2.png',
      route: '/work/krushisetu',
      layoutReversed: true,
    },
    {
      title: 'Blinkit – Cognitive Ergonomics\nand Redesign',
      description: 'Evaluating and Redesigning for Reduced Cognitive Load in Quick Commerce',
      tags: ['Usability Testing', 'UI Redesign'],
      tagBorderColor: 'border-[#D6A752]/70',
      tagBgColor: 'bg-[#FDF9ED]/40',
      imageSrc: '/images/projects/portfolio_work3.png',
      route: '/work/blinkit',
      layoutReversed: false,
    },
    {
      title: 'UniBridge',
      description: 'Redesigning the Study Abroad Journey,\nEnd to End',
      tags: ['Service Design', 'UX Research'],
      tagBorderColor: 'border-[#6B9BD1]/70',
      tagBgColor: 'bg-[#EFF5FC]/40',
      imageSrc: '/images/projects/portfolio_work4.png',
      route: '/work/unibridge',
      layoutReversed: true,
    },
  ]

  return (
    <section id="work" className="bg-[#F6F5F1] text-charcoal-900 py-20 sm:py-24 md:py-28 lg:py-32">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 sm:mb-20 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight text-[#161616] mb-3">
            Featured Projects
          </h2>
          <p className="font-handwriting italic text-xl sm:text-2xl md:text-[26px] text-[#222222] leading-snug max-w-lg mx-auto">
            An ongoing collection of ideas and experiments<br />
            brought to life through design.
          </p>
        </ScrollReveal>

        {/* Projects Rows */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {projects.map((project, idx) => (
            <ScrollReveal key={idx}>
              <ProjectCard {...project} />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
