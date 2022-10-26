import React, { useState, useMemo, useEffect } from "react";
import "../styles/product.css";
import { AiFillStar, AiOutlineClose } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { GoLaw } from "react-icons/go";
import { categories, CBDNFTMarketplaceAddr, USDTAddr } from "../config";
import ERC20 from "../abis/ERC20.json";
import NFT from "../abis/CBDNFT.json";
import { useSelector } from "react-redux"
// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
import { createPost } from "../services/PostsService.js"

function Product() {

  const params = useParams();
  const [tokenContract, setTokenContract] = useState();
  const web3 = useSelector(s => s?.web3?.web3);
  const address = useSelector(s => s?.web3?.address);
  const marketContract = useSelector(s => s?.contract?.marketContract);
  const [tokenDetail, setTokendetail] = useState()
  const [price, setPrice] = useState(0)
  const [NFTContract, setNFTContract] = useState()
  const [targetAddr, setTargetAddr] = useState()
  const [isApproved, setIsApproved] = useState(false)
  const [isApprovedForTransfer, setIsApprovedForTransfer] = useState(false)
  const [priceModal, setPriceModal] = useState(false)
  const [sellModal, setSellModal] = useState(false)
  const [transferModal, setTransferModal] = useState(false)

  const selCategory = useMemo(() => {
    return categories?.find(c => c.collection === params.collection)
  }, [params])


  useEffect(() => {
    if (selCategory?.collection && web3 && address && marketContract) {
      (async () => {
        const _tokenContract = new web3.eth.Contract(ERC20.abi, USDTAddr);
        const _nftContract = new web3.eth.Contract(NFT.abi, params.collection);
        setTokenContract(_tokenContract);
        setNFTContract(_nftContract)
        const approvedAddr = await _nftContract.methods.getApproved(params.id).call();
        setIsApproved(approvedAddr.toLowerCase() === CBDNFTMarketplaceAddr.toLowerCase());

        const details = await marketContract.methods.itemDetails(params.collection, params.id).call();
        setTokendetail(details);
      })()
    }
  }, [selCategory, web3, address, marketContract])

  const approve = async () => {
    await NFTContract.methods.approve(CBDNFTMarketplaceAddr, params.id).send({ from: address })
    setIsApproved(true)
  }

  const approveForTransfer = async () => {
    await NFTContract.methods.approve(targetAddr, params.id).send({ from: address })
    setIsApprovedForTransfer(true)
  }

  const sellHanlder = async () => {
    // const tx = await marketContract.methods.createItemOrder(params.collection, params.id, USDTAddr, web3.utils.toWei(price.toString())).send({ from: address })
    const tx = await marketContract.methods.createItemOrder(params.collection, params.id, USDTAddr, web3.utils.toWei(price.toString())).send({ from: address })
    createPost("/api/transaction", { type: "Sell", currency: "USDT", idNFT: params.id, hash: tx.blockHash })
    setSellModal(false);
    setPrice(0)
  }

  const cancelHanlder = async () => {
    const tx = await marketContract.methods.cancelItemOrder(params.collection, params.id).send({ from: address })
    createPost("/api/transaction", { type: "Cancel Order", currency: selCategory.name, idNFT: params.id, hash: tx.blockHash })
  }

  const changePriceHandler = async () => {
    const tx = await marketContract.methods.modifyItemOrder(params.collection, params.id, price).send({ from: address })
    createPost("/api/transaction", { type: "Change Price", currency: selCategory.name, idNFT: params.id, hash: tx.blockHash })
  }

  const transferHanlder = async () => {
    if (!isApprovedForTransfer) return;
    const tx = await NFTContract.methods.transferFrom(address, targetAddr, params.id).send({ from: address })
    createPost("/api/transaction", { type: "Transfer", currency: selCategory.name, amount: price, idNFT: params.id, hash: tx.blockHash })
  }
  const stars = [1, 1, 1, 1, 1];

  return (
    <div className="header_margin product-details-page">
      <div className="container">
        <div className="product-wrapper">
          <div className="img-area">
            {/* imga here */}
            <img src={selCategory?.image} alt={selCategory?.name} />
          </div>
          <div className="content-area">
            <div className="title-section">
              <h2>{`${selCategory.name}#${params.id}`}</h2>
              {/* <div className="price-box">
                {selCategory.discount && (
                  <p className="main-price">USDT {selCategory.mainPrice}</p>
                )}
                <p className="price">{selCategory.discountPrice}</p>
              </div> */}
            </div>
            <div className="start-wrapper">
              {/* {stars.map((el, i) => (
                <AiFillStar key={i} className="unstar" />
              ))} */}
            </div>
            <p className="des">{selCategory.description}</p>

            {
              tokenDetail?.seller === address ?
                (<div>
                  <div className="cart-btn">
                    <button onClick={() => setPriceModal(true)}>
                      <span>Change Price</span>
                    </button>
                  </div>
                  <div className="cart-btn">
                    <button onClick={cancelHanlder}>
                      <span>Cancel Order</span>
                    </button>
                  </div>
                </div>)
                :
                (<div>
                  {
                    !isApproved &&
                    <div className="cart-btn">
                      <button onClick={approve} disabled={isApproved}>
                        <span>Approve</span>
                      </button>
                    </div>

                  }
                  <div className="cart-btn">
                    <button onClick={() => setSellModal(true)} disabled={!isApproved}>
                      <FaCartPlus /> <span>Sell</span>
                    </button>
                  </div>
                  <div className="cart-btn">
                    <button onClick={() => setTransferModal(true)} disabled={!isApproved}>
                      <span>Transfer</span>
                    </button>
                  </div>
                </div>)
            }

            {/* <div className="guide">
              <Link to="/">Size Guide</Link>
            </div>
            <div className="option-wrapper">
              <button className="whitelist">
                <AiOutlineHeart /> <span>Add to Wishlist</span>
              </button>
              <button className="compair">
                <GoLaw />
                Add To Compare
              </button>
            </div> */}

            {/* <div className="product-information">
              <h4>Product information</h4>

              <div className="description">
                <p>{product.information}</p>
              </div>
            </div> */}

            {/* <div className="review-wrapper">
              <h3>No reviews found</h3>
              <p>*User with this role cannot publish a new review</p>
            </div> */}
          </div>
        </div>

        {/* <Table striped bordered hover className="mt-5">
          <thead>
            <tr>
              <th>#</th>
              <th>From</th>
              <th>To</th>
              <th>Evnt</th>
              <th>Time</th>
              <th>Transaction</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>Otto</td>
              <td>Otto</td>
              <td>
                <Button variant="primary">Transaction</Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>Thornton</td>
              <td>Thornton</td>
              <td>
                <Button variant="primary">Transaction</Button>
              </td>
            </tr>
            
          </tbody>
        </Table> */}
        <div className="faul"></div>

        {
          priceModal &&
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-[100]">
            <div className="bg-white pt-5 px-7 pb-10 rounded w-1/2">
              <div className='text-right'>
                <AiOutlineClose onClick={() => setPriceModal(false)} className='text-[25px] ml-auto cursor-pointer mb-4  mt-2' />
              </div>
              <div className='mb-12'>
                <div className='flex items-center space-x-3'>
                  <h3 className='font-bold text-[25px] text-black'>New Price :</h3>
                  <input type="number" className='border border-black outline-none rounded py-2 px-3 flex-1' placeholder='5 USDT' onChange={e => setPrice(e.target.value)} />
                </div>
              </div>

              <div className="text-right space-x-3">
                <button className="px-5 py-2 bg-gray-700 text-sm text-white rounded" onClick={changePriceHandler}>
                  Change Price
                </button>
                <button className="px-5 py-2 text-sm bg-gray-700 text-white rounded" onClick={() => setPriceModal(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        }

        {
          sellModal &&
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-[100]">
            <div className="bg-white pt-5 px-7 pb-10 rounded w-1/2">
              <div className='text-right'>
                <AiOutlineClose onClick={() => setSellModal(false)} className='text-[25px] ml-auto cursor-pointer mb-4  mt-2' />
              </div>
              <div className='mb-12'>
                <div className='flex items-center space-x-3'>
                  <h3 className='font-bold text-[25px] text-black'>Price :</h3>
                  <input type="number" className='border border-black outline-none rounded py-2 px-3 flex-1' placeholder='5 USDT' onChange={e => setPrice(e.target.value)} />
                </div>
              </div>

              <div className="text-right space-x-3">
                <button className="px-5 py-2 bg-gray-700 text-sm text-white rounded" onClick={sellHanlder}>
                  Create order
                </button>
                <button className="px-5 py-2 text-sm bg-gray-700 text-white rounded" onClick={() => setSellModal(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        }


        {
          transferModal &&
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-[100]">
            <div className="bg-white pt-5 px-7 pb-10 rounded w-1/2">
              <div className='text-right'>
                <AiOutlineClose onClick={() => setTransferModal(false)} className='text-[25px] ml-auto cursor-pointer mb-4  mt-2' />
              </div>
              <div className='mb-12'>
                <div className='flex items-center space-x-3'>
                  <h3 className='font-bold text-[25px] text-black'>Recipient :</h3>
                  <input type="text" className='border border-black outline-none rounded py-2 px-3 flex-1' placeholder='0x02fc14d01F4E073829276cc2f4f94Fb4EDe1e0c4' onChange={e => setTargetAddr(e.target.value)} />
                </div>
              </div>

              <div className="text-right space-x-3">
                <button disabled={isApprovedForTransfer} className="px-5 py-2 bg-gray-700 text-sm text-white rounded" onClick={approveForTransfer}>
                  Approve
                </button>
                <button disabled={!isApprovedForTransfer} className="px-5 py-2 text-sm bg-gray-700 text-white rounded" onClick={() => transferHanlder(false)}>
                  Transfer
                </button>
              </div>
            </div>
          </div>
        }


      </div>
    </div>
  );
}

export default Product;
