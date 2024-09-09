function info() {
    let name = prompt("Ваш ФИО:");
    let gender = prompt("Ваш пол:");
    let age = prompt("Ваш возраст:");
    let email = prompt("Ваш e-mail:");

    confirm("ФИО: " + name + "\nПол: " + gender + "\nВозраст: " + age + "\nE-mail: " + email + "\n\nВсе верно?") && alert("Спасибо за предоставленную информацию!");
}

function ticket() {
    let ticketNum = prompt("Введите номер билета:");

    if (ticketNum.length == 6) {
        let firstThreeSum = parseInt(ticketNum[0]) + parseInt(ticketNum[1]) + parseInt(ticketNum[2]);
        let lastThreeSum = parseInt(ticketNum[3]) + parseInt(ticketNum[4]) + parseInt(ticketNum[5]);

        alert(firstThreeSum === lastThreeSum ? "Ваш билет счастливый!" : "Ваш билет не счастливый.");
    } 
    else {
        alert("Ошибка!");
    }
}
