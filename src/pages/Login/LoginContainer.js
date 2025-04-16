import styled from 'styled-components';

// import React from "react"; 대신에
import {Link} from 'react-router-dom';

//img
import LogoImg from './logo.png';
import withkakao from './withkakao.png';


//카카오 인증 API를  위해
const LoginContainer = ({className}) => {
    //1. 인증 URL (비밀코드)
    const KAKAO_AUTH_URL = ``;

    //2. 링크 URL 변수
    const handleLogin = () => {
        window.location.href = KAKAO_AUTH_URL;

    };

    //3. HTML
    return (
        <div className={className}>
            <SubTitle primary="#676767">MyBox 입니다.</SubTitle>
            <TitleLogo src={LogoImg} alt="LogoImg" />
            <Textbubble>—̳͟͞͞💁🏻‍♂️편리한 로그인</Textbubble>
            <LoginButton onClick={handleLogin} src={withkakao} alt="login" />
            <SignIn to="#">아직 회원이 아니신가요?</SignIn>
        </div>
    );
};

//로그인 버튼
const LoginButton = styled.img`
  display: block;
  width: 180px;
  height: 43px;
`;

const TitleLogo = styled.img`
  width: 300px;
`;

const SubTitle = styled.p`
  color: ${props => props.primary};
`;
//회원가입버튼(a 링크)
const SignIn = styled(Link)`
  border-bottom: 0.5px solid #7063ff;
  margin-top: 70px;
  display: inline-block;
  color: #767676;
`;

const Textbubble = styled.div`
  display: inline-block;
  margin: 50px 0 10px 0;
  border-radius: 10px;
  font-size: 12px;
  border-radius: 15px 15px 15px 0;
  border: 3px solid #7063ff;
  padding: 0.5em 0.6em;
`;


export default LoginContainer;