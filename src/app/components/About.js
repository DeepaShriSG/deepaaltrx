import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="w-homescreen rounded-lg md:rounded-3xl mt-5 p-5 mx-5 md:px-0">
        <Image
          alt="Banner"
          className="object-cover  rounded-lg md:rounded-2xl mx-auto"
          src="/aboutbanner.jpg"
          width={1920}
          height={1080}
          priority
        />
      </div>
     <div className="relative m-2 center">
     <Image
          alt="quotation"
          src="/quotation.png"
          className="quotationImg mb-8 mx-auto"
          width={50}
          height={100}
        />
     <div className="py-3 px-2 lg:px-8">
        <h1
          className="about-heading lg:text-fs150 md:text-fs150 text-fs90 pb-10 md:pb-0 aos-init aos-animate"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-delay="500"
        >
          About
        </h1>
        <span className="spinImage mt-3 hidden lg:block xl:block 2xl:block">
          <Image
            alt="ringlight"
            src="/aboutringlight.svg"
            width={300}
            height={300}
            className="mx-auto block"
            style={{ width: "800px", height: "auto" }}
          />
        </span>
        <div className="max-w-5xl mx-auto">
          <div className="rounded-lg overflow-hidden">
            <div className="p-3 sm:p-8 lg:p-8">
              <div className="text-center">
                <h2 className="text-md font-bold text-gray-900 sm:text-2xl">
                  Democratise Real Estate Ownership by Dematerialising It
                </h2>
                <p className="mt-4 text-sm text-gray-500">
                  We are a unique, one of its kind Real Estate Marketplace that enables people to buy & sell real estate 1
                  SQFT at a time. Alt DRX has created a unique Digital Contract that captures the economic value of 1 SQFT
                  of an underlying Property and further built a stock Marketplace like tech platform, where these digital
                  assets can be listed, bought, held in custody, traded at real-time ML algorithm determined prices and
                  settled instantaneously in Fiat amongst KYC whitelisted users of the platform. A proprietary zero trust
                  architecture using IPFS Blockchain protocol, further secures the Digital Assets' custodial ledgers of the
                  Platform.
                </p>
              </div>
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                  Alt DRX is operated in India by Alt DRX Pvt. Ltd, which is a wholly owned subsidiary of Alt Realtech Pvt.
                  Ltd Alt Realtech is a funded FinTech Startup based out of Bangalore, India.
                </p>
                <p className="mt-4 text-sm text-gray-500">
                  Alt DRX Private Limited: CIN: U70200KA2022PTC166655 and RERA no PRM/KA/RERA/1251/310/AG/230228/003445
                </p>
                <p className="mt-4 text-sm text-gray-500">
                  Alt Realtech Private Limited: CIN: U67190KA2020PTC143311
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  );
};

export default About;
