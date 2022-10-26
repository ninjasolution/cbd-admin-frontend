import React from "react";
import { Link } from "react-router-dom";

function Form() {
  return (
    <form>
      <div className="mt-5 mb-3">
        <span className="mr-3"> Address type: </span>
        <span className="bg-[#323232] text-white  rounded-full px-2 pb-0.5 font-semibold">
          Private&#40;
          <span className="color-2">
            <Link to="/">change</Link>
          </span>
          &#41;
        </span>
      </div>
      <hr className="mb-4" />
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0  sm:space-x-5 mb-4">
        <div className="w-full sm:w-1/2">
          <label className="block">
            <span className="block text-base  text-slate-700 font-base">
              First name
            </span>
            <input className="my-border-1 w-full border focus:outline-none px-4 py-2  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500  text-base" />
          </label>
        </div>
        <div className="w-full sm:w-1/2">
          <label className="block">
            <span className="block text-base  text-slate-700 font-base">
              Last name
            </span>
            <input className="my-border-1 border w-full focus:outline-none px-4 py-2  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500  text-base" />
          </label>
        </div>
      </div>

      <div className="mb-4">
        <div className="w-full ">
          <label className="block">
            <span className="block text-base  text-slate-700 font-base">
              Birthday
            </span>
            <input
              type="date"
              className="my-border-1 w-full border focus:outline-none px-4 py-2  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500  text-base"
            />
          </label>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-5 space-y-4 sm:space-y-0 mb-4">
        <div className="w-full sm:w-8/12	">
          <label className="block">
            <span className="block text-base  text-slate-700 font-base">
              Street
            </span>
            <input className="my-border-1 w-full border focus:outline-none px-4 py-2  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500  text-base" />
          </label>
        </div>
        <div className="w-full sm:w-4/12	">
          <label className="block">
            <span className="block text-base  text-slate-700 font-base">
              House number
            </span>
            <input className="my-border-1 border w-full focus:outline-none px-4 py-2  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500  text-base" />
          </label>
        </div>
      </div>

      <div className="mb-4">
        <div className="w-full	">
          <label className="block">
            <span className="block text-base  text-slate-700 font-base">
              Address extras (Floor / Suite / ...)
            </span>
            <input className="my-border-1 border w-full focus:outline-none px-4 py-2  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500  text-base" />
          </label>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row  space-y-4 sm:space-y-0 sm:space-x-5 mb-4">
        <div className="w-full sm:w-4/12	">
          <label className="block">
            <span className="block text-base  text-slate-700 font-base">
              ZIP Code
            </span>
            <input className="my-border-1 border w-full focus:outline-none px-4 py-2  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500  text-base" />
          </label>
        </div>
        <div className="w-full sm:w-8/12	">
          <label className="block">
            <span className="block text-base  text-slate-700 font-base">
              City
            </span>
            <input className="my-border-1 w-full border focus:outline-none px-4 py-2  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500  text-base" />
          </label>
        </div>
      </div>

      <div className="">
        <div className="w-full">
          <label className="block">
            <span className="block text-base  text-slate-700 font-base">
              ZIP Code
            </span>
            <select
              name="cars"
              id="cars"
              form="carform"
              className="my-border-1 w-full sm:w-1/2 border focus:outline-none px-4 py-2  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500  text-base"
            >
              <option defaultValue="volvo">Volvo</option>
              <option defaultValue="saab">Saab</option>
              <option defaultValue="opel">Opel</option>
              <option defaultValue="audi">Audi</option>
            </select>
          </label>
        </div>
      </div>
    </form>
  );
}

export default Form;
