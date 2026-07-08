const fastify = require("fastify")({ logger: true });
const port = 5000;

fastify.get("/", async(request, reply) => {
    return { hello: "hello this is fastify.js"};
});

const start = async () => {
    try {
        await fastify.listen({ port });
        fastify.log.info(`Fastify is listening on port https://localhost:${port}`);
    }
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();