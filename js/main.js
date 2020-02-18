$(document).ready(function() {

    
    const key = '?api-key=zYRIOfPzk9AGjtTQovI1AIrPU5QJ0d7l';
    const mainContent = $('main');
    const loading = $('.loader');
    let header = $('header');
    
    loading.hide();
    
    $('select').on('change', function(){
        mainContent.html('');
        
        if ($('select').val() === 'none') {
            header.css('height', '31.25rem');
            return
        } else {

            loading.show();
        
        let nytUrl = 'https://api.nytimes.com/svc/topstories/v2/sports.json'  + key;
        event.preventDefault();
        nytUrl = nytUrl.replace('sports', $('select').val());
        
        
        
        $.ajax ({
          method: 'GET',
          url: nytUrl
          
        }).always(function(){
            loading.hide();
        })
        .done(function(data){
                header.addClass('header-animation');
            for (let i = 0; i < 12; i++) {
                mainContent.append(`<section class='main-news' style="background-image:url(${data.results[i].multimedia[4]?data.results[i].multimedia[4].url: 'img/noPhotoLogo.jpg' });"> <a href='${data.results[i].url}'><div class='caption' style='background: rgba(0,0,0,0.7); padding: 10px;'>${data.results[i].abstract}</div></a></section>`);
             }
        }).fail(function(){
            alert('Failed to load, try again later');
            
        })
    }

});

});




