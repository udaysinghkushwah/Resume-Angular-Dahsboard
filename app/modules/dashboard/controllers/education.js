/*==========================================================
    Author      : UDAYSINGH KUSHWAH
    Date Created: 11 Dec 2017
    Description : Controller to handle Education page
    Change Log
    s.no      date    author     description     


 ===========================================================*/

dashboard.controller("EducationController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;
    vm.meMarks = false;
    vm.mscMarks = false;
    vm.hscMarks = false;
    vm.sslcMarks = false;
    vm.education = [
        {
            course: "MCA",
            year:"2010 - 2013",
            title: "Masters of Computer Application",
            institution: "Madhav Institute of Technology & Science Gwalior",
            theme: "info",
            icon: "graduation‐cap ",
            mark: 8.0,
            max: 10
        },
        {
            course: "BCA",
            year: "2007 - 2013",
            title: "Bachelor of Computer Application",
            institution: "Gwalior Institute of Technology  & Science, Gwalior",
            board: "Makhanlal Chaturvedi Rashtriya Patrakarita Avam Sanchar Vishwavidyalaya,Bhopal",
            theme: "warning",
            icon: "graduation‐cap ",
            mark: 67,
            max: 100
        },
        {
            course: "HSC",
            year: "2006 - 2007",
            title: "+2",
            institution: "Government boys excellence Higher secondary school Viajypur Sheopur M.P.",
            board: "Stateboard",
            theme: "danger",
            icon: "pencil",
            mark: 52.7,
            max: 100
        },
        {
            course: "HSC",
            year: "2005 - 2006",
            title: "10th",
            institution: "Government boys excellence Higher secondary school Viajypur Sheopur M.P.",
            board: "Stateboard",
            theme: "success",
            icon: "pencil",
            mark: 50.2,
            max: 100
        }

    ];

    vm.lineChartOptions = { scaleShowGridLines: !0, scaleGridLineColor: "rgba(0,0,0,.05)", scaleGridLineWidth: 1, scaleShowHorizontalLines: !0, scaleShowVerticalLines: !0, bezierCurve: !0, bezierCurveTension: .4, pointDot: !0, pointDotRadius: 4, pointDotStrokeWidth: 1, pointHitDetectionRadius: 20, datasetStroke: !0, datasetStrokeWidth: 2, datasetFill: !1, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>' };

    vm.pieChartOptions = { segmentShowStroke: !0, segmentStrokeColor: "#fff", segmentStrokeWidth: 2, percentageInnerCutout: 50, animationSteps: 100, animationEasing: "easeOutBounce", animateRotate: !0, animateScale: !1, responsive: !0, maintainAspectRatio: !0, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>' };

    vm.barChartOptions = { scaleBeginAtZero: !0, scaleShowGridLines: !0, scaleGridLineColor: "rgba(0,0,0,.05)", scaleGridLineWidth: 1, scaleShowHorizontalLines: !0, scaleShowVerticalLines: !0, barShowStroke: !0, barStrokeWidth: 2, barValueSpacing: 5, barDatasetSpacing: 1, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>', responsive: !0, maintainAspectRatio: !0 };

    vm.areaChartOptions = { showScale: !0, scaleShowGridLines: !1, scaleGridLineColor: "rgba(0,0,0,.05)", scaleGridLineWidth: 1, scaleShowHorizontalLines: !0, scaleShowVerticalLines: !0, bezierCurve: !0, bezierCurveTension: .3, pointDot: !1, pointDotRadius: 4, pointDotStrokeWidth: 1, pointHitDetectionRadius: 20, datasetStroke: !0, datasetStrokeWidth: 2, datasetFill: !0, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>', maintainAspectRatio: !0, responsive: !0 };

    vm.polarChartOptions = { scaleShowLabelBackdrop: !0, scaleBackdropColor: "rgba(255,255,255,0.75)", scaleBeginAtZero: !0, scaleBackdropPaddingY: 2, scaleBackdropPaddingX: 2, scaleShowLine: !0, segmentShowStroke: !0, segmentStrokeColor: "#fff", segmentStrokeWidth: 2, animationSteps: 100, animationEasing: "easeOutBounce", animateRotate: !0, animateScale: !1, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>' };

    vm.radarChartOptions = { scaleShowLine: !0, angleShowLineOut: !0, scaleShowLabels: !1, scaleBeginAtZero: !0, angleLineColor: "rgba(0,0,0,.1)", angleLineWidth: 1, pointLabelFontFamily: "'Arial'", pointLabelFontStyle: "normal", pointLabelFontSize: 10, pointLabelFontColor: "#666", pointDot: !0, pointDotRadius: 3, pointDotStrokeWidth: 1, pointHitDetectionRadius: 20, datasetStroke: !0, datasetStrokeWidth: 2, datasetFill: !0, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>' };




    var me = document.getElementById("meChart").getContext("2d");
    var msc = document.getElementById("mscChart").getContext("2d");
    var hsc = document.getElementById("hscChart").getContext("2d");
    var sslc = document.getElementById("sslcChart").getContext("2d");

    vm.meData = {
        labels: ["Sem 1", "Sem 2", "Sem 3", "Sem 4","Sem 5", "Sem 6"],
        datasets: [
            {
                label: "My ME Semester Marks",
                fillColor: "rgba(0,192,239,0.2)",
                strokeColor: "rgba(0,192,239,1)",
                pointColor: "rgba(0,151,188,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [8.2,7.6,7.6,8.2,8.4,8.8]
            }
        ]
    };

    vm.mscData = {
        labels: ["Sem 1","Sem 2", "Sem 3", "Sem 4","Sem 5","Sem 6"],
        datasets: [
            {
                label: "My MSC Semester Marks",
                fillColor: "rgba(243,156,18,0.2)",
                strokeColor: "rgba(243,156,18,1)",
                pointColor: "rgba(200,127,10,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [7.7, 7.8, 8.5, 8.1,8.1,10.0]
            }
        ]
    };

    vm.hscData = {
        labels: ["English", "Maths", "Physics", "Chemistry", "Hindi"],
        datasets: [
            {
                label: "My HSC Marks",
                fillColor: "rgba(0,166,90,0.2)",
                strokeColor: "rgba(0,166,90,1)",
                pointColor: "rgba(0,115,62,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [27,64,57,27,54]
            }
        ]
    };

    vm.sslcData = [
            {
                value: 54,
                color: "#F7464A",
                highlight: "#FF5A5E",
                label: "Hindi"
            },
            {
                value: 27,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "English"
            },
            {
                value: 60,
                color: "#FDB45C",
                highlight: "#FFC870",
                label: "Maths"
            },
            {
                value: 56,
                color: "#949FB1",
                highlight: "#A8B3C5",
                label: "Science"
            },
            {
                value: 50,
                color: "#4D5360",
                highlight: "#616774",
                label: "Social Science"
            },
            {
                value: 50,
                color: "#4D5360",
                highlight: "#616774",
                label: "Sanskrit"
            }
    ];




        var meChart = new Chart(me).Line(vm.meData, vm.lineChartOptions);
        var mscChart = new Chart(msc).Bar(vm.mscData, vm.barChartOptions);
        var hscChart = new Chart(hsc).Radar(vm.hscData, vm.radarChartOptions);
        var sslcChart = new Chart(sslc).PolarArea(vm.sslcData, vm.polarChartOptions);

        //ME Chart
        vm.meAreaChart = function () {
            var meChart = new Chart(me).Line(vm.meData, vm.areaChartOptions);
        };

        vm.meLineChart = function () {
            var meChart = new Chart(me).Line(vm.meData, vm.lineChartOptions);
        };

        vm.meBarChart = function () {
            var meChart = new Chart(me).Bar(vm.meData, vm.barChartOptions);
        };

        //MSC Chart
        vm.mscAreaChart = function () {
            var mscChart = new Chart(msc).Line(vm.mscData, vm.areaChartOptions);
        };

        vm.mscLineChart = function () {
            var mscChart = new Chart(msc).Line(vm.mscData, vm.lineChartOptions);
        };

        vm.mscBarChart = function () {
            var mscChart = new Chart(msc).Bar(vm.mscData, vm.barChartOptions);
        };

        //HSC Chart
        vm.hscRadarChart = function () {
            var hscChart = new Chart(hsc).Radar(vm.hscData, vm.radarChartOptions);
        };

        vm.hscBarChart = function () {
            var hscChart = new Chart(hsc).Bar(vm.hscData, vm.barChartOptions);
        };

        //SSLC Chart
        vm.sslcPieChart = function () {
            var sslcChart = new Chart(sslc).PolarArea(vm.sslcData, vm.polarChartOptions);
        };

        vm.sslcDoughNutChart = function () {
            var sslcChart = new Chart(sslc).Pie(vm.sslcData, vm.polarChartOptions);
        };

        vm.sslcPolarChart = function () {
            var sslcChart = new Chart(sslc).Doughnut(vm.sslcData, vm.pieChartOptions);
        };

}]);

