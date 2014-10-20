angular.module('ngPiechart', [])
.directive('pieChart', function() {
    return {
        restrict: 'A',
        transclude: false,
        scope: false,
        link:function(scope, element, attrs){

            var slices = scope.$eval(attrs.model);
            var height = scope.$eval(attrs.height);
            var width  = scope.$eval(attrs.height);
            var config = scope.$eval(attrs.pieChart);

            var canvas  = element[0];
            var context = canvas.getContext('2d');
            var width = canvas.width;
            var height = canvas.height;

            var prepSlices = function(slices){
                //calculate percentages:
                var total = 0;
                for(var i=0; i<slices.length; i++){
                    total += slices[i].value;
                }
                for(var i=0; i<slices.length; i++){
                    slices[i].$pieChartPercentage = (slices[i].value/total) * 100;
                }
                return slices;
            }



            //variables
            var percentComplete = 0.0;
            var duration = config.duration || 500; //milliseconds
            var lineWidth = config.lineWidth || 5; //pixels
            var lineColor = config.lineColor || 'black'; //pixels


            var center = {x:height/2, y:width/2};
            var radius = width/2 - lineWidth;
            var angle = 0;


            var startAnimation = function(){
                console.log('started animation!');
                slices = prepSlices(scope.$eval(attrs.model));
                console.log('started animation!');
                var update = function(diff){
                    percentComplete += diff/duration;
                    if (percentComplete >= 1){
                        percentComplete = 1;
                        return true;
                    }
                }

                var draw = function(context){
                    context.clearRect(0, 0, width, height);
                    var angleSum = angle; // 0 for now
                    for(var i=0; i<slices.length; i++){
                        context.save();
                        context.strokeStyle = lineColor;
                        context.lineWidth = lineWidth;
                        context.moveTo(center.x, center.y);
                        context.beginPath();
                        var startingAngle = angleSum;
                        var endingAngle = angleSum += (percentComplete*2*Math.PI) * (slices[i].$pieChartPercentage/100);
                        context.fillStyle = slices[i].color;
                        context.arc(center.x, center.y, radius, startingAngle, endingAngle, false);
                        context.stroke();
                        context.lineTo(center.x, center.y);
                        context.fill();

                        context.restore();
                    }
                };

                var then = new Date();

                var done = false;
                var interval = setInterval(function(){
                    var now = new Date();
                    if(update(now - then)){
                        clearInterval(interval);
                        draw(context); //one last time
                        done = true;
                    }
                    if(!done){
                        draw(context);
                    }
                    then = now;
                }, 0);
            }

            if(slices && slices.length > 0){
                startAnimation();
            }

            scope.$watch(attrs.model, function(newVal, oldVal, scope){
                console.log('change happened on: $scope.' + attrs.model);
                console.log('   from: ', oldVal);
                console.log('   to: ', newVal);
                if(newVal && oldVal !== newVal && newVal.length){
                    console.log('   kicking off new animation!');
                    startAnimation();
                }
            });

        }
    };
});
