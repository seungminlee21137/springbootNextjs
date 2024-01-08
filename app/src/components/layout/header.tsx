import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Header = () => {
  const { data: session } = useSession();

  const handleSignout = () => {
    signOut();
  };

  // if(!session) {
  //   console.log("loading...");
  // } else{
  //     console.log(session?.user?.email);
  // }

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600">
      <Link href="/" className="text-2xl font-bold text-gray-800">
        Springboot with NEXTJS
      </Link>

      <div className="flex items-center space-x-4">
        {session?.user?.email ? (
          <Link
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            href="/dashboard"
          >
            Dashboard
          </Link>
        ) : (
          <>
            <Link
              href="/auth/signin"
              className="px-4 py-2 font-semibold text-blue-500 bg-white border border-blue-500 rounded hover:bg-gray-100 hover:text-blue-600 hover:border-transparent"
            >
              Log in
            </Link>
            <Link
              href="/auth/signup"
              className="px-4 py-2 font-bold text-white rounded bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:shadow-outline"
            >
              Sign up
            </Link>
          </>
        )}
        {session?.user?.email && (
          <button
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
            onClick={handleSignout}
          >
            Sign out
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
