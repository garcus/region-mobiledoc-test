$(document).ready(function () {
    $( "#editStory" ).click(editStory);
    $( "#editor-save" ).click(saveStory);
    $("#story").children("*").clone().appendTo("#content");
    $("#story").children("*").clone().appendTo("#editor-content");

    function editStory() {
        $("#editor").show();
    }

    function saveStory() {
        $("#editor").hide();
        var content = $("#editor-content").html();
        $("#content").html(content);
    }
});
