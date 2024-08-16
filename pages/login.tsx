import useAuth from "@/hooks/useAuth";
import Head from "next/head";
import Image from "next/image";
import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Inputs {
  email: string;
  password: string;
}

function Login() {
  const [login, setLogin] = useState(false);
  const [guestLogin, setGuestLogin] = useState(false);
  const { signIn, signUp } = useAuth();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (guestLogin) {
      await signIn("guest@gmail.com", "guest123");
      setValue("email", "guest@gmail.com");
      setValue("password", "guest123");
    } else if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };

  return (
    <div
      className="relative flex h-screen w-screen flex-col bg-black md:items-center
     md:justify-center md:bg-transparent"
    >
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="/logo.jpeg"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
        alt="img"
      />

      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-4 rounded bg-black/75 py-10 px-6
       md:mt-0 md:max-wd md:px-14"
      >
        <h1 className="text-4xl font-semibold">Sign in</h1>
        <button
          className="w-full rounded bg-[#e50914] py-3 font-semibold"
          onClick={() => {
            // setLogin(true);
            setGuestLogin(true);
          }}
        >
          Sign In As Guest
        </button>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="input"
              {...register("email", { required: login })}
            />

            {errors.email && login && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Please enter a valid email.
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="input"
              {...register("password", { required: login })}
            />
            {errors.password && login && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
          </label>
        </div>
        <button
          className="w-full rounded bg-[#e50914] py-3 font-semibold"
          onClick={() => setLogin(true)}
        >
          Sign In
        </button>

        <div className="text-[gray]">
          New to Netflix?{" "}
          <button
            type="submit"
            className="text-white hover:underline"
            onClick={() => setLogin(false)}
          >
            Sign up now
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
