$(document).ready(function () {
    $("form").submit(function () {
        var fname = $("input[name='fname']").val();
        var lname = $("input[name='lname']").val();
        var description = $("textarea").val();
        if (fname && lname && description) {
            $("#contact_card_container").append("<div class='contact_box'><h1>" + $("input[name='fname']").val() + " " + $("input[name='lname']").val() + "</h1><p value='" + description + "'>" + "Click for description!</p></div>");
            $("input[name='fname']").val("");
            $("input[name='lname']").val("");
            $("textarea").val("");
            return false;
        } else {
            return false;
        };
    });
    $("#contact_card_container").on("click", ".contact_box", function() {
        var front_html = String($(this).html());
        var pVal = $(this).children("p").attr("value");
        console.log(pVal);
        if (pVal) {
            console.log("In the True");
            $(this).html("<p>" + pVal + "</p>");
            $(this).children("p").attr("value", front_html);
        };
    });
});