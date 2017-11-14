/*==========================================================
    Author      : UDAYSINGH KUSHWAH
    Date Created: 11 Dec 2017
    Description : Controller to handle Login module
    Change Log
    s.no      date    author     description     


 ===========================================================*/

var login = angular.module('login', ['ui.router', 'ngResource', 'ngAnimate']);


login.config(["$stateProvider", function ($stateProvider) {

    //login page state
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'app/modules/login/index.html',
        controller: 'loginCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Login'
        }
    });

}]);

