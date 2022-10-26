import { useState } from 'react';
import AuthButton from '../components/auth/AuthButton';
import AuthInput from '../components/auth/AuthInput';
import CheckBox from '../components/auth/CheckBox';
import avatar from '../images/avatar.webp';
import SignUpLogo from '../images/fulllogo.svg';
import { useNavigate } from 'react-router';
import { useDispatch } from "react-redux"
import { loginAction } from '../store/actions/AuthActions';

const SignIn = () => {

  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin")
  const [isStayLogin, setIsStayLogin] = useState(false)
  const navigation = useNavigate();
  const dispatch = useDispatch()

  const onSubmit = () => {
    if (!isStayLogin) return;
    dispatch(loginAction(email, password, navigation))
  }

  return (
    <div className="bg-signup-bg w-full h-full py-20">
      <div className="signup__wrapper w-full md:max-w-[650px] mx-auto ">
        <div className="signup__header w-full h-full py-9">
          <img className='mx-auto block' src={avatar} alt="avatar" width="75px" />
        </div>
        <div className='bg-white my-shadow-1 my-border-1 border-l-4'>
          <form action="#" onSubmit={e => {
            e.preventDefault();
            onSubmit();
          }}>
            <p className='text-center px-4 py-3 text-[1.3em] uppercase '>Signin</p>

            <div className="card__body px-4">

              <div className="flex flex-col md:flex-row gap-6 py-3">
                <AuthInput label={"Email"} type={"email"} id={"email"} setState={setEmail} fullWidth defaultValue={"admin@gmail.com"} />
              </div>

              <div className="flex flex-col md:flex-row gap-6 py-3">
                <AuthInput label={"Password"} type={"password"} id={"currentPassword"} setState={setPassword} fullWidth defaultValue={"admin"} />
              </div>

            </div>
            {/* check box */}
            <div className="terms__conditions py-4">
              <CheckBox label={<p>Stay Logged in</p>} onChange={e => setIsStayLogin(e)} />
            </div>
            {/* Button */}
            <div className='px-4 py-3'>
              <AuthButton title='Sign In' fullWidth submit />
            </div>
            <div className='px-4 py-3'>
              <AuthButton title='Sign Up' fullWidth onClick={() => { navigation("/signup") }} />
            </div>
          </form>
        </div>
        <div className="logo text-center w-full py-20">
          <img className='mx-auto block w-72 max-w-full' src={SignUpLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;