document.addEventListener("DOMContentLoaded", function() {
    const pokelistElm = document.querySelector(".pokelist")
    const pokefooter = document.querySelector(".pokefooter")
    
    if (pokelistElm) {

    let url = new URLSearchParams(window.location.search)

    /*let offset;
    if (url.get("offset")) {
        offset = url.get("offset")
    } else {
        offset = 0
    }*/

    let offset = url.get("offset") ? url.get("offset") : 0;
    console.log(typeof(offset))
    let nextOffset;
    let prevOffset;


    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            let maxOffset = data.count - data.count % 20;
            console.log(maxOffset)

            nextOffset = offset >= maxOffset ? maxOffset : parseInt(offset) + 20
            prevOffset = offset <= 0 ? 0 : parseInt(offset) - 20;


            data.results.forEach(pokemon => {

                let li = document.createElement('li')
                li.classList.add("pokelist__item")

                li.innerHTML = `
                    <a href="/pokemon?name=${pokemon.name}&backpage=${offset}" class="pokelist__link">
                        ${pokemon.name}
                    </a>
                `
                pokelistElm.appendChild(li)
            })


            let prev = document.createElement("a");
            prev.classList.add("btn");
            if(offset == 0) prev.classList.add("btn_disabled");
            prev.setAttribute("href", `?offset=${prevOffset}`)
            let prevNode = document.createTextNode("Previous")
            prev.appendChild(prevNode)
            pokefooter.appendChild(prev)


            let next = document.createElement("a");
            next.classList.add("btn")
            if(offset >= maxOffset) next.classList.add("btn_disabled")
            next.setAttribute("href", `?offset=${nextOffset}`)
            let nextNode = document.createTextNode("Next")
            next.appendChild(nextNode)
            pokefooter.appendChild(next)
        })

    }
})