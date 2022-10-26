import React from 'react'
import { DangerIcon } from '../../icons'
function EmailNotVerified() {

  return (
    <div className='mb-4'>
        <p className='font-bold w-full'><strong className='mr-1 '>  <DangerIcon className="inline" width={18} height={18} /> Email not verified!</strong>  Please check your inbox and verify your email address. </p>
        <p className='font-bold'><a href="/" className='color-2 underline underline-main'>Send new verification email</a></p>
    </div>
  )
}

export default EmailNotVerified