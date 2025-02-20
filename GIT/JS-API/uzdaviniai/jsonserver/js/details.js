const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');

const renderDetails = async () => {
    const res = await fetch('http://localhost:3000/posts/' + id);
    const post = await res.json();

    const template = `
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        
    `;

    container.innerHTML = template;
};

window.addEventListener('DOMContentLoaded', () => renderDetails());




const deleteBtn = document.querySelector('.delete');

deleteBtn.addEventListener('click', async (e) => {
    const res = await fetch('http://localhost:3000/posts/' + id, {
        method: 'DELETE'
    })
    window.location.replace('file:///C:/Users/Vartotojas/Desktop/JAVA%20fs%20VCS/GIT/JS-API/uzdaviniai/jsonserver/index.html')
});

