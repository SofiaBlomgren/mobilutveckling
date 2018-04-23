document.addEventListener('init', function (event) {
 var page = event.target;

 if (page.id === 'home') {
   page.querySelector('#list__item').onclick = function () {
     document.querySelector('#appNavigator').pushPage('caipirihna.html', {data: {title: 'Caipirinha'}});
   };
 } else if (page.id === 'caipirinha') {
   page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
 }
});