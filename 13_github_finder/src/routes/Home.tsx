import Search from "../components/Search";
import User from "../components/User";
import Errors from "../components/Errors";
import Loader from "../components/Loader";

import { useState } from "react";

import { UserProps } from "../types/user";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [errors, setErrors] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadUser = async (username: string) => {
    setIsLoading(true);
    setErrors(false);
    setUser(null);

    const res = await fetch(`https://api.github.com/users/${username}`);

    const data = await res.json();

    if (res.status === 404) {
      setErrors(true);
      setIsLoading(false);
      return;
    }

    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
    setIsLoading(false);
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {isLoading && <Loader />}
      {user && <User {...user} />}
      {errors && <Errors />}
    </div>
  );
};

export default Home;
