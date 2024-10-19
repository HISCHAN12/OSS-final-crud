import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../Common/Loader";
import "./User.css"; 

const EditUser = () => {
  const [user, setUser] = useState({
    name: "",
    nickName: "",
    gender: "",
    alias: "",
    phone: "",
    genre: "",
    favorite: ""
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const getUserApi = "https://66ff48322b9aac9c997eca14.mockapi.io/api/oss/user"; 

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`${getUserApi}/${id}`);
        setUser(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    getUser();
  }, [id]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.put(`${getUserApi}/${id}`, user);
      setIsLoading(false);
      navigate("/show-user");
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="user-form steam-theme">
      <div className="heading">
        {isLoading && <Loader />}
        {error && <p>Error: {error}</p>}
        <h2>사용자 정보 수정</h2>
      </div>
      {!isLoading && (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">이름</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={user.name}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nickName" className="form-label">닉네임</label>
            <input
              type="text"
              className="form-control"
              id="nickName"
              name="nickName"
              value={user.nickName}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">성별</label>
            <input
              type="text"
              className="form-control"
              id="gender"
              name="gender"
              value={user.gender}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="alias" className="form-label">별명</label>
            <input
              type="text"
              className="form-control"
              id="alias"
              name="alias"
              value={user.alias}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">전화번호</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={user.phone}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="genre" className="form-label">주 장르</label>
            <input
              type="text"
              className="form-control"
              id="genre"
              name="genre"
              value={user.genre}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="favorite" className="form-label">최애 게임</label>
            <input
              type="text"
              className="form-control"
              id="favorite"
              name="favorite"
              value={user.favorite}
              onChange={handleInput}
            />
          </div>
          <button type="submit" className="btn btn-primary submit-btn">수정</button>
        </form>
      )}
    </div>
  );
};

export default EditUser;
