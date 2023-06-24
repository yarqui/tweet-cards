import { MainWrap, TweeterList } from "./Main.styled";
import TweetListItem from "../../components/TweetListItem";
import { useEffect, useState } from "react";
import { fetchUsers } from "../../api/users/userApi";
import Button from "../../components/Button/Button";

const initialUsers = [];
const initialPageNumber = 1;
const usersPerPage = 3;

const Main = () => {
  const [users, setUsers] = useState(initialUsers);
  const [currentPageNumber, setCurrentPageNumber] = useState(initialPageNumber);

  useEffect(() => {
    const fetchUsersData = async () => {
      const startIndex = (currentPageNumber - 1) * usersPerPage;
      const endIndex = startIndex + usersPerPage;
      const usersData = await fetchUsers();
      const slicedUsers = usersData.slice(startIndex, endIndex);

      setUsers(slicedUsers);
    };

    fetchUsersData();
  }, []);

  useEffect(() => {
    const fetchUsersData = async () => {
      const startIndex = (currentPageNumber - 1) * usersPerPage;
      const endIndex = startIndex + usersPerPage;
      const usersData = await fetchUsers();

      const slicedUsers = usersData.slice(startIndex, endIndex);

      setUsers((prevUsers) => [...prevUsers, ...slicedUsers]);
    };

    if (currentPageNumber > 1) {
      fetchUsersData();
    }
  }, [currentPageNumber]);

  return (
    <MainWrap>
      <TweeterList>
        {users &&
          users.map((user) => <TweetListItem key={user.id} user={user} />)}
      </TweeterList>
      <Button
        type="button"
        page="main"
        setCurrentPageNumber={setCurrentPageNumber}
        currentPageNumber={currentPageNumber}
      >
        Load more
      </Button>
    </MainWrap>
  );
};

export default Main;
