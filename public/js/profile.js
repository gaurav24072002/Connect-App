$(document).ready(() => {
    if(selectedTab == "replies"){
        loadReplies();
    }
    else{
        loadPosts();
    }
});

function loadPosts(){
        $.get("/api/posts", { postedBy: profileUserId, isReply: false }, results => {
            outputPosts(results, $(".postsContainer"));

            $(".loadingSpinnerContainer").remove();
            $(".chatContainer").css("visibility", "visible");
         })
}

function loadReplies(){
    $.get("/api/posts", { postedBy: profileUserId, isReply: true }, results => {
        outputPosts(results, $(".postsContainer"));

        $(".loadingSpinnerContainer").remove();
        $(".chatContainer").css("visibility", "visible");
     })
}