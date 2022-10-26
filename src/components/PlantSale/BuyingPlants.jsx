import React from "react";
import HowMuchHavest from './HowMuchHavest';
import ExpectedResults from './ExpectedResults';
import Invoice from './Invoice';

function BuyingPlants() {
  return (
    <div className="p-3 px-4 border-l-4 my-border-1 mt-7 my-shadow-1  bg-white">
     <HowMuchHavest />
     <ExpectedResults />
     <Invoice />
    </div>
  );
}

export default BuyingPlants;
