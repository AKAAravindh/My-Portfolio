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

// 

const child1Main = document.getElementById('one-main');
const childOne = document.getElementById('child-one')

window.addEventListener('scroll', () => {
    const sectionPos = child1Main.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    console.log("Screen position =", sectionPos);

    if (sectionPos < (screenPos / 1.5)) {
        childOne.style.display = "block"
    }
    else {
        childOne.style.display = "none"
    }
})

const child2Main = document.getElementById('two-main');
const childTwo = document.getElementById('child-two')

window.addEventListener('scroll', () => {
    const sectionPos = child2Main.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    console.log("Screen position =", sectionPos);

    if (sectionPos < (screenPos / 1.5)) {
        childTwo.style.display = "block"
    }
    else {
        childTwo.style.display = "none"
    }
})

const child3Main = document.getElementById('three-main');
const childThree = document.getElementById('child-three')

window.addEventListener('scroll', () => {
    const sectionPos = child3Main.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    console.log("Screen position =", sectionPos);

    if (sectionPos < (screenPos / 1.5)) {
        childThree.style.display = "block"
    }
    else {
        childThree.style.display = "none"
    }
})

const child4Main = document.getElementById('four-main');
const childFour = document.getElementById('child-four')

window.addEventListener('scroll', () => {
    const sectionPos = child1Main.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    console.log("Screen position =", sectionPos);

    if (sectionPos < (screenPos / 1.5)) {
        childFour.style.display = "block"
    }
    else {
        childFour.style.display = "none"
    }
})