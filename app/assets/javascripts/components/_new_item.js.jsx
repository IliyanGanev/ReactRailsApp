var NewItem = createReactClass({
	
	handleClick() {
		var name = this.refs.name.value;
		var description = this.refs.description.value;
	},

	render: function() {
		return (
			<div>
				<input ref='name' placeholder='Enter name' />
				<input ref='description' placeholder='Enter a desc' />
				<button onClick={this.handleClick}>Submit</button>
			</div>
		)
	}
});