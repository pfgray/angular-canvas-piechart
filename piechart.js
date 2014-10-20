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


            //variables
            var percentComplete = 0.0;
            var duration = config.duration || 500; //milliseconds
            var lineWidth = config.lineWidth || 5; //milliseconds


            var center = {x:height/2, y:width/2};
            var radius = width/2 - lineWidth;
            var angle = 0;


            var startAnimation = function(){
                slices = scope.$eval(attrs.model);
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
                        context.strokeStyle = 'black';
                        context.lineWidth = config.lineWidth;
                        context.moveTo(center.x, center.y);
                        context.beginPath();
                        var startingAngle = angleSum;
                        var endingAngle = angleSum += (percentComplete*2*Math.PI) * (slices[i].percentage/100);
                        context.fillStyle = slices[i].color;
                        context.arc(center.x, center.y, radius, startingAngle, endingAngle, false);
                        context.stroke();
                        context.lineTo(center.x, center.y);
                        context.fill();
                        //angleSum += (percentComplete*2*Math.PI) * (slices[i].percentage/100);

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
                if(newVal && newVal.length){
                    startAnimation();
                    console.log('   kicking off new animation!');
                }
            });

        }
    };
});
