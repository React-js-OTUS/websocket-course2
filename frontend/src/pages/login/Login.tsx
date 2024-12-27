import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import styles from "./Login.module.scss";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const fields = [
    {
      label: "Username",
      type: "text",
      placeholder: "Enter your username",
      value: username,
      onChange: setUsername,
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      value: password,
      onChange: setPassword,
    },
  ];
  const { loading, login } = useLogin();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          Login
          <span className={styles.titleSpan}> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          {fields.map((field, index) => (
            <div key={index} className={styles.formItem}>
              <label className={styles.label}>
                <span className={styles.labelText}>{field.label}</span>
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className={styles.input}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              />
            </div>
          ))}

          <Link to="/signup" className={styles.link}>
            {"Don't"} have an account?
          </Link>

          <button className={styles.button} disabled={loading}>
            {loading ? <span className={styles.loading}></span> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
