import { Item, TweeterLink } from "./TweeterItem.styled";

const CardItem = ({ user }) => {
  const { userName, avatar } = user;
  return (
    <Item>
      <img src={avatar} width={60} loading="lazy" />
      <TweeterLink>{userName}</TweeterLink>
    </Item>
  );
};

export default CardItem;
