import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function OtherWorkCard({
  title,
  category,
  description,
  imageSrc,
  linkText = "View Project",
  badge,
}) {
  return (
    <div className="group bg-white rounded-xl border border-sand-200 overflow-hidden shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col h-full">
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] bg-charcoal-950 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {badge && (
          <div className="absolute top-3 right-3 bg-charcoal-900/80 backdrop-blur-sm border border-charcoal-700 text-[10px] uppercase tracking-wider font-semibold text-charcoal-200 px-2.5 py-1 rounded-full">
            {badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          <span className="text-[11px] uppercase tracking-wider font-semibold text-charcoal-500 mb-2 block">
            {category}
          </span>
          <h4 className="text-lg sm:text-xl font-bold tracking-tight text-charcoal-900 mb-2 group-hover:text-charcoal-700 transition-colors">
            {title}
          </h4>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
            {description}
          </p>
        </div>

        {/* Footer info */}
        <div className="mt-5 pt-3 border-t border-sand-100 flex items-center justify-between text-xs font-semibold text-charcoal-700">
          <span className="group-hover:text-charcoal-900 transition-colors">
            {linkText}
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-charcoal-400 group-hover:text-charcoal-900" />
        </div>
      </div>
    </div>
  )
}
