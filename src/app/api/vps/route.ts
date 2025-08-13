import { NextResponse } from 'next/server'
import { fetchDigitalOceanPlans } from '../../../lib/vpsProviders/digitalocean'
import { fetchVultrPlans } from '../../../lib/vpsProviders/vultr'
import { fetchLinodePlans } from '../../../lib/vpsProviders/linode'
import { fetchHetznerPlans } from '../../../lib/vpsProviders/hetzner'

export const revalidate = 300

export async function GET() {
  const [doPlans, vultrPlans, linodePlans, hetznerPlans] = await Promise.all([
    fetchDigitalOceanPlans(process.env.DIGITALOCEAN_TOKEN),
    fetchVultrPlans(process.env.VULTR_TOKEN),
    fetchLinodePlans(process.env.LINODE_TOKEN),
    fetchHetznerPlans(process.env.HETZNER_TOKEN)
  ])

  const data = [...doPlans, ...vultrPlans, ...linodePlans, ...hetznerPlans]
  return NextResponse.json({ data })
} 