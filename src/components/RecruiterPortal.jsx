import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, DollarSign, Send } from 'lucide-react';

export default function RecruiterPortal() {
  const [form, setForm] = useState({ role: '', org: '', city: '', date: '', stipend: '', notes: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  return (
    <section id="recruit" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-semibold">Recruiter Trial & Scouting Post</h3>
        <p className="mt-1 text-sm text-white/70">Publish an upcoming trial, academy intake, or sponsorship program.</p>

        <form className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="block text-sm text-white/70">Organization</label>
            <div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3">
              <Briefcase className="h-4 w-4 text-white/50" />
              <input name="org" value={form.org} onChange={handleChange} placeholder="e.g., Karachi United FC" className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-white/40" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-white/70">Role / Program</label>
            <input name="role" value={form.role} onChange={handleChange} placeholder="U18 Trials — Wingers" className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none placeholder:text-white/40" />
          </div>

          <div>
            <label className="block text-sm text-white/70">City</label>
            <div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3">
              <MapPin className="h-4 w-4 text-white/50" />
              <input name="city" value={form.city} onChange={handleChange} placeholder="Karachi" className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-white/40" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-white/70">Date</label>
            <div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3">
              <Calendar className="h-4 w-4 text-white/50" />
              <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full bg-transparent py-2 text-sm outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-white/70">Stipend / Fee</label>
            <div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3">
              <DollarSign className="h-4 w-4 text-white/50" />
              <input name="stipend" value={form.stipend} onChange={handleChange} placeholder="₨ 2,000"
                     className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-white/40" />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm text-white/70">Notes</label>
            <textarea name="notes" value={form.notes} onChange={handleChange} rows={4} placeholder="Eligibility, requirements, what to bring..." className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none placeholder:text-white/40" />
          </div>

          <div className="sm:col-span-2">
            <button type="button" onClick={() => alert('Your trial post has been queued. Backend integration coming up next!')} className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90">
              <Send className="h-4 w-4" /> Publish Trial
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
