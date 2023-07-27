import React, { useRef, useState, useEffect } from "react";
import {Container, Top, InfoBot, TitleBot, ContentChat, BoxSentMSG, UserResponse, By, InputMSG,BotResponse, SendIcon} from "./styles"
import axios from "axios";
import {useRecoilValue} from "recoil";
import {outputResume} from "../../../state/atoms";

const Interview = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [inputText, setInputText] = useState("")
  const [messages, setMessages] = useState([]);
  const outputText = useRecoilValue(outputResume)
  const [messageList, setMessageList] = useState([
      {"role": "system", "content": "면접 질문을하는 면접관 역활을 해줘 사용자는 면접자입니다. 한글로 대화를 해줘. 한번에 여러개 질문은 하지말고 하나씩 질문해줘. 진짜 면접처럼 대화식으로 해줘 해당 자기소개서를 기반으로 질문해줘. 자기소개서 :"+outputText},
      {"role": "assistant", "content": "안녕하세요 지원자님 이제부터 면접을 진행하겠습니다. 간단한 자기소개를 해주실까요?"}
  ])
  const contentChatRef = useRef();

  useEffect(() => {
    if (contentChatRef.current) {
      contentChatRef.current.scrollTop = contentChatRef.current.scrollHeight;
    }
  }, [messages]);

    useEffect(() => {
        if (messageList.length>2 && messageList[messageList.length-1].role !=="assistant") {
            onUpload()
        }
    }, [messageList]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isLoading) {
      e.preventDefault();
      addMessage(inputText,"user");
    }
  };

  const handleInputChange = (event) => {
        setInputText(event.target.value);
  };

  const addMessage = (inputText, gubun) => {
      if(gubun === "user") {
          setMessages([
              ...messages,
              {
                  classList: ["massage", "msgCaption"],
                  innerHTML: '<span class="captionUser">지원자</span>',
                  attributes: {"data-user": "true"},
                  style: {display: "flex", justifyContent: "flex-end", paddingRight: "15px", paddingTop: "10px"},
              },
              {
                  component: <UserResponse>{inputText}</UserResponse>,
                  classList: ["massage"],
                  attributes: {"data-user": "true"},
                  style: {display: "flex", justifyContent: "flex-end", paddingRight: "15px"},
              },
          ]);

          setInputText(''); // input 필드를 비움
      } else{
          setMessages([
              ...messages,
              {
                  classList: ["massage", "msgCaption"],
                  innerHTML: '<span className="captionUser">면접관</span>',
                  attributes: {"data-user": "true"},
                  style: {paddingLeft: "15px"},
              },
              {
                  component: <BotResponse>{inputText}</BotResponse>,
                  classList: ["massage"],
                  attributes: {"data-user": "true"},
              },
          ]);
      }

      setMessageList([
          ...messageList,
          {"role":gubun, "content": inputText}
      ])
  };

  const onUpload= async()=>{
        setIsLoading(true)
        try {
            const res = await axios.post('/api/interview', messageList)
            addMessage(res.data.chat, "assistant")
            setIsLoading(false)
        } catch (error) {
            console.error('Error in POST /api/interview:', error.response.data);
            setIsLoading(false)
        }
    }

  return (
    <Container>
      <Top>
        <InfoBot>
          <TitleBot>모의 면접</TitleBot>
        </InfoBot>
      </Top>
      <ContentChat id="ContentChat" ref={contentChatRef}>

          <span className="captionUser" style = {{paddingLeft:"15px"}}>면접관</span>
          <BotResponse>
              안녕하세요 지원자님 이제부터 면접을 진행하겠습니다. 간단한 자기소개를 해주실까요?
          </BotResponse>

        {messages.map((message, index) => {
        if (message.innerHTML) {
          return (
            <div
              key={index}
              className={message.classList.join(' ')}
              style={message.style}
              {...message.attributes}
              dangerouslySetInnerHTML={{ __html: message.innerHTML }}
            />
          );
        } else {
          return (
            <div
              key={index}
              className={message.classList.join(' ')}
              style={message.style}
              {...message.attributes}
            >
              {message.component}
            </div>
          );
        }
      })}

      </ContentChat>
      <BoxSentMSG className="BoxSentMSG">
        <InputMSG
          type="text"
          placeholder="답변을 입력하세요."
          className="InputMSG"
          value={inputText}
          onKeyPress={handleKeyPress}
          onChange={handleInputChange}
        />

        <SendIcon onClick={()=>addMessage(inputText, "user")}>
          {!isLoading&&
          <svg id="send1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlSpace="preserve">
            <path
              fill={inputText==="" ?"#d7d7d7":"#0066ff"}
              d="M22,11.7V12h-0.1c-0.1,1-17.7,9.5-18.8,9.1c-1.1-0.4,2.4-6.7,3-7.5C6.8,12.9,17.1,12,17.1,12H17c0,0,0-0.2,0-0.2c0,0,0,0,0,0c0-0.4-10.2-1-10.8-1.7c-0.6-0.7-4-7.1-3-7.5C4.3,2.1,22,10.5,22,11.7z"
            ></path>
          </svg>
          }
          {isLoading&&
          <svg id="send2" className="none" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style={{ enableBackground: "new 0 0 50 50" }} xmlSpace="preserve">
            <rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2">
              <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
              <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
              <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
            </rect>
            <rect x="8" y="10" width="4" height="10" fill="#333" opacity="0.2">
              <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
              <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
              <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
            </rect>
            <rect x="16" y="10" width="4" height="10" fill="#333" opacity="0.2">
              <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
              <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
              <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
            </rect>
          </svg>
          }
        </SendIcon>

      </BoxSentMSG>
      <By/>
    </Container>
  );
};

export default Interview;
