import React, {useEffect,useState} from 'react';
import {Body, CardContainer, Paragraph, Strong, Button} from './styles';
import {useRecoilValue} from "recoil";
import {outputResume, selectJob} from "../../state/atoms";

function Alert(props) {
    const selectedJob = useRecoilValue(selectJob);
    const outputText = useRecoilValue(outputResume)
    const [msg, setMsg] =useState("")


    useEffect(()=>{
        if(selectedJob === ""){
            setMsg("직업을 선택해주시기 바랍니다.")
        }else if(outputText === ""){
            setMsg("이력서 첨삭을 해주시기 바랍니다.")
        }
    },[props.isAlert])


    return (
        <Body>
            <CardContainer className="no-head">
                <div className="card-header">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13ZM13 17H11V15H13V17Z"
                              fill="#222124"/>
                    </svg>
                    <div className="close">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M18.3 5.71021C17.91 5.32021 17.28 5.32021 16.89 5.71021L12 10.5902L7.10997 5.70021C6.71997 5.31021 6.08997 5.31021 5.69997 5.70021C5.30997 6.09021 5.30997 6.72021 5.69997 7.11021L10.59 12.0002L5.69997 16.8902C5.30997 17.2802 5.30997 17.9102 5.69997 18.3002C6.08997 18.6902 6.71997 18.6902 7.10997 18.3002L12 13.4102L16.89 18.3002C17.28 18.6902 17.91 18.6902 18.3 18.3002C18.69 17.9102 18.69 17.2802 18.3 16.8902L13.41 12.0002L18.3 7.11021C18.68 6.73021 18.68 6.09021 18.3 5.71021Z"
                                  fill="#222124"/>
                        </svg>
                    </div>
                </div>
                <div className="card-body">
                    <Paragraph><Strong>필수 입력 사항</Strong></Paragraph>
                    <Paragraph>{msg}</Paragraph>
                </div>
                <div className="card-footer">
                    <Button className="btn-primary" onClick={props.onClickAlert}>Ok</Button>
                </div>
            </CardContainer>
        </Body>
    );
}

export default Alert;
