export interface Artists {
    id: string;
    name: string;
    cover: string;
}

export const artist: Artists[] = [
    {
        id: "1",
        name: 'Avicii',
        cover: 'https://source.unsplash.com/random/100x100'
    },
    {
        id: "2",
        name: 'Mon Laferte',
        cover: 'https://source.unsplash.com/random/100x100'
    },
    {
        id: "3",
        name: 'Stephen Sanchez',
        cover: 'https://culture.affinitymagazine.us/wp-content/uploads/2022/07/BH210218_Stephen_Sanchez_07_1082-Photo-Credit-Brian-Higbee-scaled-e1658515745130.jpg'
    },
    {
        id: "4",
        name: 'FIFTY-FIFTY',
        cover: 'https://source.unsplash.com/random/100x100'
    },
    {
        id: "5",
        name: 'Los Auténticos Decadentes',
        cover: 'data:image/jpeg;base64,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'
    },
    {
        id: "6",
        name: 'Shanguy',
        cover: 'https://th.bing.com/th/id/OIP._AkCOp2Lhq27Ozj71wnvfAHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7'
    },
    {
        id: "7",
        name: 'Marc Anthony',
        cover: 'https://source.unsplash.com/random/100x100'
    },
    {
        id: "8",
        name: 'Juanes',
        cover: 'https://source.unsplash.com/random/100x100'
    },
    {
        id: "9",
        name: 'Enrique Iglesias',
        cover: 'https://source.unsplash.com/random/100x100'
    },
    {
        id: "10",
        name: 'Don Omar',
        cover: 'https://source.unsplash.com/random/100x100'
    },
    {
        id: "11",
        name: 'Julieta Venegas',
        cover: 'https://source.unsplash.com/random/100x100'
    },
    {
        id: "12",
        name: 'Los Fabulosos Cadillacs',
        cover: 'https://source.unsplash.com/random/100x100'
    }
];