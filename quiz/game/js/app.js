

const ul = document.getElementById('ul');
const list = [];
for (let i = 0; i < 4; i++) {
    list.push(document.createElement('li'));
}
console.log(list);
const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    list.forEach((e) =>{
        ul.appendChild(e);
    })
})