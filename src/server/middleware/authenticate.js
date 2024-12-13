import jwt from "jsonwebtoken";

const redirectAuthenticated = (req, res, next) => {
    const token = req.cookies?.token;

    if (!token) {
        return next();
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET);
        return res.redirect("/");
    } catch (error) {
        console.error(error);
        return next();
    }
};

export default redirectAuthenticated;
