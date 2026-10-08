import React from 'react'
import ScrollReveal from './ScrollReveal.jsx'

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#1E1E1E] text-[#C5C5C5] pt-24 sm:pt-32 md:pt-40 pb-24 sm:pb-32 md:pb-40">
      <ScrollReveal className="max-w-[1120px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-16">
        
        {/* Left: LET'S CONNECT (Massive Bold Typography) */}
        <div className="select-none">
          <h2 className="text-5xl sm:text-7xl md:text-[84px] lg:text-[94px] font-bold tracking-tight text-[#C5C5C5] leading-[0.95] uppercase">
            LET’S<br />CONNECT
          </h2>
        </div>

        {/* Right: Contact Links with Handwritten Text */}
        <div className="flex flex-col space-y-6 sm:space-y-7 md:space-y-8 md:pr-8 lg:pr-16">
          {/* Mail */}
          <a
            href="mailto:aditi.chaware@gmail.com"
            className="group flex items-center gap-4 text-[#C5C5C5] hover:text-white transition-colors"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
              <img 
                src="/images/icons/mail.png" 
                alt="Mail icon" 
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
            <span className="font-handwriting italic text-2xl sm:text-3xl text-[#C5C5C5] group-hover:text-white transition-colors">
              Mail
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aditi-chaware-20a8a5336/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 text-[#C5C5C5] hover:text-white transition-colors"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
              <img 
                src="/images/icons/linkedin.png" 
                alt="LinkedIn icon" 
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
            <span className="font-handwriting italic text-2xl sm:text-3xl text-[#C5C5C5] group-hover:text-white transition-colors">
              Linkedin
            </span>
          </a>

          {/* Behance */}
          <a
            href="https://www.behance.net/aditichaware17"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 text-[#C5C5C5] hover:text-white transition-colors"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
              <img 
                src="/images/icons/behance.png" 
                alt="Behance icon" 
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
            <span className="font-handwriting italic text-2xl sm:text-3xl text-[#C5C5C5] group-hover:text-white transition-colors">
              Behance
            </span>
          </a>
        </div>

      </ScrollReveal>
    </footer>
  )
}
