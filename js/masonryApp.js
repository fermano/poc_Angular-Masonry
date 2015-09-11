angular.module('masonryApp', ['wu.masonry']).
    controller('DemoCtrl', function ($scope) {

       function genBrick() {
            var height = ~~(Math.random() * 500) + 100;
            var id = ~~(Math.random() * 10000);
            return {
                imageSrc: 'img/ic-ok.png',
                name: "Barcelona"
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

        $scope.siteScopeDevices = [
            genSiteScopeDevice("VALENCIA01:CPU:OK"),
            genSiteScopeDevice("VALENCIA01:PING:WARNING"),
            genSiteScopeDevice("VALENCIA01:JBOSS:OK"),
            genSiteScopeDevice("BARCELONA01:CPU:OK"),
            genSiteScopeDevice("BARCELONA01:PING:WARNING"),
            genSiteScopeDevice("BARCELONA01:TOMCAT:OK"),
            genSiteScopeDevice("MANCHESTER01:CPU:BAD"),
            genSiteScopeDevice("MANCHESTER01:PING:BAD"),
            genSiteScopeDevice("MANCHESTER01:TOMCAT:WARNING")
        ];
        //TODO iterar

        function genSiteScopeDevice(siteScopeLineLog) {
            var device = siteScopeLineLog.split(":");
            var deviceName = device[0];
            var deviceType = device[1];

            //TODO Melhorar este tratamento e quebrar em outra função
            var deviceStatus = "img/";
            if (device[2] == "OK") deviceStatus += "ic-ok.png";
            else if (device[2] == "WARNING") deviceStatus += "ic-warning.png";
            else deviceStatus += "ic-error.png";
            
            return {
                name: deviceName,
                imageSrc: deviceStatus,                
                type: deviceType
            };
        };
    });

