var flickrapp = angular.module('flickrapp', ['ngAnimate', 'ngProgress', 'ngResource']);


flickrapp.factory('recentPhotos', function ($http) {
    console.log("Fetch")
    var data = {};
    data.fetchRecent = function () {
        var photos = $http({
            method: 'GET',
            url: 'http://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=96042f1f7f9c7583b01e93e00156a2ca&per_page=10&format=json&nojsoncallback=1'
        });
        return photos;
    }

    return data;
});

flickrapp.controller('FlickrCtrl', function ($scope, recentPhotos, ngProgress) {
    $scope.photos = [];

    $scope.refresh = function() {
        ngProgress.start();
        recentPhotos.fetchRecent().then(function(data) {
            $scope.photos = data.data.photos.photo;
            ngProgress.complete();
        });
    }

    $scope.refresh();
});

//url: http://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=96042f1f7f9c7583b01e93e00156a2ca&per_page=20&format=json&nojsoncallback=1