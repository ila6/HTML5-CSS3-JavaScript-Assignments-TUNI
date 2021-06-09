/**
 * Build yearly technology stats
 *
 * @param {object} techStats StackOverfow stats
 * @returns {object} Year by year stats of technologies mentioned in StackOverflow
 */
function buildYearlyTechStats (techStats) {
  // TODO: Write your code here
  let yearlyTechStats = {};
    for(const years in techStats){
      //console.log ("YEAR "+years);
      let currentTechList = {};
     for(const techtype in techStats[years]){
    
       if(techtype.startsWith("current")){

         for (const techInstance in techStats[years][techtype]) {
          currentTechList = {...currentTechList, [techInstance]: techStats[years][techtype][techInstance]};
         }
       
       yearlyTechStats = {...yearlyTechStats,  [years]:currentTechList };
      // console.log (yearlyTechStats);  
       }
     }
    
    }
 return yearlyTechStats;
}

/**
 * Update table contents
 *
 * @param {HTMLTableElement} table DOM element for the table
 * @param {object} yearlyTechStats Year by year stats of technologies mentioned in StackOverflow
 * @param {Array<string>} selectedTechs Technologies selected
 * @param {number} firstYear First year of data selected
 * @param {number} lastYear Last year of data selected
 */
function updateTable (table, yearlyTechStats, selectedTechs, firstYear, lastYear) {
  // TODO: Write your code here
  const thead =table.getElementsByTagName('thead');
  const tbody = table.getElementsByTagName('tbody');
  const rowData = buildRowData(yearlyTechStats, selectedTechs, firstYear, lastYear);

  const allyears = Object.keys(yearlyTechStats)
  .map(year => Number.parseInt(year, 10))
  .sort((y1, y2) => y1 - y2);

  const years = [];
  for(let year of allyears){
    if(year >= firstYear && year <= lastYear){
      years.push(year);
    }

  }

  thead[0].innerHTML = constructTableHeadHtml(['Technology', ...years]);
  tbody[0].innerHTML = constructTableRowsHtml(rowData);
 
}

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
  // TODO: Copy code from previous exercise
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
	return rowDataArray;
}

/**
 * Get HTML of table rows
 *
 * @param {Array<string|number>} rowData
 * @returns {string} HTML of the table rows
 */
function constructTableRowsHtml (rowData) {
  // TODO: Copy code from previous exercise
  let rowsAsHtml = "";
	for(i = 0; i < rowData.length; i++){
		var helpArray = rowData[i];
		rowsAsHtml += '<tr><td>' + helpArray[0] + '</td>';
		for(j = 1; j < helpArray.length; j++){
			rowsAsHtml += '<td>' + helpArray[j] + '</td>';
		}
		rowsAsHtml += '</tr>';
	}
 // console.log(rowsAsHtml);
	return rowsAsHtml;
}

/**
 * Get HTML of table heading row
 *
 * @param {Array<string|number>} headings Table headings
 * @returns {string} HTML of the heading row
 */
function constructTableHeadHtml (headings) {
  // TODO: Copy code from previous exercise
  let headsAsHtml = "<tr>";
	for(i = 0; i < headings.length; i++){
		headsAsHtml += '<th>' + headings[i] + '</th>';
	}
	headsAsHtml += '</tr>';
	return headsAsHtml;
}
