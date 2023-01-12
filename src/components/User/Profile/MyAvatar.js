// hooks
// import useAuth from "../hooks/useAuth";
// utils
// import createAvatar from "../utils/createAvatar";
import { useSelector } from "react-redux";
import Avatar from "./Avatar";

// ----------------------------------------------------------------------

export default function MyAvatar({imgUrl, ...other }) {

  // const { imgUrl } = useSelector((state) => state.login);

  // const { user } = useAuth();

  return (
    <Avatar
      // src={user?.photoURL}
      src={imgUrl ? imgUrl : ""}
      alt="profile iMAGE"
      // color={user?.photoURL ? "default" : createAvatar(user?.displayName).color}
      {...other}
    >
    </Avatar>
  );
}
