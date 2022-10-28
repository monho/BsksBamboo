import React, { useState } from 'react'; // import 로 useState 를 불러온다!
import styled from 'styled-components';
import brend_logo from '../../assest/img/mylogo.png'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


const Header = () => {
    const MainSection = styled.section`
    margin: 0px;
    padding:0px;

`; //ContentWarp 메인 css

    const HeaderMain = styled.div`
        box-shadow: 1px 0 10px rgb(62 79 163 / 25%);
        display: flex;
        justify-content: space-between;
        padding: 0 16vw;
        position: sticky;
        top: 0;
        background-color: #fff;
        z-index: 2;
        @media screen and (max-width: 1000px) {
            padding: 0 10vw;
        }
    `;

    const HederH = styled.h1`
        align-self: center;
        margin: 0px;
    `;

    const Brend = styled.a`

    `;
    const Logo = styled.img`
        width:55px;
    `;

    const Navmenu = styled.nav`
       // padding: 15px 0;
    `
    const NvaUl = styled.ul`
        margin-top: 12px;
        display:flex;
    `
    const NvLi = styled.li`
        margin: 7px 0 7px 2vw;
        list-style: none;
        font-size: 16px;
        font-weight: 600;
        @media screen and (max-width: 1000px) {
            margin: 7px 0 7px 10vw;
        }
    `
    const LiTag = styled.a`
        text-decoration: none;
        color:#000;
    `;
    const LiTaghover = styled.a`
    text-decoration: none;
    color:#000;
    &:hover {
        color: #3866cd;
      }
`;

    return(
        <MainSection>
           <HeaderMain>
               <HederH>
                <Brend href="/">
                    <Logo src={brend_logo}></Logo>
                </Brend>
               </HederH>
                <Navmenu>
                    <NvaUl>
                        <Link to="/" style={{ textDecoration: 'none' }}><LiTaghover><NvLi>메인</NvLi></LiTaghover></Link>
                        <Link to="Rule" style={{ textDecoration: 'none' }}><LiTag><NvLi>규칙판</NvLi></LiTag></Link>

                        {/* <LiTag href="/"><NvLi>규칙판</NvLi></LiTag> */}
                    </NvaUl>
                </Navmenu>
           </HeaderMain>
        </MainSection>
    )

}

export default Header;