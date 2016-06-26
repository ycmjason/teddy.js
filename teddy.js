function bootstrap(opts){
  if(!$) throw "JQuery not found. Expecting $.";

  opts = opts || {};

  opts.main = opts.main || '#content';
  if(!opts.sections){
    throw "No sections defined.";
  }

  $loading = $('<div>Loading...</div>');
  $main = $(opts.main);

  $('body').append($loading);
  $main.hide();


  var selectors = Object.keys(opts.sections);
  var loadStage = 0;
  var loadAim = selectors.length;
  selectors.forEach(function(selector){
    var template = opts.sections[selector];

    $(selector).load(template, function(){
      // when loading is finish, call the callback
      if(++loadStage >= loadAim && opts.callback) {
        $main.show();
        $loading.remove();

        opts.callback();
      }
    });
  });
}
