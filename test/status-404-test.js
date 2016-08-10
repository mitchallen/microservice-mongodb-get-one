/**
    Module: @mitchallen/microservice-mongodb-get-one
      Test: status-404-test
    Author: Mitch Allen
*/

"use strict";

var request = require('supertest'),
    should = require('should'),
    postModulePath = "@mitchallen/microservice-mongodb-post",
    testName = require("../package").name,
    testVersion = require("../package").version,
    verbose = process.env.TEST_VERBOSE || false,
    testPort = process.env.TEST_SERVICE_PORT || 8020,
    postPort = process.env.TEST_SERVICE_POST_PORT || 8021,
    testCollectionName = "test-qa",
    testPrefix = "/v1",
    testUrl = testPrefix + "/" + testCollectionName,
    postUrl = testPrefix + "/" + testCollectionName,
    testHost = "http://localhost:" + testPort,
    postHost = "http://localhost:" + postPort,
    testMongo =  {
        // NOTE: if for localhost you change '/test' to '/test2', a test2 DB will be created in Mongo.
        // Then all operations will go to test2.
        uri: process.env.TEST_MONGO_URI || 'mongodb://localhost/test'
    },
    testObject = {
        email : "foo@foo.com",
        username: "foo",
        status: "active",
        age: 21
    };

describe('mongodb microservice smoke test', function() {

    it('should return 404 for a missing id', function(done) {

        var options = {
            name: testName,
            version: testVersion,
            verbose: verbose,
            port: testPort,
            prefix: testPrefix,
            mongodb: testMongo,
            collectionName: testCollectionName
        };
        
        var modulePath = '../index';
        // Needed for cleanup between tests
        delete require.cache[require.resolve(modulePath)];
        require(modulePath)(options, function(err,obj) {
            should.not.exist(err);
            should.exist(obj);
            var server = obj.server;
            should.exist(server);

            // GET
            request(testHost)
                .get(testUrl + "/57ab5062af95fa02b54f1c61")
                .expect(404)
                .end(function (err, res) {
                    should.not.exist(err);
                    server.close(done);
                });
        });
    });

    it('should return 404 for an invalid id', function(done) {

        var options = {
            name: testName,
            version: testVersion,
            verbose: verbose,
            port: testPort,
            prefix: testPrefix,
            mongodb: testMongo,
            collectionName: testCollectionName
        };
        
        var modulePath = '../index';
        // Needed for cleanup between tests
        delete require.cache[require.resolve(modulePath)];
        require(modulePath)(options, function(err,obj) {
            should.not.exist(err);
            should.exist(obj);
            var server = obj.server;
            should.exist(server);

            // GET
            request(testHost)
                .get(testUrl + "/BOGUS")
                .expect(404)
                .end(function (err, res) {
                    should.not.exist(err);
                    server.close(done);
                });
        });
    });
});