// Function to show a specific content page
async function showContent(contentId) {
    const landingPage = document.getElementById('landing-page');
    const contentContainer = document.getElementById('content-container');

    // Hide the landing page
    landingPage.style.display = 'none';

    try {
        // Fetch the content from the corresponding HTML file
        const response = await fetch(`${contentId}.html`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const htmlContent = await response.text();

        // Inject the fetched HTML into the content container
        contentContainer.innerHTML = htmlContent;
        contentContainer.classList.add('active');

        // Scroll to top after navigation
        window.scrollTo(0, 0);

    } catch (error) {
        console.error("Could not load content:", error);
        contentContainer.innerHTML = `<h1>Maaf, konten tidak dapat dimuat.</h1><p> pastikan Anda menjalankan file ini melalui server lokal (seperti Live Server).</p>`;
        contentContainer.classList.add('active');
    }
}

// Function to show the landing page
function showLanding() {
    const landingPage = document.getElementById('landing-page');
    const contentContainer = document.getElementById('content-container');

    // Hide the content container
    contentContainer.classList.remove('active');
    contentContainer.innerHTML = ''; // Clear previous content

    // Show the landing page
    landingPage.style.display = 'block';
}