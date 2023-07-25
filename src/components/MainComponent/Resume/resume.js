import React from 'react';
import {Wrapper, StyledH1, InputContainer, PureMaterialTextfieldOutlined, PureMaterialButtonOutlined} from './styles'
import styled from "styled-components";

const Top = styled.div`
  display: flex;
  align-items: center;
  height: 90px;
  width: 100%;
  padding-left: 13px;
  box-shadow: 0 9.5px 12.7px 0 rgba(0, 0, 0, 0.05);

  @media only screen and (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
  }
`;

const InfoBot = styled.div`
  margin-left: 17px;
`;

const TitleBot = styled.p`
  font-size: 24px;
  font-weight: 600;
  white-space: nowrap;
`;

const resume = (props) => {
    const {setInputText, outputText, onUpload, onClickCopy} = props

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    return (
        <Wrapper>
            <Top>
                <InfoBot>
                    <TitleBot>이력서 첨삭</TitleBot>
                </InfoBot>
            </Top>
            <div style={{display: "flex", height: "85%", paddingTop: "10px", background:"rgb(234,238,243)"}}>
                <InputContainer>
                    <PureMaterialTextfieldOutlined>
                        <textarea type="text" placeholder=" " style={{height: "100%"}} onChange={handleInputChange}/>
                        <span>이력서 내용</span>
                    </PureMaterialTextfieldOutlined>
                    <PureMaterialButtonOutlined onClick={onUpload}>upload</PureMaterialButtonOutlined>
                </InputContainer>
                <InputContainer>
                    <PureMaterialTextfieldOutlined>
                        <textarea type="text" placeholder=" " style={{height: "100%"}} readOnly={true} value={outputText}/>
                        <span>변환된 내용</span>
                    </PureMaterialTextfieldOutlined>
                    <PureMaterialButtonOutlined onClick={onClickCopy}>COPY</PureMaterialButtonOutlined>
                </InputContainer>
            </div>
        </Wrapper>
    );
};

export default resume;
