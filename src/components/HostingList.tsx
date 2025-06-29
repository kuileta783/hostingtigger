"use client"

import React from 'react'
import { HostingCard } from './HostingCard'
import { hostingProviders } from '../data/hostingProviders'

export function HostingList() {
  return (
    <div className="space-y-8">
      {hostingProviders.map((provider, index) => (
        <HostingCard
          key={provider.id}
          provider={provider}
          isEditorChoice={index === 0}
        />
      ))}
    </div>
  )
}
