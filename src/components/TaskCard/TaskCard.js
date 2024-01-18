import React from "react";
import "./TaskCard.css";
import Tags from "../TaskForm/Tags";
import dicobn from '../Image/remove.png'


const TaskCard = () => {
  return (
    <article className="task_card">
        <p className="task_text" >This is simple Title</p>
        <div className="task_contener"> 
            <div className="task_card_tag">
                <Tags tagName= 'HTML' />
                <Tags tagName= 'HTML' />
            </div>
            <div className="task_delete">
                <img className="delete_icon" src = {dicobn} alt="image" />
            </div>
        </div>

    </article>
  );
};

export default TaskCard;
