const searchBar = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const addProductBtn = document.getElementById("addProductBtn");
const addProductForm = document.getElementById("addProductForm");
const errorMsg = document.getElementById('errorMsg');
const productList = document.getElementById('product-list');


searchBtn.addEventListener('click', function () {

    const searchTerm = searchBar.value.toLowerCase();
    const productItems = document.querySelectorAll('.product-item');

    productItems.forEach(function (item) {

        const productName = item.querySelector('h2').textContent.toLowerCase();

        if (productName.includes(searchTerm)) {

            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
})

addProductBtn.addEventListener('click', function () {
    addProductForm.classList.toggle("hidden");
})

addProductForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('add-product-name').value.trim()
    const desc = document.getElementById('add-product-desc').value.trim()
    const price = document.getElementById('add-product-price').value.trim()

    const priceNum = Number(price)

    if (name === '' || price === '') {
        errorMsg.textContent = "Please input complete name and price"
    } else if (isNaN(priceNum) || priceNum <= 0) {
        errorMsg.textContent = "Invalid price"
    } else {
        errorMsg.textContent = ""
        console.log("Valid data")

        const newItem = document.createElement('article');
        newItem.className = 'product-item';
        newItem.innerHTML = `
            <h2 class="product-name">${name}</h2>
            <p class="product-desc">${desc}</p>
            <img src="images/placeholder.jpg" alt="${name}"> 
            <p class="product-price">$${priceNum}</p>
        `;

        productList.prepend(newItem);

        addProductForm.reset();

        addProductForm.classList.add("hidden");
    }
})