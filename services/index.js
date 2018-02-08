require('module-alias/register');
const http = require('http'),
    BudgetManagerAPI = require('@BudgetManagerAPI'),
    BudgetManagerServer = http.Server(BudgetManagerAPI),
    BudgetManagerPort = process.env.PORT || 3001,
    LOCAL = '0.0.0.0';

    BudgetManagerServer.listen(BudgetManagerPort,LOCAL, () =>{
        console.log(`Budget Managaer api is running on ${BudgetManagerPort}`);
    });