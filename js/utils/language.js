import storageController from '../controllers/storageController.js';

export function initLanguage(){
     const langLinks = document.getElementsByClassName('dropdown-item');

     Array.from(langLinks).forEach(langLink => {
         langLink.addEventListener('click', (e) => {
             storageController.changePreferredLanguage(e.currentTarget.id)
         })
     })
 }