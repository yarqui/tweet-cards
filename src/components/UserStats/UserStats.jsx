import PropTypes from "prop-types";
import { UserWrap } from "./UserStats.styled";

const UserStats = ({ tweets = 0, followers = 0 }) => {
  return (
    <UserWrap>
      <p>
        {tweets && tweets.toLocaleString()} <span>tweets</span>
      </p>
      <p>
        {followers && followers.toLocaleString()} <span>followers</span>
      </p>
    </UserWrap>
  );
};

UserStats.propTypes = {
  tweets: PropTypes.number,
  followers: PropTypes.number,
};

export default UserStats;
