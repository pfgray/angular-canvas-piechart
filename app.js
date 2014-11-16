var app = angular.module('test', ['ngPiechart']);
app.controller('example', ['$scope', function($scope){

    $scope.chart1 = [{
        value:8000,
        color:'#42B4E6'
    },{
        value:9500,
        color:'#FF9797'
    },{
        value:1000,
        color:'#8BFEA8'
    },{
        value:3000,
        color:'#FFFFB5'
    }];

    $scope.chart2 = [{
        value:30,
        color:'#F5DEB3'
    },{
        value:40,
        color:'#DDA0DD'
    },{
        value:30,
        color:'#FF6347'
    }];

    $scope.chart3 = [{
        value:20,
        color:'#0F120E'
    },{
        value:10,
        color:'#F5DEB3'
    },{
        value:5,
        color:'#42B4E6'
    },{
        value:25,
        color:'#DDA0DD'
    },{
        value:40,
        color:'#B03060'
    }];

    $scope.config = {
        duration:750,
        lineWidth:3,
        lineColor:'black'
    }

}]);
