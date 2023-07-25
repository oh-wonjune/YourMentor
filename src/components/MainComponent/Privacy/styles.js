import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 980px;
    margin: auto;
`;

export const OuterDiv = styled.div`
    margin-top: 40px;
    border: 2px solid #c0c9d0;
    border-radius: 15px;
`;

export const TabInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 35px 0 25px;
`;

export const TextP = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: #666;

    span {
        color: #f42b3c;
    }
`;

export const List = styled.ul`
    grid-template-columns: repeat(10, 1fr);
    padding: 0 30px 45px;
    display: grid;
    justify-items: center;
    grid-row-gap: 28px;
    text-align: center;
    list-style: none;
`;

export const ListItem = styled.li`
    cursor: pointer;
    width: 100%;
`;

export const ItemLink = styled.a`
    width: 100%;
    background: none;
    height: auto;
    word-break: keep-all;
    display: inline-block;

    span {
        display: block;
        font-size: 13px;
        font-weight: 500;
        color: #666;
        margin-top: 8px;
        line-height: 1.2;
    }

    &::before {
        content: "";
        display: block;
        width: 71px;
        height: 71px;
        margin: 0 auto;
        border: 1px solid #d1d1d1;
        border-radius: 50%;
        position: relative;
        background-image: url(${props => (props.nm_ico)});
        background-repeat: no-repeat;
        background-size: 43px 50px;
        background-position: center;
        background-color: ${props => (props.$jobType === props.$index ? '#cde4f5' : '#fff')};
    }
`;

export const JobCountP = styled.p`
    overflow: hidden;
    padding-top: 8px;
    padding-bottom: 7px;
    align-items: center;
    display: flex;

    strong {
        color: #ff3c00;
    }
`;

export const JobList = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
    margin: 25px 0 35px;
    border-top: none;
    list-style: none;
`;

export const JobItem = styled.li`
    cursor: pointer;
`;

export const JobItemDiv = styled.div`
    display: flex;
    border: 1px solid #c0c9d0;
    border-radius: 15px;
    height: 75px;
    padding: 28px 24px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${({ selected }) => selected ? '#cde4f5' : 'white'};
`;

export const JobTitle = styled.strong`
    display: inline-block;
    font-size: 18px;
    max-width: 252px;
    color: ${({ selected }) => selected ? 'black' : '#546dac'};
`;

export const PaginationDiv = styled.div`
    text-align: center;
`;

export const PaginationWrapper = styled.div`
    display: inline-block;
`;

export const PaginationButton = styled.button`
    background-color: ${(props) => props.$active ? '#0096FF' : 'white'};
    color: ${(props) => props.$active ? '#FFFFFF' : '#000000'};
    float: "";
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .5s;
    border: ${(props) => props.$active ? '1px solid #0096FF' : '1px solid #DDD'};
    margin: 0 4px;
    font-size: 20px;
    cursor: pointer;
    
    &:hover {
        background-color: #DDD;
    }
`;

export const Searchdiv = styled.div`
  height: 50px;
  width: 300px;
  border: 1px solid #546dac;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
  padding: 0 15px;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
`;

export const InputContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 14px;

  &:focus {
    border: none;
    outline: none;
  }
`;

export const SearchButton = styled.button`
  border: none;
  color: #546dac;
  padding: 0 10px;
  font-size: 1rem;
  font-weight: 700;
  background-color: #00000000;
  cursor: pointer;

  &:hover {
    color: #586906ed;
  }
`;

export const SearchArea = styled.div`
  display: flex;
  margin-top: 38px;
  justify-content:space-between;
`;

export const Dropdown = styled.span`
  min-width: 12em;
  position: absolute;
  z-index:1;
  display: inline-block;
  margin-right: 1em;
  min-height: 2em;
  max-height: 2em;
  overflow: hidden;
  top: 0.5em;
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  color: #444;
  outline: none;
  border: 0.06em solid transparent;
  border-radius: 1em;
  background-color: #cde4f5;
  transition: 0.3s all ease-in-out;

  input:focus + label {
    background: #def;
  }

  input {
    width: 1px;
    height: 1px;
    display: inline-block;
    position: absolute;
    opacity: 0.01;
  }

  label {
    border-top: 0.06em solid #d9d9d9;
    display: block;
    height: 2em;
    line-height: 2em;
    padding-left: 1em;
    padding-right: 3em;
    cursor: pointer;
    position: relative;
    transition: 0.3s color ease-in-out;

    &:nth-child(2) {
      margin-top: 2em;
      border-top: 0.06em solid #d9d9d9;
    }
  }

  input:checked + label {
    display: block;
    border-top: none;
    position: absolute;
    top: 0;
    width: 100%;

    &:nth-child(2) {
      margin-top: 0;
      position: relative;
    }
  }

  &::after {
    content: "";
    position: absolute;
    right: 0.8em;
    top: 0.9em;
    border: 0.3em solid #3694d7;
    border-color: #3694d7 transparent transparent transparent;
    transition: 0.4s all ease-in-out;
  }

  &.expanded {
    border: 0.06em solid #3694d7;
    background: #fff;
    border-radius: 0.25em;
    padding: 0;
    box-shadow: rgba(0, 0, 0, 0.1) 3px 3px 5px 0px;
    max-height: 15em;

    label {
      border-top: 0.06em solid #d9d9d9;

      &:hover {
        color: #3694d7;
      }
    }

    input:checked + label {
      color: #3694d7;
    }

    &::after {
      transform: rotate(-180deg);
      top: 0.55em;
    }
  }
`;