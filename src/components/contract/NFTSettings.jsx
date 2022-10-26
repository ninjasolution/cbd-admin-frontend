import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { FormHeading } from "./FormHeading";
import NFT from "../../abis/CBDNFT.json"
import { formatError } from "../../services/AuthService";

export default function NFTSettings() {

    const [name, setName] = useState();
    const params = useParams();
    const web3 = useSelector(s => s.web3.web3);
    const [contract, setContract] = useState()
    const [payToken, setPaytoken] = useState()
    const [recipient, setRecipient] = useState()
    const [newRecipient, setNewRecipient] = useState()
    const [newPayToken, setNewPayToken] = useState()
    const [priceForPaytoken, setPriceForPaytoken] = useState()
    const [newpriceForPaytoken, setNewPriceForPaytoken] = useState()
    const [baseURI, setBaseURI] = useState();
    const [newBaseURI, setNewBaseURI] = useState();
    const address = useSelector(s => s.web3.address)

    useEffect(() => {
        initialLoad();
    }, [web3])

    const initialLoad = async () => {
        if (!web3) return;
        const _contract = new web3.eth.Contract(NFT.abi, params.collection);
        const _baseURI = await _contract.methods.baseURI().call();
        const _paytoken = await _contract.methods.USDT().call();
        const _price = await _contract.methods.priceForUSDT().call();
        const _name = await _contract.methods.name().call();
        setName(_name)
        setPriceForPaytoken(_price)
        setPaytoken(_paytoken)
        setBaseURI(_baseURI);
        setContract(_contract)
    }

    const setBaseURIHandler = async () => {
        if (!enableContract()) return;
        await contract.methods.setBaseURI(newBaseURI).send({ from: address });
    }

    const setPaytokenHandler = async () => {
        if (!enableContract()) return;
        await contract.methods.setUSDT(newPayToken).send({ from: address });
    }

    const setPriceHandler = async () => {
        if (!enableContract()) return;
        await contract.methods.setPriceForUSDT(newpriceForPaytoken).send({ from: address });
    }

    const setRecipientHandler = async () => {
        if (!enableContract()) return;
        await contract.methods.setFeeRecipient(newRecipient).send({ from: address });
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
            <FormHeading heading={name} />
            <hr />
            <div className="card__body-b p-4">
                <div className="flex flex-col space-y-2">
                    <label htmlFor="baseURI" className="font-bold text-md">BASE URI: {baseURI}</label>
                    <input
                        type="text"
                        id="baseURI"
                        onChange={e => setNewBaseURI(e.target.value)}

                        className="border border-[#bfc51d] p-1 focus:outline-none focus:ring  focus:ring-[#e4eb4185]"
                        placeholder="ipfs://" />
                </div>
                <div className=" mt-4">
                    <button
                        onClick={setBaseURIHandler}
                        className="bg-[#f05050] hover:bg-[#f90000] p-[0.3rem_1rem] rounded-[4px] text-white focus:ring focus:ring-red-300 ">
                        Reset Base URI
                    </button>
                </div>

                <div className="flex flex-col space-y-2">
                    <label htmlFor="paytoken" className="font-bold text-md">Pay token Address: {payToken}</label>
                    <input
                        type="text"
                        id="paytoken"
                        onChange={e => setNewPayToken(e.target.value)}

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

                <div className="flex flex-col space-y-2">
                    <label htmlFor="price" className="font-bold text-md">Price For Pay token: {priceForPaytoken}</label>
                    <input
                        type="text"
                        id="price"
                        onChange={e => setNewPriceForPaytoken(e.target.value)}

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

                <div className="flex flex-col space-y-2">
                    <label htmlFor="recipient" className="font-bold text-md">Recipient Address: {recipient}</label>
                    <input
                        type="text"
                        id="recipient"
                        onChange={e => setNewRecipient(e.target.value)}

                        className="border border-[#bfc51d] p-1 focus:outline-none focus:ring  focus:ring-[#e4eb4185]"
                        placeholder="0x45FC64417AA1D30933dA7f93C156B502aee4c320" />
                </div>
                <div className=" mt-4">
                    <button
                        onClick={setRecipientHandler}
                        className="bg-[#f05050] hover:bg-[#f90000] p-[0.3rem_1rem] rounded-[4px] text-white focus:ring focus:ring-red-300 ">
                        Reset recipient
                    </button>
                </div>
            </div>
        </div>
    </div>)
}