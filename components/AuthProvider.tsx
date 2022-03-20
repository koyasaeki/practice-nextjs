import type { FC } from "react";
import { Auth0Provider } from "@auth0/auth0-react";

const AuthProvider: FC = ({ children }) => {
  const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
  const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;
  const redirectUri = process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI;

  if (!domain) return <div>Auth0 のドメインが指定されていません。</div>;
  if (!clientId) return <div>Auth0 のクライアントが指定されていません。</div>;
  if (!clientId) return <div>認証後のリダイレクト URI が指定されていません。</div>;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
