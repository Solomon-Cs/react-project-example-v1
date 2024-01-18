import React from "react";
import "./TaskForm.css";
import Tags from "./Tags";

const TaskForm = () => {
  return (
    <header className="header">
      <form>
        <input type="text" className="task_form_input" placeholder="Plaece enter Title.." />
        <div className="task_form_button">
          <div>
            <Tags tagName = 'HTML' />
            <Tags tagName = 'CSS' />
            <Tags tagName = 'JavaScript' />
            <Tags tagName = 'React' />

          </div>

          <div>
            <select className="task_status">
              <option>Front End</option>
              <option>Back End</option>
              <option>Full Stack</option>
            </select>
            <button type="button" className="submit_btn">Submit</button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
