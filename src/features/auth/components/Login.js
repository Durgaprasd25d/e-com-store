import React from "react";
import { increment, incrementAsync, selectCount } from "../authSlice.js";
import { useSelector,useDispatch } from "react-redux";
import mainLogo from "../../../images/logo1.jpg";
import { Link } from "react-router-dom";

export default function Login() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-sm w-full p-6 bg-white rounded shadow-lg">
        <Link to="/">
          <img
            className="mx-auto h-300 w-300"
            src={mainLogo}
            alt="Your Company"
          />
        </Link>
        <h2 className="mt-2 mb-4 text-center text-2xl font-bold text-gray-900">
          Sign in to your account
        </h2>
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              className="block w-full px-4 py-2 bg-indigo-600 rounded-md text-white font-semibold shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link to="/signup" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Signup here
          </Link>
        </p>
      </div>
    </div>
  );
}
