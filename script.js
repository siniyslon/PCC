// 1. Тестовые данные для процессоров
const mockupCPUs = [
    { id: 1, name: 'Intel Core i3-12100F', socket: 'LGA1700' },
    { id: 2, name: 'AMD Ryzen 5 5600', socket: 'AM4' },
    { id: 3, name: 'Intel Core i5-12400F', socket: 'LGA1700' }
];

// 2. Тестовые данные для материнских плат
const mockupMotherboards = [
    { id: 1, name: 'GIGABYTE B450M H', socket: 'AM4' },
    { id: 2, name: 'ASUS PRIME B660M-K', socket: 'LGA1700' },
    { id: 3, name: 'MSI MAG B550 TOMAHAWK', socket: 'AM4' }
];

function initConfigurator() {
    const cpuSelect = document.getElementById('cpu-select');
    const motherboardSelect = document.getElementById('motherboard-select');
    const pcCase = document.getElementById('pc-case');

    // Функция для заполнения списка процессоров
    function renderCPUs(cpusList) {
        cpuSelect.innerHTML = '<option value="">Выберите процессор...</option>';
        cpusList.forEach(cpu => {
            const option = document.createElement('option');
            option.value = cpu.id;
            option.textContent = `${cpu.name} (${cpu.socket})`;
            cpuSelect.appendChild(option);
        });
    }

    // Функция для заполнения списка плат
    function renderMotherboards(mbList) {
        motherboardSelect.innerHTML = '<option value="">Выберите плату...</option>';
        mbList.forEach(mb => {
            const option = document.createElement('option');
            option.value = mb.id;
            option.textContent = `${mb.name} (${mb.socket})`;
            motherboardSelect.appendChild(option);
        });
    }

    // Изначально загружаем полные списки
    renderCPUs(mockupCPUs);
    renderMotherboards(mockupMotherboards);

    // 🔄 Слушатель событий для ПРОЦЕССОРА
    cpuSelect.addEventListener('change', function() {
        const selectedId = Number(cpuSelect.value);
        const selectedCPU = mockupCPUs.find(cpu => cpu.id === selectedId);
        
        if (selectedCPU) {
            pcCase.innerHTML = `<p class="placeholder-text">Установлен: ${selectedCPU.name}</p>`;
            
            // Ограничиваем выбор материнских плат по сокету
            const filteredMBs = mockupMotherboards.filter(mb => mb.socket === selectedCPU.socket);
            renderMotherboards(filteredMBs);
            
            // Автоматически выбираем подходящую плату, если она одна
            if (filteredMBs.length === 1) {
                motherboardSelect.value = filteredMBs[0].id;
            }
        } else {
            // Если сбросили выбор процессора, возвращаем все платы
            renderMotherboards(mockupMotherboards);
            pcCase.innerHTML = `<p class="placeholder-text">2D/3D VISUALIZATIONS</p>`;
        }
    });

    // 🔄 Слушатель событий для МАТЕРИНСКОЙ ПЛАТЫ
    motherboardSelect.addEventListener('change', function() {
        const selectedId = Number(motherboardSelect.value);
        const selectedMB = mockupMotherboards.find(mb => mb.id === selectedId);

        if (selectedMB) {
            pcCase.innerHTML = `<p class="placeholder-text">Установлена плака: ${selectedMB.name}</p>`;
            
            // Ограничиваем выбор процессоров по сокету
            const filteredCPUs = mockupCPUs.filter(cpu => cpu.socket === selectedMB.socket);
            renderCPUs(filteredCPUs);
            
            if (filteredCPUs.length === 1) {
                cpuSelect.value = filteredCPUs[0].id;
            }
        } else {

