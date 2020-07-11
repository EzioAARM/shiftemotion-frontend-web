
document.getElementById("cuerpo-emotions").onload = function(){
  //pie chart
    Chartist.Pie('#chartPreferences', {
        labels: ['30%', '30%', '40%'],
        series: [30, 30, 40]
    });

    //lines chart

    var dataSales = {
        labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM'],
        series: [
           [287, 385, 490, 492, 500],
          [67, 152, 143, 240, 300],
          [23, 113, 67, 108, 200]
        ]
      };

    var optionsSales = {
    lineSmooth: false,
    low: 0,
    high: 500,
    showArea: true,
    height: "245px",
    axisX: {
        showGrid: false,
    },
    lineSmooth: Chartist.Interpolation.simple({
        divisor: 3
    }),
    showLine: false,
    showPoint: false,
    };

    var responsiveSales = [
        ['screen and (max-width: 640px)', {
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
    ];
    
    Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);

    $("#main-table").find('tbody').append("<tr><td>ayanami01</td><td>ayanami rei</td><td>Sad</td><td>30</td></tr>");

    
};

