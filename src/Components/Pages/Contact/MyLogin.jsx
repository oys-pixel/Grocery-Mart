import Input, { PasswordField } from "../../Material components/Input";
import MaterialButtons from "../../Material components/Button";
import { useFormik } from "formik";
import { decryptData, encryptData } from "./Encryption";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "./Hackathone";

function MyLogin({ AonClick }) {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    const storedData = decryptData("myData") || [];
    const user = storedData.find(
      (item) => item.email === values.email && item.password === values.password
    );
    if (!user) {
      // loginForm.setFieldError("email", "Email not found ");
      toast.error("invalid credentials");
      return;
    }
    encryptData("loggedInUser", user);
    localStorage.setItem("login-sync", Date.now());
    toast.success(`Welcome back, ${user.name}!`, {
      autoClose: 3000,
      onClose: () => navigate("/", { replace: true }),
    });

    // navigate("/home", { replace: true });
  };
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });
  return (
    <div className="form">
      <h2>Login Form</h2>
      <Input
        variant="outlined"
        value={loginForm.values.email}
        onChange={loginForm.handleChange}
        onBlur={loginForm.handleBlur}
        name="email"
        className="my-input"
        label="E-mail"
      />
      {loginForm.touched.email && loginForm.errors.email && (
        <div className="text-danger mb-1">{loginForm.errors.email}</div>
      )}
      <PasswordField
        variant="outlined"
        name="password"
        value={loginForm.values.password}
        onChange={loginForm.handleChange}
        onBlur={loginForm.handleBlur}
        className="my-input"
        label="Password"
      />
      {loginForm.touched.password && loginForm.errors.password && (
        <div className="text-danger mb-1">{loginForm.errors.password}</div>
      )}

      <a href="#">Forgot Password?</a>
      <MaterialButtons
        nameOf="Login"
        onClick={loginForm.handleSubmit}
        className="mb-2"
      />
      <p>
        Not a Member?
        <a href="#" onClick={AonClick}>
          Signup now
        </a>
      </p>
    </div>
  );
}

export default MyLogin;
