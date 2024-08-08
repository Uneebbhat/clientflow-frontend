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
import useChangeTitle from "@/hooks/useChangeTitle";

const ForgotPasswordPage = () => {
  useChangeTitle("ClientFlow | Get an email to reset your password");
  return (
    <>
      <div className="min-h-[100vh] flex items-center justify-center">
        <Card className="max-w-full w-[800px]">
          <CardHeader>
            <CardTitle className="sm:text-3xl text-xl font-bold">
              Forgot password
            </CardTitle>
            <CardDescription>
              Enter your email to reset your password
            </CardDescription>
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
                    // onChange={handleInputChange}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col">
            <Button
              className="w-full"
              //   onClick={handleSubmitForm}
              //   disabled={
              //     loading || !formData.email || formData.password.length < 8
              //   }
            >
              {/* {loading ? "Please wait..." : "Send email"} */}
              Send email
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
