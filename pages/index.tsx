import type { NextPage } from "next";
import { useAuth0 } from "@auth0/auth0-react";

const Home: NextPage = () => {
  const { isAuthenticated, isLoading, user, logout } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="rounded-full text-xl">Loading...</div>
      </div>
    );
  }

  if (isAuthenticated) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="mb-2 flex flex-col items-center">
          <p className="px-2 py-1">{user?.nickname}</p>
          <button
            className="rounded-full border px-2 py-1 font-medium"
            onClick={() => logout()}
          >
            ログアウト
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex h-screen items-center justify-center">
        <button
          className="rounded-full border px-2 py-1 font-medium"
          onClick={() => loginWithRedirect()}
        >
          ログイン
        </button>
      </div>
    );
  }
};

export default Home;
