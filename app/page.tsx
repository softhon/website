import { Approach } from "@/components/home/Approach";
import { Contact } from "@/components/home/Contact";
import { Hero } from "@/components/home/Hero";
import { Philosophy } from "@/components/home/Philosophy";
import { Products } from "@/components/home/Products";
import { Services } from "@/components/home/Services";
import { Studio } from "@/components/home/Studio";

export default function Home() {
  return (
    <main className="flex flex-col gap-5">
      <Hero />
      <Studio />
      <Services />
      <Approach />
      <Products />
      <Philosophy />
      <Contact />
    </main>
  );
}
