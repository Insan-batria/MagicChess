
document.addEventListener("DOMContentLoaded", () => {
    const articles = [
        { title: "Tips Main Magic Chess untuk Pemula", link: "articles/tips-pemula.html" },
        { title: "Combo Terbaik di Patch Terbaru", link: "articles/combo-terbaik.html" }
    ];

    const listContainers = [
        document.getElementById("article-list"),
        document.getElementById("full-article-list")
    ].filter(Boolean);

    listContainers.forEach(container => {
        articles.forEach(article => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = article.link;
            a.textContent = article.title;
            li.appendChild(a);
            container.appendChild(li);
        });
    });
});
