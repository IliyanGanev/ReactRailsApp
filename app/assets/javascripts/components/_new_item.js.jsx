var NewItem = createReactClass({
	
	handleClick() {
		var name = this.refs.name.value;
		var description = this.refs.description.value;
	},

	render: function() {
		return (
			<div>
				<input  placeholder='Enter name' />
				<input  placeholder='Enter a desc' />
				<button onClick={this.handleClick}>Submit</button>
			</div>
		)
	}
});