// ========================================
// Project Data
// ========================================

const projects = [
    {
        title: "Sample Project 1",
        description: "첫 번째 샘플 프로젝트입니다. 여기에 프로젝트 설명을 작성하세요.",
        path: "App/sample-project-1",
        tags: ["JavaScript", "HTML", "CSS"],
        thumbnail: null // null이면 기본 그라디언트 배경 사용
    },
    {
        title: "Sample Project 2",
        description: "두 번째 샘플 프로젝트입니다. 다양한 웹 앱을 추가할 수 있습니다.",
        path: "App/sample-project-2",
        tags: ["Web App", "Interactive"],
        thumbnail: null
    }
    // 새 프로젝트를 추가하려면 여기에 객체를 추가하세요:
    // {
    //   title: "프로젝트 이름",
    //   description: "프로젝트 설명",
    //   path: "App/project-folder",
    //   tags: ["태그1", "태그2"],
    //   thumbnail: "이미지 URL (선택)"
    // }
];

// ========================================
// Render Projects
// ========================================

function renderProjects() {
    const container = document.getElementById('projects-container');

    if (projects.length === 0) {
        container.innerHTML = `
      <div class="text-center mt-lg" style="grid-column: 1/-1;">
        <h2>아직 프로젝트가 없습니다</h2>
        <p>index.js 파일의 projects 배열에 프로젝트를 추가해보세요!</p>
      </div>
    `;
        return;
    }

    projects.forEach(project => {
        const card = createProjectCard(project);
        container.appendChild(card);
    });
}

// ========================================
// Create Project Card
// ========================================

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.onclick = () => navigateToProject(project.path);

    // Thumbnail
    const thumbnail = document.createElement('div');
    thumbnail.className = 'card-thumbnail';

    if (project.thumbnail) {
        const img = document.createElement('img');
        img.src = project.thumbnail;
        img.alt = project.title;
        thumbnail.appendChild(img);
    }
    // else: 기본 그라디언트 배경이 CSS에서 적용됨

    // Content
    const content = document.createElement('div');
    content.className = 'card-content';

    const title = document.createElement('h2');
    title.textContent = project.title;

    const description = document.createElement('p');
    description.className = 'card-description';
    description.textContent = project.description;

    // Tags
    const tagsContainer = document.createElement('div');
    tagsContainer.className = 'card-tags';

    if (project.tags && project.tags.length > 0) {
        project.tags.forEach(tagText => {
            const tag = document.createElement('span');
            tag.className = 'tag';
            tag.textContent = tagText;
            tagsContainer.appendChild(tag);
        });
    }

    // Assemble card
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(tagsContainer);

    card.appendChild(thumbnail);
    card.appendChild(content);

    return card;
}

// ========================================
// Navigation
// ========================================

function navigateToProject(path) {
    // GitHub Pages에서는 상대 경로로 이동
    window.location.href = path;
}

// ========================================
// Initialize
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});
