import storageController from '../controllers/storageController.js';
import { translationMetadata } from "./translations.js";

export function initLanguage() {
    const languageMenu = document.getElementById('dropdown-menu');
    // get current language
    const currentLanguage = storageController.getPreferredLanguage()

    // Set button text and icon for active translation
    const menuBtn = document.getElementById("menu-btn")
    menuBtn.setAttribute('aria-haspopup', 'true');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('tabindex', '0');
    menuBtn.innerHTML = `<span class="${translationMetadata[currentLanguage]['flag']}" 
                            id="lang-span" role="presentation"></span>&ensp;${translationMetadata[currentLanguage]["displayName"]}`

    menuBtn.addEventListener('click', () => {
        e.preventDefault();
        toggleDropdown();
    });

    menuBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleDropdown();
        }
    });

    // Function to toggle dropdown visibility
    function toggleDropdown() {
        const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', !isExpanded);
        languageMenu.classList.toggle('show', !isExpanded);
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !languageMenu.contains(e.target)) {
            menuBtn.setAttribute('aria-expanded', 'false');
            languageMenu.classList.remove('show');
        }
    });

    // Add dropdown options for translation menu
    Object.entries(translationMetadata).map(entry => {
        let val = entry[1];
        if (entry[0] !== currentLanguage) {
            const dropdownItem = document.createElement('a');
            dropdownItem.setAttribute('class', 'dropdown-item');
            dropdownItem.setAttribute('role', 'menuitem');
            dropdownItem.setAttribute('tabindex', '0');
            dropdownItem.id = `${val["tagId"]}`;
            dropdownItem.innerHTML += `<span class="${val["flag"]} role="presentation""></span>&ensp;${val["displayName"]}`;
            dropdownItem.addEventListener('click', (e) => {
                storageController.changePreferredLanguage(e.currentTarget.id);
            });

            dropdownItem.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    storageController.changePreferredLanguage(e.currentTarget.id);
                }
            })
            languageMenu.appendChild(dropdownItem);
        }
    });
}