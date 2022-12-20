// La empresa “MULTIPLAN” dedicada al alquiler de vehículos, emite una factura de acuerdo al servicio prestado 
// a sus clientes por la distancia recorrida en el auto alquilado. Si la distancia recorrida no es mayor a los 300 km., 
// se cobra una tarifa fija de S/.250, si la distancia recorrida es mayor a 300 km. y hasta 1000 km. se cobra la tarifa fija más el 
// exceso de kilómetros a razón de S/. 30 por km. y si la distancia recorrida es mayor a 1000 km., la compañía cobra la tarifa fija 
// más los kilómetros recorridos entre 300 hasta 1000 a razón de S/. 30, más S/.20 por Kilómetro de exceso en distancias mayores de 1000 km. 
// Además, por promoción otorga un descuento del 10% del importe a pagar, por importes mayores a 500 soles.


let app = angular.module("MyApp", [])

app.controller("root", function($scope) {

  tarifaFija = 250
  $scope.tarifaTotal
 
  $scope.verificarDistancia = function(distancia){
    if (distancia < 300) {
      $scope.tarifaTotal = tarifaFija
    } else if (distancia < 1000) {
      $scope.tarifaTotal = tarifaFija + (distancia - 300) * 30
    } else if (distancia > 100) {
      $scope.tarifaTotal = tarifaFija + (distancia - 300) * 30 + (distancia - 1000) * 20
    }

    if ($scope.tarifaTotal > 500) {
      return $scope.tarifaTotal + $scope.tarifaTotal * 0.10
    }

    return $scope.tarifaTotal
  }
})