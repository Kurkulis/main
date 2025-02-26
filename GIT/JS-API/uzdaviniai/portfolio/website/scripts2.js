const BASE_URL = 'http://localhost:7788';

const getData = (url) => {
    return fetch(BASE_URL + url).then(response => response.json())
}

const generateProjectsHTML = (projects) => {
    return projects.map(project => `
        <div class="project-card">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
                <div class="tags">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            <button>Žiūrėti</button>
        </div>`).join('');
};

const generateWorkExperienceHTML = (workExp) => {
    return  workExp.map(works =>  `
        <div class="experience-card">
            <h3>${works.company}</h3>
            <p>${works.title}</p>
            <p>${works.date}</p>
            <p>${works.location}</p>
            <p>${works.description}</p>
            <div class="tags">
                ${works.skills.map(skill => `<span>${skill}</span>`).join('')}
            </div>
        </div>`).join('');
}


window.addEventListener('DOMContentLoaded', async () => {
    let projects = await getData('/projects/latest/3');
    let workExp = await getData('/work-experience/latest/2')

    document.querySelector('.project-list').innerHTML = generateProjectsHTML(projects);
    document.querySelector('.experience-list').innerHTML = generateWorkExperienceHTML(workExp);
});