// Almacena los comentarios en un objeto vacío
const comments = [];

// Función para agregar un comentario
function addComment(commentText) {
    comments.push(commentText);
}

// Función para mostrar los comentarios
function showComments() {
    const commentSection = document.getElementById('comment-section');
    commentSection.innerHTML = '';

    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.textContent = comment;
        commentSection.appendChild(commentDiv);
    });
}

// Escucha el evento de clic en el botón "Enviar"
document.getElementById('submit-comment').addEventListener('click', () => {
    const commentText = document.getElementById('comment-text').value;
    if (commentText.trim() !== '') {
        addComment(commentText);
        showComments();
        document.getElementById('comment-text').value = '';
    }
});