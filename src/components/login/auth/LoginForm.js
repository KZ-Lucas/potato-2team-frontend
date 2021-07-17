import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageExplans = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 20px;
  padding: 0 0 15px 0;
  font-weight: bold;
  color: currentcolor;
`;

const Input = styled.input`
  max-width: 100%;
  padding: 15px 20px;
  background: #f9f9fa;
  color: #f03d4e;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

const LoginButton = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  background: #ffd5d9;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
`;

const Sign = styled(Link)`
  margin-top: 1rem;
  text-align: right;
  color: grey;
  text-decoration: none;
`;

const Label = styled.div`
  font-size: 1rem;
  margin-bottom: 0.25rem;
  color: grey;
`;

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    userId: "",
    userPwd: "",
  });

  const onChangeForm = ({ target }) => {
    // 상태관리 시 기존의 상태 변수를 그대로 사용하는 것은 좋지 못한 패턴입니다.
    // setLoginData({
    //   ...loginData,
    //   [e.target.name]: e.target.value,
    // });

    // 이렇게 쓰면 좋습니다.
    setLoginData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));

    // 해당 구문은 변경 이전의 폼 데이터를 보여줍니다.
    // console.log("롸:", loginData);
  };

  const loginSubmit = async () => {
    try {
      console.log("//await // 보내는 뭐시기 axios~~~~");
    } catch (e) {
      console.log("에러발생!");
    }
    //다른페이지 넘겨주자
  };

  return (
    <>
      <PageExplans>로그인</PageExplans>
      <Label>이메일</Label>
      <Input name="userId" placeholder="이메일" onChange={onChangeForm} />
      <Label>비밀번호</Label>
      <Input
        name="userPwd"
        type="password"
        placeholder="비밀번호"
        onChange={onChangeForm}
      />
      <LoginButton onClick={loginSubmit}>로그인</LoginButton>
      <Sign to="/register">회원가입</Sign>
    </>
  );
};

export default LoginForm;
