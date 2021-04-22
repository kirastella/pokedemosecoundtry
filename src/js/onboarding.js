document.addEventListener("DOMContentLoaded", function() {

    const overlay = document.querySelector(".overlay");
    const nextBtn = overlay.querySelector(".nextBtn");
    const skipBtn = overlay.querySelector(".skipBtn");
    const content = overlay.querySelector(".overlay__content")

    //localstModule.create("onboardingComplete", "true")
    //localStorage.setItem()

    function step(message, xcord, ycord) {
        let container = document.createElement("div");
        container.className = "overlay__tooltip"
        
        let svg = `
        <svg viewbox="0 0 350 200" width="350" height="200">
            <circle class="myCircle" cx="60" cy="60" r="40" stroke="lightblue" stroke-width="5" fill="none" />
            <path class="tooltip" d="M90,90 
                h200 
                a40,40 0 0 1 40,40
                a40,40 0 0 1 -40,40
                h-160 
                a40,40 0 0 1 -40,-40
                z" fill="lightblue"  />
        </svg> 
        `
        let tooltipText = document.createElement("p");
        tooltipText.innerText = message;
        tooltipText.className = "overlay__tooltipText"

        container.innerHTML = svg;
        container.appendChild(tooltipText)
        content.appendChild(container)

        console.log(container)

        container.style.top = ycord;
        container.style.left = xcord;

        

    }

    if (localstModule.read("onboardingComplete") != "true") {
        step("Click here to view Pokemon details", "60px", "200px")
        increaseCurrentStep()
    } else {
        overlay.remove();
    }

    nextBtn.addEventListener("click", function() {
        let currentStep = localstModule.read("currentStep")
        console.log("nextbtn", currentStep)
        removeContent()

        if(currentStep == "1") {
            step("Find Pokemons by their name!", "50px", "-20px" )
            increaseCurrentStep()
        }

        if(currentStep == "2") {
            step("Use buttons to switch page.", "80px", "450px" )
            increaseCurrentStep()
        }

        if(currentStep == "3") {
            localstModule.create("onboardingComplete", "true")
            overlay.remove()
        }
    })

    skipBtn.addEventListener("click", function(){
        localstModule.create("onboardingComplete", "true")
        overlay.remove()
    })


    function removeContent() {
        content.removeChild(content.children[0])
    }

    function increaseCurrentStep() {
        let mystep = localstModule.read("currentStep") ? parseInt(localstModule.read("currentStep")) + 1 : 1;
        localstModule.create("currentStep", mystep);
    }

});