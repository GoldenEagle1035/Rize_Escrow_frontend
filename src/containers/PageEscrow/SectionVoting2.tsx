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
export interface SectionVoting2Props { }

const SectionVoting2: FC<SectionVoting2Props> = () => {

  const [open_post, setOpenPost] = useState("open");

  return (
    <div className="nc-SectionVoting2 relative">
      <div className="flex flex-col p-12">
        <div className="flex flex-row justify-between items-center">
          <p className="text-[30px] leading-[30px] text-white font-[100] text-justify">
            Development proposals
          </p>
          <p className="text-[30px] leading-[30px] text-white font-[100] text-justify">
            00 : 00
          </p>
          <ToggleButtonGroup
            value={open_post}
            exclusive
            onChange={(event, value) => setOpenPost(value)}
            aria-label="text alignment"
            color="success"
            className="w-[200px]"
          >
            <ToggleButton value="open" aria-label="left aligned" className="w-[100px]">
              <div>Open</div>
            </ToggleButton>
            <ToggleButton value="post" aria-label="left aligned" className="w-[100px]">
              <div>Post</div>
            </ToggleButton>
          </ToggleButtonGroup>

        </div>
        <div className="flex mt-16">
          <p className="text-[30px] leading-[30px] text-white font-[100] text-justify">
            Open Votes : 3
          </p>
        </div>
        <div className="flex flex-row mt-4 py-10 px-4">
          <p className="w-[28%] text-[16px] leading-[14px] text-[#33FF00] font-[100] tracking-[0.05em] text-justify">Created by</p>
          <p className="w-[44%] text-[16px] leading-[14px] text-[#33FF00] font-[100] tracking-[0.05em] text-justify">Description</p>
          <p className="w-[14%] text-[16px] leading-[14px] text-[#33FF00] font-[100] tracking-[0.05em] text-justify">Expires</p>
          <p className="w-[14%] text-[16px] leading-[14px] text-[#33FF00] font-[100] tracking-[0.05em] text-justify"></p>
        </div>
        <div className="flex flex-col border border-[#33FF00]/50 rounded-[10px] overflow-hidden">
          <div className="flex flex-row p-4 border-b border-[#33FF00]/50 items-center bg-gray-900">
            <div className="w-[28%] flex flex-row gap-6 items-center">
              <Avatar className="w-[24px] h-[24px]" src={avatar1} alt="" />
              <p className="text-[16px] leading-[14px] text-white font-[100] tracking-[0.05em] text-justify">Lorem lpsum</p>
            </div>
            <p className="w-[44%] text-[16px] leading-[14px] text-white font-[100] tracking-[0.05em] text-justify">Lorem Ipsum Dolor sit amit color asetto... </p>
            <p className="w-[14%] text-[16px] leading-[14px] text-white font-[100] tracking-[0.05em] text-justify">2 days</p>
            <div className="w-[14%] flex justify-center">
              <ButtonPrimary
                onClick={() => {
                  // alert("Comming soon");
                }}
                sizeClass="px-6 py-2 sm:px-10"
              >
                Vote
              </ButtonPrimary>
            </div>
          </div>
          <div className="flex flex-row p-4 border-b border-[#33FF00]/50 items-center bg-gray-900">
            <div className="w-[28%] flex flex-row gap-6 items-center">
              <Avatar className="w-[24px] h-[24px]" src={avatar2} alt="" />
              <p className="text-[16px] leading-[14px] text-white font-[100] tracking-[0.05em] text-justify">Lorem lpsum</p>
            </div>
            <p className="w-[44%] text-[16px] leading-[14px] text-white font-[100] tracking-[0.05em] text-justify">Lorem Ipsum Dolor sit amit color asetto... </p>
            <p className="w-[14%] text-[16px] leading-[14px] text-white font-[100] tracking-[0.05em] text-justify">2 days</p>
            <div className="w-[14%] flex justify-center">
              <ButtonPrimary
                onClick={() => {
                  // alert("Comming soon");
                }}
                sizeClass="px-6 py-2 sm:px-10"
              >
                Vote
              </ButtonPrimary>
            </div>
          </div>
          <div className="flex flex-row p-4 items-center bg-gray-900">
            <div className="w-[28%] flex flex-row gap-6 items-center">
              <Avatar className="w-[24px] h-[24px]" src={avatar3} alt="" />
              <p className="text-[16px] leading-[14px] text-white font-[100] tracking-[0.05em] text-justify">Lorem lpsum</p>
            </div>
            <p className="w-[44%] text-[16px] leading-[14px] text-white font-[100] tracking-[0.05em] text-justify">Lorem Ipsum Dolor sit amit color asetto... </p>
            <p className="w-[14%] text-[16px] leading-[14px] text-white font-[100] tracking-[0.05em] text-justify">2 days</p>
            <div className="w-[14%] flex justify-center">
              <ButtonPrimary
                onClick={() => {
                  // alert("Comming soon");
                }}
                sizeClass="px-6 py-2 sm:px-10"
              >
                Vote
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SectionVoting2;
