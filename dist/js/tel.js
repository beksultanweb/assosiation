$(document).ready(function(){
    $('input[name=phone]').mask("+7 (999) 999-99-99");
    
    // $('#subButton').on('click', function(){ 
    //     if($("#agree").prop("checked") != 'checked') { 
    //         window.alert('Вы не подтвердили что соответствуете критериям НПА!');
    //         $("#agree").css('border', '1px solid red');
    //         return false;
    //     }
    //     return true;
    // });

    $('form').submit(function(e){
        e.preventDefault();

        // if (!$(this).valid()){
        //     return;
        // }

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;
    });
});