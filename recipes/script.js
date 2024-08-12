const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アカサタナハマヤラワガザダバパイキシチニヒミリヰギジヂビピウクスツヌフムユルグズヅブプエケセテネヘメレヱゲゼデベペオコソトノホモヨロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontSize = 10; // Tamaño de fuente más pequeño
const columns = canvas.width / fontSize;

const rainDrops = [];

for(let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
}

const draw = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Dejar las letras un poco más visibles
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00FF00'; // Color de las letras (verde neón)
    ctx.font = fontSize + 'px monospace';

    for(let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if(rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }

        rainDrops[i]++;
    }
};

setInterval(draw, 30);
