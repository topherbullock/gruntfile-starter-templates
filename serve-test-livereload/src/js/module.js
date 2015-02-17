var blah = {
  frenchies : "French Bulldog Time!",
  howMuchILoveFrenchies : Infinity,
  frenchieGifs : [
    "http://www.allstarfrenchbulldogs.com/LilDebConeGif.gif",
    "http://25.media.tumblr.com/tumblr_lu6bewBpPb1qb9pa3o1_500.gif",
    "http://www.gifbin.com/bin/122013/1386790251_frenchie_vs_stick.gif",
    // "http://cdn.gifbay.com/2014/01/french_bulldog_appreciates_a_carrot-112424.gif"
  ],
  showDemFrenchies : function showDemFrenchies(){

    blah._h1 = document.getElementById("title");
    // //Uncomment to passs tests (Uncomment failing test first)
    // blah._h1.innerHTML = blah.frenchies;

    var imgCollection = document.getElementsByTagName("img"),
        imgs = Array.prototype.slice.call(imgCollection);

    imgs.forEach(function eachImg(img, index) {
      img.setAttribute("src", blah.frenchieGifs[index]);
    });
  }
};
