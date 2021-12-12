// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);
var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
       "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
  };
  var data = [trace];
  var layout = {
    title: "'Pie' Chart"
  };
  Plotly.newPlot("plotArea", data, layout);

  // var data = [{
  //   values: [19, 26, 55],
  //   labels: ['Residential', 'Non-Residential', 'Utility'],
  //   type: 'pie'
  // }];
  
  // var layout = {
  //   height: 400,
  //   width: 500
  // };
  
  // Plotly.newPlot('plotArea', data, layout);