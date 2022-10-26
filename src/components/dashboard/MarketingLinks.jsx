import React from 'react'
import { useSelector } from 'react-redux'
import { frontendLink } from '../../config'
import { EmailIcon } from '../../icons'
import { Link } from "react-router-dom"

function MarketingLinks() {

  const user = useSelector(s => s.auth.user)

  return (
    <div className='w-full lg:w-6/12 flex lg:pr-6 pb-6 lg:pb-0'>
      <div className="my-border-1 my-shadow-1 border-l-4 p-1 w-full">
        <div className="flex py-1.5  px-3 justify-between">
          <h4 className="text-xl"> Marketing links</h4>
          {/* <EmailIcon width={12} /> */}
        </div>
        <div>
          <div className="bg-[#e6e6e6] px-3 mb-2">
            <small>Referral link</small>
            <p className="flex space-x-2">
              <EmailIcon width={12} />{" "}
              <a href={`${frontendLink}?referralCode=${user?.walletAddress}`}>
                {`${frontendLink}`}
              </a>
            </p>
          </div>
          <div className="bg-[#e6e6e6] px-3 mb-2">
            <p className="flex space-x-2">
              <EmailIcon width={12} />{" "}
              <Link to="/marketing/documentation">Business presentation </Link>
            </p>
          </div>
          <div className="bg-[#e6e6e6] px-3 mb-2">
            <p className="flex space-x-2">
              <EmailIcon width={12} />{" "}
              <Link to="/marketing">More material </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketingLinks