export type VpsPlan = {
  provider: 'DigitalOcean' | 'Vultr' | 'Linode' | 'Hetzner'
  planId: string
  vcpu: number
  memoryGB: number
  storageGB: number | null
  bandwidthTB: number | null
  priceMonthly: number
  currency: string
  regions?: string[]
  link: string
} 