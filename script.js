document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
        (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
            }
        });
        },
        {
        threshold: 0.3,
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});
