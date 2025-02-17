class Cardnews extends HTMLElement{
    constructor(){
        super()

        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build(){
        const componentRoot = document.createElement("div")
        componentRoot.setAttribute("class", "card")

        const cardLeft = document.createElement("div")
        cardLeft.setAttribute("class", "card_left")

        const cardRight = document.createElement("div")
        cardRight.setAttribute("class", "card_right")

        const autor = document.createElement("span")
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous")

        const link = document.createElement("a")
        link.textContent = this.getAttribute("title")
        link.href = this.getAttribute("link-url")

        const newsContent = document.createElement("p")
        newsContent.textContent = this.getAttribute("content")

        const img = document.createElement("img")
        img.src= this.getAttribute("photo") || "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"
        img.alt= "Darth Vader"


        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)

        cardLeft.appendChild(autor)
        cardLeft.appendChild(link)
        cardLeft.appendChild(newsContent)

        cardRight.appendChild(img)


        return componentRoot
    }

    styles(){
        const style = document.createElement("style")
        style.textContent = `
            .card{
                width: 80%;
                display: flex;
                flex-direction: row;
                -webkit-box-shadow: 10px 10px 31px -7px rgba(0,0,0,0.37);
                -moz-box-shadow: 10px 10px 31px -7px rgba(0,0,0,0.37);
                box-shadow: 10px 10px 31px -7px rgba(0,0,0,0.37);
                justify-content: space-between;
                margin: auto;
                font-family: arial;
            }

            .card_left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                alight-items: center;
                padding-left: 10px;
                height: 100%;
            }

            .card_left a{
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }

            .card_left p{
                color: rgb(59, 59, 59);
            }

            .card_left span{
                color: rgb(59, 59, 59);
                font-weight: 500;
            }
        
        `
        return style
    }
}

customElements.define("card-news", Cardnews)