const itemForm= document.getElementById('item-form')
const itemInput= document.getElementById('item-input')

const inputInvalid= document.getElementById('input-invalid')
const itemList= document.getElementById('item-list')

const clearBtn= document.getElementById('items-clear')
const itemFilter= document.getElementById('filter')

function addItem(e){
    e.preventDefault()
    const newItem= itemInput.value

    if(newItem == ''){
        inputInvalid.innerText= 'Please add an item'
        return
    } else {
        inputInvalid.innerText= ''
    }

    addItemToDOM(newItem)
    addItemToStorage(newItem)
    
    itemInput.value= ''
    checkUI()
}

function addItemToDOM(newItem){
    const li= document.createElement('li')
    li.className= 'list-item'
    li.textContent= newItem

    const icon= createIcon('bi bi-x fs-5 text-danger')
    li.appendChild(icon)

    itemList.appendChild(li)

}

function addItemToStorage(newItem){
    let itemsFromStorage
    

    if(localStorage.getItem('item') === null){
        itemsFromStorage= []
    }else{
        itemsFromStorage= JSON.parse(localStorage.getItem('items'))
    }

    itemsFromStorage.push(newItem)
    localStorage.setItem('items', JSON.stringify(itemsFromStorage))
    console.log(itemsFromStorage)

}


function createIcon(classes){
    const icon= document.createElement('i')
    icon.className= classes 

    return icon
}

function onClickItem(e){

    // console.log(e.target);
    if(e.target.classList.contains('bi-x')){
        e.target.parentElement.remove()
        checkUI()

    }
    
}

function clearItems(){
    itemList.innerHTML= ''
    checkUI()

}


function checkUI() {
    const items= itemList.querySelectorAll('li')
    if(items.length === 0) {
        clearBtn.style.display= 'none';
        itemFilter.style.display= 'none';
    }
    else {
        clearBtn.style.display= 'block';
        itemFilter.style.display= 'block';
    }
}

function filterItems(e){
    const items= itemList.querySelectorAll('li')
    const text= e.target.value.toLowerCase()

    items.forEach((item) => {
        const itemName= item.firstChild.textContent.toLowerCase()

        if(itemName.indexOf(text) !== -1){
            console.log('Found')
        } else{
            item.style.display= 'none'
        }
    } )

}



// Event Listener


itemForm.addEventListener('submit', addItem)
itemList.addEventListener('click', onClickItem)

clearBtn.addEventListener('click', clearItems) 
itemFilter.addEventListener('input', filterItems)

checkUI()





































// const itemFrom= document.getElementById('item-form');
// const itemInput= document.getElementById('item-input');
// const inputInvalid= document.getElementById('input-invalid');
// const itemList= document.getElementById('item-list');
// const clearBtn= document.getElementById('items-clear')
// const itemFilter= document.getElementById('item_filter')
// const forBtn= itemFrom.querySelector('button')



// function getItemsFromStorage() {

//     let itemsFromStorage 

//     if(localStorage.getItem('items') === null ) {
//         itemsFromStorage= []

//     }
//     else {
//         itemsFromStorage= JSON.parse(localStorage.getItem('items'))
//     }
//     return itemsFromStorage
    

// }

// function displayItems() {
//     const itemsFromStorage  = getItemsFromStorage()
    
//     itemsFromStorage.forEach(item=> addItemToDOM(item))
//     console.log(itemsFromStorage)

//     checkUI()
    

// }

// function addItem(e) {
//     e.preventDefault();
//     const newItem= itemInput.value;

//     if(newItem == '') {
//         inputInvalid.innerText= 'Pleas add an item' ; 
//         return;
//     } 
//     else {
//         inputInvalid.innerText= '';

//     }

//     addItemToDOM(newItem);
//     addItemToStorage();


//     itemInput.value= '';
//     checkUI();

// }

// function addItemToDOM(newItem) {
//     const li= document.createElement('li');
//     li.className= 'list-item';
//     li.textContent= newItem;

//     const icon= createIcon("bi bi-x fs-5 text-danger");
//     li.appendChild(icon);

//     itemList.appendChild(li);

// }

// function addItemToStorage(item) {
//     const itemsFromStorage  = getItemsFromStorage()

//     itemsFromStorage.push(item)
//     // console.log(itemsFromStorage)
//     localStorage.setItem('item', JSON.stringify(itemsFromStorage))

// }


// function createIcon(classes) {

//     const icon= document.createElement('i');
//     icon.className= classes;
    
//     return icon

// } 

// function onClickItem(e) {

//     // console.log(e.target.parentElement);
//     if (e.target.classList.contains('bi-x')) {
//         removeItem(e.target.parentElement)
//     } else {

//         setItemToEdit(e.target)
//     }
// }

// function setItemToEdit(item) {
//     itemList.querySelectorAll('li').forEach(item=> item.classList.remove('edit-mode'))
//     item.classList.add('edit-mode')
//     itemInput.value= item.textContent

//     forBtn.innerHTML= "  <i class='bi bi-pencil-fill'></i> Update Item"
//     forBtn.classList.replace('btn-dark', 'btn-primary')
// }

// function removeItem(item){
//     item.remove();
//     removeItemFromStorage(item.textContent);
//     checkUI();
// }

// function removeItemFromStorage() {

//     let itemsFromStorage= getItemsFromStorage()
//     itemsFromStorage= itemsFromStorage.filter((i)=> i !== item)

//     localStorage.setItem('item',JSON.stringify(itemsFromStorage))
//     console.log(item.textContent);
    

// }

// function clearItems() {

//     itemList.innerHTML= '';
//     checkUI();
// }

// function checkUI() {
//     const items= itemList.querySelectorAll('li')
//     if(items.length === 0) {
//         clearBtn.style.display= 'none';
//         itemFilter.style.display= 'none';
//     }
//     else {
//         clearBtn.style.display= 'block';
//         itemFilter.style.display= 'block';
//     }
// }

// function filterItems(e) {    
//     const item= itemList.querySelectorAll('li')
//     const text= e.target.value.toLowerCase()

//     item.forEach((item)=> {
//         const itemName= item.firstChild.textContent.toLowerCase()
//         // console.log(item.firstChild.textContent)
//         if (itemName.indexOf(text) !== -1) {
//             item.style.display= 'flex'
         
//         }
//         else {
                 

//             item.style.display= 'none'

//         }
//     } )

// }



// // Event Listener
// itemFrom.addEventListener('submit', addItem)
// itemList.addEventListener('click', onClickItem)
// clearBtn.addEventListener('click', clearItems)
// itemFilter.addEventListener('input', filterItems)
// document.addEventListener('DOMContentLoaded', displayItems)


// checkUI()

