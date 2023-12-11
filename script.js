let button = document.querySelector("#myButton")

let cost = document.querySelector("#cost")
let result



button.addEventListener("click",function(){
    let distance = Number(document.querySelector("#distance").value)
    let fuel_cost = Number(document.querySelector("#fuel_cost").value)
    let eat = Number(document.querySelector("#eat").value)

    console.log((distance/100) * eat * fuel_cost)
    if (distance.Number && fuel_cost.Number && eat.Number){
        cost.value = (distance/100) * eat * fuel_cost
    }else{
        alert("Обнаружены неверно введенны параметры")
    }
});