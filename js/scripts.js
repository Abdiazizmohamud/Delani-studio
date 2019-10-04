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
