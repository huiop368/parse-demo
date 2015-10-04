var React = require('react');

var Comment = React.createClass({
    render : function(){
        return (
            <h1>Parse Demo</h1>       
        );
    } 
});

React.render(<Comment />, document.body);
