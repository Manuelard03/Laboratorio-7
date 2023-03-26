function createPost(name, message, imageURL) {

        return `<div><img src="${imageURL}"><h4>${name}</h4><p>${message}</p></div>`;
    
    }
    
    
    var personaje = document.getElementById("personaje");
    
    
    for (var i = 1; i <= 826; i++) {
         var imageURL = `https://rickandmortyapi.com/api/character/avatar/${i}.jpeg`;
          var personajeHTML = createPost(`Personaje${i}`, `Esta es mi publicación número ${i}`, imageURL);
           personaje.innerHTML += personajeHTML;
    }
