app.controller('MainCtrl', function($scope, $state) {
    $scope.isActive = function(state) {
        return $state.includes(state);
    }
});

app.controller('FcAddCtrl', function($scope) {
    $scope.digitsNumber = [
        { name: "2", value: 2},
        { name: "3", value: 3}
    ];
    $scope.firstDigits = [
        { name: "1", value: 1},
        { name: "2", value: 2}
    ];
    $scope.secondDigits = [
        { name: "1", value: 1}
    ];
    $scope.thirdDigits = [
        { name: "1", value: 1}
    ];
    $scope.directions = [
        { name: 'Yan yana', value: 'horizontal'},
        { name: 'Alt alta', value: 'vertical'},
        { name: 'Karışık', value: 'assorted'}
    ];
    $scope.operationProp = [
        { name: 'Toplamı bulma', value: 'result'},
        { name: 'Verilmeyen toplananı bulma', value: 'element'}
    ];
    $scope.options = {
        digits: $scope.digitsNumber[0].value,
        first: $scope.firstDigits[0].value,
        second: $scope.secondDigits[0].value,
        third: $scope.thirdDigits[0].value,
        direction: $scope.directions[0].value,
        prop: $scope.operationProp[0].value
    };
});

app.controller('FcSheet', function($scope, $stateParams, AdditionFactory, BuildDirectionsFactory) {
    $scope.showAnswers = [
        { name: "Hayır", value: false},
        { name: "Evet", value: true}
    ];
    $scope.options = {
        show: $scope.showAnswers[0].value,
        params: $stateParams
    };
    $scope.back = 'birinci-sinif.toplama';
    $scope.border = '#C8211C'
    if($stateParams.prop == 'result') {
        $scope.title = "TOPLAMA İŞLEMİ/TOPLAMI BULMA";
    } else {
        $scope.title = "TOPLAMA İŞLEMİ/VERİLMEYEN TOPLANANI BULMA";
    }
    $scope.alignments = [];
    $scope.print = function () {
        window.print();
    };
    $scope.generate = function () {
        var horizontal = 24;
        var vertical = $stateParams.digits == 3 ? 20 : 25;
        var assorted = 24;
        var opNumber = $stateParams.direction == 'horizontal' ? horizontal : ($stateParams.direction == 'vertical' ? vertical : assorted);
        $scope.alignments = BuildDirectionsFactory($stateParams.direction, opNumber);
        $scope.ops = AdditionFactory.generateSecond($stateParams.digits, $stateParams.prop, $stateParams.kind, $stateParams.first, $stateParams.second, $stateParams.third, opNumber);
    };
    $scope.generate();
});

app.controller('FcSubCtrl', function ($scope) {
    $scope.directions = [
        { name: 'Yan yana', value: 'horizontal'},
        { name: 'Alt alta', value: 'vertical'},
        { name: 'Karışık', value: 'assorted'}
    ];
    $scope.options = {
        first: "1",
        second: "1",
        direction: $scope.directions[0].value
    };
    $scope.control = function () {
        if ($scope.options.first == '1') {
            $scope.options.second = '1';
        }
    };
});

app.controller('FcSubSheet', function ($scope, $stateParams, SubFactory, BuildDirectionsFactory) {
    $scope.showAnswers = [
        { name: "Hayır", value: false},
        { name: "Evet", value: true}
    ];
    $scope.options = {
        show: $scope.showAnswers[0].value,
        params: $stateParams
    };
    $scope.back = 'birinci-sinif.cikarma';
    $scope.border = '#C8211C'
    $scope.title = "ÇIKARMA İŞLEMİ";
    $scope.alignments = [];
    $scope.print = function () {
        window.print();
    };
    $scope.generate = function () {
        var horizontal = 24;
        var vertical = 25;
        var assorted = 24;
        var opNumber = $stateParams.direction == 'horizontal' ? horizontal : ($stateParams.direction == 'vertical' ? vertical : assorted);
        $scope.alignments = BuildDirectionsFactory($stateParams.direction, opNumber);
        $scope.ops = SubFactory.generate($stateParams.first, $stateParams.second, opNumber);
    };
    $scope.generate();
});

app.controller('ScAddCtrl', function($scope) {
    $scope.digitsNumber = [
        { name: "2", value: 2},
        { name: "3", value: 3}
    ];
    $scope.firstDigits = [
        { name: "1", value: 1},
        { name: "2", value: 2}
    ];
    $scope.secondDigits = [
        { name: "1", value: 1},
        { name: "2", value: 2}
    ];
    $scope.thirdDigits = [
        { name: "1", value: 1},
        { name: "2", value: 2}
    ];
    $scope.directions = [
        { name: 'Yan yana', value: 'horizontal'},
        { name: 'Alt alta', value: 'vertical'},
        { name: 'Karışık', value: 'assorted'}
    ];
    $scope.operationProp = [
        { name: 'Toplamı bulma', value: 'result'},
        { name: 'Verilmeyen toplananı bulma', value: 'element'}
    ];
    $scope.operationKind = [
        { name: 'Eldeli', value: 1 },
        { name: 'Eldesiz', value: 2 },
        { name: 'Karışık', value: 3 },
    ];
    $scope.options = {
        digits: $scope.digitsNumber[0].value,
        first: $scope.firstDigits[0].value,
        second: $scope.secondDigits[0].value,
        third: $scope.thirdDigits[0].value,
        direction: $scope.directions[0].value,
        prop: $scope.operationProp[0].value,
        kind: $scope.operationKind[0].value
    }
});

app.controller('ScAddSheet', function ($scope, $stateParams, AdditionFactory, BuildDirectionsFactory) {
    $scope.showAnswers = [
        { name: "Hayır", value: false},
        { name: "Evet", value: true}
    ];
    $scope.options = {
        show: $scope.showAnswers[0].value,
        params: $stateParams
    };
    $scope.back = 'ikinci-sinif.toplama';
    $scope.border = '#C8211C'
    if($stateParams.prop == 'result') {
        $scope.title = "TOPLAMA İŞLEMİ/TOPLAMI BULMA";
    } else {
        $scope.title = "TOPLAMA İŞLEMİ/VERİLMEYEN TOPLANANI BULMA";
    }
    $scope.alignments = [];
    $scope.print = function () {
        window.print();
    };
    $scope.generate = function () {
        var horizontal = 24;
        var vertical = $stateParams.digits == 3 ? 20 : 25;
        var assorted = 24;
        var opNumber = $stateParams.direction == 'horizontal' ? horizontal : ($stateParams.direction == 'vertical' ? vertical : assorted);
        $scope.alignments = BuildDirectionsFactory($stateParams.direction, opNumber);
        $scope.ops = AdditionFactory.generateSecond($stateParams.digits, $stateParams.prop, $stateParams.kind, $stateParams.first, $stateParams.second, $stateParams.third, opNumber);
    };
    $scope.generate();
});

app.controller('ScSubCtrl', function ($scope) {
    $scope.directions = [
        { name: 'Yan yana', value: 'horizontal'},
        { name: 'Alt alta', value: 'vertical'},
        { name: 'Karışık', value: 'assorted'}
    ];
    $scope.props = [
        { name: 'Farkı bulma', value: 'diff'},
        { name: 'Eksileni bulma', value: 'dim'},
        { name: 'Çıkanı bulma', value: 'sub'},
        { name: 'Karışık (Eksileni veya çıkanı bulma)', value: 'assorted'}
    ];
    $scope.kinds = [
        { name: 'Onluk bozmadan', value: 1},
        { name: 'Onluk bozarak', value: 2},
        { name: 'Karışık', value: 3}
    ];
    $scope.options = {
        first: "1",
        second: "1",
        direction: $scope.directions[0].value,
        prop: $scope.props[0].value,
        kind: $scope.kinds[0].value
    };
    $scope.control = function () {
        if ($scope.options.first == '1') {
            $scope.options.second = '1';
        }
    };
});

app.controller('ScSubSheet', function ($scope, $stateParams, SubFactory, BuildDirectionsFactory) {
    $scope.showAnswers = [
        { name: "Hayır", value: false},
        { name: "Evet", value: true}
    ];
    $scope.options = {
        show: $scope.showAnswers[0].value,
        params: $stateParams
    };
    $scope.back = 'ikinci-sinif.cikarma';
    $scope.border = '#C8211C'
    if ($stateParams.prop == 'diff') {
        $scope.title = "ÇIKARMA İŞLEMİ/FARKI BULMA";
    } else if ($stateParams.prop == 'dim') {
        $scope.title = "ÇIKARMA İŞLEMİ/EKSİLENİ BULMA";
    } else if ($stateParams.prop == 'sub') {
        $scope.title = "ÇIKARMA İŞLEMİ/ÇIKANI BULMA";
    } else {
        $scope.title = "ÇIKARMA İŞLEMİ/EKSİLENİ VEYA ÇIKANI BULMA";
    }
    $scope.alignments = [];
    $scope.print = function () {
        window.print();
    };
    $scope.generate = function () {
        var horizontal = 24;
        var vertical = 25;
        var assorted = 24;
        var opNumber = $stateParams.direction == 'horizontal' ? horizontal : ($stateParams.direction == 'vertical' ? vertical : assorted);
        $scope.alignments = BuildDirectionsFactory($stateParams.direction, opNumber);
        $scope.ops = SubFactory.generateSecond($stateParams.prop, $stateParams.kind, $stateParams.first, $stateParams.second, opNumber);
    };
    $scope.generate();
});

app.controller('ScMultiCtrl', function($scope) {
    $scope.directions = [
        { name: 'Yan yana', value: 'horizontal'},
        { name: 'Alt alta', value: 'vertical'},
        { name: 'Karışık', value: 'assorted'}
    ];
    $scope.options = {
        direction: $scope.directions[0].value,
    };
});

app.controller('ScMultiSheet', function ($scope, $stateParams, MultiFactory, BuildDirectionsFactory) {
    $scope.showAnswers = [
        { name: "Hayır", value: false},
        { name: "Evet", value: true}
    ];
    $scope.options = {
        show: $scope.showAnswers[0].value,
        params: $stateParams
    };
    $scope.back = 'ikinci-sinif.carpma';
    $scope.border = '#C8211C'
    $scope.title = "ÇARPMA İŞLEMİ";
    $scope.alignments = [];
    $scope.print = function () {
        window.print();
    };
    $scope.generate = function () {
        var horizontal = 24;
        var vertical = 25;
        var assorted = 24;
        var opNumber = $stateParams.direction == 'horizontal' ? horizontal : ($stateParams.direction == 'vertical' ? vertical : assorted);
        $scope.alignments = BuildDirectionsFactory($stateParams.direction, opNumber);
        $scope.ops = MultiFactory.generateSecond(opNumber);
    };
    $scope.generate();
});

app.controller('ScDivCtrl', function ($scope) {
    $scope.directions = [
        { name: '÷', value: 'horizontal'},
        { name: 'Ⱶ', value: 'vertical'},
        { name: 'Karışık', value: 'assorted'}
    ];
    $scope.options = {
        direction: $scope.directions[0].value
    };
});

app.controller('ScDivSheet', function ($scope, $stateParams, BuildDirectionsFactory, DivisionFactory) {
    $scope.showAnswers = [
        { name: "Hayır", value: false},
        { name: "Evet", value: true}
    ];
    $scope.options = {
        show: $scope.showAnswers[0].value,
        params: $stateParams
    };
    $scope.back = 'ikinci-sinif.bolme';
    $scope.border = '#C8211C'
    $scope.title = "BÖLME İŞLEMİ";
    $scope.alignments = [];
    $scope.print = function () {
        window.print();
    };
    $scope.grid = 'sc-grid';
    $scope.generate = function () {
        var horizontal = 24;
        var vertical = 25;
        var assorted = 24;
        var opNumber = $stateParams.direction == 'horizontal' ? horizontal : ($stateParams.direction == 'vertical' ? vertical : assorted);
        $scope.alignments = BuildDirectionsFactory($stateParams.direction, opNumber);
        $scope.ops = DivisionFactory.generateSecond(opNumber);
    };
    $scope.generate();
});

app.controller('ScMindAddCtrl', function($scope) {
    $scope.props = [
        { name: "10 ve 10'un katı olan sayılarla zihinden toplama işlemi", value: 1},
        { name: "Toplamları 50'ye kadar olan iki sayıyı zihinden toplama işlemi", value: 2},
        { name: 'Karışık', value: 3}
    ];
    $scope.directions = [
        { name: 'Yan yana', value: 'horizontal'},
        { name: 'Alt alta', value: 'vertical'},
        { name: 'Karışık', value: 'assorted'}
    ];
    $scope.options = {
        prop: $scope.props[0].value,
        direction: $scope.directions[0].value
    };
});

app.controller('ScMindAddSheet', function($scope, $stateParams, MindAdditionFactory, BuildDirectionsFactory) {
    $scope.showAnswers = [
        { name: "Hayır", value: false},
        { name: "Evet", value: true}
    ];
    $scope.options = {
        show: $scope.showAnswers[0].value,
        params: $stateParams
    };
    $scope.back = 'ikinci-sinif.zihinden-toplama';
    $scope.border = '#C8211C'
    if ($stateParams.prop == 1) {
        $scope.title = "ZİHİNDEN TOPLAMA İŞLEMİ/10 VE 10’UN KATI DOĞAL SAYILARI ZİHİNDEN TOPLAMA";
    } else if ($stateParams.prop == 2) {
        $scope.title = "ZİHİNDEN TOPLAMA İŞLEMİ/TOPLAMLARI 50’Yİ GEÇMEYEN DOĞAL SAYILARI ZİHİNDEN TOPLAMA";
    } else {
        $scope.title = "ZİHİNDEN TOPLAMA İŞLEMİ/KARIŞIK";
    }
    $scope.alignments = [];
    $scope.print = function () {
        window.print();
    };
    $scope.grid = "sc-grid";
    $scope.generate = function () {
        var horizontal = 24;
        var vertical = 20;
        var assorted = 24;
        var opNumber = $stateParams.direction == 'horizontal' ? horizontal : ($stateParams.direction == 'vertical' ? vertical : assorted);
        $scope.alignments = BuildDirectionsFactory($stateParams.direction, opNumber);
        $scope.ops = MindAdditionFactory.generateSecond($stateParams.prop, opNumber);
    };
    $scope.generate();
});

app.controller('ScMindSubCtrl', function($scope) {
    $scope.directions = [
        { name: 'Yan yana', value: 'horizontal'},
        { name: 'Alt alta', value: 'vertical'},
        { name: 'Karışık', value: 'assorted'}
    ];
    $scope.options = {
        direction: $scope.directions[0].value
    };
});

app.controller('ScMindSubSheet', function($scope, $stateParams, MindSubFactory, BuildDirectionsFactory) {
    $scope.showAnswers = [
        { name: "Hayır", value: false},
        { name: "Evet", value: true}
    ];
    $scope.options = {
        show: $scope.showAnswers[0].value,
        params: $stateParams
    };
    $scope.back = 'ikinci-sinif.zihinden-cikarma';
    $scope.border = '#C8211C'
    $scope.title = "ZİHİNDEN ÇIKARMA İŞLEMİ/10’UN KATI OLAN İKİ DOĞAL SAYININ FARKINI BULMA";
    $scope.alignments = [];
    $scope.grid = "sc-grid";
    $scope.print = function () {
        window.print();
    };
    $scope.generate = function () {
        var horizontal = 24;
        var vertical = 25;
        var assorted = 24;
        var opNumber = $stateParams.direction == 'horizontal' ? horizontal : ($stateParams.direction == 'vertical' ? vertical : assorted);
        $scope.alignments = BuildDirectionsFactory($stateParams.direction, opNumber);
        $scope.ops = MindSubFactory.generateSecond(opNumber);
    };
    $scope.generate();
});

app.controller('TcAddCtrl', function($scope) {
    $scope.digitsNumber = [
        { name: "2", value: 2},
        { name: "3", value: 3},
        { name: "4", value: 4}
    ];
    $scope.firstDigits = [
        { name: "1", value: 1},
        { name: "2", value: 2},
        { name: "3", value: 3}
    ];
    $scope.secondDigits = [
        { name: "1", value: 1},
        { name: "2", value: 2},
        { name: "3", value: 3}
    ];
    $scope.thirdDigits = [
        { name: "1", value: 1},
        { name: "2", value: 2},
        { name: "3", value: 3}
    ];
    $scope.fourthDigits = [
        { name: "1", value: 1},
        { name: "2", value: 2},
        { name: "3", value: 3}
    ];
    $scope.directions = [
        { name: 'Yan yana', value: 'horizontal'},
        { name: 'Alt alta', value: 'vertical'},
        { name: 'Karışık', value: 'assorted'}
    ];
    $scope.props = [
        { name: 'Toplamı bulma', value: 'result'},
        { name: 'Verilmeyen toplananı bulma', value: 'element'}
    ];
    $scope.kinds = [
        { name: 'Eldeli', value: 1 },
        { name: 'Eldesiz', value: 2 },
        { name: 'Karışık', value: 3 },
    ];
    $scope.options = {
        digits: $scope.digitsNumber[0].value,
        first: $scope.firstDigits[0].value,
        second: $scope.secondDigits[0].value,
        third: $scope.thirdDigits[0].value,
        fourth: $scope.fourthDigits[0].value,
        direction: $scope.directions[0].value,
        prop: $scope.props[0].value,
        kind: $scope.kinds[0].value
    }
});

app.controller('TcAddSheet', function($scope, $stateParams, AdditionFactory, BuildDirectionsFactory) {
    $scope.showAnswers = [
        { name: "Hayır", value: false},
        { name: "Evet", value: true}
    ];
    $scope.options = {
        show: $scope.showAnswers[0].value,
        params: $stateParams
    };
    $scope.back = 'ucuncu-sinif.toplama';
    $scope.border = '#C8211C'
    if($stateParams.prop == 'result') {
        $scope.title = "TOPLAMA İŞLEMİ/TOPLAMI BULMA";
    } else {
        $scope.title = "TOPLAMA İŞLEMİ/VERİLMEYEN TOPLANANI BULMA";
    }
    $scope.alignments = [];
    $scope.print = function () {
        window.print();
    };
    $scope.grid = $stateParams.digits == 2 ? 'tc-grid-2' : 'tc-grid';
    $scope.generate = function () {
        var horizontal = $stateParams.digits == 2 ? 24 : 16;
        var vertical = $stateParams.digits == 2 ? 25 : 20;
        var assorted = $stateParams.digits == 2 ? 24 : 18;
        var opNumber = $stateParams.direction == 'horizontal' ? horizontal : ($stateParams.direction == 'vertical' ? vertical : assorted);
        $scope.alignments = BuildDirectionsFactory($stateParams.direction, opNumber);
        $scope.ops = AdditionFactory.generateThird($stateParams.digits, $stateParams.prop, $stateParams.kind, $stateParams.first, $stateParams.second, $stateParams.third, $stateParams.fourth, opNumber);
    };
    $scope.generate();
});

app.controller('TcSubCtrl', function ($scope) {
    $scope.directions = [
        { name: 'Yan yana', value: 'horizontal'},
        { name: 'Alt alta', value: 'vertical'},
        { name: 'Karışık', value: 'assorted'}
    ];
    $scope.props = [
        { name: 'Farkı bulma', value: 'diff'},
        { name: 'Eksileni bulma', value: 'dim'},
        { name: 'Çıkanı bulma', value: 'sub'},
        { name: 'Karışık (Eksileni veya çıkanı bulma)', value: 'assorted'}
    ];
    $scope.kinds = [
        { name: 'Onluk bozmadan', value: 1},
        { name: 'Onluk bozarak', value: 2},
        { name: 'Karışık', value: 3}
    ];
    $scope.options = {
        first: "3",
        second: "2",
        direction: $scope.directions[0].value,
        prop: $scope.props[0].value,
        kind: $scope.kinds[0].value
    };
});

app.controller('TcSubSheet', function ($scope, $stateParams, SubFactory, BuildDirectionsFactory) {
    $scope.showAnswers = [
        { name: "Hayır", value: false},
        { name: "Evet", value: true}
    ];
    $scope.options = {
        show: $scope.showAnswers[0].value,
        params: $stateParams
    };
    $scope.back = 'ucuncu-sinif.cikarma';
    $scope.border = '#C8211C'
    if ($stateParams.prop == 'diff') {
        $scope.title = "ÇIKARMA İŞLEMİ/FARKI BULMA";
    } else if ($stateParams.prop == 'dim') {
        $scope.title = "ÇIKARMA İŞLEMİ/EKSİLENİ BULMA";
    } else if ($stateParams.prop == 'sub') {
        $scope.title = "ÇIKARMA İŞLEMİ/ÇIKANI BULMA";
    } else {
        $scope.title = "ÇIKARMA İŞLEMİ/EKSİLENİ VEYA ÇIKANI BULMA";
    }
    $scope.alignments = [];
    $scope.grid = $stateParams.direction == "horizontal" ? "sc-grid" : "tc-grid";
    if($stateParams.direction == 'assorted') {
        $scope.grid = "sc-grid"
    }
    $scope.print = function () {
        window.print();
    };
    $scope.generate = function () {
        var horizontal = 24;
        var vertical = 25;
        var assorted = 24;
        var opNumber = $stateParams.direction == 'horizontal' ? horizontal : ($stateParams.direction == 'vertical' ? vertical : assorted);
        $scope.alignments = BuildDirectionsFactory($stateParams.direction, opNumber);
        $scope.ops = SubFactory.generateThird($stateParams.prop, $stateParams.kind, $stateParams.first, $stateParams.second, opNumber);
    };
    $scope.generate();
});

app.controller('TcMultiCtrl', function ($scope) {
    $scope.options = {
        first: '2',
        second: '2'
    }
    $scope.control = function () {
        if ($scope.options.first == '3') {
            $scope.options.second = '1';
        }
    };
});

app.controller('TcMultiSheet', function ($scope, $stateParams, MultiFactory, BuildDirectionsFactory) {
    $scope.showAnswers = [
        { name: "Hayır", value: false},
        { name: "Evet", value: true}
    ];
    $scope.options = {
        show: $scope.showAnswers[0].value,
        params: $stateParams
    };
    $scope.back = 'ucuncu-sinif.carpma';
    $scope.border = '#C8211C'
    $scope.title = "ÇARPMA İŞLEMİ";
    $scope.alignments = [];
    $scope.print = function () {
        window.print();
    };
    $scope.generate = function () {
        var opNumber = $stateParams.second == '2' ? 20 : 25;
        $scope.alignments = BuildDirectionsFactory('vertical', opNumber);
        $scope.ops = MultiFactory.generateThird($stateParams.first, $stateParams.second, opNumber);
    };
    $scope.generate();
});

app.controller('TcDivCtrl', function($scope) {
    $scope.props = [
        { name: 'Bölümü bulma', value: 'division'},
        { name: 'Bölüneni bulma', value: 'divided'},
        { name: 'Böleni bulma', value: 'divisior'}
    ];
    $scope.kinds = [
        { name: 'Kalanlı', value: 'remainder'},
        { name: 'Kalansız', value: 'wo-remainder'},
        { name: 'Karışık', value: 'assorted'}
    ];
    $scope.options = {
        prop: $scope.props[0].value,
        kind: $scope.kinds[0].value
    };
});

app.controller('TcDivSheet', function ($scope, $stateParams, BuildDirectionsFactory, DivisionFactory) {
    $scope.showAnswers = [
        { name: "Hayır", value: false},
        { name: "Evet", value: true}
    ];
    $scope.options = {
        show: $scope.showAnswers[0].value,
        params: $stateParams
    };
    $scope.back = 'ucuncu-sinif.bolme';
    $scope.border = '#C8211C';
    if ($stateParams.prop == 'division') {
        $scope.title = "BÖLME İŞLEMİ/BÖLÜMÜ BULMA";
    } else if ($stateParams.prop == 'divided') {
        $scope.title = "BÖLME İŞLEMİ/BÖLÜNENİ BULMA";
    } else {
        $scope.title = "BÖLME İŞLEMİ/BÖLENİ BULMA";
    }
    $scope.alignments = [];
    $scope.print = function () {
        window.print();
    };
    $scope.grid = 'sc-grid';
    $scope.generate = function () {
        var opNumber = 20;
        $scope.alignments = BuildDirectionsFactory('vertical', opNumber);
        $scope.ops = DivisionFactory.generateThird($stateParams.prop, $stateParams.kind, opNumber);
    };
    $scope.generate();
});

app.controller('TcMindAddCtrl', function($scope) {
    $scope.props = [
        { name: "İki basamaklı iki sayıyı zihinden toplama işlemi", value: 1},
        { name: "Üç basamaklı bir sayı ile bir basamaklı bir sayıyı zihinden toplama işlemi", value: 2},
        { name: "10'un katı olan iki basamaklı bir sayı ve 100'ün katı olan üç basamaklı bir sayıyı zihinden toplama işlemi", value: 3},
        { name: 'Karışık', value: 4}
    ];
    $scope.directions = [
        { name: 'Yan yana', value: 'horizontal'},
        { name: 'Alt alta', value: 'vertical'},
        { name: 'Karışık', value: 'assorted'}
    ];
    $scope.options = {
        prop: $scope.props[0].value,
        direction: $scope.directions[0].value
    };
});

app.controller('TcMindAddSheet', function($scope, $stateParams, MindAdditionFactory, BuildDirectionsFactory) {
    $scope.showAnswers = [
        { name: "Hayır", value: false},
        { name: "Evet", value: true}
    ];
    $scope.options = {
        show: $scope.showAnswers[0].value,
        params: $stateParams
    };
    $scope.back = 'ucuncu-sinif.zihinden-toplama';
    $scope.border = '#C8211C'
    if ($stateParams.prop == 1) {
        $scope.title = "ZİHİNDEN TOPLAMA İŞLEMİ/İKİ BASAMAKLI İKİ SAYIYI ZİHİNDEN TOPLAMA";
    } else if ($stateParams.prop == 2) {
        $scope.title = "ZİHİNDEN TOPLAMA İŞLEMİ/ÜÇ BASAMAKLI BİR SAYI İLE BİR BASAMAKLI BİR SAYIYI ZİHİNDEN TOPLAMA";
    } else if ($stateParams.prop == 3) {
        $scope.title = "ZİHİNDEN TOPLAMA İŞLEMİ/10’UN KATI OLAN İKİ BASAMAKLI BİR SAYI VE 100’ÜN KATI OLAN ÜÇ BASAMAKLI BİR SAYIYI ZİHİNDEN TOPLAMA";
    } else {
        $scope.title = "ZİHİNDEN TOPLAMA İŞLEMİ/KARIŞIK";
    }
    $scope.alignments = [];
    $scope.grid = $stateParams.direction == "horizontal" ? "sc-grid" : 'tc-grid';
    if($stateParams.direction == 'assorted') {
        $scope.grid = 'sc-grid';
    }
    $scope.print = function () {
        window.print();
    };
    $scope.generate = function () {
        var horizontal = 24;
        var vertical = 25;
        var assorted = 24;
        var opNumber = $stateParams.direction == 'horizontal' ? horizontal : ($stateParams.direction == 'vertical' ? vertical : assorted);
        $scope.alignments = BuildDirectionsFactory($stateParams.direction, opNumber);
        $scope.ops = MindAdditionFactory.generateThird($stateParams.prop, opNumber);
    };
    $scope.generate();
});

app.controller('TcMindSubCtrl', function($scope) {
    $scope.props = [
        { name: "İki basamaklı sayılardan 10'un katı olan iki basamaklı sayıları zihinden çıkarma", value: 1},
        { name: "100'ün katı olan üç basamaklı sayılardan 10'un katı olan iki basamaklı sayıları zihinden çıkarma", value: 2},
        { name: 'Karışık', value: 3}
    ];
    $scope.directions = [
        { name: 'Yan yana', value: 'horizontal'},
        { name: 'Alt alta', value: 'vertical'},
        { name: 'Karışık', value: 'assorted'}
    ];
    $scope.options = {
        prop: $scope.props[0].value,
        direction: $scope.directions[0].value
    };
});

app.controller('TcMindSubSheet', function($scope, $stateParams, MindSubFactory, BuildDirectionsFactory) {
    $scope.showAnswers = [
        { name: "Hayır", value: false},
        { name: "Evet", value: true}
    ];
    $scope.options = {
        show: $scope.showAnswers[0].value,
        params: $stateParams
    };
    $scope.back = 'ucuncu-sinif.zihinden-cikarma';
    $scope.border = '#C8211C'
    if ($stateParams.prop == 1) {
        $scope.title = "ZİHİNDEN ÇIKARMA İŞLEMİ/İKİ BASAMAKLI SAYILARDAN 10’UN KATI OLAN İKİ BASAMAKLI SAYILARI ZİHİNDEN ÇIKARMA";
    } else if ($stateParams.prop == 2) {
        $scope.title = "ZİHİNDEN ÇIKARMA İŞLEMİ/100’ÜN KATI OLAN ÜÇ BASAMAKLI SAYILARDAN 10’UN KATI OLAN İKİ BASAMAKLI SAYILARI ZİHİNDEN ÇIKARMA";
    } else {
        $scope.title = "ZİHİNDEN ÇIKARMA İŞLEMİ/KARIŞIK";
    }
    $scope.alignments = [];
    $scope.grid = $stateParams.direction == 'horizontal' ? 'sc-grid' : 'tc-grid';
    if($stateParams.direction == 'assorted') {
        $scope.grid = 'sc-grid';
    }
    $scope.print = function () {
        window.print();
    };
    $scope.generate = function () {
        var horizontal = 24;
        var vertical = 25;
        var assorted = 24;
        var opNumber = $stateParams.direction == 'horizontal' ? horizontal : ($stateParams.direction == 'vertical' ? vertical : assorted);
        $scope.alignments = BuildDirectionsFactory($stateParams.direction, opNumber);
        $scope.ops = MindSubFactory.generateThird($stateParams.prop, opNumber);
    };
    $scope.generate();
});

app.controller('TcMindMultiCtrl', function($scope) {
    $scope.props = [
        { name: "Bir basamaklı iki sayıyı zihinden çarpma", value: 1},
        { name: "10 ve 100 ile zihinden çarpma", value: 2},
        { name: 'Karışık', value: 3}
    ];
    $scope.directions = [
        { name: 'Yan yana', value: 'horizontal'},
        { name: 'Alt alta', value: 'vertical'},
        { name: 'Karışık', value: 'assorted'}
    ];
    $scope.options = {
        prop: $scope.props[0].value,
        direction: $scope.directions[0].value
    };
});

app.controller('TcMindMultiSheet', function($scope, $stateParams, MindMultiFactory, BuildDirectionsFactory) {
    $scope.showAnswers = [
        { name: "Hayır", value: false},
        { name: "Evet", value: true}
    ];
    $scope.options = {
        show: $scope.showAnswers[0].value,
        params: $stateParams
    };
    $scope.back = 'ucuncu-sinif.zihinden-carpma';
    $scope.border = '#C8211C'
    if ($stateParams.prop == 1) {
        $scope.title = "ZİHİNDEN ÇARPMA İŞLEMİ/BİR BASAMAKLI İKİ SAYIYI ZİHİNDEN ÇARPMA";
    } else if ($stateParams.prop == 2) {
        $scope.title = "ZİHİNDEN ÇARPMA İŞLEMİ/10 VE 100 İLE ZİHİNDEN ÇARPMA";
    } else {
        $scope.title = "ZİHİNDEN ÇARPMA İŞLEMİ/KARIŞIK";
    }
    $scope.alignments = [];
    $scope.grid = $stateParams.direction == 'horizontal' ? 'sc-grid' : 'tc-grid';
    if($stateParams.direction == 'assorted') {
        $scope.grid = 'sc-grid';
    }
    $scope.print = function () {
        window.print();
    };
    $scope.generate = function () {
        var horizontal = 24;
        var vertical = 25;
        var assorted = 24;
        var opNumber = $stateParams.direction == 'horizontal' ? horizontal : ($stateParams.direction == 'vertical' ? vertical : assorted);
        $scope.alignments = BuildDirectionsFactory($stateParams.direction, opNumber);
        $scope.ops = MindMultiFactory.generateThird($stateParams.prop, opNumber);
    };
    $scope.generate();
});

app.controller('TcShortDivSheet', function ($scope, $stateParams, ShortDivisionFactory, BuildDirectionsFactory) {
    $scope.showAnswers = [
        { name: "Hayır", value: false},
        { name: "Evet", value: true}
    ];
    $scope.options = {
        show: $scope.showAnswers[0].value,
        params: $stateParams
    };
    $scope.back = 'ucuncu-sinif.kisayol-bolme';
    $scope.border = '#C8211C'
    $scope.title = "KISA YOLDAN BÖLME İŞLEMİ ÇALIŞMA KÂĞIDI";
    $scope.alignments = [];
    $scope.print = function () {
        window.print();
    };
    $scope.generate = function () {
        var opNumber = 24;
        $scope.alignments = BuildDirectionsFactory('horizontal', opNumber);
        $scope.ops = ShortDivisionFactory.generateThird(opNumber);
    };
    $scope.generate();
});

app.controller('FocAddCtrl', function($scope) {
    $scope.digitsNumber = [
        { name: "2", value: 2},
        { name: "3", value: 3},
        { name: "4", value: 4}
    ];
    $scope.firstDigits = [
        { name: "2", value: 2},
        { name: "3", value: 3},
        { name: "4", value: 4}
    ];
    $scope.secondDigits = [
        { name: "2", value: 2},
        { name: "3", value: 3},
        { name: "4", value: 4}
    ];
    $scope.thirdDigits = [
        { name: "2", value: 2},
        { name: "3", value: 3},
        { name: "4", value: 4}
    ];
    $scope.fourthDigits = [
        { name: "2", value: 2},
        { name: "3", value: 3},
        { name: "4", value: 4}
    ];
    $scope.directions = [
        { name: 'Yan yana', value: 'horizontal'},
        { name: 'Alt alta', value: 'vertical'},
        { name: 'Karışık', value: 'assorted'}
    ];
    $scope.props = [
        { name: 'Toplamı bulma', value: 'result'},
        { name: 'Verilmeyen toplananı bulma', value: 'element'}
    ];
    $scope.kinds = [
        { name: 'Eldeli', value: 1 },
        { name: 'Eldesiz', value: 2 },
        { name: 'Karışık', value: 3 },
    ];
    $scope.options = {
        digits: $scope.digitsNumber[0].value,
        first: $scope.firstDigits[0].value,
        second: $scope.secondDigits[0].value,
        third: $scope.thirdDigits[0].value,
        fourth: $scope.fourthDigits[0].value,
        direction: $scope.directions[0].value,
        prop: $scope.props[0].value,
        kind: $scope.kinds[0].value,
    }
});

app.controller('FocAddSheet', function ($scope, $stateParams, BuildDirectionsFactory, AdditionFactory) {
    $scope.showAnswers = [
        { name: "Hayır", value: false},
        { name: "Evet", value: true}
    ];
    $scope.options = {
        show: $scope.showAnswers[0].value,
        params: $stateParams
    };
    $scope.back = 'dorduncu-sinif.toplama';
    $scope.border = '#C8211C'
    if($stateParams.prop == 'result') {
        $scope.title = "TOPLAMA İŞLEMİ/TOPLAMI BULMA";
    } else {
        $scope.title = "TOPLAMA İŞLEMİ/VERİLMEYEN TOPLANANI BULMA";
    }    $scope.alignments = [];
    $scope.print = function () {
        window.print();
    };
    var getTotalDigit = function () {
      return parseInt($stateParams.first) + parseInt($stateParams.second) +  parseInt($stateParams.third) +  parseInt($stateParams.fourth);
    }
    if($stateParams.digits == 2) {
      $scope.grid = 'foc-grid-xs';
    } else if ($stateParams.digits == 3) {
      $scope.grid = 'foc-grid-sm';
    } else {
      if (getTotalDigit() > 14) {
        $scope.grid = 'foc-grid-l';
      } else {
        $scope.grid = 'foc-grid-m'
      }
    }
    $scope.generate = function () {
      var opNumber;
      if($stateParams.digits == 2) {
        if ($stateParams.direction == 'horizontal') {
          opNumber = 27;
        } else if ($stateParams.direction == 'vertical') {
          opNumber = 36;
        } else {
          opNumber = 30;
        }
      } else if ($stateParams.digits == 3) {
        if ($stateParams.direction == 'horizontal') {
          opNumber = 18;
        } else if ($stateParams.direction == 'vertical') {
          opNumber = 30;
        } else {
          opNumber = 26;
        }
      } else {
        if ($stateParams.direction == 'horizontal') {
          if (getTotalDigit() > 14) {
            opNumber = 14;
          } else {
            opNumber = 18;
          }
        } else if ($stateParams.direction == 'vertical') {
          opNumber = 24;
        } else {
          if (getTotalDigit() > 14) {
            opNumber = 20;
          } else {
            opNumber = 22;
          }
        }
      }
      // var vertical = $stateParams.digits == 2 ? 25 : 20;
      // var assorted = $stateParams.digits == 2 ? 24 : 18;
      // var opNumber = $stateParams.direction == 'horizontal' ? horizontal : ($stateParams.direction == 'vertical' ? vertical : assorted);
      $scope.alignments = BuildDirectionsFactory($stateParams.direction, opNumber);
      $scope.ops = AdditionFactory.generateFourth($stateParams.digits, $stateParams.prop, $stateParams.kind, $stateParams.first, $stateParams.second, $stateParams.third, $stateParams.fourth, opNumber);
    };
    $scope.generate();
});

app.controller('FocSubCtrl', function ($scope) {
    $scope.directions = [
        { name: 'Yan yana', value: 'horizontal'},
        { name: 'Alt alta', value: 'vertical'},
        { name: 'Karışık', value: 'assorted'}
    ];
    $scope.props = [
        { name: 'Farkı bulma', value: 'diff'},
        { name: 'Eksileni bulma', value: 'dim'},
        { name: 'Çıkanı bulma', value: 'sub'},
        { name: 'Karışık (Eksileni veya çıkanı bulma)', value: 'assorted'}
    ];
    $scope.kinds = [
        { name: 'Onluk bozmadan', value: 1},
        { name: 'Onluk bozarak', value: 2},
        { name: 'Karışık', value: 3}
    ];
    $scope.options = {
        first: "3",
        second: "2",
        direction: $scope.directions[0].value,
        prop: $scope.props[0].value,
        kind: $scope.kinds[0].value
    };
    $scope.control = function () {
        if ($scope.options.first == '3' && $scope.options.second == '4') {
            $scope.options.second = '3';
        }
    };
});

app.controller('FocSubSheet', function ($scope, $stateParams, SubFactory, BuildDirectionsFactory) {
    $scope.showAnswers = [
        { name: "Hayır", value: false},
        { name: "Evet", value: true}
    ];
    $scope.options = {
        show: $scope.showAnswers[0].value,
        params: $stateParams
    };
    $scope.back = 'dorduncu-sinif.cikarma';
    $scope.border = '#C8211C'
    if ($stateParams.prop == 'diff') {
        $scope.title = "ÇIKARMA İŞLEMİ/FARKI BULMA";
    } else if ($stateParams.prop == 'dim') {
        $scope.title = "ÇIKARMA İŞLEMİ/EKSİLENİ BULMA";
    } else if ($stateParams.prop == 'sub') {
        $scope.title = "ÇIKARMA İŞLEMİ/ÇIKANI BULMA";
    } else {
        $scope.title = "ÇIKARMA İŞLEMİ/EKSİLENİ VEYA ÇIKANI BULMA";
    }
    $scope.alignments = [];
    $scope.print = function () {
        window.print();
    };
    $scope.generate = function () {
        var horizontal = 24;
        var vertical = 25;
        var assorted = 24;
        var opNumber = $stateParams.direction == 'horizontal' ? horizontal : ($stateParams.direction == 'vertical' ? vertical : assorted);
        $scope.alignments = BuildDirectionsFactory($stateParams.direction, opNumber);
        $scope.ops = SubFactory.generateFourth($stateParams.prop, $stateParams.kind, $stateParams.first, $stateParams.second, opNumber);
    };
    $scope.generate();
});

app.controller('FocMultiSheet', function ($scope, $stateParams, MultiFactory, BuildDirectionsFactory) {
    $scope.showAnswers = [
        { name: "Hayır", value: false},
        { name: "Evet", value: true}
    ];
    $scope.options = {
        show: $scope.showAnswers[0].value,
        params: $stateParams
    };
    $scope.back = 'dorduncu-sinif.carpma';
    $scope.border = '#C8211C'
    $scope.title = "ÇARPMA İŞLEMİ";
    $scope.alignments = [];
    $scope.print = function () {
        window.print();
    };
    $scope.generate = function () {
        var opNumber = 20;
        $scope.alignments = BuildDirectionsFactory('vertical', opNumber);
        $scope.ops = MultiFactory.generateFourth(opNumber);
    };
    $scope.generate();
});

app.controller('FocDivCtrl', function($scope) {
    $scope.firstDigits = [
        { name: "2", value: 2},
        { name: "3", value: 3}
        // { name: "4", value: 4}
    ];
    $scope.props = [
        { name: 'Bölümü bulma', value: 'division'},
        { name: 'Bölüneni bulma', value: 'divided'},
        { name: 'Böleni bulma', value: 'divisior'}
    ];
    $scope.kinds = [
        { name: 'Kalanlı', value: 'remainder'},
        { name: 'Kalansız', value: 'wo-remainder'},
        { name: 'Karışık', value: 'assorted'}
    ];
    $scope.options = {
        first: $scope.firstDigits[0].value,
        second: '1',
        prop: $scope.props[0].value,
        kind: $scope.kinds[0].value
    };
    $scope.control = function () {
        if ($scope.options.first == '4') {
            $scope.options.second = '1';
        }
    };
});

app.controller('FocDivSheet', function ($scope, $stateParams, BuildDirectionsFactory, DivisionFactory) {
    $scope.showAnswers = [
        { name: "Hayır", value: false},
        { name: "Evet", value: true}
    ];
    $scope.options = {
        show: $scope.showAnswers[0].value,
        params: $stateParams
    };
    $scope.back = 'dorduncu-sinif.bolme';
    $scope.border = '#C8211C'
    if ($stateParams.prop == 'division') {
        $scope.title = "BÖLME İŞLEMİ/BÖLÜMÜ BULMA";
    } else if ($stateParams.prop == 'divided') {
        $scope.title = "BÖLME İŞLEMİ/BÖLÜNENİ BULMA";
    } else {
        $scope.title = "BÖLME İŞLEMİ/BÖLENİ BULMA";
    }
    $scope.alignments = [];
    $scope.print = function () {
        window.print();
    };
    $scope.grid = 'foc-div-grid';
    $scope.generate = function () {
        var opNumber = 12;
        $scope.alignments = BuildDirectionsFactory('vertical', opNumber);
        $scope.ops = DivisionFactory.generateFourth($stateParams.prop, $stateParams.kind, $stateParams.first, $stateParams.second, opNumber);
    };
    $scope.generate();
});

app.controller('FocMindAddCtrl', function($scope) {
    $scope.props = [
        { name: "İki basamaklı sayıları 100'ün katlarıyla zihinden toplama işlemi", value: 1},
        { name: "Üç basamaklı sayıları 100'ün katlarıyla zihinden toplama işlemi", value: 2},
        { name: "Dört basamaklı sayıları 100'ün katlarıyla zihinden toplama işlemi", value: 3},
        { name: 'Karışık', value: 4}
    ];
    $scope.directions = [
        { name: 'Yan yana', value: 'horizontal'},
        { name: 'Alt alta', value: 'vertical'},
        { name: 'Karışık', value: 'assorted'}
    ];
    $scope.options = {
        prop: $scope.props[0].value,
        direction: $scope.directions[0].value
    };
});

app.controller('FocMindAddSheet', function($scope, $stateParams, MindAdditionFactory, BuildDirectionsFactory) {
    $scope.showAnswers = [
        { name: "Hayır", value: false},
        { name: "Evet", value: true}
    ];
    $scope.options = {
        show: $scope.showAnswers[0].value,
        params: $stateParams
    };
    $scope.back = 'dorduncu-sinif.zihinden-toplama';
    $scope.border = '#C8211C'
    if ($stateParams.prop == 1) {
        $scope.title = "ZİHİNDEN TOPLAMA İŞLEMİ/İKİ BASAMAKLI SAYILARI 100’ÜN KATLARIYLA ZİHİNDEN TOPLAMA";
    } else if ($stateParams.prop == 2) {
        $scope.title = "ZİHİNDEN TOPLAMA İŞLEMİ/ÜÇ BASAMAKLI SAYILARI 100’ÜN KATLARIYLA ZİHİNDEN TOPLAMA";
    } else if ($stateParams.prop == 3) {
        $scope.title = "ZİHİNDEN TOPLAMA İŞLEMİ/DÖRT BASAMAKLI SAYILARI 100’ÜN KATLARIYLA ZİHİNDEN TOPLAMA";
    } else {
        $scope.title = "ZİHİNDEN TOPLAMA İŞLEMİ/KARIŞIK";
    }
    $scope.alignments = [];
    $scope.print = function () {
        window.print();
    };
    if($stateParams.direction === 'horizontal') {
        if($stateParams.prop >= 3) {
            $scope.grid = 'tc-grid'
        } else {
            $scope.grid = 'sc-grid'
        }
    } else {
        $scope.grid = 'tc-grid'
    }
    $scope.generate = function () {
        var horizontal = $stateParams.prop >= 3 ? 16 : 24;
        var vertical = 25;
        var assorted = $stateParams.prop >= 3 ? 21 : 24;
        var opNumber = $stateParams.direction == 'horizontal' ? horizontal : ($stateParams.direction == 'vertical' ? vertical : assorted);
        $scope.alignments = BuildDirectionsFactory($stateParams.direction, opNumber);
        $scope.ops = MindAdditionFactory.generateFourth($stateParams.prop, opNumber);
    };
    $scope.generate();
});

app.controller('FocMindSubCtrl', function($scope) {
    $scope.props = [
        { name: "Üç basamaklı sayılardan 10'un katı olan iki basamaklı sayıları zihinden çıkarma", value: 1},
        { name: "Üç basamaklı sayılardan 100'ün katı olan üç basamaklı sayıları zihinden çıkarma", value: 2},
        { name: 'Karışık', value: 3}
    ];
    $scope.directions = [
        { name: 'Yan yana', value: 'horizontal'},
        { name: 'Alt alta', value: 'vertical'},
        { name: 'Karışık', value: 'assorted'}
    ];
    $scope.options = {
        prop: $scope.props[0].value,
        direction: $scope.directions[0].value
    };
});

app.controller('FocMindSubSheet', function($scope, $stateParams, MindSubFactory, BuildDirectionsFactory) {
    $scope.showAnswers = [
        { name: "Hayır", value: false},
        { name: "Evet", value: true}
    ];
    $scope.options = {
        show: $scope.showAnswers[0].value,
        params: $stateParams
    };
    $scope.back = 'dorduncu-sinif.zihinden-cikarma';
    $scope.border = '#C8211C'
    if ($stateParams.prop == 1) {
        $scope.title = "ZİHİNDEN ÇIKARMA İŞLEMİ/ÜÇ BASAMAKLI SAYILARDAN 10’UN KATI OLAN İKİ BASAMAKLI SAYILARI ZİHİNDEN ÇIKARMA";
    } else if ($stateParams.prop == 2) {
        $scope.title = "ZİHİNDEN ÇIKARMA İŞLEMİ/ÜÇ BASAMAKLI SAYILARDAN 10O’ÜN KATI OLAN ÜÇ BASAMAKLI SAYILARI ZİHİNDEN ÇIKARMA";
    } else {
        $scope.title = "ZİHİNDEN TOPLAMA İŞLEMİ/KARIŞIK";
    }
    $scope.alignments = [];
    $scope.grid = $stateParams.direction == 'horizontal' ? 'sc-grid' : 'tc-grid';
    if($stateParams.direction == 'assorted') {
        $scope.grid = 'sc-grid';
    }
    $scope.print = function () {
        window.print();
    };
    $scope.generate = function () {
        var horizontal = 24;
        var vertical = 25;
        var assorted = 24;
        var opNumber = $stateParams.direction == 'horizontal' ? horizontal : ($stateParams.direction == 'vertical' ? vertical : assorted);
        $scope.alignments = BuildDirectionsFactory($stateParams.direction, opNumber);
        $scope.ops = MindSubFactory.generateFourth($stateParams.prop, opNumber);
    };
    $scope.generate();
});

app.controller('FocMindMultiCtrl', function($scope) {
    $scope.props = [
        { name: "İki basamaklı sayıları 10, 100, ve 1000 ile zihinden çarpma", value: 1},
        { name: "Üç basamaklı sayıları 10, 100, ve 1000 ile zihinden çarpma", value: 2},
        { name: 'Karışık', value: 3}
    ];
    $scope.directions = [
        { name: 'Yan yana', value: 'horizontal'},
        { name: 'Alt alta', value: 'vertical'},
        { name: 'Karışık', value: 'assorted'}
    ];
    $scope.options = {
        prop: $scope.props[0].value,
        direction: $scope.directions[0].value
    };
});

app.controller('FocMindMultiSheet', function($scope, $stateParams, MindMultiFactory, BuildDirectionsFactory) {
    $scope.showAnswers = [
        { name: "Hayır", value: false},
        { name: "Evet", value: true}
    ];
    $scope.options = {
        show: $scope.showAnswers[0].value,
        params: $stateParams
    };
    $scope.back = 'dorduncu-sinif.zihinden-carpma';
    $scope.border = '#C8211C'
    if ($stateParams.prop == 1) {
        $scope.title = "ZİHİNDEN ÇARPMA İŞLEMİ/İKİ BASAMAKLI SAYILARI 10, 100, 1000 İLE ZİHİNDEN ÇARPMA";
    } else if ($stateParams.prop == 2) {
        $scope.title = "ZİHİNDEN ÇARPMA İŞLEMİ/ÜÇ BASAMAKLI SAYILARI 10, 100, 1000 İLE ZİHİNDEN ÇARPMA";
    } else {
        $scope.title = "ZİHİNDEN ÇARPMA İŞLEMİ/KARIŞIK";
    }
    $scope.alignments = [];
    if($stateParams.prop == '2' && $stateParams.direction == 'horizontal') {
        $scope.grid = 'tc-grid short';
    } else if ($stateParams.prop == '3' && $stateParams.direction == 'horizontal') {
        $scope.grid = 'tc-grid short';
    } else {
        $scope.grid = $stateParams.direction == 'horizontal' ? 'sc-grid' : 'tc-grid';
        if ($stateParams.direction == 'assorted') {
            $scope.grid = 'sc-grid';
        }
    }
    $scope.print = function () {
        window.print();
    };
    $scope.generate = function () {
        var horizontal = 24;
        var vertical = 25;
        var assorted = 24;
        var opNumber = $stateParams.direction == 'horizontal' ? horizontal : ($stateParams.direction == 'vertical' ? vertical : assorted);
        $scope.alignments = BuildDirectionsFactory($stateParams.direction, opNumber);
        $scope.ops = MindMultiFactory.generateFourth($stateParams.prop, opNumber);
    };
    $scope.generate();
});

app.controller('FocShortMultiCtrl', function($scope) {
    $scope.props = [
        { name: "Bir, iki ve üç basamaklı sayıları 10, 100, ve 1000'in en çok dokuz katı ile çarpma", value: 1},
        { name: "Bir ve İki basamaklı sayıları 5, 25 ve 50 ile kısa yoldan çarpma", value: 2},
        { name: 'Karışık', value: 3}
    ];
    $scope.directions = [
        { name: 'Yan yana', value: 'horizontal'},
        { name: 'Alt alta', value: 'vertical'},
        { name: 'Karışık', value: 'assorted'}
    ];
    $scope.options = {
        prop: $scope.props[0].value,
        direction: $scope.directions[0].value
    };
});

app.controller('FocShortMultiSheet', function ($scope, $stateParams, ShortMultiFactory, BuildDirectionsFactory) {
    $scope.showAnswers = [
        { name: "Hayır", value: false},
        { name: "Evet", value: true}
    ];
    $scope.options = {
        show: $scope.showAnswers[0].value,
        params: $stateParams
    };
    $scope.back = 'dorduncu-sinif.kisayol-carpma';
    $scope.border = '#C8211C'
    if ($stateParams.prop == 1) {
        $scope.title = "KISA YOLDAN ÇARPMA/BİR, İKİ VE ÜÇ BASAMAKLI SAYILARI 10, 100 VE 1000’İN EN ÇOK DOKUZ KATI İLE KISA YOLDAN ÇARPMA";
    } else if ($stateParams.prop == 2) {
        $scope.title = "KISA YOLDAN ÇARPMA/BİR VE İKİ BASAMAKLI SAYILARI 5, 25 VE 50 İLE KISA YOLDAN ÇARPMA İŞLEMİ";
    } else {
        $scope.title = "KISA YOLDAN ÇARPMA/KARIŞIK";
    }
    $scope.alignments = [];
    $scope.print = function () {
        window.print();
    };
    $scope.generate = function () {
        var horizontal = 24;
        var vertical = 25;
        var assorted = 29;
        var opNumber = $stateParams.direction == 'horizontal' ? horizontal : ($stateParams.direction == 'vertical' ? vertical : assorted);
        $scope.alignments = BuildDirectionsFactory($stateParams.direction, opNumber);
        $scope.ops = ShortMultiFactory.generate($stateParams.prop, opNumber);
    };
    $scope.generate();
});

app.controller('FocShortDivSheet', function ($scope, $stateParams, ShortDivisionFactory, BuildDirectionsFactory) {
    $scope.showAnswers = [
        { name: "Hayır", value: false},
        { name: "Evet", value: true}
    ];
    $scope.options = {
        show: $scope.showAnswers[0].value,
        params: $stateParams
    };
    $scope.back = 'dorduncu-sinif.kisayol-bolme';
    $scope.border = '#C8211C'
    $scope.title = "KISA YOLDAN BÖLME İŞLEMİ/SON ÜÇ BASAMAĞI 0 (SIFIR) OLAN DÖRT VE BEŞ BASAMAKLI DOĞAL SAYILARI 10, 100 VE 1000 İLE KISA YOLDAN BÖLME";
    $scope.alignments = [];
    $scope.print = function () {
        window.print();
    };
    $scope.generate = function () {
        var opNumber = 18;
        $scope.alignments = BuildDirectionsFactory('horizontal', opNumber);
        $scope.ops = ShortDivisionFactory.generateFourth(opNumber);
    };
    $scope.generate();
});
