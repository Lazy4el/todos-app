import React from "react";
import { useState } from "react";

import NewTaskForm from "../NewTaskForm/NewTaskForm";
import Footer from "../Footer/Footer";
import TaskList from "../TaskList/TaskList";

export default function App() {
  function creatTodoList(title, status = "view") {
    let randNum = Math.floor(Math.random() * 1000);
    return {
      id: randNum,
      title: title,
      status: status,
      stateList: false,
    };
  }

  const [totdoList, setTodoList] = useState([
    creatTodoList("1"),
    creatTodoList("2"),
    creatTodoList("3"),
    creatTodoList("4"),
    creatTodoList("5"),
    creatTodoList("6"),
  ]);

  const [filter, setFilter] = useState({ status: "all" });

  return (
    <section className="todoapp">
      <NewTaskForm
        totdoList={totdoList}
        setTodoList={setTodoList}
        creatTodoList={creatTodoList}
      />

      <section className="main">
        <TaskList
          totdoList={totdoList}
          setTodoList={setTodoList}
          filter={filter}
        />
      </section>
      <Footer totdoList={totdoList} setFilter={setFilter} />
    </section>
  );
}
