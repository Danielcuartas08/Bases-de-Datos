function getProduct() {
    const productId = document.getElementById('productId').value;
    const productInfo = document.getElementById('productInfo');
    
    fetch(`/products/${productId}`)
        .then(response => response.json())
        .then(data => {
            const productInfo = document.getElementById('productInfo');
            productInfo.innerHTML = `
                <p>ID: ${data.id}</p>
                <p>Nombre: ${data.name}</p>
                <p>Descripción: ${data.description}</p>
                <p>Precio: ${data.price}</p>`;
        })
        .catch(error => {
            console.error('Error:', error);
            productInfo.innerHTML = 'Producto no encontrado';
        });
}
