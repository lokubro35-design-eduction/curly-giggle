const config = {
    ctaUrl: "https://t.me/+NCFWjPfcBCY1NjY1",
    logoUrl: "back.jpg",
};

document.addEventListener("DOMContentLoaded", () => {
    const heroButton = document.getElementById("hero-button");
    const heroLogo = document.getElementById("hero-logo");

    if (heroButton) {
        heroButton.href = config.ctaUrl;
    }

    if (heroLogo) {
        heroLogo.src = config.logoUrl;
    }
});
