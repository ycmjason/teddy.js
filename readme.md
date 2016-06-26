# Teddy.js
Teddy allows you to dynamically *inject views into html elements* in the simplest way.

## Preface
Teddy was originally developed for [fullpage.js](https://github.com/alvarotrigo/fullPage.js) to allow dynamic loading of views. However it absolutely has a lot of use cases where teddy will become handy. Feel free to contribute to the project.

## How to use?
The following example aims to demonstrate the brief idea of teddy. **For working examples, follow the [working examples session](#working-examples).**
```html
<div class="welcome"></div>
<div id="footer"></div>

<!-- import Jquery -->
<script src="jquery.js">
<!-- import teddy.js -->
<script src="teddy.js">

<script>
  ted({
    sections: {
      '.welcome': 'templates/welcome.html',
      '#footer': 'templates/footer.html'
    },
    done: function(){
    alert('done loading all the templates');
  }
  });
</script>
```
The above code will populate `.welcome` and `#footer` with the content in `templates/welcome.html` and `templates/footer.html` respectively.

## Working examples
1. `git clone https://github.com/ycmjason/teddy.js.git`
2. `cd teddy.js`
3. `npm start` (note: this requires python to be installed)
4. Open your browser and go to [localhost:8001](localhost:8001)
5. Navigate to the examples folders and see the examples.

## Working with fullpage.js
See the fullpage.js example in the `examples` directory.

## License
MIT

