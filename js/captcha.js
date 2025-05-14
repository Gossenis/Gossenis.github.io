function generateCaptcha() {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let captcha = '';
    const length = 6;
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        captcha += chars[randomIndex];
    }
    
    document.getElementById('captcha-image').textContent = captcha;
    document.getElementById('captcha').value = '';
}

document.addEventListener('DOMContentLoaded', function() {
    generateCaptcha();
    
    // Обновление капчи при клике на изображение
    document.getElementById('captcha-image').addEventListener('click', function() {
        generateCaptcha();
    });
});