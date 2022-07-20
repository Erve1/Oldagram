const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let sectionEl = document.getElementById("section-el")

onload = function renderPosts() {
    let allPosts = ""
    const firstIndex = 0
    for (let i = 0; i < posts.length; i++) {
        if(i === firstIndex) {
        allPosts += `
                    <div class="section-header">
                        <img src="${posts[i].avatar}" class="avatar-user"> 
                        <p class="bold-font">${posts[i].name}<span class="newline thin-font">${posts[i].location}</span></p> 
                    </div>
                    
                    <div class="section-image">
                        <img src="${posts[i].post}" class="post-img">
                    </div>
                    
                    <div class="options">
                        <img src="images/icon-heart.png" class="icons">
                        <img src="images/icon-comment.png" class="icons">
                        <img src="images/icon-dm.png" class="icons">
                    </div>
                    
                    <div class="likes">
                        <p class="bold-font">${posts[i].likes} likes</p>
                    </div>
                    
                    <div class="comments">
                        <p class="bold-font">${posts[i].username} <span class="thin-font">${posts[i].comment}</span></p>
                    </div>
                    `
    } else {
        allPosts += `
                    <div class="breaker"></div>
                    <div class="section-header">
                        <img src="${posts[i].avatar}" class="avatar-user"> 
                        <p class="bold-font">${posts[i].name}<span class="newline thin-font">${posts[i].location}</span></p> 
                    </div>
                    
                    <div class="section-image">
                        <img src="${posts[i].post}" class="post-img">
                    </div>
                    
                    <div class="options">
                        <img src="images/icon-heart.png" class="icons">
                        <img src="images/icon-comment.png" class="icons">
                        <img src="images/icon-dm.png" class="icons">
                    </div>
                    
                    <div class="likes">
                        <p class="bold-font">${posts[i].likes} likes</p>
                    </div>
                    
                    <div class="comments">
                        <p class="bold-font">${posts[i].username} <span class="thin-font">${posts[i].comment}</span></p>
                    </div>
                    `
    }
    }
    return sectionEl.innerHTML = allPosts
}

