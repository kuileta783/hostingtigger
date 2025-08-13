"use client"

import React, { useEffect, useState } from 'react'
import type { VpsPlan } from '../types/vps'

export function VpsPricingTable() {
  const [plans, setPlans] = useState<VpsPlan[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    async function load() {
      setLoading(true)
      try {
        const res = await fetch('/api/vps')
        const json = await res.json()
        if (!cancelled) setPlans(Array.isArray(json.data) ? json.data : [])
      } catch {
        if (!cancelled) setPlans([])
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    const id = setInterval(load, 5 * 60 * 1000)
    return () => { cancelled = true; clearInterval(id) }
  }, [])

  if (loading) return <div className="text-sm text-gray-500">Loading VPS pricing…</div>

  return (
    <div className="overflow-x-auto border rounded-lg">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left">Provider</th>
            <th className="px-4 py-2 text-left">Plan</th>
            <th className="px-4 py-2 text-left">vCPU</th>
            <th className="px-4 py-2 text-left">Memory</th>
            <th className="px-4 py-2 text-left">Storage</th>
            <th className="px-4 py-2 text-left">Bandwidth</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Link</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((p, i) => (
            <tr key={`${p.provider}-${p.planId}-${i}`} className={i % 2 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-4 py-2">{p.provider}</td>
              <td className="px-4 py-2 font-mono">{p.planId}</td>
              <td className="px-4 py-2">{p.vcpu}</td>
              <td className="px-4 py-2">{p.memoryGB} GB</td>
              <td className="px-4 py-2">{p.storageGB ? `${p.storageGB} GB` : '-'}</td>
              <td className="px-4 py-2">{p.bandwidthTB ? `${p.bandwidthTB} TB` : '-'}</td>
              <td className="px-4 py-2">{p.currency} {p.priceMonthly.toFixed(2)}/mo</td>
              <td className="px-4 py-2">
                <a className="text-teal-600 hover:underline" href={p.link} target="_blank" rel="noopener noreferrer">Visit</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
} 