import { Box } from "@mui/material";
import React, { FC, useState } from "react";
import Particles from 'react-tsparticles';

import sell_bg from 'images/escrow/sell_bg.png';
import glass from 'images/escrow/glass.png';
import ButtonPrimary from "shared/Button/ButtonPrimary";


export interface SectionSellProps { }

const SectionSell: FC<SectionSellProps> = () => {

    return (
        <div className="nc-SectionSell relative">
            <div className="flex flex-col items-center justify-center pt-36 pb-20">
                <img className="w-[104px] h-[177px]" src={glass} alt="" />
                <p className="text-white text-[40px] traking-[0.05em] leading-[100%] my-10">
                    You can start selling at mil USD
                </p>
                <ButtonPrimary
                    onClick={() => {
                        // alert("Comming soon");
                    }}
                    className=""
                    sizeClass="px-20 py-2 sm:px-40"
                >
                    Sell Now
                </ButtonPrimary>
            </div>
        </div>
    );
};

export default SectionSell;

