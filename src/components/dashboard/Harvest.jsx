import { Link } from "react-router-dom";
import {FaBoxes, FaSeedling, FaSlidersH} from "react-icons/fa";

function Harvest({
  title,
  currency,
  balance,
  financial,
}) {
  return (
    <div
      className={`${
        financial
          ? "w-full md:w-5/12 pb-7 md:pb-0"
          : "w-full md:w-6/12 xl:w-4/12 my-3"
      }  px-2.5`}
    >
      <div className="my-shadow-1 h-full border-l-4 my-border-1 ">
        <div className="flex p-3  justify-between">
          <h5 className="text-2xl"> {title}</h5>
          <div>
            <FaBoxes className="w-6 h-8 " />
          </div>
        </div>
        <Link
          to="/"
          className="block text-center ease duration-300 px-4 text-3xl font-bold hover-bg-black-text-white pt-1 pb-2"
        >
          {balance} {currency}
        </Link>
        <div className="text-right px-1">
          <Link className="inline-flex gap-2 pr-2" to="/">
            {" "}
            <FaSeedling className="w-6 h-8 "/>
            <FaSlidersH className="w-6 h-8"/>
            
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Harvest;
