// Text file data
let textButton = document.querySelector('#text-btn');
textButton.addEventListener('click', function(){
    // creat an ajax reques
    let xhr = new XMLHttpRequest();
    // prepare the request
    xhr.open('GET' , '../data/message.txt' , true);
    // send request
    xhr.send();
    // process the request
    xhr.onload = function(){
        if(xhr.status === 200){
            let data = xhr.responseText;
            displyText(data);
        }
    };
});
// Display Text
let displyText = (data)=>{
    var htmlTemplete = '';
    htmlTemplete = `<h3>${data} </h3>`
    document.querySelector('#text-card').innerHTML=htmlTemplete;
}
// Json button
document.querySelector('#json-btn')
.addEventListener('click', function(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '../data/mobiles.json', true);
    xhr.send();
    xhr.onload = function(){
        if(xhr.status === 200){
            let data = xhr.responseText;
            let mobile = JSON.parse(data);
            displayJsonData(mobile);
        };
    };
});
// // Display Json data
let displayJsonData = (mobile)=>{
    let htmlTemplete = '';
    htmlTemplete = `<ul class="list-group">
                        <li class="list-group-item bg-light">ID : ${mobile.Id}</li>
                        <li class="list-group-item bg-light">BRAND : ${mobile.Brand}</li>
                        <li class="list-group-item bg-light">COLOR : ${mobile.Color}</li>
                        <li class="list-group-item bg-light">PRICE : ${mobile.Price}</li>
                    </ul>`;
   document.querySelector('#json-card').innerHTML = htmlTemplete;
};
// API button
document.querySelector('#api-btn')
.addEventListener('click', function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhr.send();
    xhr.onload = function(){
        if(xhr.status === 200){
            var users = JSON.parse(xhr.responseText);
            displyApi(users);
        }
    }
})
// Disply Api
var displyApi = function(users){
    var htmlTemplete = '';
    for(let user of users){
        htmlTemplete += `<ul class ="list-group">
                          <li  class = "list-group-item bg-dark text-white">ID : ${user.id}</li>
                          <li class = "list-group-item">NAME : ${user.name}</li>
                          <li class = "list-group-item">USERNAME : ${user.username}</li>
                          <li class = "list-group-item">EMAIL : ${user.email}</li>
                          <li class = "list-group-item">STREET : ${user.address.street}</li>
                          <li class = "list-group-item">CITY : ${user.address.city}</li>
                          <li class = "list-group-item">ZIPCODE : ${user.address.zipcode}</li>
                          <li class = "list-group-item">PHONE-NUMBER : ${user.phone}</li>
                          <li class = "list-group-item">WEBSITE : ${user.website}</li>
                        </ul>`
    }
    document.querySelector('#api-card').innerHTML = htmlTemplete;
}