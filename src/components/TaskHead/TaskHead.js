import React from "react";
import "./TaskHead.css";
import TaskCard from "../TaskCard/TaskCard";

const TaskHead = ({ title, iconImage, tasks, status ,handleDelete}) => {
  return (
    <>
      <section className="home_card">
        <h4>
          <img src={iconImage} className="Icon_image" /> {title}
        </h4>
        {tasks.map(
          (task, index) =>
            task.status === status && (
              <TaskCard key={index} title={task.task} tags={task.tags} handleDelete ={handleDelete} index = {index} />
            )
        )}
      </section>
    </>
  );
};

export default TaskHead;
