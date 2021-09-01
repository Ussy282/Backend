import jwt from 'jsonwebtoken';

export const generatedToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
    }, process.env.JWT_SECRET || "somethingssecret",
    {
        expiresIn: '30d',
    }
    );
};

export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
        const token = authorization.slice(7, authorization.length);
        jwt.verify(token, process,env.JWT_SECRET || "somethingSecret", (err, decode) => {
            if (err) {
                res.send(401).send({ message: "Invalid token" })
            } else {
                req.user = decode;
                next();
            }
        });
    } else {
        req.status(401).send({ message: "No Token" });
    }
};