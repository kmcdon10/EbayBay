app.config(function($stateProvider) {
    $stateProvider
        .state('product-list', {
            url: '/products/?name&category&userId&keywords&location',
            templateUrl: 'js/product-list/product-list.html',
            controller: 'ProductListController',
            resolve: {
                products: function(ProductFactory, $stateParams) {
                    return ProductFactory.findAll($stateParams);
                }
            }
        })
})
