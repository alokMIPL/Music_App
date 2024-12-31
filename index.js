
const $ = require('jquery');
// const mm = required('music-metadata');


let songData = {path:[], name:[]};

let audioPlayer = $('audio').get(0);




function chooseMusic() {
  $('input').click();
  console.log("clicked")
}

function musicSelected() {
  let files = $('input').get(0).files;
  // console.log(files)
  // for(let i = 0; i < files.length; i++) {
  //   let {name} = files[i];
  //   let {size} = files[i];
  //   let {type} = files[i];
  //   console.log(name)
  //   console.log(size)
  //   console.log(type)
  // }

  for (const fileDetails of files) {
    const { name, size, type } = fileDetails;
    songData.path[fileDetails] = name;
    songData.path[fileDetails] = size;
    // console.log(file)
    console.log(fileDetails.name, fileDetails.type, fileDetails.size)

    let songRow = `
      <tr ondblclick="playSong(${fileDetails})">
        <td>${fileDetails.name}</td>
        <td>${fileDetails.type}</td>
        <td>${secondsToTime(fileDetails.size)}</td>
      </tr>
    `
    $('#table-body').append(songRow)

  }
}


function secondsToTime(t){
  return padZero(parseInt((t / (60)) % 60)) + ":" +
  padZero(parseInt((t) % 60));
}

function padZero(v) {
  return (v < 10) ? '0' + v : v;
}


function playSong(i) {
  console.log(i)
  audioPlayer.src = songData.path[i];
  audioPlayer.load();
  audioPlayer.play();
  
}