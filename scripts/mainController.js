/**
 * Created by jwindmolders on 23/01/2015.
 */

NPG.controller('mainController',['$rootScope','$scope','$interval',
    function($rootScope,$scope,$interval) {

        var MC = $scope;
        var RC = $rootScope;

        MC.servers = [
            {game: "Arma 3" , mod: "Epoch", name : "NPG Overpoch Chernarus 1", ip: "37.187.135.190" , port : "5102" , namesmall:"A3 Epoch"} ,
            {game: "Arma 2" ,mod: "DayZ", name : "NPG DayZ PVP 1", ip: "37.187.77.74" , port : "2342", namesmall:"DayZ PVP1"} ,
            {game: "Arma 2" ,mod: "DayZ", name : "NPG DayZ PVP 2", ip: "37.187.77.74" , port : "2452", namesmall:"DayZ PVP2"} ,
            {game: "Arma 2" ,mod: "DayZ", name : "NPG DayZ PVE 1", ip: "37.187.77.74" , port : "2302", namesmall:"DayZ PVE1"} ,
            {game: "Arma 2" ,mod: "DayZ Overwatch", name : "NPG Overwatch 1", ip: "37.187.135.190" , port : "2312" , namesmall:"Overwatch" }
        ];

        MC.ssi = 0;

        MC.openLink = openExternalURL;
        MC.changeSSI = changeSSI;

        MC.admins2=[
            {name: "Karl"},
            {name: "Santa"},
            {name: "Soul"}
        ];
        MC.admins3=[
            {name: "Steamz"},
            {name: "Lofty"},
            {name: "Zupa"}

        ];

        function changeSSI(id) {
            MC.ssi = id;
        };


        function openExternalURL(url) {
            window.open(url, '_blank', 'location=yes');
        };


}]);

