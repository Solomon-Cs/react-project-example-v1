import React from "react";
import "../Header/Navbar.js";
import "./Home.css";
import TaskForm from "../TaskForm/TaskForm.js";
import TaskCard from "../TaskCard/TaskCard.js";
import TaskHead from "../TaskHead/TaskHead.js";

import fImage from "../Image/memo.png";
import bImage from "../Image/iphone.jpg";
import sImage from "../Image/basket.png";

function Home() {
  return (
    <>
      <div className="home_container1">
        <TaskForm />
      </div>
      <div className="home_container2">
        <TaskHead taskName="Front End" iconImage = {fImage} />
        <TaskHead taskName="Back End" iconImage = {bImage} />
        <TaskHead taskName="Full Stack" iconImage = {sImage} />
      </div>
    </>
  );
}

export default Home;
