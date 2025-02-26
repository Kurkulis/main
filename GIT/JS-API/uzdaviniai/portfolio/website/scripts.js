function addProductsIntoWeb(project) {
    let projectDiv = document.querySelector('.project-list');
    projectDiv.innerHTML = '';

    project.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        projectCard.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
                <div class="tags">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            <button>Žiūrėti</button>
        `;        
        projectDiv.appendChild(projectCard);
        
    });
};


window.addEventListener('DOMContentLoaded', () => {
    fetch ('http://localhost:7788/projects/latest/3')
    .then(response => response.json())
    .then(data => addProductsIntoWeb(data))
    .catch(error => console.error("Error:", error));
    
})


