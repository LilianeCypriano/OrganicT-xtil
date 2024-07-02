
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
  } else {
    ready()
  }



function ready(){
    const removeProductButtons = document.getElementsByClassName("remove-product-button")
for (var i = 0; i < removeProductButtons.length; i++) {
    removeProductButtons[i].addEventListener("click", function(event) {
        event.target.parentElement.parentElement.remove()
        updateTotal()
    } )} 
}

 // Mudança valor dos inputs
 const quantityInputs = document.getElementsByClassName("product-qtd-input")
 for (var i = 0; i < quantityInputs.length; i++) {
   quantityInputs[i].addEventListener("change", updateTotal)
 }

function updateTotal() {
    const cartProducts = document.getElementsByClassName("cart-product")
    totalAmount = 0
  
    for (var i = 0; i < cartProducts.length; i++) {
      const productPrice = cartProducts[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", ".")
      const productQuantity = cartProducts[i].getElementsByClassName("product-qtd-input")[0].value
  
      totalAmount += productPrice * productQuantity
    }
    
    totalAmount = totalAmount.toFixed(2)
    totalAmount = totalAmount.replace(".", ",")
    document.querySelector(".cart-total-container span").innerText = "R$" + totalAmount
  }
    


//   Verificar função

  function addProductToCart(event) {
    const button = event.target
    // const productInfos = button.parentElement.parentElement
    const productName = productInfos.getElementById('descricaoo') [0].innerText
    const productPrice = productInfos.getElementById('valorr')[0].innerText


  
    let newCartProduct = document.createElement("tr")
    newCartProduct.classList.add("cart-product")
  
    newCartProduct.innerHTML =
      `
        <td class="product-identification">
          <strong class="cart-product-title">${productName}</strong>
        </td>
        <td>
          <span class="cart-product-price">${productPrice}</span>
        </td>
        <td>
          <input type="number" value="1" min="0" class="product-qtd-input">
          <button type="button" class="remove-product-button">Remover</button>
        </td>
      `
    
    const tableBody = document.querySelector(".cart-table tbody")
    tableBody.append(newCartProduct)
    updateTotal()
  
    newCartProduct.getElementsByClassName("remove-product-button")[0].addEventListener("click", removeProduct)
    newCartProduct.getElementsByClassName("product-qtd-input")[0].addEventListener("change", checkIfInputIsNull)
  }