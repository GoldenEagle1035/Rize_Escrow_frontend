import React, { FC, useState } from "react";
import CardNFT from "components/CardNFT";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import HeaderFilterSection from "components/HeaderFilterSection";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Avatar from "@mui/material/Avatar";

import avatar1 from 'images/escrow/avatar1.png';
import avatar2 from 'images/escrow/avatar2.png';
import avatar3 from 'images/escrow/avatar3.png';
//
export interface SectionStatsProps { }

const SectionStats: FC<SectionStatsProps> = () => {

  const [open_post, setOpenPost] = useState("open");

  return (
    <div className="nc-SectionStats relative">
      <div className="flex flex-col p-12">
        <div className="flex flex-row justify-start items-center">
          <p className="text-[30px] leading-[30px] text-white font-[100] text-justify">
            Voting
          </p>
        </div>
        <div className="flex flex-col mt-6">
          <div className="flex flex-row border border-[#33FF00]/50 rounded-[10px] items-center bg-gray-900">
            <p className="w-[60%] text-[16px] p-8 leading-[16px] text-white font-[100] tracking-[0.05em] text-justify border-r border-[#33FF00]/50">Coreum in escrow</p>
            <p className="w-[40%] text-[16px] p-8 leading-[16px] text-white font-[100] tracking-[0.05em] text-center">20.20</p>
          </div>
          <div className="flex flex-row border border-[#33FF00]/50 rounded-[10px] items-center bg-gray-900">
            <p className="w-[60%] text-[16px] p-8 leading-[16px] text-white font-[100] tracking-[0.05em] text-justify border-r border-[#33FF00]/50">How much earned from compounding</p>
            <p className="w-[40%] text-[16px] p-8 leading-[16px] text-white font-[100] tracking-[0.05em] text-center">50.26</p>
          </div>
          <div className="flex flex-row border border-[#33FF00]/50 rounded-[10px] items-center bg-gray-900">
            <p className="w-[60%] text-[16px] p-8 leading-[16px] text-white font-[100] tracking-[0.05em] text-justify border-r border-[#33FF00]/50">How much distributed to accounts</p>
            <p className="w-[40%] text-[16px] p-8 leading-[16px] text-white font-[100] tracking-[0.05em] text-center">69.065</p>
          </div>
          <div className="flex flex-row border border-[#33FF00]/50 rounded-[10px] items-center bg-gray-900">
            <p className="w-[60%] text-[16px] p-8 leading-[16px] text-white font-[100] tracking-[0.05em] text-justify border-r border-[#33FF00]/50">How much burned from escrow </p>
            <p className="w-[40%] text-[16px] p-8 leading-[16px] text-white font-[100] tracking-[0.05em] text-center">254</p>
          </div>
          <div className="flex flex-row border border-[#33FF00]/50 rounded-[10px] items-center bg-gray-900">
            <p className="w-[60%] text-[16px] p-8 leading-[16px] text-white font-[100] tracking-[0.05em] text-justify border-r border-[#33FF00]/50">Total burned from other functions</p>
            <p className="w-[40%] text-[16px] p-8 leading-[16px] text-white font-[100] tracking-[0.05em] text-center">325</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SectionStats;
