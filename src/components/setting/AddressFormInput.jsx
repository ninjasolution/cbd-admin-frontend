import { useState } from "react"
import { useDispatch } from "react-redux";
import { updatePostAction } from "../../store/actions/PostActions";

export function AddressFormInput() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [street, setStreet] = useState("");
    const [houseNumber, setHouseNumber] = useState("");
    const [address, setAddress] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const dispatch = useDispatch();

    const saveHandler = () => {
        const data = {
            firstName,
            lastName,
            birthday,
            street,
            houseNumber,
            address,
            zipCode,
            city,
            country
        }
        dispatch(updatePostAction("/api/auth/updateAddress", data))
    }

    return (
        <>
            <div className="grid gap-6 mb-6 grid-cols-2">
                <div>
                    <label htmlFor="first_name" className="block mb-2   text-gray-900 ">First name</label>
                    <input type="text" id="first_name"
                        className="bg-gray-50 border border-[#b1b61a] text-gray-900  focus:outline-none focus:outline-none focus:ring  focus:ring-[#e4eb4185]  block w-full p-1"
                        defaultValue={firstName}
                        onChange={e => { setFirstName(e.target.value) }}
                        placeholder="John" required />
                </div>
                <div>
                    <label htmlFor="last_name"
                        className="block mb-2   text-gray-900 ">Last name</label>
                    <input type="text" id="last_name"
                        className="bg-gray-50 border border-[#b1b61a] text-gray-900   focus:outline-none focus:ring  focus:ring-[#e4eb4185]  block w-full p-1 "
                        defaultValue={lastName}
                        onChange={e => { setLastName(e.target.value) }}

                        placeholder="Doe" required />
                </div>
            </div>
            <div className="mb-6">
                <label htmlFor="date"
                    className="block mb-2   text-gray-900 ">Birthday</label>
                <input type="date" id="date"
                    defaultValue={birthday}
                    onChange={e => { setBirthday(e.target.value) }}
                    className="bg-gray-50 border border-[#b1b61a] text-gray-900   focus:outline-none focus:ring  focus:ring-[#e4eb4185]  block w-full p-1 "
                    required />
            </div>
            <div className="grid gap-6 mb-6 grid-cols-2">
                <div>
                    <label htmlFor="street"
                        className="block mb-2   text-gray-900 ">Street</label>
                    <input type="text" id="street"
                        defaultValue={street}
                        onChange={e => { setStreet(e.target.value) }}

                        className="bg-gray-50 border border-[#b1b61a] text-gray-900   focus:outline-none focus:ring  focus:ring-[#e4eb4185]  block w-full p-1 "
                        placeholder="" required />
                </div>
                <div>
                    <label htmlFor="house"
                        className="block mb-2   text-gray-900 ">
                        House number</label>
                    <input type="text" id="house"
                        defaultValue={houseNumber}
                        onChange={e => { setHouseNumber(e.target.value) }}

                        className="bg-gray-50 border border-[#b1b61a] text-gray-900   focus:outline-none focus:ring  focus:ring-[#e4eb4185]  block w-full p-1 "
                        placeholder="" required />
                </div>


            </div>

            <div className="mb-6">
                <label htmlFor="address"
                    className="block mb-2   text-gray-900 ">Address extras (Floor / Suite / ...)</label>
                <input type="text" id="address"
                    defaultValue={address}
                    onChange={e => { setAddress(e.target.value) }}

                    className="bg-gray-50 border border-[#b1b61a] text-gray-900   focus:outline-none focus:ring  focus:ring-[#e4eb4185]  block w-full p-1 "
                    placeholder="" required />
            </div>
            <div className="grid gap-6 mb-6 grid-cols-2">

                <div>
                    <label htmlFor="zip"
                        className="block mb-2   text-gray-900 ">
                        ZIP Code</label>
                    <input type="number" id="zip"
                        defaultValue={zipCode}
                        onChange={e => { setZipCode(e.target.value) }}

                        className="bg-gray-50 border border-[#b1b61a] text-gray-900   focus:outline-none focus:ring  focus:ring-[#e4eb4185]  block w-full p-1 "
                        placeholder="" required />
                </div>
                <div>
                    <label htmlFor="city"
                        className="block mb-2   text-gray-900 ">City</label>
                    <input type="text" id="city"
                        defaultValue={city}
                        onChange={e => { setCity(e.target.value) }}

                        className="bg-gray-50 border border-[#b1b61a] text-gray-900   focus:outline-none focus:ring  focus:ring-[#e4eb4185]  block w-full p-1 "
                        placeholder="" required />
                </div>
            </div>
            <div className="w-2/4">
                <label htmlFor="country"
                    className="block mb-2 text-gray-900 ">Country</label>
                <select id="country"
                    defaultValue={country}
                    onChange={e => { setCountry(e.target.value) }}

                    className="bg-gray-50 border border-[#b1b61a] text-gray-900  focus:outline-none focus:ring  focus:ring-[#e4eb4185]  block w-full p-1.5 "
                    required placeholder="Select Country">
                    <option defaultValue="Select Country">Select Country</option>
                    <option value="France">France</option>
                    <option value="Spain">Spain</option>
                    <option value="Italy">Italy</option>
                    <option value="Poland">Poland</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Australia">Australia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="China">China</option>
                    <option value="Japan">Japan</option>
                    <option value="South Korea">South Korea</option>
                </select>

            </div>
            <div className="flex justify-end mt-6">
                <button onClick={saveHandler}
                    className="p-2 rounded border-none outline-none bg-[#b1b61a] text-white hover:bg-[#969b18] hover:text-white hover:border hover:border-[#969b18] focus:outline-none focus:ring  focus:ring-[#969b18]">
                    Confirm address changes
                </button>
            </div>
        </>
    )
}