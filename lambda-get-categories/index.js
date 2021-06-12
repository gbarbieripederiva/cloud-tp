const AWS = require('aws-sdk')
const RDS = new AWS.RDSDataService

exports.handler = async (event, context) => {
    var sqlStatement = 'SELECT * FROM categories;'
    // var sqlStatement = 'INSERT INTO Categories (Category_id, Category_name) VALUES (2, \'LIVING\')';

    // The Lambda environment variables for the Aurora Cluster Arn, Database Name, and the AWS Secrets Arn hosting the master credentials of the serverless db
    var DBSecretsStoreArn = 'arn:aws:secretsmanager:us-east-1:937426317432:secret:rds-db-credentials/cluster-S2TD6PF6D354G2FPBRYOYAVW34/postgres-bUmLJS';
    var DBAuroraClusterArn = 'arn:aws:rds:us-east-1:937426317432:cluster:database-2';
    var DatabaseName = 'test';

    const params = {
        resourceArn: DBAuroraClusterArn,
        secretArn: DBSecretsStoreArn,
        sql: sqlStatement,
        database: DatabaseName,
    }

    try {
        var dbResponse = await RDS.executeStatement(params, null).promise();
        return JSON.stringify(dbResponse['records'])

    } catch (error) {
        return error
    }
}