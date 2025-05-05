document.getElementById('load').onclick = async function() {
    let access = new APIAccess();
    await access.init(document.getElementById("apikey").value);

    let items = document.getElementById("items").value.split(",");
    
    let tmp = access.search_set(items,"armor");
    tmp = Object.keys(tmp.sets).map(x => tmp.sets[x]);

    document.getElementById("target").innerHTML = "";

    tableCreate(
        ["Item", "Available", "Loaned", "Total", "Loaning members"],
        tmp.map(x => {
            if (x.loaned_to === null) {
                return Array(x.name,x.available,x.loaned,x.quantity,"")
            }

            const loaned_members = x.loaned_to.split(',').map(x => access.get_user(x).name);
            return Array(x.name,x.available,x.available,x.loaned,loaned_members)
        }),
        document.getElementById("target")
    );
    //document.getElementById("loadouts").innerText = JSON.stringify(access.get_free_of([399,219]));
}