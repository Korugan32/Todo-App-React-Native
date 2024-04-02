import React, { createContext, useState } from 'react';


export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      title: "Merhaba Todo App",
      key: 1,
      desc: "Ana Sayfadaki '+' Butonuna Tıklayarak Yeni Todo'lar ekleyebilirsiniz, Aynı Zamanda Eklediğiniz Todo'ları Yana Kaydırarak Veya Todo'nun İçine Giderek 'Delete Task' Diyerek Silebilir, 'Complete Task' Butonuna Tıklayarak Tamamlaya Bilirsiniz",
      isDone:false
    },
    {
      title: "Bitirilen Todo",
      key: 2,
      desc: "Bitirilen Todolar Yeşil Rengini Alır ",
      isDone: true
    },
  ]);

  const addTodo = (text, desc) => {
    const newTodo = {
      title: text,
      desc: desc,
      key: todos.length + 1,
      isDone: false
    }
    setTodos([...todos, newTodo]);
  };

  const toggleCompleted = (key) => {
    setTodos(
      todos.map((todo) =>
        todo.key === key ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const deleteTodo = (key) => {
    setTodos(todos.filter((todo) => todo.key !== key));
  };

  return (
    <TodosContext.Provider value={{ todos, toggleCompleted, deleteTodo, addTodo }}>
      {children}
    </TodosContext.Provider>
  );
};