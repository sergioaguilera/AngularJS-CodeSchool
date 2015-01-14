(function(){ 
    var app = angular.module('Store',[]);

    app.controller('StoreController',function(){  
        this.products = gems;
    });
    
    app.controller('PanelController',function(){
        this.tab = 1;
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });

var gems = [
    {
        name: "Ruby",
        price: 2000,
        description: "Omega Ruby",
        specification:"You can Catch Primal Groudon",
        reviews: "Magma team like this!",
        canPurchase: true,
        soldOut:false,
        images: [
            { full: "../img/ruby.png"}],

    },
    {
        name: "Sapphire",
        price: 1000,
        description: "Alpha Saphire",
        specification:"You can catch  Primal Kyogre",
        reviews:"Aqua team like this!",
        canPurchase: true,
        soldOut:false,
        images: [
            { full: "img/sapphire.png"}],

    },
    {
        name: "Emerald",
        price: 3000,
        description: "Delta Emerald",
        specification: "You can catch Mega Rayquaza",
        reviews: "Magma and Aqua Team Don't like this!",
        canPurchase: true,
        soldOut:false,
        images: [
            { full: "../img/emerald.png"}],

    }

];
           
           })();