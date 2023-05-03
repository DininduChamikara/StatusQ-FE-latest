import Avatar from "./Avatar";

// ----------------------------------------------------------------------

export default function MyAvatar({ imgUrl, ...other }) {
  return (
    <Avatar src={imgUrl ? imgUrl : ""} alt="profile iMAGE" {...other}></Avatar>
  );
}
