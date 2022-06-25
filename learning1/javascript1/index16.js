// // console.log('excercise');
// /*
// You have to create a div and inject it into the page which contains a heading.
// whenever someone clicks on the div,it should be converted into an editable item. whenever user clicks away (blue).save the note into the local storage

// */
// let head='this is heading';
// let newitem=document.createElement('div');
// newitem.id='item';
// newitem.ClassName='item';
// newitem.setAttribute("contenteditable","true");
// newitem.innerHTML=`<h2>${head}</h2>`
// let inject=document.getElementById('last');
// // console.log(inject);
// inject.appendChild(newitem);
// // console.log(newitem.parentNode);
// newitem.addEventListener("click",myFunction);
// let value;
// function myFunction(){
//     // console.log('click event happen');
//     answer=document.getElementById('item').contentEditable;
//     value=newitem.innerText;
//     localStorage.setItem('now',value);
// }
// newitem.innerHTML=
// `<h2>${localStorage.getItem('now')}</h2>`;