import React from "react";
import { Link } from "react-router-dom";
import {
  AlertCircle,
  ArrowRight,
  Globe,
  Search,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { useCity } from "../CityContext";
import { Seo } from "../components/Seo";
import { ServiceCard } from "../components/ServiceCard";
import { MULTILINGUAL_QUICK_START } from "../config/site";

export const Home: React.FC = () => {
  const { city, setIsLanguageModalOpen } = useCity();

  const featuredServices = city.services.filter((service) =>
    ["health811", "hdh-ucc", "serviceontario-division"].includes(service.id),
  );

  return (
    <div className="section-container space-y-12 py-12">
      <Seo
        title="Kingston healthcare guide"
        description="Newcomer-first healthcare navigation for Kingston, Ontario: urgent help, local services, coverage basics, interpreter guidance, and next steps after a visit."
        path="/"
      />

      <section className="grid gap-6 lg:grid-cols-[1.4fr,1fr]">
        <div className="space-y-6 rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
            Kingston, Ontario
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
              Find the right care in Kingston without guessing
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-stone-600">
              Start with urgent help, newcomer basics, coverage, or the local services
              directory. This guide is plain language, mobile friendly, and honest about
              what still needs rechecking.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <Link to="/need-help-now" className="rounded-2xl border border-red-200 bg-red-50 p-4">
              <AlertCircle className="text-red-700" size={20} />
              <p className="mt-3 font-bold text-stone-900">Need help now</p>
              <p className="mt-1 text-sm text-stone-600">Emergency, urgent care, crisis, and after-hours guidance.</p>
            </Link>
            <Link to="/start-here" className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <Stethoscope className="text-emerald-700" size={20} />
              <p className="mt-3 font-bold text-stone-900">Start here</p>
              <p className="mt-1 text-sm text-stone-600">How Ontario healthcare works and what to do first.</p>
            </Link>
            <Link to="/local-services" className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <Search className="text-emerald-700" size={20} />
              <p className="mt-3 font-bold text-stone-900">Search services</p>
              <p className="mt-1 text-sm text-stone-600">Look up bloodwork, refills, walk-in care, mental health, and more.</p>
            </Link>
            <button
              type="button"
              onClick={() => setIsLanguageModalOpen(true)}
              className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-left"
            >
              <Globe className="text-emerald-700" size={20} />
              <p className="mt-3 font-bold text-stone-900">Language help</p>
              <p className="mt-1 text-sm text-stone-600">Translation tips, interpreter guidance, and quick phrases.</p>
            </button>
          </div>
        </div>

        <aside className="space-y-4 rounded-[2rem] border border-stone-200 bg-stone-900 p-6 text-white shadow-sm">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]">
            Quick decisions
          </div>
          <h2 className="text-2xl font-bold">Start with these questions</h2>
          <div className="space-y-3 text-sm text-stone-300">
            <p>If it could be life-threatening, call 911 now.</p>
            <p>If you are unsure where to go tonight, call Health811.</p>
            <p>If you do not have a family doctor, keep walk-in, community health, and student options in your plan.</p>
            <p>If you need bloodwork, X-ray, a refill, or a referral update, use the local directory to find the next step.</p>
          </div>
          <div className="rounded-3xl bg-white/5 p-4">
            <p className="text-sm font-bold text-white">Trust note</p>
            <p className="mt-2 text-sm text-stone-300">
              This is a static guide. We do not show live wait times. Time-sensitive details
              like hours and intake can change quickly, so every listing includes a source
              link and review status.
            </p>
          </div>
        </aside>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr,1fr]">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
          <div className="space-y-3">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-stone-500">
              Newcomer quick start
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-stone-900">
              First steps if you are new to Kingston
            </h2>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link to="/costs-and-coverage" className="rounded-3xl border border-stone-200 bg-stone-50 p-5">
              <p className="text-sm font-bold text-stone-900">1. Learn your coverage</p>
              <p className="mt-2 text-sm text-stone-600">
                Understand OHIP, IFHP, private plans, and what is usually not covered.
              </p>
            </Link>
            <Link to="/get-a-family-doctor" className="rounded-3xl border border-stone-200 bg-stone-50 p-5">
              <p className="text-sm font-bold text-stone-900">2. Plan your primary care path</p>
              <p className="mt-2 text-sm text-stone-600">
                Learn the difference between family doctors, nurse practitioners, student
                clinics, community health centres, and walk-in care.
              </p>
            </Link>
            <Link to="/after-visit" className="rounded-3xl border border-stone-200 bg-stone-50 p-5">
              <p className="text-sm font-bold text-stone-900">3. Know what happens next</p>
              <p className="mt-2 text-sm text-stone-600">
                Learn what requisitions, referrals, test results, and follow-up calls usually mean.
              </p>
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
          <div className="space-y-3">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-stone-500">
              Language support
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-stone-900">
              Show these phrases if you need help
            </h2>
          </div>
          <div className="mt-6 grid gap-3">
            {MULTILINGUAL_QUICK_START.slice(0, 4).map((block) => (
              <div key={block.language} className="rounded-3xl border border-stone-200 bg-stone-50 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
                  {block.language}
                </p>
                <p className="mt-2 text-sm font-semibold text-stone-900">{block.urgent}</p>
                <p className="mt-1 text-sm text-stone-700">{block.interpreter}</p>
              </div>
            ))}
          </div>
          <button type="button" onClick={() => setIsLanguageModalOpen(true)} className="btn-secondary mt-5 w-full">
            Open language help
          </button>
        </div>
      </section>

      <section className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-stone-500">
              Common tasks
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-stone-900">
              Search by the task you need to finish
            </h2>
          </div>
          <Link to="/local-services" className="inline-flex items-center gap-2 font-bold text-emerald-700">
            Open full directory
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Link to="/local-services?category=labs-imaging" className="rounded-3xl border border-stone-200 bg-stone-50 p-5">
            <p className="font-bold text-stone-900">Bloodwork or X-ray</p>
            <p className="mt-2 text-sm text-stone-600">Find labs and imaging services.</p>
          </Link>
          <Link to="/local-services?category=pharmacies" className="rounded-3xl border border-stone-200 bg-stone-50 p-5">
            <p className="font-bold text-stone-900">Prescription refill</p>
            <p className="mt-2 text-sm text-stone-600">Find pharmacies and refill help.</p>
          </Link>
          <Link to="/local-services?category=mental-health" className="rounded-3xl border border-stone-200 bg-stone-50 p-5">
            <p className="font-bold text-stone-900">Mental health support</p>
            <p className="mt-2 text-sm text-stone-600">Crisis, urgent, routine, and youth support.</p>
          </Link>
          <Link to="/local-services?category=navigation-support" className="rounded-3xl border border-stone-200 bg-stone-50 p-5">
            <p className="font-bold text-stone-900">Health card or newcomer support</p>
            <p className="mt-2 text-sm text-stone-600">Find ServiceOntario, ISKA, and phone advice.</p>
          </Link>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-stone-500">
            Featured services
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-stone-900">
            Good places to start
          </h2>
        </div>
        <div className="grid gap-6 xl:grid-cols-2">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-stone-200 bg-emerald-900 p-8 text-white shadow-sm">
        <div className="grid gap-6 lg:grid-cols-[1.5fr,1fr]">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]">
              <ShieldCheck size={14} />
              Trust and sources
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight">
              Honest about what is verified and what still needs rechecking
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-emerald-50/85">
              Some listings are checked against official local sources. Others still need a
              local recheck because hours, intake, or access rules change often. We show that
              status openly and encourage users to report outdated details.
            </p>
          </div>
          <div className="space-y-3 rounded-3xl bg-white/10 p-5">
            <p className="text-sm font-bold">Read before you rely on a listing</p>
            <ul className="space-y-2 text-sm text-emerald-50/85">
              <li>- Look for the official source link.</li>
              <li>- Check the last review date.</li>
              <li>- Confirm same-day hours and walk-in access before you go.</li>
              <li>- Use the report form if you notice a change.</li>
            </ul>
            <Link to="/about#sources" className="inline-flex items-center gap-2 font-bold text-white">
              View sources and trust notes
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
