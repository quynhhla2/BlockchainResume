import React, { useState, useMemo, useCallback, useContext } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

// INTERNAL IMPORT
import Style from "../styles/uploadJob.module.css";
import images from "../img";
import Form from "../accountPage/UploadJobForm/Form";

const uploadJob = () => {
    const [fileUrl, setFireUrl] = useState(null);

    const onDrop = useCallback(async (acceptedFile) => {
        setFireUrl(acceptedFile[0]);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: "image/*",
        maxSize: 5000000,
    });

    return (
        <div className={Style.account}>
            <div className={Style.account_info}>
                <h1>Đăng bài tuyển dụng</h1>
                <p>
                    Cập nhật thông tin tuyển dụng của bạn tại đây.
                </p>
            </div>

            <div className={Style.account_box}>
                <div className={Style.account_box_form}>
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default uploadJob;
