// HOME.JS

// DIV-HOME
const divHome = document.createElement('div')
      divHome.classList.add('div-home')

      const h1Home = document.createElement('h1')
      h1Home.classList.add('h1-home')
      h1Home.textContent = 'Restaurante Italiano "LAS MIL DELICIAS"'
   
      const pHome = document.createElement('p')
      pHome.classList.add('p-home')
      pHome.textContent = 'Bienvenidos a nuetro reataurante donde probaras los platos más ricos !!!'

      divHome.append(h1Home, pHome)

// DIV-IMG-HOME
const divImgHome = document.createElement('div')
      divImgHome.classList.add('div-img-home')  
      
      import  imgHome  from './img/home.jpg'
      const homeImg = document.createElement('img')
      homeImg.classList.add('img-home')  
      homeImg.src = imgHome

      divImgHome.append(homeImg)

// EXPORT
export {divHome, divImgHome}



