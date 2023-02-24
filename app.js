let mainBody = document.getElementById('body')

function visible() {
    mainBody.style.display = "block"
}

setInterval(visible, 3000)

const aboutSection = document.getElementById('section3');
const row1 = document.getElementById('row1')
const row2 = document.getElementById('row2')

window.addEventListener('scroll', () => {
    const sectionPos = aboutSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    console.log("Screen position =",sectionPos);

    if (sectionPos < (screenPos / 2)) {
        row1.style.display = 'inline-block'
        row2.style.display = 'inline-block'
    }
    else {
        row1.style.display = 'none'
        row2.style.display = 'none'
    }
})