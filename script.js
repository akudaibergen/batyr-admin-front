const correctEmail = 'servic4u_admin';
const correctPassword = 'Admin_Servic4u_2006';

function register() {
    const newName = document.getElementById('newName').value;
    const newEmail = document.getElementById('newEmail').value;
    const newPassword = document.getElementById('newPassword').value;

    if (newEmail === correctEmail && newPassword === correctPassword) {
        alert('Регистрация прошла успешно!');
        window.location.href = 'admin.html'; // Перенаправление на страницу admin.html после успешной регистрации
    } else {
        alert('Ошибка регистрации. Неверный логин или пароль!');
    }
}

function login() {
    const email = document.getElementById('yEmail').value;
    const password = document.getElementById('yPassword').value;

    if (email === correctEmail && password === correctPassword) {
        alert('Вход выполнен успешно!');
        window.location.href = 'admin.html'; // Перенаправление на страницу admin.html после успешной авторизации
    } else {
        alert('Ошибка авторизации. Неверный логин или пароль!');
    }
}
