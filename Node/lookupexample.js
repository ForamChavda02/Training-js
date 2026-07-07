const dns = require("dns");

const resolver = new dns.Resolver();

resolver.setServers(['8.8.8.8', '8.8.4.4']);

resolver.resolve4("www.example.com", (err, addresses) => {
    if(err) throw err;

    console.log("address resolved using Google DNS:");
    addresses.forEach(add => {
        console.log(`${add}`);
    });
});
console.log("Current resolver servers:", resolver.getServers());