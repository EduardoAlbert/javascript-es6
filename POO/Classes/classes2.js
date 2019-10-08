class Smartphone {
     constructor(marca, 
        modelo, 
        memoriaArmazenamento, 
        chip, 
        versaoAndroid,
        tela,
        ghz,
        processador,
        conexao,
        camera,
        cor) {
            this.marca = marca
            this.modelo = modelo
            this.memoriaArmazenamento = memoriaArmazenamento
            this.chip = chip
            this.versaoAndroid = versaoAndroid
            this.tela = tela
            this.ghz = ghz
            this.processador = processador
            this.conexao = conexao
            this.camera = camera
            this.cor = cor
        }

}

const MotoG7PEE = new Smartphone(
    marca = 'Motorola', 
    modelo = 'Moto G7 Play Edição Especial',
    memoriaArmazenamento = '32GB', 
    chip = 'Dual Chip', 
    versaoAndroid = 'Android Pie - 9.0',
    tela = 'Tela 5.7',
    ghz = '1.8 Ghz',
    processador = 'Octa-Core',
    conexao = '4G',
    camera = 'Câmera 13MP',
    cor = 'Índigo'
);

const GalaxyM10 = new Smartphone(
    marca = 'Samsung',
    modelo = 'Galaxy M10',
    memoriaArmazenamento = '32GB',
    chip = 'Dual Chip',
    versaoAndroid = 'Android 9.0',
    tela = 'Tela 6,2',
    ghz = '',
    processador = 'Octa-Core',
    conexao = '4G',
    camera = 'Câmera 13+5MP',
    cor = 'Azul'

);

console.log(`Smartphone ${MotoG7PEE.marca} | Modelo: ${MotoG7PEE.modelo} | Memória: ${MotoG7PEE.memoriaArmazenamento}`)
console.log(`Smartphone ${GalaxyM10.marca} | Modelo: ${GalaxyM10.modelo} | Memória: ${GalaxyM10.memoriaArmazenamento}`)
