function calcularPrecioConDescuento(precio, descuento, cupon) {

    if (descuento != ""){
      var value2 = parseInt(descuento);
    }else{
      var value2 = 0;
    }
    var value1 = parseInt(cupon);
    const porcentajePrecioConDescuento = 100 - (value2 + value1);
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
    return precioConDescuento;
  }
                      //Primera y segunda solucion 
  //  const coupons = [
  //     "Raul",
  //     "Romero",
  //     "Sanchez",
  // ];

  const coupons = [
    {
        name: "Raul",
        discount: 15,
    },
    {
        name: "Romero",
        discount: 30,
    },
    {
        name: "Sanchez",
        discount: 25,
    },
    {
      name: "",
      discount: 0,
    },


];

  
  function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

   
    const inputCupon = document.getElementById("InputCupon");
    const cuponValue = inputCupon.value;
    
                    //Primer solucion  
  //   let descuento1;

  // switch(cuponValue) {
  //   case coupons[0]: 
  //     descuento1 = 15;
  //   break;
  //   case coupons[1]: 
  //     descuento1 = 30;
  //   break;
  //   case coupons[2]: 
  //     descuento1 = 25;
  //   break;
  // }
                    //Segunda solucion 
//   if (cuponValue === "") {
//     descuento1 = 0;
//  } else if (cuponValue === "Raul") {
//     descuento1 = 15;
//  }else if (cuponValue === "Romero") {
//     descuento1 = 30;
//  } else if (cuponValue === "Sanchez") {
//     descuento1 = 25;
//  } else if(!coupons.includes(cuponValue) & cuponValue != "") {
//     alert("El cupón " + cuponValue + " no es válido");
//  }


const isCouponValueValid = function (coupon) {
  return coupon.name === cuponValue;
};
const userCoupon = coupons.find(isCouponValueValid);

if (!userCoupon & cuponValue != "") {
  alert("El cupón " + cuponValue + " no es válido");
}
    const descuento1 = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue, descuento1);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
}
  


 