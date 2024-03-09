
let emoji_container = document.getElementById("emoji_container");
let search_field = document.getElementById("search_field");


function displayEmojee(query=''){
    let filteredData = emojiList.filter((e) => {
      if (e.description.indexOf(query) != -1) {
        return true;
      }
      if (e.tags.find(ele => ele===query)) {
        return true;
      }
      if (e.aliases.find(ele => ele===query)) {
        return true;
      }
    })
   emoji_container.innerHTML="";
   filteredData.forEach(e=>{
        
   let new_row = document.createElement("tr");
   let new_emojee = document.createElement("td");
   let new_aliases = document.createElement("td");
   let new_description = document.createElement("td");
            
   new_emojee.innerText = e.emoji;
   new_aliases.innerText = e.aliases;
   new_description.innerText=e.description;
        
   new_emojee.classList.add("emoji") 
   new_aliases.classList.add("aliases") 
   new_description.classList.add("desc")
   new_row.appendChild(new_emojee);
   new_row.appendChild(new_aliases);
   new_row.appendChild(new_description);
   emoji_container.appendChild(new_row);
   
}) 
}
function searchdata(e){
    let value = e.target.value;
    displayEmojee(value);
}
search_field.addEventListener('keyup',searchdata);
window.onload = () => displayEmojee();