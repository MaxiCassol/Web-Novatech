import Link from "next/link";
import Image from "next/image";
import Clock from "@/components/login/Clock";
import style from "./page.module.css";
import frameImage from "../../../../public/navbar/novatech-logo.png";


export default function Login() {
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
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
              alt="Novatech logo"></Image>
          </Link>
        </div>
        <div className={style.lowColumn}>
          <div className={style.loginContainer}>
            <h1>Forgot password?</h1>
            <form
              // onSubmit={handleSubmit}
              className={style.formGroup}>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  // onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className={style.buttons}>
                <button type="submit">Send</button>
              </div>
              <div className={style.checkboxDiv}>
                <div className={style.checkbox}>
                  <a href="/login">Cancel</a>
                </div>
              </div>
            </form>
          </div>

          <div className={style.novatech}>
            <p>© Novatech Logistics 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
