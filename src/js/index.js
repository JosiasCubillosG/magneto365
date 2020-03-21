(async function load(){

    const users = await getData(`https://api.github.com/search/users?q=YOUR_NAME`)

    async function getData(url){
        const response = await fetch(url)
        const data = await response.json()
        return data.items
    }
    
    
    users.forEach(user => {
        const $content = document.getElementById('home__content_table_users')
        renderUsers($content, user)
    });


    function renderUsers($content, user){
        const users = templateUsers(user)
        console.log(users)
        $content.innerHTML = users
    }

    function templateUsers(user){
        return(
          `<td>${user.login}</td>
            <td>${user.id}</td>`
        )
    }




})()