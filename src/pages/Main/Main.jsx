import { MainWrap, TweeterList } from "./Main.styled";
import TweetListItem from "../../components/TweetListItem";
import { useEffect, useState } from "react";
import { fetchUsers } from "../../api/users/userApi";

const initialUsers = [];

const Main = () => {
  const [users, setUsers] = useState(initialUsers);

  useEffect(() => {
    (async () => {
      const usersData = await fetchUsers();
      setUsers(usersData);
    })();
  }, []);

  return (
    <MainWrap>
      <TweeterList>
        {users &&
          users.map((user) => <TweetListItem key={user.id} user={user} />)}
      </TweeterList>
    </MainWrap>
  );
};

export default Main;
