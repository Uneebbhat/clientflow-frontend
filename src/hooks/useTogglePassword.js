import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const useTogglePassword = () => {
  const [showPass, setShowPass] = useState("password");
  const [icon, setIcon] = useState(Eye);

  const handleTogglePassword = () => {
    setShowPass(!showPass);
    setIcon(!icon);
  };

  return { showPass, icon, handleTogglePassword };
};

export default useTogglePassword;
