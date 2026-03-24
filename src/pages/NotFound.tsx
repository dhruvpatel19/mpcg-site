import React from "react";
import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";

export const NotFound: React.FC = () => {
  return (
    <div className="section-container py-16">
      <Seo
        title="Page not found"
        description="The page you requested could not be found. Start with urgent help, newcomer basics, local services, or FAQ."
        path="/404"
      />
      <div className="max-w-3xl space-y-8 rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
        <div className="space-y-3">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
            404
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-stone-900">
            We could not find that page
          </h1>
          <p className="text-lg text-stone-600">
            If you are trying to get care quickly, start with urgent guidance or search the
            Kingston services directory.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link to="/start-here" className="btn-secondary text-center">
            Start Here
          </Link>
          <Link to="/need-help-now" className="btn-primary text-center">
            Need Help Now
          </Link>
          <Link to="/local-services" className="btn-secondary text-center">
            Local Services
          </Link>
          <Link to="/faq" className="btn-secondary text-center">
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
};
