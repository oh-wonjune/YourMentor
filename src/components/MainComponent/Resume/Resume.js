import React from 'react';
import {Wrapper, StyledH1, InputContainer, PureMaterialTextfieldOutlined, PureMaterialButtonOutlined, Top,InfoBot, TitleBot} from './styles'
import axios from "axios";
import {inputResume, outputResume} from '../../../state/atoms'
import {useRecoilState, useRecoilValue} from 'recoil';
const Resume = (props) => {

    const {onClickCopy,onUpload} = props

    const [inputText, setInputText] = useRecoilState(inputResume)
    const outputText = useRecoilValue(outputResume)
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
                        <textarea type="text" placeholder=" " style={{height: "100%"}} onChange={handleInputChange} value={inputText}/>
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

export default Resume;
