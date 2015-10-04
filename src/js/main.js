var React = require('react');

var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

Parse.initialize('pAiOJPUeNWg3RYIPrOTqPuBJ0qyPUuXP9CtjZW1B', 'V0J0QsLSrMJi3096Ync1DznXrFr84VdHYXIQ5lkd');

ParseReact.Mutation.Create('Comment', {
  name : 'Hello, parse'
}).dispatch();

var Comment = React.createClass({

    mixins : [ParseReact.Mixin],

    observe : function(){
        return {
            comments : (new Parse.Query('Comment'))
        }
    },

    render : function(){
        return (
            <div>
            <h1>Parse Demo</h1>       
            <ul>
                {
                    this.data.comments.map(function(item){
                        return <li>{item.objectId}</li>;
                    })
                }
            </ul>
            </div>
        );
    } 

});

React.render(<Comment />, document.body);
