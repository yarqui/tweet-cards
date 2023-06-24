import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Avatar, Item } from "./TweetListItem.styled";
import PAGE_NAMES from "../../router/paths";

const TweetListItem = ({ user }) => {
  const { id, userName, avatar } = user;
  const navigate = useNavigate();

  const onTweetSelect = async (userId) => {
    navigate(`${PAGE_NAMES.tweet}/${userId}`);
  };

  return (
    <Item
      onClick={() => {
        onTweetSelect(id);
      }}
    >
      <Avatar src={avatar} width={60} loading="lazy" />
      <p>{userName}</p>
    </Item>
  );
};

TweetListItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default TweetListItem;
