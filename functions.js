/**
 * Build row data to be shown in a table
 *
 * @param {object} yearlyTechStats Year by year stats of technologies mentioned in StackOverflow
 * @param {Array<string>} selectedTechs Technologies selected
 * @param {number} firstYear First year of data selected
 * @param {number} lastYear Last year of data selected
 * @returns {Array<string|number>}
 */
 function buildRowData (yearlyTechStats, selectedTechs, firstYear, lastYear) {
	var rowDataArray = [];
	for(i = 0; i < selectedTechs.length; i++){
		var language = selectedTechs[i];
		var row = [language];
		for(j = firstYear; j <= lastYear; j++){
			let numberOfPeople = yearlyTechStats[j][language];
			if(numberOfPeople == null || numberOfPeople == undefined){
				row.push(0);
			}
			else{
				row.push(numberOfPeople);
			}
   
		}
		rowDataArray.push(row);
	}
	//console.log(rowDataArray);
	return rowDataArray;
}

/**
 * Get HTML of table rows
 *
 * @param {Array<string|number>} rowData
 * @returns {string} HTML of the table rows
 */
function constructTableRowsHtml (rowData) {
	let rowsAsHtml = "";
	for(i = 0; i < rowData.length; i++){
		var helpArray = rowData[i];
		rowsAsHtml += '<tr><td>' + helpArray[0] + '</td>';
		for(j = 1; j < helpArray.length; j++){
			rowsAsHtml += '<td>' + helpArray[j] + '</td>';
		}
		rowsAsHtml += '</tr>';
	}
	return rowsAsHtml;
}

/**
 * Get HTML of table heading row
 *
 * @param {Array<string|number>} headings Table headings
 * @returns {string} HTML of the heading row
 */
function constructTableHeadHtml (headings) {
	let headsAsHtml = "<tr>";
	for(i = 0; i < headings.length; i++){
		headsAsHtml += '<th>' + headings[i] + '</th>';
	}
	headsAsHtml += '</tr>';
	return headsAsHtml;
}
