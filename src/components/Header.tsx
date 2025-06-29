"use client"

import React from 'react'
import Link from 'next/link'
import { Logo } from './Logo'
import { Button } from './ui/button'

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-900 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              HOME
            </Link>
            <Link
              href="/reviews"
              className="text-gray-900 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              REVIEWS
            </Link>
            <Link
              href="/articles"
              className="text-gray-900 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              ARTICLES
            </Link>
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
