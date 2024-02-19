var dbConn = require('../../config/db.config');
require("dotenv").config();

let Users = (user) => {
    this.to = user.to;
    this.email = user.email;
    this.user_id = user.user_id;
    this.username = user.username;
    this.password = bcrypt.hash(user.password, 10);
    this.role = user.role;
    create_at = new Date() | any;
    updated_at = new Date() | any;
}
Users.signup = (req, result) => {
    try {
        let {
            username, email, password, confirmPassword
        } = req.body;

        if(password != confirmPassword ){
            return result(null, {
                message : 'Password and confirm Password does not match'
            })
        }
        dbConn.query(`
            Insert into register (username, email, password, confirmpassword) VALUES ("${username}", "${email}", "${password}", "${confirmPassword}")
            
        `, (err, res) => {
            if (err) {
                console.log(err);
                return result(null, {
                    message: 'Something Went Wrong'
                });
            }

            console.log(res);
            return result(null, { status: 1,

                data: res,
                message: "User Added successfully"
            });
        });
    } catch (err) {
        console.log(err);
        return result(null, {
            message: 'Something Went Wrong'
        });
    }
};

Users.login = (req, result) => {
    try {
        const { username, password } = req.body;

        dbConn.query(
            'SELECT * FROM transport.register WHERE username = ? AND password = ?',
            [username, password],
            (err, res) => {
                if (err) {
                    console.error(err);
                    return result(null, {
                        message: 'Something Went Wrong'
                    });
                }
                if (res.length > 0) {
                    // If a record is found, return the user data
                    return result(null, {
                        data: res,
                        message: 'hii'
                    });
                } else {
                    // If no record is found, return an error indicating invalid credentials
                    return res(null, {
                        message: 'invalid credentials'
                    });
                }
            }
        );
    } catch (err) {
        console.error(err);
        return callback({ message: 'Something Went Wrong' }, null);
    }
};




        

module.exports = Users;