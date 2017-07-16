(function () {
    "use strict";

    function AutoCompleteController($http) {
        var vm = this;
        var options;

        function getCountriesSuccess (data) {
            options = data.data;
            vm.isLoading = false;
        }

        vm.generateOptions = function () {
            vm.optionWasSelected = false;
            var res = options.filter(function (item) {
                return item.name.toLowerCase().indexOf(vm.inputText.toLowerCase()) > -1
            });

            vm.filteredOptions = res.splice(0, 8)
        };

        vm.selectOptionFromList = function (item) {
            vm.inputText = item.name;
            vm.optionWasSelected = true;
            vm.filteredOptions = []
        };

        function getCountriesError () {
            alert("Could not retrieve the list of Countries, please try again!")
        }

        function init () {
            vm.isLoading = true;
            vm.optionWasSelected = false;
            var _service = $http.get("https://restcountries.eu/rest/v2/all");
            _service.then(getCountriesSuccess, getCountriesError);
        }

        init();
    }

    angular.module("app").controller("AutoCompleteController", AutoCompleteController);
})();
