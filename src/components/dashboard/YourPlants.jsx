import img1 from "./../../images/plant.jpeg";
import { Link } from "react-router-dom";
import {FaTools} from "react-icons/fa";

function YourPlants({title, amount}) {
  return (
    <div className="w-full md:w-6/12 xl:w-4/12 px-2.5 my-3">
    <div className="my-shadow-1 h-full border-l-4 my-border-1 ">
      <div className="flex p-3  justify-between">
        <h4 className="text-2xl"> {title} </h4>
        <div>
          <img src={img1} alt="" />
        </div>
      </div>
      <Link
        to="/"
        className="block text-center  px-4 text-3xl font-bold hover-bg-black-text-white pt-1 pb-2 ease duration-300"
      >
        { amount } 
      </Link>
      <div className="text-right px-1">
        <Link className="inline-block pr-2" to="/">
          {" "}
          <FaTools className="w-6 h-8 " />
        </Link>
      </div>
    </div>
    </div>
  );
}

export default YourPlants;
