const searchBox = document.querySelector(".searchbox")
const searchBtn = document.querySelector(".button")
const memeContainer = document.querySelector(".bruh-container")
const memeDetailsContent = document.querySelector(".meme-details-content")
const memeCloseBtn = document.querySelector(".memeclosebtn")


searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const searchInput = searchBox.value;
    memeGen(searchInput)
})

async function memeGen(searchTerm = '') {

    memeContainer.innerHTML = '<h2>Fetching Memes</h2>';
    let res = await fetch(`https://api.imgflip.com/get_memes`);
    let data = await res.json();
    memeContainer.innerHTML = '';
    const filteredMemes = data.data.memes.filter((meme) => {
        return meme.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    filteredMemes.forEach(meme => {
        const memeDiv = document.createElement("div");
        memeDiv.classList.add("memes");
        memeDiv.innerHTML = `
            <img src="${meme.url}" alt="${meme.name}" width="200">
            <p>${meme.name}</p>
        `;
        const button = document.createElement("button")
        button.classList.add("btnmeme")
        button.textContent= "View Meme"
        memeDiv.appendChild(button);

        //adding eventlistner to button
        button.addEventListener("click",()=>{
            openMemePop(meme);
        })
        memeContainer.appendChild(memeDiv);
        memeCloseBtn.addEventListener('click',(meme)=>{
             document.querySelector(".meme-details").style.display = "none";
        })
    });
    if (filteredMemes.length === 0) {
        memeContainer.innerHTML = `<p>No memes found for "${searchTerm}"</p>`;
    }
}

const openMemePop =(meme)=>{
    memeDetailsContent.innerHTML = `<h2>${meme.name}</h2>
    `
    memeDetailsContent.parentElement.style.display="block";
}



memeGen()