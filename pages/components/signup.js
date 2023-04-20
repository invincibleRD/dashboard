import Link from "next/link";
import styles from "./components.module.css";

export default function SignUp() {
  return (
    <div className={styles.container}>
      <div className={styles.signUpbox}>
        <div className={`${styles.header} ${styles.paddings}`}>Sign In</div>
        <div className={`${styles.title} ${styles.paddings}`}>
          Sign in to your account
        </div>
        <div className={styles.withSign}>
          <div className={styles.google}>
            <Link href={"dashboard"}>Sign in with Google</Link>
          </div>
          <div className={styles.google}>
            <Link href={"dashboard"}>Sign in with Apple</Link>
          </div>
        </div>
        <form className={styles.formInputs}>
          <div className={styles.title}>Enter address</div>
          <input
            type="email"
            placeholder="Enter your  email"
            name="email"
            required
          ></input>
          <div className={styles.title}>Password</div>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            required
          ></input>
          <div className={`${styles.title} ${styles.forgot}`}>
            Forgot password?
          </div>

          <button
            className={styles.submitButton}
            style={{ backgroundColor: "black" }}
            type="submit"
            required
          >
            Sign In
          </button>
        </form>
        <div className={styles.register}>
          <div style={{ color: "black", fontSize: ".8rem" }}>
            Don't have an account? &nbsp;
          </div>
          <div className={`${styles.forgot}`}>Register here</div>
        </div>
        <div style={{ float: "right", paddingTop: "30px" }}>
          <Link href={"/dashboard"}> CLick to view Dashboard</Link>
        </div>
      </div>
    </div>
  );
}
