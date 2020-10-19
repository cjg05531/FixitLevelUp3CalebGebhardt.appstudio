function homeLoanPayment (a1, a2, a3) {
  let homeFutureValue = a1 *(1 + a2) ** a3/((1+a2)**(a3-1))
    return homeFutureValue
}


btnHomeCalculate.onclick=function(){
  let homePrinciple = Number(inptHomePrinciple.value)
let homeRate = Number(inptHomeRate.value)
let homePeriod = Number(inptHomePeriod.value)
let homePercent = homeRate *100
let homeMonthRate = homeRate / 12
let monthlyHomePayment = (homeLoanPayment(homePrinciple, homeMonthRate, homePeriod)) / homePeriod
let homePayment = monthlyHomePayment.toFixed(2)
 lblHomeAnswer.value = `A home loan for $${homePrinciple} over ${homePeriod} years at ${homePercent}% interest would have a monthly payment of $${homePayment}.`

}


Button2.onclick=function(){
  ChangeForm(Welcome)
}
