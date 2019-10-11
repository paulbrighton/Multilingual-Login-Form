/* eslint-env jquery */
/* eslint new-cap: ["error", { "properties": false }] */

(function (global, $) {
  // 'new' creates a new object
  const GreetUser = function (firstName, lastName, language) {
    return new GreetUser.init(firstName, lastName, language)
  }

  // Supported lanuages
  const supportedLanguages = ['en', 'pt']

  // Informal greetings
  const greetings = {
    en: 'Hi',
    pt: 'Oi'
  }

  // Formal greetings
  const formalGreetings = {
    en: 'Greetings',
    pt: 'Saudações'
  }

  // Logged in status messages
  const logMessages = {
    en: 'Logged in',
    pt: 'Logado'
  }

  GreetUser.prototype = {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    },
    validate: function () {
      if (supportedLanguages.indexOf(this.language) === -1) {
        throw new Error('Invalid language')
      }
    },
    greeting: function () {
      return greetings[this.language] + ' ' + this.firstName + '!'
    },
    formalGreeting: function () {
      return formalGreetings[this.language] + ', ' + this.fullName()
    },
    greet: function (formal) {
      let msg
      // if undefined or null it will be coerced to 'false, returns greeting() as default
      if (formal) {
        msg = this.formalGreeting()
      } else {
        msg = this.greeting()
      }
      if (console) {
        console.log(msg)
      }
      return this
    },
    log: function () {
      if (console) {
        console.log(logMessages[this.language] + ': ' + this.fullName())
      }
      return this
    },
    setLang: function (lang) {
      this.language = lang

      this.validate()
      return this
    },
    HTMLGreeting: function (selector, formal) {
      if (!$) {
        throw new Error('jQuery not loaded')
      }
      if (!selector) {
        throw new Error('Missing jQuery selector')
      }
      // Set which message is displayed
      let msg
      if (formal) {
        msg = this.formalGreeting()
      } else {
        msg = this.greeting()
      }
      // Inject the message into the chosen place in the DOM
      $(selector).html(msg)

      return this
    }
  }
  // Creating a new object here without having to call 'new'
  GreetUser.init = function (firstName, lastName, language) {
    const self = this
    self.firstName = firstName || ''
    self.lastName = lastName || ''
    self.language = language || 'en'
  }
  // A trick borrowed from jQuery so not to have to use the 'new' keyword
  GreetUser.init.prototype = GreetUser.prototype
  // Attach GreetUser to the global object and provide $G as a shorthand like $ is used in jQuery
  global.GreetUser = global.G$ = GreetUser
}(window, jQuery))
