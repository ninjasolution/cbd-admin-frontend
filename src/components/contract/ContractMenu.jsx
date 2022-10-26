import { NavLink, useLocation } from "react-router-dom";
import { FcSettings } from "react-icons/fc";
import {
  FaAddressCard,
  FaKey,
  FaUser
} from "react-icons/fa";
import { categories, commonCBDNFTAddr, seedPackCBDNFTAddr } from "../../config";

export default function ContractMenu() {

  const location = useLocation();
  const accountMenu = [
    {
      id: 1,
      title: categories[0].name,
      icon: <FaAddressCard />,
      link: `/contract/nft-settings/${commonCBDNFTAddr}`,
    },
    {
      id: 2,
      title: categories[1].name,
      icon: <FaKey />,
      link: `/contract/nft-settings/${seedPackCBDNFTAddr}`,
    },
    {
      id: 3,
      title: "Marketplace",
      icon: <FaUser />,
      link: "/contract/marketplace",
    },
    {
      id: 4,
      title: "Factory",
      icon: <FaUser />,
      link: "/contract/factory",
    },
   
  ];

  let activeClassName = "bg-[#bfc51d] text-white";
  return (
    <div className="w-full h-full xl:w-1/4 my-border-1 border-l-4 my-shadow-1 ">
      <div className="flex items-center justify-between p-[12px_12px_6px_12px] border-b-2 border-gray-200   ">
        <span className="text-xl font-thin">Contract settings</span>
        <span className=""> <FcSettings className="w-5 h-5" /> </span>
      </div>
      {/*className={`block p-[12px_12px_8px_12px] border-b-2 border-gray-200 cursor-pointer`}*/}
      <div className=" flex flex-col ">

        {accountMenu.map((item, index) => {
          const { id, title, icon, link } = item;
          return (

            <div className={`border-b p-3 ${item.link === location.pathname && activeClassName}`} key={id}>
              <NavLink 
                to={link}
              >
                {" "}

                <span className="inline-block mr-2">{icon}</span>
                <span className="">{title}</span>

              </NavLink>
            </div>

          );
        })}

      </div>
    </div>
  );
}
