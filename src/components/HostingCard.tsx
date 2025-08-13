"use client"

import React from 'react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

type Provider = {
  id: number
  name: string
  logo: string
  rating: number
  ratingLabel: string
  features: string[]
  pros: string[]
  cons: string[]
  reviews: number
  specialOffer?: string
  trustpilot?: boolean
  affiliateLink?: string
}

type HostingCardProps = {
  provider: Provider
  isEditorChoice?: boolean
}

export function HostingCard({ provider, isEditorChoice }: HostingCardProps) {
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating / 2)
    const hasHalfStar = rating % 2 >= 1

    for (let i = 0; i < fullStars; i++) {
      stars.push('⭐')
    }
    if (hasHalfStar) {
      stars.push('⭐')
    }

    return stars.join('')
  }

  return (
    <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
      {isEditorChoice && (
        <div className="absolute top-0 left-0 bg-teal-600 text-white px-4 py-1 text-sm font-medium">
          Editor's Choice - June 2025
        </div>
      )}

      <CardContent className="p-6 space-y-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-gray-400">
              {provider.id.toString().padStart(2, '0')}
            </span>
            <img
              src={provider.logo}
              alt={provider.name}
              className="h-12 w-auto"
            />
          </div>

          <div className="text-right">
            <div className="flex items-center space-x-1 mb-1">
              <span className="text-3xl font-bold text-gray-900">{provider.rating}</span>
              <div className="text-yellow-400 text-sm">
                {renderStars(provider.rating)}
              </div>
            </div>
            <Badge variant="secondary" className="text-xs">
              {provider.ratingLabel}
            </Badge>
          </div>
        </div>

        {provider.trustpilot && (
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <img src="https://ext.same-assets.com/394464187/112553462.svg" alt="Trustpilot" className="h-4" />
            <span>{provider.reviews.toLocaleString()} Reviews</span>
          </div>
        )}

        {provider.specialOffer && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-800 mb-2">Special Offer</h4>
            <p className="text-amber-700 text-sm">{provider.specialOffer}</p>
          </div>
        )}

        <div className="space-y-3">
          {provider.features.map((feature) => (
            <div key={feature} className="flex items-start space-x-2">
              <span className="text-green-500 mt-0.5">✓</span>
              <span className="text-gray-700 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-teal-600 font-semibold mb-2 flex items-center">
              <span className="mr-1">👍</span> Pros
            </h4>
            <ul className="space-y-1">
              {provider.pros.map((pro) => (
                <li key={pro} className="text-sm text-gray-600 flex items-start">
                  <span className="text-green-500 mr-2 mt-0.5">✓</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-red-600 font-semibold mb-2 flex items-center">
              <span className="mr-1">❌</span> Cons
            </h4>
            <ul className="space-y-1">
              {provider.cons.map((con) => (
                <li key={con} className="text-sm text-gray-600 flex items-start">
                  <span className="text-red-500 mr-2 mt-0.5">✗</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
          <div className="flex flex-col items-center justify-between gap-4 p-6 bg-gray-50/50 w-full lg:w-48">
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">{provider.rating}</p>
              <p className="font-semibold text-gray-700">{provider.ratingLabel}</p>
            </div>
            {provider.specialOffer && /From \$\d+(?:\.\d+)?\/mo/i.test(provider.specialOffer) && (
              <div className="text-center text-sm text-gray-700">
                {provider.specialOffer.match(/From \$\d+(?:\.\d+)?\/mo/i)?.[0]}
              </div>
            )}
            <a href={provider.affiliateLink} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                Visit Site
              </Button>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
