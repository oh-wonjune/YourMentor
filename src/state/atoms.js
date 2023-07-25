import {atom} from 'recoil'

export const selectedCareer = atom({
    key:'selectedCareer',
    default: '신입'
})

export const selectJob = atom({
    key:'selectJob',
    default: ''
})


export const getJobData = atom({
    key:'getJobData',
    default: {
        jobCount: 0,
        pageIndex: 1,
        jobName: [],
        jobType: undefined,
    }
})


// export const isLoading = atom({
//     key:'isLoading',
//     default: false
// })

export const inputResume = atom({
    key:'inputResume',
    default: ''
})

export const outputResume = atom({
    key:'outputResume',
    default: ''
})


