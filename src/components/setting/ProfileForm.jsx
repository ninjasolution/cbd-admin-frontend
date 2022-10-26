import { FormHeading } from "./FormHeading";
import { FaFacebook, FaInstagram, FaLinkedin, FaSkype, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePostAction } from "../../store/actions/PostActions";


export const toggleButtonTittle = [
	{
		id: 1,
		title: 'Show plants',
	},
	{
		id: 2,
		title: 'Show team size',
	},
	{
		id: 3,
		title: 'Show real name',
	}
]


export function ProfileForm() {

	const [nickName, setNickName] = useState('');
	const [walletAddress, setWalletAddress] = useState('');
	const [faceBook, setFacebook] = useState('');
	const [instagram, setInstagram] = useState('');
	const [linkedin, setLinkedin] = useState('');
	const [twitter, setTwitter] = useState('');
	const [skype, setSkype] = useState('');
	const [telegram, setTelegram] = useState('');
	const [whatsapp, setWhatsapp] = useState('');
	const dispatch = useDispatch()

	const saveHandler = () => {
		const data = {
			nickName,
			walletAddress,
			social: {
				faceBook,
				instagram,
				linkedin,
				twitter,
				skype,
				telegram,
				whatsapp
			}
		}
		dispatch(updatePostAction("/api/auth/updateProfile", data))
	}

	return (
		<div className="w-full my-border-1 my-shadow-1 border-l-4">
			<FormHeading heading="Profile" />
			<div className="card__body p-4">
				<div className="flex flex-col space-y-2">
					<label htmlFor="nickname" className="">Nick Name</label>
					<input
						type="text"
						id="nickname"
						onChange={e => setNickName(e.target.value)}
						className="border border-[#bfc51d] p-1 focus:outline-none focus:ring  focus:ring-[#e4eb4185]"
						placeholder="Nick Name" />
				</div>
				<div className="flex flex-col space-y-2 mt-4">
					<label htmlFor="textarea">Wallet Address</label>
					<input
						type="text"
						id="walletAddress"
						onChange={e => setWalletAddress(e.target.value)}
						className="border border-[#bfc51d] p-1 focus:outline-none focus:ring  focus:ring-[#e4eb4185]"
						placeholder="Wallet Address" />
					{/* <textarea id="textarea"
							          className="border border-[#bfc51d] p-2 focus:outline-none focus:ring  focus:ring-[#e4eb4185]"
							          placeholder="Add a description to your profile" /> */}
				</div>
				<div className="flex flex-col space-y-2 mt-4">
					<label htmlFor={`facebook`} className="capitalize">Facebook</label>
					<div className="flex items-center">
						{/* <div className="border  border-[#bfc51d] flex items-center bg-gray-100 p-1 ">
									<FaFacebook className="text-[#3B5998]" />
								</div> */}
						<div className="border  border-[#bfc51d] flex items-center bg-gray-100 p-2 ">
							<FaFacebook className="text-[#3B5998]" />
						</div>

						<input type="text" onChange={e => setFacebook(e.target.value)} id="facebook"
							className="border border-l-0 border-[#bfc51d] p-1 focus:outline-none focus:ring  focus:ring-[#e4eb4185] w-full" />
					</div>
				</div>

				<div className="flex flex-col space-y-2 mt-4">
					<label htmlFor={`instagram`} className="capitalize">Instagram</label>
					<div className="flex items-center">
						<div className="border  border-[#bfc51d] flex items-center bg-gray-100 p-2 ">
							<FaInstagram className="text-[#010101]" />
						</div>
						<input type="text" onChange={e => setInstagram(e.target.value)} id="instagram"
							className="border border-l-0 border-[#bfc51d] p-1 focus:outline-none focus:ring  focus:ring-[#e4eb4185] w-full" />
					</div>
				</div>
				<div className="flex flex-col space-y-2 mt-4">
					<label htmlFor={`linkedIn`} className="capitalize">LinkedIn</label>
					<div className="flex items-center">
						<div className="border  border-[#bfc51d] flex items-center bg-gray-100 p-2 ">
							<FaLinkedin className="text-[#2867B2]" />
						</div>
						<input type="text" onChange={e => setLinkedin(e.target.value)} id="linkedIn"
							className="border border-l-0 border-[#bfc51d] p-1 focus:outline-none focus:ring  focus:ring-[#e4eb4185] w-full" />
					</div>
				</div>

				<div className="flex flex-col space-y-2 mt-4">
					<label htmlFor={`twitter`} className="capitalize">Twitter</label>
					<div className="flex items-center">
						<div className="border  border-[#bfc51d] flex items-center bg-gray-100 p-2 ">
							<FaLinkedin className="text-[#2867B2]" />
						</div>
						<input type="text" onChange={e => setTwitter(e.target.value)} id="twitter"
							className="border border-l-0 border-[#bfc51d] p-1 focus:outline-none focus:ring  focus:ring-[#e4eb4185] w-full" />
					</div>
				</div>

				<div className="flex flex-col space-y-2 mt-4">
					<label htmlFor={`skype`} className="capitalize">Skype</label>
					<div className="flex items-center">
						<div className="border  border-[#bfc51d] flex items-center bg-gray-100 p-2 ">
							<FaLinkedin className="text-[#2867B2]" />
						</div>
						<input type="text" onChange={e => setSkype(e.target.value)} id="skype"
							className="border border-l-0 border-[#bfc51d] p-1 focus:outline-none focus:ring  focus:ring-[#e4eb4185] w-full" />
					</div>
				</div>
				<div className="flex flex-col space-y-2 mt-4">
					<label htmlFor={`telegram`} className="capitalize">Telegram</label>
					<div className="flex items-center">
						<div className="border  border-[#bfc51d] flex items-center bg-gray-100 p-2 ">
							<FaTelegram className="text-[#0188CC]" />
						</div>
						<input type="text" onChange={e => setTelegram(e.target.value)} id="telegram"
							className="border border-l-0 border-[#bfc51d] p-1 focus:outline-none focus:ring  focus:ring-[#e4eb4185] w-full" />
					</div>
				</div>
				<div className="flex flex-col space-y-2 mt-4">
					<label htmlFor={`whatsapp`} className="capitalize">Whatsapp</label>
					<div className="flex items-center">
						<div className="border  border-[#bfc51d] flex items-center bg-gray-100 p-2 ">
							<FaLinkedin className="text-[#2867B2]" />
						</div>
						<input type="text" onChange={e => setWhatsapp(e.target.value)} id="whatsapp"
							className="border border-l-0 border-[#bfc51d] p-1 focus:outline-none focus:ring  focus:ring-[#e4eb4185] w-full" />
					</div>
				</div>

				{/*toggle Button*/}
				{/* <div className="privacy__section py-3">
							<p className="pb-2">Privacy</p>
							{
								toggleButtonTittle.map((item) => {
									return (

											<div key={item.id}
											     className="border p-2 flex items-center">
												<label htmlFor={`${item.id}`}
												       className="inline-flex relative items-center cursor-pointer">
													<input type="checkbox" defaultValue="" id={`${item.id}`}
													       className="sr-only peer" />
													<div
															className="w-9 h-5 bg-white border peer-focus:outline-none  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all after:duration-300 peer-checked:bg-[#bfc51d]"></div>
													<span className="ml-3 text-sm ">{item.title}</span>
												</label>
											</div>

									)
								})
							}
						</div> */}
				<button onClick={saveHandler} className="p-[4px_10px] mt-5 rounded border-none outline-none bg-[#b1b61a] text-black hover:bg-[#969b18] hover:text-white hover:border hover:border-[#969b18] focus:outline-none focus:ring  focus:ring-[#969b18]">
					Save
				</button>
			</div>
		</div>
	)
}