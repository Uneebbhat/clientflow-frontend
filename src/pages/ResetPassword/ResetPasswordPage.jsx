import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import useTogglePassword from "@/hooks/useTogglePassword";
import { Eye, EyeOff } from "lucide-react";
import useChangeTitle from "@/hooks/useChangeTitle";

const ResetPasswordPage = () => {
  useChangeTitle("ClientFLow | Reset your password");
  const { showPass, icon, handleTogglePassword } = useTogglePassword();

  return (
    <>
      <div className="min-h-[100vh] flex items-center justify-center">
        <Card className="max-w-full w-[800px]">
          <CardHeader>
            <CardTitle className="sm:text-3xl text-xl font-bold">
              Reset your password
            </CardTitle>
            <CardDescription>Enter new password</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex-col">
              <div>
                <div className="flex-1 relative">
                  <Label htmlFor="new-password">New Password:</Label>
                  <Input
                    name="new-password"
                    id="new-password"
                    type={showPass ? "password" : "text"}
                    placeholder="New password"
                    // onChange={handleInputChange}
                  />
                  <div className="absolute top-8 right-2 cursor-pointer">
                    {icon ? (
                      <Eye size={20} onClick={handleTogglePassword} />
                    ) : (
                      <EyeOff size={20} onClick={handleTogglePassword} />
                    )}
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col">
            <Button
              className="w-full"
              //   onClick={handleSubmitForm}
              //   disabled={}
            >
              {/* {loading ? "Please wait..." : "Send email"} */}
              Reset password
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default ResetPasswordPage;
