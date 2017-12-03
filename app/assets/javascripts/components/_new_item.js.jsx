var NewItem = createReactClass({
	
	handleClick() {
		var name = this.nameInput.value;
		var description = this.descriptionInput.value;
		console.log(name, description)
	},

	render: function() {
		return (
			<div>
				<input placeholder='Enter name' ref={(input) => { this.nameInput = input;}} />
				<input placeholder='Enter a desc' ref={(input) => { this.descriptionInput = input;}} />
				<button onClick={this.handleClick}>Submit</button>
			</div>
		)
	}
});