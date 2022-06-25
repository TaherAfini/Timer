var time = 0;
var intervalID;
var intervalID2;
var intervalID3;
var time2 = 0;
var time3 = 0;

$(".start").click(() => {
    $(".start").prop("disabled", true);
    $(".stop").prop("disabled", false);
    $(".timeout").prop("disabled", false);
    $(".injury").prop("disabled", false);
    intervalID = setInterval(() => {
        if(time >= 900) {
            $(".stop").click();
        } else {
            
            time++;
            let min = parseInt(time/60);
            let secs = time%60;

            min = min < 10 ? '0'+min : min;
            secs = secs < 10 ? '0'+secs : secs;
            $(".timer").html(min + ":" + secs);
        }
        
    }, 1000);
})

$(".stop").click(() => {
    clearInterval(intervalID);
    $(".start").prop("disabled", false);
    $(".stop").prop("disabled", true);
    $(".timeout").prop("disabled", true);
    $(".injury").prop("disabled", true);
})

$(".timeout").click(() => {
    clearInterval(intervalID);
    $(".start").prop("disabled", true);
    $(".stop").prop("disabled", true);
    $(".timeout").prop("disabled", true);
    $(".injury").prop("disabled", true);
    
    intervalID2 = setInterval(() => {
        time2++;
        let min = parseInt(time2/60);
        let secs = time2%60;

        min = min < 10 ? '0'+min : min;
        secs = secs < 10 ? '0'+secs : secs;
        $(".timeout-clock").html(min + ":" + secs);
    }, 1000);
    setTimeout(() => {
        clearInterval(intervalID2);
        time2 = 0;
        $(".start").click();
        $(".timeout").prop("disabled", false);
    }, 45000)
})

$(".injury").click(() => {
    clearInterval(intervalID);
    $(".start").prop("disabled", true);
    $(".stop").prop("disabled", true);
    $(".timeout").prop("disabled", true);
    $(".injury").prop("disabled", true);
    intervalID3 = setInterval(() => {
        time3++;
        let min = parseInt(time3/60);
        let secs = time3%60;

        min = min < 10 ? '0'+min : min;
        secs = secs < 10 ? '0'+secs : secs;
        $(".timeout-clock").html(min + ":" + secs);
    }, 1000);
    setTimeout(() => {
        clearInterval(intervalID3);
        time3 = 0;
        $(".start").click();
        $(".injury").prop("disabled", false);
    }, 25000)
})