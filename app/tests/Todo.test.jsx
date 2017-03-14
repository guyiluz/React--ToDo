var React = require("react")
var ReactDOM = require("react-dom")
var TestUtils = require("react-addons-test-utils")
var expect = require("expect")
var $ = require("jquery")

var todo = require("todo");

describe('todo', () => {
    it('should exsit', () => {
        expect(todo).toExist();

    })
})
