"use client"

import React from 'react'

export function AdvertisingDisclosure() {
  return (
    <div className="bg-gray-100 border-b border-gray-200 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-gray-600 text-center">
          The listings featured on this site are from companies from which this site receives compensation.
          This influences where, how and in what order such listings appear on this site.{" "}
          <a href="/disclosure" className="text-blue-600 hover:underline">
            Advertising Disclosure
          </a>
        </p>
      </div>
    </div>
  )
}
