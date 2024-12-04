const canvas = document.getElementById("tela");
var ctx = canvas.getContext("2d");

var botoesimg = document.getElementById("botoes");
var botaoinfo = document.getElementById("info");
var botao = false;
botaoinfo.addEventListener("mouseover", function() {
    botao = true;
});
botaoinfo.addEventListener("mouseout", function() {
    botao = false;
});

const musica = document.getElementById("au1");
const tres = document.getElementById("au2");
const pulo2 = document.getElementById("au3");
const soco2 = document.getElementById("au4");
const pulo1 = document.getElementById("au5");
const soco1 = document.getElementById("au6");
const win1 = document.getElementById("au7");
const win2 = document.getElementById("au8");
const comecar = document.getElementById("comecar");
const denovo = document.getElementById("denovo");

const img1 = new Image()
img1.src = "img/per1/ipr.png"

const img2 = new Image()
img2.src = "img/per2/gil.png"

const fundo1 = new Image()
fundo1.src = "img/Cimol.png"

canvas.width = 1024
canvas.height = 576

ctx.fillRect(0, 0, canvas.width, canvas.height)



var qframe1 = 2;
var frame1 = 0;
var sprite1 = 1;
var tempoframe1 = Date.now();

var qframe2 = 2;
var frame2 = 0;
var sprite2 = 1;
var tempoframe2 = Date.now();

const perso1 = {
    win : false,
    varia : 115,
    ssx : 0, 
    ssy : 0,
    ssw : 640,
    ssh : 320,
    sdw : 320,
    sdh : 160,
    dx : 120,
    dy : 368,
    dw : 100,
    dh : 160,
    lastKey : "",
    dxvelo : 0,
    pulo : 8,
    puloa : false,
    velocidade : 0,
    gravidade : 0.25,
    akey : "b",
    ataq : {
        adx : 0,
        ady : 0,
        adw : 60,
        adh : 20,
        anum : 0,
    },
    atak1(){
        perso1.ataq.adx = perso1.dx + perso1.dw;
        perso1.ataq.ady = perso1.dy + 60;
        ctx.fillStyle = 'rgba(0, 255, 0, 0%)';
        ctx.fillRect(
            perso1.ataq.adx,
            perso1.ataq.ady,
            perso1.ataq.adw,
            perso1.ataq.adh,
        )
        perso1.ataq.anum = 0;
        if (keys.d.pressed == true)
        {
            perso1.dxvelo = 10;
            perso1.varia = 115;
            qframe1 = 3;
            frame1 = 0;
            sprite1 = 0;
            img1.src = "img/per1/ianr.png"
        }
        else
        {
            perso1.dxvelo = 0;
            perso1.varia = 115;
            frame1 = 0;
            qframe1 = 2;
            sprite1 = 0;
            img1.src = "img/per1/ipr.png";
        }
    },
    ataq2 : {
        adx : 0,
        ady : 0,
        adw : 60,
        adh : 20,
        anum : 0,
    },
    atak2(){
        perso1.ataq2.adx = perso1.dx - 60;
        perso1.ataq2.ady = perso1.dy + 60;
        ctx.fillStyle = 'rgba(0, 255, 0, 0%)';
        ctx.fillRect(
            perso1.ataq2.adx,
            perso1.ataq2.ady,
            perso1.ataq2.adw,
            perso1.ataq2.adh,
        )
        perso1.ataq2.anum = 0;
        if (keys.a.pressed == true)
        {
            perso1.dxvelo = -10;
            perso1.varia = 105;
            frame1 = 0;
            qframe1 = 3;
            sprite1 = 0;
            img1.src = "img/per1/ianl.png";
        }
        else
        {
            perso1.dxvelo = 0;
            perso1.varia = 105;
            frame1 = 0;
            qframe1 = 2;
            sprite1 = 0;
            img1.src = "img/per1/ipl.png";
        }
    },
    andar(){
        if (perso1.dx > chao.dx && keys.a.pressed == true && perso1.lastKey === 'a') {
            perso1.dxvelo = -10;
        }
        else if (perso1.dx < chao.dw-100 && keys.d.pressed == true && perso1.lastKey === 'd') {
            perso1.dxvelo = 10;
        } 
    }, 
    pula() {
        perso1.dy = perso1.dy - 10;
        perso1.velocidade = 0 - perso1.pulo;
    },
    atualiza() {
        if(perso1.dy < chao.dy-18-perso1.dh)
        {
            perso1.velocidade = perso1.velocidade + perso1.gravidade;
            perso1.dy = perso1.dy + perso1.velocidade;
        }
        if (perso1.dx <= chao.dx && perso1.dxvelo < 0) {
            perso1.dxvelo = 0;
        }
        else if (perso1.dx >= chao.dw-100 && perso1.dxvelo > 0) {
            perso1.dxvelo = 0;
        } 
        perso1.dx = perso1.dx + perso1.dxvelo;
    },
    hitbox() {
        ctx.fillStyle = "rgba(255, 255, 255, 0%)";
        ctx.fillRect(
            perso1.dx,
            perso1.dy,
            perso1.dw,
            perso1.dh,
        );
        ctx.drawImage(
            img1,
            perso1.ssx + (640 * frame1),
            perso1.ssy,
            perso1.ssw,
            perso1.ssh,
            perso1.dx-perso1.varia,
            perso1.dy,
            perso1.sdw,
            perso1.sdh,
        )
    }
}



const perso2 = {
    win : false,
    varia : 110,
    ssx : 0, 
    ssy : 0,
    ssw : 640,
    ssh : 320,
    sdw : 320,
    sdh : 160,
    dx : 804,
    dy : 368,
    dw : 100,
    dh : 160,
    dxvelo : 0,
    lastKey : "",
    pulo : 8,
    velocidade : 0,
    gravidade : 0.25,
    akey : '2',
    ataq : {
        adx : 0,
        ady : 0,
        adw : 60,
        adh : 20,
        anum : 0,
    },
    atak1(){
        perso2.ataq.adx = perso2.dx - 60;
        perso2.ataq.ady = perso2.dy + 80;
        ctx.fillStyle = 'rgba(0, 255, 0, 0%)';
        ctx.fillRect(
            perso2.ataq.adx,
            perso2.ataq.ady,
            perso2.ataq.adw,
            perso2.ataq.adh,
        )
        perso2.ataq.anum = 0;
        if (keys.ArrowLeft.pressed == true)
        {
            perso2.dxvelo = -10;
            perso2.varia = 110;
            qframe2 = 6;
            frame1 = 0;
            sprite2 = 0;
            img2.src = "img/per2/gal.png";
        }
        else
        {
            perso2.dxvelo = 0;
            perso2.varia = 110;
            frame2 = 0;
            qframe2 = 2;
            sprite2 = 0;
            img2.src = "img/per2/gil.png";
        }
    },
    ataq2 : {
        adx : 0,
        ady : 0,
        adw : 60,
        adh : 20,
        anum : 0,
    },
    atak2(){
        perso2.ataq2.adx = perso2.dx + perso2.dw;
        perso2.ataq2.ady = perso2.dy + 80;
        ctx.fillStyle = 'rgba(0, 255, 0, 0%)';
        ctx.fillRect(
            perso2.ataq2.adx,
            perso2.ataq2.ady,
            perso2.ataq2.adw,
            perso2.ataq2.adh,
        )
        perso2.ataq2.anum = 0;
        if (keys.ArrowRight.pressed == true)
        {
            perso2.dxvelo = 10;
            perso2.varia = 110;
            qframe2 = 6;
            frame1 = 0;
            sprite2 = 0;
            img2.src = "img/per2/gar.png";
        }
        else
        {
            perso2.dxvelo = 0;
            perso2.varia = 110;
            frame2 = 0;
            qframe2 = 2;
            sprite2 = 0;
            img2.src = "img/per2/gir.png";
        }
    },
    andar(){
        if (perso2.dx > chao.dx && keys.ArrowLeft.pressed == true && perso2.lastKey === 'ArrowLeft') {
            perso2.dxvelo = -10;
        }
        else if (perso2.dx < chao.dw-100 && keys.ArrowRight.pressed == true && perso2.lastKey === 'ArrowRight') {
            perso2.dxvelo = 10;
        }
    },
    pula() {
        perso2.dy = perso2.dy - 10;
        perso2.velocidade = 0 - perso2.pulo; 
    },
    atualiza() {
        if(perso2.dy < chao.dy-18-perso2.dh)
        {
            perso2.velocidade = perso2.velocidade + perso2.gravidade;
            perso2.dy = perso2.dy + perso2.velocidade;
        }
        if (perso2.dx <= chao.dx && perso2.dxvelo < 0) {
            perso2.dxvelo = 0;
        }
        else if (perso2.dx >= chao.dw-100 && perso2.dxvelo > 0) {
            perso2.dxvelo = 0;
        }
        perso2.dx = perso2.dx + perso2.dxvelo;
    },
    hitbox() {
        ctx.fillStyle = "rgba(255,255,255,0%)"
        ctx.fillRect(
            perso2.dx,
            perso2.dy,
            perso2.dw,
            perso2.dh,
        );
        ctx.drawImage(
            img2,
            perso2.ssx + (640 * frame2),
            perso2.ssy,
            perso2.ssw,
            perso2.ssh,
            perso2.dx-perso2.varia,
            perso2.dy,
            perso2.sdw,
            perso2.sdh,
        )
    }
}

const chao = {
    dx : 0,
    dy : 546,
    dw : 1024,
    dh : 30,
    desenha() {
        ctx.fillStyle = 'rgba(0, 255, 0, 0)';
        ctx.fillRect(
            chao.dx,
            chao.dy,
            chao.dw,
            chao.dh,
        )
    }
}

const fundo = {
    sx : 0, 
    sy : 0,
    sw : 8160,
    sh : 4590,
    dx : 0,
    dy : 0,
    dw : 1024,
    dh : 576,
    desenha() {
        ctx.drawImage(
            fundo1,
            fundo.sx,
            fundo.sy,
            fundo.sw,
            fundo.sh,
            fundo.dx,
            fundo.dy,
            fundo.dw,
            fundo.dh,
        )
    }
}

const vida1 = {
    dx : 20,
    dy : 20,
    dw : 460,
    dh : 30,
    vdx : 20,
    vdy : 20,
    vdw : 460,
    vdh : 30,
    desenha() {
        ctx.fillStyle = 'rgb(255, 0, 0)';
        ctx.fillRect(
            vida1.vdx,
            vida1.vdy,
            vida1.vdw,
            vida1.vdh,
        )
        ctx.fillStyle = 'rgb(0, 0, 255)';
        ctx.fillRect(
            vida1.dx,
            vida1.dy,
            vida1.dw,
            vida1.dh,
        )
        ctx.strokeStyle = 'rgb(255, 255, 255)';
        ctx.strokeRect(
            vida1.vdx,
            vida1.vdy,
            vida1.vdw,
            vida1.vdh,
        )
    }
}

const vida2 = {
    dx : 544,
    dy : 20,
    dw : 460,
    dh : 30,
    vdx : 544,
    vdy : 20,
    vdw : 460,
    vdh : 30,
    desenha() {
        ctx.fillStyle = 'rgb(255, 0, 0)';
        ctx.fillRect(
            vida2.vdx,
            vida2.vdy,
            vida2.vdw,
            vida2.vdh,
        )
        ctx.fillStyle = 'rgb(0, 0, 255)';
        ctx.fillRect(
            vida2.dx,
            vida2.dy,
            vida2.dw,
            vida2.dh,
        )
        ctx.strokeStyle = 'rgb(255, 255, 255)';
        ctx.strokeRect(
            vida2.vdx,
            vida2.vdy,
            vida2.vdw,
            vida2.vdh,
        )
    }
}

const time = {
    dx : 20,
    dy : 22,
    dw : 984,
    dh : 26,
    vdx : 501,
    vdy : 44,
    desenha() {
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(
            time.dx,
            time.dy,
            time.dw,
            time.dh,
        )
        ctx.strokeStyle = 'rgb(255, 255, 255)';
        ctx.strokeRect(
            time.dx,
            time.dy,
            time.dw,
            time.dh,
        )
        ctx.font = "25px serif";
        ctx.fillStyle = 'rgb(255,255,255)';
        ctx.fillText(numt, time.vdx, time.vdy);
    },
    desenhapre(){
        if (contagem == 4)
        {
            ctx.font = "50px serif";
            ctx.fillStyle = 'rgb(255,255,255)';
            ctx.fillText("3", 500, 200);
        }
        else if (contagem == 3)
        {
            ctx.font = "50px serif";
            ctx.fillStyle = 'rgb(255,255,255)';
            ctx.fillText("2", 500, 200);

        }
        else if (contagem == 2)
        {
            ctx.font = "50px serif";
            ctx.fillStyle = 'rgb(255,255,255)';
            ctx.fillText("1", 500, 200);
        }
        else if (contagem == 1)
        {
            ctx.font = "50px serif";
            ctx.fillStyle = 'rgb(255,255,255)';
            ctx.fillText("F i g h t", 430, 200);
        }
    },
}

comecar.addEventListener("click", () => {   
    prejogo();
    comecar.style.display = "none";
});

denovo.addEventListener("click", () => {  
    denovo.style.display = "none";
    vida1.dw = 460;
    vida2.dw = 460;
    vida2.dx = 544;
    perso1.dx = 120;
    perso2.dx = 804;
    perso1.dy = 368;
    perso2.dy = 368;
    perso1.velocidade = 0;
    perso2.velocidade = 0;
    if (numt < 10)
    {
        time.vdx = time.vdx - 6;
    }
    numt = 40;
    contagem = 5;
    prejogo();
    clearInterval(nums);
    perso1.win = false;
    perso2.win = false;
    perso1.dxvelo = 0;
    perso1.varia = 115;
    frame1 = 0;
    qframe1 = 2;
    sprite1 = 0;
    img1.src = "img/per1/ipr.png";
    perso2.dxvelo = 0;
    perso2.varia = 110;
    frame2 = 0;
    qframe2 = 2;
    sprite2 = 0;
    img2.src = "img/per2/gil.png";
    musica.pause();
    win1.pause();
    win2.pause();
});

var contagem = 5;
var con; 
var numt = 40;
var mums;
var tempoativo = false;
function prejogo (){
    contagem = contagem - 1;
    if (contagem == 4)
    {
        con = setInterval(prejogo,1000);
        tres.play();
    }
    else if (contagem == 1)
    {
        clearInterval(con);
        con = setInterval(prejogo,300);
    }
    else if (contagem == 0)
    {
        tempoativo = true;
        musica.play();
        nums = setInterval(tempo,1000);
    }
    (contagem == 0) ? clearInterval(con) : console.log(contagem);
}

function tempo () {
    numt = numt - 1;
    musica.play();
    if(numt == 9)
    {
        time.vdx = time.vdx + 6;
    }
    if(numt == 0)
    {
        clearInterval(nums);
        tempoativo = false;
        morrer();
        if (vida1.dw == vida2.dw)
        {
            perso1.win = true;
            perso2.win = true;
        }
        else if (vida1.dw > vida2.dw)
        {
            perso1.win = true;
            perso2.win = false;
            perso1.dxvelo = 0;
            perso2.dxvelo = 0;
            if(perso1.akey == 'b')
            {
                perso1.dxvelo = 0;
                perso1.varia = 115;
                frame1 = 0;
                qframe1 = 2;
                sprite1 = 9;
                img1.src = "img/per1/ipur.png";
            }
            if(perso1.akey == 'v')
            {
                perso1.dxvelo = 0;
                perso1.varia = 105;
                qframe1 = 2;
                frame1 = 0;
                sprite1 = 8;
                img1.src = "img/per1/ipul.png"
            }
            perso1.pula();
            win1.play();
        }
        else if (vida1.dw < vida2.dw)
        {
            perso1.win = false;
            perso2.win = true;
            perso1.dxvelo = 0;
            perso2.dxvelo = 0;
            if(perso2.akey == 'p')
            {
                perso2.dxvelo = 0;
                perso2.varia = 110;
                frame2 = 0;
                qframe2 = 4;
                sprite2 = 8;
                img2.src = "img/per2/gvr.png";
            }
            if(perso2.akey == 'o')
            {
                perso2.dxvelo = 0;
                perso2.varia = 110;
                frame2 = 0;
                qframe2 = 4;
                sprite2 = 9;
                img2.src = "img/per2/gvl.png";
            }
            perso2.pula();
            win2.play();
        }
        denovo.style.display = "block";
        fim();
    }
}

function fim () {
    vida1.desenha();
    vida2.desenha();
    if (perso2.win == true && perso1.win == true)
    {
        ctx.font = "45px san-serif";
        ctx.fillStyle = 'rgb(255,255,255)';
        ctx.fillText("E M P A T E !", 380, 200);
    }
    else if (perso2.win == true)
    {
        ctx.font = "45px san-serif";
        ctx.fillStyle = 'rgb(255,255,255)';
        ctx.fillText("P l a y e r  2  G a n h o u !", 282, 200);
        }
    else if (perso1.win == true)
    {
        ctx.font = "45px san-serif";
        ctx.fillStyle = 'rgb(255,255,255)';
        ctx.fillText("P l a y e r  1  G a n h o u !", 282, 200);
    }
}

function morrer() {
    fundo.desenha();
    time.desenha();
    perso1.atualiza();
    perso2.atualiza();
    perso1.hitbox();
    perso2.hitbox();
    fim();
    if (tempoativo == false)
    {
        requestAnimationFrame(morrer);
    }
}

function loop () {
    if (perso1.win != true && perso2.win != true)
    {
        perso1.atualiza();
        perso2.atualiza();
        chao.desenha();
        fundo.desenha();
        time.desenha();
        vida1.desenha();
        vida2.desenha();
        perso1.hitbox();
        perso2.hitbox(); 
        time.desenhapre();
        if (perso1.ataq.anum == 1 && perso1.akey == 'b')
        {
            perso1.atak1();
            if (perso1.ataq.adx <= perso2.dx + perso2.dw && perso1.ataq.adx + perso1.ataq.adw >= perso2.dx
                && perso1.ataq.ady + perso1.ataq.adh >= perso2.dy && perso1.ataq.ady <= perso2.dy + perso2.dh)
            {
                vida2.dw = vida2.dw - (460 / 7);
                vida2.dx = vida2.dx + (460 / 7);
            }
        }
        if (perso1.ataq2.anum == 1 && perso1.akey == 'v')
        {
            perso1.atak2();
            if (perso1.ataq2.adx <= perso2.dx + perso2.dw && perso1.ataq2.adx + perso1.ataq2.adw >= perso2.dx
                && perso1.ataq2.ady + perso1.ataq.adh >= perso2.dy && perso1.ataq2.ady <= perso2.dy + perso2.dh)
            {
                vida2.dw = vida2.dw - (460 / 7);
                vida2.dx = vida2.dx + (460 / 7);
            }
        }
        if (perso2.ataq.anum == 1 && perso2.akey == 'o')
        {
            perso2.atak1();
            if (perso2.ataq.adx < perso1.dx + perso1.dw && perso2.ataq.adx + perso2.ataq.adw >= perso1.dx
                && perso2.ataq.ady + perso1.ataq.adh > perso1.dy && perso2.ataq.ady < perso1.dy + perso1.dh)
            {
                vida1.dw = vida1.dw - (460 / 7);
            }
        }
        if (perso2.ataq2.anum == 1 && perso2.akey == 'p')
        {
            perso2.atak2();
            if (perso2.ataq2.adx < perso1.dx + perso1.dw && perso2.ataq2.adx + perso2.ataq2.adw >= perso1.dx
                && perso2.ataq2.ady + perso1.ataq.adh > perso1.dy && perso2.ataq2.ady < perso1.dy + perso1.dh)
            {
                vida1.dw = vida1.dw - (460 / 7);
            }
        }
        if (vida1.dw <= 1)
        {
            perso2.win = true;
            tempoativo = false;
            denovo.style.display = "block";
            clearInterval(nums);
            morrer();
            perso1.dxvelo = 0;
            perso2.dxvelo = 0;
            perso1.varia = 115;
            frame1 = 0;
            qframe1 = 3;
            sprite1 = 6;
            img1.src = "img/per1/ider.png";
            if(perso2.akey == 'p')
            {
                perso2.dxvelo = 0;
                perso2.varia = 110;
                frame2 = 0;
                qframe2 = 4;
                sprite2 = 8;
                img2.src = "img/per2/gvr.png";
            }
            if(perso2.akey == 'o')
            {
                perso2.dxvelo = 0;
                perso2.varia = 110;
                frame2 = 0;
                qframe2 = 4;
                sprite2 = 9;
                img2.src = "img/per2/gvl.png";
            }
            perso2.pula();
            win2.play();
        }
        if (vida2.dw <= 1)
        {
            perso1.win = true;
            tempoativo = false;
            denovo.style.display = "block";
            clearInterval(nums);
            morrer();
            perso1.dxvelo = 0;
            perso2.dxvelo = 0;
            perso2.varia = 110;
            frame2 = 0;
            qframe2 = 4;
            sprite2 = 6;
            img2.src = "img/per2/gml.png";
            if(perso1.akey == 'b')
            {
                perso1.dxvelo = 0;
                perso1.varia = 115;
                frame1 = 0;
                qframe1 = 2;
                sprite1 = 9;
                img1.src = "img/per1/ipur.png";
            }
            if(perso1.akey == 'v')
            {
                perso1.dxvelo = 0;
                perso1.varia = 105;
                qframe1 = 2;
                frame1 = 0;
                sprite1 = 8;
                img1.src = "img/per1/ipul.png"
            }
            perso1.pula();
            win1.play();
        }
    }
    else
    {
        fim();
    }
    botoesimg.style.display = (botao == true) ? "block" : "none";

    if (Date.now() - tempoframe1 >= 170)
    {   
        frame1++;
        if (frame1 >= qframe1)
        {
            frame1 = 0;
        }
        tempoframe1 = Date.now();
    }
    if(sprite1 == 1 && frame1 == 3)
    {
        perso1.ataq.anum = 1;
        if (tempoativo == true)
        {
            soco1.play();
        } 
    }
    if(sprite1 == 2 && frame1 == 3)
    {
        perso1.ataq2.anum = 1;
        if (tempoativo == true)
        {
            soco1.play();
        } 
    }
    if(sprite1 == 6 && frame1 == 2)
    {
        qframe1 = 1;
        img1.src = "img/per1/ider2.png";   
    }
    if(sprite1 == 8 && perso1.dy >= 496-perso1.dh && frame1 == 1)
    {
        perso1.dxvelo = 0;
        perso1.varia = 105;
        qframe1 = 2;
        frame1 = 0;
        sprite1 = 0;
        img1.src = "img/per1/ipl.png";
    }
    if(sprite1 == 9 && perso1.dy >= 496-perso1.dh  && frame1 == 1)
    {
        perso1.dxvelo = 0;
        perso1.varia = 115;
        qframe1 = 2;
        frame1 = 0;
        sprite1 = 0;
        img1.src = "img/per1/ipr.png";
    }

    /////////////

    if (Date.now() - tempoframe2 >= 170)
    {   
        frame2++;
        if (frame2 >= qframe2)
        {
            frame2 = 0;
        }
        tempoframe2 = Date.now();
    }
    if(sprite2 == 1 && frame2 == 3)
    {
        perso2.ataq.anum = 1;
        if (tempoativo == true)
        {
            soco2.play();
        }   
    }
    if(sprite2 == 2 && frame2 == 3)
    {
        perso2.ataq2.anum = 1;
        if (tempoativo == true)
        {
            soco2.play();
        }   
    }
    if(sprite2 == 6 && frame2 == 3)
    {
        qframe2 = 1;
        img2.src = "img/per2/gml2.png";  
    }
    if(sprite2 == 8 && perso2.dy >= 496-perso2.dh && frame2 == 1)
    {
        perso2.dxvelo = 0;
        perso2.varia = 110;
        frame2 = 0;
        qframe2 = 2;
        sprite2 = 0;
        img2.src = "img/per2/gir.png";
    }
    if(sprite2 == 9 && perso2.dy >= 496-perso2.dh  && frame2 == 1)
    {
        perso2.dxvelo = 0;
        perso2.varia = 110;
        frame2 = 0;
        qframe2 = 2;
        sprite2 = 0;
        img2.src = "img/per2/gil.png";
    }

    requestAnimationFrame(loop);
}
loop();

var keys = {
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
    ArrowLeft: {
        pressed: false,
    },
    ArrowRight: {
        pressed: false,
    },
}

window.addEventListener('keydown', (event) => {
    if(tempoativo == true)
    {
        switch (event.key) {
        case 'a':
            keys.a.pressed = true;
            perso1.lastKey = 'a';
            perso1.andar(); 
            perso1.varia = 105;
            qframe1 = 3;
            sprite1 = 0;
            img1.src = "img/per1/ianl.png";
        break;
        case 'w':
            if(perso1.dy >= 496-perso1.dh)
            {
                perso1.pula();
                if (tempoativo == true)
                {
                    pulo1.play();
                }
            }
        break;
        case 'd':
            keys.d.pressed = true;
            perso1.lastKey = 'd';
            perso1.andar();
            perso1.varia = 115;
            qframe1 = 3;
            sprite1 = 0;
            img1.src = "img/per1/ianr.png"
        break;
        case 'b':
            perso1.akey = 'b';
            if (perso1.dxvelo != 1)
            {
                frame1 = 0;
            }  
            perso1.dxvelo = 1;
            perso1.varia = 115;
            qframe1 = 4;
            sprite1 = 1;
            img1.src = "img/per1/iar.png";
        break;
        case 'v':
            perso1.akey = 'v'; 
            if (perso1.dxvelo != -1)
            {
                frame1 = 0;
            }
            perso1.varia = 105;
            perso1.dxvelo = -1;
            qframe1 = 4;
            sprite1 = 2;
            img1.src = "img/per1/ial.png";
        break;
        }
    }
})




window.addEventListener('keydown', (event) => {
    if(tempoativo == true)
    {
        switch (event.key) {
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true;
            perso2.lastKey = 'ArrowLeft';
            perso2.andar();
            perso2.varia = 110;
            qframe2 = 6;
            sprite2 = 0;
            img2.src = "img/per2/gal.png";
        break;
        case 'ArrowUp':
            if(perso2.dy >= 496-perso2.dh)
            {
                perso2.pula();
                if (tempoativo == true)
                {
                    pulo2.play();
                }
            }
        break;
        case 'ArrowRight':
            keys.ArrowRight.pressed = true;
            perso2.lastKey = 'ArrowRight';
            perso2.andar();
            perso2.varia = 110;
            qframe2 = 6;
            sprite2 = 0;
            img2.src = "img/per2/gar.png";
        break;
        case 'o':
            perso2.akey = 'o';
            if (perso2.dxvelo != -1)
            {
                frame2 = 0;
            }
            perso2.dxvelo = -1;  
            qframe2 = 4;
            sprite2 = 1;
            img2.src = "img/per2/gll.png";
        break;
        case 'p':
            perso2.akey = 'p';
            if (perso2.dxvelo != 1)
            {
                frame2 = 0;
            } 
            perso2.dxvelo = 1;
            qframe2 = 4;
            sprite2 = 2;
            img2.src = "img/per2/glr.png";
        break;
        }
    }
})

window.addEventListener('keyup', (event) => {
    if(tempoativo == true)
    {
        switch (event.key) {
            case 'a':
                keys.a.pressed = false;
                if(perso1.lastKey == 'a')
                {
                    perso1.dxvelo = 0;
                    perso1.varia = 105;
                    qframe1 = 2;
                    frame1 = 0;
                    sprite1 = 0;
                    img1.src = "img/per1/ipl.png"
                }
            break;
            case 'd':
                keys.d.pressed = false;
                if(perso1.lastKey == 'd')
                {
                    perso1.dxvelo = 0;
                    perso1.varia = 115;
                    frame1 = 0;
                    qframe1 = 2;
                    sprite1 = 0;
                    img1.src = "img/per1/ipr.png";
                }
            break;
            case 'ArrowRight':
                keys.ArrowRight.pressed = false;
                if(perso2.lastKey == 'ArrowRight')
                {
                    perso2.dxvelo = 0;
                    perso2.varia = 110;
                    frame2 = 0;
                    qframe2 = 2;
                    sprite2 = 0;
                    img2.src = "img/per2/gir.png";
                }
            break;
            case 'ArrowLeft':
                keys.ArrowLeft.pressed = false;
                if(perso2.lastKey == 'ArrowLeft')
                {
                    perso2.dxvelo = 0;
                    perso2.varia = 110;
                    frame2 = 0;
                    qframe2 = 2;
                    sprite2 = 0;
                    img2.src = "img/per2/gil.png";
                }
            break;
        } 
    }
  });