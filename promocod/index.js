// jquery
import $ from 'jquery'
window.$ = $
window.jQuery = $

// all sprite icons svg
var req = require.context('./assets/icons', true, /^(.*\.(svg$))[^.]*$/);
req.keys().forEach(function(key){
    req(key);
})

// svg use for old browsers
import svg4everybody from 'svg4everybody'
svg4everybody()

// owl carousel


// JS
import './js/index.js'

// SCSS
import './assets/sass/main.sass'
