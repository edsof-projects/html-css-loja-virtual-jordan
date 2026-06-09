const getProducts  = async () =>{
    const response = await fetch('js/products.json')
    const data     = await response.json()
    return data
}

const generateCard = async () =>{
    const products = await getProducts()
    products.map(product => {
        let card = document.createElement('div')
        card.classList.add('card__product')
        card.innerHTML = `
            <figure>
                <img src="images/${product.image}" alt="${product.product_name}">
            </figure>
            <div class="card__product_details">
                <h4>${product.product_name}</h4>
                <h5>${product.product_model}</h5>
            </div>
            <div class="card__product_price">
                <h6>R$ ${product.product_price}</h6>
            </div>
        `
        const listProducts = document.querySelector('.listing__products')
        listProducts.appendChild(card)
    })

}

generateCard()