const modal_overlay = document.querySelector ('.modal_overlay');
const cards = document.querySelectorAll ('.card');

 for (let card of cards ) {
    card.addEventListener ("click",function(){
        const videoId = card.getAttribute ("id");

        window.location.href = `/video?id=${videoId}`
        
    })
 };

