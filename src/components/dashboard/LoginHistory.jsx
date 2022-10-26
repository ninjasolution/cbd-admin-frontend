
import { useSelector } from 'react-redux'
import { EmailIcon } from '../../icons'
import { formatDate } from '../../utils/formatHelpers'

function LoginHistory() {

  const user = useSelector(s => s.auth.user)
  return (
    <div className='w-full lg:w-6/12 lg:pl-4 py-4 lg:py-0 flex'>
      <div className="my-border-1 my-shadow-1 border-l-4 p-1 w-full">
        <div className="flex py-1.5  px-3 justify-between">
          <h4 className="text-xl">Login history</h4>
          {/* <EmailIcon width={12} /> */}
        </div>
        <div>
          {
            user?.logins?.map((l, idx) => (
              <div key={idx} className="bg-[#e6e6e6] px-2 mb-2">
                <p className="flex justify-between space-x-2">
                  <span>{formatDate(l?.createdAt)}</span> <span>{l?.ipAddress}</span>
                </p>
              </div>

            ))
          }

        </div>
      </div>
    </div>
  )
}

export default LoginHistory