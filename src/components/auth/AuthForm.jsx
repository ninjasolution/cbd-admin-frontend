import CheckBox from './CheckBox';
import AuthButton from './AuthButton';
import AuthInput from './AuthInput';
import { useState } from 'react';
import axios from "axios"
import { backendLink } from '../../config';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { loginConfirmedAction, loginFailedAction } from '../../store/actions/AuthActions';
import { formatError } from '../../services/AuthService';

const AuthForm = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickName, setNickName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [sponsor, setSponsor] = useState("");
  const [walletAddress, setWalletAddr] = useState("");
  const [emailSetting, setEmailSetting] = useState(false);
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      password,
      nickName,
      birthday,
      sponsor,
      emailSetting,
      walletAddress
    }
    if (!(password === confirmPassword)) {
      return;
    }
    axios.post(`${backendLink}/api/auth/signup`, data).then(res => {
      if (!res.data.status) {
        formatError(res.data.data)
        dispatch(loginFailedAction(res.data.data))
      } else {
        navigation("/signin")
      }
    }).catch(err => {
      dispatch(loginFailedAction(err))
    })

  }

  return (
    <div className='bg-white my-shadow-1 my-border-1 border-l-4'>
      <p className='text-center px-4 py-3 text-[1.3em] uppercase '>SignUp</p>
      <form action="#" onSubmit={onSubmit}>


        <div className="card__body px-4">
          <div className="flex flex-col md:flex-row gap-6 py-3">
            <AuthInput label={"First Name"} type={"text"} id={"firstName"} setState={value => setFirstName(value)} />
            <AuthInput label={"Last Name"} type={"text"} id={"lastName"} setState={value => setLastName(value)} />
          </div>

          <div className="flex flex-col md:flex-row gap-6 py-3">
            <AuthInput label={"Email address"} type={"email"} id={"email"} setState={value => setEmail(value)} />
            <AuthInput label={"Nick Name"} type={"text"} id={"nickName"} setState={value => setNickName(value)} />
          </div>

          <div className="flex flex-col md:flex-row gap-6 py-3">
            <AuthInput label={"Password"} type={"password"} id={"currentPassword"} setState={value => setPassword(value)} />
            <AuthInput label={"Confirm Password"} type={"password"} id={"confirmPassword"} setState={value => setConfirmPassword(value)} />
          </div>

          <div className="flex flex-col md:flex-row gap-6 py-3">
            <AuthInput label={"Birthdate"} type={"date"} id={"birthday"} setState={value => setBirthday(value)} />
            <AuthInput label={"Sponsor"} type={"text"} id={"sponsor"} setState={value => setSponsor(value)} />
          </div>

          <div className='flex flex-col md:flex-row gap-4 items-end p-3'>
            <AuthInput label={"Wallet Address"} type={"text"} id={"walletAddress"} setState={value => setWalletAddr(value)} fullWidth />
          </div>

        </div>
        {/* check box */}
        <div className="terms__conditions px-4 py-3">

          <CheckBox label={
            <p className='text-right'>
              I agree with the <strong> Terms and Conditions</strong> , <strong>Terms of Service</strong> and <br /> <strong>Privacy policy</strong>
            </p>
          } right top/>
          <CheckBox label={
            <p>I want to receive additional news and offers via e-mail.</p>
          } right onChange={value => setEmailSetting(value)} />
        </div>

        {/* Button */}
        <div className='flex gap-4 justify-center items-end p-4'>
          <AuthButton title='Sign In' onClick={() => {
            navigation("/signin")
          }} />
          <AuthButton title='Create account' submit />
        </div>
      </form>

    </div>
  );
};

export default AuthForm;