/**
 * Created by nimdanoob on 2016/12/7.
 */
var setting = require('../settings'),
    DB = require('mongod').Db,
    Connection = require('mongod').Connection,
    Server = require('mongod').Server;

module.exports = new Db(setting.db, new Server(setting.host, setting.port)),
{safe: true};