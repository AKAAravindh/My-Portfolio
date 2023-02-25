let mainBody = document.getElementById('body')

function visible() {
    mainBody.style.display = "block"
}

setInterval(visible, 3000)

const aboutSection = document.getElementById('section3');
const row1 = document.getElementById('row1')

window.addEventListener('scroll', () => {
    const sectionPos = aboutSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    console.log("Screen position =", sectionPos);

    if (sectionPos < (screenPos / 2)) {
        row1.style.display = 'inline-block'
    }
    else if (sectionPos >= screenPos) {
        row1.style.display = 'none'
    }
})

const row2 = document.getElementById('row2')

window.addEventListener('scroll', () => {
    const sectionPos = aboutSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    console.log("Screen position =", sectionPos);

    if (sectionPos < (screenPos / 4.5)) {
        row2.style.display = 'inline-block'
    }
    else if (sectionPos >= screenPos) {
        row2.style.display = 'none'
    }
})

// 

const child1Main = document.getElementById('one-main');
const childOne1 = document.getElementById('col1-1')
const childOne2 = document.getElementById('col2-1')

window.addEventListener('scroll', () => {
    const sectionPos = child1Main.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    console.log("Screen position =", sectionPos);

    if (sectionPos < (screenPos / 1.5)) {
        childOne1.style.transform = "translateX(0)"
        childOne2.style.transform = "translateX(0)"
    }
    else if (sectionPos >= screenPos) {
        childOne1.style.transform = "translateX(-100vw)"
        childOne2.style.transform = "translateX(100vw)"
    }
})

const child2Main = document.getElementById('two-main');
const childTwo1 = document.getElementById('col1-2')
const childTwo2 = document.getElementById('col2-2')

window.addEventListener('scroll', () => {
    const sectionPos = child2Main.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    console.log("Screen position =", sectionPos);

    if (sectionPos < (screenPos / 1.5)) {
        childTwo1.style.transform = "translateX(0)"
        childTwo2.style.transform = "translateX(0)"
    }
    else if (sectionPos >= screenPos) {
        childTwo1.style.transform = "translateX(-100vw)"
        childTwo2.style.transform = "translateX(100vw)"
    }
})

const child3Main = document.getElementById('three-main');
const childThree1 = document.getElementById('col1-3')
const childThree2 = document.getElementById('col2-3')

window.addEventListener('scroll', () => {
    const sectionPos = child3Main.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    console.log("Screen position =", sectionPos);

    if (sectionPos < (screenPos / 1.5)) {
        childThree1.style.transform = "translateX(0)"
        childThree2.style.transform = "translateX(0)"
    }
    else if (sectionPos >= screenPos) {
        childThree1.style.transform = "translateX(-100vw)"
        childThree2.style.transform = "translateX(100vw)"
    }
})

const child4Main = document.getElementById('four-main');
const childFour1 = document.getElementById('col1-4')
const childFour2 = document.getElementById('col2-4')

window.addEventListener('scroll', () => {
    const sectionPos = child4Main.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    console.log("Screen position =", sectionPos);

    if (sectionPos < (screenPos / 1.5)) {
        childFour1.style.transform = "translateX(0)"
        childFour2.style.transform = "translateX(0)"
    }
    else if (sectionPos >= screenPos) {
        childFour1.style.transform = "translateX(-100vw)"
        childFour2.style.transform = "translateX(100vw)"
    }
})