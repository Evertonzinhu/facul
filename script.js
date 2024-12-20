// Função para abrir a imagem no lightbox
function openImageLightbox(img) {
    var lightbox = document.getElementById('lightbox');
    var lightboxContent = document.getElementById('lightbox-content');
    lightbox.style.display = 'flex'; // Exibe o lightbox
    lightboxContent.innerHTML = '<img src="' + img.src + '" id="lightbox-image" alt="Imagem maior">'; // Exibe a imagem maior
}

// Função para abrir o vídeo no lightbox
function openVideoLightbox(videoUrl) {
    var lightbox = document.getElementById('lightbox');
    var lightboxContent = document.getElementById('lightbox-content');
    lightbox.style.display = 'flex'; // Exibe o lightbox
    lightboxContent.innerHTML = '<iframe width="80%" height="80%" src="' + videoUrl + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'; // Exibe o vídeo
}

// Função para fechar o lightbox
function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Esconde o lightbox
    document.getElementById('lightbox-content').innerHTML = ''; // Limpa o conteúdo
}
