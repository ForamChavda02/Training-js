const payload = {
    name: "Axios Parctice Laptop",
    data: { price: 999.99, storage: "512 GB"}
};

axios.post("https://restful-api.dev", payload)
.then(postResponse => {
    console.log("Post success", postResponse.status);
    const generatedId = postResponse.data.id;
    console.log("generatedId is:", generatedId);

    return axios.get(`https://restful-api.dev/${generatedId}`);
})
.then(getResponse => {
    console.log("GET success", getResponse);
})
