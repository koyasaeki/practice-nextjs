import type { FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginForm: FC = ({ }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      type="submit"
      className="border rounded-full px-4 py-2 font-medium focus:outline-none focus:ring"
      onClick={() => loginWithRedirect()}
    >
      Login with Auth0
    </button>
  );
};

export default LoginForm;
