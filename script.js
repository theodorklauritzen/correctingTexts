function check() {
  var input = document.getElementById("input");
  var output = "";

  output = input.value;
  output = output.split(/\n/);
  pushed = [];

  for(var i = 0; i < output.length; i++) {
    //pushed.push(nlp.pos(output[i]).to_past().text());
    /*var loop = nlp.pos(output[i]).tags();
    for(var j = 0; j < loop.length; j++) {
      for(var k = 0; k < loop[j].length; k++) {
        splittedPOS = loop[j][k].split("");
        if(splittedPOS[0] === "V" && splittedPOS[1] === "B") {
          console.log("VERB");
        }
      }
    }*/

    var rs = new RiString(output[i]);
    var words = rs.words();
    var p = [];

    for(var j = 0; j < words.length; j++) {
      var tags = nlp.pos(words[j]).tags();
      if(tags[0] != null) {
        var splitted = tags[0][0].split("");
        console.log(splitted);
        if(splitted[0] === "V" && splitted[1] === "B") {
          var color;
          if(splitted[2] == null) {
            color = "red";
          } else {
            var data = {
              D: "blue",
              N: "green",
              P: "orange",
              Z: "yellow",
              G: "gray"
            };

            color = data[splitted[2]]
          }
          console.log(color);

          p.push("<a style=\"background-color: " + color + ";\">" + words[j] + "</a>");
        } else {
          p.push(words[j]);
        }
      } else {
        p.push(words[j]);
      }
    }

    pushed.push(p.join(" "));
  }
  output = pushed.join("<br />");

  //output = nlp.pos(output).to_past().text();

  //output = output.split(/\n/).join("<br />");;

  document.getElementById("output").innerHTML = output;
}
