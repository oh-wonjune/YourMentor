import axios from 'axios';

export default async function handler(req, res) {
    const messages = req.body;

    const data = {
        model: 'gpt-3.5-turbo',
        temperature: 0.8, // 모델의 출력 다양성
        max_tokens: 1024, // 응답받을 메시지 최대 토큰(단어) 수 설정
        top_p: 1, // 토큰 샘플링 확률을 설정
        frequency_penalty: 0.5, // 일반적으로 나오지 않는 단어를 억제하는 정도
        presence_penalty: 0.5, // 동일한 단어나 구문이 반복되는 것을 억제하는 정도
        messages: messages,
    }
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
        },
    }

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions',data,config);
        res.status(200).json({ chat: response.data.choices[0].message.content });
    } catch (error) {
         console.error('Error in chat API:', error);
        res.status(500).json({ error: error.message });
    }
}
