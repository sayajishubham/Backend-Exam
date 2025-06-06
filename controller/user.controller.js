const userController = {
    Signin: async (req, res) => {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Please fill all the Fields" });
        }

        try {
            const user = await userModel.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: "No user found" });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: "Invalid credentials" });
            }

            const htmltemplate = await ejs.renderFile(__dirname + "/../views/conformation.ejs");


            const token = jwt.sign(
                { userId: user._id, email: user.email },
                process.env.SECRET_PASS,
                { expiresIn: "7m" }
            );

            await Mail(email, htmltemplate);

            res.cookie("veri", token).status(200).json({
                message: "Login successful!",
                token,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: error.message });
        }
    },
    signup: async (req, res) => {
        const { name, email, password, city, age } = req.body;
        if (!name || !email || !password || !city || !age) {
            return res.status(400).json({
                message: "Please fill all the Fields"
            })
        }
        const data = req.body
        try {
            const check = await userModel.findOne({ email })
            if (check) {
                return res.status(400).json({
                    message: "User Already existed"
                })
            }
            const newUser = await userModel.create({
                ...data
            })
            newUser.save()
            return res.status(200).json({
                message: "done"
            })
        } catch (error) {
            return res.status(400).json({
                message: error.message
            })
        }


    },
    logout: async (req, res) => {
        res.clearCookie("veri")

        return res.status(200).json({
            message: "Logout"
        })
    }
}

module.exports = userController