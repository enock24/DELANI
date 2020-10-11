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

$("button").click(function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name === "") {
      alert("Please Insert your name")
    } else
         if(email === ""){
        alert("Enter your Email")
    }else
       if(message === "") {
      alert("Please insert your message!")
    }else {
       alert(' Dear ' + name + ' we have received your message successfully. ' + ' Feel free to reach out to us at anytime');
    }
  });


$ ("#project1").mouseover(function () {
    $("#overlay0").show()
});
  $ ("#project1").mouseout(function () {
    $("#overlay0").hide();
})
 $ ("#project2").mouseover(function () {
     $("#overlay1").show()
 });
   $ ("#project2").mouseout(function () {
     $("#overlay1").hide();
 })
 $ ("#project3").mouseover(function () {
    $("#overlay2").show()
});
  $ ("#project3").mouseout(function () {
    $("#overlay2").hide();
})
$ ("#project4").mouseover(function () {
    $("#overlay3").show()
});
  $ ("#project4").mouseout(function () {
    $("#overlay3").hide();
})
$ ("#project5").mouseover(function () {
    $("#overlay4").show()
});
  $ ("#project5").mouseout(function () {
    $("#overlay4").hide();
})
$ ("#project6").mouseover(function () {
    $("#overlay5").show()
});
  $ ("#project6").mouseout(function () {
    $("#overlay5").hide();
})
$ ("#project7").mouseover(function () {
    $("#overlay6").show()
});
  $ ("#project7").mouseout(function () {
    $("#overlay6").hide();
})
$ ("#project8").mouseover(function () {
    $("#overlay7").show()
});
  $ ("#project8").mouseout(function () {
    $("#overlay7").hide();
})