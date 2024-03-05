const verifyAdmin = (req, res, next)=>{
    const role = req.body.role
    if (role !== "admin") {
        return res.status(403).json({ message: "You are not authorized to perform this action." });
    }
    next();
};

const verifyAdminAndOrganiser = (req, res, next)=>{
    const role = req.body.role
    if (role !== "organiser" || role !== "admin") {
        return res.status(403).json({ message: "You are not authorized to perform this action." });
    }
    next();
};

module.exports = { verifyAdmin, verifyAdminAndOrganiser }