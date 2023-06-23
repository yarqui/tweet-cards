import { Link, useParams } from "react-router-dom";
import PAGE_NAMES from "../../router/paths";
import { useEffect, useState } from "react";
import { fetchUserById } from "../../api/users/userApi";

const initialUser = [];

const Tweet = () => {
  const { id } = useParams();
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    (async () => {
      const userData = await fetchUserById(id);
      console.log("userData:", userData);
      setUser(userData);
    })();
  }, []);

  return (
    <>
      <Link to={PAGE_NAMES.homepage}>Back to homepage</Link>
      <p>Tweet Page</p>
      <p>{user.userName}</p>
    </>
  );
};

export default Tweet;
