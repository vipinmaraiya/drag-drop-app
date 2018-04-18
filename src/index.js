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
    $( ".main-container" ).sortable();
    $( ".main-container" ).disableSelection();
    $('.container').draggable({
         helper:'clone'
    });

    $(".container").resizable({
        animate: true
    });

    $(".main-container").droppable({
        accept:".container",
        drop:function(event, ui){
            $(".main-container-hover").removeClass("highlight");
            $(".main-container").append(ui.draggable);
            $(".main-container > .container").addClass("full-width");
            
        },
        over:function(event, ui){
            $(".main-container-hover").addClass("highlight");
        },
        out:function(event, ui){
            $(".main-container-hover").removeClass("highlight");
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