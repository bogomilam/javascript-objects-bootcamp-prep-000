var playlist = {"Alienata":"TLR","alien":"ufo"}




function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle
  return playlist
}

function removeFromPlaylist(playlist,artistName)
delete playlist.