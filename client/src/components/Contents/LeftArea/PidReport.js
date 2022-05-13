import React, { useState } from 'react'; // import 로 useState 를 불러온다!
import styled from 'styled-components';
import "./Modal.css";
import { Modal , Button } from 'react-bootstrap';



const PidReport = ({show , onHide}) => {
    
    const MainSection = styled.section`
    margin: 0px;
    padding:0px;
    
`; //ContentWarp 메인 css

    return(
        <MainSection>
        </MainSection>
    )

}

export default PidReport;