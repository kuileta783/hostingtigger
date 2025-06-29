"use client"

import React from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import Link from 'next/link'

export function Sidebar() {
  return (
    <div className="space-y-8">
      {/* User Stats */}
      <Card>
        <CardContent className="p-6 text-center">
          <div className="text-3xl font-bold text-teal-600 mb-2">1,986+</div>
          <p className="text-sm text-gray-600">
            Users found a web hosting solution with us today!
          </p>
        </CardContent>
      </Card>

      {/* Editorial Reviews */}
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4">Editorial Reviews</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://ext.same-assets.com/394464187/1397850068.svg"
                alt="Bluehost"
                className="h-8"
              />
              <div className="flex-1">
                <div className="text-sm font-medium">Bluehost</div>
                <Link href="/reviews/bluehost" className="text-xs text-teal-600 hover:underline">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <img
                src="https://ext.same-assets.com/394464187/1540425692.svg"
                alt="GoDaddy"
                className="h-8"
              />
              <div className="flex-1">
                <div className="text-sm font-medium">GoDaddy</div>
                <Link href="/reviews/godaddy" className="text-xs text-teal-600 hover:underline">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <img
                src="https://ext.same-assets.com/394464187/1319764214.svg"
                alt="HostGator"
                className="h-8"
              />
              <div className="flex-1">
                <div className="text-sm font-medium">HostGator</div>
                <Link href="/reviews/hostgator" className="text-xs text-teal-600 hover:underline">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recommended Reads */}
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4">Recommended Reads</h3>
          <div className="space-y-3">
            <div>
              <Link href="/articles/intro-to-web-hosting" className="text-sm font-medium text-gray-900 hover:text-teal-600 transition-colors">
                An Introduction to Web Hosting
              </Link>
              <div className="text-xs text-gray-500 mt-1">
                <Link href="/articles/intro-to-web-hosting" className="text-teal-600 hover:underline">
                  Read More
                </Link>
              </div>
            </div>

            <div>
              <Link href="/articles/web-host-features" className="text-sm font-medium text-gray-900 hover:text-teal-600 transition-colors">
                Features to Look for in a Web Hosting Service
              </Link>
              <div className="text-xs text-gray-500 mt-1">
                <Link href="/articles/web-host-features" className="text-teal-600 hover:underline">
                  Read More
                </Link>
              </div>
            </div>

            <div>
              <Link href="/articles/web-host-web-build" className="text-sm font-medium text-gray-900 hover:text-teal-600 transition-colors">
                Website Hosting vs. Website Builders
              </Link>
              <div className="text-xs text-gray-500 mt-1">
                <Link href="/articles/web-host-web-build" className="text-teal-600 hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How We Rank */}
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold mb-2">How We Rank?</h3>
          <p className="text-sm text-gray-600 mb-4">
            Learn more about how hostingtigger.com rankings are determined.
          </p>
          <Button variant="outline" size="sm" className="w-full">
            Read More
          </Button>
        </CardContent>
      </Card>

      {/* Why Compare with Us */}
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4">Why Compare with Us?</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-teal-600 text-sm">📊</span>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">Be Informed</h4>
                <p className="text-xs text-gray-600">
                  Compare our top web hosting picks backed by over 500 hours of research and review.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-teal-600 text-sm">✅</span>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">Choose Confidently</h4>
                <p className="text-xs text-gray-600">
                  Find the best web hosting service for you, with cheap plans and free domain name options.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
