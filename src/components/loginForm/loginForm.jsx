
"use client";

import styles from './loginForm.module.css'
import { login } from "@/lib/action";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  //[state, função a ser disparada] = useFormState( função a ser disparada, state inicial);
  const [state, formAction] = useFormState(login, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
     
      <button>Login</button>
      {state?.error && <p>{state.error}</p>}
      <Link href="/register">Don&apos;t have an account? <b>Register</b></Link>
    </form>
  );
};

export default LoginForm;
