$(document).ready(() => {
    $.get("/api/notifications", (data) => {
        outputNotificationList(data, $(".resultsContainer"))

        $(".loadingSpinnerContainer").remove();
        $(".postsContainer").css("visibility", "visible");
    })
});

$("#markNotificationsAsRead").click(() => markNotificationsAsOpened());

