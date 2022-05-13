import { useState, useEffect } from "react";
import styled from 'styled-components';
import Axios from "axios";
import { Modal , Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainSection = styled.section`
margin: 0 17vw;
padding:0px;
`; //ContentWarp 메인 css


const WarpSection = styled.div`

`;

const CoSe = styled.section`
    display: flex;
`
const LeftSection = styled.main`
    display: flex;
    justify-content: space-between;
`;
const Title = styled.h1`
margin: 60px 0 27px;
`;
const TitleText = styled.p`
color:#3669c5;
font-size: 24px;
font-weight: 700;
line-height: 27px;
`;
const SecondText = styled.p`
color:#000;
font-size: 24px;
font-weight: 700;
line-height: 0px;
`;
const InputArea = styled.div`
width: 350px;
margin: 45px 0 0 0;
`;
const InputTitle = styled.input`

border-radius: 5px;
outline: none;
border: none;
box-shadow: 0 1px 4px rgb(0 0 0 / 25%);
padding: 10px;
font-size: 1em;
width: 94.5%;
`;
const TagSelecter = styled.select`
width: 60px;
border-radius: 5px;
outline: none;
border: none;
font-size: 1em;
padding: 10px 15px;
text-align: center;
position: absolute;
color: #fff;
background-color: #7ca0e1;
margin-left: 5px;
-webkit-appearance:none; /* 크롬 화살표 없애기 */
-moz-appearance:none; /* 파이어폭스 화살표 없애기 */
appearance:none; /* 화살표 없애기 */
`;
const OptionItem = styled.option`
padding: 7px 0;
background-color: #fff;
color: #000;
`;
const InputConten = styled.div`
width: calc(100% - 10px);
margin: 15px 0 0 0 ;
border-radius: 5px;
outline: none;
border: none;
box-shadow: 0 1px 4px rgb(0 0 0 / 25%);
padding: 10px 0 10px 10px;

`;
const InputTextContent = styled.textarea`
border-radius: 5px;
outline: none;
border: none;
box-shadow: 0 1px 4px rgb(0 0 0 / 25%);
padding: 10px;
font-size: 1em;
width: 94%;
resize: none;
box-shadow: none;
min-height: 80px;
`;
const ButtonArea = styled.input`
width: 100px;
border-radius: 5px;
outline: none;
border: none;
font-size: 1em;
color: #fff;
padding: 10px 15px;
background-color: #7ca0e1;
margin: 11px 0 0 calc(100% - 100px);
&:hover {
background-color: #3866cd;
}

`;
const RightArea = styled.article`
    position: relative;
    width: 100%;
    margin-top: 65px;
    padding-left: 20px;
    margin-bottom: 100px;
`;
const InnerRight = styled.article`
    border-radius: 5px;
    outline: none;
    border: none;
    box-shadow: 0 1px 4px rgb(0 0 0 / 25%);
    width: calc(68vw - 430px);
    padding: 15px;
    margin-bottom: 20px;
    position: relative;
`;
const InnerHeader = styled.header`
display: flex;
justify-content: space-between;
font-size: 14px;
color: #c4c4c4;
width: 100%;
`;
const InnerDiv1 = styled.div`
display:flex;
`;
const Toph3 = styled.h3`
margin-right: 10px;
font-size: 18px;
color: #3669c5;
line-height: 2;
`;
const Timeptag = styled.p`
line-height: 40px;
white-space: pre-wrap;
word-break: break-all;
`;
const SecondDiv = styled.div`
color: #3669c5;
justify-self: flex-end;
display: flex;
`;
const SecondPtag = styled.p`
line-height: 25px;
white-space: pre-wrap;
word-break: break-all;
`;
const ReportBtn = styled.button`
position: relative;
padding: 0 0 0 15px;
font-size: 14px;
background: none;
border: none;
color: #e75858;
margin-top: -15px;
`;
const TitleHeader = styled.h4`
font-size: 16px;
font-weight: 700;
margin: 0;
`;
const Contentp = styled.p`
line-height: 25px;
white-space: pre-wrap;
word-break: break-all;
`;
const ReportA = styled.a`
margin-top: 16px;
text-decoration: none;
`;

const FormSet = styled.form`

`
const ReportTitle = styled.input`
    border-radius: 5px;
    outline: none;
    border: none;
    box-shadow: 0 1px 4px rgb(0 0 0 / 25%);
    padding: 10px;
    font-size: 1em;
    width: 100%;
`;
const ReportContent = styled.textarea`
    border-radius: 5px;
    outline: none;
    border: none;
    box-shadow: 0 1px 4px rgb(0 0 0 / 25%);
    padding: 10px;
    font-size: 1em;
    margin: 40px 0 30px;
    resize: none;
    height: 150px;
    width: 100%;
`;

const HiddenPid = styled.input`
    color:white;
`
const LeftArea = () => {
    const [BAM_TITLE, setTitle] = useState("");
    const [BAM_CONTENT, setContent] = useState("");
    const [BAM_SEQ,setSeq] = useState("");
    const [employeeList, setEmployeeList] = useState([]);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [show, setShow] = useState(false);
    const [report_pid,setReportPid] = useState("");
    const [report_title,setReportTitle] = useState("");
    const [report_content,setReportContent] = useState("");

    const submitBamboo = () =>{
            if(BAM_TITLE == "")
            {   
                alert("제목을 입력해주세요.");
                
                return;
            }
            else if(BAM_CONTENT == "")
            {
                alert("피드 내용을 입력해주세요.");
                return;
            }
        Axios.post('http://localhost:60000/create', {
            
            BAM_TITLE:BAM_TITLE, 
            BAM_CONTENT:BAM_CONTENT,
  
            
        }).then(() =>{
            setEmployeeList([
                ...employeeList,
                {
                    BAM_TITLE: BAM_TITLE,
                    BAM_CONTENT: BAM_CONTENT,
                    BAM_SEQ:BAM_SEQ,
                },
              ]);
        });
        window.location.replace("/")
    };


    const PidReportinsert = () =>{
        
        if(report_content == "")
        {   
            alert("신고 내용을 입력해주세요.");
            
            return;
        }

    Axios.post('http://localhost:60000/report', {
        
        report_title:report_title, 
        report_content:report_content,
        report_pid:report_pid,

        
    })
    setShow(false);
};

    

useEffect(()=> {
    Axios.get("http://localhost:60000/employees").then((response)=>{
        setEmployeeList(response.data);
    });
},[]);
    
    return(
        <MainSection>
            
            <WarpSection>
                <LeftSection>
                    <section>
                        <Title>
                            <TitleText>
                                당신의 이야기를 들려주세요,
                            </TitleText>
                            <SecondText>
                                무엇이든 괜찮아요!
                            </SecondText>
                        </Title>
                        
                        <FormSet >
                            <InputArea>
                                <InputTitle type="text" placeholder="제목을 입력하세요." name = "BAM_TITLE" onChange = {(e)=> {
                                    setTitle(e.target.value);
                                }}>

                                </InputTitle>
                                
                            </InputArea>
                            <InputConten>   
                                <InputTextContent placeholder="이야기를 들려주세요." name="BAM_CONTENT" value={BAM_CONTENT} onChange = {(e)=> {
                                    setContent(e.target.value);
                                }}>

                                </InputTextContent>
                            </InputConten>
                            <ButtonArea type="button" value="피드전송" onClick={submitBamboo}>
                            </ButtonArea>
                        </FormSet>
                    </section>

                                <RightArea>
                                {employeeList.map((val)=> {
                                     return(
                                            <InnerRight>
                                                <InnerHeader>
                                                    <InnerDiv1>
                                                        <Toph3>
                                                            #{val.BAM_SEQ}번째 피드
                                                        </Toph3>
                                                        <Timeptag>
                                                        {val.BAM_TIME}
                                                        </Timeptag>
                                                    </InnerDiv1>
                                                    <SecondDiv>
                                                        {/* <ReportBtn onClick={handleShow}>
                                                            신고
                                                        </ReportBtn> */}
                                                    </SecondDiv>
                                                </InnerHeader>
                                                <TitleHeader>
                                                    {val.BAM_TITLE}
                                                </TitleHeader>
                                                <Contentp>
                                                    {val.BAM_CONTENT}
                                                </Contentp>
                                            </InnerRight>           
                                        );
                                    })}   
                                </RightArea>
 
                </LeftSection>
            </WarpSection>
            {employeeList.map((val)=> {
                return(
            <Modal show={show} onHide ={handleClose}>
                <Modal.Header>
                    <Modal.Title  >
                        <p style={{ color:'#e75858' , fontFamily:'bold'}} > 피드 신고하기</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ReportTitle  name="report_title" onChange = {(e)=> {
                                    setReportTitle(e.target.value);
                                }} />
                    <ReportContent placeholder="내용을 입력하세요." name="report_content" onChange = {(e)=> {
                                    setReportContent(e.target.value);
                                }}/>
                </Modal.Body>

                {/* 내일은 어느 게시글에 대한 신고인지 db에넣기 */}
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        닫기
                    </Button>
                    <Button variant="danger" onClick={PidReportinsert}>
                        신고하기
                    </Button>
                </Modal.Footer>
            </Modal>
                );
            })} 
        </MainSection>
    )
}
export default LeftArea;