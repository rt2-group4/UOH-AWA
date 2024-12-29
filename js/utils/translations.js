const translationTexts = {
    "en-GB": {
        //English Translations
        "data": {},
        "metadata": {"tagId": "en-GB", "flag": "fi fi-gb", "displayName":"EN"}
    },
    "fr-FR": {
        //French Translations
        "data": {},
        "metadata": {"tagId": "fr-FR", "flag": "fi fi-fr", "displayName":"FR"}
    },
    "de-DE": {
        //Deutsch Translations
        "data": {},
        "metadata": {"tagId": "de-DE", "flag": "fi fi-de", "displayName":"DE"}
    }
}

let translationData_ = {}
let translationMetadata_ = {}

// Filter translationTexts into Data and Metadata
for (let key in translationTexts) {
    translationMetadata_[key] = translationTexts[key].metadata
    translationData_[key] = translationTexts[key].data
}

export const _translationData = translationData_;
export const translationMetadata = translationMetadata_;

