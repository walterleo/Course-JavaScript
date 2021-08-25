
//const precioOriginal = 100;
//const descuento = 15;

function calcularPrecioConDescuento(precio, descuento){

    
const porcentajePrecioDescuento = 100 - descuento;

const precioConDescuento = (precio * porcentajePrecioDescuento)/100;

return precioConDescuento;

}

function onClickPriceButton() {
    const inputPrice = document.getElementById("price");

    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("descuento");
    const discountValue = inputDiscount.value;

const precioDescuento = calcularPrecioConDescuento(priceValue, discountValue);

const resultP = document.getElementById("Result");
resultP.innerText = "El precio de descuento es $" + precioDescuento;

}

// const porcentajePrecioDescuento = 100 - descuento;

// const precioConDescuento = (precioOriginal * porcentajePrecioDescuento)/100;

// console.log({

//     precioOriginal,
//     descuento,
//     porcentajePrecioDescuento,
//     precioConDescuento

// });
