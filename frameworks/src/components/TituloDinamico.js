class TituloDinamico extends HTMLElement {
    constructor(){
        super()

        const shadow = this.attachShadow({mode: "open"})

        //<h1>Jaqueline</h1>
        const componentBoot = document.createElement('h1')
        componentBoot.textContent = this.getAttribute("titulo");


        const style = document.createElement('style')
        style.textContent = `
            h1{
            color: red;
            }
        
        `

        shadow.appendChild(componentBoot)
        shadow.appendChild(style)
    }
}

customElements.define('titulo-dinamico', TituloDinamico)