import type { NextPage } from "next";
import { useUser } from "@auth0/nextjs-auth0";

const Home: NextPage = () => {
  const { user } = useUser();

  if (user) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-2">
        <div className="rounded-lg border p-4">
          <table>
            <tbody>
              <tr>
                <td className="p-2">ユーザー名</td>
                <td className="p-2">{user.nickname}</td>
              </tr>
              <tr>
                <td className="p-2">メールアドレス</td>
                <td className="p-2">{user.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="rounded-full border bg-gray-50 px-4 py-2 font-medium">
          <a href="/api/auth/logout">ログアウト</a>
        </button>
      </div>
    );
  }
  return (
    <div className="flex h-screen items-center justify-center">
      <button className="rounded-full border bg-blue-400 px-4 py-2 font-medium text-white">
        <a href="/api/auth/login">ログイン</a>
      </button>
    </div>
  );
};

export default Home;
