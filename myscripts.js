var mundesite = ["roll: 1", "roll: 2", "roll: 3", "roll: 4", "roll: 5", "roll: 6"];

      function hidhZarin(){
      var rand1 = Math.round(Math.random()*5) + 1;
      var rand2 = Math.round(Math.random()*5) + 1;
      var rand3 = Math.round(Math.random()*5) + 1;
      var rand4 = Math.round(Math.random()*5) + 1;

      
      document.getElementById("mydice1").src = "img//d" + rand1 + ".png";
      document.getElementById("mydice2").src = "img//d" + rand2 + ".png";
      document.getElementById("hisdice1").src = "img//e" + rand3 + ".png";
      document.getElementById("hisdice2").src = "img//e" + rand4 + ".png";

      
      document.getElementById("mydice1").alt = mundesite[rand1];
      document.getElementById("mydice2").alt = mundesite[rand2];
      document.getElementById("hisdice1").alt = mundesite[rand3];
      document.getElementById("hisdice2").alt = mundesite[rand4];


      fituesi(rand1,rand2,rand3,rand4);
      }

      function fituesi(rand1,rand2,rand3,rand4){
        let player = rand1 + rand2 + 2;
        let computer = rand3 + rand4 + 2;
        let giffy = percaktoFituesin(player,computer);
        document.getElementById("message").src = "img//" + giffy;
        document.getElementById("message").alt = giffy;
      }

      function percaktoFituesin(you, enemy) {
        if (you < enemy) {
          return "loser.gif";
        }
        if (enemy < you) {
          return "winner.gif";
        }
        if (you == enemy) {
          return "same.gif";
        }
      }