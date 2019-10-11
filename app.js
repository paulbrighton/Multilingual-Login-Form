/* global $ */
/* global G$ */

const g = G$('Paul', 'Brighton')
const t = G$('Thais', 'Brighton', 'pt')

// Sets a click function on the login button
$('#login').click(function () {
  // Creates a new GreetUser object
  const loginGreeter = G$('Thais', 'Brighton')

  $('#logindiv').hide()
  // Adds the greeting text to the h1 and logs the welcome message in the console
  loginGreeter.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log()
  // true returns the formal greeting
})

g.greet()
// prints Hi Paul!

g.greet(true)
// prints Greetings, Paul Brighton

// Using chainable methods
t.greet().setLang('pt')
// prints Oi Thais!

t.greet(true).setLang('pt').log()
// prints Saudações, Thais Brighton
// log prints Logado: Thais Brighton
