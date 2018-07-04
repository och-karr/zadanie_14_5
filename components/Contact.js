var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired, //walidacja właściwości do której
        //możemy później odwołać się, dzięki this.props.item
    },

    render: function() {
        return (
            React.createElement('div', {className: 'contactItem'},
                React.createElement('img', {
                    className: 'contactImage',
                    src: 'images/gif-contact.jpg'
                }),
                React.createElement('div', {className: 'person'},
                    React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
                    React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
                    React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
                        this.props.item.email)
                )
            )
        )
    },
});