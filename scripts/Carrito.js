/////////////////////////////////////////// LOCAL STORAGE  ///////////////////////////////////////////////////////////////////////
const carritoStorage = () => {
	localStorage.setItem('carritoArray', JSON.stringify(allProducts));
	
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const btnCart = document.querySelector('#carritoHidden');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});
const cartInfo = document.querySelector(".cart-pruduct");
const mostrar = document.querySelector("#mostrarCarrito");
const productsList = document.querySelector("#contenedor");
const valorTotal = document.querySelector(".total-pagar");
const contador = document.querySelector("#contador-productos");



let allProducts = [];


productsList.addEventListener("click", (evento) => {
	if (evento.target.classList.contains('agregar')) {
		const productId = evento.target.id
		const productoArray = productos.find(producto => producto.id == productId);
		
		const infoProduct = {
			id: productId,
			precio: productoArray.precio,
            tipo: productoArray.tipo,
			cantidad: 1
		}
		const existencias = allProducts.some(product => product.id  === infoProduct.id)

		if (existencias) {  
            allProducts.forEach(product => {  
                if (product.id === infoProduct.id) {  
                    product.cantidad++;  
                }  
            });  
        } else {  
            allProducts.push(infoProduct);  
        }  
	mostrarCarrito();
	
	
	};
});

mostrar.addEventListener("click", (e) => {
    if (e.target.classList.contains("icon-close")) {
        const closeProductId = e.target.id;

        allProducts = allProducts.filter(producto => producto.id !== closeProductId);
		console.log(allProducts)
        
        mostrarCarrito();
    }
});


mostrarCarrito = () => {
// if (!allProducts.length) {
// 	containerCartProducts.innerHTML =
// 		`<p class="parrafoCarrito">No hay productos seleccionados</p>`;
// 			console.log(allProducts);
// }

	mostrar.innerHTML = "";

let total = 0;
let totalProducts = 0;


allProducts.forEach(infoProduct => {
const containerProducts = document.createElement("div")
containerProducts.classList.add("cart-product")


containerProducts.innerHTML = 
		`<div class="info-cart-product">
			<span class="cantindad-producto-carrito">${infoProduct.cantidad}</span>
			<p class="titulo-producto-carrito">${infoProduct.tipo}</p>
			<span class="precio-producto-carrito">${infoProduct.precio}</span>
		
		<svg xmlns="http://www.w3.org/2000/svg" 
		fill="none" 
		viewBox="0 0 24 24" 
		stroke-width="1.5" 
		stroke="currentColor" 
		class="icon-close" id = ${infoProduct.id}>
		<path 
			stroke-linecap="round" 
			stroke-linejoin="round" 
			d="M6 18 18 6M6 6l12 12" 
			/>
		</svg>
		</div>
		`

	mostrar.append(containerProducts);

	total = total + parseInt(infoProduct.cantidad * infoProduct.precio);
	totalProducts = totalProducts + infoProduct.cantidad
});

valorTotal.innerText = `TOTAL $${total}`
contador.innerText = totalProducts
carritoStorage();
};

window.addEventListener('DOMContentLoaded', () => {
    const carritoStorage = localStorage.getItem('carritoArray');
    if (carritoStorage) {
        allProducts = JSON.parse(carritoStorage);
        mostrarCarrito();
    }
});