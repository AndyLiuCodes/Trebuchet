import pool from '../connectors/mysqlConnector.js';

export function executeQuery(query, callback) {
  pool.getConnection(function (err, connection) {
    if (err) {
      console.error(new Date(), 'ERROR: Getting connecion from pool.', err);
      connection.release();
      throw err;
    }

    connection.query(query, function (err, data) {
      connection.release();
      if (!err) {
        callback(null, { data: data });
      } else {
        console.error(new Date(), 'ERROR: Querying database.', err);
      }
    });

    connection.on('error', function (err) {
      if (err) {
        console.error(new Date(), 'ERROR: connection error.', err);
        throw err;
      }
    });
  });
}

export function executeQueryWithValues(query, values, callback) {
  pool.getConnection(function (err, connection) {
    if (err) {
      console.error(new Date(), 'ERROR: Getting connecion from pool.', err);
      connection.release();
      throw err;
    }

    connection.query(query, values, function (err, data) {
      connection.release();
      if (!err) {
        callback(null, { data: data });
      } else {
        console.error(new Date(), 'ERROR: Querying database.', err);
        throw err;
      }
    });

    connection.on('error', function (err) {
      if (err) {
        console.error(new Date(), 'ERROR: connection error.', err);
        throw err;
      }
    });
  });
}

export function closePool(callback) {
  if (pool) {
    pool.end(callback);
  }
}
