document.addEventListener("DOMContentLoaded", function(){  
    const modeBtns = document.querySelector('.buttons');
 
    console.log(modeBtns);
 
    let setActiveColorMode = function(mode){
        let css = `link[rel="alternate stylesheet"]`
        let stylesheets = document.querySelectorAll(css)
        console.log(stylesheets);
        stylesheets.forEach(sheet => sheet.disabled=true)
        let selector = `link[title="${mode}"]`
        let activeSheet = document.querySelector(selector);
        console.log(activeSheet);
        activeSheet.disabled = false;
        localstModule.create("theme", mode)
    }
 
    let savedSheet = localstModule.read("theme")
    
    if(savedSheet) {
        setActiveColorMode(savedSheet)
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme)').matches){
        setActiveColorMode("dark")
    
    }else{
        setActiveColorMode("light")
    }
 
    if(modeBtns){
        modeBtns.addEventListener("click", function(event){
            if (event.target !== event.currentTarget){
                setActiveColorMode(event.target.dataset.mode)
                console.log(event.target.dataset.mode); 
            } 
        })
    }
 
})