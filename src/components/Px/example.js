let contentElement = $("#content");
let languageISOCode = "fo";

var loadPxFile = function (address, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(new Px(xhr.responseText));
    }
  };

  xhr.open('GET', address);
  xhr.overrideMimeType('text/xml; charset=iso-8859-15');
  xhr.send();
}

var renderTable = function (pxFile, tableContainer) {
  //Check if pxFile has data and metadata and report error
  if (!pxFile["data"] || !pxFile["metadata"]) {
    tableContainer.append("<h2>Kann ikki vísa. Onki 'úrslit' funni</h2>");
    return;
  }

  // ------------------------------------------------------------------------------- //
  //                                    Read data                                    //
  // ------------------------------------------------------------------------------- //
  let data = pxFile["data"];
  let metadata = pxFile["metadata"];

  //Check if any decimals are in the data set by checking the first value
  let hasAnyDecimals = false;
  if (data.length > 0) {
    hasAnyDecimals = data[0] % 1 !== 0;
  }

  //Load headings (by culture if available)
  let heading = metadata["HEADING[" + languageISOCode + "]"];
  if (!heading)
    heading = metadata["HEADING"];

  //Load headings from TABLE in HEADING
  let headings = heading["TABLE"];
  if (!Array.isArray(headings)) {
    headings = [headings]; //Force to array
  }

  //Read values (by culture if available)
  let values = metadata["VALUES[" + languageISOCode + "]"];
  if (!values)
    values = metadata["VALUES"];

  //Read Stub (by culture if available)
  let stub = metadata["STUB[" + languageISOCode + "]"];
  if (!heading)
    stub = metadata["STUB"];

  let stubs = stub["TABLE"];
  if (!Array.isArray(stubs)) {
    stubs = [stubs]; //Force to array
  }

  let hasAnyStubs = stubs !== null;

  //Read number of columns
  let numberOfColumns = 0;
  if (data && data.length > 0)
    numberOfColumns = 1;

  // ------------------------------------------------------------------------------- //
  //                                  Start render                                   //
  // ------------------------------------------------------------------------------- //

  let html = [];

  html.push("<table class='pxtable table table-striped table-responsive'><colgroup><col width='100%'/></colgroup>");

  // ------------------------------------------------------------------------------- //
  //                                     HEADING                                     //
  // ------------------------------------------------------------------------------- //
  if (headings && headings.length > 0) {
    html.push("<thead>");

    //Create heading elements
    let headingElements = [];
    for (let i = 0; i < headings.length; i++) {
      if (!headingElements[i])
        headingElements[i] = [];

      let headingName = headings[i];
      let headingValues = values[headingName];

      if (!Array.isArray(headingValues)) {
        headingValues = [headingValues];
      }

      for (let j = 0; j < headingValues.length; j++) {
        headingElements[i].push({
          headingName: headingName,
          headingValue: headingValues[j],
          colSpan: 1,
        });
      }
    }

    //Calculate Col Span
    for (let i = headingElements.length - 2; i > -1; i--) {
      let headingElement = headingElements[i];
      let descendant = headingElements[i + 1];
      let colSpan = descendant[0].colSpan * descendant.length;
      headingElement.forEach(he => {
        he.colSpan = colSpan;
      });
    }



    //Render heading elements
    let numberOfColumnsInRowAbove = 1;
    for (let i = 0; i < headingElements.length; i++) {
      html.push("<tr>");

      if (hasAnyStubs) {
        html.push("<th></th>"); //add the empty column
      }

      let headingElement = headingElements[i];
      let headingValue = "";
      for (let j = 0; j < headingElement.length * numberOfColumnsInRowAbove; j++) {

        let element = headingElement[j % headingElement.length];
        headingValue = "<th ";
        if (element.colSpan > 1) {
          headingValue += "colSpan='" + element.colSpan + "'";
        }
        headingValue += ">" + element.headingValue + "</th>";
        html.push(headingValue);
      }

      html.push("</tr>");
      numberOfColumnsInRowAbove = headingElement.length * numberOfColumnsInRowAbove;

      //Rebalance number of columns
      if (numberOfColumns < numberOfColumnsInRowAbove)
        numberOfColumns = numberOfColumnsInRowAbove;
    }

    html.push("</thead>");
  }

  // ------------------------------------------------------------------------------- //
  //                                      ROWS                                       //
  // ------------------------------------------------------------------------------- //
  let rowElements = [];

  html.push("<tbody>");
  if (hasAnyStubs) {
    for (let i = stubs.length - 1; i > -1; i--) {

      //Create an empty descendants list
      let descendants = [];

      //Check if any row elements already exist
      if (rowElements.length > 0) {
        //Copy row elements to descendants
        descendants = rowElements.slice(0);

        //Clear rowElements
        rowElements = [];
      }

      let stubName = stubs[i];
      let stubValues = values[stubName];
      if (!Array.isArray(stubValues)) {
        stubValues = [stubValues];
      }

      for (let j = 0; j < stubValues.length; j++) {
        rowElements.push({
          stubName: stubName,
          stubValue: stubValues[j],
          elements: descendants.slice(0)
        });
      }
    }

    let rowElementsToProcess = rowElements.slice(0);
    let dataIndex = 0;
    while (rowElementsToProcess.length > 0) {
      let rowElement = rowElementsToProcess.shift();
      let isLeaf = rowElement.elements.length == 0;

      html.push("<tr>");
      html.push("<td>" + rowElement.stubValue + "</td>");

      for (let k = 0; k < numberOfColumns; k++) {
        let columnValue = "";
        //only read values if is a leaf
        if (isLeaf) {
          columnValue = data[k + (numberOfColumns * dataIndex)];

          if (columnValue === '"-"') {
            columnValue = "-";
          } else {
            if (hasAnyDecimals)
              columnValue = Number(columnValue);
            else
              columnValue = Number(columnValue);
          }
        }

        html.push("<td>" + columnValue + "</td>")
      }

      //Add childre if not leaf
      if (!isLeaf) {
        rowElement.elements.forEach((e) => {
          rowElementsToProcess.push(e);
        });
      }

      html.push("</tr>");

      //Increment data index if not leaf
      if (isLeaf) {
        dataIndex++;
      }
    }
  } else {
    for (let k = 0; k < numberOfColumns; k++) {
      let columnValue = data[k];
      html.push("<td>" + columnValue + "</td>")
    }
  }

  html.push("</tbody>");
  html.push("</table>");

  tableContainer.html(html.join(""));
}

loadPxFile('http://statbank.hagstova.fo/sq/74e7ed93-db6c-4bb8-99e3-8170a6f9a30a', function (result) {
  renderTable(result, contentElement);
})