import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import { Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
    }
  body, html, #root {
    height: 100%;
    background: #FFB6C1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const BannerWrapper = styled.div`
    background-color: #ffd5d9;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom 15px;
    `;

const Banner = styled(Link)`
    color: white;
    font-family: fantasy;
    font-size: 2.4rem;
    letter-spacing: 5px;
    text-decoration: none;
`;


const LoginBox = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: antiquewhite;
`;




const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Wrapper>
          <LoginBox>
           <BannerWrapper>
           <Banner>TodoList</Banner>
           </BannerWrapper>
           {children}
          </LoginBox>
        </Wrapper>;
    </>
  );
};

export default MainTemplate;