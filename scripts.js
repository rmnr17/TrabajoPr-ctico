jQuery('document').ready(function($){

    var menuBtn=$('.menu-icon');
        menuresp =$('.menu ul');
    menuBtn.click(function(){

        if (menuresp.hasClass('show')){
            menuresp.removeClass('show')
        } else {
            menuresp.addClass('show');
        }
        
    });
});