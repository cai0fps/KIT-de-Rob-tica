/**
 * Patch de Atualização de Interface (UI)
 * Injeta a Splash Screen e a Marca de Água dinamicamente, mantendo o núcleo do Mixly limpo.
 */
window.addEventListener('DOMContentLoaded', function() {
    // 1. Criar e injetar a Marca de Água
    var watermark = document.createElement('div');
    watermark.id = 'watermark-caio';
    watermark.innerHTML = '@caiofps_';
    document.body.appendChild(watermark);

    // 2. Criar e injetar a Splash Screen (Ecrã de Carregamento)
    var splash = document.createElement('div');
    splash.id = 'splash-screen';
    splash.innerHTML = `
        <div class="splash-content">
            <div class="splash-title">IDE Robótica</div>
            <div class="splash-subtitle">A carregar o ambiente de programação...</div>
            <div class="loader-spinner"></div>
            <div class="splash-watermark">@caiofps_</div>
        </div>
    `;
    document.body.appendChild(splash);

    // 3. Sincronizar o fim da Splash Screen com o carregamento real (1.5s)
    setTimeout(function() {
        splash.classList.add('splash-fade-out');
        
        // Remover do DOM permanentemente após o fade-out
        setTimeout(function() {
            if (splash.parentNode) {
                splash.parentNode.removeChild(splash);
            }
        }, 600);
    }, 1500);
});
