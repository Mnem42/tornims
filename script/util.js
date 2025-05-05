function tableCreate(titles, arr, container) {
    const tbl = document.createElement('table');

    const title_row = tbl.insertRow()
    for (i in titles){
        title_row.insertCell()
                 .appendChild(document.createTextNode(titles[i]));
    }
  
    for (let i = 0; i < arr.length; i++) {
        const tr = tbl.insertRow();
        tr.insertCell()
          .appendChild(document.createTextNode(`${arr[i][0]}`));
        tr.insertCell()
          .appendChild(document.createTextNode(`${arr[i][1]}`));
    
    }
    container.appendChild(tbl);
  }
  
  tableCreate();