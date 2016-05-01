window.CommentForm = React.createClass({
    getInitialState: function(){
        return { author: '', text: '' };
    },
    handleAuthorChange: function(e){
        this.setState({ author: e.target.value });
    },
    handleTextChange: function(e){
        this.setState({ text: e.target.value });
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();

        if (!author || !text){
            return;
        }

        this.props.addComment({ id: 3, author: author, text: text });
        this.setState({ author: '', text: '' });
    },
    render: function() {
        return (
            <form className='commentForm' onSubmit={this.handleSubmit}>
                <input type='text' 
                    placeholder='Your name'
                    value={this.state.author}
                    onChange={this.handleAuthorChange} />

                <input type='text' 
                    placeholder='Say something...' 
                    value={this.state.text}
                    onChange={this.handleTextChange} />

                <input type='submit' value='Post' />
            </form>
        );
    }
});