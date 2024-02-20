import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy, MdPlace, MdOutlineTimelapse } from "react-icons/md";
import { useForm } from "react-hook-form";
import { FaSackDollar } from "react-icons/fa6";

// INTERNAL IMPORT
import Style from "./Form.module.css";
import Button from "../../components/Button/Button";

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onChange",
    criteriaMode: "all",
    defaultValues: {
      name: "",
      description: "",
      email: "",
      salary: "",
      position: "",
      exp: "",
      time: ""
    },
  });
  const onSubmit = (data) => {
    console.log("data: ", data)
    // dispatch(registerUser(data));
  };

  return (
    <div className={Style.Form}>
      <div className={Style.Form_box}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={Style.Form_box_input}>
            <label htmlFor="name">Tên công việc</label>
            <input
              type="text"
              name="name"
              className={Style.Form_box_input_userName}
              {...register("name", { required: "Vui lòng nhập tên công việc" })}
            />
            {errors.name && <p className={Style.error_message}>{errors.name.message}</p>}
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="name">Email liên hệ công việc</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <HiOutlineMail />
              </div>
              <input
                type="email"
                name="email"
                {...register("email", { required: "Vui lòng nhập email" })}
              />
            </div>

            {errors.email && <p className={Style.error_message}>{errors.email.message}</p>}
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="description">Mô tả</label>
            <textarea
              name="description"
              id=""
              cols="30"
              rows="6"
              placeholder="Mô tả về công việc trong vài từ"
              {...register("description", { required: "Vui lòng nhập mô tả" })}
            ></textarea>
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="name">Mức lương công việc</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <FaSackDollar />
              </div>
              <input
                type="number"
                name="salary"
                {...register("salary", { required: "Vui lòng nhập mức lương" })}
              />
            </div>

            {errors.salary && <p className={Style.error_message}>{errors.salary.message}</p>}
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="position">Địa điểm công việc</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdPlace />
              </div>
              <input
                type="text"
                name="position"
                {...register("position", { required: "Vui lòng nhập địa chỉ" })}
              />
            </div>

            {errors.position && <p className={Style.error_message}>{errors.position.message}</p>}
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="exp">Kinh nghiệm</label>
            <select {...register("exp", { required: "Vui lòng chọn yêu cầu kinh nghiệm" })}>
              <option value="" disabled>Lựa chọn yêu cầu kinh nghiệm</option>
              <option value="have-ex">Có</option>
              <option value="no-ex">Không</option>
            </select>

            {errors.exp && <p className={Style.error_message}>{errors.exp.message}</p>}
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="time">Hạn nộp hồ sơ</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineTimelapse />
              </div>
              <input
                type="date"
                name="time"
                {...register("time", { required: "Vui lòng nhập hạp nộp hồ sơ" })}
              />
              {errors.time && <p className={Style.error_message}>{errors.time.message}</p>}
            </div>
          </div>

          <div className={Style.Form_box_btn}>
            <Button
              btnName="Đăng bài"
              handleClick={() => { }}
              classStyle={Style.button}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
