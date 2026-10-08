import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Clock } from 'lucide-react'

export default function CaseStudyPlaceholder({ title, category, imageSrc, backLink = "/" }) {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-sand-100 min-h-screen text-charcoal-900 py-16 px-5 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(backLink)}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-charcoal-600 hover:text-charcoal-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </button>

        <div className="bg-white rounded-2xl border border-sand-200 overflow-hidden shadow-card p-8 sm:p-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase tracking-wider font-semibold text-charcoal-500 bg-sand-100 px-3 py-1 rounded-full border border-sand-200 inline-block mb-3">
              {category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-900 mb-4">
              {title}
            </h1>
            <p className="text-charcoal-600 leading-relaxed">
              Full interactive case study document is currently being prepared with end-to-end design artifacts, user testing insights, and system design specifications.
            </p>
          </div>

          {imageSrc && (
            <div className="rounded-xl overflow-hidden border border-sand-200 mb-8 bg-sand-50">
              <img src={imageSrc} alt={title} className="w-full h-auto object-cover" />
            </div>
          )}

          <div className="p-4 rounded-xl bg-sand-50 border border-sand-200 flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-charcoal-600 font-medium">
              <Clock className="w-4 h-4 text-charcoal-500" />
              <span>Full case study coming soon</span>
            </div>
            <Link
              to="/"
              className="text-xs uppercase tracking-wider font-semibold text-charcoal-900 hover:underline"
            >
              Explore Other Work →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
