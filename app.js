const searchSong = () => {
  const searchText = document.getElementById("search-field").value;
//   console.log(searchText);
  const url = `https://api.lyrics.ovh/suggest/:${searchText}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displaySongs(data.data))
}

const displaySongs = songs => {
  const songContainer = document.getElementById("song-container");
  songContainer.innerHTML= '';
// songs.forEach(song => console.log(song.title))
  songs.forEach(song => {
      // console.log(song);
    //    create song list item
    const songDiv = document.createElement('div');
    songDiv.className = `single-result row align-items-center my-3 p-3`;
    songDiv.innerHTML = `
<div class="col-md-9">
        <h3 class="lyrics-name">${song.title}</h3>
        <p class="author lead">Album by</span>${song.artist.name}</p>
          <audio controls>
           <source src="${song.preview}" type="audio/ogg">
          </audio
        </div>
        <div class="col-md-3 text-md-right text-center">
        <button onclick="getLyric('${song.artist.name}', '${song.title}')" class="btn btn-success">Get Lyrics</button>
 </div>
`;
    songContainer.appendChild(songDiv);
  })
}

// get lyrics-- 2 variable & 2 parameter-->  artist name ,title name

const getLyric = (artist, title) => {
    // console.log(artist, title);
    const url = ` https://api.lyrics.ovh/v1/:${artist}/:${title}`
fetch(url)
.then(res => res.json())
.then(data => displayLyrics(data.lyrics))
}

const displayLyrics = lyrics => {
    const lyricsDiv = document.getElementById('song-lyrics');
    lyricsDiv.innerText = lyrics;
}