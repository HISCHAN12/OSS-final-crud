import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import Loader from '../Common/Loader';
import './User.css';

const CreateUser = () => {
  const navigate = useNavigate();
  const createUserApi = "https://67135cca6c5f5ced66262c7e.mockapi.io//user";
  const { register, handleSubmit, formState: { errors }, reset } = useForm();  
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const response = await fetch(createUserApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset(); 
        navigate('/show-user');
      } else {
        throw new Error('Form submission failed!');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='user-form steam-theme'>
      <div className='heading'>
        {isLoading && <Loader />}
        {error && <p>Error: {error}</p>}
        <h2>친구 추가</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">이름</label>
          <input
            type="text"
            className="form-control"
            id="name"
            {...register("name", { required: "이름은 필수 입력 항목입니다." })}
          />
          {errors.name && <p className="error-text">{errors.name.message}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="nickName" className="form-label">닉네임</label>
          <input
            type="text"
            className="form-control"
            id="nickName"
            {...register("nickName", { required: "닉네임은 필수 입력 항목입니다." })}
          />
          {errors.nickName && <p className="error-text">{errors.nickName.message}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="gender" className="form-label">성별</label>
          <input
            type="text"
            className="form-control"
            id="gender"
            {...register("gender", { required: "성별은 필수 입력 항목입니다." })}
          />
          {errors.gender && <p className="error-text">{errors.gender.message}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="alias" className="form-label">별명</label>
          <input
            type="text"
            className="form-control"
            id="alias"
            {...register("alias")}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">전화번호</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            {...register("phone", { required: "전화번호는 필수 입력 항목입니다." })}
          />
          {errors.phone && <p className="error-text">{errors.phone.message}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="genre" className="form-label">주 장르</label>
          <input
            type="text"
            className="form-control"
            id="genre"
            {...register("genre", { required: "주 장르는 필수 입력 항목입니다." })}
          />
          {errors.genre && <p className="error-text">{errors.genre.message}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="favorite" className="form-label">최애 게임</label>
          <input
            type="text"
            className="form-control"
            id="favorite"
            {...register("favorite")}
          />
        </div>

        <button type="submit" className="btn btn-primary submit-btn">추가</button>
      </form>
    </div>
  );
};

export default CreateUser;
