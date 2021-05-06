
window.onload = function()
{
    generatePerson();
};

function generatePerson() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('middlenameOutput').innerText = initPerson.middleName;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('birthMonthOutput').innerText = new Date(0, initPerson.birthMonth).toLocaleString('ru', { day: 'numeric', month: 'long' }).split(' ')[1];
    document.getElementById('birthDayOutput').innerText = initPerson.birthDay;
}

function deletePerson() {
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('middlenameOutput').innerText = '';
    document.getElementById('professionOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('birthMonthOutput').innerText= '';
    document.getElementById('birthDayOutput').innerText= '';
}

document.getElementById('jGenerate').addEventListener("click", generatePerson);
document.getElementById('jDelete').addEventListener("click", deletePerson);