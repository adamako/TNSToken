const Migrations=artifacts.require("Migrations");
const TNSToken = artifacts.require("TNSToken");

module.exports= function(deployer, accounts){
    deployer.deploy(TNSToken, {
        from: "0xFc34797D401f0161dB7A8E006d241077413ed655"
    });
};