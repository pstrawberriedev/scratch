/*
  Script
*/

console.log('--> script.js');

// Summoner Globals
var loader = $('.lookup-form .loader-wrap');
var error = $('#error');
var summonerInput = $('#sumlookup');
var resultArea = $('.lookup-result');

// Globoal Functions
function showLoader() {
  loader.css('z-index','2');
  loader.fadeIn(400);
}
function hideLoader() {
  loader.css('z-index','-1');
  loader.hide();
}
function summonerError(text) {
  error.text(text);
  error.fadeIn(600);
}
function hideSummonerError() {
  error.hide(function() {
    error.text('');
  });
}

// Summoner name validation
// <= 16 characters
function summonerValidation() {
  
  var length = $('#sumname').val().length;
  
  if(length > 2 && length <= 16) {
    return true;
  } else {
    return false;
  }
  
}

// Summoner lookup input
summonerInput.on('submit', function(e) {
  
  e.preventDefault();
  
  resultArea.fadeOut(300);
  
  var name = $('.lookup-form #sumname').val();
  var region = $('.lookup-form #sumname').val();
  
  
  // Run Validation
  if (summonerValidation() == 1) {
    
    showLoader();
    summonerLookUp(name);
    
  } else {
    
    hideLoader();
    summonerError('Invalid name');
    return false;
    
  }
  
});


// Summoner Lookup AJAX
/*
function summonerLookUp(summonerName) {
  
  var SUMMONER_NAME = summonerName;
  var API_KEY = "";

  $.ajax({
    url: 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + SUMMONER_NAME + '?api_key=' + API_KEY,
    type: 'GET',
    dataType: 'json',
    data: {

    },
    success: function (json) {
    
      var SUMMONER_NAME_NOSPACES = SUMMONER_NAME.replace(" ", "");

      SUMMONER_NAME_NOSPACES = SUMMONER_NAME_NOSPACES.toLowerCase().trim();

      summonerLevel = json[SUMMONER_NAME_NOSPACES].summonerLevel;
      summonerID = json[SUMMONER_NAME_NOSPACES].id;

      $('#summoner-name').text(SUMMONER_NAME);
      $('#summoner-id').text('ID: ' + summonerID);
      $('#summoner-level').text('Level: ' + summonerLevel);

      sumName = json[SUMMONER_NAME_NOSPACES].name;
      
      // Console log the dataz
      console.log(json);
      
      // Show everything
      hideLoader();
      hideSummonerError();
      resultArea.fadeIn(300);
      
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      
      //alert("error getting Summoner data!");
      hideLoader();
      summonerError('Summoner not found');
    }
  });
}
*/