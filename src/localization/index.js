import en_us from './en'
import fa_ir from './fa'

const lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
export { lang }

const direction = {
    fa: 'rtl',
    en: 'ltr'
}
function getDirection() {
    return direction[lang]
}
export { getDirection }

const fonts = {
    fa: 'IRANSans',
    en: 'Muli'
}
function getFont() {
    return fonts[lang]
}
export { getFont }

const translate = {
    fa: fa_ir,
    en: en_us
}
function getTranslate() {
    return translate[lang]
}
export { getTranslate }

function changeLanguage(newLang) {
    if(lang === newLang) return
    localStorage.setItem('lang', newLang)
    window.location.reload()
}
export {changeLanguage}