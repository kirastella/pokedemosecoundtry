document.addEventListener("DOMContentLoaded", function() {
    const modeBtns = document.querySelector('.buttons');

    let setActiveColorMode = function (mode) {
        let css = `link[rel="alternate stylesheet"]`
        let stylesheets = document.querySelectorAll(css)
        stylesheets.forEach(sheet => sheet.disabled=true )
        let selector = `link[title="${mode}"]`
        let activeSheet = document.querySelector(selector);
        activeSheet.disabled = false;
        localstModule.create("theme", mode)
    }

    let savedSheet = localstModule.read("theme")
    
    if (savedSheet) {
        setActiveColorMode(savedSheet)
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setActiveColorMode("dark")
    } else {
        setActiveColorMode("light")
    }


    if (modeBtns) {
        modeBtns.addEventListener("click", function(event) {
            if(event.target !== event.currentTarget) {
                setActiveColorMode(event.target.dataset.mode)
            }
        })
    }


})




