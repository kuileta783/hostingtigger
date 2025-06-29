"use client"

import React from 'react'
import Link from 'next/link'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo className="text-white" />
            <p className="text-gray-300 text-sm">
              Compare the best web hosting services of 2025 and find the perfect hosting solution for your website.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-300 hover:text-white transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-gray-300 hover:text-white transition-colors">
                  Articles
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/disclosure" className="text-gray-300 hover:text-white transition-colors">
                  Advertising Disclosure
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/how-we-rank" className="text-gray-300 hover:text-white transition-colors">
                  How We Rank
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            Copyright© 2025 hostingtigger.com
          </p>
          <p className="text-gray-400 text-xs mt-2">
            The listings featured on this site are from companies from which this site receives compensation.
            This influences where, how and in what order such listings appear on this site.
          </p>
        </div>
      </div>
    </footer>
  )
}
