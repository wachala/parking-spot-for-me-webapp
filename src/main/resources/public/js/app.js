var APP = angular.module("parking-spot-for-me-app", ["leaflet-directive"]).

controller("map-controller", ["$scope", "$http", function($scope, $http) {
    angular.extend($scope, {
        europeCenter: {
            lat: 40.095,
            lng: -3.823,
            zoom: 4
        },
        markers: [],
        layers: {
            baselayers: {
                osm: {
                    name: 'Open Street Map',
                    url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    type: 'xyz'
                }
            },
            overlays: {
                parkingLots: {
                    name: "Parking Lots",
                    type: "markercluster",
                    visible: true
                }
            }
        }
    });
    // data/parkingLots.json
    $http.get('http://' + location.host + '/zuul-service/parking-lot-service/api/parking-lot/').then(function(success) {
        $scope.parkingLots = success.data;
        angular.forEach($scope.parkingLots, function(parkingLot) {               
            marker = {
                layer: "parkingLots",
                lat: parkingLot['location']['latitude'],
                lng: parkingLot['location']['longitude'],
                icon: {
                    type: "awesomeMarker",
                    icon: "tag",
                    markerColor: "blue"
                },
                message: buildParkLotDescription(parkingLot)
            };
            $scope.markers.push(marker)
        })
    }, function(error) {
        console.log(error);
    });

}]);

function buildParkLotDescription(parkingLot) {
    description = '';

    description += 'address: ' + parkingLot['address'] + '<br>';
    description += 'pricing: ' + parkingLot['pricing'] + '<br>';
    description += 'security: ' + parkingLot['security'] + '<br>';
    description += 'restrictions: ' + parkingLot['restrictions'] + '<br>';
    description += 'additionalInformation: ' + parkingLot['additionalInformation'] + '<br>';
    description += 'googleStreetViewLink: ' + parkingLot['googleStreetViewLink'] + '<br>';
    description += 'parkingCapacity: ' + JSON.stringify(parkingLot['parkingCapacity'], null, 2) + '<br>';

    return description;
}
