import {FormHeading} from "./FormHeading";

export function LanguageForm() {
    return (
        <div className="w-full h-full my-border-1 my-shadow-1 border-l-4">
            <FormHeading heading="Change display language" />
            <div className="p-4">

                <form>
                    <div className="flex flex-col">
                        <label htmlFor="language" className="block   text-gray-900 ">Set language:</label>
                        <select id="language" name="language"
                                className="bg-gray-50 border border-[#b1b61a] text-gray-900  focus:outline-none focus:ring  focus:ring-[#e4eb4185]  block w-full p-1.5 "
                                required>
                            <option>English</option>
                            <option>German</option>
                        </select>
                    </div>
                    <div className="text-right mt-3">
                        <button type="submit"
                                className="px-2 py-1 rounded border-none outline-none bg-[#b1b61a] text-white hover:bg-[#969b18] hover:text-white hover:border hover:border-[#969b18] focus:outline-none focus:ring  focus:ring-[#969b18]">
                            Save changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
