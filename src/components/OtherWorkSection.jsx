import React, { useState } from 'react'
import ScrollReveal from './ScrollReveal.jsx'

export default function OtherWorkSection() {
  const [isPaused, setIsPaused] = useState(false)

  const projects = [
    {
      title: 'Understanding Emotional Connection to AI Chatbots',
      imageSrc: '/images/other_work/portfolio_extra1.png',
      link: 'https://drive.google.com/file/d/1aTBdkdGDK4nvsTl1PMGnRa8N7yeqqKPr/view?usp=sharing',
    },
    {
      title: 'Samsung Hackathon 2025 - HEY EVA!',
      imageSrc: '/images/other_work/portfolio_extra2.png',
      link: 'https://www.behance.net/gallery/244027267/Eva-Agentic-AI-Companion-Design-%28Samsung-Hackathon%29',
    },
    {
      title: 'IPL Infographics & Tournament Analytics',
      imageSrc: '/images/other_work/portfolio_extra3.png',
      link: 'https://www.behance.net/gallery/231655563/Information-Visualization-Indian-premiere-league',
    },
    {
      title: 'Krea: Kriya + Creativity',
      imageSrc: '/images/other_work/portfolio_extra4.png',
      link: 'https://www.figma.com/proto/JefcoB85cnDyb9UzzptgDc/krea?node-id=1-71&viewport=332%2C-21%2C0.02&t=6EAV5fBcsB9buLfU-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1',
    },
    {
      title: 'PulseBlend: Music & Colours',
      imageSrc: '/images/other_work/portfolio_extra5.png',
      link: 'https://www.figma.com/proto/Wm6pjwfjOd9u5CyNV7H5dp/tangible-design?node-id=1-13&viewport=149%2C53%2C0.11&t=1OZdl3D93Ct3qeoe-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1',
    },
  ]

  // Duplicate items for a seamless, continuous infinite marquee
  const marqueeItems = [...projects, ...projects]

  return (
    <section className="bg-[#F6F5F1] text-charcoal-900 pt-8 sm:pt-12 md:pt-14 pb-24 sm:pb-28 md:pb-32 overflow-hidden">
      {/* Title */}
      <ScrollReveal className="max-w-[1120px] mx-auto px-5 sm:px-8 lg:px-12 mb-8 sm:mb-10">
        <h2 className="font-handwriting italic text-2xl sm:text-3xl md:text-[34px] text-[#1A1A1A] font-normal">
          Here’s what else I’ve been working on
        </h2>
      </ScrollReveal>

      {/* Infinite Carousel / Marquee Track */}
      <ScrollReveal>
        <div 
          className="w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="animate-marquee flex items-center gap-4 sm:gap-5 md:gap-6 pl-5 sm:pl-8 lg:pl-12"
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {marqueeItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                data-project-card="true"
                className="group relative block flex-shrink-0 w-[310px] sm:w-[420px] md:w-[480px] lg:w-[530px] aspect-[1515/852] rounded-2xl md:rounded-[22px] overflow-hidden shadow-sm border border-black/5 bg-[#141517] cursor-pointer transition-transform duration-300 hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
                title={item.title}
                aria-label={item.title}
              >
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-full object-cover select-none pointer-events-none"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
