
//Adding new input box by ckicking the newline button
$("#rowAdder").click(function ()
{
    var currentCount = parseInt($('#counter').val());
    currentCount++;
    var setBackground = 'style="background-color:#D3D3D3;"';

    if (currentCount % 2 == 0)
    {
        newRowAdd =
            '<div id="row"> ' +
            '<div class="input-group m-3">' +
            '<span class="input-group-text">Line ' + currentCount + '</span>' +
            '<input type="text" class="form-control textInput"  maxlength="40" ' + setBackground + '>' +
            '<div class="input-group-prepend">' +
            '<button class="input-group-text" id="DeleteRow" type="button">X</button> ' +
            '</div>' +
            '</div>' +
            '</div> ';
    } else
    {
        newRowAdd =
            '<div id="row"> ' +
            '<div class="input-group m-3">' +
            '<span class="input-group-text">Line ' + currentCount + '</span>' +
            '<input type="text" class="form-control textInput"  maxlength="40">' +
            '<div class="input-group-prepend">' +
            '<button class="input-group-text" id="DeleteRow" type="button">X</button> ' +
            '</div>' +
            '</div>' +
            '</div> ';
    }

    $('#counter').val(currentCount);

    $('#newInputArea').append(newRowAdd);
});

//Removing input boxes by clicking the X 
$("body").on("click", "#DeleteRow", function ()
{
    $(this).parents("#row").remove();

    var currentCount = parseInt($('#counter').val());
    currentCount--;
    $('#counter').val(currentCount);
    console.log(currentCount);
});

var maxInput = 40;

//Counting textbox input string length and add a new box below the current one
$("body").on("keyup", ".textInput", function ()
{

    var currentLength = $(this).val().length;
    if (currentLength >= maxInput)
    {
        var currentCount = parseInt($('#counter').val());
        currentCount++;
        var setBackground = 'style="background-color:#D3D3D3;"';

        if (currentCount % 2 == 0)
        {
            newRowAdd =
                '<div id="row"> ' +
                '<div class="input-group m-3">' +
                '<span class="input-group-text">Line ' + currentCount + '</span>' +
                '<input type="text" class="form-control textInput"  maxlength="40" ' + setBackground + '>' +
                '<div class="input-group-prepend">' +
                '<button class="input-group-text" id="DeleteRow" type="button">X</button> ' +
                '</div>' +
                '</div>' +
                '</div> ';
        } else
        {
            newRowAdd =
                '<div id="row"> ' +
                '<div class="input-group m-3">' +
                '<span class="input-group-text">Line ' + currentCount + '</span>' +
                '<input type="text" class="form-control textInput"  maxlength="40">' +
                '<div class="input-group-prepend">' +
                '<button class="input-group-text" id="DeleteRow" type="button">X</button> ' +
                '</div>' +
                '</div>' +
                '</div> ';
        }

        $('#counter').val(currentCount);

        $('#newInputArea').append(newRowAdd);
    }

});

//Appending user inputs to textArea

$("body").on("change", ".textInput", function ()
{
    var currentInputStrings = $('#myTextArea').val();
    if (currentInputStrings != "")
    {
        $('#myTextArea').val(currentInputStrings + "\n" + $(this).val());
    } else
    {
        $('#myTextArea').val($(this).val());
    }

    $('#limit_count').html("(" + $('#myTextArea').val().length + " / 1000)");

});

//Counting strings and displaying the current state

$('#myTextArea').on("change", function ()
{
    $('#limit_count').html("(" + $(this).val().length + " / 1000)");

    if ($(this).val().length > 1000)
    {
        $(this).val($(this).val().substring(0, 1000));
        $('#limit_count').html("(1000 / 1000)");

    }

});