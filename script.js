
let API_URL = 'https://pokeapi.co/api/v2/pokemon/'
let PokeSearch = '';
let searchHistory = [];
let button = document.getElementById('search-pokemon');
var parent = document.getElementById('imgtile');
var textValue = document.getElementById('pokemon-name');

$.ajaxSetup({async: false});

function call(PokeSearch){
    let pokeData = `${API_URL}${PokeSearch}`;
    $.ajax({
        type: 'GET',
        url: pokeData,
        contentType: "application/json; charset=utf-8",
        success: function () {
            
            Display(pokeData);
            CreateHistory(pokeData); 
            DisplayHistory();               
        }
    });
    
}
function Display(pokeData){
    var mainImage = document.getElementById('PokeImage');
    var tbody = document.getElementById('body');
    var imageData = '';
    var tbodyData = '';
    $.get(pokeData, function(pokeData) {

        imageData += `<img id="img" src="https://img.pokemondb.net/artwork/${pokeData.name}.jpg" alt="">`;
        
        tbodyData += `<tr>`;
        tbodyData += `<th scope="row">${pokeData.id}</th>`;
        tbodyData += `<td>${pokeData.name}</td>`;
        tbodyData += `<td>${pokeData.height}</td>`;
        tbodyData += `<td>${pokeData.weight}</td>`;
        tbodyData += `</td>`;
        
        mainImage.innerHTML = imageData;
        tbody.innerHTML = tbodyData;
    })

}

function CreateHistory(pokeData){
    let searchData = [];
    $.get(pokeData, function(pokeData) {
            searchData.push(pokeData.id);
            searchData.push(pokeData.name);
            searchData.push(pokeData.height);
            searchData.push(pokeData.weight);
            searchHistory.push(searchData);
    })
    
}
function DisplayHistory(){
    var el = document.getElementById('imgtile');
    el.innerHTML = '';
    if(searchHistory.length >= 0){
        while (searchHistory.length > 5){
            searchHistory.shift();
        }
        for (let index = searchHistory.length; index > 0; index--) {
            var data = '';
            data += `<td id="${index - 1}">`;
            data += '<div class="polaroid">';
            data += `<img id="searchImg" onclick="DeleteItem('${index - 1}'),call('${searchHistory[index-1][0]}')" aria-label="Search" src="https://img.pokemondb.net/artwork/${searchHistory[index-1][1]}.jpg" alt="5 Terre" style="width: 260px;">`;
            data += '<div class="container">';
            data += `<p>${searchHistory[index-1][1]}</p>`;
            data += '</div>';
            data += `<a onclick="DeleteItem(${index-1})" aria-label="Delete" id="x-button">&#10005;</a>`;
            data += "</div>";
            parent.innerHTML += data;
        
        }}
    
}

function DeleteItem(data){
    searchHistory.splice(data,1)
    DisplayHistory();
}

function ClearHistory(){
    searchHistory = [];
    DisplayHistory();
}
button.addEventListener('click', () =>{
    PokeSearch = textValue.value;
    textValue.value="";
    call(PokeSearch)
    
})
textValue.addEventListener('keypress', function (e) {
    if (e.key === 'Enter'){
        PokeSearch = textValue.value;
        textValue.value="";
        call(PokeSearch)
    }
})
