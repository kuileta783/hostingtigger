"use client"

import React from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

export function ContentSections() {
  return (
    <div className="py-16 space-y-16">
      {/* Website Builder Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-600 mb-4">
            Need to build or grow your website?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get online fast using a top-rated website builder with custom domain setup available.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src="https://ext.same-assets.com/394464187/1957570600.svg"
                  alt="Wix"
                  className="h-12"
                />
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold">9.9</span>
                  <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <h3 className="font-semibold mb-2">Create a Site in Minutes & Add as You Grow</h3>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Get your own custom domain name & build your site with AI—completely free</li>
                <li>• Choose from 900+ free templates, customizable for any kind of business</li>
              </ul>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                Visit Site
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src="https://ext.same-assets.com/394464187/1540425692.svg"
                  alt="GoDaddy"
                  className="h-12"
                />
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold">9.7</span>
                  <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <h3 className="font-semibold mb-2">Take Your Idea Online with Easy-to-Use Tools</h3>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Customize your site & manage everything from one dashboard</li>
                <li>• Start with a basic plan and upgrade for more business features later</li>
              </ul>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                Visit Site
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What is Web Hosting Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-600 mb-8">
            What is Web Hosting and Why Does it Matter?
          </h2>

          <div className="prose max-w-none text-gray-700 mb-8">
            <p className="text-lg mb-6">
              Web hosting is what makes your website accessible online. A website hosting service stores your files,
              manages uptime, and delivers content to visitors when they enter your domain name.
            </p>

            <h3 className="text-xl font-semibold mb-4">Reliable web hosting services provide:</h3>
            <ul className="space-y-2 mb-6">
              <li>• Fast loading speeds</li>
              <li>• Free security features (SSL, backups)</li>
              <li>• 24/7 support</li>
              <li>• Options like <strong>free business email</strong>, staging tools, and WordPress compatibility</li>
            </ul>

            <p>
              Whether you're searching for cheap web hosting, free website hosting, or advanced features like
              WordPress hosting, the right provider can save you time, money, and headaches.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-6">How we Find the Best Web Hosting Services</h3>
            <p className="mb-4">Here's what we compare when reviewing the best web hosting options:</p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Feature</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">What to Look For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Speed & uptime</td>
                    <td className="border border-gray-300 px-4 py-2">Reliable loading times, 99.9%+ uptime guarantees</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Price & value</td>
                    <td className="border border-gray-300 px-4 py-2">Options for <strong>cheap website hosting</strong> or premium plans</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">WordPress support</td>
                    <td className="border border-gray-300 px-4 py-2">Built-in <strong>WordPress hosting</strong> tools</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Email & domain bundles</td>
                    <td className="border border-gray-300 px-4 py-2">Includes <strong>free business email</strong> + domain deals</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Customer support</td>
                    <td className="border border-gray-300 px-4 py-2">24/7 live chat, ticket systems, and help centers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-teal-600 mb-8">
          Frequently Asked Questions (FAQ)
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              Can I upgrade my web hosting plan later?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pt-2">
              Yes, most hosting providers allow you to upgrade your plan at any time. You can typically scale from
              shared hosting to VPS or dedicated hosting as your website grows and requires more resources.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              Is free website hosting safe for a professional website?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pt-2">
              While free hosting can work for personal projects, professional websites typically need paid hosting
              for better security, reliability, custom domains, and professional email addresses.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              Can I transfer a domain I already own?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pt-2">
              Yes, you can transfer existing domains to most hosting providers. The process typically takes 5-7 days
              and may involve unlocking your domain and obtaining an authorization code from your current registrar.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              What does domain registration actually include?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pt-2">
              Domain registration includes the right to use a specific web address for a set period (usually 1 year),
              DNS management, and basic WHOIS privacy protection depending on your provider.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              Do I need both web hosting and a domain name to launch my site?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pt-2">
              Yes, you need both. The domain name is your website's address, while web hosting provides the server
              space where your website files are stored. Many providers offer both services together at a discount.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              What makes a good domain name?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pt-2">
              A good domain name is short, memorable, easy to spell, relates to your business or brand, and uses
              a common extension like .com, .net, or .org for better recognition and trust.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  )
}
