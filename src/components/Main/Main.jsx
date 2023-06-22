import { MainWrap, TweeterList } from "./Main.styled";
import users from "../../../users.json";
import TweeterItem from "../TweeterItem";

const Main = () => {
  return (
    <MainWrap>
      <TweeterList>
        {users &&
          users.map((user) => <TweeterItem key={user.id} user={user} />)}
      </TweeterList>
    </MainWrap>
  );
};

export default Main;
