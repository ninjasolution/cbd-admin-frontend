import { NavLink } from "react-router-dom";
import { FcSettings } from "react-icons/fc";
import {
  FaAddressCard,
  FaBell,
  FaExchangeAlt,
  FaFile,
  FaGlobe,
  FaKey,
  FaLaptop, FaList,
  FaMobileAlt,
  FaUser
} from "react-icons/fa";
import { useLocation } from "react-router"

export default function SettingMenu() {

  const accountMenu = [
    {
      id: 1,
      title: "Address",
      icon: <FaAddressCard />,
      link: "/settings/address",
    },
    {
      id: 2,
      title: "Password & Account",
      icon: <FaKey />,
      link: "/settings/account",
    },
    {
      id: 3,
      title: "Profile",
      icon: <FaUser />,
      link: "/settings/public-profile",
    },
    {
      id: 4,
      title: "Market",
      icon: <FaExchangeAlt />,
      link: "/settings/market",
    },
    {
      id: 5,
      title: "Verification",
      icon: <FaFile />,
      link: "/settings/verification",
    },
    {
      id: 6,
      title: "Language",
      icon: <FaGlobe />,
      link: "/settings/language",
    },
    {
      id: 7,
      title: "Two-Factor Authentication",
      icon: <FaMobileAlt />,
      link: "/settings/2fa",
    },
    {
      id: 8,
      title: "Device",
      icon: <FaLaptop />,
      link: "/settings/devices",
    },
    {
      id: 9,
      title: "Notification",
      icon: <FaBell />,
      link: "/settings/notifications",
    },
    {
      id: 10,
      title: "Terms",
      icon: <FaList />,
      link: "/settings/terms",
    },
  ];
  const location = useLocation();


  let activeClassName = "bg-[#bfc51d] text-white";
  return (
    <div className="w-full h-full xl:w-1/4 my-border-1 border-l-4 my-shadow-1 ">
      <div className="flex items-center justify-between p-[12px_12px_6px_12px] border-b-2 border-gray-200   ">
        <span className="text-xl font-thin">Personal settings</span>
        <span className=""> <FcSettings className="w-5 h-5" /> </span>
      </div>
     {/*className={`block p-[12px_12px_8px_12px] border-b-2 border-gray-200 cursor-pointer`}*/}
      <div className={`flex flex-col`}>

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
