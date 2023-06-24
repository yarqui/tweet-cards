import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { fetchUserById, updateUserFollowers } from "../../api/users/userApi";
import { CardWrap } from "./Tweet.styled";
import {
  Avatar,
  AvatarWrap,
  Ellipse,
} from "../../components/TweetListItem/TweetListItem.styled";
import PAGE_NAMES from "../../router/paths";
import Button from "../../components/Button/Button";
import UserStats from "../../components/UserStats";
import { saveToLocalStorage } from "../../utils/localStorageOperations";
import LS_KEY_NAMES from "../../utils/LSKeyNames";

const initialUser = [];

const Tweet = ({ subscriptions, setSubscriptions }) => {
  const { id } = useParams();
  const [user, setUser] = useState(initialUser);
  const [isFollowed, setIsFollowed] = useState(false);
  let { avatar, tweets, followers } = user;

  const checkIfFollowing = (userId) => {
    return subscriptions.includes(userId);
  };

  useEffect(() => {
    (async () => {
      const userData = await fetchUserById(id);

      setIsFollowed(checkIfFollowing(id));
      setUser(userData);
    })();
  }, []);

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
