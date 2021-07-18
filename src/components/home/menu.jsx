import React from "react";
import styled from "styled-components";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";

const menu = ({ setAddTodoCard, setCurrentCategory }) => {
  return (
    <MenuWrap>
      <TopMiddleWrap>
        <AddTodoButton onClick={() => setAddTodoCard(1)}>
          <IoMdAdd size="40" fill="white" />
        </AddTodoButton>
        <Category color="black" onClick={() => setCurrentCategory("all")} />
        <Category
          color="#A7C4DA"
          onClick={() => setCurrentCategory("#A7C4DA")}
        />
        <Category
          color="#818D90"
          onClick={() => setCurrentCategory("#818D90")}
        />
        <Category
          color="#967A6D"
          onClick={() => setCurrentCategory("#967A6D")}
        />
        <Category
          color="#E5BBB4"
          onClick={() => setCurrentCategory("#E5BBB4")}
        />
        <Category
          color="#E4D8D3"
          onClick={() => setCurrentCategory("#E4D8D3")}
        />
      </TopMiddleWrap>
      <IConButton>
        <AiOutlineDelete size="40" fill="black" />
      </IConButton>
    </MenuWrap>
  );
};

export default menu;


const MenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 136px;
  height: 100%;
  border-right: 2px solid #dddddd;
  border-radius: 0 0 0 32px;
`;

const TopMiddleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const AddTodoButton = styled.div`
  width: 40px;
  height: 40px;
  margin: 32px 0;
  text-align: center;
  border-radius: 32px;
  background-color: #303030;
`;

const Category = styled.button`
  width: 100%;
  height: 24px;
  width: 24px;
  margin: 16px;
  border: 1px solid white;
  border-radius: 24px;
  background-color: ${(props) => props.color};
  color: white;
`;

const IConButton = styled.div`
  width: 32px;
  height: 32px;
  margin-bottom: 32px;
`;