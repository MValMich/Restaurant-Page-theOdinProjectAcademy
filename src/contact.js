// CONTACTO.js

// DIV-CONTACTO
const divContacto = document.createElement('div')
      divContacto.classList.add('div-contacto')

      const h1Contacto = document.createElement('h1')
            h1Contacto.classList.add('h1-contacto')
            h1Contacto.textContent = 'CONTACTO: '

      const pContacto = document.createElement('p')
            pContacto.classList.add('p-contacto')
            pContacto.textContent = 'restaurantemildelicias@correo.com'

divContacto.append(h1Contacto, pContacto)

export {divContacto}