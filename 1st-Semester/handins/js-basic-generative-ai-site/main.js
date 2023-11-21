// Get HTML elements
const huggingfaceToken = document.querySelector('#api-key');
const generateButtonElement = document.querySelector('.generate-button');
const storyCharacterElement = document.querySelector('#story-character');
const storyNameElement = document.querySelector('#story-name');
const storyDreamElement = document.querySelector('#story-dream');
const storyRivalElement = document.querySelector('#story-rival');
const loadingTextElement = document.querySelector('p.loading-text');
const errorTextElement = document.querySelector('p.error-text');
const hrLineSeperatorElement = document.querySelector('hr');
const generatedTextElement = document.querySelector('#generated-text');

// Generate story button functionality
generateButtonElement.addEventListener('click', function() {
    // Check if input fields are filled out, if not show error
    if (huggingfaceToken.value && storyCharacterElement.value && storyNameElement.value && storyDreamElement.value && storyRivalElement.value) {
        displayLoadingText(true);
        errorTextElement.classList.add('hidden');
        fetchGeneratedTextFromHuggingface(storyCharacterElement.value, storyNameElement.value, storyDreamElement.value, storyRivalElement.value)
            .then(generatedStory => {
                hrLineSeperatorElement.classList.remove('hidden');
                generatedTextElement.textContent = generatedStory;
            displayLoadingText(false);
        })
        .catch(err => {
            console.log(err)
        })
    } else {
        errorTextElement.classList.remove('hidden');
    }
});

// Toggle visibility of generate button and loading text
function displayLoadingText(loading) {
    if (loading) {
        loadingTextElement.classList.remove('hidden');
        generateButtonElement.classList.add('hidden');
    } else {
        loadingTextElement.classList.add('hidden');
        generateButtonElement.classList.remove('hidden')
    }
}

// Fetch a story from huggingface falcon 7b with the queries
function fetchGeneratedTextFromHuggingface(storyCharacter, storyName, storyDream, storyRival) {
    return fetch(
        "https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct",
        {
            headers: {
                Authorization: `Bearer ${huggingfaceToken.value}`,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({"inputs": `Generate a short story. The story is about a ${storyCharacter}, whose name is ${storyName}. Their ultimate dream is to ${storyDream}. Ever since their childhood, they've had a rival, ${storyRival} ::BEGINSTORYHERE::`}),
        }
    )
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const regex = /.*(?!::BEGINSTORYHERE::)/
            return data[0].generated_text.replace(regex, '');
        })
}