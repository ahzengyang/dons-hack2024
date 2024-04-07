const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./proj6.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Connected to the database.');
    }
  });

  const query = `SELECT * FROM terms`;

// Execute the query
db.all(query, [], (err, rows) => {
  if (err) {
    console.error(err.message);
  } else {
    // Process the rows
    rows.forEach((row) => {
      console.log(row);
    });
  }
});

// Close the database connection
db.close((err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Database connection closed.');
  }
});