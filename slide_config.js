var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'Introduction to Kotlin',
    subtitle: '',
    /*eventInfo: {
     title: 'Google I/O Extended Kozhikode 2017',
     date: ''
    },*/
    /* eventInfo: {
      title: 'Google DevFest 2019',
      date: '02/11/2019'
    },*/
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: 'images/kotlin-logo-tiny.png.png',
    fonts: [
      'Open Sans:regular,semibold,italic,italicsemibold',
      'Source Code Pro'
    ],
    //theme: ['mytheme'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Ajith v',
    company: 'Android Developer<br>SoftFruit Solutions',
    github: 'http://github.com/ajithvgiri'
  }, 
  {
   name: 'Yufui Glen',
   company: 'Principal Android Developer<br>InfoTech Solutions',
   github: 'https://github.com/AnonymousGeekDev'
  } /*, {
    name: 'Second Name',
    company: 'Job Title, Google',
    gplus: 'http://plus.google.com/1234567890',
    twitter: '@yourhandle',
    www: 'http://www.you.com',
    github: 'http://github.com/you'
  }*/]
};

