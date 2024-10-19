import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./User.css";

const User = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const getUserApi = "https://67135cca6c5f5ced66262c7e.mockapi.io//user"; 

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(`${getUserApi}/${id}`);
        setUser(data);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };
    getUser();
  }, [id]);

  return (
    <div className="user-details steam-theme">
      <h2 className="heading">{user.name}의 정보</h2>
      <div className="user-info">
        <p><strong>닉네임:</strong> {user.nickName}</p>
        <p><strong>성별:</strong> {user.gender}</p>
        <p><strong>별명:</strong> {user.alias}</p>
        <p><strong>전화번호:</strong> {user.phone}</p>
        <p><strong>주 장르:</strong> {user.gender}</p>
        <p><strong>최애 게임:</strong> {user.favorite}</p>
      </div>
    </div>
  );
};

export default User;
