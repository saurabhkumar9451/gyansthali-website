'use client'

import * as React from 'react'
import Link from 'next/link'
import { toast } from 'sonner'
import { Loader2, Lock, Mail, GraduationCap, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function LoginPage() {
  const [loading, setLoading] = React.useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast.success('Welcome back!', {
        description: 'Redirecting you to your student dashboard...',
      })
    }, 1200)
  }

  return (
    <section className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-stretch gap-0 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
      <div className="hidden flex-col justify-center rounded-3xl bg-primary p-10 text-primary-foreground lg:flex">
        <GraduationCap className="size-12" />
        <h2 className="mt-6 text-balance font-heading text-3xl font-extrabold">
          Your learning portal, all in one place
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/85">
          Access live classes, recorded lectures, test series, performance
          analytics and study material — anytime, anywhere.
        </p>
        <ul className="mt-8 space-y-4">
          {[
            'Live & recorded classes',
            'All-India test series & rankings',
            'Personalised performance reports',
            'Downloadable study material',
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="flex size-6 items-center justify-center rounded-full bg-primary-foreground/15">
                <ShieldCheck className="size-3.5" />
              </span>
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full max-w-md rounded-3xl border border-border bg-card p-6 sm:p-8">
          <div className="flex flex-col items-center text-center">
            <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Lock className="size-5" />
            </span>
            <h1 className="mt-4 font-heading text-2xl font-bold">
              Student Login
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Sign in to access your dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="email">Email or Roll number</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="text-xs font-medium text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm text-muted-foreground">
              <input
                type="checkbox"
                className="size-4 rounded border-border accent-[var(--color-primary)]"
              />
              Remember me on this device
            </label>

            <Button type="submit" size="lg" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            New to Apex Academy?{' '}
            <Link
              href="/contact#admission"
              className="font-medium text-primary hover:underline"
            >
              Apply for admission
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
