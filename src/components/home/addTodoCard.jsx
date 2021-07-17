import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const CardWrap = styled.div`
  width: 200px;
  height: 160px;
  background-color: ${(props) => props.color};
  margin: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

const TopWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 32px;
  background-color: #ffffff7d;
`;

const IConButton = styled.div`
  width: 32px;
  height: 32px;
  margin-top: 8px;
  text-align: center;
`;

const MiddleWarp = styled.textarea`
  padding: 4px 8px 0;
  width: 176px;
  height: 104px;
  background-color: ${(props) => props.color};
  border: none;
  font-size: 16px;
  white-space: pre-wrap;

  &:focus {
    outline: 0;
  }
`;

const BottomWarp = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Category = styled.button`
  width: 100%;
  height: 20px;
  width: 20px;
  margin: 0 4px;
  border: 2px solid black;
  border-radius: 16px;
  background-color: ${(props) => props.color};
  color: white;
`;

const AddTodoCard = ({ setAddTodoCard, onClickAddTodo }) => {
  const [backgroundColor, setBackgroundColor] = useState("#A7C4DA");
  // 이 부분은 상수로 분리하는게 좋습니다.
  const [todoContent, setTodoContent] = useState("");

  const onChangeTodoContent = (e) => {
    if (e.target.value.length < 50) setTodoContent(e.target.value);
    // 명시적으로 대괄호를 넣어주는 것이 좋음. (컨벤션)
  };

  const onClickSaveAddTodo = () => {
    onClickAddTodo({
      color: backgroundColor,
      todoContent: todoContent,
    });
    setAddTodoCard(0);
  };

  return (
    <CardWrap color={backgroundColor}>
      <TopWrap>
        <Category
          color="#A7C4DA"
          onClick={() => setBackgroundColor("#A7C4DA")}
        />
        <Category
          color="#818D90"
          onClick={() => setBackgroundColor("#818D90")}
        />
        <Category
          color="#967A6D"
          onClick={() => setBackgroundColor("#967A6D")}
        />
        <Category
          color="#E5BBB4"
          onClick={() => setBackgroundColor("#E5BBB4")}
        />
        <Category
          color="#E4D8D3"
          onClick={() => setBackgroundColor("#E4D8D3")}
        />
        <IConButton>
          <AiOutlinePlusCircle size="24" onClick={onClickSaveAddTodo} />
        </IConButton>
      </TopWrap>
      <MiddleWarp
        type="textarea"
        color={backgroundColor}
        onChange={onChangeTodoContent}
        value={todoContent}
        wrap="on"
      />
      <BottomWarp>
        <IConButton onClick={() => setAddTodoCard(0)}>
          <AiOutlineMinusCircle size="24" />
        </IConButton>
      </BottomWarp>
    </CardWrap>
  );
};

export default AddTodoCard;
