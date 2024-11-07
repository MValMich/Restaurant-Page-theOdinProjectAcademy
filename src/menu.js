// MENU.JS
// DIV-MENU
const divMenu = document.createElement('div')
      divMenu.classList.add('div-menu')

     const h1Menu = document.createElement('h1')
           h1Menu.classList.add('h1-menu')
           h1Menu.textContent = 'MENÚ'

     const pMenu = document.createElement('p')
           pMenu.classList.add('p-menu')
           pMenu.textContent = 'Explora nuestro exquisito menú'

     divMenu.append(h1Menu, pMenu)
    
// DIV-PLATO-1
const divPlato1 = document.createElement('div')
      divPlato1.classList.add('div-menu-platos')

      const h2Plato1 = document.createElement('h2')
            h2Plato1.classList = 'h2-plato'
            h2Plato1.textContent = 'Plato de fondo: CANNELLONI AL PESTO'

      const pPlato1 = document.createElement('p')
            pPlato1.classList = 'p-plato'
            pPlato1.textContent = 'Exquisitos cannelloni con salsa de pesto. (La exquisita receta de la nonna)'
      
      import plato1Img from './img/plato-1.jpg' 
      const ImgPlato1 = document.createElement('img')
            ImgPlato1.src = plato1Img
            ImgPlato1.classList = 'img-plato'

      divPlato1.append(h2Plato1, pPlato1, ImgPlato1)

// DIV-PLATO-2
const divPlato2 = document.createElement('div')
      divPlato2.classList.add('div-menu-platos')

      const h2Plato2 = document.createElement('h2')
            h2Plato2.classList = 'h2-plato'
            h2Plato2.textContent = 'Postre de: TIRAMISU'

      const pPlato2 = document.createElement('p')
            pPlato2.classList = 'p-plato'
            pPlato2.textContent = 'Para despues del plato de fondo le ofrecemos un exisito Tiramisu que hará fista en su paladar.'
   
            import plato2Img from './img/tiramisu.jpg' 
            const ImgPlato2 = document.createElement('img')
                  ImgPlato2.src = plato2Img
                  ImgPlato2.classList = 'img-plato'

      divPlato2.append(h2Plato2, pPlato2, ImgPlato2)

// div-plato-3
const divPlato3 = document.createElement('div')
      divPlato3.classList.add('div-menu-platos')

      const h2Plato3 = document.createElement('h2')
            h2Plato3.classList = 'h2-plato'
            h2Plato3.textContent = 'Para beber: VINO DE LA CASA'

      const pPlato3 = document.createElement('p')
            pPlato3.classList = 'p-plato'
            pPlato3.textContent = 'Para acompañar su plato de fondo le ofrecemos un exquisito vino de la casa.'
   
      import plato3Img from './img/vino.jpg' 
      const ImgPlato3 = document.createElement('img')
            ImgPlato3.src = plato3Img
            ImgPlato3.classList = 'img-plato'

      divPlato3.append(h2Plato3, pPlato3, ImgPlato3)

export {divMenu, divPlato1, divPlato2, divPlato3}