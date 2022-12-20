// Se lee por teclado el código del empleado, número de horas trabajadas, tarifa por hora. 
// Calcular el salario básico, considerando la siguiente tabla de descuento.

// Sueldo bruto	Descuento (%)
// Menor 500	0
// Entre 501 y 1000	2%
// Entre 1001 y 4000	8%
// Entre 4001 y 8000	15%
// Entre 8001 y 10000	21%
// Mayor 10000	30%

// Crear una aplicación web que permita calcular el básico, descuento y salario neto.


let app = angular.module("MyApp", [])

app.controller("form", function ($scope) {

  $scope.user = { codigo:"", horas:"", tarifa:"" }
  $scope.suedoBasico

  $scope.calcular = function () {

    sueldobruto = $scope.user.horas * $scope.user.tarifa
    descuento = 0

    if (sueldobruto <= 500) {
      descuento = 0
    } else if (sueldobruto >= 501 && sueldobruto <= 1000) {
      descuento = 0.02
    } else if (sueldobruto >= 1001 && sueldobruto <= 4000) {
      descuento = 0.08
    } else if (sueldobruto >= 4001 && sueldobruto <= 8000) {
      descuento = 0.15
    }
    else if (sueldobruto >= 8001 && sueldobruto <= 10000) {
      descuento = 0.21
    } else {
      descuento = 0.30
    }
    $scope.sueldoBasico = sueldobruto - (sueldobruto * descuento)
  }

})