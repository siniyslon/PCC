document.addEventListener("DOMContentLoaded", () => {
    let visits = localStorage.getItem("site_visits");
    if (!visits) {
        visits = 1;
    } else {
        visits = parseInt(visits) + 1;
    }
    localStorage.setItem("site_visits", visits);
    
    const counterEl = document.getElementById("visit-counter");
    if (counterEl) counterEl.innerText = visits;

    // При загрузке проверяем сохраненную тему и применяем её
    const savedTheme = localStorage.getItem("theme") || "dark";
    applyTheme(savedTheme);
});

function toggleSettings() {
    const modal = document.getElementById("settings-modal");
    modal.style.display = (modal.style.display === "block") ? "none" : "block";
}

// Новая функция, которая жестко перекрашивает ВСЕ элементы на сайте
function applyTheme(theme) {
    const btn = document.getElementById("theme-toggle-btn");
    const modalContent = document.querySelector(".modal-content");
    const body = document.body;
    
    // Находим вообще все панели, карточки, выпадающие списки и текстовые блоки на твоем сайте
    const allPanels = document.querySelectorAll('.builder-panel, .summary-panel, [class*="panel"], [class*="card"], [class*="zone"], .modal-content');
    const allSelects = document.querySelectorAll('select, input');
    const allHeaders = document.querySelectorAll('h1, h2, h3, h4, label');

    if (theme === "light") {
        // Силовая вставка светлых стилей
        body.style.backgroundColor = "#f6f8fa";
        body.style.color = "#24292f";
        
        if (modalContent) modalContent.style.backgroundColor = "#ffffff";

        allPanels.forEach(panel => {
            panel.style.backgroundColor = "#ffffff";
            panel.style.borderColor = "#d0d7de";
            panel.style.color = "#24292f";
        });

        allSelects.forEach(select => {
            select.style.backgroundColor = "#f6f8fa";
            select.style.color = "#24292f";
            select.style.borderColor = "#d0d7de";
        });

        allHeaders.forEach(header => {
            header.style.color = "#000000";
        });

        if (btn) btn.innerText = "Переключить на Тёмную";
    } else {
        // Силовая вставка тёмных стилей обратно
        body.style.backgroundColor = "#0d1117";
        body.style.color = "#c9d1d9";
        
        if (modalContent) modalContent.style.backgroundColor = "#161b22";

        allPanels.forEach(panel => {
            panel.style.backgroundColor = "#161b22";
            panel.style.borderColor = "#30363d";
            panel.style.color = "#c9d1d9";
        });

        allSelects.forEach(select => {
            select.style.backgroundColor = "#0d1117";
            select.style.color = "#c9d1d9";
            select.style.borderColor = "#30363d";
        });

        allHeaders.forEach(header => {
            header.style.color = "#ffffff";
        });

        if (btn) btn.innerText = "Переключить на Светлую";
    }
}

// Функция для кнопки
function switchTheme() {
    const currentTheme = localStorage.getItem("theme") || "dark";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
}

function updateBuild() {
    const cpu = document.getElementById('cpu');
    const motherboard = document.getElementById('motherboard');
    const gpu = document.getElementById('gpu');
    const ram = document.getElementById('ram');
    const psu = document.getElementById('psu');

    const cpuPrice = parseInt(cpu.options[cpu.selectedIndex].getAttribute('data-price')) || 0;
    const cpuTdp = parseInt(cpu.options[cpu.selectedIndex].getAttribute('data-tdp')) || 0;
    const cpuSocket = cpu.options[cpu.selectedIndex].getAttribute('data-socket') || '';

    const mbPrice = parseInt(motherboard.options[motherboard.selectedIndex].getAttribute('data-price')) || 0;
    const mbSocket = motherboard.options[motherboard.selectedIndex].getAttribute('data-socket') || '';

    const gpuPrice = parseInt(gpu.options[gpu.selectedIndex].getAttribute('data-price')) || 0;
    const gpuPower = parseInt(gpu.options[gpu.selectedIndex].getAttribute('data-power')) || 0;

    const ramPrice = parseInt(ram.options[ram.selectedIndex].getAttribute('data-price')) || 0;

    const psuPrice = parseInt(psu.options[psu.selectedIndex].getAttribute('data-price')) || 0;
    const psuWatt = parseInt(psu.options[psu.selectedIndex].getAttribute('data-watt')) || 0;

    const totalCost = cpuPrice + mbPrice + gpuPrice + ramPrice + psuPrice;
    document.getElementById('total-price').innerText = totalCost.toLocaleString() + ' ₽';

    let totalPowerConsumption = 0;
    if (cpuTdp > 0 || gpuPower > 0) {
        totalPowerConsumption = cpuTdp + gpuPower + 50;
    }
    document.getElementById('total-power').innerText = totalPowerConsumption + ' Вт';

    let psuStock = psuWatt - totalPowerConsumption;
    if (psuWatt === 0) psuStock = 0;
    document.getElementById('psu-stock').innerText = psuStock + ' Вт';

    const statusBox = document.getElementById('compatibility-status');
    statusBox.className = 'status-box status-success';
    statusBox.innerText = 'Компоненты совместимы!';

    if (!cpu.value || !motherboard.value || !gpu.value || !ram.value || !psu.value) {
        statusBox.className = 'status-box status-success';
        statusBox.innerText = 'Выберите все компоненты для полной проверки.';
        return;
    }

    if (cpuSocket !== mbSocket) {
        statusBox.className = 'status-box status-error';
        statusBox.innerText = `Ошибка: Несовместимые сокеты! Процессор требует ${cpuSocket}, а материнская плата — ${mbSocket}.`;
        return;
    }

    if (psuWatt < totalPowerConsumption * 1.2) {
        statusBox.className = 'status-box status-error';
        statusBox.innerText = `Предупреждение: Недостаточная мощность БП! Рекомендуется блок питания мощнее.`;
        return;
    }
}
