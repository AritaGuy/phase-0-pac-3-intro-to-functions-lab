function shout(string){
    return string.toUpperCase();
}
shout('hello');
function whisper(string2){
    return string2.toLowerCase();
}
whisper('CHECK');
function logShout(string3){
    return console.log(string3.toUpperCase());
}
function logWhisper(string4){
    return console.log(string4.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){
    // let cheeky;
    let cheeky; 
    if (string === string.toLowerCase()){
    cheeky = `I can't hear you!`;
    }
    else if (string === string.toUpperCase()){  
       cheeky = `YES INDEED!`;
    }
    else if (string = `Let's have dinner together!`){
     cheeky = `I would love to!`;
    }
    // console.log(string5)
    return cheeky;
   
}
console.log(sayHiToHeadphonedRoommate('HALLO'))