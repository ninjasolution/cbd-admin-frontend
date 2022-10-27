import { DiscordIcon, FooterLogo } from "../../../icons";
import Header from "./../Header";
import avatar from "../../../images/avatar.webp";
import { Link, Outlet, NavLink, useSearchParams } from "react-router-dom";
import SvgSettingIcon from "../../../icons/SettingIcon";
import { useEffect } from "react";
import { MdHelp, MdSpaceDashboard, MdStorage } from "react-icons/md";
import { RiPlantFill, RiTeamFill } from "react-icons/ri";
import { GiPlanetCore, GiPlantsAndAnimals, GiWallet } from "react-icons/gi";
import { BsGraphUp } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { useSelector } from "react-redux";
import { categories, ownerAddress } from "../../../config";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { saveReferralCodeInLocalStorage } from "../../../services/AuthService";

function Layout({ open, setOpen }) {

  const user = useSelector(s => s.auth.user)
  const [searchParams] = useSearchParams();

  useEffect(() => {

    const referralCode =localStorage.getItem('CDB-marketplace-referral-cdoe')
    if(!referralCode || (referralCode && referralCode.length != 42)) {
      var address = searchParams.get("referralCode")
      if (!address) {
        address = ownerAddress
      }
      saveReferralCodeInLocalStorage(address)
    }
    
  }, [])
  const menus = [
    {
      title: "General",
      menuList: [
        {
          icon: <MdSpaceDashboard width={30} height={30} />,
          text: "Dashboard",
          link: "/",
        },
        {
          icon: <RiPlantFill width={30} height={30} />,
          text: "Plant sale",
          link: "/sale",
        },
        // {
        //   icon: <FiShoppingCart width={30} height={30} />,
        //   text: "Shop",
        //   link: "/shop",
        // },
        {
          icon: <GiWallet width={30} height={30} />,
          text: "Financial",
          link: "/financial",
        },
      ],
    },
    {
      title: "Status",
      menuList: [
        {
          icon: <GiPlantsAndAnimals width={30} height={30} />,
          text: "Your plants",
          link: "/plants",
        },
        // {
        //   icon: <MdStorage width={30} height={30} />,
        //   text: "Storage",
        //   link: "/",
        // },
        // {
        //   icon: <GiPlanetCore width={30} height={30} />,
        //   text: "Cultivation",
        //   link: "/",
        // },
        user && user?.roles &&
        user?.roles?.find(r => r.name == "admin") &&
        {
          icon: <HiLocationMarker width={30} height={30} />,
          text: "Contract",
          link: `/contract/nft-settings/${categories[0].collection}`,
        },
      ],
    },
    // {
    //   title: "Marketing",
    //   menuList: [
    //     {
    //       icon: <RiTeamFill width={30} height={30} />,
    //       text: "Team",
    //       link: "/",
    //     },
    //     {
    //       icon: <BsGraphUp width={30} height={30} />,
    //       text: "Marketing",
    //       link: "/",
    //     },
    //   ],
    // },
    // {
    //   title: "Help",
    //   menuList: [
    //     {
    //       icon: <MdHelp width={30} height={30} />,
    //       text: "Help",
    //       link: "/",
    //     },
    //   ],
    // },
  ];

  const socialData = [
    {
      icon: <AiFillFacebook height={30} />,
      link: "",
    },
    {
      icon: <AiFillTwitterSquare height={30} />,
      link: "",
    },
    {
      icon: <AiFillLinkedin height={30} />,
      link: "",
    },
    {
      icon: <AiFillInstagram height={30} />,
      link: "",
    },
    {
      icon: <BsTelegram height={30} />,
      link: "",
    },
    {
      icon: <AiFillYoutube height={30} />,
      link: "",
    }
  ];


  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1024) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    }

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    if (window.innerWidth <= 640) {
      setOpen(false);
    }
  };

  return (
    <>
      <Header width={12} height={12} open={open} setOpen={setOpen} />
      <aside
        className={` w-0 lg:w-[250px] absolute top-0 left-0 bottom-0 z-30 my-bg-black ${open ? "open-side" : "close-side"
          }`}
      >
        <div className="pt-[70px] h-full overflow-y-scroll">
          <div>
            {/* avatar */}
            <div className="avatar">
              <div className="pt-11 pb-2.5">
                <div className="w-[60px] mx-auto relative">
                  <img src={avatar} alt="" />
                  <div className="absolute right-0 bottom-0 border-2 main-bg border-white w-[11px] h-[11px] rounded-full"></div>
                </div>

                <h3 className="pt-4 color-1 text-center whitespace-nowrap">
                  Hello, {user?.nickName}
                </h3>
                <div className="text-center mt-2 ">
                  <Link
                    to="/settings/address"
                    className=" py-1 px-[14px]  inline-flex items-center color-2 my-border-1 border-2 rounded-[10px] space-x-1"
                    onClick={handleMenuClick}
                  >
                    <SvgSettingIcon width={12} height={12} />
                    <span>Settings</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* avatar */}

            <div>
              {menus.map((data, i) => (
                <div key={i} className=" pl-4">
                  <p className="color-1  py-3">{data.title}</p>
                  <div>
                    {data.menuList.filter(m => m).map((el, j) => (
                      <div
                        key={j}
                        className="py-3 border-l-4 border-transparent "
                      >
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? " flex items-center space-x-2 hover-color1 py-3 pl-3 text-black  bg-white"
                              : "flex items-center space-x-2 color-3 py-3 hover-color1"
                          }
                          to={el?.link}
                          onClick={handleMenuClick}
                          end
                        >
                          {el?.icon} <span>{el?.text}</span>
                        </NavLink>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* right side */}
      <section
        className={`absolute z-30 right-0 left-0 top-0 bottom-0
      mb-[42px] mt-[67px] overflow-y-scroll ml-0 lg:ml-[250px] ${open ? "open-side_con" : "close-side_con"
          }`}
      >
        <div className="content">
          <Outlet />
        </div>
      </section>
      <footer
        className={`hidden md:block absolute z-10 right-0 left-0  bottom-0 h-8 px-3 `}
      >
        <div className=" lg:ml-[250px] flex justify-between align-center">
          <Link to="/">
            <FooterLogo height={30} />
          </Link>
          <div className="flex space-x-2">
            {socialData.map((el, i) => (
              <a
                key={i}
                href={el.link}
                className="text-[#999] flex items-center hover:text-[#bfc51d] duration-200"
              >
                {el.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;
