$(document).ready(() => {
    $.get(`/api/chats/${chatId}`, (data) => {
        $("#chatName").text(getChatName(data))
    })
})

$("#chatNameButton").click(() => {
    var name = $("#chatNameTextbox").val().trim();

    $.ajax({
        url: "/api/chats/" + chatId,
        type: "PUT",
        data: { chatName: name },
        success: (data, status, xhr) => {
            if(xhr.status != 204){
                alert("Could Not Update the Chat Name!!");
            }
            else{
                location.reload();
            }
        }
    })
})