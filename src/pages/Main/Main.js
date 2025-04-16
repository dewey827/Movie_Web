import React from 'react';
import styled from 'styled-components';

//components
import MainTop4 from './MainTop4';

function Main() {
    return(
        <MainContainer>
            {/* 영상 구간 - 메인배너*/}
            <SectionTop>
                <SectionTopTitle>현재 상영작</SectionTopTitle>
                <SectionTopMore>+ 더 보기</SectionTopMore>
            </SectionTop>
            
            <SectionA>
                {/* 영상 */}
                <MainTop4 />
            </SectionA>
        </MainContainer>

    );
};


const MainContainer = styled.div`
    width: 100%;
`;

const SectionA = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const SectionTop = styled.div`
    width: 100%;
    height: 80px;
    margin-left: 100px;
    margin-top: 20px;
    display: flex;
   flex-direction: row;
   align-items: center;
   position: relative;
`;

// 추후 변경
const SectionTopTitle = styled.h3`
    font-weight: 700;
    font-size: 25px;
    color: #9971ff;
`;

// 추후 변경
const SectionTopMore = styled.button`
  position: absolute;
  right: 200px;
  background: transparent;
  font-weight: 700;
  font-size: 15px;
  padding: 8px 15px;
  border: 2px solid #9971ff;
  border-radius: 30px;
  color: #9971ff;
`;

export default Main;