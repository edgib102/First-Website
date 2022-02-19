
$(function () {
    usernames = []
    for (const [index] of Object.entries(data)) {
        usernames.push(data[index].username);

        $(".collaborator-list").append(`<li class="list-item">${data[index].username}</li>`)        
    }
    console.log(usernames)


})