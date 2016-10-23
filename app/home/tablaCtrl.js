//(function () {
//    angular.module("app.home")
//    .controller('tablaCtrl',['$scope','NgTableParams',tablaCtrl]);

//    function tablaCtrl($scope, NgTableParams) {
//        debugger;
//        var vm = this;
//       // var data1 = [{ name: "Moroni", age: 50 } /*,*/];
//        var data = [{
//            field: "country",
//            title: "Country",
//            sortable: "country",
//            show: false,
//            groupable: "country"
//        }, {
//            field: "name",
//            title: "Name",
//            sortable: "name",
//            show: true,
//            groupable: "name"
//        }, {
//            field: "age",
//            title: "Age",
//            sortable: "age",
//            show: true,
//            groupable: "age"
//        }, {
//            field: "money",
//            title: "Money",
//            sortable: "money",
//            show: true
//        }];

//        debugger;
//        vm.tableParams = new NgTableParams({}, { dataset: data});
//        debugger;

//    }

//})();


(function() {
  "use strict";

  angular.module("app.home").controller("demoController", demoController);
  demoController.$inject = ["NgTableParams"];

  function demoController(NgTableParams) {
      var simpleList1 = [{ name: "Moroni", age: 50 } /*,*/];
      var simpleList = [{
          field: "country",
          title: "Country",
          sortable: "country",
          show: false,
          groupable: "country"
      }, {
          field: "name",
          title: "Name",
          sortable: "name",
          show: true,
          groupable: "name"
      }, {
          field: "age",
          title: "Age",
          sortable: "age",
          show: true,
          groupable: "age"
      }, {
          field: "money",
          title: "Money",
          sortable: "money",
          show: true
      }];
    var self = this;

    var originalData = angular.copy(simpleList);
    self.data = angular.copy(simpleList);

    self.tableParams = new NgTableParams({}, {
        filterDelay: 0,
        dataset:self.data
     // dataset: angular.copy(simpleList)
    });

    self.cancel = cancel;
    self.del = del;
    self.save = save;
    self.create = create;
    //////////

    function create()
    {
        var row = {};
        row.field = "el valor";
        row.title = "Nombre columna";
        row.show = true;
        originalData.push(row);
    }
    function cancel(row, rowForm) {
      var originalRow = resetRow(row, rowForm);
      angular.extend(row, originalRow);
    }

    function del(row) {
      _.remove(self.tableParams.settings().dataset, function(item) {
        return row === item;
      });
      self.tableParams.reload().then(function(data) {
        if (data.length === 0 && self.tableParams.total() > 0) {
          self.tableParams.page(self.tableParams.page() - 1);
          self.tableParams.reload();
        }
      });
    }
    
    function resetRow(row, rowForm){
      row.isEditing = false;
      rowForm.$setPristine();
      debugger;
      for ( let i in originalData){
        if(originalData[i].id === row.id){
            return originalData[i]
        }
      }
    //   self.tableTracker.untrack(row);
    //   return _.findWhere(originalData, function(r){
    //     return r.id === row.id;
     // });
    }

    function save(row, rowForm) {
      var originalRow = resetRow(row, rowForm);
      angular.extend(originalRow, row);
    }
  }
})();
