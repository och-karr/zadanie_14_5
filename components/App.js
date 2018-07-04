//lista z kontaktami contacts:
var contacts = [
    {
        id: 1,
        firstName: 'Jan',
        lastName: 'Nowak',
        email: 'jan.nowak@example.com',
    },
    {
        id: 2,
        firstName: 'Adam',
        lastName: 'Kowalski',
        email: 'adam.kowalski@example.com',
    },
    {
        id: 3,
        firstName: 'Zbigniew',
        lastName: 'Koziol',
        email: 'zbigniew.koziol@example.com',
    }
];

//obiekt z kontaktem (contactForm) (połączony z formularzem):
var contactForm = {
    firstName: '',
    lastName: '',
    email: ''
};

var App = React.createClass({
    render: function() {
      return (
        React.createElement('div', {className: 'app'},
        //odpowiednik class na elemencie HTML (np. <div class="app"></div>), className jest dla Reacta
          React.createElement(ContactForm, {contact: contactForm}),
          //(do komponentu ContactForm przekazujemy obiekt contactForm
          React.createElement(Contacts, {items: contacts}, {})
          //do komponentu Contacts przekazujemy obiekt contacts
        )
      );
    }
});