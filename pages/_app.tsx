import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }: AppProps) {
  const domain = process.env["NEXT_PUBLIC_AUTH0_DOMAIN"];
  if (!domain) {
    throw Error("AUTH0 ドメインを指定してください");
  }

  const clientId = process.env["NEXT_PUBLIC_AUTH0_CLIENT_ID"];
  if (!clientId) {
    throw Error("AUTH0 CLIENT ID を指定してください");
  }

  const redirectUri = process.env["NEXT_PUBLIC_BASE_URL"];
  if (!redirectUri) {
    throw Error("認証後リダイレクト先を指定してください");
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default MyApp;
