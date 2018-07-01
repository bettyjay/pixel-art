//when size is submitted by the user, call makeGrid()

function makeGrid() {
    var n, m, canvas, colorPicker;
    n = $('#inputWidth').val();
    m = $('#inputHeight').val();
    canvas = $('#pixelCanvas');
    colorPicker = $('#coloPicker');
//declaring the variables first.
for(tr=1; tr<=m; tr++){//build columns
    canvas.append('<tr></tr>');
}
for(td=1; td<=n; td++);{//build rows
    $('tr').append("<td id='pixel'></td>");
}
//let color = colorPicker.val();
//canvas.children().remove();
//submit button
$('#sizePicker').submit(function(e){
    e.preventDefault();
    let tr = $('#pixelCanvas').find('tr');
    tr.remove();
    makeGrid();
});

//color pixel on clicking
$('#pixelCanvas').on('click','td',function(e){
    //color with specific color if not already colored
    if(!$(e.target).attr('style')){
        $(e.target).css('background-color',color);
        $(e.target).addClass('colored');
    } else{
        $(e.target).removeAttr('style');
        $(e.target).removeClass('colored');
        //if colored already remove the color from pixel
    }
})
$('#toggleBth').click('.pixelCanvas',function(){
    $('td').toggleClass('grid_Toggle');
});
};