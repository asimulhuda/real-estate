import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="px-10 py-16">
        <Typography variant="h4" color="blue-gray" className="text-center">
          Register
        </Typography>
        <Typography color="gray" className="mt-1 text-center font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 sm:w-96 mx-auto">
          <div className="mb-1 flex flex-col gap-6">
            <Input size="lg" label="Name" type="text" required />
            <Input size="lg" label="Email" type="email" required />
            <Input size="lg" label="Photo URL" type="url" required />
            <Input size="lg" label="Password" type="password" required />
          </div>
          <Checkbox
            required
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="mt-6" fullWidth>
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-gray-900">
              Login
            </Link>
          </Typography>
        </form>
      </div>
    </div>
  );
};

export default Register;
