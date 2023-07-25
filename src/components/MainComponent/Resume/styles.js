import styled from 'styled-components';

export const StyledH1 = styled.h1`
  margin: 0;
  padding: 48px;
  font-size: 48px;
  font-weight: 400;
  text-align: center;
  color: white;
  background-color: white;
  padding-bottom: 10px;
  padding-left: 13px;
  height: 90px;
  align-items: center;
`;

export const Wrapper = styled.section`
  margin: 0 auto;
  background-color: white;
  height: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 320px;
  margin: 0 16px;
  align-items: center;
  height: 100%;
`;

export const PureMaterialTextfieldOutlined = styled.label`
  --pure-material-safari-helper1: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
  position: relative;
  display: inline-block;
  padding-top: 6px;
  font-family: var(--pure-material-font, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);
  font-size: 16px;
  line-height: 1.5;
  overflow: hidden;
  width: 100%;
  height: 90%;

  /* Input, Textarea */
  > input,
  > textarea {
    box-sizing: border-box;
    margin: 0;
    border: solid 1px; /* Safari */
    border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
    border-top-color: transparent;
    border-radius: 4px;
    padding: 15px 13px 15px;
    width: 100%;
    height: inherit;
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
    background-color: transparent;
    box-shadow: none; /* Firefox */
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    caret-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
    transition: border 0.2s, box-shadow 0.2s;
  }

  /* Span */
  > input + span,
  > textarea + span {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
    width: 100%;
    max-height: 100%;
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
    font-size: 75%;
    line-height: 15px;
    cursor: text;
    transition: color 0.2s, font-size 0.2s, line-height 0.2s;
  }

  /* Corners */
  > input + span::before,
  > input + span::after,
  > textarea + span::before,
  > textarea + span::after {
    content: "";
    display: block;
    box-sizing: border-box;
    margin-top: 6px;
    border-top: solid 1px;
    border-top-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
    min-width: 10px;
    height: 8px;
    pointer-events: none;
    box-shadow: inset 0 1px transparent;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  > input + span::before,
  > textarea + span::before {
    margin-right: 4px;
    border-left: solid 1px transparent;
    border-radius: 4px 0;
  }

  > input + span::after,
  > textarea + span::after {
    flex-grow: 1;
    margin-left: 4px;
    border-right: solid 1px transparent;
    border-radius: 0 4px;
  }

  /* Hover */
  &:hover > input,
  &:hover > textarea {
    border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
    border-top-color: transparent;
  }

  &:hover > input + span::before,
  &:hover > textarea + span::before,
  &:hover > input + span::after,
  &:hover > textarea + span::after {
    border-top-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
  }

  &:hover > input:not(:focus):placeholder-shown,
  &:hover > textarea:not(:focus):placeholder-shown {
    border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
  }

  /* Placeholder-shown */
  > input:not(:focus):placeholder-shown,
  > textarea:not(:focus):placeholder-shown {
    border-top-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
  }

  > input:not(:focus):placeholder-shown + span,
  > textarea:not(:focus):placeholder-shown + span {
    font-size: inherit;
    line-height: 68px;
  }

  > input:not(:focus):placeholder-shown + span::before,
  > textarea:not(:focus):placeholder-shown + span::before,
  > input:not(:focus):placeholder-shown + span::after,
  > textarea:not(:focus):placeholder-shown + span::after {
    border-top-color: transparent;
  }

  /* Focus */
  > input:focus,
  > textarea:focus {
    border-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
    border-top-color: transparent;
    box-shadow: inset 1px 0 var(--pure-material-safari-helper1), inset -1px 0 var(--pure-material-safari-helper1), inset 0 -1px var(--pure-material-safari-helper1);
    outline: none;
  }

  > input:focus + span,
  > textarea:focus + span {
    color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
  }

  > input:focus + span::before,
  > input:focus + span::after,
  > textarea:focus + span::before,
  > textarea:focus + span::after {
    border-top-color: var(--pure-material-safari-helper1) !important;
    box-shadow: inset 0 1px var(--pure-material-safari-helper1);
  }

  /* Disabled */
  > input:disabled,
  > input:disabled + span,
  > textarea:disabled,
  > textarea:disabled + span {
    border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38) !important;
    border-top-color: transparent !important;
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
    pointer-events: none;
  }

  > input:disabled + span::before,
  > input:disabled + span::after,
  > textarea:disabled + span::before,
  > textarea:disabled + span::after {
    border-top-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38) !important;
  }

  > input:disabled:placeholder-shown,
  > input:disabled:placeholder-shown + span,
  > textarea:disabled:placeholder-shown,
  > textarea:disabled:placeholder-shown + span {
    border-top-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38) !important;
  }

  > input:disabled:placeholder-shown + span::before,
  > input:disabled:placeholder-shown + span::after,
  > textarea:disabled:placeholder-shown + span::before,
  > textarea:disabled:placeholder-shown + span::after {
    border-top-color: transparent !important;
  }
`;

export const PureMaterialButtonOutlined = styled.button`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  border: solid 1px;
  border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.24);
  border-radius: 4px;
  padding: 0 16px;
  min-width: 64px;
  height: 36px;
  vertical-align: middle;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
  background-color: transparent;
  font-family: var(--pure-material-font, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);
  font-size: 14px;
  font-weight: 500;
  line-height: 34px;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  margin-top: 10px;
  width: 100px

  /* Overlay */
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: currentColor;
    opacity: 0;
    transition: opacity 0.2s;
  }

  /* Ripple */
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    padding: 50%;
    width: 32px;
    height: 32px;
    background-color: currentColor;
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
    transition: opacity 1s, transform 0.5s;
  }

  /* Hover, Focus */
  &:hover::before {
    opacity: 0.04;
  }

  &:focus::before {
    opacity: 0.12;
  }

  &:hover:focus::before {
    opacity: 0.16;
  }

  /* Active */
  &:active::after {
    opacity: 0.16;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0s;
  }

  /* Disabled */
  &:disabled {
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
    background-color: transparent;
    cursor: initial;
  }

  &:disabled::before {
    opacity: 0;
  }

  &:disabled::after {
    opacity: 0;
  }
`;

export const Top = styled.div`
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

export const InfoBot = styled.div`
  margin-left: 17px;
`;

export const TitleBot = styled.p`
  font-size: 24px;
  font-weight: 600;
  white-space: nowrap;
`;