(function () {
    'use strict';

    window.agApp.controller('thatfeatureController', Controller);


    function Controller(thatfeatureService, $stateParams, $scope) {
        var vm = this;
        vm.FeatureId = $stateParams.FeatureId;
        vm.feature = [];
        vm.mapId = $stateParams.mapId;
        Activate();

        function Activate() {
            vm.feature = thatfeatureService.GetThatFeature(vm.FeatureId);
            $scope.mapMenu.selectedScreen = 'Features';
        }
    }


})();