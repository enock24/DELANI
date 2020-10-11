$(document).ready(function(){
    $("#image1").click(function(){
        $("#image1").hide();
        $(".design").show();
    });
    $(".design").click(function(){
        $(".design").hide();
        $("#image1").show();
    });
});

 $(document).ready(function(){
    $("#image2").click(function(){
        $("#image2").hide();
        $(".development").show();
    });
    $(".development").click(function(){
        $(".development").hide();
        $("#image2").show();
    });
});

$(document).ready(function(){
    $("#image3").click(function(){
        $("#image3").hide();
        $(".product").show();
    });
    $(".product").click(function(){
        $(".product").hide();
        $("#image3").show();
    });
});
// $(document).ready(function(event){
//     $("#enoc").submit(function(){
//         var name=$("input#enock1").val();
//         var email=$("input#enock2").val();
//         var message=$("textarea#enock3").val();
//         if($("input#enock1").val()&& $("input#enock2").val()){
//             alert(name +"we have received your message. Thank you for reaching out to us.");
//         }
//     });
// });

