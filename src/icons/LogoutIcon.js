import * as React from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router";
import { logout } from "../store/actions/AuthActions";

const SvgLogoutIcon = (props, onClick) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  
  return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    role="img"
    onClick={e => {
      dispatch(logout(navigation))
      onClick();
    }}
    {...props}
  >
    <g fill="#0c0c0c">
      <path
        d="M12 24a11 11 0 0 0 4.4-21.077 1 1 0 1 0-.8 1.833 9 9 0 1 1-7.2 0 1 1 0 1 0-.8-1.833A11 11 0 0 0 12 24z"
        data-original="#000000"
      />
      <path
        d="M12 10a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v8a1 1 0 0 0 1 1z"
        data-original="#000000"
      />
    </g>
  </svg>
)};

export default SvgLogoutIcon;
