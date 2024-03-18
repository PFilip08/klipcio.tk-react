import { PrismaClient } from '@prisma/client';

const sitesClient = new PrismaClient().sites;

// getAll
export async function getAllSites(req, res) {
    try {
        const allSites = await sitesClient.findMany()

        res.status(200).json({data: allSites});
    } catch (e) {
        console.log(e)
    }
}

// getById
export async function getSiteById(req, res) {
    try {
        const siteId = req.params.id;
        const site = await sitesClient.findUnique({
            where: {
                id: siteId,
            }
        })

        res.status(200).json({data: site});
    } catch (e) {
        console.log(e)
    }
}

// create
export async function createSite(req, res) {
    try {
        const siteData = req.body;
        console.log(req.body)
        const site = await sitesClient.create({
            data: siteData,
        })

        res.status(201).json({data: site});
    } catch (e) {
        console.log(e)
    }
}

// update
export async function updateSite(req, res) {
    try {
        const siteId = req.params.id;
        const siteData = req.body;
        const site = await sitesClient.update({
            where: {
                id: siteId,
            },
            data: siteData,
        })

        res.status(200).json({data: site});
    } catch (e) {
        console.log(e)
    }
}

// delete
export async function deleteSite(req, res) {
    try {
        const siteId = req.params.id;
        const site = await sitesClient.delete({
            where: {
                id: siteId,
            },
        })

        res.status(200).json({data: site});
    } catch (e) {
        console.log(e)
    }
}