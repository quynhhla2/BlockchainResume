import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

//INTERNALIMPORT
import Style from "./loginAndSignUp.module.css";
import images from "../img";
import { loginUser, resetCodes } from "../features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const [activeBtn, setActiveBtn] = useState(1);
  const loginCode = useSelector((state) => state.auth.loginCode);
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onChange",
    criteriaMode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  const socialImage = [
    {
      social: images.facebook,
      name: "Continue with Facebook",
    },
    {
      social: images.twitter,
      name: "Continue with twitter",
    },
    {
      social: images.facebook,
      name: "Continue with Facebook",
    },
  ];

  useEffect(() => {
    const handleLoginSuccess = () => {
      toast.success("User login successfully", { autoClose: 1500 });
      setTimeout(() => {
        router.push("/");
      }, 2000);
    };

    if (loginCode === 1)
      handleLoginSuccess();
    else if (loginCode === 2)
      toast.error("Something went wrong", { autoClose: 2000 });
    dispatch(resetCodes());
  }, [dispatch, loginCode]);
  return (
    <div className={Style.user}>
      <div className={Style.user_box}>
        <div className={Style.user_box_input}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={Style.user_box_input_box}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                {...register("email", { required: "Vui lòng nhập email" })}
              />
              {errors.email && <p className={Style.error_message}>{errors.email.message}</p>}
            </div>

            <div className={Style.user_box_input_box}>
              <label>Mật khẩu</label>
              <input
                type="password"
                name="password"
                {...register("password", { required: "Vui lòng nhập mật khẩu" })}
              />
              {errors.password && <p className={Style.error_message}>{errors.password.message}</p>}
            </div>

            <button
              type="submit"
              className={Style.button}
            >
              Đăng nhập
            </button>
          </form>
        </div>
        <p className={Style.user_box_or}>HOẶC</p>

        <div className={Style.user_box_social}>
          {socialImage.map((el, i) => (
            <div
              key={i + 1}
              onClick={() => setActiveBtn(i + 1)}
              className={`${Style.user_box_social_item} ${activeBtn == i + 1 ? Style.active : ""
                }`}
            >
              <Image
                src={el.social}
                alt={el.name}
                width={30}
                height={30}
                className={Style.user_box_social_item_img}
              />
              <p>
                <span>{el.name}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;