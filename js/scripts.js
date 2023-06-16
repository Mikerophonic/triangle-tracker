// UI Logic

window.onload = function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) { 
        event.preventDefault();
        const side1 = parseInt(document.querySelector("input#side1").value);
        const side2 = parseInt(document.querySelector("input#side2").value);
        const side3 = parseInt(document.querySelector("input#side3").value);
        const equilateral = document.getElementById("equilateral");
        const isosceles = document.getElementById("isosceles");
        const scalene = document.getElementById("scalene");
        const nontriangle = document.getElementById("scalene");
        nontriangle.setAttribute("class", "hidden");
        equilateral.setAttribute("class", "hidden");
        isosceles.setAttribute("class", "hidden");
        scalene.setAttribute("class", "hidden");



        
        if (side1 === side2 && side2 === side3) {
            equilateral.removeAttribute("class");
        }
        else if (side1 === side2 || side1 === side3 || side2 === side3) {
            isosceles.removeAttribute("class");
        }
        else if (side3 >= (side1 + side2) || side2 >= (side1 + side3) || side1 >= (side2 + side3)) {
            nontriangle.removeAttribute("class");
        }
        else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
            scalene.removeAttribute("class");
        }

    })
}
