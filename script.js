document.getElementById('button').addEventListener('click', check)
let age = 0
let date = 'Saturday'

function check () {
  age = document.getElementById('input2').value
  age = parseInt(age)

  date = document.getElementById('input1').value

 if ((age < 18) && (date !== 'Saturday' && date !== 'Sunday')) {
  document.getElementById('answer').innerHTML = 'Time for school!'
} else if ((age < 18) && (date === 'Saturday' || date === 'Sunday')) {
  document.getElementById('answer').innerHTML = 'Relax for the weekend!'
} else if ((age > 18) && (date !== 'Saturday' && date !== 'Sunday')) {
  document.getElementById('answer').innerHTML = 'Off to work!'
} else {
  document.getElementById('answer').innerHTML = 'Error! Enter the right terms for day of the week and age.'
  }
}
