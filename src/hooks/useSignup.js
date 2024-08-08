import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";

const useSignup = () => {
  const [formData, setFormData] = useState({
    profilePic: null,
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, profilePic: e.target.files[0] });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const signupForm = new FormData();
      signupForm.append("profilePic", formData.profilePic);
      signupForm.append("name", formData.name);
      signupForm.append("email", formData.email);
      signupForm.append("password", formData.password);

      const result = await axios.post("/api/v1/signup", signupForm);

      setFormData(result.data.data);
      console.log(result.data.data);

      toast({
        title: "Account created successfully",
      });

      // console.log(formData);
      setLoading(false);
    } catch (e) {
      console.log("Error: ", e);
      setLoading(false);
    }
  };

  return {
    handleInputChange,
    handleImageChange,
    handleSubmitForm,
    formData,
    loading,
  };
};

export default useSignup;
