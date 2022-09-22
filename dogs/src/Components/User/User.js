import React from "react";
import { Route, Routes } from "react-router-dom";
import UserHeader from "./UserHeader";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route to="/" element={<Feed />} />
        <Route to="postar" element={<UserPhotoPost />} />
        <Route to="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
