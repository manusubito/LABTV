//Lista oggetti con parametri di ogni film/serie
var killbill1 = {
    titolo: "Kill Bill Vol.1",
    img: "https://images2.alphacoders.com/585/thumb-350-585276.jpg",
    trama: "Risvegliatasi dal coma, un'assassina va alla ricerca del suo ex capo e della gang responsabile dell'agguato in cui è caduta quattro anni prima.",
    trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/-VjSqPZtAyk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    serie: false,
    vetrina: false,
}

var batman = {
    titolo: "Batman Il cavaliere oscuro",
    img: "https://sm.ign.com/ign_it/screenshot/default/cinemaalmaxxi-darkknight_5tz9.jpg",
    trama: "Batman combatte il crimine organizzato che dilaga in città per fermare un pericoloso rapinatore, il Joker, che ha gettato la città nell'anarchia.",
    trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/yqcDBdk8wpo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    serie: false,
    vetrina: true,
}

var lahaine = {
    titolo: "La haine - L'odio",
    img: "https://upload.wikimedia.org/wikipedia/it/thumb/7/71/L%27odio.png/1200px-L%27odio.png",
    trama: "Il racconto di una giornata nella periferia parigina dopo l'avvenuto pestaggio durante un interrogatorio ai danni di Abdel Ichah attraverso gli occhi di Vinz",
    trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/m4TBwi973GM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    serie: false,
    vetrina: true,
}

var shrek1 = {
    titolo: "Shrek",
    img: "https://images.everyeye.it/img-articoli/shrek-recensione-film-saga-dreamworks-v5-33092.jpg",
    trama: "Shrek, con l'aiuto del suo amico Ciuchino, cerca di salvare la principessa Fiona per riconquistare la proprietà della sua palude dalle mani di Lord Farquad.",
    trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/sbwXfvTM8M8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    serie: false,
    vetrina: false,
}

var matrix = {
    titolo: "Matrix",
    img: "https://media-assets.wired.it/photos/615f450a0f2b3dd590a0440d/master/pass/matrix-neo.jpg",
    trama: "Esistono due realtà: una è l'esistenza che conduciamo ogni giorno, l'altra è nascosta. Neo vuole scoprire la verità su Matrix, mondo virtuale elaborato al computer creato per tenere sotto controllo le persone.",
    trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VdZwkM_HWzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    serie: false,
    vetrina: true,
}

var qbr = {
    titolo: "Quei bravi ragazzi",
    img: "https://pad.mymovies.it/filmclub/2006/03/273/coverlg.jpg",
    trama: "Un americano di origini italo irlandesi fa carriera nella mafia newyorchese degli anni 50, ma la vita da gangster riserva delle sorprese non previste.",
    trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/GmTgINOKxko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    serie: false,
    vetrina: true,
}

var gladiatore = {
    titolo: "Il gladiatore",
    img: "https://www.tpi.it/app/uploads/2021/05/il-gladiatore-trama-cast-film.jpg",
    trama: "Il generale romano Massimo Decimo Meridio spera di poter tornare alla sua famiglia. Ma il sovrano Marco Aurelio gli chiede di assumere il comando dell'impero dopo la sua morte.",
    trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/xPgZqzxK_PQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    serie: false,
    vetrina: false,
    vetrina: true,
}

var forrest = {
    titolo: "Forrest Gump",
    img: "https://pad.mymovies.it/cinemanews/2020/165732/coverlg_home.jpg",
    trama: "Forrest Gump racconta con voce lenta della propria incredibile vita e dei problemi mentali e fisici che si porta dietro dalla nascita.",
    trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/GKe68fGdNaw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    serie: false,
    vetrina: false,
}

var breakingBad = {
    titolo: "Breaking Bad",
    img: "https://images.everyeye.it/img-articoli/breaking-bad-storia-successo-importanza-serie-vince-gilligan-v5-47057.jpg",
    trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/HhesaQXLuRY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    trama: "Walter White è un insegnante di chimica che scopre di avere un cancro terminale. L’uomo decide di produrre metamfetamina insieme a Jesse, un suo ex alunno.",
    serie: true,
    vetrina: false,
    puntate: [
        punt1 = {
            stagione: 1,
            numeroPunt: 1,
            nome: "Questione di chimica",
            img: "https://upload.wikimedia.org/wikipedia/it/c/c5/Breaking_Bad_-_Pilota_%282008%29.jpg",
            descrizione: "A Walter White viene diagnosticato un cancro in fase terminale ai polmoni. Deciderà di inizare a produrre anfetamine per assicurare alla propria famiglia un futuro migliore"
        },
        punt2 = {
            stagione: 1,
            numeroPunt: 2,
            nome: "Senza ritorno",
            img: "https://movieplayer.net-cdn.it/images/2013/09/26/breaking-bad-aaron-paul-nell-episodio-senza-ritorno-della-prima-stagione-286689.jpg",
            descrizione: "La situazione diventa delicata quando lo spacciatore Krazy-8 deve essere eliminato. A Walter spetta questo compito, mentre a Jesse quello di farlo sparire. Ma non è tutto così semplice.."
        },
        punt3 = {
            stagione: 1,
            numeroPunt: 3,
            nome: "Conseguenze radicali",
            img: "https://movieplayer.net-cdn.it/t/images/2013/09/26/breaking-bad-bryan-cranston-e-max-arciniega-nell-episodio-della-prima-stagione-conseguenze-radicali-286690_jpg_400x0_crop_q85.jpg",
            descrizione: "In seguito ad una discussione con Jesse, Walter si ritrova a dover affrontare Krazy-8 da solo. Marie ha da ridire sull'uso di cannabis da parte di Walt Jr., così Hank gli mostra i pericoli del consumo di droga.",
        },
        punt4 = {
            stagione: 1,
            numeroPunt: 4,
            nome: "Una malattia scomoda",
            img: "https://static.tvtropes.org/pmwiki/pub/images/cancer_man.jpg",
            descrizione: "La DEA ha dei sospetti su un nuovo boss del commercio di droga, nel frattempo Walt rivela a Marie ed Hank che ha il cancro. Jesse fa visita alla sua famiglia."
        }
    ]
}

var theBoys = {
    titolo: "The Boys",
    img: "https://a.mytrend.it/giochi-console/2021/07/969068/o.641744.jpg",
    trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/zQE-tZDXqP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    trama: "I supereroi, riuniti del gruppo dei Seven, sono pagati dalla potentissima multinazionale Vought International. La storia cambia quando una ragazza viene travolta e disintegrata da A-Train, l’uomo più veloce del mondo e membro dei Sette.",
    serie: true,
    vetrina: false,
    puntate: [
        punt1 = {
            stagione: 1,
            numeroPunt: 1,
            nome: "Le regole del gioco",
            img: "https://i.ytimg.com/vi/1kqVb1Zkj50/maxresdefault.jpg",
            descrizione: "In un mondo dove i super eroi non sono affatto i paladini della legge, bensì corrotti e abbietti quanto i criminali che combattono, qualcuno deve controllare che non esagerino. E quel qualcuno sono i Boys. Alcuni super devono essere messi in riga. Per altri, invece, la soluzione sarà molto più dolorosa…",
        },
        punt2 = {
            stagione: 1,
            numeroPunt: 2,
            nome: "Spettacolare",
            img: "https://i.ytimg.com/vi/z-5nDrXH5gs/maxresdefault.jpg",
            descrizione: "I Boys catturano un supereroe, Starlight ottiene la sua rivincita, Patriota diventa cattivo, e un senatore viene incastrato.",
        },
        punt3 = {
            stagione: 1,
            numeroPunt: 3,
            nome: "Fottuto",
            img: "https://i.ytimg.com/vi/gIna4fMwd2M/maxresdefault.jpg",
            descrizione: "È la corsa del secolo. A-Train e Shockwave competono per il titolo di uomo più veloce del mondo. Nel frattempo, i Boys si riuniscono, ed è una bella sensazione.",
        },
        punt4 = {
            stagione: 1,
            numeroPunt: 4,
            nome: "La femmina della specie",
            img: "https://static.tvmaze.com/uploads/images/large_landscape/206/515787.jpg",
            descrizione: "La Femmina della Specie si reca in un bar gestito da mafiosi pensando che questi volessero offrirle un ingaggio ma è una trappola: è aggredita e ridotta in fin di vita da Stormfront.",
        },
    ]
}

var peakyBlinders = {
    titolo: "Peaky Blinders",
    img: "https://www.gedistatic.it/content/gnn/img/lastampa/2022/02/15/154127467-dd0a4b25-8b9d-4dbf-8c02-2d59a12d68ab.jpg",
    trama: "Nella famiglia Shelby, il cui secondogenito Thomas, reduce decorato della prima guerra mondiale, è anche il boss della gang detta 'Peaky Blinders'",
    trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/hGP_ZyrHN68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    serie: true,
    vetrina: false,
    puntate: [
        punt1 = {
            stagione: 1,
            numeroPunt: 1,
            nome: "Episodio 1",
            img: "https://m.media-amazon.com/images/M/MV5BMDI0NjZlOWEtOTA5MS00MGExLTk1ZDMtMzk0ZTE3YzYzZGIxXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_.jpg",
            descrizione: "Il veterano Thomas Shelby è a capo di una gang criminale, i Peaky Blinders. Accidentalmente, Thomas mette le mani su un carico di pistole che sono state rubate a una fabbrica del posto e l'Ispettore Campbell arriva dall'Irlanda incaricato dal Ministro della Guerra, Winston Churchill, di recuperare la refurtiva.",
        },
        punt2 = {
            stagione: 1,
            numeroPunt: 2,
            nome: "Episodio 2",
            img: "https://parolepelate.files.wordpress.com/2014/10/tumblr_ndm2lewdu11tjb2auo1_1280.jpg?w=350&h=200&crop=1",
            descrizione: "Thomas sta continuando a frequentare Grace, la cameriera del Pub Garrison, senza sapere che si tratta di una spia di Campbell. A una fiera fuori città, Thomas viene coinvolto in una lite con la famiglia Lee, dei viaggiatori dal temperamento violento che gli inviano una pallottola con il suo nome inciso sopra. ",
        },
        punt3 = {
            stagione: 1,
            numeroPunt: 3,
            nome: "Episodio 3",
            img: "https://i0.wp.com/4.bp.blogspot.com/-sANvJ8e9eCs/VzIwYCPkUOI/AAAAAAAABD0/pwXW-daSkYwp7hGDoF4jt2kBgPgHh2RnQCLcB/s1600/vlcsnap-2016-05-10-19h02m02s753.png?ssl=1",
            descrizione: "https://i0.wp.com/4.bp.blogspot.com/-sANvJ8e9eCs/VzIwYCPkUOI/AAAAAAAABD0/pwXW-daSkYwp7hGDoF4jt2kBgPgHh2RnQCLcB/s1600/vlcsnap-2016-05-10-19h02m02s753.png?ssl=1",
        },
        punt4 = {
            stagione: 1,
            numeroPunt: 4,
            nome: "Episodio 4",
            img: "https://www.seriangolo.it/wp-content/uploads/2017/11/pb3.jpg",
            descrizione: "Mentre la guerra con la famiglia Lee si inasprisce, Thomas sospetta della fidanza di suo fratello; Campbell spinge affinché la gang consegni i fucili.",
        },
    ],
}

var brooklyn99 = {
    titolo: "Brooklyn 99",
    img: "https://inchiostro.unipv.it/wp-content/uploads/2017/10/maxresdefault2.jpg",
    trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/q6G_RMGk3vs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    trama: "Jake Peralta, un giovane e brillante detective del 99° distretto dell'NYPD, tuttavia poco incline a rispettare le regole, è alle prese con diversi casi polizieschi sotto la guida del nuovo e severo Capitano Raymond Holt",
    serie: true,
    vetrina: false,
    puntate: [
        punt1 = {
            stagione: 1,
            numeroPunt: 1,
            nome: "Il nuovo comandante",
            img: "https://static.tvtropes.org/pmwiki/pub/images/b99recap-pilot_2879.png",
            descrizione: "La squadra del distretto di polizia Nine-Nine a Brooklyn è in attesa di un nuovo Capitano, che sarà a capo di un gruppo apparentemente sgangherato di detective. Il nuovo arrivato, Holt, cercherà di tenerli in riga il più possibile, partendo da Jake Peralta, il più abile di tutti ma anche il più complicato da gestire.",
        },
        punt2 = {
            stagione: 1,
            numeroPunt: 2,
            nome: "Il Tagger",
            img: "https://m.media-amazon.com/images/M/MV5BNjM3YzYxZmItM2JiZC00ZTRlLTlhNGEtOTVmMjRmY2U2ZmMyXkEyXkFqcGdeQXVyNjY5NTM5MjA@._V1_.jpg",
            descrizione: "Il Capitano Holt assegna a Jake un caso di basso profilo e facilmente risolvibile, ma decide di accompagnarlo per tenerlo sott'occhio, nel tentativo di renderlo un detective ligio al protocollo. Nel frattempo, Gina porta al distretto una sua amica veggente, che prevede un futuro grigio per Boyle.",
        },
        punt3 = {
            stagione: 1,
            numeroPunt: 3,
            nome: "Il tracollo",
            img: "https://static2.srcdn.com/wordpress/wp-content/uploads/2020/07/brooklyn-nine-nine-pete-davidson.jpg?q=50&fit=crop&w=943&h=500&dpr=1.5",
            descrizione: "Jake non lo vuole ammettere, ma ultimamente la percentuale di casi da lui risolti sta diminuendo mentre i casi irrisolti si stanno accumulando sulla sua scrivania, e per cercare di sbloccare la situazione il migliore detective del 99° distretto di Brooklyn cerca di accaparrarsi semplici indagini. Nel frattempo Diaz e Santiago sono impegnate a convincere un gruppo di giovani ad iscriversi al Junior Police Program.",
        },
        punt4 = {
            stagione: 1,
            numeroPunt: 4,
            nome: "Il medico legale",
            img: "https://i0.wp.com/popcitylife.com/wp-content/uploads/2013/10/photo4-300x300.jpg?resize=350%2C200",
            descrizione: "Jake è stato assegnato come detective secondario nell'indagine di un uomo morto apparentemente per cause naturali, ma riuscirà comunque a mettere i bastoni tra le ruote al leader delle indagini, Boyle, quando si dimostra più che interessato al medico legale assegnato al caso, il Dr. Rossi. Nel frattempo, le indagini su una rapina vengono rallentate quando il disegnatore si dà malato ed Amy chiede aiuto al sergente Jeffords.",
        }
    ],
}

//Istanzio l'array contenente i film
var movies = [];

//Pusho ogni film/serie nell'array
movies.push(killbill1, batman, lahaine, shrek1, matrix, qbr, gladiatore, forrest, breakingBad, theBoys, peakyBlinders, brooklyn99);

//Ciclo l'array per aggiungere l'attributo posizione ad ogni card
for (let i = 0; i < movies.length; i++) {
    movies[i].posizione = i;
}



$(function () { //Document on load abbreviato 

    //Richiamo funzione per creare le card
    card();

    //Gestisco l'hover sulle card per mostrare titolo e trama. La prima funzione è per onmouseover, la seconda per onmouseout
    $(".card").hover(
        function () {
            //Con questi due parametri, prendo il .info all'interno del this(ovvero l'elemento che ha scatenato l'evento)
            //Lo stop serve ad evitare che il mouse possa richiamare troppi eventi hover contemporaneamente
            $(".overlay", this).stop().fadeIn(290);
            $(".info", this).stop().fadeIn(300);
        },
        function () {
            $(".info", this).stop().fadeOut(190);
            $(".overlay", this).stop().fadeOut(200);
        });



    //Click sulle locandine che mostrano il boxFilm/Serie
    $(".card").click(function () {
        mostraBox(this);
    });


    //Click chiusura boxSerie
    $("#serieBox #chiudi").click(function () {
        //Stoppo l'iframe eventualmente in play
        $('iframe').attr('src', $('iframe').attr('src'));

        $("#serieBox").fadeOut();
        $(".overlaybody").fadeOut();
    });



    //Click chiusura boxFilm
    $("#filmBox #chiudi").click(function () {
        //Stoppo l'iframe eventualmente in play
        $('iframe').attr('src', $('iframe').attr('src'));

        $("#filmBox").fadeOut();
        $(".overlaybody").fadeOut();

        //Ripristino l'html iniziale del box
        $("#flmBox").html('<span id="chiudi">X</span><h2 id="serieTitolo"></h2><div id="serieTrailer"></div><div id="serieTrama"></div>');
    });



    //Click su LOGIN nel menù
    $("#login").click(function (e) {

        //Impedisco il ricaricamento della pagina
        e.preventDefault();

        //Richiamo funzione per chiudere box quando schiaccerò la X
        $("#boxLogin #chiudi").click(chiudiBoxLogin);

        //Mostro il box ed applico l'overlay alla pagina intera
        $(".overlaybody").fadeIn();
        $("#boxLogin").fadeIn();
    });



    //Funzione controllo login
    $("form#login").submit(function (e) {

        //Istanzio la regex per la mail
        var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        //Se l'email inserita non è valida sarà dato il preventDefault che non farà il submit della form
        if (!emailRegex.test($("input#email").val())) {
            e.preventDefault();
            $("#divLogEmail").css("visibility", "visible");
        } else {
            $("#divLogEmail").css("visibility", "hidden");
        }

    });



    //Evento per mostrare il box di registrazione
    $("a#registrati").click(function () {
        chiudiBoxLogin();
        $(".overlaybody").fadeIn();
        $("#boxRegistrazione").fadeIn();

        $("#boxRegistrazione #chiudi").click(chiudiBoxRegistrazione);
    });



    //Evento submit della registrazione
    $("form#registrazione").submit(function (e) {
        invioRegistrazione(e);
    });//$("form#registrazione").submit



    //Evento click su contatti nel menu che mostra il modulo per essere contattati
    $("#contatti").click(function (e) {
        e.preventDefault();

        $("#boxContatti").fadeIn();
        $(".overlaybody").fadeIn();
    });

    //Evento click su chiudi in contatti
    $("#boxContatti #chiudi").click(chiudiBoxContatti);

    //Evento submit della form contatti
    $("#invioContatti").submit(function (e) {
        invioContatti(e);
    });//$("#invioContatti")




    //Mostro il pulsante tornaSu con lo scroll
    $(document).scroll(function () {
        if ($(document).scrollTop() > 70) {
            $("#tornaSu").css("bottom", "5%");
        } else {
            $("#tornaSu").css("bottom", "-5%");
        }
    });

    //Click sul pulsante torna su che appare in fondo alla pagina
    $("#tornaSu").click(function () {
        $("html").animate({ scrollTop: 0 }, 1000);
    });




    //Richiamo funzione per creare lo slider
    slider();

    //Richiamo funzione per click su un elemento della vetrina
    $(".infoSlider").click(function () {
        mostraBox(this.parentElement);
    });

    //Faccio partire lo slider automatico
    var idInterval = setInterval(function () { scorriAvanti(); }, 7000);

    //In hover sullo slider blocco lo slider, finito l'hover lo slider riparte
    $("#boxSlider").hover(function () {
        clearInterval(idInterval);
    }, function () {
        idInterval = setInterval(function () { scorriAvanti(); }, 7000);
    });

    //In hover anche sulle frecce blocco lo slider, finito l'hover lo slider riparte
    $("#vetrina a").hover(function () {
        clearInterval(idInterval);
    }, function () {
        idInterval = setInterval(function () { scorriAvanti(); }, 7000);
    });

    //In hover mostro le info
    $("#boxSlider div").hover(function () {
        $(".infoSlider", this).stop().fadeIn(500);
    }, function () {
        $(".infoSlider", this).stop().fadeOut(300);
    });


    //Click sulla freccia avanti richiama la funzione scorrimento
    $("a#avanti").click(scorriAvanti);

    $("a#indietro").click(scorriIndietro);


});//Document on load

//Funzione per creare le card
function card() {
    //Ciclo ogni elemento dell'array per creare una card
    for (let movie of movies) {

        //Creo un elemento con classe card
        var element = document.createElement("div");
        element.classList.add("card");

        element.innerHTML = `<div class="overlay"><div class="info">
                            <h4 class="titolo">${movie.titolo}</h4>
                            <div class="trama">${movie.trama}</div>
                            </div></div>`;

        element.style.backgroundImage = `url(${movie.img})`;

        //Setto un attributo con la posizione della card nell'array, che mi servirà per i box in sovraimpressione
        element.setAttribute("posizione", `${movie.posizione}`)

        //Aggiungo l'elemento nel document
        document.getElementById("cards").appendChild(element);
    }// Ciclo movie
}

//Funzioni da richiamare per chiudere il box
function chiudiBoxLogin() {
    $(".overlaybody").fadeOut();
    $("#boxLogin").fadeOut();
}

function chiudiBoxRegistrazione() {
    $(".overlaybody").fadeOut();
    $("#boxRegistrazione").fadeOut();
}

function chiudiBoxContatti() {
    $(".overlaybody").fadeOut();
    $("#boxContatti").fadeOut();
}

//Funzione che crea lo slider
function slider() {
    //Istanzio variabile
    var contatore = 0;

    //Ciclo per aggiungere gli elementi alla vetrina
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].vetrina == true) {
            var elemento = $(document.createElement("div"));
            elemento.html(`<span class="infoSlider"><h3>${movies[i].titolo}</h3><span>${movies[i].trama}</span></span>`);
            elemento.css("background-image", `url(${movies[i].img})`);
            elemento.attr("posizione", `${movies[i].posizione}`);
            if (contatore == 0) {
                elemento.addClass("visibile");
            } else if (contatore == 1) {
                elemento.addClass("prossima");
            } else if (contatore == 2) {
                elemento.addClass("prossimaAncora");
            }
            $("#boxSlider").append(elemento);
            contatore++;
        }
    }
    //Aggiungo all'ultimo div la classe appenaPassato
    $("#boxSlider").children().last().addClass("appenaPassato");
}

//Funzione scorrimento avanti slider
function scorriAvanti() {
    var prossima = $(".prossima");
    var visibile = $(".visibile");
    var prossimaAncora = $(".prossimaAncora");
    var appenaPassato = $(".appenaPassato");

    prossima.removeClass("prossima").addClass("visibile");
    visibile.removeClass("visibile").addClass("appenaPassato");
    prossimaAncora.removeClass("prossimaAncora").addClass("prossima");
    appenaPassato.removeClass("appenaPassato");

    if (prossimaAncora.next().length != 0) {
        prossimaAncora.next().addClass("prossimaAncora");
    } else {
        $("#boxSlider").children().first().addClass("prossimaAncora");
    }
}

//Funzione scorrimento indietro slider
function scorriIndietro() {
    var prossima = $(".prossima");
    var visibile = $(".visibile");
    var prossimaAncora = $(".prossimaAncora");
    var appenaPassato = $(".appenaPassato");

    prossima.removeClass("prossima").addClass("prossimaAncora");
    visibile.removeClass("visibile").addClass("prossima");
    appenaPassato.removeClass("appenaPassato").addClass("visibile");
    prossimaAncora.removeClass("prossimaAncora");
    if (appenaPassato.prev().length != 0) {
        appenaPassato.prev().addClass("appenaPassato");
    } else {
        $("#boxSlider").children().last().addClass("appenaPassato");
    }

}

//Funzione click sulla locandina
function mostraBox(elemento) {

    //Recupero la posizione all'interno dell'array dei film nell'attributo html
    var posizione = $(elemento).attr("posizione");

    //Per prima cosa devo settare il contenuto del box in base alla card sulla quale ho cliccato
    var titolo = movies[posizione].titolo;
    var trama = movies[posizione].trama;
    var trailer = movies[posizione].trailer;

    //Caso in cui la card non sia di una serie tv
    if (movies[posizione].serie == false) {

        $("#filmBox #filmTitolo").text(titolo);
        $("#filmBox #filmTrailer").html(trailer);
        $("#filmBox #filmTrama").text(trama);

        //Mostro il box
        $("#filmBox").fadeIn();

    } else {//Caso in cui sia una serie tv

        $("#serieBox #serieTitolo").text(titolo);
        $("#serieBox #serieTrailer").html(trailer);
        $("#serieBox #serieTrama").text(trama);

        for (let puntata of movies[posizione].puntate) {

            var punt = $(document.createElement("div"))
                .addClass("puntate")
                .html(`<a href="#"><img src = "${puntata.img}"></a><a href="#" class="info">Stagione ${puntata.stagione} Episodio ${puntata.numeroPunt} - ${puntata.nome}</a><span class="descrizione">${puntata.descrizione}</span>`);

            $("#serieTrama").append(punt);

        }

        //Mostro il box pronto
        $("#serieBox").fadeIn();

        //Sposto la visione sul boxSerie
        var scrollata = $("#serieBox").offset().top - 50;

        $("html").animate({ scrollTop: scrollata }, 800);
    }

    //Mostro l'overlay
    $(".overlaybody").fadeIn();
}


//Funzione submit contatti
function invioContatti(e) {

    //Regex per nome e cognome, composti da sole lettere
    var regexNomeCognome = /^[a-zA-Z]+$/;
    var nomeValido;
    var cognomeValido;
    //Istanzio la regex per la mail
    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var emailValida;
    //Istanzio la regex per il cellulare
    var cellRegex = /^[0-9]+$/;
    var cellValido;

    var messValido;

    if (!regexNomeCognome.test($("#contNome").val())) {
        $("#divContNome").css("visibility", "visible");
        nomeValido = false;
    } else {
        $("#divContNome").css("visibility", "hidden");
        nomeValido = true;
    }

    if (!regexNomeCognome.test($("#contCognome").val())) {
        $("#divContCognome").css("visibility", "visible");
        cognomeValido = false;
    } else {
        $("#divContCognome").css("visibility", "hidden");
        cognomeValido = true;
    }

    if (!emailRegex.test($("#contEmail").val())) {
        $("#divContEmail").css("visibility", "visible");
        emailValida = false;
    } else {
        $("#divContEmail").css("visibility", "hidden");
        emailValida = true;
    }

    if (!cellRegex.test($("#contCell").val())) {
        $("#divContCell").css("visibility", "visible");
        cellValido = false;
    } else {
        $("#divContCell").css("visibility", "hidden");
        cellValido = true;
    }

    if ($("#messaggio").val() == "") {
        $("#divMess").css("visibility", "visible");
        messValido = false
    } else {
        $("#divMess").css("visibility", "hidden");
        messValido = true
    }

    if (nomeValido == false || cognomeValido == false || emailValida == false || cellValido == false || messValido == false) {
        e.preventDefault();
    }
}


//Invio registrazione
function invioRegistrazione(e) {

    var emailValida, pass1Valida, pass2Valida, checkValida;

    //Istanzio la regex per la mail
    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    //Istanzio la regex per una password di almeno 8 caratteri con almeno una lettera ed un numero
    var passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailRegex.test($("#email1").val())) {
        $("#regErrEmail").css("visibility", "visible");
        emailValida = false;
    } else {
        $("#regErrEmail").css("visibility", "hidden");
        emailValida = true;
    }

    if (!passRegex.test($("#password1").val())) {
        $("#regErrPass1").css("visibility", "visible");
        pass1Valida = false;
    } else {
        $("#regErrPass1").css("visibility", "hidden");
        pass1Valida = true;
    }

    if ($("#password1").val() != $("#password2").val()) {
        $("#regErrPass2").css("visibility", "visible");
        pass2Valida = false;
    } else {
        $("#regErrPass2").css("visibility", "hidden");
        pass1Valida = true;
    }

    var checkbox = document.getElementById("checkbox");

    if (!checkbox.checked) {
        $("#regErrCheck").css("visibility", "visible");
        checkValida = false;
    } else {
        $("#regErrCheck").css("visibility", "hidden");
        checkValida = true;
    }

    if (emailValida == false || pass1Valida == false || pass2Valida == false || checkValida == false) {
        e.preventDefault();
    }

}