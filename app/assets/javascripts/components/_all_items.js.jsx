var AllItems = createReactClass({


	render: function() {
		var items = this.props.items.map((item) => {
 			return ( 
 				<div key={item.id}> 
 					<h3>{item.name}</h3> 
 					<p>{item.description}</p>
 				</div> 
 			)
 		});

		return(
			<div>
				{items}
			</div>
		)
	}	
});
