
//function doAction() {
    //console.log('executou')
//}
//analizar depois 
//setTimeout(doAction, 2000)


//https://api.github.com/users

//var button = document.querySelector('#app button') 

//button.addEventListener('click' , function  ()   {
    //axios
        //.get('https://api.github.com/users')
       // .then(function (response) {
           // console.log(response)
            
       // })
           // .catch(function () {
                //console.log('deu ruim')
           // })

//})


var submitButton = document.querySelector('#app form button')
var zipCodeField = document.querySelector('#app form input')
var content = document.querySelector('#app  main')

submitButton.addEventListener('click', run)

function  run (event) {
   event.preventDefault()

   var zipCode = zipCodeField.value

   zipCode = zipCode.replace(' ' , '')
   zipCode = zipCode.replace('.' , '')
    zipCode = zipCode.trim()

    // console.log(zipCode)

   axios
   .get('https://viacep.com.br/ws/' + zipCode + '/json/')
   .then(function (response) {
     if (response.data.erro) {
         throw new Error('CEP inválido')  
       }


       content.innerHTML = ''
       createLine(response.data.logradouro)
       createLine(response.data.bairro)
       createLine(response.data.localidade + '/' + response.data.uf)
       createLine(response.data.ddd)
       
     })

     .catch(function (error) {
         content.innerHTML = ''
         createLine('caractéres inválidos!')
     })
}   

function createLine(text) {
    var line = document.createElement('p')
    var text = document.createTextNode(text)

    line.appendChild(text)
    content.appendChild(line)
}
       

       
           
       
   

   
