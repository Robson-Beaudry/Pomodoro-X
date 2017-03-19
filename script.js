$(document).ready(function(){
  var num4 = parseInt($("#number4").html());
  var num3 = parseInt($("#number3").html());
  var num2 = parseInt($("#number2").html());
  var num1 = parseInt($("#number1").html());
  var work1 = parseInt($("#workDigit1").html());
  var work2 = parseInt($("#workDigit2").html());
  var play1 = parseInt($("#playDigit1").html());
  var play2 = parseInt($("#playDigit2").html());
  var clockState = 0;
  //Youtube Variables
  var youtubeText;
  var youtubeID;
  //Button Variables
  var startOrStop = true; 
  var timerId = 0;
  
  //Controls Switch Between Work and Play States 
  function switchStates(){
    player.playVideo();
    if (clockState===0){
      num1 = parseInt($("#playDigit1").html());
      num2 = parseInt($("#playDigit2").html());
      num3 = 0;
      num4 = 0;
      $("#number1").html(num1);
      $("#number2").html(num2);
      $("#number3").html(num3);
      $("#number4").html(num4);
      $("#workDigit2").html(work2);
      $("#workDigit1").html(work1);
      startOrStop = false;
      clockState = 1;
      leClick();
    }
    else{
      num1 = parseInt($("#workDigit1").html());
      num2 = parseInt($("#workDigit2").html());
      num3 = 0;
      num4 = 0;
      $("#number1").html(num1);
      $("#number2").html(num2);
      $("#number3").html(num3);
      $("#number4").html(num4);
      $("#playDigit2").html(play2);
      $("#playDigit1").html(play1);
      startOrStop = false;
      clockState = 0;
      leClick();
    }
  }
  // Controls countdown on clock
  function finalCountdown(){
    if (num4===0){
      num4 = 9;
      $("#number4").html(num4);
      if (num3===0){
        num3 = 5;
        $("#number3").html(num3);
        if (num2===0){
          num2 = 9;
          $("#number2").html(num2);
          if (num1===0){
            switchStates();            
          }
          else{
            num1--;
            $("#number1").html(num1);
          }
        }
        else{
          num2 --;
          $("#number2").html(num2);
        }
      }
      else{
        num3 --;
        $("#number3").html(num3);
      }     
    }
    else{
      num4--;
      $("#number4").html(num4);
    }    
  }
  //Controls what to do when start button is clicked
  function leClick(){
    startOrStop = !startOrStop;
    if (!startOrStop){
      if (clockState===0){
        $("#workHard").css("font-size", "35px");
        $("#playHard").css("font-size", "18px");
      }
      else{
        $("#workHard").css("font-size", "18px");
        $("#playHard").css("font-size", "35px");
      }
      $("#startButton").text("Stop");
      $("#startButton").css("background-color","red");
      timerId = setInterval(finalCountdown, 1000);
    }
    
    if (startOrStop){
      $("#startButton").text("Start");
      $("#startButton").css("background-color","blue");
      $("#workHard,#playHard").css("font-size", "18px");
      clearInterval(timerId);
    }
  }

  //Next five functions control plus and minus buttons
  
  function resetSeconds(){
    num3=0;
    num4=0;
    $("#number3").html(num3);
    $("#number4").html(num4);
  }
  
  function workPressPlus(){
    if (startOrStop){
      if (clockState===0){
        resetSeconds();
        if (num2<9){
          num2++;    
        }
        else{
          if (num1==9&&num2==9){
          }
          else{
            num2=0;
            num1++; 
          }

        }
        $("#number2,#workDigit2").html(num2);
        $("#number1,#workDigit1").html(num1);
      }
      
      else{
        if (work2<9){
          work2++;    
        }
        else{
          if (work1==9&&work2==9){
          }
          else{
            work2=0;
            work1++; 
          }
        }
        $("#workDigit2").html(work2);
        $("#workDigit1").html(work1);
      }
    }
  }
  
  function workPressMinus(){
    if (startOrStop){
      if (clockState===0){
        resetSeconds();
        if (num2>0){
          num2--;    
        }
        else{
          if (num1===0){
          }
          else{
            num2=9;
            num1--; 
          } 
        }
        $("#number2,#workDigit2").html(num2);
        $("#number1,#workDigit1").html(num1);      
      }
      
      else{
        if (work2>0){
          work2--;    
        }
        else{
          if (work1===0){
          }
          else{
            work2=9;
            work1--; 
          }
        }
        $("#workDigit2").html(work2);
        $("#workDigit1").html(work1);
      }
    }
  }
  
  function playPressPlus(){
    if (startOrStop){
      if (clockState==1){
        resetSeconds();
        if (num2<9){
          num2++;    
        }
        else{
          if (num1==9&&num2==9){
          }
          else{
            num2=0;
            num1++; 
          }
        }
        $("#number2,#playDigit2").html(num2);
        $("#number1,#playDigit1").html(num1);
      }
      
      else{
        if (play2<9){
          play2++;    
        }
        else{
          if (play1==9&&play2==9){
          }
          else{
            play2=0;
            play1++; 
          }
        }
        $("#playDigit2").html(play2);
        $("#playDigit1").html(play1);
      }
    }
  }
  
  function playPressMinus(){
    if (startOrStop){
      if (clockState==1){
        resetSeconds();
        if (num2>0){
          num2--;    
        }
        else{
          if (num1===0){
          }
          else{
            num2=9;
            num1--; 
          } 
        }
        $("#number2,#playDigit2").html(num2);
        $("#number1,#playDigit1").html(num1);      
      }
      
      else{
        if (play2>0){
          play2--;    
        }
        else{
          if (play1===0){
          }
          else{
            play2=9;
            play1--; 
          }
        }
        $("#playDigit2").html(play2);
        $("#playDigit1").html(play1);
      }
    }
  }
  
  //This function controls what happens when confirm button is pressed
  function confirmPressed(){
    youtubeText = $("#searchBar").val();
    youtubeID = youtubeText.substring(youtubeText.indexOf("=") + 1);
    $("#confirmButton").css("background-color", "blue");
    $("#confirmButton").css("color", "white");
    player.loadVideoById(youtubeID);
    stopVideo();
  }
  
  
  $("#startButton").click(leClick);
  $("#plus1").click(workPressPlus);
  $("#minus1").click(workPressMinus);
  $("#plus2").click(playPressPlus);
  $("#minus2").click(playPressMinus);
  $("#confirmButton").click(confirmPressed);
  
});

//This code deals with youtube

// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
var player; 
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'UUGlOKsJGuI',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
  // event.target.playVideo();
}

// The API calls this function when the player's state changes.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    // setTimeout(stopVideo, 6000);
    done = true;
  }
}

function stopVideo() {
  player.stopVideo();
}