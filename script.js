const input = document.getElementById("t-input");
const btn = document.getElementById("t-btn");
const parameter = document.getElementById("parameter-select-from");
const parameterTo = document.getElementById("parameter-select-to");
const output = document.getElementById("output-box");

const lenguages = [
    { "nombre": "Afrikaans", "abreviacion": "af" },
    { "nombre": "Albanian", "abreviacion": "sq" },
    { "nombre": "Amharic", "abreviacion": "am" },
    { "nombre": "Arabic", "abreviacion": "ar" },
    { "nombre": "Armenian", "abreviacion": "hy" },
    { "nombre": "Azerbaijani", "abreviacion": "az" },
    { "nombre": "Basque", "abreviacion": "eu" },
    { "nombre": "Belarusian", "abreviacion": "be" },
    { "nombre": "Bengali", "abreviacion": "bn" },
    { "nombre": "Bosnian", "abreviacion": "bs" },
    { "nombre": "Bulgarian", "abreviacion": "bg" },
    { "nombre": "Catalan", "abreviacion": "ca" },
    { "nombre": "Cebuano", "abreviacion": "ceb" },
    { "nombre": "Chichewa", "abreviacion": "ny" },
    { "nombre": "Chinese (Simplified)", "abreviacion": "zh-CN" },
    { "nombre": "Chinese (Traditional)", "abreviacion": "zh-TW" },
    { "nombre": "Corsican", "abreviacion": "co" },
    { "nombre": "Croatian", "abreviacion": "hr" },
    { "nombre": "Czech", "abreviacion": "cs" },
    { "nombre": "Danish", "abreviacion": "da" },
    { "nombre": "Dutch", "abreviacion": "nl" },
    { "nombre": "English", "abreviacion": "en" },
    { "nombre": "Esperanto", "abreviacion": "eo" },
    { "nombre": "Estonian", "abreviacion": "et" },
    { "nombre": "Filipino", "abreviacion": "tl" },
    { "nombre": "Finnish", "abreviacion": "fi" },
    { "nombre": "French", "abreviacion": "fr" },
    { "nombre": "Frisian", "abreviacion": "fy" },
    { "nombre": "Galician", "abreviacion": "gl" },
    { "nombre": "Georgian", "abreviacion": "ka" },
    { "nombre": "German", "abreviacion": "de" },
    { "nombre": "Greek", "abreviacion": "el" },
    { "nombre": "Gujarati", "abreviacion": "gu" },
    { "nombre": "Haitian Creole", "abreviacion": "ht" },
    { "nombre": "Hausa", "abreviacion": "ha" },
    { "nombre": "Hawaiian", "abreviacion": "haw" },
    { "nombre": "Hebrew", "abreviacion": "iw" },
    { "nombre": "Hindi", "abreviacion": "hi" },
    { "nombre": "Hmong", "abreviacion": "hmn" },
    { "nombre": "Hungarian", "abreviacion": "hu" },
    { "nombre": "Icelandic", "abreviacion": "is" },
    { "nombre": "Igbo", "abreviacion": "ig" },
    { "nombre": "Indonesian", "abreviacion": "id" },
    { "nombre": "Irish", "abreviacion": "ga" },
    { "nombre": "Italian", "abreviacion": "it" },
    { "nombre": "Japanese", "abreviacion": "ja" },
    { "nombre": "Javanese", "abreviacion": "jw" },
    { "nombre": "Kannada", "abreviacion": "kn" },
    { "nombre": "Kazakh", "abreviacion": "kk" },
    { "nombre": "Khmer", "abreviacion": "km" },
    { "nombre": "Kinyarwanda", "abreviacion": "rw" },
    { "nombre": "Korean", "abreviacion": "ko" },
    { "nombre": "Kurdish (Kurmanji)", "abreviacion": "ku" },
    { "nombre": "Kyrgyz", "abreviacion": "ky" },
    { "nombre": "Lao", "abreviacion": "lo" },
    { "nombre": "Latin", "abreviacion": "la" },
    { "nombre": "Latvian", "abreviacion": "lv" },
    { "nombre": "Lithuanian", "abreviacion": "lt" },
    { "nombre": "Luxembourgish", "abreviacion": "lb" },
    { "nombre": "Macedonian", "abreviacion": "mk" },
    { "nombre": "Malagasy", "abreviacion": "mg" },
    { "nombre": "Malay", "abreviacion": "ms" },
    { "nombre": "Malayalam", "abreviacion": "ml" },
    { "nombre": "Maltese", "abreviacion": "mt" },
    { "nombre": "Maori", "abreviacion": "mi" },
    { "nombre": "Marathi", "abreviacion": "mr" },
    { "nombre": "Mongolian", "abreviacion": "mn" },
    { "nombre": "Myanmar (Burmese)", "abreviacion": "my" },
    { "nombre": "Nepali", "abreviacion": "ne" },
    { "nombre": "Norwegian", "abreviacion": "no" },
    { "nombre": "Odia (Oriya)", "abreviacion": "or" },
    { "nombre": "Pashto", "abreviacion": "ps" },
    { "nombre": "Persian", "abreviacion": "fa" },
    { "nombre": "Polish", "abreviacion": "pl" },
    { "nombre": "Portuguese", "abreviacion": "pt" },
    { "nombre": "Punjabi", "abreviacion": "pa" },
    { "nombre": "Romanian", "abreviacion": "ro" },
    { "nombre": "Russian", "abreviacion": "ru" },
    { "nombre": "Samoan", "abreviacion": "sm" },
    { "nombre": "Scots Gaelic", "abreviacion": "gd" },
    { "nombre": "Serbian", "abreviacion": "sr" },
    { "nombre": "Sesotho", "abreviacion": "st" },
    { "nombre": "Shona", "abreviacion": "sn" },
    { "nombre": "Sindhi", "abreviacion": "sd" },
    { "nombre": "Sinhala", "abreviacion": "si" },
    { "nombre": "Slovak", "abreviacion": "sk" },
    { "nombre": "Slovenian", "abreviacion": "sl" },
    { "nombre": "Somali", "abreviacion": "so" },
    { "nombre": "Spanish", "abreviacion": "es" },
    { "nombre": "Sundanese", "abreviacion": "su" },
    { "nombre": "Swahili", "abreviacion": "sw" },
    { "nombre": "Swedish", "abreviacion": "sv" },
    { "nombre": "Tajik", "abreviacion": "tg" },
    { "nombre": "Tamil", "abreviacion": "ta" },
    { "nombre": "Tatar", "abreviacion": "tt" },
    { "nombre": "Telugu", "abreviacion": "te" },
    { "nombre": "Thai", "abreviacion": "th" },
    { "nombre": "Turkish", "abreviacion": "tr" },
    { "nombre": "Turkmen", "abreviacion": "tk" },
    { "nombre": "Ukrainian", "abreviacion": "uk" },
    { "nombre": "Urdu", "abreviacion": "ur" },
    { "nombre": "Uyghur", "abreviacion": "ug" },
    { "nombre": "Uzbek", "abreviacion": "uz" },
    { "nombre": "Vietnamese", "abreviacion": "vi" },
    { "nombre": "Welsh", "abreviacion": "cy" },
    { "nombre": "Xhosa", "abreviacion": "xh" },
    { "nombre": "Yiddish", "abreviacion": "yi" },
    { "nombre": "Yoruba", "abreviacion": "yo" },
    { "nombre": "Zulu", "abreviacion": "zu" },
    { "nombre": "Hebrew", "abreviacion": "he" },
    { "nombre": "Chinese (Simplified)", "abreviacion": "zh" }
];

const url = 'https://text-translator2.p.rapidapi.com/translate';
const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '30ed671deamsh92cc402a0d75e4ep1a87d9jsn6ec76f5bd48d',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    },
};

async function test(text) {
    options.body = setParameters(text, parameterTo.value, parameter.value);
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        output.innerHTML = result.data.translatedText;
        console.log(parameterTo.value);
        console.log(parameter.value);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}


function setParameters(text, source_language, target_language) {
    const body = new URLSearchParams({
        source_language: source_language,
        target_language: target_language,
        text: text
    });

    return body;
}

function addLenguagesParameter(lenguages) {
    lenguages.forEach(element => {
        const aux1 = document.createElement("option");
        const aux2 = document.createElement("option");

        aux1.value = element.abreviacion;
        aux1.innerHTML = element.nombre;

        aux2.value = element.abreviacion;
        aux2.innerHTML = element.nombre;

        parameter.appendChild(aux1);
        parameterTo.appendChild(aux2);
    });
}

addLenguagesParameter(lenguages);

btn.addEventListener("click", () => {
    if (parameterTo.value == parameter.value) alert("You must choose different languages.");
    else test(input.value);
})

input.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        if (parameterTo.value == parameter.value) alert("You must choose different languages.");
        else test(input.value);
    }
})
