async function main() {
    const carboncredit = await ethers.getContractFactory("DEX");
    // const erc20TokenAddress = "0x8922c184F15FFd71cbee0B9F26584F6637fE067a"
    // const wethTokenAddress = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6"
    // Start deployment, returning a promise that resolves to a contract object
    const contract = await carboncredit.deploy();
    console.log("Contract deployed to address:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    }); 