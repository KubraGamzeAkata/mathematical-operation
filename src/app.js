var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/birinci-sinif/anasayfa");

    $stateProvider
        .state('birinci-sinif', {
            url: "/birinci-sinif",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('birinci-sinif.anasayfa', {
            url: "/anasayfa",
            templateUrl: "partials/birinci-sinif.html"
        })
        .state('birinci-sinif.toplama', {
            url: "/toplama",
            templateUrl: "partials/birinci-sinif-toplama.html",
            controller: "ScAddCtrl"
        })
        .state('birinci-sinif.toplama-sheet', {
            url: "/toplama-sheet?digits&first&second&third&direction&prop&kind",
            templateUrl: "partials/birinci-sinif-toplama-sheet.html",
            controller: 'FcSheet'
        })
        .state('birinci-sinif.cikarma', {
            url: "/cikarma",
            templateUrl: "partials/birinci-sinif-cikarma.html",
            controller: 'FcSubCtrl'
        })
        .state('birinci-sinif.cikarma-sheet', {
            url: "/cikarma-sheet?first&second&direction",
            templateUrl: "partials/birinci-sinif-cikarma-sheet.html",
            controller: 'FcSubSheet'
        })
        .state('ikinci-sinif', {
            url: "/ikinci-sinif",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('ikinci-sinif.anasayfa', {
            url: "/anasayfa",
            templateUrl: "partials/ikinci-sinif.html"
        })
        .state('ikinci-sinif.toplama', {
            url: "/toplama",
            templateUrl: "partials/ikinci-sinif-toplama.html",
            controller: "ScAddCtrl"
        })
        .state('ikinci-sinif.toplama-sheet', {
            url: "/toplama-sheet?digits&first&second&third&direction&prop&kind",
            templateUrl: "partials/ikinci-sinif-toplama-sheet.html",
            controller: 'ScAddSheet'
        })
        .state('ikinci-sinif.cikarma', {
            url: "/cikarma",
            templateUrl: "partials/ikinci-sinif-cikarma.html",
            controller: "ScSubCtrl"
        })
        .state('ikinci-sinif.cikarma-sheet', {
            url: "/cikarma-sheet?first&second&direction&prop&kind",
            templateUrl: "partials/ikinci-sinif-cikarma-sheet.html",
            controller: 'ScSubSheet'
        })
        .state('ikinci-sinif.carpma', {
            url: "/carpma",
            templateUrl: "partials/ikinci-sinif-carpma.html",
            controller: "ScMultiCtrl"
        })
        .state('ikinci-sinif.carpma-sheet', {
            url: "/carpma-sheet?direction",
            templateUrl: "partials/ikinci-sinif-carpma-sheet.html",
            controller: "ScMultiSheet"
        })
        .state('ikinci-sinif.bolme', {
            url: "/bolme",
            templateUrl: "partials/ikinci-sinif-bolme.html",
            controller: "ScDivCtrl"
        })
        .state('ikinci-sinif.bolme-sheet', {
            url: "/bolme-sheet?direction",
            templateUrl: "partials/ikinci-sinif-bolme-sheet.html",
            controller: "ScDivSheet"
        })
        .state('ikinci-sinif.zihinden-toplama', {
            url: "/zihinden-toplama",
            templateUrl: "partials/ikinci-sinif-zihinden-toplama.html",
            controller: "ScMindAddCtrl"
        })
        .state('ikinci-sinif.zihinden-toplama-sheet', {
            url: "/zihinden-toplama-sheet?prop&direction",
            templateUrl: "partials/ikinci-sinif-zihinden-toplama-sheet.html",
            controller: "ScMindAddSheet"
        })
        .state('ikinci-sinif.zihinden-cikarma', {
            url: "/zihinden-cikarma",
            templateUrl: "partials/ikinci-sinif-zihinden-cikarma.html",
            controller: "ScMindSubCtrl"
        })
        .state('ikinci-sinif.zihinden-cikarma-sheet', {
            url: "/zihinden-cikarma-sheet?direction",
            templateUrl: "partials/ikinci-sinif-zihinden-cikarma-sheet.html",
            controller: "ScMindSubSheet"
        })
        .state('ucuncu-sinif', {
            url: "/ucuncu-sinif",
            abstract: true,
            template: "<div ui-view></div>",
        })
        .state('ucuncu-sinif.anasayfa', {
            url: "/anasayfa",
            templateUrl: "partials/ucuncu-sinif.html"
        })
        .state('ucuncu-sinif.toplama', {
            url: "/toplama",
            templateUrl: "partials/ucuncu-sinif-toplama.html",
            controller: "TcAddCtrl"
        })
        .state('ucuncu-sinif.toplama-sheet', {
          url: "/toplama-sheet?digits&first&second&third&fourth&direction&prop&kind",
          templateUrl: "partials/ucuncu-sinif-toplama-sheet.html",
          controller: 'TcAddSheet'
        })
        .state('ucuncu-sinif.cikarma', {
            url: "/cikarma",
            templateUrl: "partials/ucuncu-sinif-cikarma.html",
            controller: "TcSubCtrl"
        })
        .state('ucuncu-sinif.cikarma-sheet', {
            url: "/cikarma-sheet?first&second&direction&prop&kind",
            templateUrl: "partials/ucuncu-sinif-cikarma-sheet.html",
            controller: 'TcSubSheet'
        })
        .state('ucuncu-sinif.carpma', {
            url: "/carpma",
            templateUrl: "partials/ucuncu-sinif-carpma.html",
            controller: "TcMultiCtrl"
        })
        .state('ucuncu-sinif.carpma-sheet', {
            url: "/carpma-sheet?first&second",
            templateUrl: "partials/ucuncu-sinif-carpma-sheet.html",
            controller: "TcMultiSheet"
        })
        .state('ucuncu-sinif.bolme', {
            url: "/bolme",
            templateUrl: "partials/ucuncu-sinif-bolme.html",
            controller: "TcDivCtrl"
        })
        .state('ucuncu-sinif.bolme-sheet', {
            url: "/bolme-sheet?prop&kind",
            templateUrl: "partials/ucuncu-sinif-bolme-sheet.html",
            controller: "TcDivSheet"
        })
        .state('ucuncu-sinif.zihinden-toplama', {
            url: "/zihinden-toplama",
            templateUrl: "partials/ucuncu-sinif-zihinden-toplama.html",
            controller: "TcMindAddCtrl"
        })
        .state('ucuncu-sinif.zihinden-toplama-sheet', {
            url: "/zihinden-toplama-sheet?prop&direction",
            templateUrl: "partials/ikinci-sinif-zihinden-toplama-sheet.html",
            controller: "TcMindAddSheet"
        })
        .state('ucuncu-sinif.zihinden-cikarma', {
            url: "/zihinden-cikarma",
            templateUrl: "partials/ucuncu-sinif-zihinden-cikarma.html",
            controller: "TcMindSubCtrl"
        })
        .state('ucuncu-sinif.zihinden-cikarma-sheet', {
            url: "/zihinden-cikarma-sheet?prop&direction",
            templateUrl: "partials/ikinci-sinif-zihinden-cikarma-sheet.html",
            controller: "TcMindSubSheet"
        })
        .state('ucuncu-sinif.zihinden-carpma', {
            url: "/zihinden-carpma",
            templateUrl: "partials/ucuncu-sinif-zihinden-carpma.html",
            controller: "TcMindMultiCtrl"
        })
        .state('ucuncu-sinif.zihinden-carpma-sheet', {
            url: "/zihinden-carpma-sheet?prop&direction",
            templateUrl: "partials/ucuncu-sinif-zihinden-carpma-sheet.html",
            controller: "TcMindMultiSheet"
        })
        .state('ucuncu-sinif.kisayol-bolme', {
            url: "/kisayol-bolme",
            templateUrl: "partials/ucuncu-sinif-kisayol-bolme.html"
        })
        .state('ucuncu-sinif.kisayol-bolme-sheet', {
            url: "/kisayol-bolme-sheet",
            templateUrl: "partials/kisayol-bolme-sheet.html",
            controller: "TcShortDivSheet"
        })
        .state('dorduncu-sinif', {
            url: "/dorduncu-sinif",
            abstract: true,
            template: "<div ui-view></div>",
        })
        .state('dorduncu-sinif.anasayfa', {
            url: "/anasayfa",
            templateUrl: "partials/dorduncu-sinif.html"
        })
        .state('dorduncu-sinif.toplama', {
            url: "/toplama",
            templateUrl: "partials/dorduncu-sinif-toplama.html",
            controller: "FocAddCtrl"
        })
        .state('dorduncu-sinif.toplama-sheet', {
          url: "toplama-sheet?digits&first&second&third&fourth&direction&prop&kind",
          templateUrl: "partials/dorduncu-sinif-toplama-sheet.html",
          controller: "FocAddSheet"
        })
        .state('dorduncu-sinif.cikarma', {
            url: "/cikarma",
            templateUrl: "partials/dorduncu-sinif-cikarma.html",
            controller: "FocSubCtrl"
        })
        .state('dorduncu-sinif.cikarma-sheet', {
            url: "/cikarma-sheet?first&second&direction&prop&kind",
            templateUrl: "partials/dorduncu-sinif-cikarma-sheet.html",
            controller: 'FocSubSheet'
        })
        .state('dorduncu-sinif.carpma', {
            url: "/carpma",
            templateUrl: "partials/dorduncu-sinif-carpma.html"
        })
        .state('dorduncu-sinif.carpma-sheet', {
            url: "/carpma-sheet?first&second",
            templateUrl: "partials/ucuncu-sinif-carpma-sheet.html",
            controller: "FocMultiSheet"
        })
        .state('dorduncu-sinif.bolme', {
            url: "/bolme",
            templateUrl: "partials/dorduncu-sinif-bolme.html",
            controller: 'FocDivCtrl'
        })
        .state('dorduncu-sinif.bolme-sheet', {
            url: "/bolme-sheet?first&second&prop&kind",
            templateUrl: "partials/dorduncu-sinif-bolme-sheet.html",
            controller: 'FocDivSheet'
        })
        .state('dorduncu-sinif.zihinden-toplama', {
            url: "/zihinden-toplama",
            templateUrl: "partials/dorduncu-sinif-zihinden-toplama.html",
            controller: "FocMindAddCtrl"
        })
        .state('dorduncu-sinif.zihinden-toplama-sheet', {
            url: "/zihinden-toplama-sheet?prop&direction",
            templateUrl: "partials/ikinci-sinif-zihinden-toplama-sheet.html",
            controller: "FocMindAddSheet"
        })
        .state('dorduncu-sinif.zihinden-cikarma', {
            url: "/zihinden-cikarma",
            templateUrl: "partials/dorduncu-sinif-zihinden-cikarma.html",
            controller: "FocMindSubCtrl"
        })
        .state('dorduncu-sinif.zihinden-cikarma-sheet', {
            url: "/zihinden-cikarma-sheet?prop&direction",
            templateUrl: "partials/ikinci-sinif-zihinden-cikarma-sheet.html",
            controller: "FocMindSubSheet"
        })
        .state('dorduncu-sinif.zihinden-carpma', {
            url: "/zihinden-carpma",
            templateUrl: "partials/dorduncu-sinif-zihinden-carpma.html",
            controller: "FocMindMultiCtrl"
        })
        .state('dorduncu-sinif.zihinden-carpma-sheet', {
            url: "/zihinden-carpma-sheet?prop&direction",
            templateUrl: "partials/ucuncu-sinif-zihinden-carpma-sheet.html",
            controller: "FocMindMultiSheet"
        })
        .state('dorduncu-sinif.kisayol-carpma', {
            url: "/kisayol-carpma",
            templateUrl: "partials/dorduncu-sinif-kisayol-carpma.html",
            controller: "FocShortMultiCtrl"
        })
        .state('dorduncu-sinif.kisayol-carpma-sheet', {
            url: "/kisayol-carpma-sheet?prop&direction",
            templateUrl: "partials/kisayol-carpma-sheet.html",
            controller: "FocShortMultiSheet"
        })
        .state('dorduncu-sinif.kisayol-bolme', {
            url: "/kisayol-bolme",
            templateUrl: "partials/dorduncu-sinif-kisayol-bolme.html"
        })
        .state('dorduncu-sinif.kisayol-bolme-sheet', {
            url: "/kisayol-bolme-sheet",
            templateUrl: "partials/kisayol-bolme-sheet.html",
            controller: "FocShortDivSheet"
        })
});
