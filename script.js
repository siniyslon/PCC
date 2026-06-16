const COMPONENTS_DATA = {
    cpu: [
        { id: "i5-12400F", name: "Intel Core i5-12400F (LGA1700, TDP 65W)", price: 12000, tdp: 65, socket: "LGA1700" },
        { id: "i7-13700K", name: "Intel Core i7-13700K (LGA1700, TDP 125W)", price: 35000, tdp: 125, socket: "LGA1700" },
        { id: "r5-5600X", name: "AMD Ryzen 5 5600X (AM4, TDP 65W)", price: 11500, tdp: 65, socket: "AM4" },
        { id: "r7-7800X3D", name: "AMD Ryzen 7 7800X3D (AM5, TDP 120W)", price: 42000, tdp: 120, socket: "AM5" }
    ],
    motherboard: [
        { id: "b660", name: "ASUS PRIME B660 (LGA1700)", price: 10000, socket: "LGA1700" },
        { id: "b550", name: "GIGABYTE B550 AORUS (AM4)", price: 9500, socket: "AM4" },
        { id: "b650", name: "MSI MAG B650 (AM5)", price: 16000, socket: "AM5" }
    ],
    gpu: [
        { id: "rtx3060", name: "NVIDIA RTX 3060 (170W)", price: 30000, power: 170 },
        { id: "rtx4070", name: "NVIDIA RTX 4070 (200W)", price: 65000, power: 200 },
        { id: "rx6600", name: "AMD RX 6600 (132W)", price: 25000, power: 132 }
    ],
    ram: [
        { id: "16gb", name: "16GB (2x8GB) DDR4/DDR5", price: 4500 },
        { id: "32gb", name: "32GB (2x16GB) DDR4/DDR5", price: 9000 }
    ],
    psu: [
        { id: "500w", name: "Deepcool 500W", price: 3500, watt: 500 },
        { id: "650w", name: "Corsair 650W", price: 5500, watt: 650 },
        { id: "750w", name: "be quiet! 750W", price: 7500, watt: 750 }
    ]
};

// 2. ИНИЦИАЛИЗАЦИЯ И НАПОЛНЕНИЕ САЙТА ПРИ ЗАГРУЗКЕ
document.addEventListener("DOMContentLoaded", () => {
    // Счетчик посещений
    let visits = localStorage.getItem("site_visits") || 0;
    visits = parseInt(visits) + 1;
    localStorage.setItem("site_visits", visits);
    
    const counterEl = document.getElementById("visit-counter");
    if (counterEl) counterEl.innerText = visits;

    // Загрузка сохраненной темы
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.body.setAttribute("data-theme", savedTheme);
    
    const themeBtn = document.getElementById("theme-toggle-btn");
    if (themeBtn) {
        themeBtn.innerText = savedTheme === "dark" ? "Переключить на Светлую" : "Переключить на Тёмную";
    }

    // Рендеринг выпадающих списков из нашей базы данных
    renderSelectOptions("cpu", COMPONENTS_DATA.cpu, "Выберите процессор");
    renderSelectOptions("motherboard", COMPONENTS_DATA.motherboard, "Выберите матушку");
    renderSelectOptions("gpu", COMPONENTS_DATA.gpu, "Выберите видеокарту");
    renderSelectOptions("ram", COMPONENTS_DATA.ram, "Выберите оперативку");
    renderSelectOptions("psu", COMPONENTS_DATA.psu, "Выберите блок питания");
});

// Функция динамического заполнения селектов данными
function renderSelectOptions(selectId, items, placeholder) {
    const select = document.getElementById(selectId);
    if (!select) return;

    select.innerHTML = `<option value="">-- ${placeholder} --</option>`;
    
    items.forEach(item => {
        const option = document.createElement("option");
        option.value = item.id;
        option.innerText = `${item.name} — ${item.price.toLocaleString()} ₽`;
        
        // Зашиваем технические параметры в дата-атрибуты для калькулятора
        if (item.price) option.setAttribute("data-price", item.price);
        if (item.tdp) option.setAttribute("data-tdp", item.tdp);
        if (item.socket) option.setAttribute("data-socket", item.socket);
        if (item.power) option.setAttribute("data-power", item.power);
        if (item.watt) option.setAttribute("data-watt", item.watt);
        
        select.appendChild(option);
    });
}

// 3. УПРАВЛЕНИЕ НАСТРОЙКАМИ И ТЕМОЙ
function toggleSettings() {
    const modal = document.getElementById("settings-modal");
    if (modal) {
        modal.style.display = (modal.style.display === "block") ? "none" : "block";
    }
}

function switchTheme() {
    const currentTheme = document.body.getAttribute("data-theme") || "dark";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    
    const btn = document.getElementById("theme-toggle-btn");
    if (btn) {
        btn.innerText = newTheme === "dark" ? "Переключить на Светлую" : "Переключить на Тёмную";
    }
}

// 4. ОСНОВНОЙ КАЛЬКУЛЯТОР И ПРОВЕРКА СОВМЕСТИМОСТИ
function updateBuild() {
    const cpu = document.getElementById('cpu');
    const motherboard = document.getElementById('motherboard');
    const gpu = document.getElementById('gpu');
    const ram = document.getElementById('ram');
    const psu = document.getElementById('psu');

    if (!cpu || !motherboard || !gpu || !ram || !psu) return;

    const cpuPrice = parseInt(cpu.options[cpu.selectedIndex]?.getAttribute('data-price')) || 0;
    const cpuTdp = parseInt(cpu.options[cpu.selectedIndex]?.getAttribute('data-tdp')) || 0;
    const cpuSocket = cpu.options[cpu.selectedIndex]?.getAttribute('data-socket') || '';

    const mbPrice = parseInt(motherboard.options[motherboard.selectedIndex]?.getAttribute('data-price')) || 0;
    const mbSocket = motherboard.options[motherboard.selectedIndex]?.getAttribute('data-socket') || '';

    const gpuPrice = parseInt(gpu.options[gpu.selectedIndex]?.getAttribute('data-price')) || 0;
    const gpuPower = parseInt(gpu.options[gpu.selectedIndex]?.getAttribute('data-power')) || 0;

    const ramPrice = parseInt(ram.options[ram.selectedIndex]?.getAttribute('data-price')) || 0;

    const psuPrice = parseInt(psu.options[psu.selectedIndex]?.getAttribute('data-price')) || 0;
    const psuWatt = parseInt(psu.options[psu.selectedIndex]?.getAttribute('data-watt')) || 0;

    const totalCost = cpuPrice + mbPrice + gpuPrice + ramPrice + psuPrice;
    
    const totalPriceEl = document.getElementById('total-price');
    if (totalPriceEl) totalPriceEl.innerText = totalCost.toLocaleString() + ' ₽';

    let totalPowerConsumption = 0;
    if (cpuTdp > 0 || gpuPower > 0) {
        totalPowerConsumption = cpuTdp + gpuPower + 50;
    }
    
    const totalPowerEl = document.getElementById('total-power');
    if (totalPowerEl) totalPowerEl.innerText = totalPowerConsumption + ' Вт';

    let psuStock = psuWatt - totalPowerConsumption;
    if (psuWatt === 0) psuStock = 0;
    
    const psuStockEl = document.getElementById('psu-stock');
    if (psuStockEl) psuStockEl.innerText = psuStock + ' Вт';

    const statusBox = document.getElementById('compatibility-status');
    if (!statusBox) return;

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

