$(document).ready(function() {
    $(".sglAnimate").click(function() {
        $(".overlay,#sglpopUp,#sglclose,#sglFooter").show();
       $(".sglAnimate").css("animation", "none");
        $(".sglAnimate").off("mouseout");
    });
    $("#sglclose").click(function() {
        $(".overlay,#sglpopUp,#sglclose,#sglFooter").hide();
        $(".sglAnimate").css({
            "box-shadow": "0 0 0 0 rgba(102, 102, 102, 0.7)",
            "animation": "pulse1 1.25s infinite cubic-bezier(0.66, 0, 0, 1)",
            "z-index": "2",
            //"background-color": "#32b5f6",
            "cursor": "pointer"
        });
    }); //end of sglclose
    $(".sglAnimate").mouseenter(function() {
        $(this).css("animation", "none");
        $(".sglAnimate").click(function() {
            $(".overlay,#sglpopUp,#sglclose,#sglFooter").show();
            $(".sglAnimate").css("animation", "none");
			$(".sglAnimate").off("mouseout");
        });
		    $(".sglAnimate").mouseout(function() {
        $(".sglAnimate").css({
            "box-shadow": "0 0 0 0 rgba(102, 102, 102, 0.7)",
            "animation": "pulse1 1.25s infinite cubic-bezier(0.66, 0, 0, 1)",
            "z-index": "2",
           // "background-color": "#32b5f6",
            "cursor": "pointer"
        }); 
    	$(".sglAnimate").on("mouseenter");
    });
    });
    $(".sglAnimate").mouseout(function() {
        $(".sglAnimate").css({
            "box-shadow": "0 0 0 0 rgba(102, 102, 102, 0.7)",
            "animation": "pulse1 1.25s infinite cubic-bezier(0.66, 0, 0, 1)",
            "z-index": "2",
           // "background-color": "#32b5f6",
            "cursor": "pointer"
        }); 
    	$(".sglAnimate").on("mouseenter");
    }); 
    $("#dpp").click(function() {
        $(".overlay,#dpppopUp,#dppclose").show();
        $("#dpp").css("animation", "none");
    });
    $("#dppclose").click(function() {
        $(".overlay,#dpppopUp,#dppclose").hide();
    });
    //Deselect
    $(document).attr('unselectable', 'on')
        .css({
            '-moz-user-select': 'none',
            '-o-user-select': 'none',
            '-khtml-user-select': 'none',
            /* you could also put this in a class */
            '-webkit-user-select': 'none',
            /* and add the CSS class here instead */
            '-ms-user-select': 'none',
            'user-select': 'none'
        }).on('selectstart', function() {
            return false;
        });
});