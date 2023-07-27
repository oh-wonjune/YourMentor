import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 16px 16px;
  gap: 16px;
  width: 400px;
  background: #ffffff;
  border: 1px solid #efefef;
  box-shadow: 0px 2px 6px rgba(24, 24, 28, 0.06),
    0px 32px 41px -23px rgba(24, 24, 28, 0.07);
  border-radius: 7px;

  &.no-head {
    display: grid;
    grid-template-columns: 24px 1fr;
    grid-template-rows: repeat(2, 1fr);
    row-gap: 16px;

    .close {
      display: none;
    }

    .card-header {
      grid-area: 1 / 1 / 2 / 2;
    }

    .card-body {
      grid-area: 1 / 2 / 3 / 3;
    }

    .card-footer {
      grid-area: 2 / 2 / 3 / 3;
    }
  }

  .card-header {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .card-footer {
    display: flex;
    width: 100%;
    gap: 12px;
    align-items: center;
  }
`;

export const Paragraph = styled.p`
  color: #5f5f61;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

export const Strong = styled.strong`
  font-weight: 600;
  color: #222124;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  cursor: pointer;
  padding: 0px 14px;
  gap: 8px;
  background: #ffffff;
  width: 100%;
  border: 1px solid #e6e6e6;
  box-shadow: 0px 3px 4px -5px rgba(24, 24, 28, 0.03), 0px 1px 2px rgba(24, 24, 28, 0.04);
  border-radius: 7px;
  letter-spacing: -0.05px;
  color: #222124;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;

  &.btn-primary {
    border-color: #2080f7;
    background: #2080f7;
    color: #fff;
  }
`;


export const Body = styled.strong`
  z-index: 100;
  position: fixed;
  width: 100%; 
  height: 100%; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  background-color: rgba(0, 0, 0, 0.5);
`;