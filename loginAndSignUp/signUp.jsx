import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

//INTERNALIMPORT
import Style from "./loginAndSignUp.module.css";
import images from "../img";
import { registerUser, resetCodes } from "../features/auth/authSlice";

const SignUp = () => {
    const dispatch = useDispatch();
    const router = useRouter()
    const [activeBtn, setActiveBtn] = useState(1);
    const registerCode = useSelector((state) => state.auth.registerCode);
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: "onChange",
        criteriaMode: "all",
        defaultValues: {
            name: "",
            role: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
    });
    const password = watch("password", "");

    const onSubmit = (data) => {
        console.log("data: ", data)
        dispatch(registerUser(data));
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
        const handleRegisterSuccess = () => {
            toast.success("User register successfully", { autoClose: 1500 });
            setTimeout(() => {
                router.push("/login");
            }, 2000);
        };

        if (registerCode === 1)
            handleRegisterSuccess();
        else if (registerCode === 2)
            toast.error("Something went wrong", { autoClose: 2000 });
        dispatch(resetCodes());
    }, [dispatch, registerCode]);
    return (
        <div className={Style.user}>
            <div className={Style.user_box}>
                <div className={Style.user_box_input}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={Style.user_box_input_box}>
                            <label>Tên</label>
                            <input
                                type="name"
                                name="name"
                                {...register("name", {
                                    required: "Vui lòng nhập tên", pattern: {
                                        value: /^[a-zA-Z\sÀ-ỹ]+$/i,
                                        message: "Tên không hợp lệ"
                                    }
                                })}
                            />
                            {errors.name && <p className={Style.error_message}>{errors.name.message}</p>}
                        </div>

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
                            <label>Vai trò</label>
                            <select {...register("role", { required: "Vui lòng chọn vai trò" })}>
                                <option value="" disabled>None</option>
                                <option value="company">Doanh nghiệp</option>
                                <option value="applicant">Ứng viên tuyển dụng</option>
                            </select>
                            {errors.role && <p className={Style.error_message}>{errors.role.message}</p>}
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

                        <div className={Style.user_box_input_box}>
                            <label>Xác nhận mật khẩu</label>
                            <input
                                type="password"
                                name="password"
                                {...register("confirmPassword", {
                                    required: "Vui lòng xác nhận mật khẩu",
                                    validate: value => value === password || "Mật khẩu không khớp"
                                })}
                            />
                            {errors.confirmPassword && <p className={Style.error_message}>{errors.confirmPassword.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className={Style.button}
                        >
                            Đăng ký
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

export default SignUp;