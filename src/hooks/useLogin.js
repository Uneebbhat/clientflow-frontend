import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const useLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(formData);
      setLoading(false);
      toast({
        title: "Login successfully",
      });
    } catch (e) {
      setLoading(false);
      console.log("Error: ", e);
    }
  };

  return { formData, handleSubmitForm, handleInputChange, loading };
};

export default useLogin;
