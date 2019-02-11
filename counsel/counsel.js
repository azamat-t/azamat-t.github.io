jQuery(document).ready(function( $ ) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY"],
        datasets: [{
            data: [0, 30, 35, 36, 30],
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#fde428',
            borderWidth: 4,
            pointBackgroundColor: '#fde428'
        },
            {
                data: [0, 20, 30, 34, 50],
                lineTension: 0,
                backgroundColor: 'transparent',
                borderColor: '#002e5b',
                borderWidth: 4,
                pointBackgroundColor: '#002e5b'
            }],

    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        },
        legend: {
            display: false,
        }
    }
});

$(document).ready(function(){
    var scroll_start = 0;
    var startchange = $('#myCarousel');
    var offset = startchange.offset();
    if (startchange.length){
        $(document).scroll(function() {
            scroll_start = $(this).scrollTop();
            if(scroll_start > offset.top) {
                $(".navbar").css('background-color', '#002e5b');
            } else {
                $('.navbar').css('background-color', 'transparent');
            }
        });
    }
});

$(function(){
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        $('html, body').animate({scrollTop: dn}, 1300);
    });
});