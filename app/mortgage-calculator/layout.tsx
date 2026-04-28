import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgage Calculator | Denver CO | Maria Navin-Lassiter",
  description:
    "Free mortgage calculator for Denver and Colorado home buyers. Estimate your monthly payment including principal, interest, taxes, HOA, and insurance. Powered by Maria Navin-Lassiter — (720) 401-1889.",
  alternates: { canonical: "https://www.mariacoloradorealty.com/mortgage-calculator" },
};

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
