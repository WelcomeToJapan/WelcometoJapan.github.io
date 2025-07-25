// main.js

/**
 * Initializes the mobile menu toggle functionality.
 * This function should be called AFTER the header.html content
 * has been loaded into the DOM.
 */
function initializeMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    } else {
        console.warn('Mobile menu button or menu div not found. Mobile menu functionality may not work.');
    }
}

// You can add other global JavaScript functions here later if needed.
// Example:
// function initializeImageSliders() { /* ... */ }
// function setupFormValidation() { /* ... */ }
