// // BOM - window
// // DOM - document
// const root = document.querySelector('#root')

// function newElement(tag, content) {
//     const title = `<${tag}>${content}</${tag}>`
//     root.insertAdjacentHTML('beforeend', title)
// }


// newElement('h4', 'Eita!')
// newElement('h1', 'Avá')

const root = document.querySelector('#root')
const textTitle = 'Dificuldade'


// Tagged Template String
const title = Title ` 
        color : #82589F;
        font-size: 2.5rem;
        letter-spacing: 1.2px;
        margin-bottom:4rem;
        ${textTitle}       
`



root.insertAdjacentHTML('beforeend', title)
root.insertAdjacentHTML('beforeend', wrapperCharacters)