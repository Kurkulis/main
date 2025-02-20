window.addEventListener('DOMContentLoaded', () => renderPosts());

const container = document.querySelector('.irasai');
const searchForm = document.querySelector('.search input');


const renderPosts = async (term) => {
    let uri = 'http://localhost:3000/posts?_sort=-likes&_order=desc';

    if (term) {
        uri += `&q=${term}`; 
    }

    const res = await fetch(uri);
    const posts = await res.json();

    let template = '';
    posts.forEach(post => {
        template += `
        <div class="post">
            <h2>${post.title}</h2>
            <p><small>${post.likes} likes</small></p>
            <p>${post.body.slice(0, 200)}</p>
            <a href="details.html?id=${post.id}">Plačiau</a>
        </div>
        `;
    });

    container.innerHTML = template;
};

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nzn =  searchForm.value.trim()
    renderPosts(nzn); 
});