$(function() {
      const key = '?api-key=zYRIOfPzk9AGjtTQovI1AIrPU5QJ0d7l';
      const menuValue = $('select').val();
      const content = $('main');
      const url = 'https://api.nytimes.com/svc/topstories/v2/' + menuValue + '.json' + key;


      $.ajax ({
          method: 'GET',
          url: url

      }).done(function(data){
          $.each(data.results, function(key, value){
             alert('seems to be working');

          }).fail(function(){
              alert('failed to load');
              content.append('<strong><p class="fail-message"> FAILED TO LOAD, TRY AGAIN LATER</p></strong>')
          })
      })
})



