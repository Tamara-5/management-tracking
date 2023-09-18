import Client from "../models/Client.js";

export const getClients = async (req, res) => {
    try {
        const clients = await Client.find({})

        res.status(200).send({
            statusCode: 200,
            data: clients,
            error:null
        })
    } catch (error) {
        res.status(404).send({
            statusCode: 404,
            data: null,
            error: "Something went wrong"
        })
    }
}