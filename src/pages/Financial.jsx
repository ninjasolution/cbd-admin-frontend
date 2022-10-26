import React, { useEffect, useState } from "react";
import SectionHeader from "../components/financial/SectionHeader";
import BalanceCBD from "../components/dashboard/BalanceCBD";
import img1 from "../images/1.JPG";
import Harvest from "../components/dashboard/Harvest";
import { TransactionsCard } from "../components/financial/TransactionsCard";
import { GraphCard } from "../components/financial/GraphCard";
import { HistoryTable } from "../components/financial/HistoryTable";
import { FainancialLogo } from "../icons";
import { Link } from "react-router-dom";
import { getPosts } from "../services/PostsService";
import { useSelector } from "react-redux";
import { formatError } from "../services/AuthService";
import { formatPrice } from "../utils/formatHelpers";

function Financial() {

  const user = useSelector(s => s.auth.user)
  const [balance, setBalance] = useState({});
  const marketplace = useSelector(s => s.contract.marketContract);
  const address = useSelector(s => s.web3.address)

  useEffect(() => {
    getPosts(`/api/balance/${user?.walletAddress}`)
      .then(res => {
        setBalance(res.data.data)
      })
  }, [])

  const claimHandler = async () => {
    if(!marketplace) {
      return formatError("Wallet")
    }
    await marketplace.methods.claim().send({from: address});

  }

  return (
    <>
      <div className="financial__content-wrapper ">
        <SectionHeader tittle="Financial" img={img1} />
        <div className="">
          {/*Financial Card*/}
          <div className="Financial__card pb-10 flex justify-center items-center flex-col md:flex-row">
            <Harvest
              title="Harvest (CBDT)"
              balance={formatPrice(balance.claimAmount)}
              currency="CBDT"
              headerImg={img1}
              firstImg={img1}
              secondImg={img1}
              financial={true}
            />

            <Link onClick={claimHandler} to="#" className="w-full md:w-6/12 xl:w-2/12 my-3">
              <FainancialLogo />
            </Link>

            <BalanceCBD
              title="Balance CBD NFT"
              balance={balance[Object.keys(balance)[0]]?.length + balance[Object.keys(balance)[1]]?.length}
              currency="CBD NFT"
              img={img1}
              financial={true}
            />
          </div>

          <div className="financial__content-wrapper flex flex-col md:flex-row justify-center">
            <GraphCard />
            {/* <TransactionsCard /> */}
          </div>
          <div className="history__table py-5">
            <div className="transactions__table py-10">
              <HistoryTable
                tittle="Transaction history"
                alert="No transactions found"
                transactions={true}
                isData={false}
              />
            </div>
            {/* <div className="order__table py-5">
              <HistoryTable
                tittle="Order history"
                alert="No orders found"
                order={true}
                isData={true}
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Financial;
