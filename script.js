const db = {
    cpu: [
        { id: 1, name: 'Intel Core i3-12100F', socket: 'LGA1700', class: 'Бюджетный', power: 65 },
        { id: 2, name: 'AMD Ryzen 5 5500', socket: 'AM4', class: 'Бюджетный', power: 65 },
        { id: 3, name: 'AMD Ryzen 5 5600', socket: 'AM4', class: 'Средний', power: 65 },
        { id: 4, name: 'Intel Core i5-12400F', socket: 'LGA1700', class: 'Средний', power: 65 },
        { id: 5, name: 'AMD Ryzen 5 7500F', socket: 'AM5', class: 'Средний', power: 65 },
        { id: 6, name: 'Intel Core i5-13400F', socket: 'LGA1700', class: 'Средний', power: 65 },
        { id: 7, name: 'AMD Ryzen 7 5700X', socket: 'AM4', class: 'Средний', power: 65 },
        { id: 8, name: 'Intel Core i5-13600KF', socket: 'LGA1700', class: 'Мощный', power: 125 },
        { id: 9, name: 'AMD Ryzen 7 7800X3D', socket: 'AM5', class: 'Мощный', power: 120 },
        { id: 10, name: 'Intel Core i7-14700K', socket: 'LGA1700', class: 'Топовый', power: 125 }
    ],
    motherboard: [
        { id: 1, name: 'MSI H610M-E', socket: 'LGA1700', type: 'DDR4', class: 'Бюджетный' },
        { id: 2, name: 'Gigabyte B450M K', socket: 'AM4', type: 'DDR4', class: 'Бюджетный' },
        { id: 3, name: 'ASRock B550M Pro4', socket: 'AM4', type: 'DDR4', class: 'Средний' },
        { id: 4, name: 'Gigabyte B550 AORUS', socket: 'AM4', type: 'DDR4', class: 'Средний' },
        { id: 5, name: 'MSI PRO B760-P', socket: 'LGA1700', type: 'DDR4', class: 'Средний' },
        { id: 6, name: 'Gigabyte B650M DS3H', socket: 'AM5', type: 'DDR5', class: 'Средний' },
        { id: 7, name: 'ASUS TUF B760-PLUS', socket: 'LGA1700', type: 'DDR5', class: 'Мощный' },
        { id: 8, name: 'MSI MAG B650 TOMAHAWK', socket: 'AM5', type: 'DDR5', class: 'Мощный' },
        { id: 9, name: 'ASUS ROG B760-F', socket: 'LGA1700', type: 'DDR5', class: 'Топовый' },
        { id: 10, name: 'MSI MPG Z790 EDGE', socket: 'LGA1700', type: 'DDR5', class: 'Топовый' }
    ],
    gpu: [
        { id: 1, name: 'NVIDIA GTX 1650', power: 75, req_psu: 300, class: 'Бюджетный' },
        { id: 2, name: 'AMD Radeon RX 6500 XT', power: 107, req_psu: 400, class: 'Бюджетный' },
        { id: 3, name: 'NVIDIA RTX 3050', power: 130, req_psu: 500, class: 'Средний' },
        { id: 4, name: 'AMD Radeon RX 6600', power: 132, req_psu: 500, class: 'Средний' },
        { id: 5, name: 'NVIDIA RTX 4060', power: 115, req_psu: 500, class: 'Средний' },
        { id: 6, name: 'AMD Radeon RX 7700 XT', power: 245, req_psu: 700, class: 'Мощный' },
        { id: 7, name: 'NVIDIA RTX 4070 Super', power: 220, req_psu: 650, class: 'Мощный' },
        { id: 8, name: 'AMD Radeon RX 7900 XTX', power: 355, req_psu: 800, class: 'Топовый' },
        { id: 9, name: 'NVIDIA RTX 4080 Super', power: 320, req_psu: 750, class: 'Топовый' },
        { id: 10, name: 'NVIDIA RTX 4090', power: 450, req_psu: 1000, class: 'Ультра-топ' }
    ],
    ram: [
        { id: 1, name: 'Netac Basic DDR4 3200МГц', type: 'DDR4', class: 'Бюджетный' },
        { id: 2, name: 'G.Skill AEGIS DDR4 3200МГц', type: 'DDR4', class: 'Бюджетный' },
        { id: 3, name: 'Kingston FURY Beast DDR4 3200МГц', type: 'DDR4', class: 'Средний' },
        { id: 4, name: 'AData XPG Gammix D35 DDR4 3600МГц', type: 'DDR4', class: 'Средний' },
        { id: 5, name: 'Corsair Vengeance LPX DDR4 3600МГц', type: 'DDR4', class: 'Средний' },
        { id: 6, name: 'Crucial Basics DDR5 4800МГц', type: 'DDR5', class: 'Средний' },
        { id: 7, name: 'Kingston FURY DDR5 5600МГц', type: 'DDR5', class: 'Мощный' },
        { id: 8, name: 'Team Group T-Create DDR5 6000МГц', type: 'DDR5', class: 'Мощный' },
        { id: 9, name: 'AData XPG Lancer RGB DDR5 6400МГц', type: 'DDR5', class: 'Топовый' },
        { id: 10, name: 'G.Skill Trident Z5 DDR5 7200МГц', type: 'DDR5', class: 'Топовый' }
    ],
    storage: [
        { id: 1, name: 'Kingston A400 2.5" SATA 500МБ/с', class: 'Бюджетный' },
        { id: 2, name: 'Crucial BX500 2.5" SATA 540МБ/с', class: 'Бюджетный' },
        { id: 3, name: 'Kingston NV2 M.2 NVMe 3500МБ/с', class: 'Средний' },
        { id: 4, name: 'ADATA Legend 710 M.2 NVMe 2400МБ/с', class: 'Средний' },
        { id: 5, name: 'XPG Gammix S11 Pro M.2 NVMe 3500МБ/с', class: 'Средний' },
        { id: 6, name: 'Samsung 980 M.2 NVMe 3500МБ/с', class: 'Средний' },
        { id: 7, name: 'Kingston KC3000 M.2 NVMe 7000МБ/с', class: 'Мощный' },
        { id: 8, name: 'Samsung 980 PRO M.2 NVMe 7000МБ/с', class: 'Мощный' },
        { id: 9, name: 'MSI SPATIUM M480 M.2 NVMe 7000МБ/с', class: 'Топовый' },
        { id: 10, name: 'Samsung 990 PRO M.2 NVMe 7450МБ/с', class: 'Топовый' }
    ],
    psu: [
        { id: 1, name: 'Aerocool VX Plus 500W', wattage: 500, class: 'Бюджетный' },
        { id: 2, name: 'Deepcool PF500 500W 80+', wattage: 500, class: 'Бюджетный' },
        { id: 3, name: 'FSP PNR PRO 600W', wattage: 600, class: 'Средний' },
        { id: 4, name: 'Deepcool PK600D 600W Бронза', wattage: 600, class: 'Средний' },
        { id: 5, name: 'Be quiet! Sys Power 10 650W Бронза', wattage: 650, class: 'Средний' },
        { id: 6, name: 'Montech Century 650W Золото', wattage: 650, class: 'Мощный' },
        { id: 7, name: 'Deepcool DQ750 750W Золото', wattage: 750, class: 'Мощный' },
        { id: 8, name: 'Chieftec Polaris 850W Золото', wattage: 850, class: 'Топовый' },
        { id: 9, name: 'MSI MAG A850G 850W Золото ATX 3.0', wattage: 850, class: 'Топовый' },
        { id: 10, name: 'Super Flower Leadex 1000W Золото', wattage: 1000, class: 'Топовый' }
    ],
    cooler: [
        { id: 1, name: 'Intel Stock Кулер (До 65 Вт)', tdp: 65 },
        { id: 2, name: 'ID-Cooling DK-01T (До 95 Вт)', tdp: 95 },
        { id: 3, name: 'Deepcool GAMMAXX 300 (До 130 Вт)', tdp: 130 },
        { id: 4, name: 'ID-Cooling SE-214-XT (До 180 Вт)', tdp: 180 },
        { id: 5, name: 'Deepcool AG400 (До 220 Вт)', tdp: 220 },
        { id: 6, name: 'Jonsbo CR-1000 Evo (До 220 Вт)', tdp: 220 },
        { id: 7, name: 'Be Quiet! Dark Rock 5 (До 270 Вт)', tdp: 270 },
        { id: 8, name: 'Водянка Deepcool LE520 (240мм / 220 Вт)', tdp: 220 },
        { id: 9, name: 'Водянка Arctic Freezer III (360мм / 300 Вт)', tdp: 300 },
        { id: 10, name: 'Водянка ASUS ROG RYUJIN III (360мм / 320 Вт)', tdp: 320 }
    ],
    case: [
        { id: 1, name: 'Ginzzu B180 (mATX)', size: 'mATX' },
        { id: 2, name: 'AeroCool Cylon (ATX, mATX)', size: 'ATX' },
        { id: 3, name: 'Deepcool CC560 (ATX, mATX)', size: 'ATX' },
        { id: 4, name: 'Montech AIR 1000 (ATX, mATX)', size: 'ATX' },
        { id: 5, name: 'Lian Li O11 Dynamic (ATX, mATX)', size: 'ATX' }
    ]
};

function initConfigurator() {
    const selects = {
        cpu: document.getElementById('cpu-select'),
        motherboard: document.getElementById('motherboard-select'),
        gpu: document.getElementById('gpu-select'),
        ram: document.getElementById('ram-select'),
        storage: document.getElementById('storage-select'),
        cooler: document.getElementById('cooler-select'),
        psu: document.getElementById('psu-select'),
        case: document.getElementById('case-select')
    };

    function renderOptions(element, list, placeholder, textFn) {
        const current = element.value;
        element.innerHTML = `<option value="">${placeholder}</option>`;
        list.forEach(item => {
            const opt = document.createElement('option');
            opt.value = item.id;
            opt.textContent = textFn(item);
            element.appendChild(opt);
        });
        element.value = current;
    }

    function updateAllSelects() {
        const selectedCPU = db.cpu.find(c => c.id == selects.cpu.value);
        const selectedMB = db.motherboard.find(m => m.id == selects.motherboard.value);

        // 1. Фильтр плат по процессору (если он выбран)
        let allowedMB = db.motherboard;
        if (selectedCPU) {
            allowedMB = db.motherboard.filter(m => m.socket === selectedCPU.socket);
        }
        renderOptions(selects.motherboard, allowedMB, "Выберите плату...", m => `${m.name} (${m.socket}/${m.type})`);

        // 2. Фильтр процессоров по плате (если она выбрана)
        let allowedCPU = db.cpu;
        if (selectedMB) {
            allowedCPU = db.cpu.filter(c => c.socket === selectedMB.socket);
        }
        renderOptions(selects.cpu, allowedCPU, "Выберите процессор...", c => `${c.name} (${c.socket})`);

        // 3. Фильтр памяти по плате (если она выбрана)
        let allowedRAM = db.ram;
        if (selectedMB) {
            allowedRAM = db.ram.filter(r => r.name.toUpperCase().includes(selectedMB.type.toUpperCase()));
        }
        renderOptions(selects.ram, allowedRAM, "Выберите память...", r => r.name);

        // Остальные списки всегда заполнены
        renderOptions(selects.gpu, db.gpu, "Выберите видеокарту...", g => `${g.name} (${g.power}W)`);
        renderOptions(selects.storage, db.storage, "Выберите накопитель...", s => s.name);
        renderOptions(selects.cooler, db.cooler, "Выберите охлаждение...", c => c.name);
        renderOptions(selects.psu, db.psu, "Выберите блок питания...", p => `${p.name} (${p.wattage}W)`);
        renderOptions(selects.case, db.case, "Выберите корпус...", c => c.name);
    }

    function checkLogic() {
        const list = document.getElementById('assembly-list');
        const inst = document.getElementById('instructions');
        let html = "";
        let logs = [];
        let error = false;

        let totalPower = 0;
        let classes = [];

        const cCPU = db.cpu.find(c => c.id == selects.cpu.value);
        const cMB = db.motherboard.find(m => m.id == selects.motherboard.value);
        const cGPU = db.gpu.find(g => g.id == selects.gpu.value);
        const cRAM = db.ram.find(r => r.id == selects.ram.value);
        const cST = db.storage.find(s => s.id == selects.storage.value);
        const cCL = db.cooler.find(c => c.id == selects.cooler.value);
        const cPSU = db.psu.find(p => p.id == selects.psu.value);
        const cCS = db.case.find(c => c.id == selects.case.value);

        if (cCPU) { html += `<p>🔳 <b>ЦП:</b> ${cCPU.name}</p>`; totalPower += cCPU.power; classes.push(cCPU.class); }
        if (cMB) { html += `<p>🟩 <b>Плата:</b> ${cMB.name}</p>`; classes.push(cMB.class); }
        if (cGPU) { html += `<p>🚀 <b>Видеокарта:</b> ${cGPU.name}</p>`; totalPower += cGPU.power; classes.push(cGPU.class); }
        if (cRAM) { html += `<p>🧠 <b>Память:</b> ${cRAM.name}</p>`; classes.push(cRAM.class); }
        if (cST) { html += `<p>💾 <b>Диск:</b> ${cST.name}</p>`; }
        if (cCL) { html += `<p>❄️ <b>Кулер:</b> ${cCL.name}</p>`; }
        if (cPSU) { html += `<p>⚡ <b>БП:</b> ${cPSU.name}</p>`; }
        if (cCS) { html += `<p>📦 <b>Корпус:</b> ${cCS.name}</p>`; }

        list.innerHTML = html || "<p style='color:#555'>Здесь будет ваша сборка...</p>";

        // Проверки совместимости
        if (cCPU && cMB && cCPU.socket !== cMB.socket) {
            logs.push(`<span class="status-error">❌ Процессор ${cCPU.socket} не подходит к плате ${cMB.socket}!</span>`);
            error = true;
        }
        if (cMB && cRAM && !cRAM.name.toUpperCase().includes(cMB.type.toUpperCase())) {
            logs.push(`<span class="status-error">❌ Плата поддерживает ${cMB.type}, а выбрана память другого типа!</span>`);
            error = true;
        }
        if (cCPU && cCL && cCL.tdp < cCPU.power) {
            logs.push(`<span class="status-warn">⚠️ Охлаждение слабовато для этого процессора. Возможен перегрев.</span>`);
        }
        if (cGPU && cPSU && cPSU.wattage < cGPU.req_psu) {
            logs.push(`<span class="status-error">❌ Блока питания мало! Для этой видеокарты нужен БП минимум на ${cGPU.req_psu} Вт.</span>`);
            error = true;
        }

        // Вывод статуса
        if (logs.length > 0) {
            inst.innerHTML = logs.join('<br>');
        } else if (cCPU && cMB && cGPU && cRAM && cPSU) {
            inst.innerHTML = '<span class="status-ok">🟢 Сборка полностью совместима! Отличный баланс компонентов.</span>';
        } else {
            inst.innerHTML = '<p>Добавьте основные детали для проверки совместимости.</p>';
        }

        // Общие расчеты
        document.getElementById('total-power').textContent = totalPower > 0 ? totalPower + 50 : 0; // +50Вт на систему, только если есть компоненты
        
        if (classes.length > 0) {
            const counts = {}; let maxClass = classes[0]; let maxCount = 1;
            classes.forEach(c => { counts[c] = (counts[c] || 0) + 1; if(counts[c] > maxCount) { maxClass = c; maxCount = counts[c]; } });
            document.getElementById('build-class').textContent = maxClass;
        } else {
            document.getElementById('build-class').textContent = "—";
        }
    }

    // Слушатели на изменения
    Object.keys(selects).forEach(key => {
        selects[key].addEventListener('change', () => {
            if (key === 'cpu' || key === 'motherboard') {
                updateAllSelects();
            }
            checkLogic();
        });
    });

    // Стартовая прорисовка
    updateAllSelects();
    checkLogic();
}

document.addEventListener('DOMContentLoaded', initConfigurator);
