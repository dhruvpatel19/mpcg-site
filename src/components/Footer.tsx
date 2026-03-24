import React from "react";
import { Link } from "react-router-dom";
import { NAVIGATION_GROUPS, SITE_NAME } from "../config/site";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-stone-900 pb-28 pt-16 text-white lg:pb-12 print:hidden">
      <div className="section-container space-y-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,2fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold">{SITE_NAME}</h2>
            <p className="max-w-md text-sm leading-relaxed text-stone-300">
              A plain-language healthcare navigation guide for Kingston, Ontario.
              This site does not provide medical advice or live wait times. Always
              confirm time-sensitive details with the official source before you go.
            </p>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-stone-300">
              <p className="font-bold text-white">Trust model</p>
              <p className="mt-2">
                We show official source links, review dates, and listings that still need
                rechecks. If something looks wrong, report it from the page or service.
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {NAVIGATION_GROUPS.map((group) => (
              <div key={group.title} className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item.to}>
                      <Link to={item.to} className="text-sm text-stone-300 hover:text-white">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-3">
          <div>
            <h3 className="font-bold text-white">Before you go</h3>
            <p className="mt-2 text-sm text-stone-300">
              Check official hours, whether you need an appointment or referral, and what
              documents to bring.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white">Language help</h3>
            <p className="mt-2 text-sm text-stone-300">
              Browser translation is helpful for reading. Ask for an interpreter for clinical
              conversations when accuracy matters.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white">Privacy</h3>
            <p className="mt-2 text-sm text-stone-300">
              This site uses local, privacy-conscious improvement logs stored in your browser.
              It does not send personal analytics to a remote server.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-stone-400 md:flex-row md:items-center md:justify-between">
          <p>© {year} {SITE_NAME}. Community information resource for Kingston, Ontario.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/about#disclaimer" className="hover:text-white">
              Disclaimer
            </Link>
            <Link to="/about#privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link to="/about#sources" className="hover:text-white">
              Sources
            </Link>
            <Link to="/about#contact" className="hover:text-white">
              Report outdated info
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
