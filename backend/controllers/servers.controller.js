import { PrismaClient } from '@prisma/client';

const serversClient = new PrismaClient().servers;

// getAll
export async function getAllServers(req, res) {
    try {
        const allServers = await serversClient.findMany()

        res.status(200).json({data: allServers});
    } catch (e) {
        console.log(e)
    }
}

// getById
export async function getServerById(req, res) {
    try {
        const serverId = req.params.id;
        const server = await serversClient.findUnique({
            where: {
                id: serverId,
            }
        })

        res.status(200).json({data: server});
    } catch (e) {
        console.log(e)
    }
}

// create
export async function createServer(req, res) {
    try {
        const serverData = req.body;
        console.log(req.body)
        const server = await serversClient.create({
            data: serverData,
        })

        res.status(201).json({data: server});
    } catch (e) {
        console.log(e)
    }
}

// update
export async function updateServer(req, res) {
    try {
        const serverId = req.params.id;
        const serverData = req.body;
        const server = await serversClient.update({
            where: {
                id: serverId,
            },
            data: serverData,
        })

        res.status(200).json({data: server});
    } catch (e) {
        console.log(e)
    }
}

// delete
export async function deleteServer(req, res) {
    try {
        const serverId = req.params.id;
        const server = await serversClient.delete({
            where: {
                id: serverId,
            },
        })

        res.status(200).json({data: server});
    } catch (e) {
        console.log(e)
    }
}