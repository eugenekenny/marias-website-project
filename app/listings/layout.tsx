import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homes For Sale | Maria Navin-Lassiter | Denver & Brighton CO",
  description:
    "Browse current listings represented by Maria Navin-Lassiter — Century 21 Moore Real Estate. Homes for sale in Brighton, Denver, and surrounding Colorado communities. Call (720) 401-1889.",
  alternates: { canonical: "https://www.mariacoloradorealty.com/listings" },
};

export default function ListingsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
