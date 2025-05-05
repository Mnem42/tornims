function tableCreate(titles, arr, container) {
    const tbl = document.createElement('table');

    const title_row = tbl.insertRow()
    for (i in titles){
        title_row.insertCell()
                 .appendChild(document.createTextNode(titles[i]));
    }
  
    for (let i = 0; i < arr.length; i++) {
        const tr = tbl.insertRow();
        arr[i].forEach( x => tr.insertCell()
                             .appendChild(document.createTextNode(`${x}`))
        )
    }
    container.appendChild(tbl);
  }
  
  tableCreate();