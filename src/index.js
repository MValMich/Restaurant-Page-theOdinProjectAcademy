// INDEX.JS
import'./index.css'

import'./home.css'
import { divHome, divImgHome} from './home.js'

import'./menu.css'
import { divMenu, divPlato1, divPlato2, divPlato3 } from './menu.js'

import'./contact.css'
import { divContacto } from './contact.js'

// HOME (Por defecto)
document.querySelector('#div-container').append(divHome, divImgHome)

// HOME-BTN
document.querySelector('#home-btn').addEventListener('click', ()=>{
    if (!document.querySelector('.div-img-home')) {
    document.querySelector('#div-container').append(divHome, divImgHome)
}
if (divMenu) divMenu.remove()
if (divPlato1) divPlato1.remove()
if (divPlato2) divPlato2.remove()
if (divPlato3) divPlato3.remove()
if (divContacto) divContacto.remove()
})

// MENU-BTN
document.querySelector('#menu-btn').addEventListener('click', ()=>{
    if (!document.querySelector('.div-img-plato-1'))  {
 document.querySelector('#div-container').append(divMenu, divPlato1, divPlato2, divPlato3)
}
if (divHome) divHome.remove()
if (divImgHome) divImgHome.remove()
if (divContacto) divContacto.remove()
 }
)

// CONTACTO-BTN
document.querySelector('#contacto-btn').addEventListener('click', ()=>{
    if (!document.querySelector('.div-contacto'))  {
    document.querySelector('#div-container').append(divContacto)
}
if (divHome) divHome.remove()
if (divImgHome) divImgHome.remove()
    if (divMenu) divMenu.remove()
    if (divPlato1) divPlato1.remove()
    if (divPlato2) divPlato2.remove()
    if (divPlato3) divPlato3.remove()
})
