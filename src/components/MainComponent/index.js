import React, {useState} from 'react';
import { GlobalStyle,NavLeft,NavRight, StyledUl, Logo} from './styles'; // Assuming that the styles are in styles.js file
import Loading from '../Loading';
import Resume from './Resume/resume';
import Interview from './Interview/Interview'
//import Interview2 from './Interview/test'
import axios from 'axios';

const MainComponent = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [inputText, setInputText] = useState("")
    const [outputText, setOutputText] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const onTabChange=(idx)=>{
        setTabIndex(idx)
    }

    const onUpload= async()=>{
        setIsLoading(true)

        const messages = [
            {"role": "system", "content": "해당 이력서의 맞춤법을 수정하고 전문적인 지식으로 보완하여 다시 말씀해주세요. 또한, 부가 설명 없이 한글로 답변해 주세요."},
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

                <NavRight>
                    {tabIndex === 1&&
                        <Resume
                            setInputText={setInputText}
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
        </>
    );
}

export default MainComponent;
