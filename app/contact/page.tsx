import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { AdmissionForm } from '@/components/admission-form'

export const metadata = {
  title: 'Contact Us — Apex Academy',
  description:
    'Get in touch with Apex Academy. Visit our campus, call us, or submit an admission enquiry form.',
}

const contactItems = [
  {
    icon: MapPin,
    title: 'Visit us',
    lines: ['12 Knowledge Park, Sector 62', 'New Delhi, 110092'],
  },
  {
    icon: Phone,
    title: 'Call us',
    lines: ['+91 11 4000 1234', '+91 98765 43210'],
  },
  {
    icon: Mail,
    title: 'Email us',
    lines: ['hello@apexacademy.in', 'admissions@apexacademy.in'],
  },
  {
    icon: Clock,
    title: 'Office hours',
    lines: ['Mon – Sat: 8 AM – 8 PM', 'Sunday: 9 AM – 2 PM'],
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's plan your success together"
        description="Have a question or ready to enroll? Reach out — our counsellors are here to help."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="size-5" />
                  </span>
                  <h3 className="mt-3 font-heading font-semibold">
                    {item.title}
                  </h3>
                  {item.lines.map((line) => (
                    <p key={line} className="text-sm text-muted-foreground">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/911140001234"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
                <MessageCircle className="size-5" />
              </span>
              <div>
                <h3 className="font-heading font-semibold">Chat on WhatsApp</h3>
                <p className="text-sm text-muted-foreground">
                  Get instant answers from our team
                </p>
              </div>
            </a>

            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Apex Academy location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.36%2C28.62%2C77.40%2C28.64&layer=mapnik"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>

          <AdmissionForm />
        </div>
      </section>
    </>
  )
}
