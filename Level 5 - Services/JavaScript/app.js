//LEVEL 5
(function(){
    
    var app = angular.module('store', ['store-directives']); // dependancy with store-directives
    
    // Store Controller
    app.controller('StoreController', ['$http', function($http){
        var myStore = this;
        myStore.products = [ ];
        $http.get('json/store-products.json').success(function(data){
            myStore.products = data;
        });
    }]);

})();