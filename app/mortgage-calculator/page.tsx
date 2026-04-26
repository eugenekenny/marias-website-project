"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(500000);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [interestRate, setInterestRate] = useState(6.8);
  const [loanTerm, setLoanTerm] = useState(30);
  const [propertyTaxRate, setPropertyTaxRate] = useState(0.6);
  const [hoaMonthly, setHoaMonthly] = useState(0);
  const [insuranceMonthly, setInsuranceMonthly] = useState(150);

  const calc = useMemo(() => {
    const downPayment = (downPaymentPct / 100) * homePrice;
    const loanAmount = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;

    let principalAndInterest = 0;
    if (monthlyRate === 0) {
      principalAndInterest = loanAmount / numPayments;
    } else {
      principalAndInterest =
        (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
        (Math.pow(1 + monthlyRate, numPayments) - 1);
    }

    const propertyTax = (homePrice * (propertyTaxRate / 100)) / 12;
    const total = principalAndInterest + propertyTax + hoaMonthly + insuranceMonthly;
    const totalPaid = principalAndInterest * numPayments;
    const totalInterest = totalPaid - loanAmount;

    return {
      downPayment,
      loanAmount,
      principalAndInterest,
      propertyTax,
      total,
      totalInterest,
      totalPaid,
    };
  }, [homePrice, downPaymentPct, interestRate, loanTerm, propertyTaxRate, hoaMonthly, insuranceMonthly]);

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  const fmtDec = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 });

  const pct = (part: number, total: number) =>
    total > 0 ? Math.round((part / total) * 100) : 0;

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── NAVBAR ── */}
      <Navbar activePage="calculator" />

      {/* ── HERO ── */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-[#1a2744] to-[#2c3e6b] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[#B8960C] uppercase tracking-widest text-sm font-semibold mb-3">
            Plan Your Purchase
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mortgage Calculator</h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Estimate your monthly payment instantly. Adjust any number and see your costs update in real time.
          </p>
        </div>
      </section>

      {/* ── CALCULATOR ── */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ── LEFT: Inputs ── */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-bold text-[#1a2744] mb-6">Loan Details</h2>

            {/* Home Price */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-gray-700">Home Price</label>
                <span className="text-[#B8960C] font-bold">{fmt(homePrice)}</span>
              </div>
              <input
                type="range"
                min={100000}
                max={2000000}
                step={5000}
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
                className="w-full accent-[#B8960C]"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>$100K</span><span>$2M</span>
              </div>
            </div>

            {/* Down Payment */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-gray-700">Down Payment</label>
                <span className="text-[#B8960C] font-bold">
                  {downPaymentPct}% — {fmt(calc.downPayment)}
                </span>
              </div>
              <input
                type="range"
                min={3}
                max={50}
                step={1}
                value={downPaymentPct}
                onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                className="w-full accent-[#B8960C]"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>3%</span><span>50%</span>
              </div>
              {downPaymentPct < 20 && (
                <p className="text-xs text-amber-600 mt-2 bg-amber-50 px-3 py-2 rounded-lg">
                  ⚠️ Down payments under 20% typically require PMI (private mortgage insurance), adding to your monthly cost.
                </p>
              )}
            </div>

            {/* Interest Rate */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-gray-700">Interest Rate</label>
                <span className="text-[#B8960C] font-bold">{interestRate.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min={2}
                max={12}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-[#B8960C]"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>2%</span><span>12%</span>
              </div>
            </div>

            {/* Loan Term */}
            <div className="mb-6">
              <label className="text-sm font-semibold text-gray-700 block mb-3">Loan Term</label>
              <div className="grid grid-cols-3 gap-2">
                {[10, 15, 20, 25, 30].map((term) => (
                  <button
                    key={term}
                    onClick={() => setLoanTerm(term)}
                    className={`py-2 rounded-full text-sm font-semibold border-2 transition-colors ${
                      loanTerm === term
                        ? "bg-[#1a2744] border-[#1a2744] text-white"
                        : "border-gray-200 text-gray-600 hover:border-[#1a2744]"
                    }`}
                  >
                    {term} yr
                  </button>
                ))}
              </div>
            </div>

            {/* Additional Costs */}
            <div className="border-t border-gray-100 pt-6">
              <h3 className="text-sm font-bold text-gray-700 mb-4">Additional Monthly Costs</h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <label className="text-sm text-gray-600 w-36">Property Tax Rate</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min={0}
                      max={5}
                      step={0.05}
                      value={propertyTaxRate}
                      onChange={(e) => setPropertyTaxRate(Number(e.target.value))}
                      className="w-20 border border-gray-200 rounded-lg px-2 py-1 text-sm text-right focus:outline-none focus:ring-2 focus:ring-[#B8960C]"
                    />
                    <span className="text-sm text-gray-500">% / yr</span>
                    <span className="text-[#B8960C] font-semibold text-sm w-16 text-right">
                      {fmtDec(calc.propertyTax)}/mo
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <label className="text-sm text-gray-600 w-36">Home Insurance</label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">$</span>
                    <input
                      type="number"
                      min={0}
                      step={10}
                      value={insuranceMonthly}
                      onChange={(e) => setInsuranceMonthly(Number(e.target.value))}
                      className="w-20 border border-gray-200 rounded-lg px-2 py-1 text-sm text-right focus:outline-none focus:ring-2 focus:ring-[#B8960C]"
                    />
                    <span className="text-sm text-gray-500">/ mo</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <label className="text-sm text-gray-600 w-36">HOA Fees</label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">$</span>
                    <input
                      type="number"
                      min={0}
                      step={10}
                      value={hoaMonthly}
                      onChange={(e) => setHoaMonthly(Number(e.target.value))}
                      className="w-20 border border-gray-200 rounded-lg px-2 py-1 text-sm text-right focus:outline-none focus:ring-2 focus:ring-[#B8960C]"
                    />
                    <span className="text-sm text-gray-500">/ mo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Results ── */}
          <div className="flex flex-col gap-6">

            {/* Monthly Total */}
            <div className="bg-[#1a2744] text-white rounded-2xl p-8 text-center shadow-lg">
              <p className="text-blue-300 text-sm uppercase tracking-widest mb-2">Estimated Monthly Payment</p>
              <div className="text-6xl font-bold text-[#B8960C] mb-2">{fmt(calc.total)}</div>
              <p className="text-blue-300 text-sm">per month · {loanTerm}-year loan</p>
            </div>

            {/* Breakdown */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="font-bold text-[#1a2744] mb-5">Monthly Breakdown</h3>
              <div className="space-y-4">
                {[
                  { label: "Principal & Interest", value: calc.principalAndInterest, color: "#1a2744" },
                  { label: "Property Tax", value: calc.propertyTax, color: "#B8960C" },
                  { label: "Home Insurance", value: insuranceMonthly, color: "#4a90d9" },
                  { label: "HOA Fees", value: hoaMonthly, color: "#6c757d" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">{item.label}</span>
                      <span className="font-semibold text-[#1a2744]">{fmtDec(item.value)}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-300"
                        style={{
                          width: `${pct(item.value, calc.total)}%`,
                          backgroundColor: item.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Loan Summary */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="font-bold text-[#1a2744] mb-5">Loan Summary</h3>
              <div className="space-y-3 text-sm">
                {[
                  { label: "Loan Amount", value: fmt(calc.loanAmount) },
                  { label: "Down Payment", value: `${fmt(calc.downPayment)} (${downPaymentPct}%)` },
                  { label: "Total of Payments", value: fmt(calc.totalPaid) },
                  { label: "Total Interest Paid", value: fmt(calc.totalInterest) },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between py-2 border-b border-gray-50">
                    <span className="text-gray-500">{row.label}</span>
                    <span className="font-semibold text-[#1a2744]">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#B8960C] rounded-2xl p-6 text-white text-center">
              <p className="font-bold text-lg mb-1">Ready to make it real?</p>
              <p className="text-yellow-100 text-sm mb-4">
                Call Maria — she'll connect you with trusted lenders and guide you through every step.
              </p>
              <a
                href="tel:7204011889"
                className="inline-block bg-white text-[#B8960C] font-bold px-6 py-3 rounded-full hover:bg-yellow-50 transition-colors"
              >
                📞 Call (720) 401-1889
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER ── */}
      <section className="pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs text-gray-400 text-center leading-relaxed">
            * This calculator provides estimates for informational purposes only and does not constitute financial advice.
            Actual loan terms, interest rates, taxes, and insurance costs may vary. Contact a licensed lender for accurate figures.
            Maria Navin-Lassiter · Century 21 Moore Real Estate · Denver, CO
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1a2744] text-blue-200 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div>
            <span className="font-bold text-white">Maria Navin-Lassiter</span> · Century 21 Moore Real Estate
          </div>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/listings" className="hover:text-white transition-colors">Listings</Link>
            <Link href="/mortgage-calculator" className="hover:text-white transition-colors">Calculator</Link>
            <Link href="/#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <div>© {new Date().getFullYear()} Maria Navin-Lassiter. All rights reserved.</div>
        </div>
      </footer>

    </div>
  );
}
