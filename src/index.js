import "jquery";
import "../node_modules/jquery-ui/ui/widgets/draggable";
import "../node_modules/jquery-ui/ui/widgets/droppable";
import "../node_modules/jquery-ui/ui/widgets/resizable";
import "../node_modules/jquery-ui/ui/widgets/sortable";

import "../node_modules/jquery-ui/themes/base/draggable.css"
import "../node_modules/jquery-ui/themes/base/resizable.css"

import "../node_modules/jquery-ui/themes/base/sortable.css"
import "../src/css/style.css";

$(document).ready(function(){
    $( "#sortable" ).sortable({
        revert: true
      });
    $( ".main-container" ).disableSelection();
    $('.container').draggable({
        connectToSortable: "#sortable",
        helper: "clone",
        revert: "invalid"
    });

    $(".container").resizable({
        animate: true
    });

    // $(".full-width").draggable({
    //     containment:"parent"
    // })
    $(".main-container").droppable({
        accept:".container",
        drop:function(event, ui){
            $(".main-container-hover").removeClass("highlight");
      
            $(".main-container").removeClass("dotted-border");
            
            $(".main-container").append(ui.draggable);
            console.log(ui.draggable)
            $(".main-container > .container").addClass("full-width");
            $(".main-container > .container").attr("data-value", "drop-container")
        },
        over:function(event, ui){
            $(".main-container-hover").addClass("highlight");
            $(".main-container").addClass("dotted-border");
        },
        out:function(event, ui){
            $(".main-container-hover").removeClass("highlight");
            $(".main-container").removeClass("dotted-border");
        }
        // activate:function(event, ui){
        //     $(".main-container-hover").addClass("highlight");
        // },
        // deactivate:function(event, ui){
        //     $(".main-container-hover").removeClass("highlight");
        // }
        // hoverClass:"highlight"
    });
})