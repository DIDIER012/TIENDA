const btnCart = document.querySelector('#carritoHidden');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});

const infoProduct = document.querySelector(".cart-pruduct");
const mostrar = document.querySelector("#mostrarCarrito");

const productsList = document.querySelector("#contenedor");

let allProducts = [];

productsList.addEventListener("click", (evento) => {
	

	if (evento.target.classList.contains('agregar')) {
		const productos = window.productos;

		const infoProduct = {
			cantidad: 1,
			titulo: productos.titulo,
			precio: productos.precio,
		}
		console.log(infoProduct)
		

		const existencias = allProducts.some(productos => productos.titulo  === infoProduct.titulo)

		if (existencias) {
			const productos = allProducts.map(productos => {
				if (productos.titulo === infoProduct.titulo){
					productos.cantidad++
					return productos
				} else {
					return productos
				}
			})

			allProducts = [...productos]
		}else {
			allProducts = [...allProducts, infoProduct]
		}
		mostrarCarrito();
	}
});

mostrar.addEventListener("click", (e) => {
    if(e.target.classList.contains("icon-close")){
		const productos = e.target.parentElement

		const titulo = productos.titulo

		allProducts = allProducts.filter(productos => productos.titulo !== titulo);

		mostrarCarrito();
	}
})

mostrarCarrito = () => {
	if (!allProducts.length) {
		const mostrar1 = document.querySelector('.container-cart-products');
		mostrar1.innerHTML =
			`<p class="parrafoCarrito">No hay productos seleccionados</p>`;
	}

	mostrarCarrito.innerHTML = "";

let total = 0;
let totalProducts = 0;


allProducts.forEach(productos => {
const show = document.createElement("div")
show.classList.add("cart-product")


show.innerHTML = 
		`<div class="info-cart-product">
			<span class="cantindad-producto-carrito">${productos.cantidad}</span>
			<p class="titulo-producto-carrito">${productos.titulo}</p>
			<span class="precio-producto-carrito">${productos.precio}</span>
		</div>
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
		<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
		</svg>`

	mostrar.appendChild(show);

	total = total + parseInt(productos.cantidad * productos.precio);
	totalProducts = totalProducts + productos.cantidad
});

const valorTotal = document.querySelector(".total-pagar");
const contador = document.querySelector("#contador-productos");

valorTotal.innerText = `$${total}`
contador.innerText = totalProducts

};