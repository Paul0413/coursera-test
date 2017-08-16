// check off todos by clicking
$("ul").on("click", "li", function (){
    $(this).toggleClass("completed");
});

// click on X to delete todos
$("ul").on('click', "span", function(event) {

    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });

    // stop the event from bobbling up to parent
    event.stopPropagation();
});

// adding new todo by hitting enter
$("input").on('keypress', function(event) {
    if(event.keyCode === 13){
        // grabbing new todo text from input
        let todoText = $(this).val();

        // creating new li and add to ul
        $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> " + todoText + "</li>");

        // clear input text
        $(this).val("");
    }
});

// adding todos using pencile icon
$(".fa-pencil").on('click', function() {
    $("input").fadeToggle("fast");
});