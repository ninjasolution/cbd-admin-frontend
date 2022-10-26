import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FormHeading } from "./FormHeading";
import Marketplace from "../../abis/CBDNFTMarketplace.json"
import Referral from "../../abis/Referral.json"
import { formatError } from "../../services/AuthService";
import { backendLink, categories, ReferralAddr, categoriesByAddress, CBDNFTMarketplaceAddr } from "../../config";
import axios from "axios";

export default function MarketplaceSettings() {

    const web3 = useSelector(s => s.web3.web3);
    const [contract, setContract] = useState()

    const [newPayToken, setNewPayToken] = useState()

    const [USDTAddr, setUSDTAddr] = useState()
    const [newUSDTAddr, setNewUSDTAddr] = useState()

    const [CBDTpriceForPaytoken, setCBDTPriceForPaytoken] = useState()
    const [newpriceForPaytoken, setNewCBDTPriceForPaytoken] = useState()

    const [CBDTAddr, setCBDTAddr] = useState();
    const [newCBDTAddr, setNewCBDTAddr] = useState();

    const [level, setLevel] = useState(0);
    const [percent, setPercent] = useState(0);

    const [crntClaimLevel, setCrntClaimLevel] = useState(0);
    const [claimLevel, setClaimLevel] = useState(0);
    const [amount, setAmount] = useState(0);
    const [collection, setCollection] = useState(0);
    const [mlmPercents, setMlmPercents] = useState();
    const [claimAmounts, setClaimAmounts] = useState();
    const [referralContract, setReferralContract] = useState();

    const address = useSelector(s => s.web3.address)

    useEffect(() => {
        initialLoad();
    }, [web3])

    const initialLoad = async () => {
        axios.get(`${backendLink}/api/nfts/mlm-percents`)
            .then(res => {
                setMlmPercents(res.data.data)
            })
        axios.get(`${backendLink}/api/nfts/claim-amounts`)
            .then(res => {
                console.log(res.data)
                setClaimAmounts(res.data.data)
            })
        if (!web3) return;
        const _contract = new web3.eth.Contract(Marketplace.abi, CBDNFTMarketplaceAddr);
        const _referralContract = new web3.eth.Contract(Referral.abi, ReferralAddr);
        const _CBDT = await _contract.methods.CBDT().call();
        const _price = await _contract.methods.CBDTPriceForUSDT().call();
        const _usdt = await _contract.methods.USDT().call();
        const _crntCliamLevel = await _contract.methods.claimCount().call();
        setReferralContract(_referralContract)
        setCrntClaimLevel(_crntCliamLevel)
        setCBDTAddr(_CBDT)
        setCBDTPriceForPaytoken(_price)
        setUSDTAddr(_usdt);
        setContract(_contract)

    }

    const setCBDTHandler = async () => {
        if (!enableContract()) return;
        await contract.methods.setCBDT(newCBDTAddr).send({ from: address });
        initialLoad();
    }

    const setPaytokenHandler = async () => {
        if (!enableContract()) return;
        await contract.methods.setUSDT(newUSDTAddr).send({ from: address });
        initialLoad();
    }

    const setPriceHandler = async () => {
        if (!enableContract()) return;
        await contract.methods.setCBDTPriceForUSDT(newpriceForPaytoken).send({ from: address });
        initialLoad();
    }

    const addPaytokenHandler = async () => {
        if (!enableContract()) return;
        await contract.methods.addPayableToken(newPayToken).send({ from: address });
        initialLoad();
    }

    const setPercentHanlder = async () => {
        if (!enableContract()) return;
        await referralContract.methods.setMlmLevelPercent(level, percent).send({ from: address });
        initialLoad();
    }

    const setClaimAmountHanlder = async () => {
        if (!enableContract()) return;
        await contract.methods.setClaimAmount(claimLevel, collection, web3.utils.toWei(amount).toString()).send({ from: address });
        initialLoad();
    }

    const increaseclaimLevelHandler = async () => {
        if (!enableContract()) return;
        await contract.methods.incrementClaimCount().send({ from: address });
        initialLoad();
    }

    const decreaseclaimLevelHandler = async () => {
        if (!enableContract()) return;
        await contract.methods.decrementClaimCount().send({ from: address });
        initialLoad();
    }

    const enableContract = () => {
        if (!web3) {
            formatError("Wallet")
            return false;
        } else return true;
    }


    return (<div>
        {/*Email Update*/}
        <div className="w-full mb-5 my-border-1 border-l-4 my-shadow-1">
            <FormHeading heading={"Marketplace"} />
            <hr />
            <div className="card__body-b p-4">
                <div className="flex flex-col space-y-2">
                    <label htmlFor="baseURI" className="font-bold text-md">CBDT Address: {CBDTAddr}</label>
                    <input
                        type="text"
                        id="baseURI"
                        onChange={e => setNewCBDTAddr(e.target.value)}

                        className="border border-[#bfc51d] p-1 focus:outline-none focus:ring  focus:ring-[#e4eb4185]"
                        placeholder="ipfs://" />
                </div>
                <div className=" mt-4">
                    <button
                        onClick={setCBDTHandler}
                        className="bg-[#f05050] hover:bg-[#f90000] p-[0.3rem_1rem] rounded-[4px] text-white focus:ring focus:ring-red-300 ">
                        Reset CDBT
                    </button>
                </div>

                <div className="flex flex-col space-y-2 mt-5">
                    <label htmlFor="paytoken" className="font-bold text-md">Pay token Address: {USDTAddr}</label>
                    <input
                        type="text"
                        id="paytoken"
                        onChange={e => setNewUSDTAddr(e.target.value)}

                        className="border border-[#bfc51d] p-1 focus:outline-none focus:ring  focus:ring-[#e4eb4185]"
                        placeholder="0x45FC64417AA1D30933dA7f93C156B502aee4c320" />
                </div>
                <div className=" mt-4">
                    <button
                        onClick={setPaytokenHandler}
                        className="bg-[#f05050] hover:bg-[#f90000] p-[0.3rem_1rem] rounded-[4px] text-white focus:ring focus:ring-red-300 ">
                        Reset Paytoken
                    </button>
                </div>

                <div className="flex flex-col space-y-2 mt-5">
                    <label htmlFor="price" className="font-bold text-md">CBDT Price For Pay token: {CBDTpriceForPaytoken}</label>
                    <input
                        type="text"
                        id="price"
                        onChange={e => setNewCBDTPriceForPaytoken(e.target.value)}

                        className="border border-[#bfc51d] p-1 focus:outline-none focus:ring  focus:ring-[#e4eb4185]"
                        placeholder="100" />
                </div>
                <div className=" mt-4">
                    <button
                        onClick={setPriceHandler}
                        className="bg-[#f05050] hover:bg-[#f90000] p-[0.3rem_1rem] rounded-[4px] text-white focus:ring focus:ring-red-300 ">
                        Reset Price
                    </button>
                </div>

                <div className="flex flex-col space-y-2 mt-5">
                    <label htmlFor="recipient" className="font-bold text-md">Payable token Address</label>
                    <input
                        type="text"
                        id="recipient"
                        onChange={e => setNewPayToken(e.target.value)}

                        className="border border-[#bfc51d] p-1 focus:outline-none focus:ring  focus:ring-[#e4eb4185]"
                        placeholder="0x45FC64417AA1D30933dA7f93C156B502aee4c320" />
                </div>
                <div className=" mt-4">
                    <button
                        onClick={addPaytokenHandler}
                        className="bg-[#f05050] hover:bg-[#f90000] p-[0.3rem_1rem] rounded-[4px] text-white focus:ring focus:ring-red-300 ">
                        Add Payable Token
                    </button>
                </div>
            </div>

            <hr />
            <div className="card__body-b p-4">
                <div className="table__body p-[1rem]">
                    {
                        mlmPercents ?
                            <div className="overflow-auto max-h-96">
                                <table className="w-full xl:w-full">
                                    <thead>
                                        <tr className="text-left">
                                            <th className="px-4 py-2 border-r-2">Level</th>
                                            <th className="px-4 py-2 border-r-2">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Object.keys(mlmPercents).map((level, id) => (
                                                <tr key={id} className="bg-gray-100">
                                                    <td className="border px-4 py-2 ">{level}</td>
                                                    <td className="border px-4 py-2 ">{mlmPercents[level] / 100000} %</td>
                                                </tr>))
                                        }


                                    </tbody>
                                </table>
                            </div>
                            :
                            <p className="bg-[#bfc51d] text-white border border-[#bfc51d] p-[0.75rem_1.25rem]">
                                Empty
                            </p>
                    }
                </div>
                <div className="grid gap-6 mb-6 grid-cols-2">

                    <div>
                        <label htmlFor="level"
                            className="block mb-2   text-gray-900 ">
                            MLM level</label>
                        <input type="number" id="level"
                            defaultValue={level}
                            onChange={e => setLevel(e.target.value)}
                            className="bg-gray-50 border border-[#b1b61a] text-gray-900   focus:outline-none focus:ring  focus:ring-[#e4eb4185]  block w-full p-1 "
                            placeholder="" required />
                    </div>
                    <div>
                        <label htmlFor="percent"
                            className="block mb-2   text-gray-900 ">Percent (1000 = 1%)</label>
                        <input type="text" id="percent"
                            defaultValue={percent}
                            onChange={e => setPercent(e.target.value)}
                            className="bg-gray-50 border border-[#b1b61a] text-gray-900   focus:outline-none focus:ring  focus:ring-[#e4eb4185]  block w-full p-1 "
                            placeholder="" required />
                    </div>
                </div>
                <div className=" mt-4">
                    <button
                        onClick={setPercentHanlder}
                        className="bg-[#f05050] hover:bg-[#f90000] p-[0.3rem_1rem] rounded-[4px] text-white focus:ring focus:ring-red-300 ">
                        SET percent
                    </button>
                </div>
            </div>

            <hr />
            <div className="card__body-b p-4">

                <div className="table__body p-[1rem]">
                    {
                        claimAmounts ?
                            <div className="overflow-auto max-h-96">
                                <table className="w-full xl:w-full">
                                    <thead>
                                        <tr className="text-left">
                                            <th className="px-4 py-2 border-r-2">Level</th>
                                            <th className="px-4 py-2 border-r-2">Amount</th>
                                            <th className="px-4 py-2 border-r-2">Collection</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Object.keys(claimAmounts).map((collection) =>
                                                Object.keys(claimAmounts[collection]).map((level, id) => (
                                                    <tr key={`${id}-${collection}`} className="bg-gray-100">
                                                        <td className="border px-4 py-2 ">{level}</td>
                                                        <td className="border px-4 py-2 ">{claimAmounts[collection][level]}</td>
                                                        <td className="border px-4 py-2 ">{categoriesByAddress[collection].title}</td>
                                                    </tr>

                                                ))
                                            )
                                        }

                                    </tbody>
                                </table>
                            </div>
                            :
                            <p className="bg-[#bfc51d] text-white border border-[#bfc51d] p-[0.75rem_1.25rem]">
                                Empty
                            </p>
                    }
                </div>
                <div className="grid gap-6 mb-6 grid-cols-2">
                    <div>
                        <label htmlFor="level"
                            className="block mb-2   text-gray-900 ">
                            Claim Level</label>
                        <input type="number" id="level"
                            onChange={e => setClaimLevel(e.target.value)}
                            defaultValue={claimLevel}
                            className="bg-gray-50 border border-[#b1b61a] text-gray-900   focus:outline-none focus:ring  focus:ring-[#e4eb4185]  block w-full p-1 "
                            placeholder="" required />
                    </div>
                    <div className="w-2/4">
                        <label htmlFor="collection"
                            className="block mb-2 text-gray-900 ">Collection</label>
                        <select id="collection"
                            onChange={e => { setCollection(e.target.value) }}
                            className="bg-gray-50 border border-[#b1b61a] text-gray-900  focus:outline-none focus:ring  focus:ring-[#e4eb4185]  block w-full p-1.5 "
                            required placeholder="Select Collection">
                            <option defaultValue="Select Collection">Select Collection</option>
                            {
                                categories.map(c => (
                                    <option key={c.collection} value={c.collection} onSelect={e => setCollection(e.collection)}>{c.name}</option>
                                ))
                            }
                        </select>

                    </div>
                    <div>
                        <label htmlFor="amount"
                            className="block mb-2 text-gray-900 ">Amount</label>
                        <input type="text" id="percent"
                            defaultValue={amount}
                            onChange={e => setAmount(e.target.value)}
                            className="bg-gray-50 border border-[#b1b61a] text-gray-900   focus:outline-none focus:ring  focus:ring-[#e4eb4185]  block w-full p-1 "
                            placeholder="" required />
                    </div>
                </div>
                <div className=" mt-4">
                    <button
                        onClick={setClaimAmountHanlder}
                        className="bg-[#f05050] hover:bg-[#f90000] p-[0.3rem_1rem] rounded-[4px] text-white focus:ring focus:ring-red-300 ">
                        SET Amount
                    </button>
                </div>
            </div>

            <hr />

            <div className="card__body-b p-4">
                <div>
                    <label htmlFor="level" className="block mb-2   text-gray-900 ">
                        Current Claim Level: {crntClaimLevel}
                    </label>

                </div>


                <div className=" mt-4">
                    <button
                        onClick={increaseclaimLevelHandler}
                        className="bg-[#f05050] hover:bg-[#f90000] p-[0.3rem_1rem] rounded-[4px] text-white focus:ring focus:ring-red-300 ">
                        Increase Claim Level
                    </button>
                </div>
                <div className=" mt-4">
                    <button
                        onClick={decreaseclaimLevelHandler}
                        className="bg-[#f05050] hover:bg-[#f90000] p-[0.3rem_1rem] rounded-[4px] text-white focus:ring focus:ring-red-300 ">
                        Decrease Claim Level
                    </button>
                </div>
            </div>

        </div>
    </div>)
}