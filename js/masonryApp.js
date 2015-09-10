angular.module('masonryApp', ['wu.masonry']).
    controller('DemoCtrl', function ($scope) {

        var leitorDeCSV = new FileReader()

        window.onload = function init() {
            leitorDeCSV.onload = leCSV;
        }

        function genBrick() {
            var height = ~~(Math.random() * 500) + 100;
            var id = ~~(Math.random() * 10000);
            return {
                src: 'img/ic-ok.png'
            };
        };

        $scope.bricks = [
            genBrick(),
            genBrick(),
            genBrick(),
            genBrick(),
            genBrick()
        ];


        $scope.pegarArquivo = function pegarArquivo(arquivoSelecionado) {
            var imgLoca = document.getElementById('imgLocal');
            var file = files[0];
            var img = document.createElement("img");
                img.file = file;
                imgLocal.appendChild(img)
         
            var reader = new FileReader();
                reader.onload = (function(aImg) {return function(e) {aImg.src = e.target.result;};})(img);
                reader.readAsDataURL(file);
        };

        $scope.pegaCSV = function pegaCSV(inputFile) {
            var file = inputFile.files[0];
            leitorDeCSV.readAsText(file);
        };


        $scope.leCSV = function leCSV() {
            var fileArr = evt.target.result.split('\n');
            var strDiv = '<table>';

            for (var i=0; i<fileArr.length; i++) {
                strDiv += '<tr>';
                var fileLine = fileArr[i].split(',');
                    for (var j=0; j<fileLine.length; j++) {
                        strDiv += '<td>'+fileLine[j].trim()+'</td>';
                    }
                strDiv += '</tr>';
            }
             
            strDiv += '</table>';
            var CSVsaida = document.getElementById('CSVsaida');
            CSVsaida.innerHTML = strDiv;
        };

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

