import SignUpForm from '../components/auth/AuthForm';
import avatar from '../images/avatar.webp';
import AuthLogo from '../images/fulllogo.svg';

const SignUp = () => {
  return (
    <div className="bg-signup-bg w-full h-full">
      <div className="signup__wrapper w-full md:max-w-[650px] mx-auto ">
        <div className="signup__header w-full h-full py-9">
          <img className='mx-auto block' src={avatar} alt="avatar" width="75px" />
        </div>
        <SignUpForm />
        <div className="logo text-center w-full py-10">
          <img className='mx-auto block w-72 max-w-full' src={AuthLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;