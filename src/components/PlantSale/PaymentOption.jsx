import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { categories, ownerAddress } from "../../config";
import { BanckIcon, Minuse, MoneyIcon, PlushIcon } from "../../icons";
import NFT from "../../abis/CBDNFT.json"
import { createPostAction } from "../../store/actions/PostActions";
import { formatError } from "../../services/AuthService";


function PaymentOption() {

  const web3 = useSelector(s => s.web3.web3);
  const usdtContract = useSelector(s => s.contract.usdtContract);
  const [ contract, setContract ] = useState()
  const [ approvedAmount, setApprovedAmount ] = useState(0);
  const address = useSelector(s => s.web3.address)
  const [collection, setcollection] = useState(() => {
    return categories[0];
  });
  const [ count, setCount ] = useState(0);
  const [ isAgree, setIsAgree ] = useState(false);
  const [ balance, setBalance ] = useState(0);
  const dispatch = useDispatch()

  const totalPrice = useMemo(() => {
    return collection.mainPrice * count;
  }, [collection.mainPrice, count])

  const canBuy = useMemo(() => {
    return totalPrice <= approvedAmount;
  }, [approvedAmount, totalPrice])

  const buyHandler = async () => {
    if(!isAgree)  return;
    if(!contract) {
      return formatError("Please wallet conenct")
    }
    const tx = await contract.methods.batchMint(address, count, ownerAddress).send({from: address})
    const data = {type: "Mint", amount: count, currency: collection.name, hash: tx.blockHash}
    dispatch(createPostAction("/api/transaction", data))
    initialLoad();

  }

  const approveHandler = async () => {
    await usdtContract.methods.approve(collection.collection, web3.utils.toWei(totalPrice.toString()) ).send({from: address})
    setApprovedAmount(totalPrice)
  }

  useEffect(() => {
    initialLoad();
  }, [collection, web3, usdtContract, address])

  const initialLoad = async () => {
    if(!web3 || !usdtContract) return;
      const _contract = new web3.eth.Contract(NFT.abi, collection.collection);
      const _approvedAmount = await usdtContract.methods.allowance(address, collection.collection).call();
      const _balance = await usdtContract.methods.balanceOf(address).call();
      setApprovedAmount(_approvedAmount / Math.pow(10, 18));
      setContract(_contract)
      setBalance(_balance / Math.pow(10, 18))
  }

  return (
    <div>
      <p className="mb-4"> Select your payment method: </p>
      <div>
        {/* <p className="flex items-center space-x-1 cursor-pointer px-3 mb-3 py-5 main-bg border-inherit border text-base ">
          <BanckIcon width={20} height={20} className="" />{" "}
          <span>Bank transfer</span>{" "}
        </p>
        <p className="flex text-base  items-center space-x-1.5 cursor-pointer px-3 py-5  border-inherit border">
          <MoneyIcon width={20} height={20} /> <span>Cash payment</span>{" "}
        </p> */}
        {
          categories.map((col, idx) => 
          <p key={idx} onClick={() => setcollection(col)} className={`flex items-center space-x-1 cursor-pointer px-3 mb-3 py-5 border-inherit border text-base ${col.collection === collection.collection && "main-bg"}`}>
            <img alt="collection" src={col.image} width={40} height={40} className="" />{" "}
            <span>{col.name}</span>{" "}
          </p>)
        }

      </div>
      <div className="flex items-center justify-center space-x-3 py-10 border border-inherit border-l-0 border-r-0 mt-8">
        <div className="main-bg w-16 text-center flex justify-center items-center rounded-full py-4 cursor-pointer hover:bg-[#4b4b4b]" onClick={() => setCount(count === 0 ? 0 : count - 1)}>
          <Minuse className="text-white" width={30} height={30}/>
        </div>

        <div className="bg-[#4b4b4b] text-white  text-5xl py-2 px-10">{count}</div>
        <div className="main-bg w-16 text-center flex justify-center items-center rounded-full py-4 cursor-pointer hover:bg-[#4b4b4b]" onClick={() => setCount(count + 1)}>
          <PlushIcon className="text-white" width={30} height={30} />
        </div>
      </div>

      <div className="text-right pt-7 md:pt-20">
        <p className="text-[18px] md:text-[22px] ">Total</p>
        <p className="text-[30px] md:text-[40px]">{totalPrice} USDT</p>
        {/* <p className="text-[19px] md:text-[23px]">
          2,320.00 EUR <span className="color-2">| excl. VAT</span>
        </p> */}
        {/* <p className="text-[19px] md:text-[23px]">
          178.64 EUR <span className="color-2">| excl. VAT</span>
        </p>
        <div className="mt-5">
          <p className="flex items-center space-x-1 text-[14px] px-3 mb-3 py-5 main-bg border-inherit border text-white">
            The payment need to be arrive in the next 3 working days to keep
            this order valid.
          </p>
        </div> */}
        <div className="mt-5">
          <label className="block">
            {" "}
            <input onChange={e => setIsAgree(e.target.checked)} type="checkbox" className="checked:bg-blue-500 " /> I agree with
            the Cannerald{" "}
            <Link to="/" className="color-2">
              {" "}
              Terms and Conditions
            </Link>
          </label>
        </div>
        <div className="mt-5 pb-5">
          <button disabled={balance < totalPrice || approvedAmount >= totalPrice} className="main-bg mr-5 py-4 px-5 text-lg  hover:bg-[#9fa418] hover:text-white duration-300 rounded" onClick={approveHandler}>
            Approve
          </button>
          <button disabled={!canBuy} className="main-bg py-4 px-5 text-lg  hover:bg-[#9fa418] hover:text-white duration-300 rounded" onClick={buyHandler}>
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentOption;
