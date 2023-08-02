import React, {useRef, useState, useEffect} from "react";
import {
    Wrapper,
    OuterDiv,
    TabInfo,
    TextP,
    List,
    ListItem,
    ItemLink,
    JobCountP,
    JobList,
    JobItem,
    JobItemDiv,
    JobTitle,
    PaginationDiv,
    PaginationWrapper,
    PaginationButton,
    Searchdiv,
    InputContainer,
    StyledInput,
    SearchButton,
    SearchArea,
    Dropdown
} from './styles'
import axios from 'axios';
import {useRecoilState} from 'recoil';
import {selectedCareer, selectJob, getJobData} from '../../../state/atoms'

const Privacy = () => {
    const [jobData, setJobData] = useRecoilState(getJobData);

    const [inputValue, setInputValue] = useState("")
    const [expanded, setExpanded] = useState(false);
    const [selectedJob, setSelectedJob] = useRecoilState(selectJob);
    const [selectCareer, setSelectCareer] = useRecoilState(selectedCareer);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".dropdown-el")) {
                setExpanded(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleDropdownClick = (event) => {
        event.preventDefault();
        setExpanded(!expanded);
    };

    const handleDropdownListClick = (event, value) => {
        event.preventDefault();
        setExpanded(!expanded);
        setSelectCareer(value);
    };

    const pageGetJosb = async (page) => {
        try {
            const response = await axios.get('/api/getjobs', {
                params: {
                    searchJobCd: jobData.jobType,
                    pageIndex: page,
                }
            });
            if (response.status === 200) {
                setJobData({
                    ...jobData,
                    jobCount: response.data.count,
                    pageIndex: page,
                    jobName: response.data.jobs
                })
            } else {
                console.error(`Error: ${response.status}`);
            }
        } catch (error) {
            console.error(error);
        }
    }


    const getJobs = async (type) => {
        try {
            const response = await axios.get('/api/getjobs', {
                params: {
                    searchJobCd: type,
                    pageIndex: 1,
                }
            });
            if (response.status === 200) {
                setJobData({
                    jobCount: response.data.count,
                    pageIndex: 1,
                    jobName: response.data.jobs,
                    jobType: type
                })
            } else {
                console.error(`Error: ${response.status}`);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const onSearching = (event) => {
        if (event.key === "Enter") {
            keywordApi();
        }
    }

    const keywordApi = async () => {
        //inputValue
        try {
            const response = await axios.get('/api/getjobs', {
                params: {
                    apiKey: "b0b5932a9e672bf346459bf5796857c1",
                    searchJobCd: jobData.jobType,
                    searchJobNm: inputValue,
                }
            });
            if (response.status === 200) {
                setJobData({
                    ...jobData,
                    jobCount: response.data.count,
                    jobName: response.data.jobs
                })
            } else {
                console.error(`Error: ${response.status}`);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Wrapper>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "10px"}}>
                <Dropdown
                    className={`dropdown-el ${expanded ? "expanded" : ""}`}
                    onClick={handleDropdownClick}
                >
                    <input
                        type="radio"
                        name="sortType"
                        value="신입"
                        checked={selectCareer === "신입"}
                        id="신입"
                        onChange={(e) => handleDropdownListClick(e, "신입")}
                    />
                    <label htmlFor="신입" onClick={(e) => handleDropdownListClick(e, "신입")}>신입</label>
                    <input
                        type="radio"
                        name="sortType"
                        value="1년 ~ 3년"
                        checked={selectCareer === "1년 ~ 3년"}
                        id="sort-1"
                        onChange={(e) => handleDropdownListClick(e, "1년 ~ 3년")}
                    />
                    <label htmlFor="1년 ~ 3년" onClick={(e) => handleDropdownListClick(e, "1년 ~ 3년")}>1년 ~ 3년</label>
                    <input
                        type="radio"
                        name="sortType"
                        value="4년 ~ 6년"
                        checked={selectCareer === "4년 ~ 6년"}
                        id="sort-2"
                        onChange={(e) => handleDropdownListClick(e, "4년 ~ 6년")}
                    />
                    <label htmlFor="4년 ~ 6년" onClick={(e) => handleDropdownListClick(e, "4년 ~ 6년")}>4년 ~ 6년</label>
                    <input
                        type="radio"
                        name="sortType"
                        value="7년 이상"
                        checked={selectCareer === "7년 이상"}
                        id="sort-3"
                        onChange={(e) => handleDropdownListClick(e, "7년 이상")}
                    />
                    <label htmlFor="7년 이상" onClick={(e) => handleDropdownListClick(e, "7년 이상")}>7년 이상</label>
                </Dropdown>
            </div>
            <OuterDiv>
                <div className="tabWrap">
                    <TabInfo>
                        <TextP>직업에 필요한 지식, 능력, 기질 등을 중심으로 구분한 <span>직업분류</span>(국가수준 분류체계)를 선택하여 직업을 검색할 수 있습니다.</TextP>
                    </TabInfo>
                    <List>
                        <ListItem>
                            <ItemLink onClick={() => getJobs(0)} $jobType={jobData.jobType} $index={0} nm_ico={"/briefcase.png"}>
                                <span>경영·사무·금융·보험직</span>
                            </ItemLink>
                        </ListItem>
                        <ListItem>
                            <ItemLink onClick={() => getJobs(1)} $jobType={jobData.jobType} $index={1} nm_ico={"/research.png"}>
                                <span>연구직 및 공학 기술직</span>
                            </ItemLink>
                        </ListItem>
                        <ListItem>
                            <ItemLink onClick={() => getJobs(2)} $jobType={jobData.jobType} $index={2} nm_ico={"/auction.png"}>
                                <span>교육·법률·사회복지·경찰·소방직 및 군인</span>
                            </ItemLink>
                        </ListItem>
                        <ListItem>
                            <ItemLink onClick={() => getJobs(3)} $jobType={jobData.jobType} $index={3} nm_ico={"/healthcare.png"}>
                                <span>보건·의료직</span>
                            </ItemLink>
                        </ListItem>
                        <ListItem>
                            <ItemLink onClick={() => getJobs(4)} $jobType={jobData.jobType} $index={4} nm_ico={"/paint.png"}>
                                <span>예술·디자인·방송·스포츠직</span>
                            </ItemLink>
                        </ListItem>
                        <ListItem>
                            <ItemLink onClick={() => getJobs(5)} $jobType={jobData.jobType} $index={5} nm_ico={"/traveling.png"}>
                                <span>미용·여행·숙박·음식·경비·청소직</span>
                            </ItemLink>
                        </ListItem>
                        <ListItem>
                            <ItemLink onClick={() => getJobs(6)} $jobType={jobData.jobType} $index={6} nm_ico={"/truck.png"}>
                                <span>영업·판매·운전·운송직</span>
                            </ItemLink>
                        </ListItem>
                        <ListItem>
                            <ItemLink onClick={() => getJobs(7)} $jobType={jobData.jobType} $index={7} nm_ico={"/construction.png"}>
                                <span>건설·채굴직</span>
                            </ItemLink>
                        </ListItem>
                        <ListItem>
                            <ItemLink onClick={() => getJobs(8)} $jobType={jobData.jobType} $index={8} nm_ico={"/maintenance.png"}>
                                <span>설치·정비·생산직</span>
                            </ItemLink>
                        </ListItem>
                        <ListItem>
                            <ItemLink onClick={() => getJobs(9)} $jobType={jobData.jobType} $index={9} nm_ico={"/forest.png"}>
                                <span>농림어업직</span>
                            </ItemLink>
                        </ListItem>
                    </List>
                </div>
            </OuterDiv>
            <SearchArea>
                <JobCountP>총 <strong>{jobData.jobCount}</strong> 건이 검색되었습니다.</JobCountP>
                <Searchdiv>
                    <InputContainer>
                        <StyledInput
                            type="text"
                            placeholder="Search..."
                            onKeyPress={onSearching}
                            value={inputValue}
                            onChange={event => setInputValue(event.target.value)}
                        />
                    </InputContainer>
                    <SearchButton className="search" onClick={keywordApi}>Search</SearchButton>
                </Searchdiv>
            </SearchArea>
            <JobList id="JOB_DETAIL_LIST">
                {jobData.jobName.map((item, i) => (
                    <JobItem key={i} onClick={() => setSelectedJob(item.job_nm)}>
                        <JobItemDiv selected={selectedJob === item.job_nm}>
                            <JobTitle selected={selectedJob === item.job_nm}>{item.job_nm}</JobTitle>
                        </JobItemDiv>
                    </JobItem>
                ))}
            </JobList>
            <PaginationDiv>
                <PaginationWrapper>
                    {[...Array(jobData.jobCount%10 !=0 ? Math.floor(jobData.jobCount / 10)+1:Math.floor(jobData.jobCount / 10))].map((_, i) => (
                        <PaginationButton
                            key={i}
                            $active={jobData.pageIndex === i + 1}
                            onClick={() => {
                                setJobData({...jobData, pageIndex: i + 1});
                                pageGetJosb(i + 1);
                            }}
                        >
                            {i + 1}
                        </PaginationButton>
                    ))}
                </PaginationWrapper>
            </PaginationDiv>
        </Wrapper>
    );
};

export default Privacy;
