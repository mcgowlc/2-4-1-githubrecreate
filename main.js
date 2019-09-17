$(document).ready(function(){

  'use strict'

  const CLIENT_ID = '50116403';
  const CLIENT_SECRET = 'MDQ6VXNlcjUwMTE2NDAz';

  // *********************** this is for my profile below
  $.ajax({
    url:'https://api.github.com/users/mcgowlc?client_id=50116403&client_secret=MDQ6VXNlcjUwMTE2NDAz',
    dataType: "jsonp",
    method: 'GET',

    success: function(response) {

      response = {data:response.data};
      console.log('response', response);

      renderHTML(response);
    },

    error: function(xhr){
      console.log('uh oh, something went wrong', xhr.status)
    }
  });

function renderHTML(response) {
  var source  = document.getElementById("entry-template").innerHTML;
  var template = Handlebars.compile(source);

  var context = response;
  var html = template(context);

  $('.insert').html(html);
}

// ***********************this is for my repos below
  $.ajax({
    url: 'https://api.github.com/users/mcgowlc?client_id=50116403&client_secret=MDQ6VXNlcjUwMTE2NDAz',
    dataType:'jsonp',
    method: 'GET',

    success: function(response) {

      response = {data:response.data};
      console.log('response', response);

      renderRepoHTML(response);
    },

    error: function(xhr){
      console.log('uh oh, something went wrong', xhr.status)
    }
  });

function renderRepoHTML(response) {
  var source  = document.getElementById("repos-template").innerHTML;
  var template = Handlebars.compile(source);

  var context = response;
  var html = template(context);

  $('.insertrepos').html(html);
}



$.ajax({
  url:'https://api.github.com/users/mcgowlc?client_id=50116403&client_secret=MDQ6VXNlcjUwMTE2NDAz',
  dataType: "jsonp",
  method: 'GET',

  success: function(response) {

    response = {data:response.data};
    console.log('response', response);

    renderOrgsHTML(response);
  },

  error: function(xhr){
    console.log('uh oh, something went wrong', xhr.status)
  }
});

function renderOrgsHTML(response) {
var source  = document.getElementById("orgs-template").innerHTML;
var template = Handlebars.compile(source);

var context = response;
var html = template(context);

$('.insertorgs').html(html);
}



});
