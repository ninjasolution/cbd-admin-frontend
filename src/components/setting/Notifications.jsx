import {FormHeading} from "./FormHeading";
import {RiAlertFill} from "react-icons/ri";
import {FaLock} from "react-icons/fa";

export const notificationSettings = [
	{
		id: 1,
		title: 'Receive an email whenever a new member joins your team.'
	} ,
	{
		id: 2,
		title: 'Receive email about received commissions.'
	}  ,
	{
		id: 3,
		title: 'Receive emails from members or sponsors.'
	}  ,
	{
		id: 4,
		title: 'Receive newsletter'
	}    ,
	{
		id: 5,
		title: 'Receive important chat messages or news from your sponsor via E-Mail.'
	} ,
	{
		id: 6,
		title: 'Receive chat messages via E-Mail.'
	}
]

export function Notifications() {
	return (
			<div className="w-full my-shadow-1 my-border-1 border-l-4">
				<FormHeading heading="Notifications" />
				<div className="flex flex-col p-5">
					{/*device notification*/}
					<div className="device__notification border-b pb-2">
						<p className="font-bold text-md ">Device Notification</p>
						<div className="py-2">
							<p className="text-[#bfc51d] text-sm">Your device or application doesn't support notifications!</p>
							<p>Notification Status: <span className="text-[#f05050]">disable</span></p>
						</div>
						<div className="py-2">
							<p >Check your permissions to allow notifications. To do this, click on <span className="border py-1"><RiAlertFill className="inline-flex"/><FaLock className="inline-flex"/>https://ca... </span> next to url</p>
						</div>
						<div className="button py-1">
							<button
									className="p-2 rounded bg-[#4b4b4b] text-white hover:bg-gray-100 hover:text-zinc-700 hover:border-[#4b4b4b] focus:outline-none focus:ring  focus:ring-gray-300">
								Recheck status and send test notification
							</button>
						</div>
					</div>
					{/*telegram notification*/}
					<div className="telegram__notification border-b pb-2">
						<p className="font-bold text-md py-2">Telegram Notification</p>
						<p>Notification Status: <span className="text-[#f05050]">disable</span></p>
						<button type="submit"
						        className="p-[8px_20px] rounded border-none outline-none bg-[#b1b61a] text-black text-sm my-2  hover:bg-[#969b18] hover:text-white hover:border hover:border-[#969b18] focus:outline-none focus:ring  focus:ring-[#969b18]">
							Enable now
						</button>
					</div>
					{/*email notification*/}
					<div className="email__notification">
						<p className="font-bold text-md py-2">Email Notification</p>
					{/*	RADIO BUTTON */}
						<div className="radio__button border border-b-0">
							{
								notificationSettings.map((item) => {
									return (
											<div key={item.id}
											     className=" border-b p-2 ">
												<label htmlFor={`${item.id}`}
												       className="flex relative flex-col xl:flex-row cursor-pointer">
													<div>
														<input type="checkbox" defaultValue="" id={`${item.id}`}
														       className="sr-only peer" />
														<div
																className="w-9 h-5 bg-white border peer-focus:outline-none  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all after:duration-300 peer-checked:bg-[#bfc51d]"></div>
													</div>
													<span className="ml-3 ">{item.title}</span>
												</label>
											</div>
									)
								})
							}
						</div>
						<div className="text-right">
							<button type="submit"
							        className="p-[8px_20px] rounded border-none outline-none bg-[#b1b61a] text-black text-sm my-2  hover:bg-[#969b18] hover:text-white hover:border hover:border-[#969b18] focus:outline-none focus:ring  focus:ring-[#969b18]">
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
	)
}