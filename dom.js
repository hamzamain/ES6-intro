document.getElementById('apply-btn').addEventListener('click',function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        console.log(friend);
        friend.style.backgroundColor = 'red'
        friend.style.color = 'white'
    }
})
document.getElementById('add-new').addEventListener('click',function(){
    const friendContainer = document.getElementById('friends');
    const newFriend = document.createElement('div');
    newFriend.classList.add('friend')
    newFriend.innerHTML = `
    <h2> new friend </h2>
    <p>new friend added here and on</p>
    `
    friendContainer.appendChild(newFriend)
})