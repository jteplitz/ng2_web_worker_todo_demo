var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var collection_1 = require('angular2/src/core/facade/collection');
// base model for RecordStore
var KeyModel = (function () {
    function KeyModel(key) {
        this.key = key;
    }
    return KeyModel;
})();
exports.KeyModel = KeyModel;
var Todo = (function (_super) {
    __extends(Todo, _super);
    function Todo(key, title, completed) {
        _super.call(this, key);
        this.title = title;
        this.completed = completed;
        this.editTitle = title;
    }
    return Todo;
})(KeyModel);
exports.Todo = Todo;
var TodoFactory = (function () {
    function TodoFactory() {
        this._uid = 0;
    }
    TodoFactory.prototype.nextUid = function () { return ++this._uid; };
    TodoFactory.prototype.create = function (title, isCompleted) {
        return new Todo(this.nextUid(), title, isCompleted);
    };
    TodoFactory = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TodoFactory);
    return TodoFactory;
})();
exports.TodoFactory = TodoFactory;
// Store manages any generic item that inherits from KeyModel
var Store = (function () {
    function Store() {
        this.list = [];
    }
    Store.prototype.add = function (record) { this.list.push(record); };
    Store.prototype.remove = function (record) { this._spliceOut(record); };
    Store.prototype.removeBy = function (callback) {
        var records = collection_1.ListWrapper.filter(this.list, callback);
        collection_1.ListWrapper.removeAll(this.list, records);
    };
    Store.prototype._spliceOut = function (record) {
        var i = this._indexFor(record);
        if (i > -1) {
            return collection_1.ListWrapper.splice(this.list, i, 1)[0];
        }
        return null;
    };
    Store.prototype._indexFor = function (record) { return this.list.indexOf(record); };
    Store = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Store);
    return Store;
})();
exports.Store = Store;
//# sourceMappingURL=TodoStore.js.map