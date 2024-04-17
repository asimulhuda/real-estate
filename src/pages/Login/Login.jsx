import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="max-w-[1200px] mx-auto border-t">
      <div className="px-10 py-16">
        <Typography variant="h4" color="blue-gray" className="text-center">
          LogIn
        </Typography>
        <Typography color="gray" className="mt-1 text-center font-normal">
          Nice to meet you again! Enter your details to Login.
        </Typography>
        <form className="mt-8 mb-2 sm:w-96 mx-auto">
          <div className="mb-1 flex flex-col gap-6">
            <Input size="lg" label="Email" type="email" required />
            <Input size="lg" label="Password" type="password" required />
          </div>

          <Button type="submit" className="mt-6" fullWidth>
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <Link to="/register" className="font-medium text-gray-900">
              Register
            </Link>
          </Typography>
        </form>
      </div>
    </div>
  );
};

export default Login;
