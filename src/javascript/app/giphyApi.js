const giphyApiKey = 'DJu5uArIKRj9StsjKwUuPPtiCVTvc6v6';
document.addEventListener("DOMContentLoaded", init);
function init() {
    document.getElementById("mainSearchButton").addEventListener("click", e => {
        e.preventDefault();
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&limit=8&q=`;
        let searchInputValue = document.getElementById("mainSearch").value.trim();
        url = url.concat(searchInputValue);
        fetch(url)
            .then(response => response.json())
            .then(content => {
                console.log(content.data);
                console.log("META", content.meta);
                let out = document.querySelector(".gifs-output-place");
                out.innerHTML = '';
                for(let item of content.data) {
                    let fig = document.createElement("figure");
                    let img = document.createElement("img");
                    let fc = document.createElement("figcaption");
                    img.src = item.images.downsized.url;
                    img.alt = item.title;
                    fc.textContent = item.title;
                    fig.appendChild(img);
                    fig.appendChild(fc);
                    out.insertAdjacentElement("afterbegin", fig);
                }
                document.querySelector("#mainSearch").value = "";
            })
    });
}