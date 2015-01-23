/**
 * Created by jwindmolders on 23/01/2015.
 */

NPG.controller('mainController',['$rootScope','$scope','$interval',
    function($rootScope,$scope,$interval) {

       var MC = $scope;
       var RC = $rootScope;

        MC.openLink = openExternalURL;




        function openExternalURL(url) {
            window.open(url, '_blank', 'location=yes');
        };


}]);

