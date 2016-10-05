// --------------------------------------------------------
// Pretty Photo for Lightbox Image
// --------------------------------------------------------
$(document).ready(function() {
    $("a[data-gal^='prettyPhoto']").prettyPhoto();
});

// --------------------------------------------------------
//	Navigation Bar
// --------------------------------------------------------
$(window).scroll(function(){
	"use strict";
	var scroll = $(window).scrollTop();
	if( scroll > 60 ){
		$(".navbar").addClass("scroll-fixed-navbar");
	} else {
		$(".navbar").removeClass("scroll-fixed-navbar");
	}
});

// --------------------------------------------------------
//	Smooth Scrolling
// --------------------------------------------------------
$(".navbar-nav li a[href^='#']").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, 1000);
});


// --------------------------------------------------------
//	Localization
// --------------------------------------------------------
$('#selectLanguageDropdown').localizationTool({
'defaultLanguage' : 'en_GB',
/* do not throw error if a selector doesn't match */
'ignoreUnmatchedSelectors': false,
/* show the flag on the widget */
'showFlag' : false,
/* show the language on the widget */
'showLanguage': true,
/* show the country on the widget */
'showCountry': true,
/* format of the language/country label */
'labelTemplate': '{{country}} {{(language)}}',
'languages' : {
  'spanish' : {
      'country': 'Spain',
      'language' : 'Spain',
      'countryTranslated': 'Spain',
      'languageTranslated': 'Spain',
      'flag' : {
          'url' : 'http://upload.wikimedia.org/wikipedia/commons/f/fb/Farm-Fresh_italy.png', /* url of flag image */
          'class' : 'mexico-flag' /* (optional) class to assign to the flag (e.g., for css styling) */
      }
  },
},
/*
 * Strings are provided by the user of the plugin. Each entry
 * in the dictionary has the form:
 *
 * [STRING_IDENTIFIER] : {
 *      [LANGUAGE] : [TRANSLATION]
 * }
 *
 * STRING_IDENTIFIER:
 *     id:<html-id-name>           OR
 *     class:<html-class-name>     OR
 *     element:<html-element-name> OR
 *     <string>
 *
 * LANGUAGE: one of the languages defined above (e.g., it_IT)
 *
 * TRANSLATION: <string>
 *
 */
'strings' : {
  'Increase Conversion Rates' : {
                        'spanish' : 'Convertir el tráfico en más clientes'
                    },
  'id:welcomeText': {
      'spanish' : 'Convertir el tráfico en más clientes'
  },
},
/*
 * A callback called whenever the user selects the language
 * from the dropdown menu. If false is returned, the
 * translation will not be performed (but just the language
 * will be selected from the widget).
 *
 * The countryLanguageCode is a string representing the
 * selected language identifier like 'en_GB'
 */
'onLanguageSelected' : function (/*countryLanguageCode*/) { return true; }
});
