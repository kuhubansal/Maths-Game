var playing=false;
        var score;
        var action;
        var remaining;
        var correctans;
        document.getElementById("start").onclick=function(){
    
    if(playing == true){
        
        location.reload(); //reload page
        
    }else{//if we are not playing
        
        //change mode to playing
        
        playing = true;
        
        //set score to 0
        
        score = 0;
        document.getElementById("score").innerHTML = score;
        document.getElementById("gameover").style.display="none";
        //show countdown box 
        remaining=60;
        document.getElementById("remaining").style.display="block";
        document.getElementById("start").innerHTML = "Reset Game";
        startcountdown();
        generateQA();
        }
    }
    for(i=1;i<4;i++){
    document.getElementById("box"+i).onclick=function(){
        if(playing==true){
            if(this.innerHTML==correctans){
                score++;
                document.getElementById("score").innerHTML=score;
                document.getElementById("correct").style.display="block";
                document.getElementById("try").style.display="none";
                setTimeout(function(){
                    document.getElementById("correct").style.display="none"; 
                },1000);
                generateQA();
            }
            else{
                document.getElementById("score").innerHTML=score;
                document.getElementById("try").style.display="block";
                document.getElementById("correct").style.display="none";
                setTimeout(function(){
                    document.getElementById("try").style.display="none"; 
                },1000);
            }
            
        }
    }
}
    function startcountdown(){
        action=setInterval(function(){
            remaining -=1;
            document.getElementById("remaining").innerHTML="time remaining: "+remaining;
            if(remaining==0){
                stopcountdown();
                document.getElementById("gameover").style.display="block";
                document.getElementById("remaining").style.display="none";
                document.getElementById("again").style.display="none";
                document.getElementById("start").style.display="none";
                document.getElementById("gameover").innerHTML = "<p>Game over!</p>" ;
                document.getElementById("start").innerHTML="Start Game";
                playing=false;
            }
        },1000)
    }
    function stopcountdown(){
        clearInterval(action);
    }
    function generateQA(){
      var x=1+Math.round(9*Math.random());
      var y=1+Math.round(9*Math.random());
      correctans=x*y;
      document.getElementById("question").innerHTML=x+"x"+y;
      var correctpos=1+Math.round(2*Math.random());
      document.getElementById("box"+correctpos).innerHTML=correctans;
      var answers=[correctans];
    for(i=1;i<4;i++){
        if(i!=correctpos){
        var wrongans;
        do{
            var wrongans=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
        }
        while(answers.indexOf(wrongans)>-1)
        document.getElementById("box"+i).innerHTML=wrongans;
        answers.push(wrongans);
        }
    }
}