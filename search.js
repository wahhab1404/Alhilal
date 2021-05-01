let text = document.getElementById('wrapper').innerText
const search = document.getElementById('search')
const searchBtn = document.getElementById('searchBut')
const words = text.split(' ')


// console.log(search)
search.addEventListener('input',(event)=>{
    let userData = event.target.value;
    let emptyArry = [];
    console.log(emptyArry);
    if (userData){
        emptyArry= words.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData)
            });
            emptyArry = emptyArry.map((data)=>{
                return data + '<li> ' + data + ' <li>'
            })
            console.log(emptyArry)
    }
})
searchBtn.addEventListener('click', function findeWord(){

})

