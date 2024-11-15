// import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Clock from "@/components/login/Clock";
import style from "./page.module.css";
import frameImage from "../../../../public/navbar/NovaTech-logo.png";

export default function Login() {
  const Email = "admin";
  const Password = "admin";

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(username, password);

  //   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //   if (!emailPattern.test(username)) {
  //     setErrorMessage("El email debe contener un carácter @ y tener un formato válido");
  //     return;
  //   }

  //   if (username === Email && password === Password) {
  //     setErrorMessage(""); 
  //     console.log("Logged in successfully");
  //   } else {
  //     setErrorMessage("Email o contraseña incorrectos"); 
  //   }
  // };

  return (
    <div className={style.login}>
      <div className={style.clock}>
        <Clock />
      </div>
      <div className={style.column}>
        <div className={style.blurBackground}>
          <Link href="./">
            <Image
              className={style.frameImage}
              src={frameImage}
              alt="Novatech logo"
            />
          </Link>
        </div>
        <div className={style.lowColumn}>
          <div className={style.loginContainer}>
            <h1>Nice to see you again!</h1>
            <form 
            // onSubmit={() => handleSubmit()} 
            className={style.formGroup}>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  // onChange={(e) => setUsername(e.target.value)}
                  // value={username}
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  // onChange={(e) => setPassword(e.target.value)}
                  // value={password}
                />
              </div>
              <div className={style.buttons}>
                <button type="submit">Sign in</button>
              </div>
              <div className={style.checkboxDiv}>
                <div className={style.checkbox}>
                  <label className={style.switch}>
                    <input type="checkbox" />
                    <span className={style.slider}></span>
                  </label>
                  <label htmlFor="rememberMe">Remember Me</label>
                </div>
                <div className={style.forgot}>
                  <Link href="/recover">Forgot Password?</Link>
                </div>
              </div>
            </form>
            {/* {errorMessage && ( */}
              {/* <p className={style.errorMessage}>{errorMessage}</p> */}
            {/* )} */}
          </div>
          <div className={style.Novatech}>
            <p>© Novatech Logistics 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
