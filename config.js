var connectionString = process.env.DATABASE_URL || 'postgres://user:wordpass@localhost:5432/todo';

module.exports = connectionString;