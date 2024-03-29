export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: '1',
    albumId: 1,
    title: "The Nights",
    image:
      "https://i.scdn.co/image/ab67616d0000b2730ae4f4d42e4a09f3a29f64ad",
    artists: ["Avicii"],
  },
  {
    id: '2',
    albumId: 2,
    title: "Cupid (Twin Ver.)",
    image:
      "https://i.scdn.co/image/ab67616d0000b27337c0b3670236c067c8e8bbcb",
    artists: ["FIFTY-FIFTY"],
  },
  {
    id: '3',
    albumId: 3,
    title: "Tu Falta de Querer",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/6c/e6/c7/6ce6c71b-9c90-9040-622e-524f1a878135/15UMGIM37781.rgb.jpg/1200x1200bf-60.jpg",
    artists: ["Mon Laferte"],
  },
  {
    id: '4',
    albumId: 4,
    title: "Until I Found You (Piano Version)",
    image:
      "https://i.scdn.co/image/ab67616d0000b273eabddae72a3b1a5ed51d1ac6",
    artists: ["Stephen Sanchez"],
  },
  {
    id: '5',
    albumId: 5,
    title: "Un Osito de Peluche de Taiwán",
    image:
      "https://www.losautenticosdecadentes.com.ar/img/albumes/sigue-tu-camino.jpg",
    artists: ["Los Auténticos Decadentes"],
  },
  {
    id: '6',
    albumId: 6,
    title: "King Of The Jungle",
    image:
      "https://i.scdn.co/image/ab67616d0000b273c75d7b12b6b6eacea1e21068",
    artists: ["Shanguy"],
  },
  {
    id: '7',
    albumId: 7,
    title: "Vivir Mi Vida",
    image: "https://i.scdn.co/image/ab67616d0000b27321be16e998effa9f1f4b63a9",
    artists: ["Marc Anthony"],
  },
  {
    id: '8',
    albumId: 8,
    title: "La Camisa Negra",
    image: "https://i.scdn.co/image/ab67616d0000b273c091c40987e92a9256d2f210",
    artists: ["Juanes"],
  },
  {
    id: '9',
    albumId: 9,
    title: "Bailando",
    image: "https://i.scdn.co/image/ab67616d0000b273c725c87a1394f9558e7fa9c8",
    artists: ["Enrique Iglesias"],
  },
  {
    id: '10',
    albumId: 10,
    title: "Danza Kuduro",
    image: "https://lh3.googleusercontent.com/WZx94Asj29Zm7VkrxrEsk4dQzg0mPbGChm-1jhX8LQIgAkJ1mcRdq2o9CwAjZIUJm6O9pViJxxhuUto=w544-h544-l90-rj",
    artists: ["Don Omar"],
  },
  {
    id: '11',
    albumId: 11,
    title: "Limón y Sal",
    image: "https://i.scdn.co/image/ab67616d0000b273a043fa84be801dca33dacca1",
    artists: ["Julieta Venegas"],
  },
  {
    id: '12',
    albumId: 12,
    title: "Matador",
    image: "https://images.genius.com/5e94e386f9f2c1199cf15eb98286ec73.960x960x1.png",
    artists: ["Los Fabulosos Cadillacs"],
  },
];

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}))

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}))

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
]

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
  lyrics: string;
}

export const songs: Song[] = [
  {
    "id": 1,
    "albumId": 1,
    "title": "The Nights",
    "image": "https://i.scdn.co/image/ab67616d0000b2730ae4f4d42e4a09f3a29f64ad",
    "artists": ["Avicii"],
    "album": "The Nights",
    "duration": "2:56",
    "lyrics": `(Hey) Once upon a younger year
    When all our shadows disappeared
    The animals inside came out to play
    (Hey) Went face to face with all our fears
    Learned our lessons through the tears
    Made memories we knew would never fade
    
    One day my father he told me
    "Son, don't let it slip away"
    He took me in his arms, I heard him say (hey)
    "When you get older
    Your wild heart will live for younger days
    Think of me if ever you're afraid"
    
    He said, "One day, you'll leave this world behind
    So live a life you will remember"
    My father told me when I was just a child
    These are the nights that never die
    My father told me
    
    (Hey, hey)
    (Hey, hey)
    (Hey, hey)
    
    (Hey, hey)
    (Hey, hey)
    (Hey, hey)
    (Hey, hey)
    
    When thunder clouds start pouring down
    Light a fire they can't put out
    Carve your name into those shinning stars
    He said, "Go venture far beyond the shores
    Don't forsake this life of yours
    I'll guide you home no matter where you are"
    
    One day my father, he told me
    "Son, don't let it slip away"
    When I was just a kid I heard him say
    "When you get older
    Your wild heart will live for younger days
    Think of me if ever you're afraid"
    
    He said, "One day, you'll leave this world behind
    So live a life you will remember"
    My father told me when I was just a child
    These are the nights that never die
    My father told me
    
    (Hey, hey)
    (Hey, hey)
    (Hey, hey)
    "These are the nights that never die"
    My father told me
    
    (Hey, hey)
    (Hey, hey)
    Ooh-whoa, oh-oh-oh-oh-oh-oh
    (Hey, hey)
    Oh-oh (hey)
    (Hey, hey)
    (Hey, hey)
    Ooh-whoa, oh-oh-oh-oh-oh-oh
    (Hey, hey)
    Oh-oh (hey)
    
    My father told me`
  },
  {
    "id": 2,
    "albumId": 2,
    "title": "Cupid (Twin Ver.)",
    "image": "https://i.scdn.co/image/ab67616d0000b27337c0b3670236c067c8e8bbcb",
    "artists": ["FIFTY-FIFTY"],
    "album": "Cupid (Twin Ver.)",
    "duration": "3:34",
    "lyrics": `(La-la-la, la-la-la)
    (La-la-la-la, la-la-la-la)
    
    A hopeless romantic all my life
    Surrounded by couples all the time
    I guess I should take it as a sign 
    (Oh, why? Oh, why?)
    (Oh, why? Oh, why?)
    
    I'm feeling lonely (lonely)
    Oh, I wish I'd find a lover that could hold me (hold me)
    Now I'm crying in my room
    So skeptical of love (say what you say, but I want it more)
    But still I want it more, more, more
    
    I gave a second chance to Cupid
    But now I'm left here feeling stupid
    Oh, the way he makes me feel that love isn't real
    Cupid is so dumb
    
    I look for his arrows every day
    I guess he got lost or flew away
    Waiting around is a waste (waste)
    Been counting the days since November
    Is loving as good as they say?
    
    Now I'm so lonely (lonely)
    Oh, I wish I'd find a lover that could hold me (hold me)
    Now I'm crying in my room
    So skeptical of love (say what you say, but I want it more)
    But still I want it more, more, more
    
    I gave a second chance to Cupid
    But now I'm left here feeling stupid
    Oh, the way he makes me feel that love isn't real
    Cupid is so dumb
    
    (Cupid is so dumb)
    
    Hopeless girl is seeking
    Someone who will share this feeling
    I'm a fool, a fool for love
    A fool for love
    
    I gave a second chance to Cupid
    But now I'm left here feeling stupid
    Oh, the way he makes me feel that love isn't real
    Cupid is so dumb
    
    I gave a second chance to Cupid
    But now I'm left here feeling stupid
    Oh, the way he makes me feel that love isn't real
    Cupid is so dumb
    `
  },
  {
    "id": 3,
    "albumId": 3,
    "title": "Tu Falta de Querer",
    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/6c/e6/c7/6ce6c71b-9c90-9040-622e-524f1a878135/15UMGIM37781.rgb.jpg/1200x1200bf-60.jpg",
    "artists": ["Mon Laferte"],
    "album": "Tu Falta de Querer",
    "duration": "4:05",
    "lyrics": `Hoy volví a dormir en nuestra cama
    Y todo sigue igual
    El aire y nuestros gatos
    Nada cambiará
    Difícil olvidarte estando aquí, oh
    
    Te quiero ver
    Aún te amo y creo que hasta más que ayer
    La hiedra venenosa no te deja ver
    Me siento mutilada y tan pequeña
    
    Ven y cuéntame la verdad
    Ten piedad
    Y dime por qué, no, no no
    Cómo fue que me dejaste de amar
    Yo aun podía soportar tu tanta falta de querer
    
    Hace un mes solía escucharte
    Y ser tu cómplice
    Pensé que ya no había nadie más que tú
    Yo fui tu amiga y fui tu compañera
    
    Ahora dormiré
    Muy profundamente para olvidar
    Quisiera hasta la muerte para no pensar
    Me borro pa' quitarme esta amargura
    
    Ven y cuéntame la verdad
    Ten piedad
    Y dime por qué, no, no no
    Cómo fue que me dejaste de amar
    Yo aun podía soportar tu tanta falta de querer
    
    Ven y cuéntame la verdad
    Ten piedad
    Y dime por qué, no, no no
    Cómo fue que me dejaste de amar
    Yo aun podía soportar tu tanta falta de querer`
  },
  {
    "id": 4,
    "albumId": 4,
    "title": "Until I Found You (Piano Version)",
    "image": "https://i.scdn.co/image/ab67616d0000b273eabddae72a3b1a5ed51d1ac6",
    "artists": ["Stephen Sanchez"],
    "album": "Until I Found You (Piano Version)",
    "duration": "3:15",
    "lyrics": `Georgia
    Wrap me up in all your
    I want ya in my arms
    Oh, let me hold ya
    
    I'll never let you go again like I did
    Oh, I used to say
    
    I would never fall in love again until I found her
    I said, I would never fall unless it's you I fall into
    I was lost within the darkness, but then I found her
    I found you
    
    Georgia
    Pulled me in, I asked to love her
    Once again you fell, I caught ya
    
    I'll never let you go again like I did
    Oh, l used to say
    
    I would never fall in love again until I found her
    I said I would never fall unless it's you I fall into
    I was lost within the darkness, but then I found her
    I found you
    
    I would never fall in love again until I found her
    I said, I would never fall unless it's you I fall into
    I was lost within the darkness, but then I found her
    I found you`
  },
  {
    "id": 5,
    "albumId": 5,
    "title": "Un Osito de Peluche de Taiwán",
    "image": "https://www.losautenticosdecadentes.com.ar/img/albumes/sigue-tu-camino.jpg",
    "artists": ["Los Auténticos Decadentes"],
    "album": "Un Osito de Peluche de Taiwán",
    "duration": "4:47",
    "lyrics": `Dentro de tus ojos veo un lago donde un hada
    Se desnuda para que la adore el Sol
    La melancolía de la tarde me ha ganado el corazón
    Y se nubla de dudas
    
    Son esos momentos en que uno se pone a reflexionar
    Y alumbra una tormenta
    Todo es tan tranquilo que el silencio anuncia el ruido
    De la calma que antecede al huracán
    
    De repente, no puedo respirar
    Necesito un poco de libertad
    Que te alejes por un tiempo de mi lado
    Que me dejes en paz
    
    Siempre fue mi manera de ser
    No me trates de comprender
    No hay nada que se pueda hacer
    Soy un poco paranoico, lo siento
    
    Al ratito, ya te empiezo a extrañar
    Me preocupa que te pueda perder
    Necesito que te acerques a mí
    Para sentir el calor de tu cuerpo
    
    Un osito de peluche de Taiwán
    Una cáscara de nuez en el mar
    Suavecito, como alfombra de piel
    Delicioso, como el dulce de leche
    
    Dentro de mi lecho, duerme un ángel que suspira boquiabierto
    Entre nubes de algodón
    Junto con la luz de la mañana se despierta la razón
    Y amanece la duda
    
    Son esos momentos en que uno se pone a reflexionar
    Y alumbra una tormenta
    Todo es tan tranquilo que el silencio anuncia el ruido
    De la calma que antecede al huracán
    
    De repente, no puedo respirar
    Necesito un poco de libertad
    Que te alejes, por un tiempo, de mi lado
    Que me dejes en paz
    
    Siempre fue mi manera de ser
    No me trates de comprender
    No hay nada que se pueda hacer
    Soy un poco paranoico, lo siento
    
    Al ratito, ya te empiezo a extrañar
    Me preocupa que te pueda perder
    Necesito que te acerques a mí
    Para sentir el calor de tu cuerpo
    
    Un osito de peluche de Taiwán
    Una cáscara de nuez en el mar
    Suavecito, como alfombra de piel
    Delicioso, como el dulce de leche
    
    Al ratito, ya te empiezo a extrañar
    Me preocupa que te pueda perder
    Necesito que te acerques a mí
    Para sentir el calor de tu cuerpo
    
    Un osito de peluche de Taiwán
    Una cáscara de nuez en el mar
    Suavecito, como alfombra de piel
    Delicioso, como el dulce de leche
    
    Un osito de peluche de Taiwán`
  },
  {
    "id": 6,
    "albumId": 6,
    "title": "King Of The Jungle",
    "image": "https://i.scdn.co/image/ab67616d0000b273c75d7b12b6b6eacea1e21068",
    "artists": ["Shanguy"],
    "album": "King Of The Jungle",
    "duration": "2:39",
    "lyrics": `Viens j't'emmène sur ma planète
    Ici c'est pas comme à l'école
    Tu verras, c'est super chouette
    Entre adultes, on fait la fête
    Un Deroxat et tu décolles
    
    Walk into another dimension
    A little bit high, a little bit low (it's a jungle)
    Just another form of dementia
    You gotta get on top, be king of 'em all
    
    And singing la-la-la-la-la-la
    You know you got it (king of the jungle)
    La-la-la-la-la-la, you better own it
    (King of the jungle)
    
    (King of the jungle)
    
    Ici partout c'est la jungle
    À Paris, London, Bangkok
    Ici-bas Tarzan est pingre
    Et ces lianes qui l'étranglent
    S'est pris les pieds dans ses dreadlocks
    
    Walk into another dimension
    A little bit high, a little bit low (it's a jungle)
    Just another form of dementia
    You gotta get on top, be king of 'em all
    
    And singing la-la-la-la-la-la
    You know you got it (king of the jungle)
    La-la-la-la-la-la, you better own it
    (King of the jungle)
    
    (King of the jungle)
    
    (So you wanna be king) C'est la jungle
    (You wanna be king of the jungle)
    (Your life is a dream) Un jeu d'épingle
    (You wanna be king of the jungle)
    
    And singing la-la-la-la-la-la
    You know you got it (king of the jungle)
    La-la-la-la-la-la, you better own it
    
    (King of the jungle)
    
    (King of the jungle)
    
    (King of the jungle)
    
    (King of the jungle)`
  },
  {
    "id": 7,
    "albumId": 7,
    "title": "Vivir Mi Vida",
    "image": "https://i.scdn.co/image/ab67616d0000b27321be16e998effa9f1f4b63a9",
    "artists": ["Marc Anthony"],
    "album": "Vivir Mi Vida",
    "duration": "4:11",
    "lyrics": `(Voy a reír, voy a bailar)
    (Vivir mi vida, la la la la)
    (Voy a reír, voy a gozar)
    Vivir mi vida, la la la la
    
    (Voy a reír) ¡Eso!(Voy a bailar)
    Vivir mi vida, la la la la
    (Voy a reír) voy a gozar
    Vivir mi vida, la la la la
    
    A veces llega la lluvia
    Para limpiar las heridas
    A veces solo una gota
    Puede vencer la sequía
    
    ¿Y para qué llorar? ¿Pa' qué?
    Si duele una pena, se olvida
    ¿Y para qué sufrir? ¿Pa' qué?
    Si así es la vida, hay que vivirla, la la le
    
    (Voy a reír, voy a bailar)
    Vivir mi vida, la la la la
    (Voy a reír) voy a gozar
    Vivir mi vida, la la la la
    ¡Eso!
    
    Voy a vivir el momento
    Para entender el destino
    Voy a escuchar en silencio
    Para encontrar el camino
    
    ¿Y para qué llorar? ¿Pa' qué?
    Si duele una pena, se olvida
    ¿Y para qué sufrir? ¿Pa' qué?
    Si duele una pena, se olvida, la la le
    
    (Voy a reír, voy a bailar)
    Vivir mi vida, la la la la
    Voy a reír, voy a gozar
    Vivir mi vida, la la la la
    
    ¡Mi gente!
    ¡Toma!
    
    (Voy a reír, voy a bailar)
    ¿Pa' qué llorar? ¿Pa' que sufrir?
    Empieza a soñar, a reír
    (Voy a reír) ¡ojoma! (Voy a bailar)
    Siente y baila y goza
    Que la vida es una sola
    (Voy a reír, voy a bailar)
    Vive, sigue
    Siempre pa' lante, no mires pa' atrás
    ¡Eso!
    Mi gente
    La vida es una
    
    Voy a reír, voy a bailar
    Vivir mi vida la la la la
    Voy a reír, voy a gozar
    Vivir mi vida, la la la la`
  },
  {
    "id": 8,
    "albumId": 8,
    "title": "La Camisa Negra",
    "image": "https://i.scdn.co/image/ab67616d0000b273c091c40987e92a9256d2f210",
    "artists": ["Juanes"],
    "album": "La Camisa Negra",
    "duration": "3:36",
    "lyrics": `(No por pobre y feo hombre, ¿pero antojao'?)
    (Ay, no)
    
    Tengo la camisa negra
    Hoy mi amor está de luto
    Hoy tengo en el alma una pena
    Y es por culpa de tu embrujo
    
    Hoy sé que tú ya no me quieres
    Y eso es lo que más me hiere
    Que tengo la camisa negra
    Y una pena que me duele
    
    Mal parece que solo me quedé
    Y fue pura todita tu mentira
    Que maldita mala suerte la mía
    Que aquel día te encontré
    
    Por beber del veneno malevo de tu amor
    Yo quedé moribundo y lleno de dolor
    Respiré de ese humo amargo de tu adiós
    Y desde que tú te fuiste yo solo tengo
    
    Tengo la camisa negra
    Porque negra tengo el alma
    Yo por ti perdí la calma
    Y casi pierdo hasta mi cama
    
    Cama, cama, come on, baby
    Te digo con disimulo
    Que tengo la camisa negra
    Y debajo tengo el difunto
    
    (Pa' enterrártelo cuando quieras mamita)
    (Juya)
    
    (Así como lo oyes mija)
    
    Tengo la camisa negra
    Ya tu amor no me interesa
    Lo que ayer me supo a gloria
    Hoy me sabe a pura
    Miércoles por la tarde y tú que no llegas
    Ni siquiera muestras señas
    Y yo con la camisa negra
    Y tus maletas en la puerta
    
    Mal parece que solo me quedé
    Y fue pura todita tu mentira
    Que maldita mala suerte la mía
    Que aquel día te encontré
    
    Por beber del veneno malevo de tu amor
    Yo quedé moribundo y lleno de dolor
    Respiré de ese humo amargo de tu adiós
    Y desde que tú te fuiste yo solo tengo
    
    Tengo la camisa negra
    Porque negra tengo el alma
    Yo por ti perdí la calma
    Y casi pierdo hasta mi cama
    
    Cama, cama, come on, baby
    Te digo con disimulo
    Que tengo la camisa negra
    Y debajo tengo el difunto
    
    Tengo la camisa negra
    Porque negra tengo el alma
    Yo por ti perdí la calma
    Y casi pierdo hasta mi cama
    
    Cama, cama, come on, baby
    Te digo con disimulo
    Que tengo la camisa negra
    Y debajo tengo el difunto`
  },
  {
    "id": 9,
    "albumId": 9,
    "title": "Bailando",
    "image": "https://i.scdn.co/image/ab67616d0000b273c725c87a1394f9558e7fa9c8",
    "artists": ["Enrique Iglesias"],
    "album": "Bailando",
    "duration": "4:03",
    "lyrics": `Enrique Iglesias
    One love, one love
    Gente de Zona
    Descemer
    
    Yo te miro y se me corta la respiración
    Cuando tú me miras se me sube el corazón 
    (Me palpita lento el corazón)
    Y en silencio tu mirada dice mil palabras
    La noche en la que te suplico que no salga el sol
    
    Bailando (bailando) 
    Bailando (bailando)
    Tu cuerpo y el mío llenando el vacío
    Subiendo y bajando (subiendo y bajando)
    Bailando (bailando) 
    Bailando (bailando)
    Ese fuego por dentro me va enloqueciendo
    Me va saturando
    
    Con tu física y tu química, también tu anatomía
    La cerveza y el tequila y tu boca con la mía
    Ya no puedo más (ya no puedo más) 
    Ya no puedo más (ya no puedo mas)
    Con esta melodía, tu color, tu fantasía
    Con tu filosofía mi cabeza está vacía
    Ya no puedo más (ya no puedo más)
    Ya no puedo más (ya no puedo más)
    
    Yo quiero estar contigo, vivir contigo
    Bailar contigo, tener contigo una noche loca (una noche loca)
    Ay, besar tu boca (y besar tu boca)
    Yo quiero estar contigo, vivir contigo
    Bailar contigo, tener contigo una noche loca
    Con tremenda nota
    
    (Oh-oh-oh-oh)
    (Oh-oh-oh-oh)
    (Oh-oh-oh-oh)
    (Oh-oh-oh-oh)
    
    Tú me miras y me llevas a otra dimensión 
    (Estoy en otra dimensión)
    Tus latidos aceleran a mi corazón
    (Tus latidos aceleran a mi corazón)
    Qué ironía del destino no poder tocarte
    Abrazarte y sentir la magia de tu olor
    
    Bailando (bailando) 
    Bailando (bailando)
    Tu cuerpo y el mío llenando el vacío
    Subiendo y bajando (subiendo y bajando)
    Bailando (bailando) 
    Bailando (bailando)
    Ese fuego por dentro me va enloqueciendo
    Me va saturando
    
    Con tu física y tu química, también tu anatomía
    La cerveza y el tequila y tu boca con la mía
    Ya no puedo más (ya no puedo más)
    Ya no puedo más (ya no puedo más)
    Con esta melodía, tu color, tu fantasía
    Con tu filosofía mi cabeza está vacía
    Y ya no puedo más (ya no puedo más)
    Ya no puedo más (ya no puedo más)
    
    Yo quiero estar contigo, vivir contigo
    Bailar contigo, tener contigo una noche loca (una noche loca)
    Ay besar tu boca (y besar tu boca)
    Yo quiero estar contigo, vivir contigo
    Bailar contigo, tener contigo una noche loca
    Con tremenda nota
    
    (Oh-oh-oh-oh)
    (Oh-oh-oh-oh)
    (Oh-oh-oh-oh)
    (Oh-oh-oh-oh)
    (Oh-oh-oh-oh)
    (Oh-oh-oh-oh)
    (Oh-oh-oh-oh)
    (Oh-oh-oh-oh)
    (Oh-oh-oh-oh) bailando, amor
    (Oh-oh-oh-oh) bailando, amor
    (Oh-oh-oh-oh) 
    Es que se me va el dolor (oh-oh-oh-oh)`
  },
  {
    "id": 10,
    "albumId": 10,
    "title": "Danza Kuduro",
    "image": "https://lh3.googleusercontent.com/WZx94Asj29Zm7VkrxrEsk4dQzg0mPbGChm-1jhX8LQIgAkJ1mcRdq2o9CwAjZIUJm6O9pViJxxhuUto=w544-h544-l90-rj",
    "artists": ["Don Omar"],
    "album": "Danza Kuduro",
    "duration": "3:18",
    "lyrics": `A&X
    El Orfanato
    Danza Kuduro
    (Plop, plop, plop, plop, plop, plop, plop)
    Lucenzo
    El Rey
    
    La mano arriba
    Cintura sola
    Da media vuelta
    Danza Kuduro
    
    No te canse' ahora
    Que esto solo empieza
    Mueve la cabeza
    Danza Kuduro
    
    La mano arriba
    Cintura sola
    Da media vuelta
    Danza Kuduro
    
    No te canse' ahora
    Que esto solo empieza
    Mueve la cabeza
    Danza Kuduro
    
    ¿Quién puede domar la fuerza del mal que se mete por tus venas? (oh)
    Lo caliente del sol que se te metió y no te deja quieta, nena (toma, toma)
    ¿Quién puede parar eso que, al bailar, descontrola tus caderas? (sexy)
    Y ese fuego que quema por dentro y lento, te convierte en fiera (ajá)
    
    Con la mano arriba
    Cintura sola
    Da media vuelta
    Y sacude duro
    
    No te quite' ahora
    Que esto solo empieza
    Mueve la cabeza
    Y sacude duro
    
    Balançar que é uma loucura
    Morena vem o meu lado
    Ninguém vai ficar parado
    Quero ver mexe cú duro
    
    Balançar que é uma loucura
    Morena vem o meu lado
    Ninguém vai ficar parado, oh-oh
    Oi, oi, oi, oi-oi, oi, oi
    
    Vem para quebrar kuduro, vamos dançar kuduro
    Oi, oi, oi, oi-oi, oi, oi
    Ta issa morena o loira vem balançar kuduro
    Oi, oi, oi
    
    La mano arriba
    Cintura sola
    Da media vuelta
    Danza Kuduro
    
    No te canse' ahora
    Que esto solo empieza
    Mueve la cabeza
    Danza Kuduro
    
    La mano arriba
    Cintura sola
    Da media vuelta
    Danza Kuduro
    
    No te canse' ahora
    Que esto solo empieza
    Mueve la cabeza
    Danza Kuduro
    
    Balançar que é uma loucura
    Morena vem o meu lado
    Ninguém vai ficar parado
    Quero ver mexe cú duro
    
    Balançar que é uma loucura
    Morena vem o meu lado
    Ninguém vai ficar parado, oh-oh
    Oi, oi, oi, oi-oi, oi, oi
    
    Vem para quebrar kuduro, vamos dançar kuduro
    Oi, oi, oi, oi-oi, oi, oi
    Ta issa morena o loira vem balançar kuduro
    Oi, oi, oi
    
    El Orfanato
    
    La mano arriba
    Cintura sola
    Da media vuelta
    Danza Kuduro
    
    No te canse' ahora
    Que esto solo empieza
    Mueve la cabeza
    Danza Kuduro
    
    La mano arriba
    Cintura sola
    Da media vuelta
    Danza Kuduro
    
    No te canse' ahora
    Que esto solo empieza
    Mueve la cabeza
    Danza Kuduro
    
    A&X`
  },
  {
    "id": 11,
    "albumId": 11,
    "title": "Limón y Sal",
    "image": "https://i.scdn.co/image/ab67616d0000b273a043fa84be801dca33dacca1",
    "artists": ["Julieta Venegas"],
    "album": "Limón y Sal",
    "duration": "3:25",
    "lyrics": `Tengo que confesar que a veces
    No me gusta tu forma de ser
    Luego te me desapareces
    Y no entiendo muy bien por qué
    
    No dices nada romántico
    Cuando llega el atardecer
    Te pones de un humor extraño
    Con cada luna llena al mes
    
    Pero a todo lo demás
    Le gana lo bueno que me das
    Solo tenerte cerca
    Siento que vuelvo a empezar
    
    Yo te quiero con limón y sal
    Yo te quiero tal y como estás
    No hace falta cambiarte nada
    Yo te quiero si vienes o si vas
    Si subes y si bajas y no estás
    Seguro de lo que sientes
    
    Tengo que confesarte ahora
    Nunca creí en la felicidad
    A veces algo se le parece
    Pero es pura casualidad
    
    Luego me vengo a encontrar
    Con tus ojos me dan algo más
    Sólo tenerte cerca
    Siento que vuelvo a empezar
    
    Yo te quiero con limón y sal
    Yo te quiero tal y como estás
    No hace falta cambiarte nada
    Yo te quiero si vienes o si vas
    Si subes y si bajas y no estás
    Seguro de lo que sientes
    
    Yo te quiero con limón y sal
    Yo te quiero tal y como estás
    No hace falta cambiarte nada
    Yo te quiero si vienes o si vas
    Si subes y si bajas y no estás
    Seguro de lo que sientes
    
    Sólo tenerte cerca
    Siento que vuelvo a empezar`
  },
  {
    "id": 12,
    "albumId": 12,
    "title": "Matador",
    "image": "https://images.genius.com/5e94e386f9f2c1199cf15eb98286ec73.960x960x1.png",
    "artists": ["Los Fabulosos Cadillacs"],
    "album": "Matador",
    "duration": "4:34",
    "lyrics": `Te están buscando matador

    Me dicen el matador, nací en barracas
    Si hablamos de matar mis palabras matan
    No hace mucho tiempo que cayó el León Santillan
    Y ahora sé que en cualquier momento me las van a dar
    
    (Ma-matador, ma-matador)
    ¿Dónde estás, matador?
    (Ma-matador, ma-matador)
    
    Me dicen el matador me están buscando
    En una fría pensión los estoy esperando
    Agazapado en lo más oscuro de mi habitación
    Fusil en mano, espero mi final
    
    (Ma-matador, ma-matador)
    La cana te busca matador
    (Ma-matador, ma-matador)
    La cana te quiere matador 
    
    Hey, hey
    Hey, hey
    
    Matador, matador
    ¿Dónde estás, matador?
    Matador, matador
    No te vayas, matador
    Matador, oh yeah
    Matador, matador
    
    Viento de libertad sangre combativa
    En los bolsillos del pueblo la vieja herida
    De pronto el día se me hace de noche
    Murmullos, corridas
    Aquel golpe en la puerta, llego la fuerza policial
    
    (Ma-matador, ma-matador)
    Mira hermano en que terminaste
    (Ma-matador, ma-matador)
    Por pelear por un mundo mejor
    
    Que suenan, son balas
    Me alcanzan, me atrapan
    Resiste, Víctor Jara
    No calla
    Matador, matador
    Matador te están buscando
    Matador, matador
    Matador te están matando
    Matador, oh yeah
    Matador, matador
    Valiente matador
    
    Me dicen el matador de los 100 barrios porteños
    No tengo por que tener miedo mis palabras son balas
    Balas de paz, balas de justicia
    Soy la voz de los que hicieron callar sin razón
    Por el solo hecho de pensar distinto, ay Dios
    Santa María de los Buenos Aires
    Si todo estuviera mejor
    
    Matador, matador
    Si todo estuviera mejor
    Matador, matador
    ¿A dónde vas, matador?
    Matador, oh yeah
    Matador, matador
    
    Hey hey
    Hey hey!`
  }
];
