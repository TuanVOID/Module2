"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneManager = void 0;
var PhoneManager = /** @class */ (function () {
    function PhoneManager() {
        this.phones = [];
    }
    PhoneManager.prototype.add = function (phone) {
        this.phones.push(phone);
    };
    PhoneManager.prototype.getList = function () {
        return this.phones;
    };
    PhoneManager.prototype.findPhoneByName = function (name) {
        var index = -1;
        for (var i = 0; i < this.phones.length; i++) {
            if (this.phones[i].name === name) {
                index = i;
            }
        }
        return index;
    };
    PhoneManager.prototype.deleteByName = function (name) {
        var indexPhoneDelete = this.findPhoneByName(name);
        if (indexPhoneDelete != -1) {
            this.phones.splice(indexPhoneDelete, 1);
        }
        else
            throw new Error("Het hang");
    };
    PhoneManager.prototype.update = function (name, newName, newPrice, newQuantity) {
        var indexPhoneUpdate = this.findPhoneByName(name);
        if (indexPhoneUpdate != -1) {
            this.phones[indexPhoneUpdate].name = newName;
            this.phones[indexPhoneUpdate].price = newPrice;
            this.phones[indexPhoneUpdate].quantity = newQuantity;
        }
        else
            throw new Error("San pham khong ton tai");
    };
    PhoneManager.prototype.sell = function (name, quantity) {
        var indexPhoneSold = this.findPhoneByName(name);
        if (indexPhoneSold != -1) {
            this.phones[indexPhoneSold].quantity -= quantity;
        }
    };
    return PhoneManager;
}());
exports.PhoneManager = PhoneManager;
