function carLoanPayment (a1, a2, a3) {
  let carFutureValue = a1 * ((1 + a2) ** a3)
    return carFutureValue
}


btnCarCalculate.onclick=function(){
let carPrinciple = Number(inptCarPrinciple.value)
let carRate = Number(inptCarRate.value)
let carPeriod = Number(inptCarPeriod.value)
let carPercent = carRate *100
let carMonthRate = carRate / 12
let monthlyCarPayment = (carLoanPayment(carPrinciple, carMonthRate, carPeriod)) / carPeriod
let carPayment = monthlyCarPayment.toFixed(2)
 lblCarAnswer.value = `A car loan for $${carPrinciple} over ${carPeriod} months at ${carPercent}% interest would have a monthy payment of $${carPayment}.`
}


Button1.onclick=function(){
  ChangeForm(Welcome)
}
