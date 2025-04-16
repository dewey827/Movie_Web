import React from "react";
import FOOTER_LIST  from './FooterData';
import styled from 'styled-components';

function Footer(){

    return(
        <ListDiv>

            <ListUl>
                {FOOTER_LIST.map(info => (
                    <List key={info.id}>
                        <ALink href={info.link}>{info.list}</ALink>
                    </List>
                ))}
            </ListUl>

            <Article>
                <div>
                    <p>[12345]서울특별시 구로구 시흥대로 168</p>
                    <p>대표이사 : 크리스탈  사업자 등록번호: 402-494-3030  통신판매업신고번호: 2024 서울구로 -2024</p>
                    <p>
                        호스팅사업자 : CJ 올리브네트웍스 개인정보보호 책임자 홍길순
                        대표 이메일 : m.dreamcnter@partner.megabox.co.kr
                    </p>
                    <p>
                        COPYRIGHT ⓒ Megabox, Inc. All rights reserved.
                    </p>
                </div>
            </Article>

        </ListDiv>
    );
}
const ListDiv = styled.div`
    background-color: #f8f8f8;
    margin-top: 50px
    padding: 50px 0 0 14px;
`;

const ListUl = styled.ul`
    width: 1000px;
    display:flex;
    justify-content: space-between;
    max-width: 980px;
    margin: 0 auto;
    padding: 23px 0;
    border-bottom: 1px solid #ebebeb;
`;

const List = styled.li`
    font-weight: 500;
    font-size: 13px;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
    &:nth-child(7){
        text-decoration: underline;
        font-weight: bold;
    }
`;
const AList = styled.a`
    color = inherit;
`;
const Article = styled.div`
    display:flex;
    justify-content: space-between;
    max-width: 980px;
    align-items: flex-end;
    margin: 0 auto;
    padding: 23pox 0;
    font-size: 13px;
    line-height: 20px;
`;


const ALink = styled.a`
  color: inherit;
`;

export default Footer;




