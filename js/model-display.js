document.addEventListener('DOMContentLoaded', () => {
    const modelsContainer = document.getElementById('models-container');
    const modelDetails = document.getElementById('model-details');
    
    // Display all models in grid
    function displayModelsGrid() {
        modelsContainer.innerHTML = models.map(model => `
            <div class="model-card">
                <img src="${model.mainImage}" alt="${model.name}">
                <h2>${model.name}</h2>
                <p>${model.description}</p>
                <button class="details-button" onclick="showModelDetails('${model.id}')">Подробнее</button>
            </div>
        `).join('');
    }

    // Display specific model details
    window.showModelDetails = (modelId) => {
        const model = models.find(m => m.id === modelId);
        if (!model) return;

        modelsContainer.style.display = 'none';
        modelDetails.style.display = 'block';
        
        modelDetails.innerHTML = `
            <div class="model-hero">
                <img src="${model.mainImage}" alt="${model.name}" class="hero-image">
                <h1>${model.name}</h1>
            </div>

            ${model.colorOptions ? `
                <section class="color-options">
                    <h2>Выберите цвет:</h2>
                    <div class="color-grid">
                        ${model.colorOptions.map(color => `
                            <div class="color-option">
                                <img src="${color.image}" alt="${color.color}" 
                                     onclick="updateMainImage('${color.image}')">
                            </div>
                        `).join('')}
                    </div>
                </section>
            ` : ''}

            <section class="model-description">
                <p>${model.description}</p>
            </section>

            ${model.interiorImages ? `
                <section class="interior">
                    <h2>Салон:</h2>
                    <div class="interior-grid">
                        ${model.interiorImages.map(img => `
                            <div class="interior-image">
                                <img src="${img}" alt="Интерьер ${model.name}">
                            </div>
                        `).join('')}
                    </div>
                </section>
            ` : ''}

            ${model.price ? `
                <div class="price-section">
                    <p class="price">${model.price}</p>
                    <button class="buy-button">Купить</button>
                </div>
            ` : ''}

            <button class="back-button" onclick="showModelsGrid()">Назад к моделям</button>
        `;
    };

    // Update main image when color is selected
    window.updateMainImage = (imageSrc) => {
        const heroImage = document.querySelector('.model-hero img');
        if (heroImage) {
            heroImage.src = imageSrc;
        }
    };

    // Show all models grid
    window.showModelsGrid = () => {
        modelDetails.style.display = 'none';
        modelsContainer.style.display = 'grid';
        displayModelsGrid();
    };

    // Initial display
    displayModelsGrid();
});
