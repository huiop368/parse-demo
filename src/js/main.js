var React = require('react');

var Parse = require('parse');
var ParseReact = require('parse-react');

var Comment = React.createClass({

    mixins : [ParseReact.Mixin],

    observe : function(){
        comments : (new Parse.Query('users'))
    },

    render : function(){
        return (
            <h1>Parse Demo</h1>       
            <ul>
                {
                    this.data.comments.map(function(item){
                        return <li>{item.objectId}</li>;
                    })
                }
            </ul>
        );
    } 

});

React.render(<Comment />, document.body);
