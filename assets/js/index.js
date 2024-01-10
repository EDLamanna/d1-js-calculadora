precio = 400000

precioSpan = document.querySelector(".precio-inicial")
precioSpan.innerHTML = precio.toLocaleString()


const selector1 = document.querySelector(".btn1")
const selector2 = document.querySelector(".btn2")
const cuantity = document.querySelector("#cantidad")
const pay = document.querySelector(".valor-total")

selector1.addEventListener("click", () => {
    const newCuantityPlus = parseInt(cuantity.textContent) + 1
    cuantity.innerHTML = newCuantityPlus
    const tPay = precio * cuantity.innerHTML
    pay.innerHTML = tPay.toLocaleString()
})

selector2.addEventListener("click", () => {
    const newCuantityMinus = Math.max(0, parseInt(cuantity.textContent) - 1)
    cuantity.innerHTML = newCuantityMinus
    const tPay = precio * cuantity.innerHTML
    pay.innerHTML = tPay.toLocaleString()
})




