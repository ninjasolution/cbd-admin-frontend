import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

const AuthInput = ({ label, type, icon, id, fullWidth, setState, value }) => {
  return (
    <div className={`w-full ${!fullWidth && "md:w-1/2"}`}>
      {icon ? (
        <div className="flex flex-col">
          <label htmlFor={id} className="capitalize">
            {label}
          </label>
          <div className="flex items-center">
            <input
              type={type}
              id={id}
              name={id}
              onChange={e => setState(e.target.value)}
              defaultValue={value}
              className="border border-r-0 border-[#bfc51d] px-3 py-1 focus:outline-none focus:ring  focus:ring-[#e4eb4185] w-full"
              placeholder={` ${"Enter " + label}`}
              required
            />
            <div className="border  border-[#bfc51d] flex items-center p-2 ">
              {label === "Email address" ? (
                <FaEnvelope className="text-[#837f7f]" />
              ) : null}
              {label === "Public nickname" ? (
                <FaUser className="text-[#837f7f]" />
              ) : null}
              {label === "Password" ? (
                <FaLock className="text-[#5c5959]" />
              ) : null}
              {label === "Retype password" ? (
                <FaLock className="text-[#5c5959]" />
              ) : null}
              {label === "Sponsor" ? (
                <FaUser className="text-[#837f7f]" />
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <>
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            name={id}
            defaultValue={value}
            id={id}
            onChange={e => setState(e.target.value)}
            className="border w-full border-[#bfc51d] px-3 py-1 focus:outline-none focus:ring  focus:ring-[#e4eb4185]"
            placeholder={`Enter ${label}`}
            required
          />
        </>
      )}
    </div>
  );
};

export default AuthInput;
