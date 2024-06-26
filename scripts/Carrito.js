const btnCart = document.querySelector('#carritoHidden');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});

const info = document.querySelector(".cart-pruduct");
const mostrar = document.querySelector("#mostrarCarrito");

const productsList = document.querySelector("#contenedor");

let allProducts = [];

productsList.addEventListener("click", (evento) => {

	if (evento.target.classList.contains('agregar')) {
		const product = evento.target.parentElement;

		const infoProduct = {
			cantidad: 1,
			titulo: infoProduct.titulo,
			titulo: productos.titulo,
			precio: infoProduct.precio,
		}
		console.log(infoProduct)

		const existencias = allProducts.some(product => product.titulo  === infoProduct.titulo)

		if (existencias) {
			const products = allProducts.map(product => {
				if (product.titulo === infoProduct.titulo){
					product.cantidad++
					return product
				} else {
					return product
				}
			})

			allProducts = [...products]
		}else {
			allProducts = [...allProducts, infoProduct]
		}
		mostrarCarrito();
	}
});

mostrar.addEventListener("click", (e) => {
    if(e.target.classList.contains("icon-close")){
		const product = e.target.parentElement

		const titulo = infoProduct.titulo

		allProducts = allProducts.filter(product => product.titulo !== titulo);

		mostrarCarrito();
	}
})

mostrarCarrito = () => {
	if(!allProducts.length){
		containerCartProducts.innerHTML =
		`<p class= "parrafoCarrito></p>"`

	}
mostrarCarrito.innerHTML = "";

let total = 0;
let totalProducts = 0;


allProducts.forEach(product => {
const show = document.createElement("div")
show.classList.add("cart-product")


show.innerHTML = 
		`<div class="info-cart-product">
			<span class="cantindad-producto-carrito">${product.cantidad}</span>
			<p class="titulo-producto-carrito">${product.titulo}</p>
			<span class="precio-producto-carrito">${product.precio}</span>
		</div>
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
		<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
		</svg>`

	mostrar.appendChild(show);

	total = total + parseInt(product.cantidad * product.precio.slice(1));
	totalProducts = totalProducts + product.cantidad
});

const valorTotal = document.querySelector(".total-pagar");
const contador = document.querySelector("#contador-productos");

valorTotal.innerText = `$${total}`
contador.innerText = totalProducts

}


