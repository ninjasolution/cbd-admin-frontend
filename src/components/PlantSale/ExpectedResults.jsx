import React, { useState } from "react";
import { HandIcon } from "../../icons";
import SimpleCollaps from "./../common/Collaps/SimpleCollaps";
import ComplexAccordian from "./../common/Collaps/ComplexAccordian";

function ExpectedResults() {
  const accordian1 = {
    icon: <HandIcon width={26} className="inline" />,
    show:true,
    ques: "Service charges",
    ans: (
      <span>
        The service costs will be subtracted from the harvest (based on the price table) and will be 35 EUR per grow. They are calculated from:
      </span>
    ),
    tag: [
      "Wages",
      "Electricity (Air Conditioning/Ventilation)",
      "Rent",
      "Electricity (lamps)",
      "Fertilizer",
      "Expendable Goods",
      "Rockwool cubes & water",
    ],
  };
  const accordian2 = {
    icon: <HandIcon width={26} className="inline"/>,
    ques: "Harvest amount",
    ans: (
      <>
        <span>
        The harvested results (and the example above) will be deducted with our service costs, the remaining amount will be split 50/50 between the company and the plant-owner.
        </span>
      </>
    ),
  };
  const accordian4 = {
    icon: <HandIcon width={26} className="inline" />,
    ques: "Harvest amount",
    ans: (
      <span>
        The harvested results (and the example above) will be deducted with our
        service costs, the remaining amount will be split 50/50 between the
        company and the plant-owner.
        <br />
        <strong className="inline-block mt-3">Switzerland: </strong> Cannabis is
        fully legal with up to 1% THC. All flowers grown by Cannerald contain
        less than 1% THC.
        <br />
        <strong className="inline-block mt-3">EU:</strong> Cannabis is legal
        with up to 0.2%. After you request a delivery to the EU for your
        harvested CBD, we have to extract THC from your flowers. Smoking is not
        recommended. You can use it for any future productions like cremes,
        oils, soap, or other products.
      </span>
    ),
  };
  const accordian5 = {
    icon: <HandIcon width={26} className="inline"/>,
    ques: "Find a buyer by yourself and start your own CBD Business.",
    ans: (
      <>
        <span>
          If you have not already started in the CBD business you can do this
          anytime (depending on your country). Take your CBD and sell it
          yourself. As a shop owner, or just as a reseller. Just let us know
          where we should send your harvest.
        </span>
      </>
    ),
  };

  return (
    <div>
      <p className="text-right mt-1.5">Expected results per harvest</p>
      <div className="mt-4">
      <SimpleCollaps data={accordian1} />
      <SimpleCollaps data={accordian2} />
      <ComplexAccordian />
      <SimpleCollaps data={accordian4} />
      <SimpleCollaps data={accordian5} />
      </div>
      {/* <SimpleCollaps /> */}
    </div>
  );
}

export default ExpectedResults;
