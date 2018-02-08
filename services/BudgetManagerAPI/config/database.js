module.exports = (mongoose, config) => {
    const database = config.connection;
    mongoose.Promise = Promise;

    mongoose.connect(config.database, {
        useMongoClient: true,
        promiseLibrary: global.Promise
    });

    database.on('error', (error) => {
        console.log(`Connection to Budget Manager database failed : ${error}`);
    });

    database.on('connected', () => {
        console.log('Connected to BudgetManager Db');
    });

    database.on('disconnected', () => {
        console.log('Disconnected from BudgetManager');
    });
    database.on('SIGINT', () => {
        database.close(() => {
            console.log('BudgetManager terminated, connection closed');
            process.exit(0);
        })
    })
}