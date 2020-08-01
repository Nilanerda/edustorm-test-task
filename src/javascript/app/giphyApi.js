const template = require("@template/loaded-gifs.html");

const giphyImages = {
    giphyApiKey: 'DJu5uArIKRj9StsjKwUuPPtiCVTvc6v6',
    startingPosition: 0,
    savedValue: '',
    searchImages(value) {
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${this.giphyApiKey}&limit=8&q=`;
        url = url.concat(value);
        if(this.savedValue === value) {
            this.startingPosition += 8; // step of uploading images
            url = url.concat(`&offset=${this.startingPosition}`)
        }
        
        fetch(url)
            .then(response => response.json())
            .then(content => {
                let insertPlace = document.querySelector(".gifs-output-place");
                insertPlace.innerHTML = '';
                for(let item of content.data) {
                    let imageContent = template({
                        imageUrl: item.images.downsized_large.url,
                        title: item.title,
                        width: item.images.original.width,
                        height: item.images.original.height,
                        url: item.url,
                    });
                    insertPlace.insertAdjacentHTML('afterbegin', imageContent );
                    this.addMoreOptionButton();
                }
            })
    },
    
    //add option button for each image element and show it properties
    addMoreOptionButton() {
        let gifsMoreOptionButton = document.getElementsByClassName('gif-figure-more-info');
                for(let i = 0; i < gifsMoreOptionButton.length; i++) {
                    gifsMoreOptionButton[i].addEventListener('click',function () {
                        this.offsetParent.offsetParent.firstElementChild.classList.add('show-element');
                    });
                }
    }
}

document.getElementById("mainSearchButton").addEventListener("click", e => {
    e.preventDefault();
    let searchInputValue = document.getElementById("mainSearch").value.trim();
    giphyImages.searchImages(searchInputValue);
    giphyImages.savedValue = searchInputValue;
});

document.getElementById("refreshButton").addEventListener("click", e => {
    e.preventDefault();
    giphyImages.searchImages(giphyImages.savedValue);
});

// close option menu and image element properties
document.body.addEventListener('click', function(event) {
    let gifsElement = event.target.closest(".gif-figure-instance");
    let gifFigureWrapper = document.getElementsByClassName('gif-figure-wrapper');
    if (!gifsElement) {
        for (let item of gifFigureWrapper) {
            item.classList.remove('show-element');
        }
    }
});