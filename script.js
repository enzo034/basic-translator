const url = 'https://text-translator2.p.rapidapi.com/translate';
const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '30ed671deamsh92cc402a0d75e4ep1a87d9jsn6ec76f5bd48d',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    },
    body: new URLSearchParams({
        source_language: 'en',
        target_language: 'id',
        text: 'Dog'
    })
};

async function test() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

test();