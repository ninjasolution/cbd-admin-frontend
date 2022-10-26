import React from "react";
import { useState } from "react";
import { DownDubbleArrowIcon, HandIcon } from "../../../icons";
import "./Collaps.css";

function ComplexAccordian() {
  const [open, setOpen] = useState(false);
  const [openChild, setOpenChaild] = useState("1.45 EUR - 1.95 EUR");

  const data = [
    {
      title: "1.45 EUR - 1.95 EUR",
      subText: "B2B Price",
      ans: "We have a large B2B network which enables us the possibility to sell every harvest directly.",
    },
    {
      title: "1.45 EUR - 2.35 EUR",
      subText: "Mixed B2B and B2C Price",
      ans: "Since we’ve launched our online shop, Cannerald is selling a small part of the harvest B2C. This is a combined average price. Thus, it will fall as soon as the storage for the needed amount of CBD for our B2C products from Cannerald is full.",
    },
    {
      title: "2.40 EUR - 2.90 EUR",
      subText: "GMP target price for medical CBD",
      ans: "As soon as we’ve got the GMP certification and can acquire GMP buyers, we can increase the price to a solid static range.",
    },
    {
      title: "2.60 EUR - 3.60 EUR",
      subText: "GMP target price for medical THC",
      ans: "The same as with GMP-CBD. The only difference is that our plant holders can't have the harvest delivered to their address anymore. We will only change your plants to this strategy after we’ve got a confirmation from the customer.",
    },
    {
      title: "3.00 EUR - 5.00 EUR",
      subText: "B2B Price",
      ans: "This price is just symbolic in this list. It's not possible for us to sell 100% of the harvest B2C.",
    },
  ];
  return (
    <div
      className={`overflow-hidden my-shadow-1 ease-in-out duration-300 bg-white mb-5`}
    >
      <div
        onClick={() => setOpen(!open)}
        className=" space-x-1 py-3 px-4 hover:bg-[#4b4b4b] hover:text-white cursor-pointer"
      >
        <DownDubbleArrowIcon width={15} className={`inline ${open ? "rotate-180" : ""}`} />
        <p className="inline  font-bold text-xl space-x-1 ">
          <HandIcon width={26} className="inline"/>
          <span>Sell your CBD to Cannerald</span>
        </p>
      </div>
      <div className={`${open ? "h-auto" : "h-0"}`}>
        <div className={`px-4 pt-3 pb-5`}>
          <p>
            We try to buy your CBD after every harvest for the fairest price
            which we can offer. Here you can find a list with the price range
            and future targets.
          </p>
          <div className="complex-collaps-ans mb-4 mt-5 ">
            {data.map((el) => (
              <div
                onClick={() => setOpenChaild(el.title)}
                key={el.title}
                className={`${
                  openChild == el.title ? "border border-l-0 my-border-1" : ""
                } hover:text-white hover:bg-[#4b4b4b]  pl-8 py-3.5`}
              >
                <p
                  className={` color-2  hover:text-white cursor-pointer ${
                    openChild == el.title ? "pl-3" : ""
                  }`}
                >
                  <span className="font-bold text-xl">{el.title}</span>{" "}
                  <span>
                    <small>{el.subText} </small>
                  </span>
                </p>
                <p className={openChild == el.title ? "block pl-6" : "hidden"}>
                  {el.ans}
                </p>
              </div>
            ))}
          </div>
          <div>
            <p className="font-bold">
              We cannot guarantee a purchase or stable prices for your harvested
              CBD! These prices are just from our previous experience and can
              differ any time in the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComplexAccordian;
