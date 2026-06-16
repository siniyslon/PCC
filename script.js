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

    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    
    const btn = document.getElementById("theme-toggle-btn");
    if (btn) {
        btn.innerText = savedTheme === "dark" ? "Переключить на Светлую" : "Переключить на Тёмную";
    }
});

function toggleSettings() {
    const modal = document.getElementById("settings-modal");
    modal.style.display = (modal.style.display === "block") ? "none" : "block";
}

function switchTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    
    const btn = document.getElementById("theme-toggle-btn");
    if (btn) {
        btn.innerText = newTheme === "dark" ? "Переключить на Светлую" : "Переключить на Тёмную";
    }
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
