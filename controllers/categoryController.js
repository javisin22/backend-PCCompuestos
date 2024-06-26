const db = require('../db');

const createCategory = async (productID, category) => {
  try{
    const result = await db.query(`INSERT INTO Category(productID, category) VALUES($1, $2) RETURNING *`, [productID, category]);
    return result;
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}

// Operación CRUD: Read_1
const getAllCategories = async () => {
  try {
    const result = await db.query('SELECT * FROM Category');
    return result;
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}

// Operación CRUD: Read_2
// const getOrderById = async (orderId) => {
//   try {
//     const result = await db.query('SELECT * FROM Category WHERE id = $1', [orderId]);
//     return result.rows[0];
//   } catch (error) {
//     console.error('Fatal error: ', error);
//     throw error;
//   }
// }

// Operación CRUD: Update
const updateCategoryById = async (productID, category) => {
  try{
    const result = await db.query('UPDATE Category SET category = $2 WHERE productID = $1 RETURNING *', [productID, category]);
    return result.rows[0];
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}


// Operación CRUD: Delete
const deleteCategoryById = async (productID) => {
  try{
    const result = await db.query('DELETE FROM Category WHERE productID = $1 RETURNING *', [productID]);
    return result;
  } catch (error) {
    console.error('Fatal error: ', error);
    throw error;
  }
}

// Other methods...

module.exports = {
  createCategory,
  getAllCategories,
  // getCategoryById,
  updateCategoryById,
  deleteCategoryById
};
