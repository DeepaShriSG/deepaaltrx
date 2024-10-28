"use client";
import Link from "next/link";
import Navbar from "./components/Navbar";
import About from "./components/About";
import MediaBadges from "./components/MediaBadges";

import Footer from "./components/Footer"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  return (
    <div>
      <Navbar />
      <About />
      <MediaBadges router={router} />
     
      <Footer/>
    </div>
  );
}
