import axios from 'axios';

export default async function handler(req, res) {
    const {pageIndex = 1, searchJobCd } = req.query;
    const apiKey = process.env.JOB_API_KEY;

    try {
        const response = await axios.get('https://www.career.go.kr/cnet/front/openapi/jobs.json', {
            params: {
                apiKey: apiKey,
                pageIndex: pageIndex,
                searchJobCd: searchJobCd
            }
        });

        if (response.status === 200) {
            res.status(200).json(response.data);
        } else {
            res.status(response.status).json({ message: 'Error fetching jobs' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};




