import React from "react";
import clsx from "clsx";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionSliderCategories from "components/SectionSliderCategories/SectionSliderCategories";
import RizeLogo from "./RizeLogo";
import { Helmet } from "react-helmet";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ParticleAnimation from "./ParticleAnimation";

import backImg1 from 'images/dashboard/3d-render-modern-background-with-plexus-design.png';
import section2BackImg1 from 'images/dashboard/section2BackImg1.png';
import section2BackImg2 from 'images/dashboard/section2BackImg2.png';
import section2Rectangle from 'images/dashboard/section2Rectangle.png';
import section7Back from 'images/dashboard/section7Back.png';
import nftImg1 from 'images/dashboard/nftImg1.png';
import nftImg2 from 'images/dashboard/nftImg2.png';
import nftImg3 from 'images/dashboard/nftImg3.png';

import SectionServices from "./SectionServices";
import SectionBlog from "./SectionBlog";
import SectionGridFeatureNFT2 from "./SectionGridFeatureNFT2";
import SectionGridFeatureNFT from "./SectionGridFeatureNFT";

function PageDashboard() {
  return (
    <>
      <Helmet>
        <title>Dashboard || Rize2Day </title>
      </Helmet>


      <div className="nc-PageDashboard relative overflow-x-clip">
        <div className="relative space-y-4 mb-24 lg:space-y-4 lg:mb-32 flex flex-col px-8 sm:px-0">
          <div className="relative bg-[#070707]/[0.3]  border-white-700 font-[700]">
            <div className={clsx("absolute bg-[#33FF00] opacity-20 blur-[100px] w-[20vw] h-2/3 rounded-full -top-[100px] -left-[120px] z-0")}></div>
            <ParticleAnimation id="id2" props={{ "position": "absolute", "width": "30vw", "height": "80%" }} />
            <div className={clsx("absolute bg-[#33FF00] opacity-20 blur-[100px] w-[20vw] h-2/3 rounded-full -bottom-[200px] -right-[120px] z-0")}></div>
            <ParticleAnimation id="id3" props={{
              "position": "absolute", "right": "0px", "width": "30vw", "height": "100%"
            }} />
            <ParticleAnimation id="id4" props={{
              "position": "absolute", "left": "30vw", "width": "30vw", "height": "100%"
            }} />
            < img className="absolute w-[80%] h-[120%] opacity-70" src={backImg1} alt="" />
            <div className="container relative  lg:px-12  border-red-700 flex md:flex-row flex-col items-center justify-between py-12 sm:py-0">
              <div className="xl:w-[800px] sm:w-[60%] h-full  border-blue-700 space-y-12">
                <p className="text-[76px] leading-[80px] text-white  tracking-[0.05em]">
                  Gather. Create.<br />Evolve.
                </p>
                <p className="text-[20px] leading-[30px] text-white font-[700] tracking-[0.05em]">
                  It is along established fact that a reader will be distracted <br />by the readable content of a page when looking
                </p>

                <ButtonPrimary
                  onClick={() => {
                    alert("Comming soon");
                  }}
                  sizeClass="px-4 py-2 sm:px-10"
                >
                  Explorer
                </ButtonPrimary>
              </div>
              <RizeLogo
                props={{ "position": "relative", "width": "40%" }}
                size={600 / 1.5}
                unit={'px'}
                particleColor={"#338050"}
                delay={3} />
            </div>
          </div>
          <div className="container relative py-10 lg:py-12">
            <div className="left-0 flex flex-col sm:flex-row items-center justify-around h-full w-full">
              <div className="relative sm:w-[50%] h-full min-h-[400px] min-w-[400px] border-white-500 flex items-center justify-start">
                <img className="animate-[wiggle_2s_ease-in-out_infinite] absolute w-full top-0  w-[400px] h-[400px]" src={section2BackImg1} alt="" />
                <img className="animate-[wiggle_3s_ease-in-out_infinite] absolute w-full top-0 w-full h-full" src={section2BackImg2} alt="" />
                <div className="absolute flex flex-col items-center w-full">
                  <img className="hover:animate-[bounce_1s_ease-in-out_infinite] w-full w-[400px] h-[400px]" src={section2Rectangle} alt="" />
                </div>
              </div>
              <div className="relative flex flex-col text-left sm:w-[50%] py-12 sm:py-0">
                <p className={"text-[64px] leading-[67px] text-white  tracking-[0.05em]"}>
                  What We Are
                </p >
                <br />
                <p className={"text-[20px] leading-[30px] text-white text-left  tracking-[0.05em]"}>
                  All who join Rize are Rize! <br />
                  We are think out of the box, AI ran organization. <br />
                  Yes, the structure may seem similar to others now, <br />
                  but as our system learns, it grows, thanks to <br />
                  innovative AI and community. As the user-base grows, <br />
                  the AI shapes and updates code to best enable the <br />
                  community to succeed and evolve.
                </p>
              </div>
            </div>
          </div>
          <div className="relative py-10 lg:py-12">
            <div className="container">
              <BackgroundSection />
              <SectionServices />
            </div>
          </div>

          <div className="relative py-10 lg:py-12">
            <div className="container">
              <div
                className={`nc-BackgroundSection relative overflow-hidden inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 bg-neutral-100/80 dark:bg-black/20`}
                data-nc-id="BackgroundSection"
              >
                <div className="absolute bg-[#33FF00] opacity-60 blur-[80px] w-[300px] h-full rounded-full -left-[80px] z-0"></div>
                <div className="absolute bg-[#33FF00] opacity-20 blur-[70px] w-[300px] h-full rounded-full -right-[140px] z-0"></div>
                <div className="absolute w-full h-full flex flex-col items-center justify-center space-y-4">
                  <p className="text-white text-[64px] leading-[100%] tracking-[5%]">
                    Launchpad Coming soon
                  </p>
                  <p className="text-white text-[20px] leading-[30px] tracking-[5%]">
                    Lanunching new projects to a new level
                  </p>
                </div>
                <img className="w-full h-[413px]" src={section7Back} alt="" />
              </div>
            </div>
          </div>

          <div className="relative py-10 lg:py-12">
            <div className="container">
              <div className="relative  border-red-700 flex flex-col md:flex-row items-center justify-between space-y-12 sm:space-y-0" >
                <div className="xl:w-[600px] sm:w-[40%] h-full border-blue-700 space-y-12">
                  <p className="text-[48px] leading-[50px] text-white  tracking-[0.05em]">
                    Rize NFT Governance
                  </p>
                  <p className="text-[20px] leading-[30px] text-white font-[700] tracking-[0.05em] text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                  </p>

                  <ButtonPrimary
                    onClick={() => {
                      alert("Comming soon");
                    }}
                    sizeClass="px-4 py-2 sm:px-10"
                  >
                    Learn more
                  </ButtonPrimary>
                </div>
                <div className="relative flex  justify-start xl:w-[500px] sm:w-[40%] sm:h-[455px]">
                  <img className="hover:animate-[wiggle_1s_ease-in-out_infinite] absolute w-[471px]  left-[100px] h-[455px] rotate-[20deg] hover:z-30 z-1" src={nftImg2} alt="" />
                  <img className="hover:animate-[wiggle_1s_ease-in-out_infinite] absolute w-[471px] h-[455px] -left-[100px] -rotate-[20deg] z-2 hover:z-30" src={nftImg3} alt="" />
                  <img className="hover:animate-[wiggle_1s_ease-in-out_infinite] absolute w-[471px] h-[455px] z-3 hover:z-30" src={nftImg1} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative py-10 lg:py-12">
            <div className="container">
              <BackgroundSection />
              <SectionBlog />
            </div>
          </div>

          <div className="relative py-10 lg:py-12">
            <div className="container">
              <BackgroundSection />
              <SectionSliderCategories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageDashboard;
