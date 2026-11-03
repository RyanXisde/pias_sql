// ==========================================
// 1. ESTADO GLOBAL E VARIÁVEIS
// ==========================================
let produtos = []; // Será preenchido com dados simulados do SQL

let estado = {
    telaAtual: 'home',
    categoriaFiltro: 'todos',
    termoBusca: '',
    produtoModalId: null,
    descontoPercentual: 0,
    freteValor: 0
};

// ==========================================
// DADOS SIMULADOS DO BANCO DE DADOS SQL
// (Substitui a leitura do 'produtos.json')
// ==========================================
const produtosSimuladosSQL = [
    // Baseado no JSON que você forneceu no início
    { id: 1, nome: 'Caneca Luppyvara e Capizoro', preco: 39.9, precoOriginal: 49.9, imagem: 'imagens/caneca.cappiece.webp', categoria: 'canecas', estoque: 5, destaque: true },
    { id: 2, nome: 'Caneca Gengar Pokemon', preco: 54.6, precoOriginal: null, imagem: 'imagens/pokemon.png', categoria: 'canecas', estoque: 5, destaque: false },
    { id: 3, nome: 'Caneca Vegeta', preco: 59.95, precoOriginal: null, imagem: 'imagens/caneca_vegeta.jpeg', categoria: 'canecas', estoque: 5, destaque: false },
    { id: 4, nome: 'Caneca Baby Yoda', preco: 16.99, precoOriginal: 22.23, imagem: 'imagens/babycoffee.jpeg', categoria: 'canecas', estoque: 5, destaque: true },
    { id: 5, nome: 'Action Figure Roger', preco: 199.9, precoOriginal: null, imagem: 'imagens/roger.png', categoria: 'ac', estoque: 5, destaque: false },
    { id: 6, nome: 'Action Figure Sukuna Era Heian', preco: 98.95, precoOriginal: 103.19, imagem: 'imagens/sukuna era hein.webp', categoria: 'ac', estoque: 5, destaque: true },
    { id: 7, nome: 'Action Figure Nefetpitou', preco: 216.7, precoOriginal: null, imagem: 'imagens/nefetpitou.jfif.jpeg', categoria: 'ac', estoque: 5, destaque: false },
    { id: 8, nome: 'Action Figure Irmão do Jorel', preco: 99.99, precoOriginal: null, imagem: 'imagens/Jorel.jpg', categoria: 'ac', estoque: 5, destaque: false },
    { id: 9, nome: 'Cosplay Tanjiro Demon Slayer', preco: 415.84, precoOriginal: null, imagem: 'imagens/imagem.png', categoria: 'roupas', estoque: 5, destaque: false },
    { id: 10, nome: 'Cosplay Frieren', preco: 224.05, precoOriginal: null, imagem: 'imagens/frieren cosplay.jpeg', categoria: 'roupas', estoque: 5, destaque: false },
    { id: 11, nome: 'Cosplay Spy X Family Anya', preco: 201.5, precoOriginal: 314.9, imagem: 'imagens/anya-cosplay.webp', categoria: 'roupas', estoque: 5, destaque: true },
    { id: 12, nome: 'Manto da Akatsuki', preco: 199.99, precoOriginal: null, imagem: 'imagens/akatsuki.webp', categoria: 'roupas', estoque: 5, destaque: false },
    { id: 13, nome: 'Quadro Luffy', preco: 40.99, precoOriginal: null, imagem: 'imagens/quadro.luffy.jpeg', categoria: 'quadros', estoque: 5, destaque: false },
    { id: 14, nome: 'Quadro Escanor', preco: 99.18, precoOriginal: null, imagem: 'imagens/Escanor.jpeg', categoria: 'quadros', estoque: 5, destaque: false },
    { id: 15, nome: 'Demon Slayer Mangá Vol. 1', preco: 34.9, precoOriginal: null, imagem: 'imagens/demon-slayer.jpeg', categoria: 'mangas', estoque: 5, destaque: false },
    { id: 16, nome: 'Jujutsu Kaisen Mangá Vol. 1', preco: 22.55, precoOriginal: 27.9, imagem: 'imagens/Jujutsu Kaisen vol 1.jpeg', categoria: 'mangas', estoque: 5, destaque: true },
    { id: 17, nome: 'Re:Zero Vol. 1', preco: 42.9, precoOriginal: null, imagem: 'imagens/re_zero.jpeg', categoria: 'ln', estoque: 5, destaque: false },
    { id: 18, nome: 'Aventuras Marvel #1', preco: 9.9, precoOriginal: null, imagem: 'imagens/miranha.webp', categoria: 'hq', estoque: 5, destaque: false },
    { id: 19, nome: 'Super Smash Bros', preco: 367.03, precoOriginal: null, imagem: 'imagens/ssb.jpeg', categoria: 'games', estoque: 5, destaque: false },
    { id: 20, nome: 'Quadro Jojo', preco: 30.0, precoOriginal: 49.9, imagem: 'imagens/Jojo.jpeg', categoria: 'quadros', estoque: 5, destaque: true },
    { id: 21, nome: 'Funko Pop James Minions', preco: 115.1, precoOriginal: null, imagem: 'imagens/minions.webp', categoria: 'colecionaveis', estoque: 5, destaque: false },
    { id: 22, nome: 'Quadro Berserk', preco: 49.9, precoOriginal: null, imagem: 'imagens/berserk.jpeg', categoria: 'quadros', estoque: 5, destaque: false },
    { id: 23, nome: 'Hunter X Hunter Vol. 1', preco: 71.68, precoOriginal: null, imagem: 'imagens/hunter x hunter.jpeg', categoria: 'mangas', estoque: 5, destaque: false },
    { id: 24, nome: 'Blue Lock Vol. 1', preco: 32.9, precoOriginal: 43.9, imagem: 'imagens/bluelock.jpg', categoria: 'mangas', estoque: 5, destaque: true },
    { id: 25, nome: 'Diarios de uma Apotecária Vol. 1', preco: 73.69, precoOriginal: null, imagem: 'imagens/DA.jpg', categoria: 'ln', estoque: 5, destaque: false },
    { id: 26, nome: 'Eighty Six Vol. 1', preco: 41.26, precoOriginal: null, imagem: 'imagens/Eighty Six.jpg', categoria: 'ln', estoque: 5, destaque: false },
    { id: 27, nome: 'Lycoris Recoil: Ordinary Days Vol. 1', preco: 25.95, precoOriginal: null, imagem: 'imagens/lycorisnovel.webp', categoria: 'ln', estoque: 5, destaque: false },
    { id: 28, nome: 'Superman/Batman: DC Compact Comics Edition', preco: 59.99, precoOriginal: 67.93, imagem: 'imagens/Superman e Batman.jpg', categoria: 'hq', estoque: 5, destaque: true },
    { id: 29, nome: 'CoreKeeper', preco: 189.97, precoOriginal: null, imagem: 'imagens/corekeeper.jfif', categoria: 'games', estoque: 5, destaque: false },
    { id: 30, nome: 'The Boys Vol. 1: O Nome do Jogo', preco: 80.0, precoOriginal: null, imagem: 'imagens/theboys.jpg', categoria: 'hq', estoque: 5, destaque: false },
    { id: 31, nome: 'Sonic Frontiers', preco: 93.8, precoOriginal: 100.36, imagem: 'imagens/Sonic.jpeg', categoria: 'games', estoque: 5, destaque: true },
    { id: 32, nome: 'Mortal Kombat 1', preco: 217.79, precoOriginal: null, imagem: 'imagens/mk1.jpg', categoria: 'games', estoque: 5, destaque: false },
    { id: 33, nome: 'Street Fighter 6', preco: 249.0, precoOriginal: 349.0, imagem: 'imagens/streetfighter6.webp', categoria: 'games', estoque: 5, destaque: true },
    { id: 34, nome: 'Chapéu do Luffy', preco: 59.9, precoOriginal: null, imagem: 'imagens/chapeu do luffy.jpeg', categoria: 'colecionaveis', estoque: 5, destaque: false },
    { id: 35, nome: 'Máscara Sally Face', preco: 80.75, precoOriginal: null, imagem: 'imagens/sallyface.jpeg', categoria: 'colecionaveis', estoque: 5, destaque: false },
    { id: 36, nome: '3 Chaveiros de God Of War', preco: 150.0, precoOriginal: 200.0, imagem: 'imagens/chaveirogodofwar.jpg', categoria: 'colecionaveis', estoque: 5, destaque: true },
    { id: 37, nome: 'Batman X Fortnite Vol. 1', preco: 9.9, precoOriginal: null, imagem: 'imagens/dc-e-fort1.jpeg', categoria: 'hq', estoque: 5, destaque: false },
    { id: 38, nome: 'Batman X Fortnite Vol. 2', preco: 9.9, precoOriginal: null, imagem: 'imagens/dc-e-fort2.jpeg', categoria: 'hq', estoque: 5, destaque: false },
    { id: 39, nome: 'Batman X Fortnite Vol. 3', preco: 9.9, precoOriginal: null, imagem: 'imagens/dc-e-fort3.jpeg', categoria: 'hq', estoque: 5, destaque: false },
    { id: 40, nome: 'Batman X Fortnite Vol. 4', preco: 9.9, precoOriginal: null, imagem: 'imagens/dc-e-fort4.jpeg', categoria: 'hq', estoque: 5, destaque: false },
    { id: 41, nome: 'Batman X Fortnite Vol. 5', preco: 9.9, precoOriginal: null, imagem: 'imagens/dc-e-fort5.jpeg', categoria: 'hq', estoque: 5, destaque: false },
    { id: 42, nome: 'Batman X Fortnite Vol. 6', preco: 9.9, precoOriginal: null, imagem: 'imagens/dc-e-fort6.avif', categoria: 'hq', estoque: 5, destaque: false },
    { id: 43, nome: 'Marvel X Fortnite: Guerra do Ponto Zero Vol. 1', preco: 14.9, precoOriginal: null, imagem: 'imagens/mrl-e-fort1.jpeg', categoria: 'hq', estoque: 5, destaque: false },
    { id: 44, nome: 'Marvel X Fortnite: Guerra do Ponto Zero Vol. 2', preco: 14.9, precoOriginal: null, imagem: 'imagens/mrl-e-fort2.jpeg', categoria: 'hq', estoque: 5, destaque: false },
    { id: 45, nome: 'Marvel X Fortnite: Guerra do Ponto Zero Vol. 3', preco: 14.9, precoOriginal: null, imagem: 'imagens/mrl-e-fort3.jpeg', categoria: 'hq', estoque: 5, destaque: false },
    { id: 46, nome: 'Marvel X Fortnite: Guerra do Ponto Zero Vol. 4', preco: 14.9, precoOriginal: null, imagem: 'imagens/mrl-e-fort4.jpeg', categoria: 'hq', estoque: 5, destaque: false },
    { id: 47, nome: 'Marvel X Fortnite: Guerra do Ponto Zero Vol. 5', preco: 14.9, precoOriginal: null, imagem: 'imagens/mrl-e-fort5.jpeg', categoria: 'hq', estoque: 5, destaque: false },
    { id: 48, nome: 'Quadro de Procurado Chopper', preco: 18.0, precoOriginal: 30.0, imagem: 'imagens/chopper.jpeg', categoria: 'quadros', estoque: 5, destaque: true },
    { id: 49, nome: 'Caneca de Death Note', preco: 35.99, precoOriginal: null, imagem: 'imagens/deathnote.webp', categoria: 'canecas', estoque: 5, destaque: false },
    { id: 50, nome: 'Action Figure do Monkey D. Luffy', preco: 327.5, precoOriginal: 368.11, imagem: 'imagens/acLuffy.webp', categoria: 'ac', estoque: 5, destaque: true },
    { id: 51, nome: 'Manga de Attack On Titan', preco: 49.0, precoOriginal: null, imagem: 'imagens/attk.jpg', categoria: 'mangas', estoque: 5, destaque: false },
    { id: 52, nome: 'Caneca de Maomao', preco: 50.0, precoOriginal: null, imagem: 'imagens/c_maomao.png.jpg', categoria: 'canecas', estoque: 5, destaque: false },
    { id: 53, nome: 'Action Figure Toji Fushiguro', preco: 350.0, precoOriginal: null, imagem: 'imagens/ac_toji.png.jpg', categoria: 'ac', estoque: 5, destaque: false },
    { id: 54, nome: 'Superman vs Homem Aranha HQ', preco: 60.0, precoOriginal: null, imagem: 'imagens/hq_ha_vs_sm.png.jpg', categoria: 'hq', estoque: 5, destaque: false },
    { id: 55, nome: 'Quadro Spy Family', preco: 25.0, precoOriginal: null, imagem: 'imagens/spy_family_q.png.jfif', categoria: 'quadros', estoque: 5, destaque: false },
    { id: 56, nome: 'Pokebola 3D', preco: 65.0, precoOriginal: null, imagem: 'imagens/poke_fita.png', categoria: 'colecionaveis', estoque: 5, destaque: true },
    { id: 57, nome: 'Invencível #1: Negócios de Família', preco: 19.9, precoOriginal: null, imagem: 'imagens/invencible.jpeg', categoria: 'hq', estoque: 5, destaque: false },
    { id: 58, nome: 'Beastars, Vol. 1', preco: 77.98, precoOriginal: null, imagem: 'imagens/beastars.jfif', categoria: 'mangas', estoque: 5, destaque: true },
    { id: 59, nome: 'Amor Invisível Sob o Céu Noturno Vol. 1', preco: 42.9, precoOriginal: null, imagem: 'imagens/AISCN.jfif', categoria: 'ln', estoque: 5, destaque: false },
    { id: 60, nome: 'Date a Live Vol. 1', preco: 46.0, precoOriginal: null, imagem: 'imagens/DAL.jfif', categoria: 'ln', estoque: 5, destaque: false },
    { id: 61, nome: 'Stardew Valley', preco: 279.90, precoOriginal: null, imagem: 'imagens/Stardew-valley.jfif', categoria: 'games', estoque: 5, destaque: false },
    { id: 62, nome: 'Pingente de Sereia do Stardew Valley', preco: 15.0, precoOriginal: null, imagem: 'imagens/pingentesereia.jfif', categoria: 'colecionaveis', estoque: 5, destaque: false },
    { id: 63, nome: 'Fursuits traje completo', preco: 11973.99, precoOriginal: null, imagem: 'imagens/fursuit.jpg', categoria: 'roupas', estoque: 5, destaque: false },
    { id: 64, nome: 'Miku Cosplay', preco: 732.90, precoOriginal: null, imagem: 'imagens/miku.jfif', categoria: 'roupas', estoque: 5, destaque: false },
    { id: 65, nome: 'ChainSmoker Cat', preco: 50.15, precoOriginal: null, imagem: 'imagens/gatafumante.jfif', categoria: 'mangas', estoque: 5, destaque: false },
    { id: 66, nome: 'Hellboy Omnibus Vol. 1: Seed of Destruction', preco: 189.90, precoOriginal: null, imagem: 'imagens/hellboy.jfif', categoria: 'hq', estoque: 5, destaque: false },
    { id: 67, nome: 'Marvel Guerra Civil Vol. 1', preco: 142.50, precoOriginal: null, imagem: 'imagens/guerracivil.jfif', categoria: 'hq', estoque: 5, destaque: false },
    { id: 68, nome: 'Deadpool Vol. 1', preco: 14.90, precoOriginal: null, imagem: 'imagens/deadpool.webp', categoria: 'hq', estoque: 5, destaque: false },
    { id: 69, nome: 'Avatar: The High Ground Vol. 1', preco: 87.90, precoOriginal: null, imagem: 'imagens/avatar.jfif', categoria: 'hq', estoque: 5, destaque: false },
    { id: 70, nome: 'Godzilla in Hell Vol. 1', preco: 59.75, precoOriginal: null, imagem: 'imagens/GIH.jpg', categoria: 'hq', estoque: 5, destaque: false },
    { id: 71, nome: 'One Piece Vol. 1', preco: 37.00, precoOriginal: null, imagem: 'imagens/onepiece.jfif', categoria: 'mangas', estoque: 5, destaque: false },
    { id: 72, nome: 'Sense Life Vol. 1', preco: 41.50, precoOriginal: null, imagem: 'imagens/senselife.jfif', categoria: 'mangas', estoque: 5, destaque: false },
    { id: 73, nome: 'Caneca Jotaro vs Dio', preco: 45.00, precoOriginal: null, imagem: 'imagem/jxd.jfif', categoria: 'canecas', estoque: 5, destaque: false },
    { id: 74, nome: 'Caneca Game Boy', preco: 44.00, precoOriginal: null, imagem: 'imagem/GBC.jpg', categoria: 'canecas', estoque: 5, destaque: false },
    { id: 75, nome: 'Action Figure Spawn', preco: 750.00, precoOriginal: null, imagem: 'imagem/Spw.webp', categoria: 'ac', estoque: 5, destaque: false },
    { id: 76, nome: 'Action Figure Demogorgon', preco: 43.00, precoOriginal: null, imagem: 'imagem/Demo.jpg', categoria: 'ac', estoque: 5, destaque: false },
    { id: 77, nome: 'Zero no Tsukaima Vol 1', preco: 30.00, precoOriginal: null, imagem: 'imagem/ZT.jfif', categoria: 'mangas', estoque: 5, destaque: false },
    { id: 78, nome: 'Aprenda a Desenhar Mangá', preco: 40.00, precoOriginal: null, imagem: 'imagem/aadm.jfif', categoria: 'mangas', estoque: 5, destaque: false },
    { id: 79, nome: 'Toon Vol 1', preco: 40.00, precoOriginal: null, imagem: 'imagem/Toon.jfif', categoria: 'mangas', estoque: 5, destaque: false },
    { id: 80, nome: 'Nagatoro Vol 1', preco: 45.00, precoOriginal: null, imagem: 'imagem/nmcn.jfif', categoria: 'mangas', estoque: 5, destaque: false },
    { id: 81, nome: 'Medaka Box Vol 1', preco: 40.00, precoOriginal: null, imagem: 'imagem/mb.jfif', categoria: 'mangas', estoque: 5, destaque: false },
    { id: 82, nome: 'Madoka Magica Vol 1', preco: 60.00, precoOriginal: null, imagem: 'imagem/mm.jfif', categoria: 'mangas', estoque: 5, destaque: false },
    { id: 83, nome: 'Caneca de Porcelana Personalizada Cubo Mágico', preco: 35.99, precoOriginal: null, imagem: 'imagem/canecubo.jfif', categoria: 'canecas', estoque: 5, destaque: false },
    { id: 84, nome: 'Caneca I Love My Nerd', preco: 44.90, precoOriginal: null, imagem: 'imagem/canecamynerd.jpg', categoria: 'canecas', estoque: 5, destaque: false },
    { id: 85, nome: 'Figura de Ação Eva 01', preco: 350.00, precoOriginal: null, imagem: 'imagem/ev01.jfif', categoria: 'ac', estoque: 5, destaque: false },
    { id: 86, nome: 'Figura de Ação Sanji', preco: 85.00, precoOriginal: null, imagem: 'imagem/vs.webp', categoria: 'ac', estoque: 5, destaque: false },
    { id: 87, nome: 'Figura de Ação Zorão Sem Camisa', preco: 45.00, precoOriginal: null, imagem: 'imagem/rz.jpg', categoria: 'ac', estoque: 5, destaque: false },
    { id: 88, nome: 'Figura de Ação Nezuko Kamado', preco: 890.00, precoOriginal: null, imagem: 'imagem/nk.webp', categoria: 'ac', estoque: 5, destaque: false },
    { id: 89, nome: 'Figura de Ação Gogeta Super Saiyajin 4', preco: 400.00, precoOriginal: null, imagem: 'imagem/gssj4.jfif', categoria: 'ac', estoque: 5, destaque: false },
    { id: 90, nome: 'Actiion Figure Satoru Gojo', preco: 285.60, precoOriginal: null, imagem: 'imagem/gojo.webp', categoria: 'ac', estoque: 5, destaque: false },
    { id: 91, nome: 'Action Figure Kratos e Atreus - God Of War', preco: 299.90, precoOriginal: null, imagem: 'imagem/bomdegurra.webp', categoria: 'ac', estoque: 5, destaque: false },
    { id: 92, nome: 'Quadro Pantera Cor de Rosa', preco: 180.90, precoOriginal: null, imagem: 'imagem/pcdr.webp', categoria: 'quadros', estoque: 5, destaque: false },
    { id: 93, nome: 'Quadro Homer Simpson', preco: 60.00, precoOriginal: null, imagem: 'imagem/qrs.jpg', categoria: 'quadros', estoque: 5, destaque: false },
    { id: 94, nome: 'Quadros Star Wars', preco: 299.90, precoOriginal: null, imagem: 'imagem/sw.jfif', categoria: 'quadros', estoque: 5, destaque: false },
    { id: 95, nome: 'Quadros Irmãos Mario', preco: 299.90, precoOriginal: null, imagem: 'imagem/im.jfif', categoria: 'quadros', estoque: 5, destaque: false },
    { id: 96, nome: 'Classroom of the Elite - Vol. 1', preco: 39.90, precoOriginal: null, imagem: 'imagem/cote.jpg', categoria: 'ln', estoque: 5, destaque: false },
    { id: 97, nome: 'No Game, No Life - Vol. 1', preco: 746.70, precoOriginal: null, imagem: 'imagem/ngnf.jpg', categoria: 'ln', estoque: 5, destaque: false },
    { id: 98, nome: 'Mushoku Tensei: Jobless Reicarnation - Vol. 1', preco: 74.71, precoOriginal: null, imagem: 'imagem/MTJR.jpg', categoria: 'ln', estoque: 5, destaque: false },
    { id: 99, nome: 'Berserk Of Gluttony - Vol. 1', preco: 71.05, precoOriginal: null, imagem: 'imagem/bog.webp', categoria: 'ln', estoque: 5, destaque: false },
    { id: 100, nome: 'God of War 2018', preco: 120.00, precoOriginal: null, imagem: 'imagem/gow4.webp', categoria: 'games', estoque: 5, destaque: false }
];

// ==========================================
// ÍCONES PERSONALIZADOS (SVG)
// ==========================================
function getIconeUsuarioHTML(tipo = 'circulo') {
    const estilotransform = tipo === 'circulo' ? 'border-radius: 50%;' : tipo === 'quadrado' ? 'border-radius: 6px;' : '';
    const bg = tipo === 'outline' ? 'background: transparent; border: 1px solid #6c5ce7;' : 'background: #6c5ce7;';

    return `
        <span class="icone-box" style="display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px; ${bg} ${estilotransform} vertical-align: middle; margin-right: 4px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
        </span>
    `;
}

function getIconeConfigHTML(tipo = 'circulo') {
    const estilotransform = tipo === 'circulo' ? 'border-radius: 50%;' : tipo === 'quadrado' ? 'border-radius: 6px;' : '';
    const bg = tipo === 'outline' ? 'background: transparent; border: 1px solid #3f4265;' : 'background: #2a2d4a;';

    return `
        <span class="icone-box" style="display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px; ${bg} ${estilotransform} vertical-align: middle; margin-right: 6px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
        </span>
    `;
}

// ==========================================
// DICIONÁRIOS E MAPEAMENTOS
// ==========================================
const logosCategorias = {
    'todos': 'imagens/logo-descontos-e-promos.png',
    'promocoes': 'imagens/logo-inicio.png',
    'canecas': 'imagens/logo-canecas.png',
    'ac': 'imagens/logo-ac.png',
    'quadros': 'imagens/logo-quadros.png',
    'mangas': 'imagens/logo-manga.png',
    'ln': 'imagens/logo-ln.png',
    'hq': 'imagens/logo-quadrinhos.png',
    'games': 'imagens/logo-games.png',
    'colecionaveis': 'imagens/logo-colecionaveis.png',
    'roupas': 'imagens/logo-roupas.png',
    'favoritos': 'imagens/logo-fav-chad.png'
};

const nomesCategorias = {
    'promocoes': 'Promoções & Descontos',
    'canecas': 'Caneca Geek',
    'ac': 'Action Figure',
    'roupas': 'Vestuário / Cosplay',
    'quadros': 'Quadro / Decorativo',
    'mangas': 'Mangá',
    'ln': 'Light Novel',
    'hq': 'História em Quadrinhos',
    'games': 'Jogo / Video Game',
    'colecionaveis': 'Item Colecionável',
    'favoritos': 'Favoritos'
};

function atualizarLogoHeader() {
    const logoImg = document.querySelector('#logoLink img');
    if (logoImg) {
        const catAtiva = estado.telaAtual === 'home' ? estado.categoriaFiltro : 'todos';
        const caminhoLogo = logosCategorias[catAtiva] || logosCategorias['todos'];

        logoImg.src = caminhoLogo;
        logoImg.alt = `Logo ${catAtiva}`;
    }
}

// ==========================================
// 2. CARREGA PRODUTOS DO BANCO DE DADOS (SIMULAÇÃO)
// ==========================================
async function carregarProdutos() {
    // Em um ambiente real, aqui você faria uma chamada fetch para um backend
    // que consulta o banco de dados SQL.
    // Para esta simulação, apenas usamos os dados diretamente.
    produtos = produtosSimuladosSQL;
    console.log("Produtos carregados (simulação SQL):", produtos);
    render();
}

// ==========================================
// 3. GERENCIAMENTO DE USUÁRIO (LOCALSTORAGE)
// ==========================================
function getUsuarioLogado() {
    return JSON.parse(localStorage.getItem("usuario_hub")) || null;
}

function salvarUsuario(usuario) {
    localStorage.setItem("usuario_hub", JSON.stringify(usuario));
    atualizarUIHeader();
}

function fazerLogout() {
    localStorage.removeItem("usuario_hub");
    alert("Você foi desconectado.");
    atualizarUIHeader();
    navegaPara('home');
}

function atualizarUIHeader() {
    const btnCadastro = document.getElementById("btnIrCadastro");
    const btnConfig = document.getElementById("btnIrConfig");
    const usuario = getUsuarioLogado();

    const FORMA_ICONE = 'circulo'; // Opções: 'circulo', 'quadrado', 'outline'

    if (btnCadastro) {
        if (usuario) {
            const primeiroNome = usuario.nome.split(' ')[0];
            btnCadastro.innerHTML = `${getIconeUsuarioHTML(FORMA_ICONE)} <span>${primeiroNome}</span>`;
            btnCadastro.title = `Conectado como ${usuario.nome}`;
        } else {
            btnCadastro.innerHTML = `${getIconeUsuarioHTML(FORMA_ICONE)} <span>Entrar</span>`;
            btnCadastro.title = "Cadastro / Login";
        }
    }

    if (btnConfig) {
        btnConfig.innerHTML = getIconeConfigHTML(FORMA_ICONE);
        btnConfig.title = "Configurações";
    }
}

// ==========================================
// 3.1 GERENCIAMENTO E RASTREAMENTO DE PEDIDOS
// ==========================================
function getPedidos() {
    return JSON.parse(localStorage.getItem("pedidos_hub")) || [];
}

function salvarPedido(novoPedido) {
    const pedidos = getPedidos();
    pedidos.unshift(novoPedido);
    localStorage.setItem("pedidos_hub", JSON.stringify(pedidos));
}

function getPedidosUsuarioAtual() {
    const usuario = getUsuarioLogado();
    if (!usuario) return [];
    const todosPedidos = getPedidos();
    return todosPedidos.filter(p => p.usuarioEmail === usuario.email);
}

function renderLinhaTempoRastreamentoHTML(pedido) {
    const etapas = [
        { id: 1, label: 'Pedido Recebido', icone: '📝' },
        { id: 2, label: 'Pagamento Aprovado', icone: '💳' },
        { id: 3, label: 'Em Separação', icone: '📦' },
        { id: 4, label: 'Em Trânsito', icone: '🚚' },
        { id: 5, label: 'Entregue', icone: '🏠' }
    ];

    const etapaAtual = pedido.statusEtapa || 2; // Padrão para 'Pagamento Aprovado'

    return `
        <div style="margin-top: 15px; padding: 15px; background: #141526; border-radius: 8px; border: 1px solid #2a2d4a;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; font-size: 0.85rem; color: #a0a3c4; flex-wrap: wrap; gap: 8px;">
                <span>Rastreio: <strong style="color: #6c5ce7;">${pedido.codigoRastreio || 'N/A'}</strong></span>
                <span>Status: <strong style="color: #00e676;">${etapas.find(e => e.id === etapaAtual)?.label}</strong></span>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; position: relative; gap: 4px;">
                ${etapas.map(etapa => {
                    const concluida = etapa.id <= etapaAtual;
                    return `
                        <div style="display: flex; flex-direction: column; align-items: center; flex: 1; text-align: center;">
                            <div style="width: 32px; height: 32px; border-radius: 50%; background: ${concluida ? '#6c5ce7' : '#1e2038'}; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; margin-bottom: 4px; border: 2px solid ${concluida ? '#00e676' : '#3f4265'};">
                                ${etapa.icone}
                            </div>
                            <span style="font-size: 0.7rem; color: ${concluida ? '#fff' : '#6b7280'}; font-weight: ${concluida ? 'bold' : 'normal'};">${etapa.label}</span>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

// ==========================================
// 4. GERENCIAMENTO DO CARRINHO (LOCALSTORAGE)
// ==========================================
function getCarrinho() {
    return JSON.parse(localStorage.getItem("carrinho_hub")) || [];
}

function salvarCarrinho(carrinho) {
    localStorage.setItem("carrinho_hub", JSON.stringify(carrinho));
    atualizarBadge();
}

function atualizarBadge() {
    const badge = document.getElementById("cartCountBadge");
    if (badge) {
        const carrinho = getCarrinho();
        const total = carrinho.reduce((acc, item) => acc + item.qtd, 0);
        badge.textContent = total;
    }
}

// ==========================================
// 5. GERENCIAMENTO DE FAVORITOS (LOCALSTORAGE)
// ==========================================
function getFavoritos() {
    return JSON.parse(localStorage.getItem("favoritos_hub")) || [];
}

function salvarFavoritos(favoritos) {
    localStorage.setItem("favoritos_hub", JSON.stringify(favoritos));
}

function toggleFavorito(id) {
    let favoritos = getFavoritos();
    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(favId => favId !== id);
    } else {
        favoritos.push(id);
    }
    salvarFavoritos(favoritos);
    render();
}

// ==========================================
// 5.1 GERENCIAMENTO DE AVALIAÇÕES (LOCALSTORAGE)
// ==========================================
function getAvaliacoes() {
    return JSON.parse(localStorage.getItem("avaliacoes_hub")) || {};
}

function salvarAvaliacoes(avaliacoes) {
    localStorage.setItem("avaliacoes_hub", JSON.stringify(avaliacoes));
}

function adicionarAvaliacao(produtoId, nota, comentario) {
    const usuario = getUsuarioLogado();
    const nomeAutor = usuario ? usuario.nome : "Anônimo";

    const avaliacoes = getAvaliacoes();
    if (!avaliacoes[produtoId]) {
        avaliacoes[produtoId] = [];
    }

    avaliacoes[produtoId].push({
        autor: nomeAutor,
        nota: Number(nota),
        comentario: comentario.trim(),
        data: new Date().toLocaleDateString('pt-BR')
    });

    salvarAvaliacoes(avaliacoes);
    render();
}

function getResumoAvaliacoes(produtoId) {
    const avaliacoes = getAvaliacoes()[produtoId] || [];
    if (avaliacoes.length === 0) return { media: 0, total: 
