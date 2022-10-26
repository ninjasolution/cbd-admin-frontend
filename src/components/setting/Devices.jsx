import {FormHeading} from "./FormHeading";

export const deviceInfo = [
    {
        id: 1 ,
        heading:'letzten Samstag um 11:57 Uhr',
        operatingSystem: 'Windows' ,
        date: new Date().toLocaleDateString() ,
        browser: 'Chrome' ,
        ip: '118.179.93.249',
        location: 'United States'
    },
    {
        id: 2 ,
        heading: "letzten Freitag um 02:21 Uhr",
        operatingSystem: 'Linux' ,
        date: new Date().toLocaleDateString() ,
        browser: 'Firefox' ,
        ip: '118.179.52.350',
        location: 'Canada'
    }
]
  



export const Devices = () => {
  return (
    <div className="w-full h-full
     my-shadow-1 my-border-1 border-l-4">
      <FormHeading heading="Devices" />
      <div className="p-4">
        <p>Here you can see your last 15 logins.</p>
      {/*timeLine device */}
          <div className="relative wrap overflow-hidden p-5 h-full">
              <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"></div>

              {
                    deviceInfo.map((device, index) => {
                        const {id, heading, operatingSystem, date, browser, ip, location} = device;
                        return (
                            <div key={id} className="mb-8 flex w-full right-timeline">
                                <div className="z-20 -ml-3.5 mt-2 flex bg-[#BFC51D] shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="m-auto font-semi-bold text-lg text-white">{id}</h1>
                                </div>
                                <div className="order-1 border rounded-lg shadow-xl w-full ml-2 ">
                                    <div className="py-2  font-bold bg-[#F7F7F7] text-[#4B4B50] border-b text-xl "><span className="mx-2">{heading}</span></div>
                                    <p className="text-md leading-snug tracking-wide text-gray-900 text-opacity-100  px-4 py-2">{operatingSystem} | IP: {ip} | Platform: {operatingSystem} | Browser: {browser}| Country: {location}</p>
                                </div>
                            </div>
                        )
                    }    )
              }
          </div>

      </div>
    </div>
  )
}