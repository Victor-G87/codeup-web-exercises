
    $(document).ready(function() {
        // alert($('#heading-1').html());
        // $("h1").hover(
        //     function() {
        //         var value = $(this).html();
        //         $(this).html(value.toUpperCase());
        //     },
        //     function() {
        //         var value = $(this).html();
        //         $(this).html(value.toLowerCase());
        //     }
        // );
        // $('h1').hover(
        //     function() {
        //         $(this).css('background-color', '#FF0');
        //     },
        //     function() {
        //         $(this).css('background-color', '#FFF');
        //     }
        // );
        $(document).onkeydown(function(e){
            console.log('onkeydown');
            console.log(e.keyCode);
            console.log(e.key);
    });
