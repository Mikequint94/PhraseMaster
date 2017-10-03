
// import Key from "../api_key.js";

class Translator {
  constructor() {

  }
  static translate(string, language) {
    let apiKey = config.API_KEY;
    let translations = {};
    let strings = [];
    let i=0;
    // let key = Key.new();
    // console.log(key);
    for (i=0; i < language.length; i++) {
      strings[i] = string + " " + (i);
      // console.log(strings[i]);
    $.ajax({
      method: "POST",
      url: "https://translation.googleapis.com/language/translate/v2?key=" + apiKey,
      data: {
        'q': strings[i],
        'target': language[i]
      }
    }).then((data) => {
      // console.log(data);
      // console.log(idx);
      translations[data.data.translations[0].translatedText.slice(-1)] = (data.data.translations[0].translatedText.slice(0, -2).replace("&#39;", "'"));
      // console.log(translations);


    });
    if (i === language.length - 1) {
      return translations;
      // console.log(translations);
    }
  }

}




}
module.exports = Translator;

// const languages = ['sv', 'es', 'de', 'fr', 'zh-CN', 'iw', 'ru', 'no'];
