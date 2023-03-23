import { config } from "app/config";
import { nftsLargeImgs } from "contains/fakeData";
import Heading from "components/Heading/Heading";
import { FC, useState, useEffect, useRef } from "react";
import { io } from 'socket.io-client';
import { useAppDispatch, useAppSelector } from "app/hooks";
import { changeBannerItemsOnAuction, selectBannerItemsOnAuction, selectDetailOfAnItem, selectCOREPrice } from "app/reducers/nft.reducers";
import { selectCurrentChainId, selectCurrentUser, selectCurrentWallet, selectGlobalProvider, selectWalletStatus } from "app/reducers/auth.reducers";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { isEmpty } from "app/methods";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from "axios";
import CardLarge1 from "components/CardLarge1/CardLarge1";

import ButtonPrimary from "shared/Button/ButtonPrimary";

import section2Rectangle from 'images/dashboard/section2Rectangle.png';
import section3Avatar from 'images/dashboard/section3Avatar.png';
import section4Frame from 'images/dashboard/section4Frame.png';
import section5Frame from 'images/dashboard/section5Frame.png';
import section6Frame from 'images/dashboard/section6Frame.png';
import section6Img1 from 'images/dashboard/section6Img1.png';
import section6Img2 from 'images/dashboard/section6Img2.png';



var socket = io(`${config.socketUrl}`);

export interface SectionLargeSliderProps {
  className?: string;
}

const SectionLargeSlider: FC<SectionLargeSliderProps> = ({
  className = "",
}) => {
  const [indexActive, setIndexActive] = useState(0);
  const dispatch = useAppDispatch();
  const globalBannerItemsOnAuction = useAppSelector(selectBannerItemsOnAuction);
  const [items, setItems] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    getPopularItems();
  }, []);

  const getPopularItems = () => {
    axios.post(
      `${config.API_URL}api/item/getPopularItems`,
      {
        limit: 10
      }
    ).then((response) => {
      setItems(response.data.data || []);
    })
      .catch((error) => {
        console.log("getPopularItems() error ===> ", error);
      })
  }

  const getNftBannerList = async (limit: number) => {
    await axios.post(`${config.API_URL}api/item/get_banner_list`, { limit: limit }, {
      headers:
      {
        "x-access-token": localStorage.getItem("jwtToken")
      }
    }).then((result) => {
      dispatch(changeBannerItemsOnAuction(result.data.data || []));
    }).catch(() => {

    });
  }

  useEffect(() => {
    socket.on("UpdateStatus", data => {
      getNftBannerList(100);
    });
    getNftBannerList(100);
  }, []);

  console.log(items)

  return (
    <div className={`nc-SectionServices relative space-y-[130px]`}>
      <div className="mb-12 lg:mb-14">
        <Heading
          className="text-neutral-900 dark:text-neutral-50 mb-4"
          fontClass="text-3xl md:text-[64px] 2xl:text-[64px] font-semibold text-[#33FF00]"
          isCenter
          desc=""
        >
          Services
        </Heading>
      </div>
      <div className="relative  border-red-700 flex flex-col md:flex-row items-center justify-between space-y-12 sm:space-y-0" >
        <div className="xl:w-[696px] sm:w-[50%] h-full border-blue-700 space-y-12">
          <p className="text-[48px] leading-[50px] text-white  tracking-[0.05em]">
            Discover Rare NFTs
          </p>
          <p className="text-[20px] leading-[30px] text-white font-[700] tracking-[0.05em] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <ButtonPrimary
            onClick={() => {
              alert("Comming soon");
            }}
            sizeClass="px-4 py-2 sm:px-10"
          >
            Marketplace
          </ButtonPrimary>
        </div>
        <div className="relative flex  justify-end xl:w-[696px] sm:w-[50%]">
          <img className="top-0 right-0 w-[309px] h-[345px] -rotate-[3.35deg]" src={section2Rectangle} alt="" />
          <img className="hover:animate-[wiggle_1s_ease-in-out_infinite] absolute  -right-[50px] -top-[100px] w-[365px] h-[428px] rotate-[3.35deg]" src={section3Avatar} alt="" />
        </div>
      </div>

      <div className="relative  border-red-700 flex flex-col md:flex-row items-center justify-between space-y-12 sm:space-y-0" >
        <div className="relative flex  justify-start xl:w-[500px] sm:w-[40%]">
          <img className="w-[471px] h-[455px] -rotate-[0.03deg]" src={section4Frame} alt="" />
        </div>
        <div className="xl:w-[696px] sm:w-[60%] h-full border-blue-700 space-y-12">
          <p className="text-[48px] leading-[50px] text-white  tracking-[0.05em]">
            Utility
          </p>
          <p className="text-[20px] leading-[30px] text-white font-[700] tracking-[0.05em] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
      </div>


      <div className="relative  border-red-700 flex flex-col md:flex-row items-center justify-between space-y-12 sm:space-y-0" >
        <div className="xl:w-[696px] sm:w-[50%] h-full border-blue-700 space-y-12">
          <p className="text-[48px] leading-[50px] text-white  tracking-[0.05em]">
            Bridge
          </p>
          <p className="text-[20px] leading-[30px] text-white font-[700] tracking-[0.05em] text-justify">
            First cross chain bridge between Cosmos and XRPL. A new way to safe guard your most precious assets. And move away from centralized scams. Experience a seemless bridge experience!
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
        <div className="relative flex  justify-end xl:w-[500px] sm:w-[40%]">
          <img className="w-[471px] h-[455px] -rotate-[0.03deg]" src={section5Frame} alt="" />
        </div>
      </div>

      <div className=" border-red-700 flex flex-col md:flex-row items-center justify-between space-y-12 sm:space-y-0" >
        <div className="relative flex  justify-start xl:w-[500px] w-[50%] h-[455px]">
          <img className="animate-[alphaanimation1_8s_ease-in-out_infinite]  absolute transfrom translate-x-36 -translate-y-36 w-[471px] h-[455px]" src={section6Img1} alt="" />
          {/* <img className="absolute transfrom translate-x-36 -translate-y-36 w-[499px] h-[524px] " src={section6Frame} alt="" /> */}
          <img className="animate-[alphaanimation2_8s_ease-in-out_infinite]  absolute w-[471px] h-[455px]" src={section6Img2} alt="" />
          {/* <img className="absolute w-[499px] h-[524px] " src={section6Frame} alt="" /> */}
        </div>
        <div className="xl:w-[696px] sm:w-[50%]  h-full border-blue-700 space-y-12">
          <p className="text-[48px] leading-[50px] text-white  tracking-[0.05em]">
            Listen, Learn Earn (LLE)
          </p>
          <p className="text-[20px] leading-[30px] text-white font-[700] tracking-[0.05em] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
      </div>
    </div>


  );
};

export default SectionLargeSlider;
