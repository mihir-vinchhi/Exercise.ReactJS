window.CommentBox = React.createClass({
    getInitialState: function(){
        return { data: [] };
    },
    componentDidMount: function(){
        this.setState({ data: this.props.data });
    },
    addComment: function(comment){
        var comments = this.state.data;
        comments.push({ id: comments.length + 1, author: comment.author, text: comment.text });
        this.setState({ data: comments });
    },
    render: function(){
        return (
            <div className='commentBox'>
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm addComment={this.addComment} />
            </div>
        );
    }
});  

