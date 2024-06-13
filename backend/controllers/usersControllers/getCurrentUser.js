
const getCurrentUser = async (req, res) => {
const {username, email} = req.user;
res.json({
    status: "Success",
    code: 200,
    data: {
        username, email
    }
})
}

module.exports = getCurrentUser;