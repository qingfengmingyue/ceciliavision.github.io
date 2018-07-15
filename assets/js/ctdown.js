// Set the date we're counting down to
// date = "May 15, 2015 12:00:00"
function ctdown(elem_id, date) {
    var countDownDate = new Date(date).getTime();

    // Update the count down every 1 second
    var countdownfunction = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();
        
        // Find the distance between now an the count down date
        var distance = now - countDownDate;
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Output the result in an element with id="demo"
        document.getElementById(elem_id).innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
        
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(countdownfunction);
            document.getElementById(elem_id).innerHTML = "EXPIRED";
        }
    }, 1000);
}

ctdown("timer1", "May 15, 2015 12:00:00")
ctdown("timer2", "May 1, 2011 12:00:00")
ctdown("timer3", "Oct 13, 2010 12:00:00")