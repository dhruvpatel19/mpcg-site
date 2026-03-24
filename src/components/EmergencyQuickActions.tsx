import React from "react";
import { Link } from "react-router-dom";
import { EMERGENCY_ACTIONS } from "../config/site";

export const EmergencyQuickActions: React.FC = () => {
  return (
    <aside
      aria-label="Emergency quick actions"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-stone-200 bg-white/95 px-4 py-3 backdrop-blur lg:bottom-6 lg:left-auto lg:right-6 lg:top-auto lg:w-[22rem] lg:rounded-3xl lg:border lg:shadow-2xl lg:shadow-stone-900/10 print:hidden"
    >
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
          Need help right now?
        </p>
        <div className="grid grid-cols-2 gap-2">
          {EMERGENCY_ACTIONS.map((action) =>
            action.href.startsWith("/") ? (
              <Link
                key={action.id}
                to={action.href}
                className="rounded-2xl border border-stone-200 bg-stone-50 px-3 py-3 text-left hover:border-emerald-300 hover:bg-emerald-50"
              >
                <span className="block text-sm font-bold text-stone-900">
                  {action.label}
                </span>
                <span className="mt-1 block text-xs text-stone-600">
                  {action.description}
                </span>
              </Link>
            ) : (
              <a
                key={action.id}
                href={action.href}
                className="rounded-2xl border border-stone-200 bg-stone-50 px-3 py-3 text-left hover:border-emerald-300 hover:bg-emerald-50"
              >
                <span className="block text-sm font-bold text-stone-900">
                  {action.label}
                </span>
                <span className="mt-1 block text-xs text-stone-600">
                  {action.description}
                </span>
              </a>
            ),
          )}
        </div>
      </div>
    </aside>
  );
};
