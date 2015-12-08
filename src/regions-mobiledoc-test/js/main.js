$(document).ready(function () {
    $( "#editStory" ).click(editStory);
    $( "#editor-save" ).click(saveStoryAndClose);
    $("#story").children("*").clone().appendTo("#content");
    $("#story").children("*").clone().appendTo("#editor-content");

    var timer;
    $('#editor-content').keyup(function () {
        clearTimeout(timer);
        timer = setTimeout(function (event) {
            saveStory();
        }, 500);
    });


    function editStory() {
        $("#editor").show();
        $("#editStory").attr('disabled','disabled');
    }

    function saveStoryAndClose() {
        saveStory();
        $("#editor").hide();
        $("#editStory").removeAttr('disabled');
    }

    function saveStory() {
        var content = $("#editor-content").html();
        $("#content").html(content);
    }
});
