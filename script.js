/* js for map pin section */
$(document).ready(function(){

    // set the image-map width and height to match the img size
    $('#image-map').css({'width':$('#image-map img').width(),
                      'height':$('#image-map img').height()
    })
    
    //tooltip direction
    var tooltipDirection;
                 
    for (i=0; i<$(".pin").length; i++)
    {               
        // set tooltip direction type - up or down             
        if ($(".pin").eq(i).hasClass('pin-down')) {
            tooltipDirection = 'tooltip-down';
        } else {
            tooltipDirection = 'tooltip-up';
            }
    
        // append the tooltip
        $("#image-map").append("<div style='left:"+$(".pin").eq(i).data('xpos')+"px;top:"+$(".pin").eq(i).data('ypos')+"px' class='" + tooltipDirection +"'>\
                                            <div class='tooltip'>" + $(".pin").eq(i).html() + "</div>\
                                    </div>");
    }    
    
    // show/hide the tooltip
    $('.tooltip-up, .tooltip-down').mouseenter(function(){
                $(this).children('.tooltip').fadeIn(100);
            }).mouseleave(function(){
                $(this).children('.tooltip').fadeOut(100);
            })
});


      
        function myFunction(imgs) {
          var expandImg = document.getElementById("expandedImg");
          var imgText = document.getElementById("imgtext");
          expandImg.src = imgs.src;
          imgText.innerHTML = imgs.alt;
          expandImg.parentElement.style.display = "block";
        }
        function swapTiles(cell1,cell2) {
        var temp = document.getElementById(cell1).className;
        document.getElementById(cell1).className = document.getElementById(cell2).className;
        document.getElementById(cell2).className = temp;
      }
      
      function shuffle() {
      //Use nested loops to access each cell of the 3x3 grid
      for (var row=1;row<=3;row++) { //For each row of the 3x3 grid
         for (var column=1;column<=3;column++) { //For each column in this row
        
          var row2=Math.floor(Math.random()*3 + 1); //Pick a random row from 1 to 3
          var column2=Math.floor(Math.random()*3 + 1); //Pick a random column from 1 to 3
           
          swapTiles("cell"+row+column,"cell"+row2+column2); //Swap the look & feel of both cells
        } 
      } 
      }
      //Script for the puzzle game
      function clickTile(row,column) {
        var cell = document.getElementById("cell"+row+column);
        var tile = cell.className;
        if (tile!="tile9") { 
             //Checking if white tile on the right
             if (column<3) {
               if ( document.getElementById("cell"+row+(column+1)).className=="tile9") {
                 swapTiles("cell"+row+column,"cell"+row+(column+1));
                 return;
               }
             }
             //Checking if white tile on the left
             if (column>1) {
               if ( document.getElementById("cell"+row+(column-1)).className=="tile9") {
                 swapTiles("cell"+row+column,"cell"+row+(column-1));
                 return;
               }
             }
               //Checking if white tile is above
             if (row>1) {
               if ( document.getElementById("cell"+(row-1)+column).className=="tile9") {
                 swapTiles("cell"+row+column,"cell"+(row-1)+column);
                 return;
               }
             }
             //Checking if white tile is below
             if (row<3) {
               if ( document.getElementById("cell"+(row+1)+column).className=="tile9") {
                 swapTiles("cell"+row+column,"cell"+(row+1)+column);
                 return;
               }
             } 
        }
        
      }