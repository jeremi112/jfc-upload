document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('file-input');
    const imageFrame = document.getElementById('image-frame');
    const uploadButton = document.getElementById('upload-button');
    const productNameInput = document.getElementById('product-name');
    const productPriceInput = document.getElementById('product-price');

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                imageFrame.innerHTML = '';
                imageFrame.appendChild(img);
                img.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    uploadButton.addEventListener('click', () => {
        const productName = productNameInput.value;
        const productPrice = productPriceInput.value;
        
        if (productName && productPrice && fileInput.files.length > 0) {
            alert('Terima kasih sudah berbagi, makanan anda sangat berarti bagi mereka yang membutuhkan.');
        } else {
            alert('Silakan lengkapi semua informasi dan unggah gambar.');
        }
    });
});
