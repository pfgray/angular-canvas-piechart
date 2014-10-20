


var app = angular.module('test', ['ngPiechart']);
app.controller('example', ['$scope', function($scope){

    
    $scope.chart1 = [{
        percentage:20,
        color:'#42B4E6'
    },{
        percentage:15,
        color:'#FF9797'
    },{
        percentage:46,
        color:'#8BFEA8'
    },{
        percentage:19,
        color:'#FFFFB5'
    }];
    
    $scope.chart2 = [{
        percentage:30,
        color:'#F5DEB3'
    },{
        percentage:40,
        color:'#DDA0DD'
    },{
        percentage:30,
        color:'#FF6347'
    }];
    
    $scope.chart3 = [{
        percentage:20,
        color:'#0F120E'
    },{
        percentage:10,
        color:'#F5DEB3'
    },{
        percentage:5,
        color:'#42B4E6'
    },{
        percentage:25,
        color:'#DDA0DD'
    },{
        percentage:40,
        color:'#B03060'
    }];
    
    $scope.config = {
        duration:750
    }

}]);

