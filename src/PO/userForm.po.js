class Form{

    get page(){
        return $('//div[@class="col-9"]');
    }

    get email(){
        return this.page.$('#email');
    }

    get password(){
        return this.page.$('#password');
    }

    get address1(){
        return this.page.$('#address1');
    }

    get address2(){
        return this.page.$('#address2');
    }

    get city(){
        return this.page.$('#city');
    }

    get zip(){
        return this.page.$('#zip');
    }

    get description(){
        return this.page.$('#description');
    }
    
    async fillForm(email, password, address1, address2, city, zip, description){
        await this.email.setValue(email);
        await this.password.setValue(password);
        await this.address1.setValue(address1);
        await this.address2.setValue(address2);
        await this.city.setValue(city);
        await this.zip.setValue(zip);
        await this.description.setValue(description);
        await $('//button[@class="btn btn-primary mt-3"]').click();
    }

    async checkForm(obj, selector){
        for(const key in obj){
            if(key === 'password') continue;
            let info = await $(`${selector}`).$(`[tabulator-field = "${key}"]`).getText();
            expect(info).toEqual(obj[key]);
        }
    }
}

module.exports = { Form: new Form() }


