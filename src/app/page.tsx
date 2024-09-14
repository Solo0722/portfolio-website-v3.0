"use client";
import Navbar from "@/components/Navbar";
import About from "@/containers/About";
import Experience from "@/containers/Experience";
import Landing from "@/containers/Landing";
import Projects from "@/containers/Projects";
import Testimonials from "@/containers/Testimonials";


export default function Home() {

  return (
    <main className="">
      <Navbar />
      <Landing />
      <About />
      <Experience />
      <Projects/>
      <Testimonials/>
    </main>
  );
}
