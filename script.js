jQuery(function($){
    
    $('.devamyazi').on('click',function(){
        
        if($(this).hasClass('aktif')){
            $('.caticerik').css({'height':'100px'});
            $(this).removeClass('aktif');
        }else{
            $('.caticerik').css({'height':'auto'});
            $(this).addClass('aktif');
        }
        
    });
    
});