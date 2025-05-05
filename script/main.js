document.getElementById('load').onclick = async function() {
    let access = new APIAccess();
    await access.init("J7ZMdvtWhbKU5ENd");

    let items = document.getElementById("items").value.split(",");
    
    const tmp = access.search_set(items,"armory");
    const kvps = Object.keys(tmp.sets).map((key) => [key, tmp.sets[key]]);
    console.log(kvps);
    tableCreate(
        ["Item", "Members with item"],
        kvps.map(x => Array(x[0],x[1].map(x => access.get_user(x).name))),
        document.body
    );
    //document.getElementById("loadouts").innerText = JSON.stringify(access.get_free_of([399,219]));
}