String.prototype.replaceAll = function(target, replacement) {
  return this.split(target).join(replacement);
};

class Translator {
  constructor() {
  }
  static translate(string, language) {
    // let apiKey = config.API_KEY;
    let apiKey = "AIzaSyAm3jJ2iUD6Q-iLrAsy5qCCy52jH8sH7Tw";
    let translations = {};
    let strings = [];
    let i=0;
    for (i=0; i < language.length; i++) {
      strings[i] = string + " =" + (i);
    $.ajax({
      method: "POST",
      url: "https://translation.googleapis.com/language/translate/v2?key=" + apiKey,
      data: {
        'q': strings[i],
        'target': language[i]
      }
    }).then((data) => {
      translations[data.data.translations[0].translatedText.slice(-1)] = (data.data.translations[0].translatedText.slice(0, -3).replace("&#39;","'").replace("&#39;","'").replace("&#39;","'"));
    });
    if (i === language.length - 1) {
      return translations;
    }
  }
}
}
module.exports = Translator;
