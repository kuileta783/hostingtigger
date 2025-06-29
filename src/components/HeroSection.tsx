"use client"

import React from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Best Web Hosting Services of 2025
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Looking for reliable web hosting to launch your website?
                Compare the top web hosting services of 2025 and find the right fit.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 text-lg">
                🔍 Compare Hosts
              </Button>
              <Button variant="outline" className="border-amber-400 text-amber-700 hover:bg-amber-50 px-6 py-3 text-lg">
                📝 Register a Domain
              </Button>
              <Button variant="outline" className="border-green-400 text-green-700 hover:bg-green-50 px-6 py-3 text-lg">
                🚀 Go Live
              </Button>
            </div>

            <div className="text-sm text-gray-500">
              Last Updated: June 2025
            </div>
          </div>

          <div className="relative">
            <img
              src="https://ext.same-assets.com/394464187/3168125391.jpeg"
              alt="Web hosting professional"
              className="rounded-lg shadow-xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Top hosting providers preview */}
      <div className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center space-x-4">
              <img src="https://ext.same-assets.com/394464187/1540425692.svg" alt="GoDaddy" className="h-8" />
              <div className="flex items-center space-x-1">
                <span className="text-2xl font-bold text-gray-900">9.7</span>
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <Button variant="outline" size="sm">Visit Site</Button>
            </div>

            <Badge className="bg-teal-100 text-teal-800 px-3 py-1">We Recommend</Badge>

            <div className="flex items-center space-x-4">
              <img src="https://ext.same-assets.com/394464187/1397850068.svg" alt="Bluehost" className="h-8" />
              <div className="flex items-center space-x-1">
                <span className="text-2xl font-bold text-gray-900">9.9</span>
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <Button variant="outline" size="sm">Visit Site</Button>
            </div>

            <div className="flex items-center space-x-4">
              <img src="https://ext.same-assets.com/394464187/1919371494.svg" alt="Hostinger" className="h-8" />
              <div className="flex items-center space-x-1">
                <span className="text-2xl font-bold text-gray-900">9.5</span>
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <Button variant="outline" size="sm">Visit Site</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
