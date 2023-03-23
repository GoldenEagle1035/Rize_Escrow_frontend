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

import special_offer_temp from 'images/escrow/special_offer_temp.png';
import ParticleAnimation from "./ParticleAnimation";


var socket = io(`${config.socketUrl}`);

export interface SectionSpecialOfferProps {
  className?: string;
}

const SectionSpecialOffer: FC<SectionSpecialOfferProps> = ({
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
    <div className={`nc-SectionSpecialOffer relative`}>
      <div className="absolute flex justify-between">
        <ParticleAnimation id="id12" props={{ "width": "10vw", "height": "50%" }} />
        <ParticleAnimation id="id13" props={{ "width": "10vw", "height": "50%" }} />
      </div>

      <div className="relative border-red-700 flex flex-col md:flex-row items-center justify-between space-y-12 sm:space-y-0" >

        <div className="xl:w-[796px] sm:w-[70%] h-full border-blue-700 space-y-12">
          <p className="text-[15px] leading-[30px] text-white font-[100] tracking-[0.05em] text-justify">
            Special Offer for Exclusive Users Only
          </p>
          <p
            className=" text-[#33FF00] mb-4 text-3xl md:text-[64px] 2xl:text-[64px] font-semibold tracking-[0.05em]"
          >
            50% Discount
          </p>
          <p className="text-[30px] leading-[30px] text-white font-[100] tracking-[0.05em] text-justify">
            Limited time offer
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
        <div className="relative flex  justify-start xl:w-[400px] sm:w-[30%]">
          <div className="relative w-[371px] h-[455px] border border-4 border-green-500 rounded-[20px] relative overflow-hidden">
            <img className="w-full h-full" src={special_offer_temp} alt="" />
            <div className="absolute w-full h-[200px] mt-[-200px] p-2 " >
              <div className="flex flex-col w-full h-full border rounded-[20px] border-0">
                <div className="flex flex-row w-full h-[50%] p-5 bg-white/13 backdrop-blur-md">
                  <div className="flex flex-col w-[70%] h-full">
                    <p className="text-[20px] leading-[30px] text-white font-[100] tracking-[0.05em] text-justify">
                      Carbon
                    </p>
                    <p className="text-[10px] leading-[30px] text-white font-[100] tracking-[0.05em] text-justify">
                      1 Edition Mined
                    </p>
                  </div>
                  <div className="flex w-[30%] h-full">
                    <ButtonPrimary
                      onClick={() => {
                        // alert("Comming soon");
                      }}
                      sizeClass="px-2 py-1 sm:px-6"
                    >
                      Art
                    </ButtonPrimary>
                  </div>
                </div>
                <div className="flex flex-row w-full h-[50%]">
                  <div className="flex flex-col w-[40%] h-full p-5 bg-white/13 backdrop-blur-md">
                    <p className="text-[20px] leading-[30px] text-white font-[100] tracking-[0.05em] text-justify">
                      $4500
                    </p>
                    <p className="text-[10px] leading-[30px] text-white font-[100] tracking-[0.05em] text-justify">
                      Auction
                    </p>
                  </div>
                  <div className="flex flex-row w-[60%] h-full p-5 bg-white/13 backdrop-blur-md">
                    <div className="flex flex-col w-[80%] h-full">
                      <p className="text-[20px] leading-[30px] text-white font-[100] tracking-[0.05em] text-justify">
                        $9000
                      </p>
                      <p className="text-[10px] leading-[30px] text-white font-[100] tracking-[0.05em] text-justify">
                        Buy Now
                      </p>
                    </div>
                    <div className="flex flex-col w-[20%] h-full">
                      <p className="text-[20px] leading-[30px] text-white font-[100] tracking-[0.05em] text-justify">
                        *
                      </p>
                      <p className="text-[10px] leading-[30px] text-white font-[100] tracking-[0.05em] text-justify">
                        100+
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default SectionSpecialOffer;
