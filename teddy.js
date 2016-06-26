function ted(opts){
  if(!$) throw "JQuery not found. Expecting $.";

  opts = opts || {};

  opts.content = opts.content || '#content';
  if(!opts.sections) throw "No sections defined.";

  $loading = $('<div>Loading...</div>');
  $content = $(opts.content);

  $('body').append($loading);
  $content.hide();


  var selectors = Object.keys(opts.sections);
  var loadStage = 0;
  var loadAim = selectors.length;
  selectors.forEach(function(selector){
    var template = opts.sections[selector];

    $(opts.content + ' ' + selector).load(template, function(){
      // when loading is finish, call the callback
      if(++loadStage >= loadAim) {
        $content.show();
        $loading.remove();

        if(opts.callback) opts.callback();
      }
    });
  });
}
