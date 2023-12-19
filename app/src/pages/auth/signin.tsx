import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignIn() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "lee21137",
    email: "lee21137@mangot5.com",
    password: "lee21137",
  });

  const { username, email, password } = formData;

  const onChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        username,
        email,
        password,
        redirect: false,
      });
      // console.log("res: ", res);

      if (res?.error) {
        console.log("error: ", res.error);
        toast.error(res.error);
      } else {
        // toast.success("Signed in successfully");
        router.push("/dashboard");
      }
    } catch (error) {
      toast.error("Failed to sign in");
      console.log(error);
    }
  }
  return (
    <div className="container max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-gray-800">Sign In</h1>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            //make label look cooler
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-400 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={onChange}
            required={true}
          />
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-400 rounded-lg focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={onChange}
            // required={true}
          />
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-400 rounded-lg focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
          />
        </div>
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          type="submit"
        >
          Sign In
        </button>
        <ToastContainer autoClose={3000} hideProgressBar />
      </form>
    </div>
  );
}
