// var addEvent = function(object, type, listener) {
//
//     if(object.addEventListener) {
//         if(type=='mousewheel') {
//             type='DOMMouseScroll';
//         }
//         object.addEventListener(type, listener, false)}
//
//     else {
//             object.attachEvent("on"+type, listener);
//     }
// };
//
// addEvent( document.getElementById('btn'), "click", function(){
//     alert("click");
// });
//
// var clickCount = 0;
// function popup(event){
//     console.log(++clickCount);
//     console.log(arguments, this ,event ,event.type,event.currentTarget);
// }
// document.body.addEventListener('click', popup);
