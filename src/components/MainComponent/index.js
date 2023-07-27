import React, {useState} from 'react';
import { GlobalStyle,NavLeft,NavRight, StyledUl, Logo} from './styles'; // Assuming that the styles are in styles.js file
import Loading from '../Loading';
import Resume from './Resume/Resume';
import Interview from './Interview/Interview'
import Privacy from './Privacy/Privacy'
import Alert from '../Alert/Alert'
//import Privacy from './Privacy/test'
import axios from 'axios';

import {useRecoilState, useRecoilValue} from 'recoil';
import {inputResume, selectedCareer, selectJob,outputResume} from '../../state/atoms'
// import { inputResume,outputResume } from '../../state/atoms';

const MainComponent = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [outputText, setOutputText] = useRecoilState(outputResume)
    const [isLoading, setIsLoading] = useState(false)
    const [isAlert, setIsAlert] = useState(false)
    const inputText = useRecoilValue(inputResume)
    const selectCareer = useRecoilValue(selectedCareer);
    const selectedJob = useRecoilValue(selectJob);

    const onTabChange=(idx)=>{
        switch(idx){
            case 1:
                if(selectedJob !==""){
                    setTabIndex(idx)
                } else{
                    setIsAlert(true)
                }
                break;
            case 2:
                if(outputText !==""){
                    setTabIndex(idx)
                } else{
                    setIsAlert(true)
                }
                break;
            default:
                setTabIndex(idx)
        }

    }

    const onUpload= async()=>{
        setIsLoading(true)
        const messages = [
            {"role": "system", "content": "해당 이력서의 맞춤법을 수정하고 전문적인 지식으로 보완하여 다시 말씀해주세요. 또한, 다른 말 말고 수정된 이력서만 한글로 출력해줘" +
                    " 참고로 저의 경력은"+selectCareer+"정도이고 " + selectedJob + "를 목표로 하고 있어"},
            {"role": "user", "content": inputText}
        ]

        try {
            const res = await axios.post('/api/chat', messages);
            setOutputText(res.data.chat);
            setIsLoading(false)
        } catch (error) {
            console.error('Error in POST /api/chat:', error.response.data);
            setIsLoading(false)
        }
    }

    const onClickCopy = async() => {
        await navigator.clipboard.writeText(outputText);
    };

    const onClickAlert = ()=>{
        setIsAlert(false)
    }

    return (
        <>
            <GlobalStyle/>
            <div style={{display:"flex"}}>
                <NavLeft>
                    <StyledUl>
                        <li><p><Logo src="/mentor_ico.svg" alt=""/></p></li>
                        <li>
                            <p onClick={()=>onTabChange(0)}>
                                <ion-icon className="icon" name="home"/>
                                홈
                            </p>
                        </li>
                        <li>
                            <p onClick={()=>onTabChange(1)}>
                                <ion-icon className="icon" name="person"/>
                                이력서 첨삭
                            </p>
                        </li>
                        <li>
                            <p onClick={()=>onTabChange(2)}>
                                <ion-icon className="icon" name="briefcase"/>
                                모의면접
                            </p>
                        </li>
                    </StyledUl>
                </NavLeft>

                <NavRight style={tabIndex === 0?{overflowY:"scroll"}:{overflowY:"hidden"}}>
                    {tabIndex === 0&&
                        <Privacy/>
                    }
                    {tabIndex === 1&&
                        <Resume
                            outputText={outputText}
                            onClickCopy={onClickCopy}
                            onUpload={onUpload}
                        />
                    }
                    {tabIndex === 2&&
                        <Interview/>
                    }
                </NavRight>

                {isLoading &&
                    <Loading/>
                }
            </div>
            {isAlert&&
                <Alert
                    isAlert={isAlert}
                    onClickAlert={onClickAlert}
                />
            }
        </>
    );
}

export default MainComponent;
