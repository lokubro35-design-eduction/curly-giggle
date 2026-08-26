const config = {
    ctaUrl: "https://t.me/+ZUMK-aXb7rQ2ZDU1",
    logoUrl: "/image.png",
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