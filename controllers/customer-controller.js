const { compressResponse } = require("../utilities/compression");
const { connection } = require("../utilities/connection");
const { CustomError }= require("../utilities/custom-err");
const { login } = require("../utilities/validation");
const { getToken } = require("../utilities/auth");
const md5 = require("md5");
require("dotenv").config()


const CustomerLogin = (req, res) => {
    const { Email, Password } = req.body;
    connection.query(
      "SELECT * from Customers where Customer_Email = ? and Password = ?",
      [Email, md5(Password)],
      (err, result) => {
        if (err || result.length === 0) {
          res.status(400).json({
            success: err ? false : false,
            message: err
              ? err.message
              : `Failed Authentication`,
            data: result,
          });
          return;
        }
        let token = getToken(Email, "password");
        res.status(201).json({
          success: true,
          message: "Logged In",
          token: token,
        });
      }
    );
  };



  const CustomerDetails = (req, res) => { 
    let { Email, Details } = req.query;
    Details = Details ? Details : "Customers.Customer_ID,Customer_Name, Contact, Gender, Address, Customers.Customer_Email ,Products.Product_ID, Product_Name, Product_Model, Availability, Ratings, Type, Product_Price";
    console.log(Details)
    console.log(Email)
    connection.query(
      `select ${Details} from Customers
      LEFT JOIN Customer_Orders ON
      Customers.Customer_Email = Customer_Orders.Customer_Email
      LEFT JOIN Products ON
      Products.Product_ID = Customer_Orders.Product_ID where Customers.Customer_Email = ?`,
      [Email],
      async (err, result) => {
      if (err || result.length === 0) {
        res.status(400).json({
          success: false,
          message: err ? err.message : "no records found",
          data: result,
        });
        return;
      }
      res.setHeader("Content-Encoding", "gzip");
      res.setHeader("Content-Type", "application/json");
      let val = await compressResponse({
        success: true,
        message: `Fetched ${result.length} records`,
        data: result,
      });
      console.log(val);
      res.status(200).send(val);
  
  
    }
    );
  
    };





    const ProductDetials = async (req, res, next) => {
        try {
          let { Page, Sort, Filter } = req.query;
          console.log(Page, Sort, Filter);
          if (Sort) {
            Sort = "ORDER BY " + Sort;
          } else {
            Sort = "";
          }
          let queries = [];
          const query = (queries, Filter) => {
            Filter = JSON.parse(Filter);
            for (let i in Filter) {
              if (i == "Ratings") {
                let options = Filter[i].split(",");
                queries.push(`${i} ${options[1]} ${options[0]}`);
              }
              if (i == "Product_Name") {
                queries.push(`${i} LIKE '%${Filter[i]}%'`);
              }
              if (i == "Product_Price") {
                let options = Filter[i].split(",");
                queries.push(`${i} ${options[1]} ${options[0]}`);
              }
              if (i == "Type") {
                queries.push(`${i} = '${Filter[i]}'`);
              }
            }
            queries = queries.join(" and ", ",");
            return queries;
          };
          if (Filter) {
            queries = "WHERE " + query(queries, Filter);
          }
          console.log(queries);
          const [result, feild] = await connection
            .promise()
            .query(
              `select * from Products ${queries} ${Sort} limit 20 offset ${
                (Page - 1) * 20
              }`
            );
          res.setHeader("Content-Encoding", "gzip");
          res.setHeader("Content-Type", "application/json");
          let val = await compressResponse({
            success: true,
            message: `Fetched ${result.length} records`,
            data: result,
          });
          res.status(200).send(val);
        } catch (error) {
          next(new Error(error));
          return;
        }
      };


module.exports = { CustomerLogin, CustomerDetails, ProductDetials };




 /* const ProductDetials = (req, res) => { 
        let {Page, Sort} = req.body;
        console.log((Page-1)*20);
        console.log(Sort);
        //console.log(Filter);
        connection.query(
          `SELECT * FROM Products order by ${Sort} LIMIT 20 OFFSET ${(Page-1)*20}`,
          async (err, result) => {
          if (err || result.length === 0) {
            res.status(400).json({
              success: false,
              message: err ? err.message : "no records found",
              data: result,
            });
            return;
          }
          res.setHeader("Content-Encoding", "gzip");
          res.setHeader("Content-Type", "application/json");
          let val = await compressResponse({
            success: true,
            message: `Fetched ${result.length} records`,
            data: result,
          });
          console.log(val);
          res.status(200).send(val);
      
      
        }
        );
      
        };*/



    /*const ProductDetials = async(req,res,next) =>{
        try {
            let page = req.body.page ? Number(req.body.page) : 1;
            const StartPage = (page - 1) * ResultPage;
            const [result,fields] = await con.promise().query(
                "select * from Products where ? ORDER By ? limit ?,?",
            [req.query,req.body.field,StartPage,ResultPage]
            )
            if(result.length === 0){
                res.status(400)
                next(new Error("No Records"))
            }
            res.status(201).json({
                status:true,
                message : `fetched ${result.length} records`,
                data:result
            })
        } catch (error) {
            res.status(500)
            next(new Error(error.message))
        }
    }
    
    `SELECT * FROM products ${filteredBy} ${sortedBy} LIMIT 20 OFFSET ${(page-1)*20}`;
    
    */
    
    

  /*select ${col_name} from Customers
        LEFT JOIN Customer_Orders ON
        Customers.Customer_Email = Customer_Orders.Customer_Email
        LEFT JOIN Products ON
        Products.Product_ID = Orders.Product_ID where Customer_Email = ?*/