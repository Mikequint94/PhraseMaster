// const translate = require('google-translate-api');
// import translate from 'google-translate-api';
class Translator {
  constructor() {

  }
  static translate(string, language) {
    let translations = [];
    let i=0;
    for (i=0; i < language.length; i++) {
    $.ajax({
      method: "POST",
      url: "https://translation.googleapis.com/language/translate/v2?key=AIzaSyBWy35JH8z8FOUwjoVCuM98f_T8ZgA1dRo",
      data: {
        'q': string,
        'target': language[i]
      }
    }).then(data => {
      translations.push(data.data.translations[0].translatedText);
      console.log(translations);
      return translations
    });
  }

}




}
module.exports = Translator;

// const languages = ['sv', 'es', 'de', 'fr', 'zh-CN', 'iw', 'ru', 'no'];
