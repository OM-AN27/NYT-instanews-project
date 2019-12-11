$(function() {
      const key = '?api-key=zYRIOfPzk9AGjtTQovI1AIrPU5QJ0d7l';
      const menuValue = $('select').val();
      const content = $('main');
      const loading = $('.loader');
      const nytUrl = 'https://api.nytimes.com/svc/topstories/v2/' + menuValue + '.json' + key;

    //   menuValue.change(function(event){
    //       event.preventDefault();

    //   })


      $.ajax ({
          method: 'GET',
          url: nytUrl

      }).always(function(){
          loading.hide();
      })
      .done(function(data){
          $.each(data.results, function(key, value){
              content.append(`<section class='main-news' style='background-image: url(${value.multimedia[4].url});'><a href='${value.url}><div class='caption'>${data.results[key].abstract}</div></a></section>`)
          })
      }).fail(function(){
        alert('Failed to load, try again later');

      })
});





