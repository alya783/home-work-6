class Navigation{
    get navItems(){
        return $$('//*[@id="first-nav-block"]//*[contains(@class, "nav-item")]');
    }

    async getNavItem(item){
        let navi = await this.navItems;
        let elem; 
        for(const i of navi){
            if(await i.getText() == item){
                elem = i;
            };    
        }                  
        await elem.click();       
    }
}

module.exports = { Navigation: new Navigation() }