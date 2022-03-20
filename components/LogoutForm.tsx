import type { FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutForm: FC = ({ }) => {
  const { user, logout } = useAuth0();

  return (
    <div className="flex flex-col gap-2">
      <div>{user?.name}</div>
      <button
        type="submit"
        className="border rounded-full px-4 py-2 font-medium focus:outline-none focus:ring"
        onClick={() => logout()}
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutForm;
