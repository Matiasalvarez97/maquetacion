const $search = document.getElementById("search")
const $listchat = document.querySelector(".chats ul")

const chatsData = [
    {name:"Taylor S.",
     lastmessage:"Good,i see you more later😊!",   
     avatar:"./assets/t-s.jpg",
    },
     {name:"Lionel Messi",
     lastmessage:"Jugamos unos fifas?",   
     avatar:"./assets/l-m.jpg",
    },
     {name:"Justin B.",
     lastmessage:"Please!!! hear this song",   
     avatar:"./assets/j-d-b.jpg",
    },
     {name:"Harry Potter",
     lastmessage:"after all this time?",   
     avatar:"./assets/h-p.jpg",
    },
    {name:"Champions⭐⭐⭐",
     lastmessage:"Franco P: Muchachos!!!",   
     avatar:"./assets/c-d-m.jpg",
    }
]
const renderchats = (list) => {
$listchat.innerHTML = ""
list.forEach((chat) => {
$listchat.innerHTML += `<li class="user-chat">
                        <img src="${chat.avatar}" alt="foto de perfil de Taylor S">
                        <div>
                            <h3>${chat.name}</h3>
                        <p>${chat.lastmessage}</p>
                        </div>`
})
}
const searchchats = () => {
    const namesearch = $search.value.toLowerCase();
    const filteredchats = chatsData.filter((chat)=>chat.name.toLocaleLowerCase().includes(namesearch) )
    renderchats(filteredchats)
}
$search.addEventListener("input",searchchats )
renderchats(chatsData)