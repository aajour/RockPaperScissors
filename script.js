function createPlayers() {
  var result = 0;
  return {
    showResult: function() {
      return result;
    },
    increaseResult: function() {
      result = result + 1;
    },
    resetResult: function() {
      result = 0;
    }
  };
}

$(function() {
  var player = createPlayers();
  var computer = createPlayers();

  $("#playerResutl").text(player.showResult());
  $("#computerResutl").text(computer.showResult());

  function resultCheck(choice1, choice2) {
    var result;
    if (choice1 == "paper" && choice2 == "rock") {
      result = 1;
    }
    if (choice1 == "paper" && choice2 == "sci") {
      result = 2;
    }

    if (choice1 == "rock" && choice2 == "paper") {
      result = 2;
    }
    if (choice1 == "rock" && choice2 == "sci") {
      result = 1;
    }

    if (choice1 == "sci" && choice2 == "rock") {
      result = 2;
    }
    if (choice1 == "sci" && choice2 == "paper") {
      result = 1;
    }
    if (choice1 == "sci" && choice2 == "sci") {
      result = 3;
    }
    if (choice1 == "paper" && choice2 == "paper") {
      result = 3;
    }
    if (choice1 == "rock" && choice2 == "rock") {
      result = 3;
    }

    return result;
  }
  function showModal(imgId) {
    var randomImg = getRandomImg();

    $("#modalImg").attr("src", "images/" + imgId + ".JPG");
    $("#choosedSpan").text(randomImg);

    if (resultCheck(imgId, randomImg) == 1) {
      player.increaseResult();
      $("#resultSpan").text("You Win");
    }
    if (resultCheck(imgId, randomImg) == 2) {
      computer.increaseResult();
      $("#resultSpan").text("You Lose");
    }
    if (resultCheck(imgId, randomImg) == 3) {
      $("#resultSpan").text("It's draw");
    }
    modal.style.display = "block";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  function getRandomImg() {
    var arr = ["paper", "rock", "sci"];
    return arr[Math.floor(Math.random() * arr.length)];
  }

  $("img").on("click", function(event) {
    var clicked = event.target.id;

    showModal(clicked);
  });
  $("#restart").on("click", function() {
    player.resetResult();
    computer.resetResult();
    $("#playerResutl").text(player.showResult());
    $("#computerResutl").text(computer.showResult());
  });
  $("#close").on("click", function() {
    $("#playerResutl").text(player.showResult());
    $("#computerResutl").text(computer.showResult());
    closeModal();
  });
});
