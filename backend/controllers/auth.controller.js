import jwt from "jsonwebtoken";
import {PrismaClient} from "@prisma/client";
const accessTokenSecret = process.env.JWT_SECRET;

const dbClient = new PrismaClient().jwtAccess;
async function getAllUsers(req, res) {
    try {
        const allUsers = await dbClient.findMany()
        console.log(allUsers)
        return allUsers;
    } catch (e) {
        console.log(e)
    }
}

export async function createUser(req, res) {
    try {
        const data = req.body;
        console.log(req.body)
        const user = await dbClient.create({
            data: data,
        })

        res.status(201).json({data: user});
    } catch (e) {
        console.log(e)
    }
}
export async function auth(req, res) {
    // Read username and password from request body
    const { user, pass } = req.body;

    // Filter user from the users array by username and password
    const users = await getAllUsers()
    console.log(users);
    const data = users.find(u => { return u.user === user && u.pass === pass });

    if (data) {
        // Generate an access tokens
        const accessToken = jwt.sign({ username: data.user,  role: data.role }, accessTokenSecret);

        res.json({
            accessToken
        });
    } else {
        res.send('Username or password incorrect');
    }
}

export async function authJWT(req, res, next) {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};
