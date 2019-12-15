$(function() {

    
    const key = '?api-key=zYRIOfPzk9AGjtTQovI1AIrPU5QJ0d7l';
    const mainContent = $('main');
    const loading = $('.loader');
    const header = $('header');
    
    $('select').on('change', function(){
        mainContent.html('');

        if ($('select').val() === 'none') {
        return
        } else {
        
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
            $.each(data.results, function(key, value){
                header.addClass('header-animation');
                mainContent.append(`<section class='main-news' style='background-image: url(${value.multimedia[4]?value.multimedia[4].url: 'img/noPhotoLogo.jpg'});'><a href='${value.url}><div class='caption' style='background: rgba(0,0,0,0.7);'>${data.results[key].abstract}</div></a></section>`)
            })
        }).fail(function(){
            alert('Failed to load, try again later');
            
        })
    }

});

});




