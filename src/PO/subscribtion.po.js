class Subscribtion{

    get page(){
        return $('//div[@class="col-9"]');
    }

    get plan(){
        return this.page.$('#plan');
    }

    get year(){
        return this.page.$('#years');
    }

    get user(){
        return this.page.$('#user');
    }

    get description(){
        return this.page.$('#description');
    }
    
    async makeSubscription(year, user, description2){
        await this.year.setValue(year);
        await this.user.selectByVisibleText(user);
        await this.description.setValue(description2);
        await $('//button[@class="btn btn-primary mt-3"]').click();
    }

    async checkSubscription(obj, selector2){
        for(const key in obj){
            let info = await $(`${selector2}`).$(`[tabulator-field = "${key}"]`).getText();
            expect(info).toEqual(obj[key]);
        }
    }
}

module.exports = { Subscribtion: new Subscribtion() }


