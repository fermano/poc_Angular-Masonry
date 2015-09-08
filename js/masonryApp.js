angular.module('masonryApp', ['wu.masonry']).
                controller('DemoCtrl', function ($scope) {
                    function genBrick() {
                        var height = ~~(Math.random() * 500) + 100;
                        var id = ~~(Math.random() * 10000);
                        return {
                            src: 'http://lorempixel.com/g/280/' + height + '/?' + id
                        };
                    };

                    $scope.bricks = [
                        genBrick(),
                        genBrick(),
                        genBrick(),
                        genBrick(),
                        genBrick()
                    ];

                    $scope.add = function add() {
                        $scope.bricks.push(genBrick());
                    };

                    $scope.remove = function remove() {
                        $scope.bricks.splice(
                            ~~(Math.random() * $scope.bricks.length),
                            1
                        )
                    };
                });