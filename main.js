function start() {
    if (annyang) {
        annyang.setLanguage("es-AR")
        annyang.start({ autoRestart: false, continuous: true });  

        
        console.log("Listening...")
        annyang.addCommands(comandos);
        annyang.debug()
        document.getElementById("btn").style.display = ""   
} 
}

let bandera = false;
annyang.addCallback('soundstart', function () {
    if (!bandera){
        document.getElementById("all2").style.display="block"
        setTimeout(() => {
            voz('Bienvenido de nuevo, señor')
            bandera = true;
        }, 1000);
    }
    console.log("sound detected")
});

annyang.addCallback('result', function () {
    console.log('sound stopped');
});


        

        


const comandos = {
    // SALUDO
    "Leslie": function() {
        voz("Bienvenido de nuevo, señor");
    },

    "hey Leslie": () => {
        voz("Bienvenido de nuevo, señor");
    },

    "Bien hecho leslie": () => {
        voz("Gracias, señor");
    },

    "hey.": () => {
        voz("Aquí estoy");
    },

    "Lesly te gusto": () => {
        voz("Desde el primer día que te ví me enamoré");
    },

    "Buenos días Leslie": () => {
        voz("Bienvenido de nuevo, señor");
    },

    "Buenas tardes Leslie": () => {
        voz("Bienvenido de nuevo, señor");
    },

    "Buenas noches Leslie": () => {
        voz("Bienvenido de nuevo, señor");
    },

    // DESPEDIDA

    "Hasta mañana Leslie": () => {
        voz("Hasta mañana, señor");
        annyang.abort()
    },

    "Hasta luego Leslie": () => {
        voz("Hasta luego, señor");
        annyang.abort()
    },

    "Adios Leslie": () => {
        voz("Hasta luego, señor, espero te saques un 5");
        annyang.abort()
    },

    "apágate": () => {
        voz('ok, hasta luego, señor')
        annyang.abort();
    },

    "apágate por *tiempo minutos": tiempo => {
        voz('ok, vuelvo en' + tiempo + 'minutos');
        annyang.abort();
        setTimeout(() => {
            annyang.start();
            voz('Hola, he vuelto, ¿me extrañaste?')
        }, tiempo * 60000);
    },

    // PREGUNTAS
    

    "qué hora es": () => {
        var date = new Date;
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;

      
    

        voz('señor, son las ' + strTime)
    },

    "¿quién te creo?": () => {
        voz("Mis creadores son mateo, camilo y dario");
    },

    "¿qué eres?": () => {
        voz("soy un asistente virtual, y en un futuro, la maquina mas inteligente de todos los tiempos");
    },

    "cuál es tu nombre": () => {
        voz("mi nombre es Leslie");
    },
    
    "que sabes de mí": () => {
        voz("jummm, dejame pensar, que aun vives con tus padres y te mantienen, tu novia te puso los cachos con tu mejor amigo, te bañas cada 5 días y lo peor de todo es que te quiero.");
    },

    

    "qué fecha es hoy": () => {
        var date = new Date;
        var mes = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
        voz("hoy es " + date.getDate() + " de "+ mes[date.getMonth()] + "del" + date.getFullYear());
    },

    "qué día es hoy": () => {
        var date = new Date;
        var dia = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
        voz("hoy es "+ dia[date.getDay()-1]);
    },

    // ORDENES

    "cuéntame un chiste": () => {
        var chistes = ["¿Por qué las focas del circo miran siempre hacia arriba?, Porque es donde están los focos",
            "¡Estás obsesionado con la comida!, No sé a que te refieres croquetamente",
            "¿Por qué estás hablando con esas zapatillas?, Porque pone converse",
            "¿Sabes cómo se queda un mago después de comer?, magordito",
            "Me da un café con leche corto, Se me ha roto la máquina, cambio",
            "¡Camarero! Este filete tiene muchos nervios, Normal, es la primera vez que se lo comen",
            "Hola, ¿está Agustín?, No, estoy incomodín",
            "¿Cuál es la fruta más divertida?, la naranja ja ja"];

        var ran = Math.floor(Math.random() * chistes.length);
        voz(chistes[ran])
    },

    "reiniciate": () => {
        voz("entendido");
        location.reload();
    },

    "limpia la consola": () => {
        voz("entendido");
        console.clear();
    },

    "busca *busqueda": busqueda => {
        voz("ok, buscando " + busqueda +" para ti");
        window.open("https://www.google.com/search?q=" + busqueda)
    },

    "quiero ver *busqueda": busqueda => {
        voz("ok, buscando " + busqueda + "para ti");
        window.open("https://www.youtube.com/results?search_query=" + busqueda)
    },
    
    "quiero escuchar *busqueda": busqueda => {
        voz("ok, buscando " + busqueda + "para ti");
        window.open("https://www.youtube.com/results?search_query=" + busqueda)
    },

    "Lesly preséntate": busqueda => {
        voz("ok");
        window.open ("https://www.youtube.com/watch?v=CE9nM7YTJ4M" + busqueda)
        
       
    },

    "Leslie preséntate": busqueda => {
        voz("ok ");
        window.open ("https://www.youtube.com/watch?v=CE9nM7YTJ4M" + busqueda)
        if (annyang) {
            annyang.setLanguage("es-AR")
            annyang.start({ autoRestart: false, continuous: false });  
    
            
            console.log("Listening...")
            annyang.addCommands(comandos);
            annyang.debug()
            document.getElementById("btn").style.display = ""   
    } 
    
    
          
     
    },

    "Lesli preséntate": busqueda => {
        voz("ok ");
        window.open ("https://www.youtube.com/watch?v=CE9nM7YTJ4M" + busqueda)
    },


    "llama al *telefono": telefono => {
        voz("ok, con gusto llamando al" + telefono);
        window.open("tel:" + telefono)
    },

    "di *frase": frase => {
        voz(frase);
    },
    "escribe *dicto": dicto =>{
        document.getElementById("text").innerHTML = dicto;
    },

    // AMABILIDAD

    "gracias": () => {
        voz("Para servirte");
    },

    "ulala": () => {
        voz('Me hace sonrojar, señor')
    },

    "Cómo estás": () => {
        voz('mejor que ayer, espero que usted tambien lo esté, señor')
    },

    "Te presento a *nombre": nombre => {
        voz("Hola a" + nombre +", mi nombre es Leslie, es un placer de conocerlos");
    },

    // LLAMADA A LA ACCIÓN
    
    "Leslie": () => {
        voz("aquí estoy, señor");
    },

    "Hey": () => {
        voz("aquí estoy, señor");
    },

    "Hola": () => {
        voz("aquí estoy, señor");
    },

    "Me puedes ayudar": () => {
        voz("claro que sí");
    },

    "Oye": () => {
        voz("aquí estoy, señor");
    },

    "Estás ahí": () => {
        voz("aquí estoy, señor");
    }

}

function voz(texto) {
    document.getElementById("all2").style.visibility = "hidden";
    var textoAEscuchar = texto;
    var mensaje = new SpeechSynthesisUtterance();
    mensaje.text = textoAEscuchar;
    mensaje.volume = 1;
    mensaje.rate = 0.9;
    mensaje.pitch = 1;
    // ¡Parla!
    document.getElementById("all").style.visibility = "visible";
    setTimeout(() => {
        document.getElementById("all").style.visibility = "hidden";  
        document.getElementById("all2").style.visibility = "visible";      
    }, 4000);
    speechSynthesis.speak(mensaje);
}