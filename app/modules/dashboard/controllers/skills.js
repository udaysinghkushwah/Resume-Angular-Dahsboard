/*==========================================================
    Author      : UDAYSINGH KUSHWAH
    Date Created: 11 Dec 2017
    Description : Controller to handle Skills page
    Change Log
    s.no      date    author     description     


 ===========================================================*/

dashboard.controller("SkillController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;

    vm.skills = {};

    //development stack
    vm.skills.development = [
        {
            Software: "Mongo DB",
            Percentage: "80",
            theme: "yellow",
            image: "mongodb"
        },
        {
            Software: "Express JS",
            Percentage: "75",
            theme: "aqua",
            image: "express"
        },
        {
            Software: "Angular JS",
            Percentage: "85",
            theme: "green",
            image: "angular"
        },
        {
            Software: "Node JS",
            Percentage: "83",
            theme: "purple",
            image: "node"
        },
        {
            Software: "Javascript",
            Percentage: "80",
            theme: "maroon",
            image: "javascript"
        },
        {
            Software: "Type Script",
            Percentage: "70",
            theme: "teal",
            image: "typescript"
        },
        {
            Software: "jQuery & AJAX",
            Percentage: "80",
            theme: "yellow",
            image: "jquery"
        }
    ];

    //Design Stack
    vm.skills.design = [
        {
            Software: "HTML 5",
            Percentage: "90",
            theme: "yellow",
            image: "html5"
        },
        {
            Software: "CSS 3",
            Percentage: "83",
            theme: "aqua",
            image: "css3"
        },
        {
            Software: "SAAS",
            Percentage: "72",
            theme: "green",
            image: "saas-css"
        },
        {
            Software: "Bootstrap",
            Percentage: "85",
            theme: "purple",
            image: "bootstrap"
        }
    ];

    //Other Stack
    vm.skills.others = [
       
        {
            Software: "My SQL",
            Percentage: "70",
            theme: "purple",
            image: "sql"
        }
    ];
}]);

