/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./../styles/product.css";
import { categories, categoriesByAddress, CBDNFTMarketplaceAddr, marketplaceLabel } from "../config";
import MarketplaceIcon from "../images/marketplace.png"
import { useSelector } from "react-redux";
import NFTMarketplace from "../abis/CBDNFTMarketplace.json"
import NFT from "../abis/CBDNFT.json"
import { formatDate, formatPrice, shapeAddress } from "../utils/formatHelpers";

function Plants() {

  const [collection, setcollection] = useState(() => {
    return categories[0];
  });

  const web3 = useSelector(s => s.web3.web3);
  const [NFTs, setNFTs] = useState([]);
  const address = useSelector(s => s.web3.address)

  useEffect(() => {
    (async () => {
      if (!web3) return;
      if (collection.collection === marketplaceLabel) {
        const _contract = new web3.eth.Contract(NFTMarketplace.abi, CBDNFTMarketplaceAddr);
        var commonIds = await _contract.methods.getItemListOfOwner(categories[0].collection, address).call();
        commonIds = commonIds.map(c => ({
          collection: categories[0].collection,
          createdAt: formatDate(c.createdAt * 1000),
          price: formatPrice(c.price),
          seller: shapeAddress(c.address),
          mainPrice: categories[0].mainPrice,
          discountAmount: categories[0].discountAmount,
          tokenId: c.tokenId
        }))
        var seedIds = await _contract.methods.getItemListOfOwner(categories[1].collection, address).call();
        seedIds = seedIds.map(c => ({
          collection: categories[1].collection,
          createdAt: formatDate(c.createdAt * 1000),
          price: formatPrice(c.price),
          seller: shapeAddress(c.address),
          mainPrice: categories[1].mainPrice,
          discountAmount: categories[1].discountAmount,
          tokenId: c.tokenId
        }))
        setNFTs([...commonIds, ...seedIds])
      } else {
        const _contract = new web3.eth.Contract(NFT.abi, collection.collection);
        const ids = await _contract.methods.getTokensOf(address).call();
        setNFTs(ids)
      }

    })()
  }, [collection])

 
  return (
    <div className="">
      <div className="header mb-5">
        {
          categories.map((col, idx) =>
            <p key={idx} onClick={() => setcollection(col)} className={`flex items-center space-x-1 cursor-pointer px-3 mb-3 py-5 border-inherit border text-base ${col.collection === collection.collection && "main-bg"}`}>
              <img alt="collection" src={col.image} width={40} height={40} className="" />{" "}
              <span>{col.name}</span>{" "}
            </p>)
        }
        <p onClick={() => setcollection({ collection: marketplaceLabel })} className={`flex items-center space-x-1 cursor-pointer px-3 mb-3 py-5 border-inherit border text-base ${marketplaceLabel === collection.collection && "main-bg"}`}>
          <img alt="collection" src={MarketplaceIcon} width={40} height={40} className="" />{" "}
          <span>Sold NFTs</span>{" "}
        </p>
      </div>

      <div className="grid-view">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {NFTs.map((el, idx) => (
            <div className="product-card relative" key={idx}>
              <div className="product-img">
                <Link to={`/product/${el.collection ?? collection.collection}/${el.tokenId ?? el}`}>
                  <img className="w-full" src={collection.collection === marketplaceLabel ? categoriesByAddress[el.collection]?.image : collection.image} alt={"NFT image"} />
                </Link>
              </div>
              <div className="content">
                <p className="name">{`${collection.collection === marketplaceLabel ? categoriesByAddress[el.collection]?.name : collection.name} #${el.tokenId ?? el}`} </p>
                <div className="price-wrapper">
                  {collection.collection === marketplaceLabel &&
                    (
                      <div>
                        <p className="price">{el?.price} USDT</p>
                      </div>
                    )}
                </div>
              </div>
              {/* <div className="absolute top-5 right-5">
                <div className="flex p-4 bg-white rounded-full cursor-pointer mb-2.5 items-center">
                  {
                    <AiOutlineHeart className="text-[#c4c4c4] hover:text-[#252531] text-[30px] duration-300" />
                  }
                </div>
                <div className="flex p-4 bg-white rounded-full cursor-pointer mb-2.5 items-center">
                  {
                    <GoLaw className="text-[#c4c4c4] hover:text-[#252531] text-[27px] duration-300" />
                  }
                </div>
              </div> */}
              {/* {collection.collection === marketplaceLabel && 
              (collection.mainPrice - collection.discountAmount -  formatPrice(el.price)) != 0
              (
                <div className="absolute top-5 left-5 text-[#fff] py-1 px-1.5 bg-[#F2442C]">
                  <p>- {collection.mainPrice - collection.discountAmount -  formatPrice(el.price)}%</p>
                </div>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Plants;
