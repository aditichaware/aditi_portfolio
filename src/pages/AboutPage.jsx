import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-sand-100 min-h-screen text-charcoal-900 py-16 px-5 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-charcoal-600 hover:text-charcoal-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="bg-white rounded-2xl border border-sand-200 overflow-hidden shadow-card p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-10">
            <div className="md:col-span-5">
              <div className="rounded-xl overflow-hidden border border-sand-200 shadow-sm">
                <img
                  src="/images/hero/portfolio_image4.png"
                  alt="Aditi Chaware"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7">
              <span className="text-xs uppercase tracking-widest font-semibold text-charcoal-500 mb-2 block">
                About Me
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-900 mb-4">
                Hi, I'm Aditi Chaware
              </h1>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                I am a UX Designer and researcher focused on solving complex workflow problems through intuitive, human-centered digital interfaces.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                With a background in user research, systems thinking, and cognitive ergonomics, I enjoy untangling ambiguity and turning real human insights into functional, aesthetic design systems.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-sand-200 flex justify-between items-center">
            <span className="text-xs uppercase tracking-wider text-charcoal-500 font-medium">
              Based in India • Available for Design Internships & Roles
            </span>
            <Link
              to="/#contact"
              className="text-xs uppercase tracking-wider font-semibold text-charcoal-900 hover:underline"
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
