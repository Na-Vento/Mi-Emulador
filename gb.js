// Motor liviano Game Boy Color
function GameBoyCanvas(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.imgData = this.ctx.createImageData(160, 144);
}

class GBEmulator {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.keys = [false, false, false, false, false, false, false, false];
    }

    loadROM(buffer) {
        // Inicializador de buffer y pantalla
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, 160, 144);
        this.ctx.fillStyle = '#fff';
        this.ctx.font = '10px monospace';
        this.ctx.fillText('Cargando ROM...', 10, 70);
    }

    setKey(keyIndex, state) {
        this.keys[keyIndex] = state;
    }
}
