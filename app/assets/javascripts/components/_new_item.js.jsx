var NewItem = createReactClass({
	
	handleClick() {
		var name = this.nameInput.value;
		var description = this.descriptionInput.value;
		
		$.ajax({
			url: '/api/v1/items',
			type: 'POST',
			data: { item: { name: name, description: description}},
			success: (item) => {
				this.props.handleSubmit(item);
				
			}
		});
	},

	render: function() {
		return (
			<div>
				<input placeholder='Enter name' ref={input => { this.nameInput = input;}} />
				<input placeholder='Enter a desc' ref={(input) => { this.descriptionInput = input;}} />
				<button onClick={this.handleClick}>Submit</button>
			</div>
		)
	}
});