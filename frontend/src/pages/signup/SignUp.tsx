import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
import GenderCheckbox from "./GenderCheckbox";
import styles from "./SignUp.module.scss";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender: string) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signup(inputs);
  };

  const formFields = [
    {
      label: "Full Name",
      type: "text",
      placeholder: "John Doe",
      value: inputs.fullName,
      key: "fullName",
    },
    {
      label: "Username",
      type: "text",
      placeholder: "johndoe",
      value: inputs.username,
      key: "username",
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Enter Password",
      value: inputs.password,
      key: "password",
    },
    {
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm Password",
      value: inputs.confirmPassword,
      key: "confirmPassword",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          Sign Up <span className={styles.titleSpan}> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          {formFields.map((field) => (
            <div className={styles.formItem} key={field.key}>
              <label className={styles.label}>
                <span className={styles.labelText}>{field.label}</span>
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className={styles.input}
                value={field.value}
                onChange={(e) =>
                  setInputs({ ...inputs, [field.key]: e.target.value })
                }
              />
            </div>
          ))}

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link to={"/login"} className={styles.link}>
            Already have an account?
          </Link>

          <div>
            <button className={styles.button} disabled={loading}>
              {loading ? <span className={styles.loading}></span> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
