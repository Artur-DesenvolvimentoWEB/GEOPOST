
    var arrTimes = "Vasco; Flamengo; Palmeiras; Fluminense; Santos; São Paulo".split(";");
    var arrTimes2 = arrTimes;
        arrTimes.sort();
   
    var timeP;
   
    for(i=0;i<arrTimes.length;i++){
        timeP = arrTimes[i];
        console.log(timeP);
        for(x=0;x<arrTimes2.length;x++){
            if (timeP != arrTimes2[x]){
                console.log( "jogo: " + timeP + " X " +  arrTimes2[x]);
            }
        }
    }
    