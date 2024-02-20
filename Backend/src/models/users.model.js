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

Users.form = (req, result) => {
    try {
        const { username, email, password,cpassword } = req.body.data;
        dbConn.query(`INSERT INTO users (username, email, password, cpassword) VALUES ('${username}', '${email}', '${password}', '${cpassword}')`, (err, res) => {
            if (err) {
                console.error(err);
                return result(null, {
                    status: 0,
                    message: "Something went wrong!! Try Again"
                });
            }

            console.log("res", res);
            return result(null, {
                status: 1,
                data: res,
                message: "Data inserted successfully"
            });
        });
    } catch (err) {
        console.log(err);
        return result(null, {
            status: 0,
            message: "Something went wrong!! Try Again"
        });
    }
};




Users.saveAsDraft = (req, result) => {
    try {
        const {
            type_id,
            sent_to,
            cc,
            subject,
            message,
        } = req.body.data
         
      
        let escapedString = message.replace(/'/g, "\\'");
        // `INSERT INTO node_image(node_id, os_name, vm_name, os_type, vm_type, status, image_name, image_tag, node_hardware) VALUES ('${node_id}', '${os_name}', '${vm_name}', '${os_type}', '${vm_type}', 0, '${image_name}', '${image_tag}', '${base_system}')`,

        dbConn.query(` insert into drafttables (type_id,sent_to, cc, subject, message) values ('${type_id}','${sent_to}','${cc}','${subject}','${escapedString}')`, (err, res) => {
            console.log(err)
            console.log(res)
            return result(null, {
                data: res,
                message: "Data Save in Draft"
            });
        })
    } catch (err) {
        console.log(err);
        return result(null, {
            message: 'Something Went Wrong'
        });
    }
}




Users.submitdata = (req, result) => {
    try {
        dbConn.query(`SELECT * FROM templatedb.templatetable;`, (err, res) => {
            return result(null, {
                data: res,
                message: "submitted  Table 1  fetch Successfully"
            });
        })
    } catch (err) {
        console.log(err);
        return result(null, {
            message: 'Something Went Wrong'
        });
    }
}






Users.draftdata = (req, result) => {
    try {
        dbConn.query(`SELECT * FROM templatedb.drafttables;`, (err, res) => {
            return result(null, {
                data: res,
                message: "draft Table  fetch Successfully"
            });
        })
    } catch (err) {
        console.log(err);
        return result(null, {
            message: 'Something Went Wrong'
        });
    }
}


Users.typenametable = (req, result) => {
    try {
        dbConn.query(`SELECT * FROM typenametable`, (err, res) => {
            return result(null, {
                data: res,
                message: "draft Table  fetch Successfully"
            });
        })
    } catch (err) {
        console.log(err);
        return result(null, {
            message: 'Something Went Wrong'
        });
    }
}

// Users.update = (req, result) => {
//     try {
//         let {
//             id,type_id, sent_to, cc, subject, message
//         } = req.body.e
//          console.log(type_id, sent_to, cc, subject, message);
//      let escapedString = Summary.replace(/'/g, "\\'");
//          console.log(escapedString);
//         dbConn.query(`UPDATE templatetable set type_id= "${type_id}",sent_to= "${sent_to}",cc= "${cc}" ,subject= "${subject}", message= "${message}" WHERE id = ${id}`, (err, res) => {
//              console.log(res);
//             return result(null, {
//                 data: res,
//                 message: " updated successfully"
//             });
//         })
//     } catch (err) {
//         console.log(err);
//         return result(null, {
//             message: 'Something Went Wrong'
//         });
//     }
// }

// Users.update = (req, result) => {
//     try {
//         let {
//             id, type_id, sent_to, cc, subject, message
//         } = req.body.e;

//         dbConn.query(`
//             UPDATE templatetable
//             SET type_id = "${type_id}",
//                 sent_to = "${sent_to}",
//                 cc = "${cc}",
//                 subject = "${subject}",
//                 version = version + 0.1,
//                 message = "${message}"
//             WHERE id = ${id}
//         `, (err, res) => {
//             if (err) {
//                 console.log(err);
//                 return result(null, {
//                     message: 'Something Went Wrong'
//                 });
//             }

//             console.log(res);
//             return result(null, {
//                 data: res,
//                 message: "Updated successfully"
//             });
//         });
//     } catch (err) {
//         console.log(err);
//         return result(null, {
//             message: 'Something Went Wrong'
//         });
//     }
// };







Users.update = (req, result) => {
    try {
        let {
            id, type_id, sent_to, cc, subject, message
        } = req.body.e;
        let escapedString = message.replace(/'/g, "\\'");

        dbConn.query(`
            UPDATE templatetable
            SET type_id = "${type_id}",
                sent_to = "${sent_to}",
                cc = "${cc}",
                subject = "${subject}",
                version = COALESCE(version, 0) + 0.1,
                message = '${escapedString}'
            WHERE id = ${id}
        `, (err, res) => {
            if (err) {
                console.log(err);
                return result(null, {
                    message: 'Something Went Wrong'
                });
            }

            console.log(res);
            return result(null, {
                data: res,
                message: "Updated successfully"
            });
        });
    } catch (err) {
        console.log(err);
        return result(null, {
            message: 'Something Went Wrong'
        });
    }
};



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
            Insert into  users (username, email, password, cpassword) VALUES ("${username}", "${email}", "${password}", "${confirmPassword}")
            
        `, (err, res) => {
            if (err) {
                console.log(err);
                return result(null, {
                    message: 'Something Went Wrong'
                });
            }

            console.log(res);
            return result(null, {                status: 1,


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

// login user

// Users.loginUser = async (req, result) => {
//     // let getCapstatus = await fetchcapchaStatus(
//     //   req.body.capcha_token,
//     //   req.body.ip
//     // );
//     // if (getCapstatus.data.success != true) {
//     //   return result({
//     //     message: "Capcha verification failed! Please try again.",
//     //   });
//     // }
//     date = new Date();
//     hotDetails = os.networkInterfaces();
//     // console.log('hotDetails',hotDetails);
//     try {
//       let { username, password } = req.body;
//       if (!username || !password) {
//         res.status(400).json({
//           details: "Invalid request!",
//         });
//       }
//       // check number of login attempts
//       // let dateToday = new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
//     //   var date = new Date();
//     //   var dateToday =
//     //     date.getFullYear() +
//     //     "-" +
//     //     ("00" + (date.getMonth() + 1)).slice(-2) +
//     //     "-" +
//     //     ("00" + date.getDate()).slice(-2) +
//     //     " " +
//     //     ("00" + date.getHours()).slice(-2) +
//     //     ":" +
//     //     ("00" + date.getMinutes()).slice(-2) +
//     //     ":" +
//     //     ("00" + date.getSeconds()).slice(-2);
//       // console.log('dateToday',dateToday);
//     //   dbConn.query(
//     //     `SELECT count(*) AS count
//     //        FROM failed_logins
//     //        WHERE username = '${username}'
//     //        AND failed_at > NOW() - INTERVAL 1 HOUR`,
//     //     async (err, res) => {
//     //       if (res && res[0] && res[0].count >= 3) {
//     //         return result(null, {
//     //           message:
//     //             "Account Blocked for 1 hr due to multiple Invalid attemps. Please try after an Hour!",
//     //         });
//     //       }
//     //     }
//     //   );
//       // password = Buffer.from(password, 'base64').toString('binary');
//     //   password = CryptoJS.AES.decrypt(
//     //     password,
//     //     "k7qliZ4fW4zrsm@PrEapGVDuTM6J5mZYg"
//     //   ).toString(CryptoJS.enc.Utf8);
  
//       dbConn.query(
//         `SELECT * FROM users WHERE username = ? ''`,
//         [username],
//         async (err, res) => {
//           if (err) {
//             console.log(err);
  
//             return result(null, {
//               message: "fail to execute Database",
//             });
//           } else {
//             if (res.length > 0) {
//             //   const varify = await bcrypt.compareSync(password, res[0].password);
//               if (req.body.password === res[0].password) {
//                 // let arrlen = req.ip?.split(":").length;
//                 // let ipAddress = req.ip.split(":")[arrlen - 1];
  
//                 // sessionDetails = {
//                 //   ip_address: req.body.ip,
//                 //   // mac_address: hotDetails?.en6[1]?.mac,
//                 //   login_time: date,
//                 //   user_id: res[0].user_id,
//                 // };
  
//                 // let sql = "INSERT INTO user_session SET ?";
//                 // dbConn.query(sql, sessionDetails);
//                 // let accessToken
//                 const accessToken = jwt.sign(
//                   {
//                     data: res[0].username,
//                     // role: res[0].role,
//                   },
//                   process.env.JWT_PASSWORD_KEY,
//                   {
//                     expiresIn: "10D",
//                   }
//                 );
//                 // if (res[0].token) {
//                 //   let body = res[0];
//                 //   dbConn.query(
//                 //     `UPDATE users SET token = '${accessToken}' WHERE user_id = '${res[0].user_id}'`,
//                 //     (err, res) => {
//                 //       if (err) {
//                 //         return result(null, {
//                 //           message: "token doesn't match",
//                 //         });
//                 //       } else {
//                 //         if (body.user_status == null || body.user_status == "") {
//                 //           return result(null, {
//                 //             message: "Wait for admin approval",
//                 //           });
//                 //         } else if (body.user_status == "inactive") {
//                 //           return result(null, {
//                 //             message:
//                 //               "Your account suspended!!/Waiting for approval",
//                 //           });
//                 //         } else if (body.user_status == "active") {
//                           return result(null, {
//                             message: "Logged Successfully!!",
//                             accessToken: accessToken,
//                             user: body,
//                           });
//                         // }
//                     //   }
//                     // }
//                 //   );
//                 } else {
//                   return result(null, {
//                     message: "user not authrize",
//                   });
//                 }
//     //           } else {
//     //             let ipAddress = req.ip;
//     //             dbConn.query(
//     //               `INSERT INTO failed_logins (username, ip_address, failed_at)
//     //                        VALUES ('${username}', '${ipAddress}', '${dateToday}')`,
//     //               async (err, res) => {
//     //                 return result(null, {
//     //                   message:
//     //                     "Invalid Username or Password!!!. Your account will be blocked for 1 hr after 3 unsuccessfull attempts.",
//     //                 });
//     //               }
//     //             );
//     //           }
//     //         } else {
//     //           return result(null, {
//     //             message: "Invalid user!!",
//     //           });
//     //         }
//     //       }
//     //     }
//     //   );
//     }
//     //  catch (error) {
//     //   console.log("error==111111111111111111=>>>", error);
//     //   return result(null, error);
//     // }
//   };

// Users.login = (req, result) => {
//     try {
//         let {
//             username, email, password, confirmPassword
//         } = req.body;

//         if(password != confirmPassword ){
//             return result(null, {
//                 message : 'Password and confirm Password does not match'
//             })
//         }
        


//         dbConn.query(`
//             Insert into  users (username, email, password, cpassword) VALUES ("${username}", "${email}", "${password}", "${confirmPassword}")
            
//         `, (err, res) => {
//             if (err) {
//                 console.log(err);
//                 return result(null, {
//                     message: 'Something Went Wrong'
//                 });
//             }

//             console.log(res);
//             return result(null, {                status: 1,


//                 data: res,
//                 message: "User Added successfully"
//             });
//         });
//     } catch (err) {
//         console.log(err);
//         return result(null, {
//             message: 'Something Went Wrong'
//         });
//     }
// };






Users.billityForm = (req, result) => {
    try {
        console.log("req.body-------->",req.body);  
        dbConn.query("SELECT * FROM `billity-form`", (err, res) => {
            console.log("Res---->", res);
            console.log(err)
            return result(null, {
                data: res,
                message: "submitted  Table 1  fetch Successfully"
            });
        })
    } catch (err) {
        console.log(err);
        return result(null, {
            message: 'Something Went Wrong'
        });
    }
}













        

module.exports = Users;