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
import useTogglePassword from "@/hooks/useTogglePassword";
import { Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  useChangeTitle("ClientFlow | Login");
  const { showPass, icon, handleTogglePassword } = useTogglePassword();

  return (
    <>
      <div className="min-h-[100vh] flex items-center justify-center">
        <Card className="max-w-full w-[800px]">
          <CardHeader>
            <CardTitle className="sm:text-3xl text-xl font-bold">
              Login to your account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="flex-col">
              <div>
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
            <Button className="w-full">Login</Button>
            <Separator className="mt-4 mb-2" />
            <p>
              Don't have an account?{" "}
              <Link className="underline font-bold" to="/signup">
                Signup
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default LoginPage;
