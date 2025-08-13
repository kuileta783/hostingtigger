import { VpsPlan } from '../../types/vps'

export async function fetchDigitalOceanPlans(token?: string): Promise<VpsPlan[]> {
  if (!token) return []
  try {
    const res = await fetch('https://api.digitalocean.com/v2/sizes', {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 3600 }
    })
    if (!res.ok) return []
    const json = await res.json()
    const sizes = Array.isArray(json.sizes) ? json.sizes : []
    return sizes
      .filter((s: any) => s && s.available)
      .map((s: any): VpsPlan => ({
        provider: 'DigitalOcean',
        planId: String(s.slug),
        vcpu: Number(s.vcpus ?? 0),
        memoryGB: Number((s.memory ?? 0) / 1024),
        storageGB: s.disk != null ? Number(s.disk) : null,
        bandwidthTB: s.transfer != null ? Number(s.transfer) : null,
        priceMonthly: Number(s.price_monthly ?? 0),
        currency: 'USD',
        regions: Array.isArray(s.regions) ? s.regions : undefined,
        link: 'https://www.digitalocean.com/pricing'
      }))
  } catch {
    return []
  }
} 