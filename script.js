const input= document.querySelector("#UserName");
const submitbtn = document.querySelector("#submitbtn");
 let card = document.querySelector(".card");
 

 
 submitbtn.addEventListener("click", function(e) {
    e.preventDefault(); 
const username = input.value;
if (!username) {
    alert("Please enter a username");
    return;
}
 

fetch(`https://api.github.com/users/${username}`).then(res=>res.json())
.then((data)=>{
    if (data.message === "Not Found") {
        alert("User not found");
        return;
    }
    if (data.message === "Bad credentials") {
        alert("Check User Name");
        return;
    }
    card.style.display = "flex";
    const html = `
    <div class="image">
        <h1>${data.login}</h1>
        
        <img src=${data.avatar_url} class="img"></img>
     </div>
    <div class="details">
        <h4>Full Name   <span>${data.name}</span> </h4>
        <h4>Bio   <span class="bio">${data.bio}</span> </h4>
        <h4>Folowers<span>${data.followers}</span></h4>
        <h4>Following <span>${data.following}</span></h4>
        <h4>Total Repo <span>${data.public_repos}</span></h4>
       

        
        <a class="button" href=${data.html_url} target="_blank">Go to profile</a>
    </div>
`
 card.innerHTML = ""; // Clear previous content
 
    card.innerHTML += html;
 console.log(data);
  
})


 })
 
 
