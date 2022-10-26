import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { deletePost } from "../../services/PostsService";
import { logout } from "../../store/actions/AuthActions";
import { updatePostAction } from "../../store/actions/PostActions";
import { FormHeading } from "./FormHeading";

export function PassAndAccountForm() {

    const [originalPassword, setOriginalPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [newEmail, setNewEmail] = useState();
    const navigation = useNavigate()
    const dispatch = useDispatch();
    const user = useSelector(s => s.auth.user)

    const updatePassHandler = () => {
        const data = {
            originalPassword,
            newPassword
        }
        dispatch(updatePostAction("/api/auth/changePassword", data, navigation, "/signin"))
    }

    const updateEmailHandler = () => {
        const data = {
            newEmail
        }
        dispatch(updatePostAction("/api/auth/changeEmail", data))
    }

    const deleteAccountHandler = () => {
        deletePost("/api/auth/deleteAccount").then(res => {
            dispatch(logout(navigation))
        })
    }

    return (<div>
        {/*Account Delete section*/}
        <div className="w-full mb-5 my-border-1 border-l-4 my-shadow-1">
            <FormHeading heading="Account" />
            <div className="card__body p-4">
                <button onClick={deleteAccountHandler}
                    className="bg-[#f05050] hover:bg-[#f90000] p-[0.3rem_1rem] rounded-[4px] text-white focus:ring focus:ring-red-300 ">
                    <span>Delete Account</span>
                </button>
                <p className="hover:underline cursor-pointer color-2 hover:text-[#9da21d]  hover-transition"> You can click here to change your sponsor</p>
            </div>
        </div>
        {/*Password Change section*/}
        <div className="w-full mb-5  my-border-1 border-l-4 my-shadow-1">
            <FormHeading heading="Password" />
            <div className="card__body p-4">
                <div className="flex flex-col space-y-2">
                    <label htmlFor="currentPassword" className="">Current
                        Password</label>
                    <input
                        type="password"
                        id="currentPassword"
                        defaultValue={originalPassword}
                        onChange={e => setOriginalPassword(e.target.value)}
                        className="border border-[#bfc51d] p-1 focus:outline-none focus:ring  focus:ring-[#e4eb4185]"
                        placeholder="Enter your current password" />

                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-2 mt-4">
                        <label htmlFor="newPassword" className="">New Password</label>
                        <input
                            type="password"
                            id="newPassword"
                            defaultValue={newPassword}
                            onChange={e => setNewPassword(e.target.value)}

                            className="border border-[#bfc51d] p-1 focus:outline-none focus:outline-none focus:ring  focus:ring-[#e4eb4185]"
                            placeholder="Enter your new password" />
                    </div>
                    <div className="flex flex-col space-y-2 mt-4">
                        <label htmlFor="confirmPassword" className="">Confirm
                            Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            defaultValue={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}

                            className="border border-[#bfc51d]  p-1 focus:outline-none focus:outline-none focus:ring  focus:ring-[#e4eb4185]"
                            placeholder="Confirm your new password" />
                    </div>
                </div>
                <div className=" mt-6">
                    <button onClick={updatePassHandler}
                        className="p-2 rounded border-none outline-none bg-[#b1b61a] text-white hover:bg-[#969b18] hover:text-white hover:border hover:border-[#969b18] focus:outline-none focus:ring  focus:ring-[#e4eb4185]">
                        Update Password
                    </button>
                </div>
            </div>

        </div>
        {/*Email Update*/}
        <div className="w-full mb-5 my-border-1 border-l-4 my-shadow-1">
            <FormHeading heading="Email" />
            <div className="card__body p-4">
                <p className="mb-2">
                    Here you can see your linked email address and its status. You can change your email address
                    any
                    time without confirmation if not verified yet.
                </p>
                <div className="bg-[#ff902b] px-4 py-2 text-white">
                    <span>To prevent unauthorised access and changes to your account, please verify your email address as soon as possible.</span>
                </div>
                <div className="mt-4">
                    <p className="font-bold"> Your current email address</p>
                    <span>{ user.email }</span>
                    <span
                        className="px-2 pb-[2px] rounded-full bg-[#bfc51d] text-black text-sm font-bold ml-2">primary</span>
                        {
                            !user.emailVerified && 
                            <span
                        className="px-2 pb-[2px] rounded-full bg-[#ff902b] text-white text-sm font-bold ml-2">not verified</span>
                        }
                    
                </div>
            </div>
            <hr />
            <div className="card__body-b p-4">
                <div className="flex flex-col space-y-2">
                    <label htmlFor="newEmail" className="font-bold text-md">Update email address</label>
                    <input
                        type="email"
                        id="newEmail"
                        defaultValue={newEmail}
                        onChange={e => setNewEmail(e.target.value)}

                        className="border border-[#bfc51d] p-1 focus:outline-none focus:ring  focus:ring-[#e4eb4185]"
                        placeholder="email@server.com" />
                </div>
                <div className=" mt-4">
                    <button
                        onClick={updateEmailHandler}
                        className="px-2 py-1 rounded border-none outline-none bg-[#b1b61a] text-white hover:bg-[#969b18] hover:text-white hover:border hover:border-[#969b18] focus:outline-none focus:ring  focus:ring-[#e4eb4185]">
                        Update Email Address
                    </button>
                </div>
            </div>
        </div>
    </div>)
}