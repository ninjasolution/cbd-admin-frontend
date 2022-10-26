import { Link } from "react-router-dom";

function BalanceCBD({title, currency, balance, img, financial}) {
    return (
        <div className={`${financial ? 'w-full md:w-5/12 pb-7 md:pb-0' : 'w-full md:w-6/12 xl:w-4/12 my-3'}  px-2.5`}>
            <div className="my-shadow-1 border-l-4 my-border-1 h-full">
                <div className="flex p-3  justify-between">
                    <h5 className="text-2xl">{title} </h5>
                    <div>
                        <img src={img} alt="euro icon" />
                    </div>
                </div>
                <Link
                    to="/"
                    className="block text-center ease duration-300 pt-6 pb-[1.56rem] px-4 text-3xl font-bold hover-bg-black-text-white font-[700] text-[1.6em]"
                >
                    {balance} {currency}
                </Link>
            </div>
        </div>
    );
}

export default BalanceCBD;
