//Tab slider which slides to the active tab header

/*.slider
{
  display:inline-block;
  width:30px;
  height:4px;
  border-radius:3px;
  background-color:#007bff;
  position:absolute;
  z-index:12;
  bottom:0;
  transition:all .4s linear;
}*/

sliderMovement = () => {
    
    let slider = document.getElementById('slider');  
    let active = document.querySelector('.activeTab');
    let elements = document.querySelectorAll('.nav');
   
    //Get properties of the active tab header
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    let activePosition = active && active.getBoundingClientRect();

    //On loading html moving the slider to the active header
    if(slider && activePosition)
   {
    //Move slider to the active header
    //adjust according to the margin/padding
    slider.style.left = (activePosition.left - 76).toString() + 'px';
    //Width same as the width of the header
    slider.style.width = activePosition.width.toString() + 'px';

   }

   //adding an event listener to the tab bar headers so 
   //the slider moves auto when clicked on any header
    elements.forEach(item => {
       item.addEventListener('click', event => {
         let itemData = item.getBoundingClientRect();
          //adjust according to the margin/padding
          slider.style.left = (itemData.left - 76).toString() + 'px';
          slider.style.width = itemData.width.toString() + 'px';
       });
     });
}