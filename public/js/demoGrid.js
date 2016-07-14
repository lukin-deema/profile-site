var grid = new SimpleGrid({ containerIdName: 'table-container' });

function run(){
	grid.destroy();
	var option = {
		containerIdName: 'table-container',
		data: [{'name':'cell11','age':'cell12'},
		{'name':'cell21','age':'cell23'},
		{'name':'cell32','age':'cell33'}],
		dataTemplate:{'name': document.querySelector("#column1").value,
		'age': document.querySelector("#column2").value
		},
		inserting: document.querySelector("#inserting").checked,
		sorting:  document.querySelector("#sorting").checked,
		deleting:  document.querySelector("#deleting").checked,
		editing:  document.querySelector("#editing").checked,
		columnInserting:  document.querySelector("#columnInserting").checked,
		columnDeleting:  document.querySelector("#columnDeleting").checked,
	}
	grid.optionsSet(option);
	grid.render();
}