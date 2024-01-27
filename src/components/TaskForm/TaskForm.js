import React from "react";
import "./TaskForm.css";
import Tags from "./Tags";
import { useState } from "react";
import { render } from "react-dom";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "React",
    tags: [],
  });
  const handleChange = (e) => {
    const { value, name } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
    //to reaset null after submit
    setTaskData({
      task: "",
      status: "React",
      tags: [],
    });
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  return (
    <header className="header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          onChange={handleChange}
          className="task_form_input"
          placeholder="Plaece enter Title.."
        />
        <div className="task_form_button">
          <div>
            <Tags
              tagName="HTML"
              selectTag={selectTag}
              selected={checkTag("HTML")}
            />
            <Tags
              tagName="CSS"
              selectTag={selectTag}
              selected={checkTag("CSS")}
            />
            <Tags
              tagName="JavaScript"
              selectTag={selectTag}
              selected={checkTag("JavaScript")}
            />
            <Tags
              tagName="React"
              selectTag={selectTag}
              selected={checkTag("React")}
            />
          </div>

          <div>
            <select
              className="task_status"
              name="status"
              value={taskData.status}
              onChange={handleChange}
            >
              <option>Front End</option>
              <option>Back End</option>
              <option>Full Stack</option>
            </select>
            <button className="submit_btn">Submit</button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
