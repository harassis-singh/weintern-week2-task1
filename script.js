
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
            menuToggle.textContent = "☰";
        });
    });
}

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* ===== Contact Form Validation ===== */
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    const feedback = document.getElementById("form-feedback");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        feedback.textContent = "";
        feedback.className = "form-feedback";

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (
            name.length < 2 ||
            email.length === 0 ||
            subject.length < 3 ||
            message.length < 10
        ) {
            feedback.textContent =
                "Please check your details and complete all fields correctly.";
            feedback.classList.add("error");
            return;
        }

        feedback.textContent =
            "Thank you, " + name + "! Your form passed validation. " +
            "This demo does not send messages to a server.";

        feedback.classList.add("success");
        contactForm.reset();
    });
}

