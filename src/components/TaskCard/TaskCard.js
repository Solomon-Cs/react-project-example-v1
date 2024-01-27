import React from "react";
import "./TaskCard.css";
import Tags from "../TaskForm/Tags";
import dicobn from "../Image/remove.png";

const TaskCard = ({ title, tags ,handleDelete, index}) => {
  return (
    <article className="task_card">
      <p className="task_text">{title} </p>
      <div className="task_contener">
        <div className="task_card_tag">
          {tags.map(
            (tag, index) =>
                <Tags key={index} tagName={tag} selected={true} />
          )}

        </div>
        <div className="task_delete" onClick={() =>handleDelete(index)}>
          <img className="delete_icon" src={dicobn} alt="image" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
