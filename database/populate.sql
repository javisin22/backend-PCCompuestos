
INSERT INTO Users (ID, name, password, isAdmin, email, address)
VALUES 
    (nextval('userSeq'), 'admin', 'admin', true, 'admin@admin.com', 'c/Admin, 1, 4ºA'),
    (nextval('userSeq'), 'sin', 'anson', false, 'javierito@putoUnai.com', 'c/Maria de Luna, 22');

-- Component
-- populate_component.sql

-- Products
INSERT INTO Products (ID, name, description, quantity, price, url, image) 
VALUES 
    (nextval('productSeq'), 'Product1', 'This is product 1', 10, 100, 'product1', 'image1'),
    (nextval('productSeq'), 'Product2', 'This is product 2', 5, 199.99, 'product2', 'image1'),
    (nextval('productSeq'), 'Product3', 'This is product 3', 3, 221.99, 'product3', 'image1');

-- has_in_shopping_cart
INSERT INTO has_in_shopping_cart (userID, productID, quantity) 
VALUES 
    (1, 1, 2);

-- Orders
INSERT INTO Orders (ID, userID, purchaseDate, status) 
VALUES 
    (nextval('orderSeq'), 1, '2023-10-10', 'Not prepared');

-- order_contains
INSERT INTO order_contains (orderID, productID, quantity) 
VALUES 
    (1, 1, 2);

-- Category
INSERT INTO Category (productID, category) 
VALUES 
    (1, 'Category1');

-- consists_of
INSERT INTO consists_of (productID, componentID) 
VALUES 
    (1, 1),
    (1, 2),
    (1, 3),
    (1, 4),
    (1, 5),
    (1, 6),
    (1, 7),
    (1, 8),
    (1, 9);
