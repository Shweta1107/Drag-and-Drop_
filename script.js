const items = document.querySelectorAll('.item');
const greyBoxes = document.querySelectorAll('.greyBox')

//event listener for draggable element i.e item

let dragedItem = null;

for(let i=0; i<items.length; i++){

    let item = items[i];

item.addEventListener("dragstart",(e)=>{
//   console.log('Dragstart has been triggred')
   dragedItem = item;
  e.target.classList.add('hold');
  setTimeout (()=>{
    e.target.classList.add('hide');
  }, 0)
})

item.addEventListener("dragend",(e)=>{
    // console.log('Dragend has been triggred')
    // e.target.className = 'item';
    // dragedItem = null;
    // e.target.classList.add('item');

   /*************************** */
    setTimeout(()=>{
      dragedItem.style.display ='block';
      dragedItem = null;
    },0)

  })


  //eventlistener for greyBoxes
  for(let j=0;j<greyBoxes.length ;j++){
     
    const greybox = greyBoxes[i];

      greybox.addEventListener('dragover',(e)=>{
        // console.log('dragover has been triggred')
        e.preventDefault();
      })

      greybox.addEventListener('dragenter',(e)=>{
        // console.log('dragenter has been triggred')
        e.preventDefault();
        e.target.classList.add('dashed')
    })

    greybox.addEventListener('dragleave',(e)=>{
        // console.log('dragleave has been triggred')
        e.target.classList.remove('dashed')
    })

    greybox.addEventListener('drop',(e)=>{
        // console.log('drop has been triggred')
        e.target.append(dragedItem);
    })
  }
}