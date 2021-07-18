import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Menu from "./menu";
import TodoCard from "./todoCard";
import AddTodoCard from "./addTodoCard";

const ContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  border: 2px solid #dddddd;
  border-radius: 0 0 32px 32px;
  height: 800px;
`;

const ShowTodo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
`;

const NoneCard = styled.div``;

const TodoContent = () => {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [addTodoCard, setAddTodoCard] = useState(0);
  const [todoList, setTodoList] = useState([
    {
      color: "#967A6D",
      todoContent: "투두 리스트 작성",
      date: "2021.07.10",
    },
    {
      color: "#A7C4DA",
      todoContent: "학교갔다가 잠자기",
      date: "2021.07.10",
    },
    {
      color: "#E5BBB4",
      todoContent: "수업 자료 만들기",
      date: "2021.07.10",
    },
    {
      color: "#967A6D",
      todoContent: "10시전에 일어나기",
      date: "2021.07.10",
    },
    {
      color: "#E4D8D3",
      todoContent: "알고리즘 과제하기",
      date: "2021.07.10",
    },
    {
      color: "#818D90",
      todoContent: "중국어 워크북 P.26~29",
      date: "2021.07.10",
    },
  ]);

  useEffect(() => {
    // 클린업 함수 사용하지 않으면 제거
    return () => {};
  }, [todoList.addTodoCard]);

  const onClickAddTodo = (addItem) => {
    //통신처리
    // let temp = todoList.concat({
    //   color: addItem.color,
    //   todoContent: addItem.todoContent,
    //   date: "2021.07.15",
    // });

    // 기존 데이터에서 데이터를 변형할 일이 생길 경우 함수형 업데이트 사용합시다.
    setTodoList((prevState) => 
      prevState.concat({
        color: addItem.color,
        todoContent: addItem.todoContent,
        date: "2021.07.15",
      })
    );
  };

  return (
    <ContentWrap>
      <Menu
        setAddTodoCard={setAddTodoCard}
        setCurrentCategory={setCurrentCategory}
      />
      <ShowTodo>
        {addTodoCard ? (
          <AddTodoCard
            setAddTodoCard={setAddTodoCard}
            onClickAddTodo={onClickAddTodo}
          />
        ) : (
          <NoneCard />
        )}
        {


        // Key는 Todo별로 Unique  하게 가지고 있는 것이 좋음
        todoList.length ?
          todoList.reduce((prev, next, cI) => {
            if (currentCategory === 'all' || next.color === currentCategory) {
               prev.push(
                 <TodoCard key={cI} color={next.color} todoContent={next.todoContent} date={next.date} />
               )
            }
          
            return prev;
          }, [])
        : <></>
      }
      </ShowTodo>
    </ContentWrap>
  );
};

export default TodoContent;
