var link;
 function updateLink(x, y) {
     link = "https://api.whatsapp.com/send?phone=" + $('input#number').val() + "&text=" + $('textarea#message').val();
     //  var a = document.getElementById('send'); //or grab it by tagname etc
     //  a.href = link;         
 }
 $("#number, #message").on("change paste keyup", function () {
     updateLink();
 });
 
 function go() {
     // window.location = link;
     if (/^([+])?\d{11,13}$/.test($("#number").val())) {
         window.open(link, '_blank');
     }else
     $('#hint').show(); 
 }
 $('#hint').hide();
 $('#number').on('input', function () {
     if (/^([+])?\d{11,13}$/.test($("#number").val())) {

         $('#number').removeClass('red_text');
         $('#number').addClass('green_text');

         $('#send').removeClass('disable_click');
         $('#send').attr('disabled', false);
         $('#hint').hide();
     } else {

         $('#number').removeClass('green_text');
         $('#number').addClass('red_text');

         $('#send').addClass('disable_click');
         $('#send').attr('disabled', true);

         $('#hint').show();
     }

 });