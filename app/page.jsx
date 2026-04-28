import React from "react";
import { Wifi, Router, ShieldCheck, PhoneCall, MapPin, Zap, Users, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function BusinessWebsite() {
  const packages = [
    { name: "Basic Home", speed: "10 Mbps", price: "KES 600", features: ["Unlimited browsing", "Good for phones & light streaming", "Monthly billing"] },
    { name: "Standard", speed: "20 Mbps", price: "KES 1,000", features: ["HD streaming", "Multiple devices", "Priority support"] },
    { name: "Business/Plot", speed: "Custom", price: "Contact us", features: ["Client control", "Bandwidth management", "Billing support"] },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="rounded-2xl bg-blue-500 p-2"><Wifi size={22} /></div>
            ChuiNet Solutions
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#packages" className="hover:text-white">Packages</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <Button className="rounded-2xl">Get Connected</Button>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="mb-4 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
            Fast Internet • Reliable Support • Smart Billing
          </p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Affordable Internet for Homes, Plots & Small Businesses
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">
            We provide stable internet connections, router setup, client management, bandwidth control, and monthly billing solutions for customers around your area.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="rounded-2xl">Request Installation</Button>
            <Button size="lg" variant="outline" className="rounded-2xl border-white/20 bg-transparent text-white hover:bg-white/10">
              View Packages
            </Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
          <Card className="rounded-[2rem] border-white/10 bg-white/10 shadow-2xl backdrop-blur">
            <CardContent className="p-8">
              <div className="grid gap-4">
                <div className="rounded-3xl bg-slate-900 p-5">
                  <div className="flex items-center gap-3"><Zap className="text-blue-300" /><span className="font-semibold">Fast Setup</span></div>
                  <p className="mt-2 text-sm text-slate-300">Quick installation and router configuration.</p>
                </div>
                <div className="rounded-3xl bg-slate-900 p-5">
                  <div className="flex items-center gap-3"><Router className="text-blue-300" /><span className="font-semibold">Network Control</span></div>
                  <p className="mt-2 text-sm text-slate-300">Bandwidth plans, client control, and stable connections.</p>
                </div>
                <div className="rounded-3xl bg-slate-900 p-5">
                  <div className="flex items-center gap-3"><ShieldCheck className="text-blue-300" /><span className="font-semibold">Trusted Support</span></div>
                  <p className="mt-2 text-sm text-slate-300">Help with Wi‑Fi, routers, payment, and connection issues.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            [Wifi, "Home Internet", "Affordable monthly Wi‑Fi packages for homes and rentals."],
            [Users, "Plot Connections", "Connect multiple tenants with controlled packages and billing."],
            [Router, "Router Setup", "Configuration for MikroTik, Tenda, Huawei, and access points."],
          ].map(([Icon, title, desc]) => (
            <Card key={title} className="rounded-3xl border-white/10 bg-white/10">
              <CardContent className="p-6">
                <Icon className="mb-4 text-blue-300" />
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 text-slate-300">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="packages" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold">Internet Packages</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <Card key={pkg.name} className="rounded-3xl border-white/10 bg-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                <p className="mt-4 text-4xl font-extrabold text-blue-300">{pkg.speed}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{pkg.price}<span className="text-sm text-slate-400"> / month</span></p>
                <ul className="mt-6 space-y-3 text-slate-300">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2"><CheckCircle2 size={18} className="text-blue-300" />{f}</li>
                  ))}
                </ul>
                <Button className="mt-6 w-full rounded-2xl">Choose Plan</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] bg-blue-600 p-8 md:p-12">
          <h2 className="text-3xl font-bold">Ready to get connected?</h2>
          <p className="mt-3 max-w-2xl text-blue-100">Call or WhatsApp us today for installation, package advice, or router support.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4"><PhoneCall /> 0704 919 887</div>
            <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4"><MapPin /> Nairobi / Ruiru / Nearby Areas</div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © 2026 ChuiNet Solutions. Fast, reliable, affordable internet.
      </footer>
    </div>
  );
}

