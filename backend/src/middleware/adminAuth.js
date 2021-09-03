//this is if we will implement the guest profile.
module.exports = (req, res, next) => {
	const { role } = req.currentUser
	if (role === 'host') {
		next()
	} else {
		res.status(403).json({ error: "You're not a host!" })
	}
}
