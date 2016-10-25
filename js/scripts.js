var values = ["fps", "mmo", "arpg", "casual", "rts", "classic", "multiplayer", "pc", "ambiguous", "esports", "ridiculous", "economy"];

var casuals = ["classic", "casual", "economy"];
var gamers = ["ridiculous", "esports", "multiplayer", "ambiguous"];
var hardcores = ["fps", "mmo", "arpg", "rts", "classic", "esports", "pc"];

function whichResult(casual, gamer, hardcore) {
  if (hardcore > gamer && hardcore > casual) {
    $("#hardcore").show();
  } else if (gamer >= hardcore && gamer > casual) {
    $("#gamer").show();
  } else {
    $("#casual").show();
  }
};

$(function() {
  $('form').submit( function(event) {
    event.preventDefault();

    $("#hardcore").hide();
    $("#gamer").hide();
    $("#casual").hide();

    var filthyCasual = 0;
    var regularGamer = 0;
    var pcMasterrace = 0;
    $("input:checkbox[name=games]:checked").each(function() {
      var games = $(this).val();
      if (casuals.indexOf(games) > -1) {
        filthyCasual++;
      };
      if (gamers.indexOf(games) > -1) {
        regularGamer++;
      };
      if (hardcores.indexOf(games) > -1) {
        pcMasterrace++;
      };
    });
    console.log(filthyCasual);
    console.log(regularGamer);
    console.log(pcMasterrace);

    whichResult(filthyCasual,regularGamer,pcMasterrace);
  });
});
