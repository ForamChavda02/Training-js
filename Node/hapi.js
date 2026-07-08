const Hapi = require("@hapi/hapi");

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: "localhost"
    });

    server.route({
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return "Hello this is hapi.js"
        }
    });
    await server.start();
    console.log(`Hapi server running at ${server.info.url}`);
};

init();