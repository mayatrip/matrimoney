DROP TABLE IF EXISTS income; 
 
CREATE TABLE income ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    text VARCHAR(100), 
    amount DECIMAL(8,2) 
); 
 
INSERT INTO income (text, amount)  
    VALUES ("Bride's family", 4000), ("Groom's family", 3000), ("The couple", 1000);