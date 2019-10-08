$(document).ready(function(){
  $(".madina").click(function(){
    $("#imgd").toggle();
    $("#design").toggle();
  });
  $(".boy").click(function(){
    $("#imgv").toggle();
    $("#development").toggle();
  });
  $(".mng").click(function(){
    $("#imgm").toggle();
    $("#product").toggle();
  });

  $(".image1").mouseover(function(){
    $(".first").show();
  }).mouseout(function(){
    $(".first").hide();
  });
  $(".image2").mouseover(function(){
    $(".second").show();
  }).mouseout(function(){
    $(".second").hide();
  });
  $(".image3").mouseover(function(){
    $(".third").show();
  }).mouseout(function(){
    $(".third").hide();
  });
  $(".image4").mouseover(function(){
    $(".fourth").show();
  }).mouseout(function(){
    $(".fourth").hide();
  });
  $(".image5").mouseover(function(){
    $(".fifth").show();
  }).mouseout(function(){
    $(".fifth").hide();
  });
  $(".image6").mouseover(function(){
    $(".sixth").show();
  }).mouseout(function(){
    $(".sixth").hide();
  });
  $(".image7").mouseover(function(){
    $(".seventh").show();
  }).mouseout(function(){
    $(".seventh").hide();
  });
  $(".image8").mouseover(function(){
    $(".eigth").show();
  }).mouseout(function(){
    $(".eigth").hide();
  });
$(document).ready(function(){
  $("form.form").submit(function(event){
    var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $ ("input#message").val();
    if(name==="")
    alert("please fill the form")
    else if(name=$("input#name").val())
    alert (name + ", We have received your message.Thank you for reaching out.");
  })
});
});
