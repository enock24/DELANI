$(document).ready(function(){
    $("#pic1").click(function(){
        $("#pic1").hide();
        $(".design").show();
    });
    $(".design").click(function(){
        $(".design").hide();
        $("#pic1").show();
    });
});

 $(document).ready(function(){
    $("#pic2").click(function(){
        $("#pic2").hide();
        $(".development").show();
    });
    $(".development").click(function(){
        $(".development").hide();
        $("#pic2").show();
    });
});

$(document).ready(function(){
    $("#pic3").click(function(){
        $("#pic3").hide();
        $(".product").show();
    });
    $(".product").click(function(){
        $(".product").hide();
        $("#pic3").show();
    });
});

