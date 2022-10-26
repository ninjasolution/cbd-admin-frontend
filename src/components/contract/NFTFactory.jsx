import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FormHeading } from "./FormHeading";
import Factory from "../../abis/CBDNFTFactory.json"
import { formatError } from "../../services/AuthService";
import { CBDNFTFactoryAddr } from "../../config";

export default function NFTFactory() {

    const web3 = useSelector(s => s.web3.web3);
    const [contract, setContract] = useState()
    const [count, setCount] = useState()
    const [collection, setCollection] = useState()
    const address = useSelector(s => s.web3.address)

    useEffect(() => {
        initialLoad();
    }, [web3])

    const initialLoad = async () => {
        if (!web3) return;
        const _contract = new web3.eth.Contract(Factory.abi, CBDNFTFactoryAddr);
        const _count = await _contract.methods.getOwnCollections().call();
        setCount(_count)
        setContract(_contract)
    }

    
    const importCollectionHandler = async () => {
        if (!enableContract()) return;
        await contract.methods.importCollection(collection).send({ from: address });
        initialLoad()
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
            <FormHeading heading={"CBD NFT Factory"} />
            <hr />
            <div className="card__body-b p-4">

                <div className="flex flex-col space-y-2">
                    <label htmlFor="recipient" className="font-bold text-md">Collection Xount: {count?.length}</label>
                    <input
                        type="text"
                        id="recipient"
                        onChange={e => setCollection(e.target.value)}
                        className="border border-[#bfc51d] p-1 focus:outline-none focus:ring  focus:ring-[#e4eb4185]"
                        placeholder="0x45FC64417AA1D30933dA7f93C156B502aee4c320" />
                </div>
                <div className=" mt-4">
                    <button
                        onClick={importCollectionHandler}
                        className="bg-[#f05050] hover:bg-[#f90000] p-[0.3rem_1rem] rounded-[4px] text-white focus:ring focus:ring-red-300 ">
                        Import Collection
                    </button>
                </div>
            </div>
        </div>
    </div>)
}