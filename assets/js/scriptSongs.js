document.getElementById("cuerpo-songs").onload = function(){

    //bars chart
    var data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun'],
      series: [
      [542, 443, 320, 780, 553, 453],
      [412, 243, 280, 580, 453, 353],
      [400, 200, 200, 500, 300, 250]
      ]
    };
    
    var options = {
      seriesBarDistance: 10,
      axisX: {
        showGrid: false
      },
      height: "245px"
    };
    
    var responsiveOptions = [
      ['screen and (max-width: 640px)', {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function (value) {
        return value[0];
        }
      }
      }]
    ];
    
    Chartist.Bar('#chartActivity', data, options, responsiveOptions);

    Chartist.Pie('#chartPreferences', {
        labels: ['30%', '30%', '40%'],
        series: [30, 30, 40]
    });

    $("#main-table").find('tbody').append("<tr><td>ayanami01</td><td>ayanami rei</td><td>Hip-Hop</td><td>Winter Blues By Joyner Lucas</td></tr>");
  };