import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Studio } from "@/components/home/Studio";

export default function Home() {
  return (
    <main className="flex flex-col gap-5">
      <Hero />
      <Studio />
      <Services />
    </main>
  );
}
