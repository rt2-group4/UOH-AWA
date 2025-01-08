import storageController from '../controllers/storageController.js';
import { translationMetadata } from "./translations.js";

export function initLanguage(){
    const languageMenu = document.getElementById('dropdown-menu');

    // get current language
    const currentLanguage = storageController.getPreferredLanguage()

    // Set button text and icon for active translation
    const menuBtn = document.getElementById("menu-btn")
    menuBtn.innerHTML = `<span class="${translationMetadata[currentLanguage]['flag']}" 
                            id="lang-span"></span>&ensp;${translationMetadata[currentLanguage]["displayName"]}`

    // Add dropdown options for translation menu
    Object.entries(translationMetadata).map(entry => {
        let val = entry[1];
        if (entry[0] !== currentLanguage){
            const dropdownItem = document.createElement('a');
            dropdownItem.setAttribute('class', 'dropdown-item');
            dropdownItem.id = `${val["tagId"]}`;
            dropdownItem.innerHTML += `<span class="${val["flag"]}"></span>&ensp;${val["displayName"]}`;
            dropdownItem.addEventListener('click', (e) => {
                storageController.changePreferredLanguage(e.currentTarget.id);
            })
            languageMenu.appendChild(dropdownItem);
        }

    });
}