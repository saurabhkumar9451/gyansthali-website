'use client'

import * as React from 'react'
import { toast } from 'sonner'
import { Loader2, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function AdmissionForm() {
  const [loading, setLoading] = React.useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast.success('Application submitted!', {
        description: "Our counsellor will reach out to you within 24 hours.",
      })
      e.currentTarget?.reset()
    }, 1200)
  }

  return (
    <div
      id="admission"
      className="scroll-mt-24 rounded-3xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="flex items-center gap-3">
        <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <GraduationCap className="size-5" />
        </span>
        <div>
          <h2 className="font-heading text-xl font-bold">Admission Enquiry</h2>
          <p className="text-sm text-muted-foreground">
            Fill the form and our team will contact you.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="name">Student name</Label>
            <Input id="name" name="name" placeholder="Full name" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              required
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="course">Interested course</Label>
            <Select name="course" required>
              <SelectTrigger id="course">
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jee">JEE (Main + Advanced)</SelectItem>
                <SelectItem value="neet">NEET</SelectItem>
                <SelectItem value="foundation">Foundation (8–10)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="class">Current class</Label>
            <Select name="class">
              <SelectTrigger id="class">
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="8">Class 8</SelectItem>
                <SelectItem value="9">Class 9</SelectItem>
                <SelectItem value="10">Class 10</SelectItem>
                <SelectItem value="11">Class 11</SelectItem>
                <SelectItem value="12">Class 12</SelectItem>
                <SelectItem value="dropper">Dropper</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" name="city" placeholder="Your city" />
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="message">Message (optional)</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your goals..."
            rows={4}
          />
        </div>

        <Button type="submit" size="lg" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="size-4 animate-spin" /> Submitting...
            </>
          ) : (
            'Submit Application'
          )}
        </Button>
      </form>
    </div>
  )
}
