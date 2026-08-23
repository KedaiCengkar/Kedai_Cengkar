function renderNews() {
    const container = document.getElementById("news-grid");
    if (!container) return;

    container.innerHTML = newsData.map(item => `
        <article class="news-card">
            <span class="news-date">${item.date}</span>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
            <a href="${item.linkHref}" class="news-link">${item.linkText} <i data-feather="arrow-right"></i></a>
        </article>
    `).join("");
}

function renderJadwal() {
    const container = document.getElementById("jadwal-list");
    if (!container) return;

    container.innerHTML = jadwalData.map(item => `
        <div class="jadwal-item">
            <div class="jadwal-day">
                <span class="day">${item.day}</span>
                <span class="date">${item.date}</span>
            </div>
            <div class="jadwal-info">
                <h3>${item.band}</h3>
                <p>${item.genre}</p>
            </div>
            <div class="jadwal-time">${item.time}</div>
        </div>
    `).join("");
}