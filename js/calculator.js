document.addEventListener('DOMContentLoaded', function() {
    const calculatorForm = document.getElementById('transport-calculator');
    const resultDiv = document.getElementById('calculation-result');
    
    calculatorForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Проверка капчи
        const captchaInput = document.getElementById('captcha').value;
        const captchaText = document.getElementById('captcha-image').textContent;
        
        if (captchaInput !== captchaText) {
            alert('Неверно введена капча!');
            generateCaptcha();
            return;
        }
        
        // Получение данных из формы
        const distance = parseFloat(document.getElementById('distance').value);
        const volume = parseFloat(document.getElementById('volume').value);
        
        // Расчет стоимости (базовая формула)
        const baseRate = 2.5; // руб за м³ на 1 км
        const totalCost = distance * volume * baseRate;
        
        // Отображение результата
        resultDiv.innerHTML = `
            <h3>Результат расчета</h3>
            <p><strong>Расстояние:</strong> ${distance} км</p>
            <p><strong>Объём газа:</strong> ${volume} м³</p>
            <p><strong>Примерная стоимость:</strong> ${totalCost.toFixed(2)} руб</p>
            <p><small>Окончательная стоимость будет рассчитана после консультации с нашим специалистом.</small></p>
        `;
        
        resultDiv.style.display = 'block';
        
        // Отправка данных в 1С (имитация)
        sendTo1C(distance, volume, totalCost);
    });
});

function sendTo1C(distance, volume, cost) {
    // Здесь будет код для интеграции с 1С
    console.log(`Данные для 1С: расстояние=${distance} км, объём=${volume} м³, стоимость=${cost} руб`);
    
    // В реальном проекте здесь будет AJAX запрос к API 1С
    /*
    fetch('php/1c_api.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            distance: distance,
            volume: volume,
            cost: cost
        })
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));
    */
}