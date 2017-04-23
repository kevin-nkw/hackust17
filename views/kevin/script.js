$( document ).ready(function() {
    console.log( "ready!" );
});

$( function() {

    var itin1;


    $( "#sortable1,#sortable2,#sortable3, #sortable4" ).sortable({
      helper:"clone",
      placeholder: "ui-state-highlight",
      forcePlaceholderSize:"true",
      connectWith: ".connectedSortable",
      revert: true
    });
    $( "#sortable1,#sortable2,#sortable3, #sortable4" ).disableSelection();
    $( ".draggable" ).draggable({
      connectToSortable: "#sortable1,#sortable2,#sortable3, #sortable4",
      helper: "clone",
      revert: "invalid"
    });
    $( "ul, li" ).disableSelection();
  } );


  $(".label2").hover(function(){

    $(".itin1").hide();
    $(".itin2").show();
    $('.label2').addClass('currenttab');
    $('.label1').removeClass('currenttab');

  });

  $(".label1").hover(function(){

    $(".itin2").hide();
    $(".itin1").show();
    $('.label1').addClass('currenttab');
    $('.label2').removeClass('currenttab');

  });
$("#addbutton").click(function(){
  window.location.href = "newitin.html";

});

$(".label1").droppable({
    over: function (event, ui) {
       var yourCurrentlyHoveredElement = $(this);
       console.log($(this).html()); //the 'this' under over event
       $(".itin2:not(.ui-sortable-helper)").hide();
       $(".itin1").show();
       $('.label1').addClass('currenttab');
       $('.label2').removeClass('currenttab');
       $(".ui-sortable-helper").show();
     }
});
