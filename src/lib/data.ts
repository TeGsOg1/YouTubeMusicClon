import { colors } from "./colors";

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  image: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: '1',
    albumId: 1,
    title: "The Nights",
    color: colors.yellow,
    image:
      "https://i.scdn.co/image/ab67616d0000b2730ae4f4d42e4a09f3a29f64ad",
    artists: ["Avicii"],
  },
  {
    id: '2',
    albumId: 2,
    title: "Cupid (Twin Ver.)",
    color: colors.green,
    image:
      "https://i.scdn.co/image/ab67616d0000b27337c0b3670236c067c8e8bbcb",
    artists: ["FIFTY-FIFTY"],
  },
  {
    id: '3',
    albumId: 3,
    title: "Tu Falta de Querer",
    color: colors.rose,
    image:
      "/ttfq.jpg",
    artists: ["Mon Laferte"],
  },
  {
    id: '4',
    albumId: 4,
    title: "Until I Found You (Piano Version)",
    color: colors.blue,
    image:
      "https://i.scdn.co/image/ab67616d0000b273eabddae72a3b1a5ed51d1ac6",
    artists: ["Stephen Sanchez"],
  },
  {
    id: '5',
    albumId: 5,
    title: "Un Osito de Peluche de Taiwán",
    color: colors.purple,
    image:
      "/odpt.jpeg",
    artists: ["Los Auténticos Decadentes"],
  },
  {
    id: '6',
    albumId: 6,
    title: "King Of The Jungle",
    color: colors.orange,
    image:
      "https://i.scdn.co/image/ab67616d0000b273c75d7b12b6b6eacea1e21068",
    artists: ["Shanguy"],
  },
  {
    id: '7',
    albumId: 7,
    title: "Vivir Mi Vida",
    color: colors.red,
    image: "https://i.scdn.co/image/ab67616d0000b27321be16e998effa9f1f4b63a9",
    artists: ["Marc Anthony"],
  },
  {
    id: '8',
    albumId: 8,
    title: "La Camisa Negra",
    color: colors.red,
    image: "https://i.scdn.co/image/ab67616d0000b273c091c40987e92a9256d2f210",
    artists: ["Juanes"],
  },
  {
    id: '9',
    albumId: 9,
    title: "Bailando",
    color: colors.blue,
    image: "https://i.scdn.co/image/ab67616d0000b273c725c87a1394f9558e7fa9c8",
    artists: ["Enrique Iglesias"],
  },
  {
    id: '10',
    albumId: 10,
    title: "Danza Kuduro",
    color: colors.orange,
    image: "https://lastfm.freetls.fastly.net/i/u/500x500/834d94f3d8e7491fc9214a86d4262d9b.jpg",
    artists: ["Don Omar"],
  },
  {
    id: '11',
    albumId: 11,
    title: "Limón y Sal",
    color: colors.green,
    image: "https://i.scdn.co/image/ab67616d0000b273a043fa84be801dca33dacca1",
    artists: ["Julieta Venegas"],
  },
  {
    id: '12',
    albumId: 12,
    title: "Matador",
    color: colors.purple,
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
    "image": "/ttfq.jpg",
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
    "image": "data:image/jpeg;base64,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",
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
