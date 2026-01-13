const $search = document.getElementById("search")
const $chats = document.querySelectorAll(".user-chat")

const searchchats = () => {
    const namesearch = $search.value.toLowerCase();
    for (let i =0; i < $chats.length; i++) {
        const $chat = $chats[i]
        const $titleTag = $chat.querySelector("h3")
        const name= $titleTag.textContent.toLowerCase()
       if (name.includes (namesearch)) {
        $chat.style.display = "flex"
       }
       else {
        $chat.style.display = "none"
       }
    }

}
$search.addEventListener("input",searchchats )