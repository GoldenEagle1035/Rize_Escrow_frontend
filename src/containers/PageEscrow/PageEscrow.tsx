import React from "react";
import clsx from "clsx";
import { Helmet } from "react-helmet";
import ParticleAnimation from "./ParticleAnimation";

import backImg1 from 'images/dashboard/3d-render-modern-background-with-plexus-design.png';
import section7Back from 'images/dashboard/section7Back.png';
import nftImg1 from 'images/dashboard/nftImg1.png';
import nftImg2 from 'images/dashboard/nftImg2.png';
import nftImg3 from 'images/dashboard/nftImg3.png';
import sell_bg from 'images/escrow/sell_bg.png';

import SectionSpecialOffer from "./SectionSpecialOffer";
import SectionVoting1 from "./SectionVoting1";
import SectionVoting2 from "./SectionVoting2";
import SectionVoting3 from "./SectionVoting3";
import SectionStats from "./SectionStats";
import SectionSell from "./SectionSell";

function PageEscrow() {
  return (
    <>
      <Helmet>
        <title>Escrow || Rize2Day </title>
      </Helmet>

      <div className="nc-PageEscrow relative overflow-x-clip">
        <div className="relative space-y-4 mb-24 lg:space-y-4 lg:mb-32 flex flex-col px-8 sm:px-0">
          <div className="relative border-white-700 font-[700]">
            <ParticleAnimation id="id2" props={{ "position": "absolute", "width": "30vw", "height": "30%" }} />
            <ParticleAnimation id="id3" props={{ "position": "absolute", "right": "0px", "bottom": "-200px", "width": "30vw", "height": "50%" }} />
            <ParticleAnimation id="id5" props={{ "position": "absolute", "bottom": "-1200px", "width": "30vw", "height": "50%" }} />
            <ParticleAnimation id="id6" props={{ "position": "absolute", "right": "0px", "bottom": "-2200px", "width": "30vw", "height": "50%" }} />
            <ParticleAnimation id="id" props={{ "position": "absolute", "bottom": "-3200px", "width": "30vw", "height": "50%" }} />

            <div className={clsx("absolute bg-[#33FF00] opacity-20 blur-[100px] w-[20vw] h-2/3 rounded-full -top-[100px] -left-[120px] z-0")}></div>
            <div className={clsx("absolute bg-[#33FF00] opacity-20 blur-[100px] w-[20vw] h-2/3 rounded-full -bottom-[200px] -right-[120px] z-0")}></div>
            <div className={clsx("absolute bg-[#33FF00] opacity-20 blur-[100px] w-[20vw] h-2/3 rounded-full -bottom-[1200px] -left-[120px] z-0")}></div>
            <div className={clsx("absolute bg-[#33FF00] opacity-20 blur-[100px] w-[20vw] h-2/3 rounded-full -bottom-[2200px] -right-[120px] z-0")}></div>
            <div className={clsx("absolute bg-[#33FF00] opacity-20 blur-[100px] w-[20vw] h-2/3 rounded-full -bottom-[3200px] -left-[120px] z-0")}></div>

            <img className="absolute w-[80%] h-[120%] opacity-70" src={backImg1} alt="" />
            <div className="relative py-20 lg:py-24 my-20">
              <div className="container">
                <div className="relative  border-red-700 flex flex-col md:flex-row items-center justify-between space-y-12 sm:space-y-0" >
                  <div className="xl:w-[600px] sm:w-[40%] h-full border-blue-700 space-y-12">
                    <p className="text-[48px] leading-[50px] text-white  tracking-[0.05em]">
                      For Exclusive Holders
                    </p>
                    <p className="text-[20px] leading-[30px] text-white font-[700] tracking-[0.05em] text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                    </p>

                    {/* <ButtonPrimary
                      onClick={() => {
                        alert("Comming soon");
                      }}
                      sizeClass="px-4 py-2 sm:px-10"
                    >
                      Learn more
                    </ButtonPrimary> */}
                  </div>
                  <div className="relative flex  justify-start xl:w-[500px] sm:w-[40%] sm:h-[455px]">
                    <img className="absolute w-[471px]  left-[100px] h-[455px] rotate-[20deg]  z-1" src={nftImg2} alt="" />
                    <img className="absolute w-[471px] h-[455px] -left-[100px] -rotate-[20deg] z-2 " src={nftImg3} alt="" />
                    <img className="absolute w-[471px] h-[455px] z-3 " src={nftImg1} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative py-10 lg:py-12">
            <div className="container bg-black round rounded-[40px] py-12">
              <SectionSpecialOffer />
            </div>
          </div>

          <div className="relative py-10 lg:py-12">
            <div className="container bg-zinc-900 round rounded-[40px] py-12">
              <SectionVoting1 />
            </div>
          </div>

          <div className="relative py-10 lg:py-12">
            <div className="container bg-zinc-900 round rounded-[40px] py-12">
              <SectionVoting2 />
            </div>
          </div>

          <div className="relative py-10 lg:py-12">
            <div className="container bg-zinc-900 round rounded-[40px] py-12">
              <SectionStats />
            </div>
          </div>

          <div className="relative py-10 lg:py-12">
            <div className="container bg-zinc-900 round rounded-[40px] py-12">
              <SectionVoting3 />
            </div>
          </div>

          <div className="relative py-10 lg:py-12">
            {/* <img className="absolute w-full h-full" src={sell_bg} alt="" /> */}
            <div className={`container bg-[url(images/escrow/sell_bg.png)] bg-cover border border-[#33FF00]/50 round rounded-[40px] py-12`}>
              <SectionSell />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageEscrow;
