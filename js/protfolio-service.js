'use strict';

var gProt=[];
var gProjIds = ['minesweeper', 'gameOfLife', 'sprint2','sprint3','sprint4'];
var gProjNames = ['my-mineSweeper','my-gameOfLife','my-project','my-project','my-project'];
var gTitles =['board-game','board-Ilustation','project','project','project'];
var gDesription = ['The same game of minesweeper form windows 98, with some improvals and fun design',
 'bord-game with Icons that describes how the life circle is going on', 'sprint2- to add', 'sprint3- to add','sprint4-to add'];
var gLabels = ['board-game','board-Ilustation','project','matrixes', 'keybord events', 'localStorage'];


function creatProtfolios(){
    for (var i = 0; i < protLength; i++){
        gProt.push(creatProtfolio(gProjIds[i],gProjNames[i],gTitles[i],gDesription[i]));
    }
}


function creatProtfolio(id, name, title, desiription){
    return  {
        id: id,
        name: name,
        title: title,
        description: desiription,
        url: name,
        publishAt: getTimeStemp(),
        lables: ['board-game','board-Ilustation','project','matrixes', 'keybord events', 'localStorage']
    }
}

function getProjectById(id){
  var project = gProt.find(element => element.id === id);
  return project;
}

function sendInfo(){
var $elMessage = $('#message');
var $elSub= $('#subject');
window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=chenedri22@gmail.com&su=${$elSub.val()}&body=${$elMessage.val()}`);
}