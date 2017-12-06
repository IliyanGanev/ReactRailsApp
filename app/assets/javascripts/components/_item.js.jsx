var Item = createReactClass({

	getInitialState() {
		return {editable: false}
	},

	handleEdit() {
		if(this.state.editable) {
			var name = this.nameInput.value;
			var description = this.descriptionInput.value;
			console.log('in handleEdit', this.state.editable, name, description);
		}
		this.setState({ editable: !this.state.editable })
	},


	render(){
		var name = this.state.editable? <input type='text' ref={input => { this.nameInput = input;}} defaultValue={this.props.item.name} /> : <h3>{this.props.item.name}</h3> 
		var description = this.state.editable? <input type='text' ref={input => { this.descriptionInput = input;}} defaultValue={this.props.item.description} /> : <p>{this.props.item.description}</p>
		return (
			<div>
				{name}
				{description}
 				<button onClick={this.props.handleDelete} >Delete</button>
 				<button onClick={this.handleEdit}> {this.state.editable? 'Submit' : 'Edit'} </button>
			</div>
		)
	}
});