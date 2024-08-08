import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";

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

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await axios.post("/api/v1/login", formData);
      console.log(result.data.data);
      setFormData(result.data.data);

      setLoading(false);
      toast({
        title: "Login successfully",
      });
    } catch (e) {
      setLoading(false);
    }
  };

  return { formData, handleSubmitForm, handleInputChange, loading };
};

export default useLogin;
