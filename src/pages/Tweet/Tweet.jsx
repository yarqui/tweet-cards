import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchUserById, updateUserFollowers } from "../../api/users/userApi";
import Button from "../../components/Button/Button";
import UserStats from "../../components/UserStats";
import { saveToLocalStorage } from "../../utils/localStorageOperations";
import PAGE_NAMES from "../../router/paths";
import LS_KEY_NAMES from "../../utils/LSKeyNames";
import { CardWrap } from "./Tweet.styled";
import {
  Avatar,
  AvatarWrap,
  Ellipse,
} from "../../components/TweetListItem/TweetListItem.styled";

const initialUser = [];

const Tweet = ({ subscriptions, setSubscriptions }) => {
  const { id } = useParams();
  const [user, setUser] = useState(initialUser);
  const [isFollowed, setIsFollowed] = useState(false);
  let { avatar, tweets, followers } = user;

  useEffect(() => {
    (async () => {
      const checkIfFollowing = (userId) => {
        return subscriptions.includes(userId);
      };

      const userData = await fetchUserById(id);

      setIsFollowed(checkIfFollowing(id));
      setUser(userData);
    })();
  }, [subscriptions, id]);

  const checkSubscription = async (id) => {
    const index = subscriptions.indexOf(id);

    if (index >= 0) {
      const updatedSubs = subscriptions.filter((sub) => sub !== id);
      setIsFollowed(!isFollowed);
      setSubscriptions(updatedSubs);
      saveToLocalStorage(LS_KEY_NAMES.subscriptions, updatedSubs);

      const updatedUser = await updateUserFollowers(id, (followers -= 1));
      setUser(updatedUser);

      return;
    }

    const updatedSubs = [...subscriptions, id];
    setIsFollowed(!isFollowed);
    setSubscriptions(updatedSubs);
    saveToLocalStorage(LS_KEY_NAMES.subscriptions, updatedSubs);

    const updatedUser = await updateUserFollowers(id, (followers += 1));
    setUser(updatedUser);
  };

  return (
    <>
      <Link to={PAGE_NAMES.homepage}>Back to homepage</Link>
      <CardWrap>
        <AvatarWrap>
          <Ellipse />
          <Avatar src={avatar} width={62} loading="lazy" />
        </AvatarWrap>
        <UserStats tweets={tweets} followers={followers} />
        <Button
          page="tweet"
          userId={id}
          isFollowed={isFollowed}
          setIsFollowed={setIsFollowed}
          setSubscriptions={setSubscriptions}
          subscriptions={subscriptions}
          followers={followers}
          checkSubscription={checkSubscription}
        />
      </CardWrap>
    </>
  );
};

Tweet.propTypes = {
  subscriptions: PropTypes.array.isRequired,
  setSubscriptions: PropTypes.func.isRequired,
};

export default Tweet;
