import passwordHash from "password-hash";
import mySql from "mysql";
import dotenv from "dotenv";
import colors from "colors";
dotenv.config();

let connection = null;
function connect() {
  return new Promise((resolve, reject) => {
    if (connection) {
      if (connection.state === "disconnected") {
        connection.connect((error) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      } else {
        resolve();
      }
    } else {
      connection = mySql.createConnection({
        // multipleStatements: true,
        // host: process.env.HOSTSQL,
        // port: process.env.PORTSQL,
        // user: process.env.USERSQL,
        // password: process.env.PASSWORDSQL,
        // database: process.env.DATABASESQL,

        multipleStatements: true,
        host: "localhost",
        port: 3306,
        user: "proshop-ecommerce-user",
        password: "123456",
        database: "proshop-ecommerce",
      });
      connection.connect((error) => {
        if (error) {
          console.log("Conf", error.red.underline);
          reject();
        } else {
          resolve(console.log("SQL connected".yellow.underline.bold));
        }
      });
    }
  });
}

function runQuery(queryString) {
  return new Promise((resolve, reject) => {
    connect()
      .then(() => {
        connection.query(queryString, (error, result, fields) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function getAllProducts() {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM products`;

    runQuery(query)
      .then((results) => {
        const productsArr = [];
        results.forEach((p) => {
          productsArr.push({
            _id: p._id,
            name: p.name,
            image: p.image,
            description: p.description,
            brand: p.brand,
            category: p.category,
            price: p.price,
            countInStock: p.countInStock,
            rating: p.rating,
            numReviews: p.numReviews,
          });
        });
        resolve(productsArr);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function getProduct(id) {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM products WHERE _id = '${id}'`;
    runQuery(query)
      .then((results) => {
        const productsArr = [];
        results.forEach((p) => {
          productsArr.push({
            _id: p._id,
            name: p.name,
            image: p.image,
            description: p.description,
            brand: p.brand,
            category: p.category,
            price: p.price,
            countInStock: p.countInStock,
            rating: p.rating,
            numReviews: p.numReviews,
          });
        });
        resolve(productsArr[0]);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default { connect, runQuery, getAllProducts, getProduct };
