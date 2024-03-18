import { PrismaClient } from '@prisma/client';

const botsClient = new PrismaClient().bots;

// getAll
export async function getAllBots(req, res) {
    try {
        const allBots = await botsClient.findMany()

        res.status(200).json({data: allBots});
    } catch (e) {
        console.log(e)
    }
}

// getById
export async function getBotById(req, res) {
    try {
        const botId = req.params.id;
        const bot = await botsClient.findUnique({
            where: {
                id: botId,
            }
        })

        res.status(200).json({data: bot});
    } catch (e) {
        console.log(e)
    }
}

// create
export async function createBot(req, res) {
    try {
        const botData = req.body;
        console.log(req.body)
        const bot = await botsClient.create({
            data: botData,
        })

        res.status(201).json({data: bot});
    } catch (e) {
        console.log(e)
    }
}

// update
export async function updateBot(req, res) {
    try {
        const botId = req.params.id;
        const botData = req.body;
        const bot = await botsClient.update({
            where: {
                id: botId,
            },
            data: botData,
        })

        res.status(200).json({data: bot});
    } catch (e) {
        console.log(e)
    }
}

// delete
export async function deleteBot(req, res) {
    try {
        const botId = req.params.id;
        const bot = await botsClient.delete({
            where: {
                id: botId,
            },
        })

        res.status(200).json({data: bot});
    } catch (e) {
        console.log(e)
    }
}
// export default getAllBots();