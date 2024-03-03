function make_album(artistName: string, albumTitle: string, numberofTracks?: number):{artist: string, title:string, tracks?: number}{
    const album: { artist: string, title: string, tracks?: number }={
        artist: artistName,
        title: albumTitle
    };
    if ( numberofTracks !== undefined){
        album.tracks = numberofTracks;
    }
    return album;
}
const album1 = make_album("prince", "purple rain");
const album2 = make_album("micheal", "thriller",12);
const album3 = make_album("bruno mars", "24k magic");

console.log(album1);
console.log(album2);
console.log(album3);