"use client";

import { useState } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionIntro from "@/components/SectionIntro";
import ShopTabs from "@/components/ShopTabs";
import EditorialBlock from "@/components/EditorialBlock";
import ProductGrid from "@/components/ProductGrid";
import TrustRow from "@/components/TrustRow";
import Testimonials from "@/components/Testimonials";
import InstagramGrid from "@/components/InstagramGrid";
import Footer from "@/components/Footer";
import SearchOverlay from "@/components/SearchOverlay";
import RegionModal from "@/components/RegionModal";

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [regionOpen, setRegionOpen] = useState(false);

  return (
    <>
      <AnnouncementBar />
      <Header onSearchOpen={() => setSearchOpen(true)} />
      <main>
        <Hero />

        {/* Spacer — reserves scroll space for the fixed hero */}
        <div style={{ height: "100vh" }} aria-hidden="true" />

        {/* Content slides over the hero as you scroll */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            background: "var(--bg)",
            borderRadius: "20px 20px 0 0",
            marginTop: "-20px",
            boxShadow: "0 -8px 40px rgba(44,36,24,0.08)",
          }}
        >
          <SectionIntro />
          <ShopTabs />
          <EditorialBlock />
          <ProductGrid />
          <TrustRow />
          <Testimonials />
          <InstagramGrid />
          <Footer />
        </div>
      </main>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <RegionModal open={regionOpen} onClose={() => setRegionOpen(false)} />
    </>
  );
}
