import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import useChangeTitle from "@/hooks/useChangeTitle";
import { Eye, EyeOff } from "lucide-react";
import useTogglePassword from "@/hooks/useTogglePassword";

const SignupPage = () => {
  useChangeTitle("ClientFlow | Create an account");
  const { showPass, icon, handleTogglePassword } = useTogglePassword();

  return (
    <>
      <div className="min-h-[100vh] flex items-center justify-center py-4">
        <Card className="max-w-full w-[800px]">
          <CardHeader>
            <CardTitle className="sm:text-3xl text-xl font-bold">
              Create your account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="flex-col">
              <div>
                <Label htmlFor="profilePic">Profile picture:</Label>
                <Input name="profilePic" id="profilePic" type="file" />
              </div>

              <div className="name-email flex flex-col sm:flex-row gap-2 mt-2">
                <div className="flex-1">
                  <Label htmlFor="name">Name:</Label>
                  <Input
                    name="name"
                    id="name"
                    type="text"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex-1">
                  <Label htmlFor="email">Email:</Label>
                  <Input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="mt-2">
                <div className="flex-1 relative">
                  <Label htmlFor="password">Password:</Label>
                  <Input
                    name="password"
                    id="password"
                    type={showPass ? "password" : "text"}
                    placeholder="********"
                  />
                  <div className="absolute top-8 right-2 cursor-pointer">
                    {icon ? (
                      <Eye size={20} onClick={handleTogglePassword} />
                    ) : (
                      <EyeOff size={20} onClick={handleTogglePassword} />
                    )}
                  </div>
                </div>
                <div className="mt-2">
                  <Link
                    className="text-slate-950 font-medium text-[14px] underline"
                    to="/forgot-password"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col">
            <Button className="w-full">Register</Button>
            <Separator className="mt-4 mb-2" />
            <p>
              Already have an account?{" "}
              <Link className="underline font-bold" to="/login">
                Login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default SignupPage;
