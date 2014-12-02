var app = angular.module('angular-canvas-piechart', ['ngPiechart', 'ui.router']);
app.controller('example', ['$scope', function($scope){

    $scope.chart1 = [{
        value:8000,
        color:'#6F936C'
    },{
        value:9500,
        color:'#403D53'
    },{
        value:1000,
        color:'#ABA5D2'
    },{
        value:3000,
        color:'#FF6800'
    }];

    $scope.chart2 = [{
        value:30,
        color:'#6F936C'
    },{
        value:40,
        color:'#FF6800'
    },{
        value:30,
        color:'#403D53'
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

    //867970
    $scope.config = {
        duration:750,
        lineWidth:0,
        lineColor:'white'
    }

}]);
