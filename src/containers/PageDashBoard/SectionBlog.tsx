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
import SectionSliderCategories from "components/SectionSliderCategories/SectionSliderCategories";
import NcImage from "shared/NcImage/NcImage";



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
          fontClass="text-3xl md:text-[64px] 2xl:text-[64px] font-semibold "
          isCenter
          desc=""
        >
          Blog
        </Heading>
      </div>
      <div className="relative  border-red-700 flex flex-col md:flex-row items-center sm:items-start justify-between space-y-12 sm:space-y-0 sm: space-x-8" >
        <div className="xl:w-[750px] sm:w-[60%] h-full border-blue-700 space-y-12">
          <div
            className={`nc-CardBlog flex flex-col cursor-pointer `}
            data-nc-id="CardBlog"
          >
            <div
              className={`flex-shrink-0 relative w-full aspect-w-4 aspect-h-3 h-0 rounded-2xl border-[#33FF00] border-[1px] overflow-hidden group`}
            >
              <NcImage
                src={section6Img1}
                className="object-cover w-full h-full rounded-2xl"
              />
              <span className="absolute inset-0 transition-opacity bg-black opacity-0 group-hover:opacity-100 bg-opacity-10"></span>
            </div>
            <div className="flex items-center mt-4">
              {/* <div className={`w-10 h-10 rounded-full ${COLORS[index]}`}></div> */}
              <div className="ml-3 space-y-4">
                <h2
                  className={`text-base sm:text-[32px] text-white font-medium truncate`}
                >
                  {"Lorem ipsum"}
                </h2>
                <span
                  className={`block mt-1 text-[20px]  text-white`}
                >
                  {"Lorem ipsum dolorostic siting amet, consectetur adipiscing elitar, sed do mod tempor incididunt."}
                </span>
              </div>
            </div>
          </div>

          <ButtonPrimary
            onClick={() => {
              alert("Comming soon");
            }}
            sizeClass="px-4 py-2 sm:px-10"
          >
            Learn more
          </ButtonPrimary>
        </div>
        <div className="relative flex flex-col justify-end xl:w-[696px] sm:w-[50%]  space-y-12">
          <div
            className={`nc-CardBlog flex flex-row cursor-pointer `}
            data-nc-id="CardBlog"
          >
            <div className="flex items-center">
              {/* <div className={`w-10 h-10 rounded-full ${COLORS[index]}`}></div> */}
              <div className="ml-3 space-y-4">
                <h2
                  className={`text-base sm:text-[32px] text-white font-medium truncate`}
                >
                  {"Lorem ipsum"}
                </h2>
                <span
                  className={`block mt-1 text-[20px]  text-white`}
                >
                  {"Lorem ipsum dolorostic siting amet, consectetur adipiscing elitar, sed do mod tempor incididunt."}
                </span>
              </div>
            </div>
            <div
              className={`flex-shrink-0 relative w-[150px] h-[150px]  rounded-2xl border-[#33FF00] border-[1px] overflow-hidden group`}
            >
              <NcImage
                src={section6Img1}
                className="object-cover w-full h-full rounded-2xl"
              />
              <span className="absolute inset-0 transition-opacity bg-black opacity-0 group-hover:opacity-100 bg-opacity-10"></span>
            </div>
          </div>

          <div
            className={`nc-CardBlog flex flex-row cursor-pointer`}
            data-nc-id="CardBlog"
          >
            <div className="flex items-center">
              {/* <div className={`w-10 h-10 rounded-full ${COLORS[index]}`}></div> */}
              <div className="ml-3 space-y-4">
                <h2
                  className={`text-base sm:text-[32px] text-white font-medium truncate`}
                >
                  {"Lorem ipsum"}
                </h2>
                <span
                  className={`block mt-1 text-[20px]  text-white`}
                >
                  {"Lorem ipsum dolorostic siting amet, consectetur adipiscing elitar, sed do mod tempor incididunt."}
                </span>
              </div>
            </div>
            <div
              className={`flex-shrink-0 relative w-[150px] h-[150px]  rounded-2xl border-[#33FF00] border-[1px] overflow-hidden group`}
            >
              <NcImage
                src={section6Img1}
                className="object-cover w-full h-full rounded-2xl"
              />
              <span className="absolute inset-0 transition-opacity bg-black opacity-0 group-hover:opacity-100 bg-opacity-10"></span>
            </div>
          </div>

          <div
            className={`nc-CardBlog flex flex-row cursor-pointer `}
            data-nc-id="CardBlog"
          >
            <div className="flex items-center">
              {/* <div className={`w-10 h-10 rounded-full ${COLORS[index]}`}></div> */}
              <div className="ml-3 space-y-4">
                <h2
                  className={`text-base sm:text-[32px] text-white font-medium truncate`}
                >
                  {"Lorem ipsum"}
                </h2>
                <span
                  className={`block mt-1 text-[20px]  text-white`}
                >
                  {"Lorem ipsum dolorostic siting amet, consectetur adipiscing elitar, sed do mod tempor incididunt."}
                </span>
              </div>
            </div>
            <div
              className={`flex-shrink-0 relative w-[150px] h-[150px]  rounded-2xl border-[#33FF00] border-[1px] overflow-hidden group`}
            >
              <NcImage
                src={section6Img1}
                className="object-cover w-full h-full rounded-2xl"
              />
              <span className="absolute inset-0 transition-opacity bg-black opacity-0 group-hover:opacity-100 bg-opacity-10"></span>
            </div>
          </div>
        </div>
      </div>

    </div>


  );
};

export default SectionLargeSlider;
