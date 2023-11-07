/* Fetch function */
function fetchGifData(apiKey, searchTerm, numberOfGifs) {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=${numberOfGifs}`)
        .then(response => response.json())
        .then(giphyData => {
            if (giphyData.meta.msg === "Unauthorized") {
                toggleErrorText('Invalid/Unauthorized API key!')
            } else {
                toggleErrorText('')
                renderGifs(giphyData.data)
            }
        });
}

/* Function to display the gifs */
function renderGifs(gifs) {
    const getImageContentDiv = document.querySelector('#gif-content');
    gifs.forEach(function (currentGif) {
        const getImageUrl = currentGif.images.original.url;
        const createImage = document.createElement('img');
        getImageContentDiv.appendChild(createImage);
        createImage.setAttribute("src", getImageUrl)
        console.log(currentGif.images.original.url)
    })
}

/* Function to get api key and search term values from input fields */
const getInputApiKey = () => document.querySelector('#api-key-input').value;
const getInputSearchTerms = () => document.querySelector('#search-bar-input').value;
const getInputAmountValue = () => document.querySelector('#amount-slider-input').value;

/* Function to clear currently shown images */
function clearImages() {
    const getImgElements = document.querySelectorAll('#gif-content img')
    console.log(getImgElements)
    if (getImgElements.length > 0) {
        const getParentElement = document.querySelector('#gif-content');
        getImgElements.forEach(function (imgElement) {
            getParentElement.removeChild(imgElement);
        });
        console.log("Cleared images")
    } else {
        console.log("No images to clear")
    }
}

/* Function to show/hide error text, and what text to display */
function toggleErrorText(text) {
    const getErrorElement = document.querySelector('#gif-content h1');
    clearImages()
    if (text) {
        getErrorElement.textContent = text;
        getErrorElement.style.display = 'block';
    } else {
        getErrorElement.style.display = 'none';
    }
}

/* Amount slider update text functionality */
const amountSlider = document.querySelector('#amount-slider-input');
const amountSliderText = document.querySelector('#amount-slider-value');
amountSlider.addEventListener('input', function() {
    amountSliderText.textContent = amountSlider.value;
});

/* Search button functionality */
const searchButton = document.querySelector('#search-bar-button');
searchButton.addEventListener('click', function() {
    const apiSearchAmountValues = [getInputApiKey(), getInputSearchTerms(), getInputAmountValue()];
    if (apiSearchAmountValues[0] && apiSearchAmountValues[1]) {
        fetchGifData(apiSearchAmountValues[0], apiSearchAmountValues[1], apiSearchAmountValues[2]);
    } else {
        toggleErrorText('No API key and/or search terms entered!')
    }
});
