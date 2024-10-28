"use client";
import React, { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

function MediaPage() {
  let newCard = [
    {
      id: 1,
      imgurl: "/CNBCtv18.png",
      date: "28-03-2024",
      description: "SEBI To Create Framework For Small & Medium REITs Assessing The Impact",
      link: "https://www.youtube.com/watch?v=c76IQ3U6VHg",
    },
    {
      id: 2,
      imgurl: "/CNBCtv18.png",
      date: "25-03-2024",
      description: "Alt DRX on CNBC TV18 News",
      link: "https://www.youtube.com/watch?v=E-K92-RJ1fo",
    },
    {
      id: 3,
      imgurl: "/EconomicTimes.jpg",
      date: "19-03-2023",
      description: "Fintech startup Alt Realtech launches world's first digital real estate Marketplace",
      link: "https://economictimes.indiatimes.com/industry/services/property-/-cstruction/fintech-startup-alt-realtech-launches-worlds-first-digital-real-estate-exchange/articleshow/98774918.cms?from=mdr",
    },
    {
      id: 4,
      imgurl: "/TimesOfIndia.jpg",
      date: "22-03-2023",
      description: "Alt DRX, World's First Digital Real Estate Marketplace, raises $3.6 million",
      link: "https://timesofindia.indiatimes.com/alt-drx-worlds-first-digital-real-estate-exchange-raises-3-6-million-now-invest-in-real-estate-1-sq-ft-at-a-time/articleshow/98866697.cms",
    },
    {
      id: 5,
      imgurl: "/Ndtv.jpg",
      date: "31-03-2023",
      description: "Prop-Tech Company Alt DRX - India's Digital Real Estate Market Place",
      link: "https://www.youtube.com/watch?v=Bmyg8LVf86Q&t=1s",
    },
    {
      id: 6,
      imgurl: "/TheWeek.jpg",
      date: "22-03-2023",
      description: "Alt DRX World's First Digital Real Estate Marketplace raises 3.6 million",
      link: "https://www.theweek.in/wire-updates/business/2023/03/22/dcm1-alt-realtech.html",
    },
    {
      id: 7,
      imgurl: "/FinancialExpress.jpg",
      date: "22-03-2023",
      description: "Alt DRX, world's first digital real estate Marketplace, raises $3.6 million",
      link: "https://www.financialexpress.com/business/blockchain-alt-drx-worlds-first-digital-real-estate-exchange-raises-3-6-million-3019008/",
    },
    {
      id: 8,
      imgurl: "/FinancialExpress.jpg",
      date: "15-09-2023",
      description: "Rising yields drive fractional ownership in premium holiday properties",
      link: "https://www.financialexpress.com/business/industry-rising-yields-drive-fractional-ownership-in-premium-holiday-properties-3243922/",
    },
    {
      id: 9,
      imgurl: "/Realty.jpg",
      date: "21-03-2023",
      description: "Fintech startup Alt Realtech launches world's first digital RE Marketplace",
      link: "https://www.rprealtyplus.com/allied/fintech-startup-alt-realtech-launches-worlds-first-digital-re-exchange-109965.html",
    },
    {
      id: 10,
      imgurl: "/Realty.jpg",
      date: "26-08-2023",
      description: "Alt DRX unveils digital real estate marketplace",
      link: "https://www.rprealtyplus.com/allied/alt-drx-unveils-digital-real-estate-marketplace-111932.html",
    },
    {
      id: 11,
      imgurl: "/ConstructionWorld.jpg",
      date: "21-03-2023",
      description: "World's first digital real estate Marketplace launched by Alt Realtech..",
      link: "https://www.constructionworld.in/latest-construction-news/real-estate-news/world---s-first-digital-real-estate-exchange-launched-by-alt-realtech/39767",
    },
    {
      id: 12,
      imgurl: "/SunNxt.jpg",
      date: "April 2023",
      description: "Alt DRX Has Secured $3.6 Mn In Seed Round",
      link: "https://realtynxt.com/news/alt-drx-has-secured-36-mn-in-seed-round",
    },
    {
      id: 13,
      imgurl: "/mediabrief.jpg",
      date: "28-09-2023",
      description: "Alt DRX unveils digital real estate marketplace for Indian investors",
      link: "https://mediabrief.com/alt-drx-unveils-digital-real-estate-marketplace-for-for-indian-investors/",
    },
    {
      id: 14,
      imgurl: "/BizzBuzz.jpg",
      date: "09-09-2023",
      description: "How Alt DRX making real estate investing more accessible to all",
      link: "https://www.bizzbuzz.news/bizz-talk/how-alt-drx-making-real-estate-investing-more-accessible-to-all-1246619",
    },
  ];

  let carouselData = [
    {
      title: "THE TIMES OF INDIA",
      content:
        "“Democratisation of Real Estate ownership by dematerialising it empowers everyone to co-own high-quality residential as well as commercial real estate that are managed by professionals” ",
      name: "-Avinash Rao",
      position: "Principal Founder",
    },
    {
      title: "FINANCIAL EXPRESS",
      content: "“These tradeable digital assets can then be bought, held, traded at real-time prices and settled instantaneously...”",
      name: "-Sachin Joshi",
      position: "Co-Founder & CTO",
    },
    {
      title: "NDTV",
      content:
        "“Democratisation of Real Estate ownership by dematerialising it empowers everyone to co-own high-quality residential as well as commercial real estate that are managed by professionals”-",
      name: "-Avinash Rao",
      position: "Principal Founder",
    },
  ];

  return (
    <>
      <div>
        <header>
          <Navbar />
          <div className="m-5 p-5">
            <Image
              alt="Banner"
              src="/PressBanner.jpg"
              width={1920}
              height={1080}
              className="object-cover rounded-lg md:rounded-2xl mx-auto"
              priority
              style={{ borderRadius: "1rem" }}
            />
          </div>
        </header>

        <section className="relative container mx-auto my-5 p-3">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper text-center">
            {carouselData.map((item) => {
              return (
                <>
                  <SwiperSlide className="h-24 " key={item.title}>
                    <div className="flex flex-col justify-center w-full text-black relative z-10">
                      <p className="text-sm font-bold">{item.title}</p>
                      <h1 className="text-18 md:text-xl font-semibold	 my-4 px-4 md:px-12 leading-6">{item.content}</h1>
                      <h5 className="text-base font-bold">{item.name}</h5>
                      <p className="text-base font-light">{item.position}</p>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </section>

        {/* News Cards */}
        <div className="m-5 p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newCard.map((item) => (
              <section key={item.id} className="border border-black rounded-lg bg-orange">
                <div className="rounded-lg bg-white h-200 lg:h-150px xl:h-200px">
                  <Image alt="" src={item.imgurl} width={1920} height={1080} className="object-scale-down rounded-t-lg" style={{ borderRadius: "1rem" }} />
                </div>
                <div className="rounded-b-lg text-white px-8 lg:px-4 xl:px-6 py-2 h-36 flex flex-col justify-between">
                  <div>
                    <p className="font-light text-fs12">{item.date}</p>
                    <h6 className="text-fs14">{item.description}</h6>
                  </div>
                  <p className="font-light text-fs12">
                    <a target="_blank" rel="noopener noreferrer" href={item.link}>
                      <span className="mr-1 underline">READ MORE</span>&gt;
                    </a>
                  </p>
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default MediaPage;
