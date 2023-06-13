interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const { song: anotherSong, songDuration, details } = audioPlayer;
const { author} =  details;

console.log('Song:', audioPlayer.song);
console.log('Song:', anotherSong);
console.log('Author:', author);


// Destructuracion de Arrays

const [, , bulma = 'Not Found']: string[] = ['Goku', 'Vegetta', 'Bulma'];

console.log('Personaje 3:', bulma);