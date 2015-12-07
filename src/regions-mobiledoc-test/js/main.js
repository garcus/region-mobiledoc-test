$(document).ready(function () {
    $( "#prependText" ).click(prependText);
    function prependText() {
        $("#content").prepend("Fusce pulvinar mi in dolor tempor semper. Etiam consequat cursus neque quis sodales. Mauris et vestibulum nisi.");
    }
});
