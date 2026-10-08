import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectCard({
  title,
  description,
  tags,
  tagBorderColor = "border-zinc-300",
  tagBgColor = "bg-transparent",
  imageSrc,
  route,
  layoutReversed = false,
}) {
  return (
    <Link
      to={route}
      data-project-card="true"
      className="group block cursor-pointer"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-14 xl:gap-16">
        
        {/* Project Image */}
        <div className={`w-full overflow-hidden rounded-2xl shadow-sm ${layoutReversed ? 'md:order-2' : 'md:order-1'}`}>
          <div className="aspect-[16/10] w-full overflow-hidden bg-zinc-100">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Project Info */}
        <div className={`flex flex-col justify-center space-y-4 max-w-lg ${layoutReversed ? 'md:order-1 md:pr-4' : 'md:order-2 md:pl-4'}`}>
          {/* Title */}
          <h3 className="text-2xl sm:text-[26px] lg:text-[28px] font-bold tracking-tight text-[#181818] leading-snug group-hover:text-black transition-colors whitespace-pre-line">
            {title}
          </h3>

          {/* Description */}
          <p className="text-[#3A3A38] text-[15px] sm:text-base leading-relaxed font-normal whitespace-pre-line">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2.5 pt-1">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className={`inline-block px-4 py-1.5 rounded-full border text-xs sm:text-[13px] font-medium text-[#2E2E2D] ${tagBorderColor} ${tagBgColor} transition-colors`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </Link>
  )
}
