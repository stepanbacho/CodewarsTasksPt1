function cakes(recipe, available) {
    let k = 0;
    for (const key1 in recipe) {
        if (available.hasOwnProperty(key1)) {
            if (available[key1] - recipe[key1] >= 0) {
                let diff = available[key1] - recipe[key1];
                console.log(diff);
                let i = 1;
                while (diff - recipe[key1] >= 0) {
                    diff -= recipe[key1];
                    i += 1;
                    console.log(diff, i);
                }
                k === 0 || k > i ? k = i : ''
            } else {
                return 0;
            }
        } else {
            return 0;
        }
    }
    return k;
}
// let r = cakes({ flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})
// console.log(r);
