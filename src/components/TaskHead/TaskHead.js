import React from "react";
import "./TaskHead.css";
import TaskCard from "../TaskCard/TaskCard";

const TaskHead = ({ taskName, iconImage }) => {
  return (
    <>
      <section className="home_card">
        <h4>
          <img src={iconImage} className="Icon_image" /> {taskName}
        </h4>
        <TaskCard />
      </section>
    </>
  );
};

export default TaskHead;
