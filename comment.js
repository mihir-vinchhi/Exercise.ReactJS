window.Comment = React.createClass({
    rawMarkup: function(){
        var rawHtml = marked(this.props.children.toString(), { sanitize: true });
        return { __html: rawHtml };
    },
    render: function(){
        return (
            <div className='comment'>
                <h2 className="commentAuthor">{this.props.author}</h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()}></span>
            </div>
        );
    }
});