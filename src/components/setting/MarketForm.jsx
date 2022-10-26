import {FormHeading} from "./FormHeading";

export function MarketForm() {
    return (
        <div className="w-full h-full my-border-1 my-shadow-1 border-l-4">
            <FormHeading heading="Market" />
            <div className="flex flex-col p-4">
                {/*Bitcoin Address*/}
                <div className=" flex flex-col space-y-2">
                    <div className="border p-2 flex  items-center">
                        <label htmlFor="bitcoin"
                               className="inline-flex relative items-center cursor-pointer">
                            <input type="checkbox" defaultValue="" id="bitcoin"
                                   className="sr-only peer" />
                            <div
                                className="w-9 h-5 bg-white border peer-focus:outline-none  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all after:duration-300 peer-checked:bg-[#bfc51d]"></div>
                            <span className="ml-3 text-sm ">Receive Bitcoin for Market Offers</span>
                        </label>
                    </div>
                    <form action="#" className="">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="bitcoinAddress" className="">Please enter your Bitcoin-Address</label>
                            <input
                                type="text"
                                id="bitcoinAddress"
                                className="border border-[#bfc51d] p-1 focus:outline-none focus:ring  focus:ring-[#e4eb4185]"
                            />
                            <hr className="border-1 border-dotted " />
                            <div className="text-right py-2">
                                <button type="submit"
                                        className="p-[4px_10px] rounded border-none outline-none bg-[#b1b61a] text-black hover:bg-[#969b18] hover:text-white hover:border hover:border-[#969b18] focus:outline-none focus:ring  focus:ring-[#969b18]">
                                    Save
                                </button>
                            </div>
                        </div>
                        <hr />
                    </form>

                    <div className="">
                        <div className="border p-2 flex flex-col">
                            <label htmlFor="bankTransfer"
                                   className="inline-flex relative items-center ">
                                <input type="checkbox" defaultValue="" id="bankTransfer"
                                       className="sr-only peer" disabled />
                                <div
                                    className="w-9 h-5 bg-white border peer-focus:outline-none  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all after:duration-300 peer-checked:bg-[#bfc51d] cursor-not-allowed"></div>
                                <span className="ml-3 text-sm ">Receive Money via BankTransfer for Market Offers</span>
                            </label>
                            <p className="text-[#ff902b]">You need verification level 2 to receive money for offers via
                                                          bank
                                                          transfer.</p>

                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}