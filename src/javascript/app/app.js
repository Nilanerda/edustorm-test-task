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