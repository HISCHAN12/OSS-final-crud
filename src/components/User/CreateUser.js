import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Loader from '../Common/Loader';
import './User.css';

const CreateUser = () => {
  const navigate = useNavigate();
  const createUserApi = "https://67135cca6c5f5ced66262c7e.mockapi.io//user";
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    nickName: "",
    gender: "",
    alias: "",
    phone: "",
    genre: "",
    favorite: ""
  });

  const handelInput = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch(createUserApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        setUser({
          name: "",
          nickName: "",
          gender: "",
          alias: "",
          phone: "",
          genre: "",
          favorite: ""
        });
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
      <form onSubmit={handelSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">이름</label>
          <input type="text" className="form-control" id="name" name="name" value={user.name} onChange={handelInput} />
        </div>
        <div className="mb-3">
          <label htmlFor="nickName" className="form-label">닉네임</label>
          <input type="text" className="form-control" id="nickName" name="nickName" value={user.nickName} onChange={handelInput} />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">성별</label>
          <input type="text" className="form-control" id="gender" name="gender" value={user.gender} onChange={handelInput} />
        </div>
        <div className="mb-3">
          <label htmlFor="alias" className="form-label">별명</label>
          <input type="text" className="form-control" id="alias" name="alias" value={user.alias} onChange={handelInput} />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">전화번호</label>
          <input type="text" className="form-control" id="phone" name="phone" value={user.phone} onChange={handelInput} />
        </div>
        <div className="mb-3">
          <label htmlFor="genre" className="form-label">주 장르</label>
          <input type="text" className="form-control" id="genre" name="genre" value={user.genre} onChange={handelInput} />
        </div>
        <div className="mb-3">
          <label htmlFor="favorite" className="form-label">최애 게임</label>
          <input type="text" className="form-control" id="favorite" name="favorite" value={user.favorite} onChange={handelInput} />
        </div>
        <button type="submit" className="btn btn-primary submit-btn">추가</button>
      </form>
    </div>
  );
};

export default CreateUser;
