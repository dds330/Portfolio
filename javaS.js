// Dot menu functionality for index page
const dotIcon = document.querySelector(".dotIcon");
const dotMenu = document.querySelector(".navDot-menu");

if (dotIcon && dotMenu) {
    dotIcon.addEventListener("click", () => {
        dotIcon.classList.toggle("active");
        dotMenu.classList.toggle("active");
    });

    document.querySelectorAll(".dotLink").forEach(n => n.addEventListener("click", (e) => {
        dotIcon.classList.remove("active");
        dotMenu.classList.remove("active");
        
        // Smooth scroll for anchor links
        if (n.getAttribute("href") && n.getAttribute("href").startsWith("#")) {
            e.preventDefault();
            const targetId = n.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }));

    // Close button functionality
    const closeButton = document.querySelector(".closeMenuButton");
    if (closeButton) {
        closeButton.addEventListener("click", () => {
            dotIcon.classList.remove("active");
            dotMenu.classList.remove("active");
        });
    }
}
