"use client";

import { register } from "@/lib/action";
import { useFormState } from "react-dom";
import styles from "./registerForm.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  //[state, função a ser disparada] = useFormState( função a ser disparada, state inicial);
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="email" placeholder="email" name="email" />
      <input type="text" placeholder="img" name="img" />
      <input type="password" placeholder="password" name="password" />
      <input
        type="password"
        placeholder="confirm your password"
        name="passwordRepeat"
      />
      <button>Register</button>
      {/*if state has an error, show it here */}
      {state?.error && <p>{state.error}</p>}
      <Link href="/login">Have an account? <b>Login</b></Link>
    </form>
  );
};

export default RegisterForm;
