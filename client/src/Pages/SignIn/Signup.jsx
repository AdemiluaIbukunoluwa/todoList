import React, { useEffect, useState } from "react";
import { Button } from "../../Components/Button/button";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../../Utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import { encrypt, decrypt } from "../../Utils/encryption";
import PageContainer from "../PageContainer/pagecontainer";

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: null,
    email: null,
    password: null,
    confirmPassword: null,
  });

  const signup = async (e) => {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      toast.error("Password's do not match");
      return;
    }
    await axiosInstance
      .post("/createuser", {
        name: data.name,
        email: data.email,
        password: encrypt(data.password),
      })
      .then((res) => {
        toast.success("Signup successful");
        // Redirect after a short delay
        setTimeout(() => {
          navigate("/signin");
        }, 1000);
      })
      .catch((err) => {
        toast.error("Signup failed");
        console.log(err);
      });
  };
  return (
    <PageContainer signedIn={false}>
      <div className="md:w-1/3 h-3/4 sm:w-1/4 bg-white text-center justify-center m-auto mt-10 rounded-lg p-7">
        <h2 className="text-3xl font-semibold">Sign up</h2>
        <form className="mt-3">
          <input
            type="text"
            placeholder="Username"
            required
            className="w-full h-10 rounded-lg p-2 mt-5 border-2"
            onChange={(e) =>
              setData({ ...data, name: e.target.value.toLowerCase() })
            }
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full h-10 rounded-lg p-2 mt-5 border-2"
            onChange={(e) =>
              setData({ ...data, email: e.target.value.toLocaleLowerCase() })
            }
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full h-10 rounded-lg p-2 mt-5 border-2"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full h-10 rounded-lg p-2 mt-5 mb-7 border-2"
            required
            onChange={(e) =>
              setData({ ...data, confirmPassword: e.target.value })
            }
          />
          <Button
            onClick={signup}
            content="Sign up"
            rounded={true}
            transition={false}
            className="mt-5 border border-blue-500"
          />
          <span className="text-sm mt-2">
            Already have an account?{" "}
            <Link
              className="text-blue-500 font-bold hover:underline"
              to={"/signin"}
            >
              Log in
            </Link>
          </span>
        </form>
      </div>
    </PageContainer>
  );
};

export default Signup;
