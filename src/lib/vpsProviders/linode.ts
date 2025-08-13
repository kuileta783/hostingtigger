import { VpsPlan } from '../../types/vps'

export async function fetchLinodePlans(token?: string): Promise<VpsPlan[]> {
  if (!token) return []
  try {
    const res = await fetch('https://api.linode.com/v4/linode/types', {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 3600 }
    })
    if (!res.ok) return []
    const json = await res.json()
    const types = Array.isArray(json.data) ? json.data : []
    return types.map((t: any): VpsPlan => ({
      provider: 'Linode',
      planId: String(t.id),
      vcpu: Number(t.vcpus ?? 0),
      memoryGB: Number((t.memory ?? 0) / 1024),
      storageGB: t.disk != null ? Number(t.disk) : null,
      bandwidthTB: t.transfer != null ? Number(t.transfer) : null,
      priceMonthly: Number(t.price?.monthly ?? 0),
      currency: 'USD',
      regions: undefined,
      link: 'https://www.linode.com/pricing/'
    }))
  } catch {
    return []
  }
} 