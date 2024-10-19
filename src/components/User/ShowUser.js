import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../Common/Loader";
import "./ShowUser.css"; 

const ShowUser = () => {
  const showUserApi = "https://67135cca6c5f5ced66262c7e.mockapi.io//user"; 

  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handelDelete = async (id) => {
    setIsLoading(true);
    try {
      await axios.delete(`${showUserApi}/${id}`);
      setUser(user.filter((item) => item.id !== id));
    } catch (error) {
      setError("Failed to delete user.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(showUserApi);
        setUser(data);
      } catch (err) {
        setError("Error fetching users.");
      } finally {
        setIsLoading(false);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="steam-theme mt-5">
      <h2 className="list-header">친구 목록</h2>
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
      <table className="table table-striped steam-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>이름</th>
            <th>닉네임</th>
            <th>성별</th>
            <th>별명</th>
            <th>전화번호</th>
            <th>장르</th>
            <th>최애 게임</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {user?.map((item, i) => (
            <tr key={item.id}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.nickName}</td>
              <td>{item.gender}</td>
              <td>{item.alias}</td>
              <td>{item.phone}</td>
              <td>{item.genre}</td>
              <td>{item.favorite}</td>
              <td>
                <Link to={`/edit-user/${item.id}`} className="action-link">
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                </Link>
                <Link to={`/user/${item.id}`} className="action-link">
                  <i className="fa fa-eye" aria-hidden="true"></i>
                </Link>
                <i
                  className="fa fa-trash-o delete-btn"
                  aria-hidden="true"
                  onClick={() => handelDelete(item.id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowUser;
