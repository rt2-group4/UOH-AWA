import { english } from "./translation_dictionaries/english.js";
import { french } from "./translation_dictionaries/french.js";
import { german } from "./translation_dictionaries/german.js";

const translationTexts = {
    "en-GB": english,
    "fr-FR": french,
    "de-DE": german
}

// let translationData = {}
let translationMetadata = {}
let translationData = {}

// Filter translationTexts into Data and Metadata
for (let key in translationTexts) {
    translationMetadata[key] = translationTexts[key].metadata
    translationData[key] = translationTexts[key].data
}

export { translationData, translationMetadata}

