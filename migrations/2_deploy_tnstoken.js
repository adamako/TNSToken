const Migrations=artifacts.require("Migrations");
const TNSToken = artifacts.require("TNSToken");

module.exports= function(deployer,network, accounts){
    if(network=="development"){
        deployer.deploy(TNSToken, {
            from: accounts[0]
        });
    }else{
        deployer.deploy(TNSToken);
    }
};