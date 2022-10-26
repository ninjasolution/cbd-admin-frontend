import {FormHeading} from "./FormHeading";
import googleAuthenticator from "../../images/google_authenticator_icon.png";

export const secureTittle = [
    {
        id: 1 ,
        tittle : 'Secure login'
    }, {
        id: 2 ,
        tittle : 'Secure payout'
    }, {
        id: 3 ,
        tittle : ' Secure payment'
    }, {
        id: 4 ,
        tittle : 'Secure email change'
    },
]

export function TwoFactorAuthentication() {
    return (
        <div className="w-full h-full my-border-1 my-shadow-1 border-l-4">
            <FormHeading heading="Two Factor Authentication" />
            <div className="p-4">
              <div className="flex flex-col items-center xl:flex-row justify-center ">
                <div className=" ">
                    <img className="xl:border-r md:border-b w-full h-full object-cover" src={googleAuthenticator} alt="google authenticator" />
                </div>
                 <div className="p-2 text-sm md:text-xl" >
                     <p className="pb-3 ">It is strongly recommended to use two-factor authentication. The following points are additionally secured by it:</p>
                      <div className="flex flex-wrap">
                          {
                             secureTittle.map((item) => {
                                 return (
                                    <div className="w-4/3 mr-2">
                                        <span key={item.id} >❌ {item.tittle}</span>
                                    </div>
                                 )
                             }  )
                          }
                      </div>
                 </div >                            
              </div>
                <hr className="my-2"/>
                <div className="text-right mt-4">
                    <button type="submit"
                            className="p-[10px_20px] rounded border-none outline-none bg-[#b1b61a] text-black text-sm  hover:bg-[#969b18] hover:text-white hover:border hover:border-[#969b18] focus:outline-none focus:ring  focus:ring-[#969b18]">
                        Enable Google Authenticator
                    </button>
                </div>
            </div>
        </div>
    )
}