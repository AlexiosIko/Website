// This is for portfolio transition
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



// This is for drop down details menu
const detailItems = document.querySelectorAll('.grid-item');

function mouseOver() {
    this.querySelector('.grid-item-details').classList.add('show');
}
function mouseOut() {
    this.querySelector('.grid-item-details').classList.remove('show');
}
detailItems.forEach(li => li.addEventListener('mouseover', mouseOver));
detailItems.forEach(li => li.addEventListener('mouseout', mouseOut));
