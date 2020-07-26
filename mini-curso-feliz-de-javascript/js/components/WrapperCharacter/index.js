const pathGueio = 'images/minion.png'

const gueio = Character `
        width: 22%;
        ${pathGueio}
`
const WrapperCharacters = (css, children) => ( // tudo que vim do css é string que seria uma Tagged Template String, e tudo do children que é o segundo parametro que vai ser os gueios no caso
    `
            <div style="${css}">${children}</div>
     `
)

const wrapperCharacters = WrapperCharacters ` 
    display: flex;
    justify-content: space-evenly;
    ${gueio + gueio + gueio}

`