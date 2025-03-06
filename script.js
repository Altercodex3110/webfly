function updateDateTime() {
    const dateOptions = { 
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
    
    const timeOptions = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    };
    
    const now = new Date();
    const formattedDate = now.toLocaleDateString('es-DO', dateOptions);
    const formattedTime = now.toLocaleTimeString('es-DO', timeOptions)
                             .replace(/([ap]\.?\s?m\.?)/i, ' $1')
                             .toUpperCase();

    document.getElementById('current-time').textContent = formattedTime;
    document.getElementById('current-date').textContent = formattedDate;
}

function updateWeather() {
    document.getElementById('temperature').textContent = '31°C';
    document.getElementById('weather-condition').textContent = 'Mayormente soleado';
}

function init() {
    setInterval(updateDateTime, 1000);
    updateDateTime();
    updateWeather();
}

window.onload = init;