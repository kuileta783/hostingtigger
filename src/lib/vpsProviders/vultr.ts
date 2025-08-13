import { VpsPlan } from '../../types/vps'

export async function fetchVultrPlans(token?: string): Promise<VpsPlan[]> {
  if (!token) return []
  try {
    const res = await fetch('https://api.vultr.com/v2/plans?per_page=200', {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 3600 }
    })
    if (!res.ok) return []
    const json = await res.json()
    const plans = Array.isArray(json.plans) ? json.plans : []
    return plans.map((p: any): VpsPlan => ({
      provider: 'Vultr',
      planId: String(p.id ?? p.plan ?? ''),
      vcpu: Number(p.vcpu_count ?? p.vcpus ?? 0),
      memoryGB: Number((p.ram ?? 0) / 1024),
      storageGB: p.disk != null ? Number(p.disk) : (p.storage != null ? Number(p.storage) : null),
      bandwidthTB: p.bandwidth != null ? Number(p.bandwidth) : (p.transfer != null ? Number(p.transfer) : null),
      priceMonthly: Number(p.monthly_cost ?? p.price_per_month ?? 0),
      currency: 'USD',
      regions: undefined,
      link: 'https://www.vultr.com/pricing/'
    }))
  } catch {
    return []
  }
} 