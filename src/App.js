import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ScrollReveal from "scrollreveal";

export default function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
      nav,
      #hero,
      #services,
      #recommend,
      #customers,
      .footer
      `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <Testimonials />
      <Footer />
    </>
  );
}
