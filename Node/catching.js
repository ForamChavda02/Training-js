const dns = require("dns");
const util = require("util");
const lookup = util.promisify(dns.lookup);
const dnsCache = new Map();
async function cachedLookup(domain) {
    if(dnsCache.has(domain)) {
        console.log('Cache hit for:', domain);
        return dnsCache.get(domain);
    }
    console.log("cache miss for:", domain);
    const result = await lookup(domain);
    dnsCache.set(domain, result);
    return result;
}

(async () => {
    const domains = ['google.com', 'facebook.com', 'google.com'];
    for(const domain of domains) {
        const result = await cachedLookup(domain);
        console.log(`${domain} → ${result.address} `);
    }
}) ();