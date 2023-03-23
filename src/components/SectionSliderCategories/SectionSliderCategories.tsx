import React, { FC, useEffect, useId, useRef, useState } from "react";
import Heading from "components/Heading/Heading";
import Glide from "@glidejs/glide";
import CardGame from "components/CardGame/CardGame";
import { nftsCatImgs } from "contains/fakeData";
import { config, CATEGORIES } from "app/config";
import { useAppDispatch, useAppSelector } from "app/hooks";
import axios from "axios";
import { changeCategorySummary, selectCategorySummary } from "app/reducers/nft.reducers";


export interface SectionSliderCategoriesProps {
  className?: string;
  itemClassName?: string;
  heading?: string;
  subHeading?: string;
  onSelect?: any;
  isForMusicPlayer?: boolean;
}

const SectionSliderCategories: FC<SectionSliderCategoriesProps> = ({
  heading = "Games",
  subHeading = "",
  className = "",
  itemClassName = "",
  isForMusicPlayer = false,
  onSelect = undefined
}) => {
  const sliderRef = useRef(null);
  const id = useId();
  const UNIQUE_CLASS = "glidejs" + id.replace(/:/g, "_");
  const [summary, setSummary] = useState([]);
  const globalCategorySummary = useAppSelector(selectCategorySummary);
  const dispatch = useAppDispatch();

  const getSummaryOfCategories = async () => {
    await axios.post(
      `${config.API_URL}api/item/getSummaryByCollectionNames`
    ).then((response) => {
      if (response.data.code === 0) {
        setSummary(response.data.data);
      }
      dispatch(changeCategorySummary(response.data.data || []));
    })
      .catch((error) => {

      })
  }

  useEffect(() => {
    getSummaryOfCategories();
  }, [])

  useEffect(() => {
    if (!sliderRef.current) {
      return;
    }

    const OPTIONS: Glide.Options = {
      perView: 3,
      gap: 32,
      bound: true,
      breakpoints: {
        1280: {
          perView: 4,
        },
        1024: {
          gap: 20,
          perView: 3.4,
        },
        768: {
          gap: 20,
          perView: 3,
        },
        640: {
          gap: 20,
          perView: 2.3,
        },
        500: {
          gap: 20,
          perView: 1.4,
        },
      },
    };

    let slider = new Glide(`.${UNIQUE_CLASS}`, OPTIONS);
    slider.mount();
    // @ts-ignore
    return () => slider.destroy();
  }, [sliderRef, UNIQUE_CLASS, globalCategorySummary]);

  return (
    <div className={`nc-SectionSliderCategories ${className}`}>
      <div className={`${UNIQUE_CLASS} flow-root`} ref={sliderRef}>

        <Heading desc={subHeading} hasNextPrev>
          {
            heading !== "" ? heading : " "
          }
        </Heading>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {globalCategorySummary && globalCategorySummary.length > 0 && globalCategorySummary.map((item, index) => (
              <li key={index} className={`glide__slide ${itemClassName}`} onClick={() => isForMusicPlayer && onSelect && onSelect(`${(item as any).category?.value}`)}>
                <CardGame
                  index={index}
                  featuredImage={nftsCatImgs[index % 4]}
                  name={`${(item as any).category?.text}`}
                  content={`Lorem ipsum dolorostic siting amet, consectetur adipiscing elitar, sed do mod tempor incididunt`}
                  count={(item as any).itemCounts}
                  isForMusicPlayer={isForMusicPlayer}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionSliderCategories;
