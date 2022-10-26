import {AddressFormInput} from "./AddressFormInput";
import {FormHeading} from "./FormHeading";
import {FaTruckLoading} from "react-icons/fa";

export default function AddressForm() {
    return (
        <div className="w-full my-border-1 border-l-4 my-shadow-1">
            <FormHeading heading="Address" />
            <div className="card__body p-4">
                <button
                    className="p-2 rounded outline-none bg-[#4b4b4b] text-white hover:bg-gray-100 hover:text-zinc-700 hover:border hover:border-[#4b4b4b] focus:outline-none focus:ring  focus:ring-gray-300">
                   <FaTruckLoading className="inline-block mr-2" /> Add Different Address for Delivery
                </button>
                <div>
                    <h3 className="text-center font-bold text-2xl mb-2">Residency Address</h3>
                    <form action="#">
                        <div>
                            <span className="tracking-tighter">Address type:
                            <span
                                className="px-1 pb-[2px] rounded-full bg-black text-white  font-bold ml-2">Private(<span
                                className="text-[#bfc51d] cursor-pointer hover:underline hover:text-[#969b18]">change</span>)</span>
                        </span>
                        </div>
                        <hr className="mt-2 mb-2" />
                        <AddressFormInput />

                    </form>
                </div>
            </div>
        </div>
    )
}