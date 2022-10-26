import React from "react";
import { Outlet } from "react-router-dom";
import SectionHeader from "../financial/SectionHeader";
import ContractMenu from "../contract/ContractMenu";

function ContractPageLayout() {
  return (
    <div>
      <SectionHeader tittle="Contract Settings" />
      <div className="container">
        <div className="flex flex-col xl:flex-row w-full mt-10 mb-10 text-left xl:space-x-5 space-y-5 xl:space-y-0">
          <ContractMenu />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ContractPageLayout;
