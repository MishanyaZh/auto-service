"use client"

import { useSearchParams } from "next/navigation";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function HomePage() {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");

  return (
    <div>
      {section === "services" && <Services />}
      {section === "gallery" && <Gallery />}
      {section === "contact" && <Contact />}
      {!section && <Services />}
    </div>
  );
}
