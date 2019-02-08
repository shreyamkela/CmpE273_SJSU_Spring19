class cloth {
    constructor (texture, company, cost) {
        this.texture = texture;
        this.company = company;
        this.cost = cost;
    }

    get myTexture() {
        return this.texture;
    }

    get myCompany() {
        return this.company;
    }

    get myCost() {
    return this.cost;
    }
}
    
const trouser = new cloth('Corduroy', 'Calvin Klein', 65);
console.log(trouser.myTexture);
console.log(trouser.myCompany);
console.log(trouser.myCost);
