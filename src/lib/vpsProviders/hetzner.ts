import { VpsPlan } from '../../types/vps'

export async function fetchHetznerPlans(token?: string): Promise<VpsPlan[]> {
  if (!token) return []
  try {
    const res = await fetch('https://api.hetzner.cloud/v1/server_types', {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 3600 }
    })
    if (!res.ok) return []
    const json = await res.json()
    const types = Array.isArray(json.server_types) ? json.server_types : []
    return types.map((t: any): VpsPlan => ({
      provider: 'Hetzner',
      planId: String(t.name ?? t.id),
      vcpu: Number(t.cores ?? 0),
      memoryGB: Number(t.memory ?? 0),
      storageGB: t.disk != null ? Number(t.disk) : null,
      bandwidthTB: null,
      priceMonthly: Number(t.prices?.[0]?.price_monthly?.gross ?? t.prices?.[0]?.price_monthly?.net ?? 0),
      currency: (t.prices?.[0]?.currency ?? 'EUR') as string,
      regions: Array.isArray(t.prices) ? t.prices.map((p: any) => p.location).filter(Boolean) : undefined,
      link: 'https://www.hetzner.com/cloud'
    }))
  } catch {
    return []
  }
} 