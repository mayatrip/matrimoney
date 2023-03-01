DROP TABLE IF EXISTS income; 
 
CREATE TABLE income ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    text VARCHAR(100), 
    amount DECIMAL(8,2) 
); 
 
INSERT INTO income (text, amount)  
    VALUES ("Bride's family", 4000), ("Groom's family", 3000), ("The couple", 1000);

DROP TABLE IF EXISTS cost_estimate; 
 
CREATE TABLE cost_estimate ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    text VARCHAR(100), 
    amount DECIMAL(8,2)

); 
 
INSERT INTO cost_estimate (text, amount)  
    VALUES ("Venue", 10000), ("Food", 5000), ("Music", 2000);

DROP TABLE IF EXISTS cost_actual; 
 
CREATE TABLE cost_actual ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    text VARCHAR(100), 
    amount DECIMAL(8,2),
    notes VARCHAR(500),
    income_id INT NOT NULL,

    FOREIGN KEY (income_id) REFERENCES income(id)

); 
 
INSERT INTO cost_actual (text, amount)  
    VALUES ("Venue", 10000, "Our point person is Dana", 1), ("Food", 5000, "Olive Wood Pizza", 2), ("Music", 2000, "James Harper Band", 3);