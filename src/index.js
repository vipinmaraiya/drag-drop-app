import "jquery";
import "../node_modules/jquery-ui/ui/widgets/draggable";
import "../node_modules/jquery-ui/ui/widgets/droppable";
import "../node_modules/jquery-ui/ui/widgets/resizable";
import "../node_modules/jquery-ui/ui/widgets/sortable";
import "../node_modules/jquery-ui/ui/widgets/dialog";

import "../node_modules/jquery-ui/themes/base/all.css"
import "../node_modules/jquery-ui/themes/base/draggable.css"
import "../node_modules/jquery-ui/themes/base/resizable.css"

import "../node_modules/jquery-ui/themes/base/sortable.css"
import "../src/css/style.css";

$(document).ready(function(){

   
    $( "#sortable" ).sortable({
        revert: true
      });
    $( "#main-container" ).disableSelection();
    $('.container').draggable({
        connectToSortable: "#sortable",
        helper: "clone",
        revert: "invalid"
    });

    $(".container").resizable({
        animate: true
    });

    $(".full-width").draggable({
        containment:"parent",
        helper: "clone",
    })
    $("#main-container").droppable({
        accept:".container",
        drop:function(event, ui){
            $("#main-container-hover").removeClass("highlight");
      
            $("#main-container").removeClass("dotted-border");
            
            $("#dialog-form").dialog("open")
            $("#main-container > .container").addClass("full-width");
            $("#main-container > .container").attr("data-value", "drop-container")
        },
        over:function(event, ui){
            $("#main-container-hover").addClass("highlight");
            $("#main-container").addClass("dotted-border");
        },
        out:function(event, ui){
            $("#main-container-hover").removeClass("highlight");
            $("#main-container").removeClass("dotted-border");
        }
        // activate:function(event, ui){
        //     $("#main-container-hover").addClass("highlight");
        // },
        // deactivate:function(event, ui){
        //     $("#main-container-hover").removeClass("highlight");
        // }
        // hoverClass:"highlight"
    });

    $("#dialog-form").dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
          "Add": function(){
              
            $("#main-container").append("ADDD");
            $("#dialog-form").dialog( "close" );
          },
          Cancel: function() {
            $("#dialog-form").dialog( "close" );
          }
        },
        close: function() {
        //   form[ 0 ].reset();
        //   allFields.removeClass( "ui-state-error" );
        }
      });
     

})