class APIAccess{
    #data;

    async init(apikey){
        let req_url = "https://api.torn.com/faction/?selections=basic,armor,medical,weapons&key=" + apikey;
        let tmp = new APIAccess();

        let response = await fetch(req_url);
        this.#data = await response.json();
    }

    search_set(item_set,set_name){
        let filtered = this.#data[set_name]
            .filter(x => item_set.filter(y => {
                return x.name.includes(y)
            }).length > 0) // Filter items in the set
        
        let is_all_same = filtered.every(x => x.toString() === filtered[0].toString());

        if (set_name === "medical"){
            let tmp = {};
            filtered.forEach(x =>{
                tmp[x.ID] = x;
            })

            return{
                "sets": tmp,
                "is_same": is_all_same
            }
        }

        let tmp = {};
        filtered.forEach(x =>{
            tmp[x.ID] = x;
        })

        return{
            "sets": tmp,
            "is_same": is_all_same
        }
    }

    get_free_of(weapon_ids){
        return weapon_ids.map(i => this.#data.weapons.find(x => (x.ID == i))) // Filter out to
                                                                    // just selected
    }

    get_user(id){
        return (this.#data.members[id.toString()]);
    }
}