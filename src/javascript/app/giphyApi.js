document.addEventListener("DOMContentLoaded", init);
const giphyApiKey = 'DJu5uArIKRj9StsjKwUuPPtiCVTvc6v6';
let savedValue = '';
let startingPosition = 0;
let template = require("@template/loaded-gifs.html");

function searchImages(value) {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&limit=8&q=`;
    url = url.concat(value);
    if(savedValue === value) {
        startingPosition += 8;
        url = url.concat(`&offset=${startingPosition}`)
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

                let gifsMoreOptionButton = document.getElementsByClassName('gif-figure-more-info');
                for(let i = 0; i < gifsMoreOptionButton.length; i++) {
                    gifsMoreOptionButton[i].addEventListener('click',function () {
                        this.offsetParent.offsetParent.firstElementChild.classList.add('show-element');
                    });
                }

                document.body.addEventListener('click', function(event) {
                    let gifsElement = event.target.closest(".gif-figure-instance");
                    let gifFigureWrapper = document.getElementsByClassName('gif-figure-wrapper');
                    if (!gifsElement) {
                        for (let item of gifFigureWrapper) {
                            item.classList.remove('show-element');
                        }
                    }
                });
            }
        })
}

function init() {
    document.getElementById("mainSearchButton").addEventListener("click", e => {
        e.preventDefault();
        let searchInputValue = document.getElementById("mainSearch").value.trim();
        searchImages(searchInputValue);
        savedValue = searchInputValue;
    });
    document.getElementById("refreshButton").addEventListener("click", e => {
        e.preventDefault();
        searchImages(savedValue);
    });
}