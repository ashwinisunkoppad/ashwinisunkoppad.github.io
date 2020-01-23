(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~typography-settings-module"],{

/***/ "./src/app/services/appservices.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/appservices.service.ts ***!
  \*************************************************/
/*! exports provided: AppservicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppservicesService", function() { return AppservicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_common_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/common-http.service */ "./src/app/shared/common-http.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.constant */ "./src/app/app.constant.ts");







var AppservicesService = /** @class */ (function () {
    function AppservicesService(http, commonHttpService) {
        this.http = http;
        this.commonHttpService = commonHttpService;
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.uploadSuccess = false;
        this.api_url_Settings = _app_constant__WEBPACK_IMPORTED_MODULE_5__["AppConstant"].API_ENDPOINT;
        this.api_url_Member = _app_constant__WEBPACK_IMPORTED_MODULE_5__["AppConstant"].API_ENDPOINT;
        this.appendpoint = this.api_url_Settings;
        this.appendpoint_member = this.api_url_Member;
        this.SERVER_URL_GET_DESG = this.appendpoint + _app_constant__WEBPACK_IMPORTED_MODULE_5__["AppConstant"].API_CONFIG.API_URL.SETTINGS.GETDESIGNATION;
        this.SERVER_URL_GET_DEPT = this.appendpoint + _app_constant__WEBPACK_IMPORTED_MODULE_5__["AppConstant"].API_CONFIG.API_URL.SETTINGS.GETDEPARTMENT;
        this.SERVER_URL_GET_LOC = this.appendpoint + _app_constant__WEBPACK_IMPORTED_MODULE_5__["AppConstant"].API_CONFIG.API_URL.SETTINGS.GETLOCATIONS;
        this.SERVER_URL_INSERT_ADD_DEPT = this.appendpoint + _app_constant__WEBPACK_IMPORTED_MODULE_5__["AppConstant"].API_CONFIG.API_URL.SETTINGS.INSERTDEPARTMENT;
        this.SERVER_URL_DEPT_DEL = this.appendpoint + _app_constant__WEBPACK_IMPORTED_MODULE_5__["AppConstant"].API_CONFIG.API_URL.SETTINGS.DELETEDEPARTMENT;
        this.SERVER_URL_INSERT_UPDATE_DESG = this.appendpoint + _app_constant__WEBPACK_IMPORTED_MODULE_5__["AppConstant"].API_CONFIG.API_URL.SETTINGS.INSERTDESIGNATION;
        this.SERVER_URL_DESG_DEL = this.appendpoint + _app_constant__WEBPACK_IMPORTED_MODULE_5__["AppConstant"].API_CONFIG.API_URL.SETTINGS.DELETEDESIGNATION;
        this.SERVER_URL_GET_MEM = this.appendpoint_member + _app_constant__WEBPACK_IMPORTED_MODULE_5__["AppConstant"].API_CONFIG.API_URL.MEMBERS.GETMEMBER;
        this.SERVER_URL_INSERT_ADD_LOC = this.appendpoint + _app_constant__WEBPACK_IMPORTED_MODULE_5__["AppConstant"].API_CONFIG.API_URL.SETTINGS.INSERTLOCATIONS;
        this.SERVER_URL_DEL_LOC = this.appendpoint + _app_constant__WEBPACK_IMPORTED_MODULE_5__["AppConstant"].API_CONFIG.API_URL.SETTINGS.DELETELOCATIONS;
        this.SERVER_URL_GET_DOC = this.appendpoint + _app_constant__WEBPACK_IMPORTED_MODULE_5__["AppConstant"].API_CONFIG.API_URL.SETTINGS.GETDOCUMENT;
        this.SERVER_URL_INSERT_ADD_DOC = this.appendpoint + _app_constant__WEBPACK_IMPORTED_MODULE_5__["AppConstant"].API_CONFIG.API_URL.SETTINGS.INSERTDOCUMENT;
        this.SERVER_URL_DEL_DOC = this.appendpoint + _app_constant__WEBPACK_IMPORTED_MODULE_5__["AppConstant"].API_CONFIG.API_URL.SETTINGS.DELETEDOCUMENT;
        this.SERVER_URL_ORG = this.appendpoint + _app_constant__WEBPACK_IMPORTED_MODULE_5__["AppConstant"].API_CONFIG.API_URL.SETTINGS.GETORGANIZATION;
        this.SERVER_URL_GET_USER = this.appendpoint + _app_constant__WEBPACK_IMPORTED_MODULE_5__["AppConstant"].API_CONFIG.API_URL.SETTINGS.GETUSER;
        this.SERVER_URL_GET_USER_BY_PAGE = this.appendpoint + _app_constant__WEBPACK_IMPORTED_MODULE_5__["AppConstant"].API_CONFIG.API_URL.SETTINGS.GETUSERPAGE;
        this.SEREVER_URL_DELETE_USER = this.appendpoint + _app_constant__WEBPACK_IMPORTED_MODULE_5__["AppConstant"].API_CONFIG.API_URL.SETTINGS.DELETEUSER;
        this.SEREVER_URL_SEARCH_USERS = this.appendpoint + _app_constant__WEBPACK_IMPORTED_MODULE_5__["AppConstant"].API_CONFIG.API_URL.SETTINGS.GETUSERSEARCH;
        this.SERVER_URL_INSERT_UPDATE_MEMBER = this.appendpoint + _app_constant__WEBPACK_IMPORTED_MODULE_5__["AppConstant"].API_CONFIG.API_URL.MEMBERS.INSERTUPDATEMEMBER;
        this.SERVER_URL_ORG_ADD = this.appendpoint + _app_constant__WEBPACK_IMPORTED_MODULE_5__["AppConstant"].API_CONFIG.API_URL.SETTINGS.INSERTORGANIZATION;
    }
    AppservicesService.prototype.getDesignations = function () {
        return this.http.get(this.SERVER_URL_GET_DESG);
    };
    AppservicesService.prototype.addDesignation = function (f) {
        console.log(f);
        console.log(JSON.stringify(f));
        var body = JSON.stringify(f);
        var head = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.http.post(this.SERVER_URL_INSERT_UPDATE_DESG, body, {
            headers: head
        });
    };
    AppservicesService.prototype.editDesignation = function (item) {
        console.log(item);
        return this.commonHttpService.globalPostService(this.SERVER_URL_INSERT_UPDATE_DESG, item).then(function (data) {
            return data;
        });
    };
    AppservicesService.prototype.deleteDesignation = function (designationID) {
        var head = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        console.log('how it is getting ID?:' + designationID);
        return this.http.post(this.SERVER_URL_DESG_DEL + designationID, {
            headers: head
        });
    };
    AppservicesService.prototype.getUsers = function () {
        return this.http.get(this.SERVER_URL_GET_USER);
    };
    AppservicesService.prototype.getUserBySearch = function (searchTerm) {
        return this.http.get(this.SEREVER_URL_SEARCH_USERS + searchTerm);
    };
    AppservicesService.prototype.getUserPage = function (page) {
        return this.http.get(this.SERVER_URL_GET_USER_BY_PAGE + page);
    };
    AppservicesService.prototype.insertUpdateMember = function (memberData) {
        var body = JSON.stringify(memberData);
        var head = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.http.post(this.SERVER_URL_INSERT_UPDATE_MEMBER, body, { headers: head });
    };
    AppservicesService.prototype.uploadAndProgress = function (files) {
        var _this = this;
        var formData = new FormData();
        Array.from(files).forEach(function (f) { return formData.append('file', f); });
        this.http.post('https://file.io', formData, { reportProgress: true, observe: 'events' })
            .subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
                _this.percentDone = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                _this.uploadSuccess = true;
            }
        });
    };
    AppservicesService.prototype.DeleteUser = function (id) {
        var head = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json");
        return this.http.post(this.SEREVER_URL_DELETE_USER + id, { headers: head });
    };
    // ------------- Dashboard -------------
    AppservicesService.prototype.getMember = function () {
        console.log(this.http.get(this.SERVER_URL_GET_MEM));
        return this.http.get(this.SERVER_URL_GET_MEM);
    };
    // documents
    AppservicesService.prototype.getAllDocuments = function () {
        return this.http.get(this.SERVER_URL_GET_DOC);
    };
    AppservicesService.prototype.addDocuments = function (f) {
        console.log(f);
        console.log(JSON.stringify(f));
        var body = JSON.stringify(f);
        var head = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.http.post(this.SERVER_URL_INSERT_ADD_DOC, body, {
            headers: head
        });
    };
    AppservicesService.prototype.deleteDocument = function (documentID) {
        var head = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        console.log('how it is getting ID?:' + documentID);
        return this.http.post(this.SERVER_URL_DEL_DOC + documentID, {
            headers: head
        });
    };
    AppservicesService.prototype.editDocument = function (item) {
        console.log(item);
        return this.commonHttpService.globalPostService(this.SERVER_URL_INSERT_ADD_DOC, item).then(function (data) {
            return data;
        });
    };
    // department
    AppservicesService.prototype.getDepartment = function () {
        return this.http.get(this.SERVER_URL_GET_DEPT);
    };
    AppservicesService.prototype.addDepartment = function (f) {
        console.log(JSON.stringify(f));
        var body = JSON.stringify(f);
        var head = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.http.post(this.SERVER_URL_INSERT_ADD_DEPT, body, { headers: head });
    };
    AppservicesService.prototype.editDepartment = function (item) {
        console.log(item);
        return this.commonHttpService.globalPostService(this.SERVER_URL_INSERT_ADD_DEPT, item).then(function (data) {
            return data;
        });
    };
    AppservicesService.prototype.deleteDepartment = function (departmentID) {
        var head = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        console.log('id deleted!!:' + departmentID);
        return this.http.post(this.SERVER_URL_DEPT_DEL + departmentID, { headers: head });
    };
    //
    // organisation
    AppservicesService.prototype.getOrganization = function () {
        return this.http.get(this.SERVER_URL_ORG);
    };
    AppservicesService.prototype.addOrganization = function (f) {
        console.log(f);
        console.log(JSON.stringify(f));
        var body = JSON.stringify(f);
        var head = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.http.post(this.SERVER_URL_ORG_ADD, body, { headers: head });
    };
    AppservicesService.prototype.editOrganization = function (item) {
        console.log(item);
        return this.commonHttpService.globalPostService(this.SERVER_URL_ORG_ADD, item).then(function (data) {
            return data;
        });
    };
    // location
    AppservicesService.prototype.getLocations = function () {
        return this.http.get(this.SERVER_URL_GET_LOC);
    };
    AppservicesService.prototype.addEditLocations = function (item) {
        console.log(JSON.stringify(item));
        var body = JSON.stringify(item);
        var head = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json");
        return this.http.post(this.SERVER_URL_INSERT_ADD_LOC, body, { headers: head });
    };
    // public editLocations(item: any): Promise<any> {
    //   console.log(item);
    //   return this.commonHttpService.globalPostService(this.SERVER_URL_INSERT_ADD_LOC, item).then(data => {
    //     console.log(item);
    //     // return data;
    //   });
    // }
    AppservicesService.prototype.deleteLocations = function (LocationId) {
        var head = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        console.log('how it is getting ID?:' + LocationId);
        return this.http.post(this.SERVER_URL_DEL_LOC + LocationId, { headers: head });
    };
    AppservicesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_common_http_service__WEBPACK_IMPORTED_MODULE_3__["CommonHttpService"] }
    ]; };
    AppservicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_common_http_service__WEBPACK_IMPORTED_MODULE_3__["CommonHttpService"]])
    ], AppservicesService);
    return AppservicesService;
}());



/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-module~typography-settings-module.js.map