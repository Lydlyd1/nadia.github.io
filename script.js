function getMusicByMood() {
    var selectedMood = document.getElementById("mood").value;
    var songs;

    switch (selectedMood) {
        case "happy":
            songs = [
                { title: "What Makes You Beautiful", artist: "One Direction", link: "https://www.youtube.com/watch?v=QJO3ROT-A4E" },
                { title: "Cupid", artist: "Fifty Fifty", link: "https://www.youtube.com/watch?v=5Ejp7yFZxPM" },
                { title: "Shake It Off", artist: "Taylor Swift", link: "https://www.youtube.com/watch?v=8xG7mH8i-WE" }
            ];
            break;
        case "sad":
            songs = [
                { title: "Payphone", artist: "Maroon 5, Wiz Khalifa", link: "https://www.youtube.com/watch?v=fuP4Lkt1vAo" },
                { title: "You Belong with Me", artist: "Taylor Swift", link: "https://www.youtube.com/watch?v=AYOlVp_mLsY" },
                { title: "Talking to the Moon", artist: "Bruno Mars", link: "https://www.youtube.com/watch?v=fXw0jcYbqdo" }
            ];
            break;
        case "relaxed":
            songs = [
                { title: "The Lazy Song", artist: "Bruno Mars", link: "https://www.youtube.com/watch?v=fXw0jcYbqdo" },
                { title: "Girls Like You", artist: "Maroon 5, Cardi B", link: "https://www.youtube.com/watch?v=aJOTlE1K90k" },
                { title: "Rewrite the Stars", artist: "Zac Efron, Zendaya", link: "https://www.youtube.com/watch?v=RI-HOQ27QEM" }
            ];
            break;
        default:
            songs = [];
    }

    displayPlaylist(songs);
}

function displayPlaylist(songs) {
    var playlistSection = document.getElementById("playlist");
    playlistSection.innerHTML = "";

    songs.forEach(function(song) {
        var card = document.createElement("div");
        card.className = "card";
        card.innerHTML = "<h3>" + song.title + "</h3><p>Artist: " + song.artist + "</p><a href='" + song.link + "' target='_blank' class='play-button'>Play on YouTube</a>";
        playlistSection.appendChild(card);
    });
}
