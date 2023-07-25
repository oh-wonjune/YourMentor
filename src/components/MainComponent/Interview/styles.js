import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  height: 90px;
  width: 100%;
  padding-left: 13px;
  box-shadow: 0 9.5px 12.7px 0 rgba(0, 0, 0, 0.05);
`;

export const InfoBot = styled.div`
  margin-left: 17px;
`;

export const TitleBot = styled.p`
  font-size: 24px;
  font-weight: 600;
  white-space: nowrap;
`;

export const Status = styled.p`
  color: rgb(155, 166, 179);
`;

export const ContentChat = styled.div`
  background: rgb(234, 238, 243);
  width: 100%;
  height: 80%;
  overflow-y: scroll;

  &::before,
  &::after {
    content: "";
    display: block;
    height: 20px;
    width: 100%;
  }
`;

export const BoxSentMSG = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
`;

export const InputMSG = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 50px;
  padding-left: 15px;
  font-size: 1.1rem;

  &::placeholder {
    font-size: 1.1rem;
    color: rgb(155, 166, 178);
  }

  &:valid ~ .send-icon svg path {
    fill: #0066ff;
  }
`;

export const SendIcon = styled.div`
  display: flex;
  background-color: white;
  width: 26px;
  height: 26px;
  margin: 0 13px;
  cursor: pointer;
`;

export const By = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  border-top: 1px solid rgb(238, 238, 238);
`;

export const ByText = styled.span`
  color: rgb(155, 166, 178);
  font-size: 12px;
  font-weight: 600;
`;

export const ByLink = styled.a`
  font-size: 14px;
  font-weight: 600;
  margin-left: 3px;
  color: rgb(18, 91, 251);
  text-decoration: none;
`;

export const BotResponse = styled.div`
  font-size: 17px;
  line-height: 24px;
  border-radius: 20px;
  word-wrap: break-word;
  max-width: 900px;
  width: fit-content;
  padding: 15px 17px;
  margin-left: 15px;
  margin-right: 15px;
  border-bottom-left-radius: 5px;
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  margin-top: 10px;

  &[text-first] {
    border-bottom-left-radius: 5px;
    margin-top: 0;
  }

  &[text-middle] {
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
  }

  &[text-last] {
    border-top-left-radius: 5px;
  }
`;

export const UserResponse = styled.div`
  background: rgb(0, 102, 255);
  color: rgb(255, 255, 255);
  font-size: 17px;
  line-height: 24px;
  border-radius: 20px;
  margin-left: 15px;
  width: fit-content;
  max-width: 550px;
  padding: 15px 17px;
  border-bottom-right-radius: 5px;
  word-break: break-all;
  white-space: normal;
`;

export const Message = styled.div`
  padding: 0 25px 0px;
`;

export const MassageImg = styled.img`
  width: 100%;
  height: 217px;
  background: white;
  border-radius: 10px;
  margin-bottom: 6px;
`;

export const CaptionBot = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 25px;
  width: 117px;
  font-size: 14px;
  color: rgb(24, 25, 25);

  img {
    width: 18px;
    height: 18px;
    border-radius: 100%;
  }
`;
