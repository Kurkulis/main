const form = document.querySelector('form');

const createPost = async (e) => {
    e.preventDefault();

    const doc = {
        title: form.title.value,
        body: form.body.value,
        likes: 0,
    };

    let response = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify(doc),
        headers: { 'Content-Type': 'application/json' }
    });



    let atgalDiv = document.getElementById('create-back');

    if (response.ok) {
        atgalDiv.classList.remove('nematomas')
    } else {
        alert('Error creating post'); // Basic error alert
    }

    // window.location.replace('file:///C:/Users/Vartotojas/Desktop/JAVA%20fs%20VCS/GIT/JS-API/uzdaviniai/jsonserver/index.html');
};

form.addEventListener('submit', createPost);
