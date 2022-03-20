import type { NextPage } from "next";
import { useAuth0 } from "@auth0/auth0-react";
import LoginForm from "../components/LoginForm";
import LogoutForm from "../components/LogoutForm";

const Home: NextPage = () => {
  const { isAuthenticated } = useAuth0();

  return <div className="flex h-screen justify-center items-center">
    {isAuthenticated ? <LogoutForm /> : <LoginForm />}
  </div>
};

export default Home;
