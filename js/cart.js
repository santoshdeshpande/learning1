function CartCtrl($scope) {

    $scope.cart = [];

    $scope.menClothing = [
        {name: 'T-Shirt', price: '20'},
        {name: 'Shirt', price: '15'},
        {name: 'Polo', price: '12'}
    ];

    $scope.womenClothing = [
        {name: 'Top', price: '23'},
        {name: 'Tunic', price: '10'},
        {name: 'Kurta', price: '10'}
    ];

    $scope.addToCart = function(dress) {
        var hasItem = false;
        angular.forEach($scope.cart, function(item){
           if(dress.name === item.name) {
               item.quantity += 1;
               hasItem = true;
            }
        });

        if(hasItem == false) {
            var item = {name:dress.name, quantity:1,price:dress.price, dress:dress};
            $scope.cart.push(item);
        }
    }

    $scope.totalPrice = function() {
        var finalPrice = 0;
        angular.forEach($scope.cart, function(item){
            var price = item.quantity * item.price;
            finalPrice += price;
        });
        return finalPrice;
    }

    $scope.removeFromCart = function(toDelete) {
        var index = $scope.cart.indexOf(toDelete);
        if (index > -1) {
            $scope.cart.splice(index, 1);
        }
    }
}