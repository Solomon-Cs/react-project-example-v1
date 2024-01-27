import React, { useEffect } from "react";
import { useState } from "react";
import "../Header/Navbar.js";
import "./Home.css";
import TaskForm from "../TaskForm/TaskForm.js";
import TaskCard from "../TaskCard/TaskCard.js";
import TaskHead from "../TaskHead/TaskHead.js";

import fImage from "../Image/memo.png";
import bImage from "../Image/iphone.jpg";
import sImage from "../Image/basket.png";

const oldTasks = localStorage.getItem("taska");

function Home() {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(()=>{
    localStorage.setItem("tasks" ,JSON.stringify(tasks));
  },[tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };
  return (
    <>
      <div className="home_container1">
        <TaskForm setTasks={setTasks} />
      </div>
      <div className="home_container2">
        <TaskHead
          title="Front End"
          iconImage={fImage}
          tasks={tasks}
          status="Front End"
          handleDelete ={handleDelete}
        />
        <TaskHead
          title="Back End"
          iconImage={bImage}
          tasks={tasks}
          status="Back End"
          handleDelete ={handleDelete}
        />
        <TaskHead
          title="Full Stack"
          iconImage={sImage}
          tasks={tasks}
          status="Full Stack"
          handleDelete ={handleDelete}
        />
      </div>
    </>
  );
}

export default Home;
