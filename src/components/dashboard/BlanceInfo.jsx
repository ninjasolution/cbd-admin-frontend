import { PlanBigSvg } from "../../icons";
import EmailNotVerified from "./EmailNotVerified";
import BalanceCBD from "./BalanceCBD";
import YourPlants from "./YourPlants";
import Harvest from "./Harvest";
import img1 from "../../images/1.JPG";
import  { useSelector }  from "react-redux"
import { useEffect, useState } from "react";
import { getPosts } from "../../services/PostsService";
import { formatPrice } from "../../utils/formatHelpers";

function BlanceInfo() {

  const user = useSelector(s => s.auth.user)
  const [ balance, setBalance ] = useState({});

  useEffect(() => {
    getPosts(`/api/balance/${user?.walletAddress}`)
    .then(res => {
      setBalance(res.data.data)
    })

  }, [])

  return (
    <div>
      <div className="flex items-center space-y-5 flex-col xl:flex-row">
        <div className="w-full xl:w-9/12">
          {
            !user?.emailVerified &&
            <EmailNotVerified />
          }
          <div className="flex flex-wrap">
            <BalanceCBD
              title="Balance CBD Token"
              balance={ formatPrice(balance.cbdtBalance) }
              currency="CBDT"
              img={img1}
            />
            <Harvest
              title="Harvest CBD Token"
              balance={formatPrice(balance.claimAmount)}
              currency="CBDT"
              headerImg={img1}
              firstImg={img1}
              secondImg={img1}
            />
            <YourPlants title={"Common CBD NFT"} amount={balance[Object.keys(balance)[0]]?.length}/>
            <YourPlants title={"Seed Package CBD NFT"} amount={balance[Object.keys(balance)[1]]?.length}/>
          </div>
        </div>
        <div className="w-full xl:w-3/12">
          <div className="max-w-[265px] mx-auto">
            <PlanBigSvg />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlanceInfo;
