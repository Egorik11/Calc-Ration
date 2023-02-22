function calcRation() {
  const showMessage = document.querySelector('.showMessage');
  const getSelectGender = document.querySelector('#gender').value;
  const getSelectRation = document.querySelector('#ration').value;
  const messageAboutActivity = document.querySelector('.messageAboutActivity');

  const paramsPerson = {
    weight: parseFloat(document.querySelector('#weight').value),
    height: parseFloat(document.querySelector('#height').value),
    age: parseFloat(document.querySelector('#age').value),
  };

  const paramsForMale = [88.36, 3.4, 4.8, 5.7];

  const paramsForFemale = [447.6, 9.2, 3.1, 4.3];

  if (getSelectGender === 'Мужчина') {
    showMessage.innerHTML = totalRation(
      paramsForMale,
      paramsPerson,
      getSelectRation
    );
  }
  if (getSelectGender === 'Женщина') {
    showMessage.innerHTML = totalRation(
      paramsForFemale,
      paramsPerson,
      getSelectRation
    );
  }
  messageAboutActivity.classList.remove('hide');
}

function totalRation(params, person, ration) {
  return (
    (params[0] +
      params[1] * person.weight +
      params[2] * person.height -
      params[3] * person.age) *
    ration
  ).toFixed(1);
}
