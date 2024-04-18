import { Button, Input, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const { logIn, logInWithGoogle, logInWithGithub } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    setRegisterError("");
    setSuccess("");

    logIn(email, password)
      .then((result) => {
        setSuccess("Logged Successfully");
        toast.success("Logged Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setRegisterError("Wrong Password");
        toast.error("Wrong Password");
      });
  };

  const handleGoogleLogIn = () => {
    logInWithGoogle()
      .then((result) => {
        setSuccess("Logged Successfully");
        toast.success("Logged Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setRegisterError("Wrong Password");
        toast.error("Wrong Password");
      });
  };

  const handleGithubLogIn = () => {
    logInWithGithub()
      .then((result) => {
        setSuccess("Logged Successfully");
        toast.success("Logged Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setRegisterError("Wrong Password");
        toast.error("Wrong Password");
      });
  };

  return (
    <div className="max-w-[1200px] mx-auto border-t">
      <Helmet>
        <title>Nestify Realty | Login</title>
      </Helmet>
      <div
        className="px-10 py-16"
        data-aos="zoom-in-down"
        data-aos-duration="1500"
      >
        <Typography variant="h4" color="blue-gray" className="text-center">
          LogIn
        </Typography>
        <Typography color="gray" className="mt-1 text-center font-normal">
          Nice to meet you again! Enter your details to Login.
        </Typography>
        <form onSubmit={handleLogIn} className="mt-8 mb-2 sm:w-96 mx-auto">
          <div className="mb-1 flex flex-col gap-6">
            <Input size="lg" name="email" label="Email" type="email" required />
            <div className="relative flex">
              <Input
                size="lg"
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                required
              />
              <span
                className="cursor-pointer absolute right-0 top-0 py-[14px] px-4 rounded-r-md bg-[#eee]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          {registerError && (
            <p className="text-red-500 text-lg py-3">{registerError}</p>
          )}
          {success && <p className="text-green-500 text-lg py-3">{success}</p>}
          <Button type="submit" className="mt-6" fullWidth>
            Log In
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <Link to="/register" className="font-medium text-gray-900">
              Register
            </Link>
          </Typography>
        </form>
        <div className="flex gap-4 justify-center lg:w-[385px] mx-auto mt-10">
          <Button
            onClick={handleGoogleLogIn}
            size="lg"
            variant="outlined"
            className="flex gap-2 items-center"
          >
            Login with
            <FaGoogle className="text-xl" />
          </Button>
          <Button
            onClick={handleGithubLogIn}
            size="lg"
            variant="outlined"
            className="flex gap-2 items-center"
          >
            Login with
            <FaGithub className="text-xl" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
