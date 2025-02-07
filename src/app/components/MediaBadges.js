"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

function MediaBadges({ router }) {
  let carouselData = [
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
  return (
    <div className="w-homescreen m-5 p-5">
      <div className="flex flex-col md:flex-row justify-center items-center m-3">
        <h1 className="w-full mediaFont text-xl md:text-base lg:text-lg xl:text-xl font-extrabold text-black text-center">Media Badges on Our Shoulder</h1>
        <Link href={"/media" || "/"} className="uppercase underline text-end font-extrabold text-orange text-sm whitespace-nowrap cursor-pointer">
          View all
        </Link>
      </div>
      <div>
      <section className="container mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{
            delay: 5500,
            disableOnInteraction: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {carouselData.map((item) => (
            <SwiperSlide key={item.id}>
              <section className="border border-black rounded-lg bg-orange flex flex-col">
                <div className="bg-white rounded-t-lg overflow-hidden">
                  <Image
                    alt=""
                    src={item.imgurl}
                    width={1920}
                    height={1080}
                    className="h-52 object-cover w-full"
                  />
                </div>
                <div className="px-4 py-3 text-white h-44 flex flex-col justify-between">
                  <p className="text-sm font-light">{item.date}</p>
                  <h6 className="text-base font-medium">{item.description}</h6>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.link}
                    className="text-xs font-light underline mt-2"
                  >
                    READ MORE &gt;
                  </a>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      </div>
    </div>
  );
}

export default MediaBadges;
