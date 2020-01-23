(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["typography-settings-module"],{

/***/ "./node_modules/primeng/autocomplete.js":
/*!**********************************************!*\
  !*** ./node_modules/primeng/autocomplete.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/autocomplete/autocomplete */ "./node_modules/primeng/components/autocomplete/autocomplete.js"));

/***/ }),

/***/ "./node_modules/primeng/progressbar.js":
/*!*********************************************!*\
  !*** ./node_modules/primeng/progressbar.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/progressbar/progressbar */ "./node_modules/primeng/components/progressbar/progressbar.js"));

/***/ }),

/***/ "./node_modules/primeng/sidebar.js":
/*!*****************************************!*\
  !*** ./node_modules/primeng/sidebar.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/sidebar/sidebar */ "./node_modules/primeng/components/sidebar/sidebar.js"));

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/page-header/page-header.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/page-header/page-header.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-xl-12\">\r\n      <h2 class=\"page-header\">\r\n          {{heading}}\r\n      </h2>\r\n      <ol class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item\">\r\n              <i class=\"fa fa-dashboard\"></i> <a href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n          </li>\r\n          <li class=\"breadcrumb-item active\"><i class=\"fa {{icon}}\"></i> {{heading}}</li>\r\n      </ol>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/typography/department/department.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/typography/department/department.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-4\"><i style=\"margin:3px 3px 0 0\"></i>\r\n          <input\r\n            class=\"form-control\"\r\n            type=\"text\"\r\n            pInputText\r\n            placeholder=\"Search by name \"\r\n            (input)=\"search.filterGlobal($event.target.value, 'contains')\"\r\n          /></div>\r\n          <div class=\"ui-g-4\" style=\"padding-top: 25px;float:right !important\"></div>\r\n        <div class=\"ui-g-4\" style=\"padding-top: 25px;float:right !important\">\r\n          <span style=\"float: right;overflow: hidden;text-overflow: ellipsis;\">\r\n          <button\r\n            type=\"button\"\r\n            (click)=\"showDialog('add')\"\r\n            pButton\r\n            label=\"Add Department\"\r\n          ></button\r\n        >\r\n      </span>\r\n      </div>\r\n    </div>\r\n<p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n     <p-table #search [value]=\"arrDept\" [paginator]=\"true\" [rows]=\"25\" [globalFilterFields]=\"['name']\" [responsive]=\"true\" [scrollable]=\"true\" scrollHeight=\"680px\">\r\n    <!-- <ng-template pTemplate=\"caption\">\r\n      <div style=\"text-align: left; padding-top: 20px;\">\r\n         <i style=\"margin:3px 3px 0 0\"></i>\r\n          <input\r\n              type=\"text\"\r\n              pInputText\r\n              size=\"10\"\r\n              placeholder=\"Search by name \"\r\n              (input)=\"search.filterGlobal($event.target.value, 'contains')\"\r\n              style=\"width:20%;\"/>\r\n              <span style=\"float: right\"><button  type=\"button\" (click)=\"showDialog('add')\" pButton  label=\"Add Department\"></button></span>\r\n            </div>\r\n       </ng-template> -->\r\n    <ng-template pTemplate=\"header\">\r\n      <tr class=\"my-center-text\">\r\n        <th>Name</th>\r\n        <th>Description</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-dept>\r\n      <tr >\r\n          <td ><span class=\"ui-column-title\">Name</span>{{dept.name}}</td>\r\n          <td><span class=\"ui-column-title\">Description</span>{{dept.description}}</td>\r\n          <td class=\"iconaligncenter\">\r\n              <span class=\"ui-column-title\">Actions</span>\r\n           <a> <i  class=\"pi pi-user-edit\" style=\"cursor: pointer;\" (click)=\"openEdit('edit',dept)\"></i> </a>\r\n            <a><i  class=\"pi pi-trash\" style=\"cursor: pointer;\" (click)=\"confirmDelete(dept.id)\"></i></a>\r\n          </td>\r\n      </tr>\r\n   </ng-template>\r\n</p-table>\r\n\r\n<p-dialog header=\"Add/Edit Department\" [(visible)]=\"display\"  modal =false; [responsive]=\"true\" >\r\n  <div class=\"modal-body\">\r\n    <form [formGroup]=\"deptForm\" (ngSubmit)='onFormSubmit(deptForm)' >\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"row\">\r\n          <div class=\"ui-md-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Name</label>\r\n              <div class=\"\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  formControlName=\"name\"\r\n                  placeholder=\"Name\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-md-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"description\">Description</label>\r\n              <div class=\"\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  formControlName=\"description\"\r\n                  placeholder=\"description\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"ui-md-6\">\r\n              <div class=\"form-group\">\r\n            <button\r\n              type=\"submit\"\r\n              class=\"btn btn-outline-dark float\"\r\n            >\r\n              {{ selectedDepartmentOption }}\r\n            </button>\r\n          </div>\r\n        </div>\r\n        </div>\r\n      </div>\r\n         </form>\r\n  </div>\r\n</p-dialog>\r\n<p-confirmDialog [style]=\"{width:'50vw'}\"></p-confirmDialog >\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/typography/designation/designation.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/typography/designation/designation.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"ui-g\">\r\n      <div class=\"ui-g-4\"><i style=\"margin:3px 3px 0 0\"></i>\r\n        <input\r\n          class=\"form-control\"\r\n          type=\"text\"\r\n          pInputText\r\n          placeholder=\"Search by name \"\r\n          (input)=\"search.filterGlobal($event.target.value, 'contains')\"\r\n        /></div>\r\n        <div class=\"ui-g-4\" style=\"padding-top: 25px;float:right !important\"></div>\r\n      <div class=\"ui-g-4\" style=\"padding-top: 25px;float:right !important\">\r\n        <span style=\"float: right;overflow: hidden;text-overflow: ellipsis;\">\r\n        <button\r\n          type=\"button\"\r\n          (click)=\"showDialog('Add')\"\r\n          pButton\r\n          label=\"Add Designation\"\r\n        ></button\r\n      >\r\n    </span>\r\n    </div>\r\n  </div>\r\n\r\n  <p-table\r\n    #search\r\n    [value]=\"arrDesig\"\r\n    [paginator]=\"true\"\r\n    [rows]=\"25\"\r\n    [responsive]=\"true\"\r\n    [scrollable]=\"true\"\r\n    scrollHeight=\"680px\"\r\n    [globalFilterFields]=\"['name']\">\r\n    <ng-template pTemplate=\"header\" let-columns>\r\n      <tr class=\"my-center-text\">\r\n        <th>Name</th>\r\n        <th>Description</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-desg>\r\n      <tr>\r\n        <td><span class=\"ui-column-title\">Name</span> {{ desg.name }}</td>\r\n        <td>\r\n          <span class=\"ui-column-title\">Description</span>\r\n          {{ desg.description }}\r\n        </td>\r\n        <td class=\"iconaligncenter\">\r\n          <span class=\"ui-column-title\">Actions</span>\r\n         <a><i\r\n            class=\"pi pi-user-edit\"\r\n            style=\"cursor: pointer;\"\r\n            (click)=\"showDialog('Edit', desg.id, desg)\"\r\n          ></i></a>|\r\n\r\n          <a><i\r\n            class=\"pi pi-trash\"\r\n            style=\"cursor: pointer;\"\r\n            class=\"fas fa-trash-alt\"\r\n            (click)=\"confirmDelete(desg.id)\"\r\n          ></i></a>\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n\r\n  <p-toast [style]=\"{ marginTop: '80px' }\"></p-toast>\r\n\r\n  <p-dialog\r\n    header=\"Add/Edit Designation\"\r\n    [(visible)]=\"display\"\r\n    [modal]=\"true\"\r\n    [responsive]=\"true\">\r\n    <div class=\"modal-body\">\r\n      <form (ngSubmit)=\"onFormSubmit(desgForm)\" [formGroup]=\"desgForm\">\r\n        <div class=\"ui-g-12\">\r\n          <div class=\"row\">\r\n            <div class=\"ui-md-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">Name</label>\r\n                <div class=\"\">\r\n                  <input\r\n                    class=\"form-control\"\r\n                    formControlName=\"name\"\r\n                    placeholder=\"Name\"/>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-md-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"description\">Description</label>\r\n                <div class=\"\">\r\n                  <input\r\n                    class=\"form-control\"\r\n                    formControlName=\"description\"\r\n                    placeholder=\"description\"/>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"ui-md-6\">\r\n              <div class=\"form-group\">\r\n                <button type=\"submit\" class=\"btn btn-outline-dark\">\r\n                  {{ selectedDesignationOption }}Designation\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </p-dialog>\r\n\r\n  <p-confirmDialog [style]=\"{ width: '50vw' }\"></p-confirmDialog>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/typography/document/document.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/typography/document/document.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n<!-- <div style=\"padding-left:10px;\"> -->\r\n    <div class=\"container-fluid\">\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-4\"><i style=\"margin:3px 3px 0 0\"></i>\r\n              <input\r\n                class=\"form-control\"\r\n                type=\"text\"\r\n                pInputText\r\n                placeholder=\"Search by name \"\r\n                (input)=\"search.filterGlobal($event.target.value, 'contains')\"/></div>\r\n              <div class=\"ui-g-4\" style=\"padding-top: 25px;float:right !important\"></div>\r\n            <div class=\"ui-g-4\" style=\"padding-top: 25px;float:right !important\">\r\n              <span style=\"float: right;overflow: hidden;text-overflow: ellipsis;\">\r\n              <button\r\n                type=\"button\"\r\n                (click)=\"OpenAddEdit('Add')\"\r\n                pButton\r\n                label=\"Add Document\"\r\n              ></button\r\n            >\r\n          </span>\r\n          </div>\r\n        </div>\r\n<p-table #search [value]=\"arrDoc\" [paginator]=\"true\" [rows]=\"25\"  [globalFilterFields]=\"['name','description']\" [responsive]=\"true\"  [scrollable]=\"true\" scrollHeight=\"680px\">\r\n\r\n        <!-- <ng-template pTemplate=\"caption\">\r\n        <div style=\"text-align: left; padding-top: 20px;\">\r\n          <input\r\n            type=\"text\"\r\n            pInputText\r\n            size=\"10\"\r\n            placeholder=\"Search here....\"\r\n            (input)=\"search.filterGlobal($event.target.value, 'contains')\"\r\n            style=\"width:20%;\"/>\r\n          <span style=\"float: right\"><button class=\"table table-striped table-sm table-responsive-sm table-hover\" type=\"button\" (click)=\"OpenAddEdit('Add')\" pButton label=\"Add DocumentType\"></button></span>\r\n        </div>\r\n        </ng-template> -->\r\n        <ng-template pTemplate=\"header\">\r\n          <tr class=\"my-center-text\">\r\n            <th>Document Name</th>\r\n            <th>Description</th>\r\n            <th id=\"text-align-right\">Actions</th>\r\n          </tr>\r\n        </ng-template>\r\n          <ng-template pTemplate=\"body\" let-rowData>\r\n              <tr>\r\n              <td><span class=\"ui-column-title\">Name</span>{{ rowData.name }}</td>\r\n              <td ><span class=\"ui-column-title\">Description</span>{{ rowData.description }}</td>\r\n              <td class=\"iconaligncenter\">\r\n                <span class=\"ui-column-title\">Actions</span>\r\n             <i class=\"fas fa-edit\" (click)=\"OpenAddEdit('Edit',rowData.id,rowData)\"></i>|\r\n             <i class=\"fas fa-trash-alt\"  (click)=\"confirmDelete(rowData.id)\"></i>\r\n             </td>\r\n            </tr>\r\n          </ng-template>\r\n      </p-table>\r\n  <p-dialog header=\"Add/Edit DocumentType\" [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\"  [baseZIndex]=\"10000\">\r\n  <div class=\"modal-body\">\r\n    <form [formGroup]=\"docForm\" (ngSubmit)='onFormSubmit(docForm)' >\r\n      <table>\r\n        <tr>\r\n          <td>\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Name</label>\r\n              <div class=\"\">\r\n                <input type=\"text\" id=\"name\" placeholder=\"Name\" class=\"form-control\" formControlName=\"name\">\r\n                </div>\r\n            </div>\r\n            </td>\r\n            <td>\r\n            <div class=\"form-group\">\r\n                <label for=\"description\">Description</label>\r\n                <div class=\"\">\r\n                <input  class=\"form-control\" formControlName=\"description\"  placeholder=\"description\">\r\n                </div>\r\n               </div>\r\n            </td>\r\n          </tr>\r\n      </table>\r\n      <div>\r\n        <button type=\"submit\" class=\"btn btn-outline-dark\"\r\n          >{{selectedDocumentOption}} </button>\r\n      </div>\r\n    </form>\r\n   </div>\r\n</p-dialog>\r\n<p-confirmDialog [style]=\"{ width: '50vw' }\"></p-confirmDialog>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/typography/location/location.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/typography/location/location.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"ui-g\">\r\n    <div class=\"ui-g-4\">\r\n      <i style=\"margin:3px 3px 0 0\"></i>\r\n      <input\r\n        class=\"form-control\"\r\n        type=\"text\"\r\n        pInputText\r\n        placeholder=\"Search by name \"\r\n        (input)=\"search.filterGlobal($event.target.value, 'contains')\"\r\n      />\r\n    </div>\r\n    <div class=\"ui-g-4\" style=\"padding-top: 25px;float:right !important\"></div>\r\n    <div class=\"ui-g-4\" style=\"padding-top: 25px;float:right !important\">\r\n      <span style=\"float: right;overflow: hidden;text-overflow: ellipsis;\">\r\n        <button\r\n          type=\"button\"\r\n          (click)=\"onAdd()\"\r\n          pButton\r\n          label=\"Add Location\"\r\n        ></button>\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <p-toast [style]=\"{ marginTop: '80px' }\"></p-toast>\r\n\r\n  <p-table\r\n    #search\r\n    [value]=\"arrayLocation\"\r\n    [paginator]=\"true\"\r\n    [rows]=\"10\"\r\n    [globalFilterFields]=\"['name']\"\r\n    [responsive]=\"true\"\r\n    [scrollable]=\"true\"\r\n    scrollHeight=\"680px\"\r\n  >\r\n    <ng-template pTemplate=\"header\">\r\n      <tr class=\"my-center-text\">\r\n        <th>Name</th>\r\n        <th>Description</th>\r\n        <th>Address1</th>\r\n        <th>Address2</th>\r\n        <th>City</th>\r\n        <th>State</th>\r\n        <th>Zip</th>\r\n        <th>Country</th>\r\n        <th>Phone1</th>\r\n        <th>Phone2</th>\r\n        <th>Fax</th>\r\n        <th>Website</th>\r\n        <th>Action</th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-item>\r\n      <tr>\r\n        <td><span class=\"ui-column-title\">Name</span>{{ item.name }}</td>\r\n        <td>\r\n          <span class=\"ui-column-title\">description</span>{{ item.description }}\r\n        </td>\r\n        <td>\r\n          <span class=\"ui-column-title\">address1</span>{{ item.address1 }}\r\n        </td>\r\n        <td>\r\n          <span class=\"ui-column-title\">address2</span>{{ item.address2 }}\r\n        </td>\r\n        <td><span class=\"ui-column-title\">city</span>{{ item.city }}</td>\r\n        <td><span class=\"ui-column-title\">state</span>{{ item.state }}</td>\r\n        <td><span class=\"ui-column-title\">zip</span>{{ item.zip }}</td>\r\n        <td><span class=\"ui-column-title\">country</span>{{ item.country }}</td>\r\n        <td><span class=\"ui-column-title\">phone1</span>{{ item.phone1 }}</td>\r\n        <td><span class=\"ui-column-title\">phone2</span>{{ item.phone2 }}</td>\r\n        <td><span class=\"ui-column-title\">fax</span>{{ item.fax }}</td>\r\n        <td><span class=\"ui-column-title\">website</span>{{ item.website }}</td>\r\n        <td class=\"iconaligncenter\">\r\n          <span class=\"ui-column-title\">Action</span>\r\n         <a><i\r\n            class=\"pi pi-user-edit\"\r\n            style=\"cursor: pointer;\"\r\n            (click)=\"openEdit(item)\"\r\n          ></i></a>\r\n\r\n        <a> <i\r\n            class=\"pi pi-trash\"\r\n            style=\"cursor: pointer;\"\r\n            (click)=\"confirmDelete(item.id)\"\r\n          ></i></a>\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n  <p-dialog\r\n    header=\"Add/Edit\"\r\n    [(visible)]=\"display\"\r\n    [(closeOnEscape)]=\"dialogClose\"\r\n    width=\"800\"\r\n    modal=\"false\"\r\n    position=\"center\"\r\n    (onHide)=\"close()\"\r\n  >\r\n    <form [formGroup]=\"addForm\" (ngSubmit)=\"onFormSubmit(addForm)\">\r\n      <table>\r\n        <tr>\r\n          <td>\r\n            <div class=\"form-group\">\r\n              <label>Name</label>\r\n              <input\r\n                id=\"location\"\r\n                class=\"form-control mandatory\"\r\n                placeholder=\"Name\"\r\n                formControlName=\"name\"\r\n              />\r\n            </div>\r\n          </td>\r\n          &nbsp; &nbsp;\r\n\r\n          <td>\r\n            <div class=\"form-group\">\r\n              <label>Description</label>\r\n              <input\r\n                id=\"description\"\r\n                class=\"form-control\"\r\n                formControlName=\"description\"\r\n                placeholder=\"Description\"\r\n              />\r\n            </div>\r\n          </td>\r\n          &nbsp; &nbsp;\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <div class=\"form-group\">\r\n              <label>Registered Address1</label>\r\n\r\n              <input\r\n                class=\"form-control mandatory\"\r\n                formControlName=\"address1\"\r\n                placeholder=\"Address1\"\r\n                name=\"address1\"\r\n              />\r\n            </div>\r\n          </td>\r\n          &nbsp; &nbsp;\r\n          <td>\r\n            <div class=\"form-group\">\r\n              <label>Registered Address2</label>\r\n\r\n              <input\r\n                class=\"form-control\"\r\n                formControlName=\"address2\"\r\n                placeholder=\"Address2\"\r\n                name=\"address2\"\r\n              />\r\n            </div>\r\n          </td>\r\n          &nbsp; &nbsp;\r\n          <td>\r\n            <div class=\"form-group\">\r\n              <label>City</label>\r\n\r\n              <input\r\n                class=\"form-control mandatory\"\r\n                formControlName=\"city\"\r\n                placeholder=\"City\"\r\n                name=\"city\"\r\n              />\r\n            </div>\r\n          </td>\r\n          &nbsp; &nbsp;\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <div class=\"form-group\">\r\n              <label>State</label>\r\n\r\n              <input\r\n                class=\"form-control\"\r\n                formControlName=\"state\"\r\n                placeholder=\"State\"\r\n                name=\"state\"\r\n              />\r\n            </div>\r\n          </td>\r\n          &nbsp; &nbsp;\r\n          <td>\r\n            <div class=\"form-group\">\r\n              <label>Zip Code</label>\r\n\r\n              <input\r\n                class=\"form-control mandatory\"\r\n                formControlName=\"zip\"\r\n                placeholder=\"Zip Code\"\r\n                name=\"zip\"\r\n              />\r\n            </div>\r\n          </td>\r\n          &nbsp; &nbsp;\r\n          <td>\r\n            <div class=\"form-group\">\r\n              <label>Country</label>\r\n\r\n              <input\r\n                class=\"form-control mandatory\"\r\n                formControlName=\"country\"\r\n                placeholder=\"Country\"\r\n                name=\"country\"\r\n              />\r\n            </div>\r\n          </td>\r\n          &nbsp; &nbsp;\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <div class=\"form-group\">\r\n              <label>Website</label>\r\n\r\n              <input\r\n                class=\"form-control\"\r\n                formControlName=\"website\"\r\n                placeholder=\"Website\"\r\n                name=\"website\"\r\n              />\r\n            </div>\r\n          </td>\r\n          &nbsp; &nbsp;\r\n          <td>\r\n            <div class=\"form-group\">\r\n              <label>Phone1</label>\r\n              <input\r\n                class=\"form-control\"\r\n                formControlName=\"phone1\"\r\n                placeholder=\"Phone1\"\r\n                name=\"phone1\"\r\n              />\r\n            </div>\r\n          </td>\r\n          &nbsp; &nbsp;\r\n          <td>\r\n            <div class=\"form-group\">\r\n              <label>Phone2</label>\r\n\r\n              <input\r\n                class=\"form-control\"\r\n                formControlName=\"phone2\"\r\n                placeholder=\"Phone2\"\r\n                name=\"phone2\"\r\n              />\r\n            </div>\r\n          </td>\r\n          &nbsp; &nbsp;\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <div class=\"form-group\">\r\n              <label>Fax</label>\r\n\r\n              <input\r\n                class=\"form-control mandatory\"\r\n                formControlName=\"fax\"\r\n                placeholder=\"Fax\"\r\n                name=\"fax\"\r\n              />\r\n            </div>\r\n          </td>\r\n          &nbsp; &nbsp;\r\n        </tr>\r\n      </table>\r\n\r\n      <p-footer>\r\n        <button type=\"submit\" class=\"btn btn-outline-dark\">\r\n          {{ selectedLocationOption }} Locations\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          pButton\r\n          icon=\"pi pi-close\"\r\n          (click)=\"display = false\"\r\n          label=\"No\"\r\n          class=\"ui-button-secondary\"\r\n        ></button>\r\n      </p-footer>\r\n    </form>\r\n  </p-dialog>\r\n  <p-confirmDialog [style]=\"{ width: '50vw' }\"></p-confirmDialog>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/typography/organization/organization.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/typography/organization/organization.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-typography></app-typography>\r\n<div style=\"padding-left: 24px; padding-right: 18px;margin-top: 16px;\">\r\n  <div *ngIf=\"!datanotfound\">\r\n    <p-table [value]=\"arrDept\" [rows]=\"19\" [responsive]=\"true\" class=\"stripped\">\r\n\r\n\r\n      <ng-template pTemplate=\"header\" pTemplate=\"body\" let-dept>\r\n        <tr>\r\n          <th><b>Manage Organization</b>\r\n          </th>\r\n          <th>\r\n          </th>\r\n          <th>\r\n          </th>\r\n          <th>\r\n       <span style=\"float: right\">\r\n              <button type=\"button\" (click)=\"openEdit()\" label=\"Add/Edit Organization\" class=\"btn btn-warning\">Add/Edit\r\n                Organization</button>\r\n            </span>\r\n          </th>\r\n        </tr>\r\n\r\n        <tr>\r\n          <th> <small class=\"formlabel\">Name</small> <br> {{dept.name}}</th>\r\n          <th> <small class=\"formlabel\">Description</small> <br> {{dept.description}}</th>\r\n          <th></th>\r\n          <th></th>\r\n        </tr>\r\n\r\n        <tr>\r\n          <th><small class=\"formlabel\">Registered Address 1 </small><br> {{dept.registeredaddress1}}</th>\r\n          <th><small class=\"formlabel\">Registered Address 2 </small><br> {{dept.registeredaddress2}}</th>\r\n          <th><small class=\"formlabel\">City</small> <br> {{dept.city}}</th>\r\n          <th><small class=\"formlabel\">State</small> <br> {{dept.state}}</th>\r\n        </tr>\r\n\r\n        <tr>\r\n          <th><small class=\"formlabel\">Zip</small> <br> {{dept.zip}}</th>\r\n          <th><small class=\"formlabel\">Country</small> <br> {{dept.country}}</th>\r\n          <th><small class=\"formlabel\">Phone1</small> <br> {{dept.phone1}}</th>\r\n          <th></th>\r\n        </tr>\r\n\r\n        <tr>\r\n          <th><small class=\"formlabel\">Phone2</small> <br>{{dept.phone2}}</th>\r\n          <th><small class=\"formlabel\">Website</small> <br>{{dept.website}}</th>\r\n          <th><small class=\"formlabel\">Fax</small> <br>{{dept.fax}}</th>\r\n          <th></th>\r\n        </tr>\r\n      </ng-template>\r\n\r\n    </p-table>\r\n\r\n    <p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n    <p-progressBar *ngIf=\"isProgress\" mode=\"indeterminate\"></p-progressBar>\r\n\r\n    <p-dialog header=\"Add/Edit Organization\" [(visible)]=\"display\" [resizable]=\"false\" [responsive]=\"true\"\r\n      [modal]=\"true\" [draggable]=\"false\" [baseZIndex]=\"10000\">\r\n      <div class=\"modal-body scrollit\">\r\n        <form [formGroup]=\"deptForm\" (ngSubmit)='onFormSubmit()'>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Organization Name</label>\r\n              <input class=\"form-control\" formControlName=\"name\" placeholder=\"Name\">\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Description</label>\r\n              <input class=\"form-control\" formControlName=\"description\" placeholder=\"Description\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-4\">\r\n              <label>Registered Address 1</label>\r\n              <input class=\"form-control\" formControlName=\"registeredaddress1\" placeholder=\"Registered Address 1\">\r\n            </div>\r\n            <div class=\"form-group col-md-4\">\r\n              <label>Registered Address 2</label>\r\n              <input class=\"form-control\" formControlName=\"registeredaddress2\" placeholder=\"Registered Address 2\">\r\n            </div>\r\n            <div class=\"form-group col-md-4\">\r\n              <label>City</label>\r\n              <input class=\"form-control\" formControlName=\"city\" placeholder=\"City\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-4\">\r\n              <label>State</label>\r\n              <input class=\"form-control\" formControlName=\"state\" placeholder=\"State\">\r\n            </div>\r\n            <div class=\"form-group col-md-4\">\r\n              <label>Zip Code</label>\r\n              <input class=\"form-control\" formControlName=\"zip\" placeholder=\"Zipcode\">\r\n            </div>\r\n            <div class=\"form-group col-md-4\">\r\n              <label>Country</label>\r\n              <input class=\"form-control\" formControlName=\"country\" placeholder=\"Country\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-4\">\r\n              <label>Website</label>\r\n              <input class=\"form-control\" formControlName=\"website\" placeholder=\"Website\">\r\n            </div>\r\n            <div class=\"form-group col-md-4\">\r\n              <label>phone 1</label>\r\n              <input class=\"form-control\" formControlName=\"phone1\" placeholder=\"Phone1\">\r\n            </div>\r\n            <div class=\"form-group col-md-4\">\r\n              <label>phone 2</label>\r\n              <input class=\"form-control\" formControlName=\"phone2\" placeholder=\"Phone2\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-4\">\r\n              <label>Fax</label>\r\n              <input class=\"form-control\" formControlName=\"fax\" placeholder=\"Fax\">\r\n            </div>\r\n            <div class=\"form-group col-md-4\">\r\n              <span\r\n                class=\"ng-star-inserted ui-button ui-fileupload-choose ui-widget ui-state-default ui-corner-all ui-button-text-icon-left btn-primary\"\r\n                style=\"margin-top:28px;\">\r\n\r\n                <span class=\"ui-button-text ui-clickable\">Upload Logo</span>\r\n              </span>\r\n              <input type=\"file\" accept=\"image/*\" class=\"ng-star-inserted\">\r\n              <img class=\"img-responsive profileImg ProfileImage\" src=\"assets/timeblockr-logo.png\"\r\n                style=\"width:35%; margin-left: -110px; margin-top: -85px;\">\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div >\r\n            <hr style=\"width: 100%;\">\r\n            <button type=\"submit\" class=\"btn btn-primary\" style='margin-left: 880px;'>submit</button>\r\n         \r\n\r\n          </div >\r\n        </form>\r\n      </div>\r\n    </p-dialog>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<ng-template #elseblock>\r\n  <div class=\"container\" >\r\n    <div class=\"row mt-5 ml-5\">\r\n      <div class=\"col-8 mt-5 ml-5\">\r\n        <div class=\"mt-5 ml-5\">\r\n          <div class=\"mt-5\">\r\n            <h1 class=\"mt-5 ml-5\">\r\n              <i class=\"fa fa-exclamation-triangle text-warning\"></i>\r\n              <b class=\"text-warning\">No Records Found</b>\r\n            </h1>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/typography/timesheet/timesheet.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/typography/timesheet/timesheet.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<!-- sidebar 1 start -->\r\n\r\n<button (click)=\"openTab()\" pButton icon=\"pi pi-plus\" label=\"Open/Close\"></button>\r\n<p-sidebar class=\"menuPanel\" [(visible)]=\"opened\" position=\"right\" [showCloseIcon]=\"true\" autoZIndex=\"true\" baseZIndex=\"99999\">\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-sm-6\">\r\n            <h2 style=\"text-align: center; color: rgb(250, 14, 14);\">Projects & Chats</h2>\r\n            <p-tabView>\r\n\r\n                <p-tabPanel header=\"Projects & Channels\" *ngIf=\"showTabs && showTabs['three']\">\r\n                    <div class=\"container\" style=\"background-color: turquoise; color: black;\">\r\n                        <label >Janet Smith</label>\r\n                      </div>\r\n\r\n                      <div class=\"container\">\r\n                          <label>Janet Smith</label>\r\n                        </div>\r\n\r\n                        <div class=\"container\" style=\"background-color: turquoise; color: black;\">\r\n                            <label>Janet Smith</label>\r\n                          </div>\r\n\r\n                          <div class=\"container\" style=\"background-color: turquoise; color: black;\">\r\n                              <label>Janet Smith</label>\r\n                            </div>\r\n\r\n                            <div class=\"container\">\r\n                                <label>Janet Smith</label>\r\n                              </div>\r\n\r\n                              <div class=\"container\">\r\n                                  <label>Janet Smith</label>\r\n                                </div>\r\n                  </p-tabPanel>\r\n\r\n                <p-tabPanel header=\"Chats\" *ngIf=\"showTabs && showTabs['one']\">\r\n                    <div class=\"chat-users\" style=\"padding-left: 35px;height:100%;\">\r\n\r\n                        <div class=\"users-list\">\r\n\r\n                            <div class=\"container\">\r\n                                <img src=\"https://www.w3schools.com/w3images/bandmember.jpg\" alt=\"Avatar\" style=\"width:100%;\">\r\n                                <label>Janet Smith</label>\r\n                              </div>\r\n\r\n                              <div class=\"container\">\r\n                                  <img src=\"https://www.w3schools.com/w3images/bandmember.jpg\" alt=\"Avatar\" style=\"width:100%;\">\r\n                                  <label>Janet Smith</label>\r\n                                </div>\r\n\r\n                                <div class=\"container\">\r\n                                    <img src=\"https://www.w3schools.com/w3images/bandmember.jpg\" alt=\"Avatar\" style=\"width:100%;\">\r\n                                    <label>Janet Smith</label>\r\n                                  </div>\r\n\r\n                            <div class=\"container\">\r\n                                <img src=\"https://www.w3schools.com/w3images/bandmember.jpg\" alt=\"Avatar\" style=\"width:100%;\">\r\n                                <label>Janet Smith</label>\r\n                              </div>\r\n\r\n                            <div class=\"container\">\r\n                                <img src=\"https://www.w3schools.com/w3images/bandmember.jpg\" alt=\"Avatar\" style=\"width:100%;\">\r\n                                <label>Janet Smith</label>\r\n                              </div>\r\n                        </div>\r\n                    </div>\r\n                </p-tabPanel>\r\n              </p-tabView>\r\n              </div>\r\n\r\n\r\n        <div class=\"col-sm-6\">\r\n    <h2 style=\"text-align: center; color: rgb(250, 14, 14);\">Chat Messages</h2>\r\n    <div class=\"container\">\r\n        <img src=\"https://www.w3schools.com/w3images/bandmember.jpg\" alt=\"Avatar\" style=\"width:100%;\">\r\n        <p>Hello. How are you today?</p>\r\n        <span class=\"time-right\">11:00</span>\r\n      </div>\r\n\r\n      <div class=\"container darker\">\r\n        <img src=\"https://www.w3schools.com/w3images/bandmember.jpg\" alt=\"Avatar\" class=\"right\" style=\"width:100%;\">\r\n        <p>Hey! I'm fine. Thanks for asking!</p>\r\n        <span class=\"time-left\">11:01</span>\r\n      </div>\r\n\r\n      <div class=\"container\">\r\n        <img src=\"https://www.w3schools.com/w3images/bandmember.jpg\" alt=\"Avatar\" style=\"width:100%;\">\r\n        <p>Sweet! So, what do you wanna do today?</p>\r\n        <span class=\"time-right\">11:02</span>\r\n      </div>\r\n\r\n      <div class=\"container darker\">\r\n        <img src=\"https://www.w3schools.com/w3images/bandmember.jpg\" alt=\"Avatar\" class=\"right\" style=\"width:100%;\">\r\n        <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>\r\n        <span class=\"time-left\">11:03</span>\r\n      </div>\r\n\r\n      <div class=\"container\">\r\n        <img src=\"https://www.w3schools.com/w3images/bandmember.jpg\" alt=\"Avatar\" style=\"width:100%;\">\r\n        <p>Sweet! So, what do you wanna do today?</p>\r\n        <span class=\"time-right\">11:04</span>\r\n      </div>\r\n\r\n      <div class=\"container darker\">\r\n        <img src=\"https://www.w3schools.com/w3images/bandmember.jpg\" alt=\"Avatar\" class=\"right\" style=\"width:100%;\">\r\n        <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>\r\n        <span class=\"time-left\">11:05</span>\r\n      </div>\r\n\r\n      <div class=\"container\">\r\n        <img src=\"https://www.w3schools.com/w3images/bandmember.jpg\" alt=\"Avatar\" style=\"width:100%;\">\r\n        <p>Sweet! So, what do you wanna do today?</p>\r\n        <span class=\"time-right\">11:06</span>\r\n      </div>\r\n\r\n      <div style=\"width: 95%;border: 1px solid #c2c4c7;background-color: #c3c3c3;\">\r\n        <input placeholder=\"message\" type=\"text\" style=\"width: 90%;height: 41px;border: 1px solid #c2c4c7;\">\r\n        <a href=\"#\"><i class=\"now-ui-icons ui-1_send\"></i> </a>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n          </div>\r\n    </p-sidebar>\r\n<!-- </p-sidebar> -->\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/typography/typography.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/typography/typography.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"panel-header panel-header-sm\">\r\n</div> -->\r\n\r\n<ul class=\"nav justify-content-end items\">\r\n\r\n\r\n  <!-- <div ngbDropdown>\r\n    <button type=\"button\" class=\"btn btn-default dropdown-toggle\" ngbDropdownToggle>\r\n      <i class=\"far fa-file-word\"></i>Manage Organization & Users\r\n    </button>\r\n    <div ngbDropdownMenu class=\"dropdown-menu-right\">\r\n      <a class='dropdown-item' [routerLink]=\"['/typography/organization']\">Organizations</a>\r\n      <a class='dropdown-item' [routerLink]=\"['/typography/location']\">Locations</a>\r\n      <a class='dropdown-item' [routerLink]=\"['/typography/department']\">Department</a>\r\n      <a class='dropdown-item' [routerLink]=\"['/typography/user']\">Users</a>\r\n      <a class='dropdown-item' [routerLink]=\"['/typography/document']\">Document Type</a>\r\n      <a class='dropdown-item' [routerLink]=\"['/typography/designation']\">Designations</a>\r\n    </div>\r\n  </div> -->\r\n\r\n\r\n    <!-- <li class=\"nav-item\">\r\n      <a class=\"nav-link dropdata\" href=\"#\"><i class=\"fa fa-plus\"></i>Create Project</a>\r\n    </li>\r\n\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link dropdata\" [routerLink]=\"['/typography/timesheet']\" href=\"#\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>Time Sheets</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link dropdata\" href=\"#\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i>Edit Projects</a>\r\n    </li> -->\r\n</ul>\r\n<div class=\"main-container container-fluid\">\r\n  <div class=\"pannel zoomIn\"></div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/typography/users/users.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/typography/users/users.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n<div class=\"container-fluid\" *ngIf=\"!noRecord\">\r\n  <div class=\"\">\r\n    <div class=\"\">\r\n      <div class=\"navbar navbar-light bg-light\">\r\n        <form class=\"form-inline\" (ngSubmit)='onClickSearch(searchTerm.value)'>\r\n          <input class=\"form-control pl-5 mr-sm-2\" type=\"search\" placeholder=\"Search Members\" aria-label=\"Search\"\r\n            #searchTerm>\r\n        </form>\r\n        <button class=\"btn btn-md btn-info text-white\" (click)=\"openAdd()\">\r\n          Add Member\r\n        </button>\r\n      </div>\r\n      <p-table [value]=\"arrUser\" [rows]=itemsPerPage [responsive]=\"true\" [scrollable]='true' scrollHeight=\"680px\">\r\n        <ng-template pTemplate=\"header\">\r\n          <tr>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Display Name</th>\r\n            <th>Gender</th>\r\n            <th>DOB</th>\r\n            <th>Address</th>\r\n            <th>City</th>\r\n            <th>State</th>\r\n            <th>Email</th>\r\n            <th>Supervisor</th>\r\n            <th>Actions</th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-item>\r\n          <tr>\r\n            <td><span class=\"ui-column-title\">First Name</span>{{ item.firstName }}</td>\r\n            <td><span class=\"ui-column-title\">Last Name</span>{{ item.lastName }}</td>\r\n            <td><span class=\"ui-column-title\">Display Name</span>{{ item.displayName }}</td>\r\n            <td><span class=\"ui-column-title\">Gender</span>{{ item.gender }}</td>\r\n            <td><span class=\"ui-column-title\">DOB</span>{{ item.dob }}</td>\r\n            <td><span class=\"ui-column-title\">Address</span>{{ item.address }}</td>\r\n            <td><span class=\"ui-column-title\">City</span>{{ item.city }}</td>\r\n            <td><span class=\"ui-column-title\">State</span>{{ item.state }}</td>\r\n            <td><span class=\"ui-column-title\">Email</span>{{ item.email }}</td>\r\n            <td><span class=\"ui-column-title\">Supervisor</span>{{ item.supervisor }}</td>\r\n            <td>\r\n              <!-- <a class=\"btn btn-sm btn-primary\" (click)=\"openEdit(item)\"><i class=\"fas fa-edit\"></i></a> -->\r\n              <i class=\"btn btn-sm btn-default fas fa-edit\" (click)=\"openEdit(item)\"></i>\r\n              <i class=\"btn btn-sm btn-danger fas fa-trash-alt\" (click)=\"confirmDelete(item.memberId)\"></i>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"emptymessage\" let-item>\r\n          <tr>\r\n            <td [attr.colspan]=\"item?.length\">\r\n               No records found\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </p-table>\r\n      <p-paginator [rows]=\"itemsPerPage\" [totalRecords]=totalRecords [pageLinkSize]=totalPages\r\n        (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n\r\n    <p-dialog header=\"Add / Edit Member\" [(visible)]=\"display\" [modal]=\"true\" [draggable]=\"false\" [responsive]=\"true\"\r\n      [style]=\"{width:'50%'}\" [minY]=\"70\"\r\n      [maximizable]=\"true\" [baseZIndex]=\"10000\" [(closeOnEscape)]=\"dialogClose\">\r\n      <p-tabView>\r\n        <p-tabPanel header=\"Profile\" leftIcon=\"pi pi-id-card\">\r\n          <div class=\"container tab-content\">\r\n            <div class=\"tab-pane show active\" id=\"nav-home\" role=\"tabpanel\" aria-labelledby=\"nav-home-tab\">\r\n              <form [formGroup]=\"personalInfo\" (ngSubmit)='onSavePersonal()'>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-md-6\" style=\"border-right: 6px solid #474141;\">\r\n                    <h4>Personal Info</h4>\r\n                    <hr />\r\n                    <div class=\"form-group\">\r\n                      <label for=\"name\">First Name<span style=\"color:red\">*</span></label>\r\n                      <div class=\"col-sm-10\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" placeholder=\"First Name\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label for=\"name\">Middle Name</label>\r\n                      <div class=\"col-sm-10\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"middleName\"\r\n                          placeholder=\"Middle Name\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label for=\"name\">Last Name<span style=\"color: red;\">*</span></label>\r\n                      <div class=\"col-sm-10\">\r\n                        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" placeholder=\"Last Name\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label for=\"name\">Email<span style=\"color: red;\">*</span></label>\r\n                      <div class=\"col-sm-10\">\r\n                        <input type=\"text\" formControlName=\"email\" class=\"form-control\" placeholder=\"Email\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"name\">Gender<span style=\"color: red;\">*</span></label>\r\n                      <div class=\"col-sm-10\">\r\n                        <label class=\"radio-inline\" for=\"defaultInline1\">\r\n                          <input type=\"radio\" formControlName=\"gender\" value=\"M\" />\r\n                          Male</label>\r\n                        <label class=\"radio-inline\" for=\"defaultInline2\">\r\n                          <input type=\"radio\" formControlName=\"gender\" value=\"F\" />\r\n                          Female</label>\r\n                        <label class=\"radio-inline\" for=\"defaultInline3\">\r\n                          <input type=\"radio\" formControlName=\"gender\" value=\"O\" />\r\n                          Other</label>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label for=\"name\">Date Of Birth<span style=\"color: red;\">*</span></label>\r\n                      <div class=\"col-sm-10\">\r\n                        <input type=\"date\" formControlName=\"dob\" class=\"form-control\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label for=\"name\">Marital Status</label>\r\n                      <div class=\"col-sm-9\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Marital Status\"\r\n                          formControlName=\"maritalStatus\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label for=\"name\">Race</label>\r\n                      <div class=\"col-sm-9\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"race\" placeholder=\"Race\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label for=\"name\">Ethnicity</label>\r\n                      <div class=\"col-sm-9\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"ethnicity\" placeholder=\"Ethnicity\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label for=\"name\">Religion</label>\r\n                      <div class=\"col-sm-9\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"religion\" placeholder=\"Religion\" />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group col-md-6\">\r\n                    <h4>Contact Info</h4>\r\n                    <hr />\r\n                    <div class=\"form-group\">\r\n                      <label for=\"name\">Address</label>\r\n                      <div class=\"col-sm-10\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"address\" placeholder=\"Address\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label for=\"name\">Address2</label>\r\n                      <div class=\"col-sm-10\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"address2\" placeholder=\"Address2\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"name\">City</label>\r\n                      <div class=\"col-sm-10\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"city\" placeholder=\"City\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"name\">State</label>\r\n                      <div class=\"col-sm-10\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"state\" placeholder=\"State\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"name\">Postal Code</label>\r\n                      <div class=\"col-sm-9\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"zipCode\" placeholder=\"Postal Code\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"name\">Cell</label>\r\n                      <div class=\"col-sm-9\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"cell\" placeholder=\"Cell\" />\r\n                      </div>\r\n                    </div>\r\n                    <label for=\"name\" class=\"control-label\">Work Phone</label>\r\n                    <div class=\"form-group row\">\r\n                      <div class=\"col-sm-6\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"workPhone\" placeholder=\"Work Phone\" />\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"workPhoneExt\" placeholder=\"Ext\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"name\">Country</label>\r\n                      <div class=\"col-sm-9\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"country\" placeholder=\"Country\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"name\">SSN/Govt.ID</label>\r\n                      <div class=\"col-sm-9\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"ssn\" placeholder=\"SSN / Govt.ID\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"name\">Language</label>\r\n                      <div class=\"col-sm-9\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"language\" placeholder=\"Language\" />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <button type=\"submit\" class=\"btn btn-success pull-right\" style='margin-left: 318px;'>Save Personal\r\n                      Info</button>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Work Info\" leftIcon=\"pi pi-info\" [disabled]='personalInfo.invalid'>\r\n          <div class=\"container tab-content\">\r\n            <form [formGroup]=\"workInfo\" (ngSubmit)='onSaveWork()'>\r\n              <div class=\"tab-pane show active\" id=\"nav-profile\" role=\"tabpanel\" aria-labelledby=\"nav-profile-tab\">\r\n                <h4>Work Info</h4>\r\n                <hr />\r\n                <div class=\"form-group\">\r\n                  <label for=\"name\">Organization</label>\r\n                  <div class=\"col-sm-10\">\r\n                    <select class=\"custom-select\" data-val=\"true\"\r\n                      data-val-number=\"The field OrganizationId must be a number.\" id=\"ddlMemOrg\"\r\n                      formControlName=\"orgId\">\r\n                      <option [value]=\"\">Select</option>\r\n                      <!-- <option  *ngFor=\"let item of organization\" [value]=\"item.orgId\">{{item.name}}</option> -->\r\n                      <option ngf [value]=\"\">Skycliff IT Pvt. Ltd.</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"name\">Location</label>\r\n                  <div class=\"col-sm-10\">\r\n                    <select class=\"custom-select\" data-val=\"true\"\r\n                      data-val-number=\"The field LocationId must be a number.\" id=\"ddlMemLocation\"\r\n                      formControlName=\"locationName\">\r\n                      <option value=\"\">Select</option>\r\n                      <!-- <option  *ngFor=\"let item of location\" [value]=\"item.id\">{{item.name}}</option> -->\r\n                      <option value=\"1\">Bangalore</option>\r\n                      <option value=\"2\">Hubli-Dharwad</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"name\">Department</label>\r\n                  <div class=\"col-sm-10\">\r\n                    <select class=\"custom-select\" data-val=\"true\"\r\n                      data-val-number=\"The field DepartmentId must be a number.\" id=\"ddlMemDepartment\"\r\n                      formControlName=\"departmentName\">\r\n                      <option value=\"\">Select</option>\r\n                      <!-- <option  *ngFor=\"let item of department\" [value]=\"item.Id\">{{item.name}}</option> -->\r\n                      <option value=\"1\">Yourdrs - Web Development</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"name\">Designation</label>\r\n                  <div class=\"col-sm-10\">\r\n                    <select class=\"custom-select\" data-val=\"true\"\r\n                      data-val-number=\"The field DepartmentId must be a number.\" id=\"ddlMemDepartment\"\r\n                      formControlName=\"designation\">\r\n                      <option value=\"\">Select</option>\r\n                      <!-- <option  *ngFor=\"let item of designation\" [value]=\"item.id\">{{item.name}}</option> -->\r\n                      <option value=\"1\">Software Engineer</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"name\">Roles</label>\r\n                  <div class=\"col-sm-9\">\r\n                    <select class=\"custom-select\" data-val=\"true\"\r\n                      data-val-number=\"The field DepartmentId must be a number.\" id=\"ddlMemDepartment\"\r\n                      formControlName=\"roles\">\r\n                      <option value=\"\">Select</option>\r\n                      <option value=\"1\">Admin</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"name\">Date Of Joining</label>\r\n                  <div class=\"col-sm-9\">\r\n                    <input type=\"date\" class=\"form-control\" id=\"inputtext3\" placeholder=\"\" formControlName=\"doj\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"name\">Supervisor/Manager</label>\r\n                  <div class=\"col-sm-9\">\r\n                    <select class=\"custom-select\" data-val=\"true\"\r\n                      data-val-number=\"The field DepartmentId must be a number.\" id=\"ddlMemDepartment\"\r\n                      formControlName=\"supervisor\">\r\n                      <option value=\"\">Select</option>\r\n                      <option value=\"1\">Admin Manju</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <button type=\"submit\" class=\"btn btn-success pull-right\" [disabled]='workInfo.invalid'>Save Work\r\n                    Info</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Documents\" leftIcon=\"pi pi-upload\">\r\n          <div class=\"container tab-content\">\r\n            <form [formGroup]=\"document\" (ngSubmit)='saveUpload()'>\r\n              <div class=\"tab-pane show active\" id=\"nav-contact\" role=\"tabpanel\" aria-labelledby=\"nav-contact-tab\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"name\">Document Type</label>\r\n                  <div class=\"col-sm-10\">\r\n                    <select class=\"custom-select\" data-val=\"true\"\r\n                      data-val-number=\"The field DepartmentId must be a number.\" id=\"ddlMemDepartment\"\r\n                      formControlName=\"documentType\">\r\n                      <option value=\"\">Select</option>\r\n                      <option value=\"1\">Personal</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <div class=\"files border border-success text-center\">\r\n                    <i class=\"fas fa-cloud-upload-alt\" style=\"font-size: 70px; color: #36cb94; margin-top: 15px;\"></i>\r\n                    <h2 style=\"font-size: 18px; margin: 0px;\">Drop files here or click to upload.</h2>\r\n                    <input type=\"file\" class=\"form-control\" multiple=\"\" type=\"file\"\r\n                      (change)=\"onChange($event.target.files)\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <button type=\"submit\" class=\"btn btn-success pull-right\" [disabled]='workInfo.invalid'>Save Upload\r\n                    Documents</button>\r\n                </div>\r\n              </div>\r\n              <div class=\"container\">\r\n                {{uploadFile}}\r\n              </div>\r\n            </form>\r\n            <div>\r\n              <p-table [value]=\"fileList\" [rows]=itemsPerPage [responsive]=\"true\"\r\n                class=\"table table-striped table-sm table-responsive-sm table-hover\">\r\n                <ng-template pTemplate=\"header\">\r\n                  <tr class=\"\">\r\n                    <th>File Content</th>\r\n                    <th>Actions</th>\r\n                  </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"body\" let-item let-i=index>\r\n                  <tr>\r\n                    <td>{{item.name}}</td>\r\n                    <td class='col'>\r\n                      <a class=\"btn btn-sm btn-primary\" (click)=\"viewFile(item)\"><i class=\"fa fa-eye\"></i></a>|\r\n                      <a class=\"btn btn-sm btn-danger\" (click)=\"removeFile(item.id)\"><i\r\n                          class=\"fas fa-trash-alt\"></i></a>\r\n\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n\r\n            </div>\r\n          </div>\r\n        </p-tabPanel>\r\n      </p-tabView>\r\n    </p-dialog>\r\n  </div>\r\n</div>\r\n<p-confirmDialog [style]=\"{width: '50vw'}\"></p-confirmDialog>\r\n<ng-template #elseblock>\r\n  <div class=\"container\" >\r\n    <div class=\"row mt-5 ml-5\">\r\n      <div class=\"col-8 mt-5 ml-5\">\r\n        <div class=\"mt-5 ml-5\">\r\n          <div class=\"mt-5\">\r\n            <h1 class=\"mt-5 ml-5\">\r\n              <i class=\"fa fa-exclamation-triangle text-warning\"></i>\r\n              <b class=\"text-warning\">No Records Found</b>\r\n            </h1>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./src/app/Models/locations.ts":
/*!*************************************!*\
  !*** ./src/app/Models/locations.ts ***!
  \*************************************/
/*! exports provided: Locations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Locations", function() { return Locations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Locations = /** @class */ (function () {
    function Locations(id, 
    //public organizationId: number,
    name, description, address1, address2, city, state, zip, country, website, phone1, phone2, fax) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.country = country;
        this.website = website;
        this.phone1 = phone1;
        this.phone2 = phone2;
        this.fax = fax;
    }
    return Locations;
}());



/***/ }),

/***/ "./src/app/shared/modules/page-header/page-header.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/modules/page-header/page-header.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.component.ts ***!
  \*********************************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageHeaderComponent = /** @class */ (function () {
    function PageHeaderComponent() {
    }
    PageHeaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PageHeaderComponent.prototype, "heading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PageHeaderComponent.prototype, "icon", void 0);
    PageHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-header',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/page-header/page-header.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-header.component.scss */ "./src/app/shared/modules/page-header/page-header.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageHeaderComponent);
    return PageHeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModuleModule", function() { return SharedModuleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/page-header/page-header.component */ "./src/app/shared/modules/page-header/page-header.component.ts");




// bank


// import {  SimpleLineIconsComponent } from '../shared/components/icons/simple-line-icons.component';
var SharedModuleModule = /** @class */ (function () {
    function SharedModuleModule() {
    }
    SharedModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            ],
            declarations: [
                _modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_5__["PageHeaderComponent"]
            ],
            providers: [],
            exports: []
        })
    ], SharedModuleModule);
    return SharedModuleModule;
}());



/***/ }),

/***/ "./src/app/typography/department/department.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/typography/department/department.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R5cG9ncmFwaHkvZGVwYXJ0bWVudC9kZXBhcnRtZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/typography/department/department.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/typography/department/department.component.ts ***!
  \***************************************************************/
/*! exports provided: DepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentComponent", function() { return DepartmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_appservices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/appservices.service */ "./src/app/services/appservices.service.ts");
/* harmony import */ var _app_services_master_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app/services/master.service */ "./src/app/services/master.service.ts");








var DepartmentComponent = /** @class */ (function () {
    function DepartmentComponent(http, _data, messageService, confirmationService, masterService, fb) {
        this.http = http;
        this._data = _data;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.masterService = masterService;
        this.fb = fb;
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.arrDept = [];
        this.display = false;
        this.resizable = false;
        this.submitted = false;
    }
    DepartmentComponent.prototype.ngOnInit = function () {
        this.getDept();
        this.deptForm = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    };
    DepartmentComponent.prototype.getDept = function () {
        var _this = this;
        this._subscriptions.add(this._data.getDepartment().subscribe(function (data) {
            _this.arrDept = data;
        }));
    };
    DepartmentComponent.prototype.showDialog = function (value) {
        this.display = true;
        this.selectedDepartmentOption = value;
        this.deptForm.reset();
    };
    DepartmentComponent.prototype.openEdit = function (value, arrDept) {
        this.display = true;
        this.selectedDepartmentOption = value;
        this.deptForm.patchValue({
            id: arrDept.id,
            name: arrDept.name,
            description: arrDept.description
        });
    };
    DepartmentComponent.prototype.onDeptDelete = function (id) {
        var _this = this;
        this._subscriptions.add(this._data.deleteDepartment(id).subscribe(function (data) {
            _this.getDept();
            _this.display = false;
            setTimeout(function () {
                _this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Deleted Sucessfully' });
            }, 1000);
        }));
    };
    DepartmentComponent.prototype.onFormSubmit = function (f) {
        var _this = this;
        var test = this.masterService.getFormErrorMessage(f, this.deptForm);
        if (test !== undefined) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error Message',
                detail: test
            });
        }
        else {
            this.submitted = true;
            if (this.selectedDepartmentOption === 'add') {
                var req = {
                    id: 0,
                    description: f.value.description,
                    name: f.value.name
                };
                this._subscriptions.add(this._data.addDepartment(req).subscribe(function (data) {
                    _this.messageService.add({
                        severity: 'success',
                        summary: 'Success Message',
                        detail: 'Added Sucessfully'
                    });
                    _this.getDept();
                    _this.display = false;
                }));
            }
            else {
                var req_1 = {
                    id: f.value.id,
                    description: f.value.description,
                    name: f.value.name
                };
                this._data.editDepartment(req_1).then(function (res) {
                    if (res) {
                        _this.messageService.add({
                            severity: 'success',
                            summary: 'Success Message',
                            detail: 'Updated Sucessfully'
                        });
                        _this.getDept();
                        _this.display = false;
                    }
                    else {
                    }
                }, function (error) { });
            }
        }
    };
    DepartmentComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: function () {
                _this.onDeptDelete(id);
            },
            reject: function () {
            }
        });
    };
    DepartmentComponent.prototype.ngOnDestroy = function () {
        this._subscriptions.unsubscribe();
    };
    DepartmentComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _services_appservices_service__WEBPACK_IMPORTED_MODULE_6__["AppservicesService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"] },
        { type: _app_services_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    DepartmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-department',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./department.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/typography/department/department.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./department.component.scss */ "./src/app/typography/department/department.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _services_appservices_service__WEBPACK_IMPORTED_MODULE_6__["AppservicesService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"],
            _app_services_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], DepartmentComponent);
    return DepartmentComponent;
}());



/***/ }),

/***/ "./src/app/typography/designation/designation.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/typography/designation/designation.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R5cG9ncmFwaHkvZGVzaWduYXRpb24vZGVzaWduYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/typography/designation/designation.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/typography/designation/designation.component.ts ***!
  \*****************************************************************/
/*! exports provided: DesignationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignationComponent", function() { return DesignationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_appservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/appservices.service */ "./src/app/services/appservices.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_services_master_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app/services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var DesignationComponent = /** @class */ (function () {
    function DesignationComponent(http, _data, messageService, confirmationService, fb, masterService) {
        this.http = http;
        this._data = _data;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.fb = fb;
        this.masterService = masterService;
        this._subscritpions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.arrDesig = [];
        this.display = false;
        this.selectedDesign = {
            id: 0,
            name: '',
            description: ''
        };
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
    }
    DesignationComponent.prototype.ngOnInit = function () {
        this.getDesig();
        this.desgForm = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required)
        });
    };
    DesignationComponent.prototype.getDesig = function () {
        var _this = this;
        this._subscritpions.add(this._data.getDesignations().subscribe(function (data) {
            _this.arrDesig = data;
            console.log(_this.arrDesig);
        }));
    };
    DesignationComponent.prototype.showDialog = function (value, id, designation) {
        this.id = undefined;
        this.selectedDesignationOption = value;
        if (value === 'Add') {
            this.desgForm.setValue(this.selectedDesign);
        }
        else {
            this.desgForm.patchValue({
                id: designation.id,
                name: designation.name,
                description: designation.description
            });
        }
        this.display = true;
    };
    DesignationComponent.prototype.openEdit = function (arrDesig) {
        this.display = true;
        this.desgForm.patchValue({
            id: arrDesig.id,
            name: arrDesig.name,
            description: arrDesig.description
        });
    };
    DesignationComponent.prototype.onDesigDelete = function (id) {
        var _this = this;
        console.log(id);
        this._subscritpions.add(this._data.deleteDesignation(id).subscribe(function (data) {
            _this.messageService.add({
                severity: 'success',
                summary: 'Success Message',
                detail: 'Deleted Sucessfully'
            });
            _this.ngOnInit();
        }));
    };
    DesignationComponent.prototype.onFormSubmit = function (f) {
        var _this = this;
        var test = this.masterService.getFormErrorMessage(f, this.desgForm);
        if (test !== undefined) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error Message',
                detail: test
            });
        }
        else {
            if (this.selectedDesignationOption === 'Add') {
                console.log(f.value);
                var req = {
                    description: f.value.description,
                    name: f.value.name
                };
                this._subscritpions.add(this._data.addDesignation(req).subscribe(function (data) {
                    console.log(f.value);
                    _this.messageService.add({
                        severity: 'success',
                        summary: 'Success Message',
                        detail: 'Added Sucessfully'
                    });
                    _this.getDesig();
                    _this.display = false;
                }));
            }
            else {
                console.log(f.value);
                console.log(f.value.name);
                var req_1 = {
                    id: f.value.id,
                    description: f.value.description,
                    name: f.value.name
                };
                console.log(req_1);
                this._data.editDesignation(req_1).then(function (res) {
                    if (res) {
                        _this.messageService.add({
                            severity: 'success',
                            summary: 'Success Message',
                            detail: 'Updated Sucessfully'
                        });
                        _this.getDesig();
                        _this.display = false;
                    }
                    else {
                    }
                }, function (error) { });
            }
        }
    };
    DesignationComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        console.log(id);
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: function () {
                _this.onDesigDelete(id);
            },
            reject: function () { }
        });
    };
    DesignationComponent.prototype.ngOnDestroy = function () {
        this._subscritpions.unsubscribe();
    };
    DesignationComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _services_appservices_service__WEBPACK_IMPORTED_MODULE_2__["AppservicesService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
        { type: _app_services_master_service__WEBPACK_IMPORTED_MODULE_6__["MasterService"] }
    ]; };
    DesignationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-designation',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./designation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/typography/designation/designation.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./designation.component.scss */ "./src/app/typography/designation/designation.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _services_appservices_service__WEBPACK_IMPORTED_MODULE_2__["AppservicesService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _app_services_master_service__WEBPACK_IMPORTED_MODULE_6__["MasterService"]])
    ], DesignationComponent);
    return DesignationComponent;
}());



/***/ }),

/***/ "./src/app/typography/document/document.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/typography/document/document.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R5cG9ncmFwaHkvZG9jdW1lbnQvZG9jdW1lbnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/typography/document/document.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/typography/document/document.component.ts ***!
  \***********************************************************/
/*! exports provided: DocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentComponent", function() { return DocumentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_appservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/appservices.service */ "./src/app/services/appservices.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_services_master_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../app/services/master.service */ "./src/app/services/master.service.ts");










var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(http, modalService, _data, confirmationService, act, messageService, masterService, fb) {
        this.http = http;
        this.modalService = modalService;
        this._data = _data;
        this.confirmationService = confirmationService;
        this.act = act;
        this.messageService = messageService;
        this.masterService = masterService;
        this.fb = fb;
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.collection = [];
        this.submitted = false;
        this.title = 'Documents';
        this.msg = 'Are You Sure!';
        this.selectedDocument = {
            id: 0,
            name: '',
            description: ''
        };
        this.arrDoc = [];
        this.msgs = [];
        this.loading = true;
        this.display = false;
        this.documentsdata = this.act.snapshot.data['Docdata'];
        this.config = {
            itemsPerPage: 5,
            currentPage: 2,
            totalItems: this.collection.length
        };
    }
    DocumentComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.getDocuments();
        this.docForm = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required)
        });
    };
    DocumentComponent.prototype.getDocuments = function () {
        var _this = this;
        this._subscriptions.add(this._data.getAllDocuments().subscribe(function (data) {
            _this.arrDoc = data;
            _this.loading = false;
            console.log(_this.arrDoc);
        }));
    };
    DocumentComponent.prototype.OpenAddEdit = function (value, id, designation) {
        this.id = undefined;
        this.selectedDocumentOption = value;
        if (value === 'add') {
            this.docForm.setValue(this.selectedDocument);
        }
        else {
            this.docForm.patchValue({
                id: designation.id,
                name: designation.name,
                description: designation.description
            });
        }
        this.display = true;
    };
    DocumentComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    DocumentComponent.prototype.onDocDelete = function (id) {
        var _this = this;
        this._subscriptions.add(this._data.deleteDocument(id).subscribe(function (data) {
            _this.messageService.add({
                severity: 'success',
                summary: 'Success Message',
                detail: 'Deleted Sucessfully'
            });
            _this.ngOnInit();
        }));
    };
    DocumentComponent.prototype.onFormSubmit = function (f) {
        var _this = this;
        var test = this.masterService.getFormErrorMessage(f, this.docForm);
        console.log(test);
        if (test !== undefined) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error Message',
                detail: test
            });
        }
        else {
            this.submitted = true;
            console.log(this.selectedDocumentOption);
            if (this.selectedDocumentOption == 'Add') {
                console.log(this.id);
                var req = {
                    name: f.value.name,
                    description: f.value.description
                };
                console.log(req);
                this._subscriptions.add(this._data.addDocuments(req).subscribe(function (data) {
                    _this.messageService.add({
                        severity: 'success',
                        summary: 'Success Message',
                        detail: 'Added Sucessfully'
                    });
                    _this.getDocuments();
                    _this.display = false;
                }));
            }
            else {
                var req = {
                    id: f.value.id,
                    name: f.value.name,
                    description: f.value.description,
                };
                console.log(req);
                this._data.editDocument(req)
                    .then(function (res) {
                    if (res) {
                        _this.messageService.add({
                            severity: 'success',
                            summary: 'Success Message',
                            detail: 'Updated Sucessfully'
                        });
                        _this.getDocuments();
                        _this.display = false;
                    }
                    else {
                        console.log(res);
                    }
                }, function (error) {
                });
            }
        }
    };
    DocumentComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        console.log(id);
        this.confirmationService.confirm({
            message: "Are you sure that you want to proceed?",
            header: "Confirmation",
            icon: "pi pi-exclamation-triangle",
            accept: function () {
                _this.onDocDelete(id);
            },
            reject: function () {
            }
        });
    };
    DocumentComponent.prototype.ngOnDestroy = function () {
        this._subscriptions.unsubscribe();
    };
    DocumentComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
        { type: _services_appservices_service__WEBPACK_IMPORTED_MODULE_2__["AppservicesService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"] },
        { type: _app_services_master_service__WEBPACK_IMPORTED_MODULE_9__["MasterService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] }
    ]; };
    DocumentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-document',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./document.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/typography/document/document.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./document.component.scss */ "./src/app/typography/document/document.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _services_appservices_service__WEBPACK_IMPORTED_MODULE_2__["AppservicesService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            _app_services_master_service__WEBPACK_IMPORTED_MODULE_9__["MasterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])
    ], DocumentComponent);
    return DocumentComponent;
}());



/***/ }),

/***/ "./src/app/typography/location/location.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/typography/location/location.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R5cG9ncmFwaHkvbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/typography/location/location.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/typography/location/location.component.ts ***!
  \***********************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_appservices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/appservices.service */ "./src/app/services/appservices.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Models_locations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Models/locations */ "./src/app/Models/locations.ts");










var LocationComponent = /** @class */ (function () {
    function LocationComponent(http, modalService, _data, messageService, confirmationService, fb, masterService) {
        this.http = http;
        this.modalService = modalService;
        this._data = _data;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.fb = fb;
        this.masterService = masterService;
        this.title = 'Locations';
        this.arrayLocation = [];
        this.submitted = false;
        this.isProgress = false;
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
    }
    LocationComponent.prototype.ngOnInit = function () {
        this.getLoc();
        this.addForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            address1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            address2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            website: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            phone1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            phone2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            fax: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
    };
    LocationComponent.prototype.getLoc = function () {
        var _this = this;
        this._subscriptions.add(this._data.getLocations().subscribe(function (data) {
            _this.arrayLocation = data;
        }));
    };
    LocationComponent.prototype.onAdd = function () {
        this.addForm.reset();
        this.id = 0;
        this.display = true;
    };
    LocationComponent.prototype.openEdit = function (item) {
        this.isProgress = true;
        this.display = true;
        this.id = item.id;
        this.addForm.patchValue({
            name: item.name,
            description: item.description,
            address1: item.address1,
            address2: item.address2,
            city: item.city,
            state: item.state,
            zip: item.zip,
            country: item.country,
            website: item.website,
            phone1: item.phone1,
            phone2: item.phone2,
            fax: item.fax,
        });
    };
    LocationComponent.prototype.onFormSubmit = function (addForm) {
        var _this = this;
        var ErrorMsgNotification = this.masterService.getFormErrorMessage(addForm, this.addForm);
        if (ErrorMsgNotification !== undefined) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error Message',
                detail: ErrorMsgNotification
            });
        }
        else {
            this.submitted = true;
            if (this.id === 0) {
                this._subscriptions.add(this._data
                    .addEditLocations(new _Models_locations__WEBPACK_IMPORTED_MODULE_9__["Locations"](addForm.value.id, addForm.value.name, addForm.value.description, addForm.value.address1, addForm.value.address2, addForm.value.city, addForm.value.state, addForm.value.zip, addForm.value.country, addForm.value.website, addForm.value.phone1, addForm.value.phone2, addForm.value.fax))
                    .subscribe(function (x) {
                    _this.ngOnInit();
                    var successMessage = 'Location Added Successfuly';
                    _this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: successMessage
                    });
                }, function () {
                    _this.messageService.add({
                        severity: 'error',
                        summary: 'Update',
                        detail: 'server not Responding'
                    });
                }));
                this.display = false;
            }
            else {
                this.submitted = true;
                this._subscriptions.add(this._data
                    .addEditLocations(new _Models_locations__WEBPACK_IMPORTED_MODULE_9__["Locations"](this.id, addForm.value.name, addForm.value.description, addForm.value.address1, addForm.value.address2, addForm.value.city, addForm.value.state, addForm.value.zip, addForm.value.country, addForm.value.website, addForm.value.phone1, addForm.value.phone2, addForm.value.fax))
                    .subscribe(function () {
                    _this.ngOnInit();
                    _this.messageService.add({
                        severity: 'success',
                        summary: 'Update',
                        detail: 'Update Successfull'
                    });
                }, function () {
                    _this.messageService.add({
                        severity: 'error',
                        summary: 'Update',
                        detail: 'server not Responding'
                    });
                }));
                this.display = false;
            }
        }
    };
    LocationComponent.prototype.onSearch = function (value) {
        var _this = this;
        console.log(value);
        if (value !== '' && value !== undefined) {
            this.arrayLocation = this.arrayLocation.filter(function (x) { return x.name.toUpperCase().startsWith(value.toUpperCase()); });
        }
        else {
            this._subscriptions.add(this._data.getLocations().subscribe(function (data) {
                _this.arrayLocation = data;
            }, function (error) {
                alert(error);
            }, function () { }));
        }
    };
    LocationComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        console.log(id);
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: function () {
                _this.onLocDelete(id);
            },
            reject: function () { }
        });
    };
    LocationComponent.prototype.onLocDelete = function (id) {
        var _this = this;
        this._subscriptions.add(this._data.deleteLocations(id).subscribe(function (data) {
            _this.messageService.add({
                severity: 'success',
                summary: 'Success Message',
                detail: 'Deleted Sucessfully'
            });
            _this.ngOnInit();
        }));
    };
    LocationComponent.prototype.close = function () {
        console.log('close');
    };
    LocationComponent.prototype.ngOnDestroy = function () {
        this._subscriptions.unsubscribe();
    };
    LocationComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] },
        { type: _services_appservices_service__WEBPACK_IMPORTED_MODULE_4__["AppservicesService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["ConfirmationService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_master_service__WEBPACK_IMPORTED_MODULE_2__["MasterService"] }
    ]; };
    LocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-location',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./location.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/typography/location/location.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./location.component.scss */ "./src/app/typography/location/location.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"],
            _services_appservices_service__WEBPACK_IMPORTED_MODULE_4__["AppservicesService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_8__["ConfirmationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_master_service__WEBPACK_IMPORTED_MODULE_2__["MasterService"]])
    ], LocationComponent);
    return LocationComponent;
}());



/***/ }),

/***/ "./src/app/typography/organization/organization.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/typography/organization/organization.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th {\n  padding: 7px; }\n\n.scrollit {\n  overflow: scroll;\n  height: 514px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwb2dyYXBoeS9vcmdhbml6YXRpb24vQzpcXFVzZXJzXFxhc3Vua29wcGFkXFxEZXNrdG9wXFxuZXd6b29tXFx6b29tdGVhbXMtd2ViLW5nL3NyY1xcYXBwXFx0eXBvZ3JhcGh5XFxvcmdhbml6YXRpb25cXG9yZ2FuaXphdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxnQkFBZTtFQUNmLGFBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3R5cG9ncmFwaHkvb3JnYW5pemF0aW9uL29yZ2FuaXphdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRoIHtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIH1cclxuICAgIFxyXG4uc2Nyb2xsaXQge1xyXG4gICAgb3ZlcmZsb3c6c2Nyb2xsO1xyXG4gICAgaGVpZ2h0OjUxNHB4O1xyXG59XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/typography/organization/organization.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/typography/organization/organization.component.ts ***!
  \*******************************************************************/
/*! exports provided: OrganizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationComponent", function() { return OrganizationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_appservices_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/appservices.service */ "./src/app/services/appservices.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_master_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");









var OrganizationComponent = /** @class */ (function () {
    function OrganizationComponent(http, modalService, _data, messageService, confirmationService, fb, masterService) {
        this.http = http;
        this.modalService = modalService;
        this._data = _data;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.fb = fb;
        this.masterService = masterService;
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"]();
        this.title = 'Department';
        this.msgs = [];
        this.msg = 'Are You Sure!';
        this.arrDept = [];
        this.loading = true;
        this.display = false;
        this.draggable = false;
        this.resizable = false;
        this.datanotfound = false;
    }
    OrganizationComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.getOrg();
        this.deptForm = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            registeredaddress1: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            registeredaddress2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            website: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            phone1: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            phone2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            fax: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required)
        });
    };
    //   () => {
    //     this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Server not responding' });
    //   }
    //   );
    // }
    OrganizationComponent.prototype.getOrg = function () {
        var _this = this;
        this._subscriptions.add(this._data.getOrganization().subscribe(function (data) {
            _this.arrDept = data["organizations"];
            _this.loading = false;
            console.log(_this.arrDept);
        }, function (error) {
            _this.datanotfound = true;
        }, function () { }));
    };
    OrganizationComponent.prototype.openAdd = function (value) {
        this.display = true;
        this.getOrg();
    };
    OrganizationComponent.prototype.openEdit = function () {
        console.log(this.arrDept);
        this.display = true;
        this.deptForm.patchValue({
            id: this.arrDept[0].id,
            name: this.arrDept[0].name,
            description: this.arrDept[0].description,
            registeredaddress1: this.arrDept[0].registeredaddress1,
            registeredaddress2: this.arrDept[0].registeredaddress1,
            city: this.arrDept[0].city,
            state: this.arrDept[0].state,
            zip: this.arrDept[0].zip,
            country: this.arrDept[0].country,
            website: this.arrDept[0].website,
            phone1: this.arrDept[0].phone1,
            phone2: this.arrDept[0].phone2,
            fax: this.arrDept[0].fax
        });
    };
    OrganizationComponent.prototype.onFormSubmit = function (f) {
        var _this = this;
        var test = this.masterService.getFormErrorMessage(this.deptForm, this.deptForm);
        if (test !== undefined) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error Message',
                detail: test
            });
        }
        else {
            if (this.selectedDepartmentOption === 'add') {
                console.log(this.id);
                this._subscriptions.add(this._data.addOrganization(f.value).subscribe(function (data) {
                    _this.display = false;
                    console.log(f.value);
                    setTimeout(function () {
                        _this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Added Sucessfully' });
                    }, 1000);
                    _this.getOrg();
                }));
            }
            else {
                var req = {
                    id: this.deptForm.value.id,
                    name: this.deptForm.value.name,
                    description: this.deptForm.value.description,
                    registeredaddress1: this.deptForm.value.registeredaddress1,
                    registeredaddress2: this.deptForm.value.registeredaddress2,
                    city: this.deptForm.value.city,
                    state: this.deptForm.value.state,
                    zip: this.deptForm.value.zip,
                    country: this.deptForm.value.country,
                    website: this.deptForm.value.website,
                    phone1: this.deptForm.value.phone1,
                    phone2: this.deptForm.value.phone2,
                    fax: this.deptForm.value.fax
                };
                console.log(req);
                this._data.editOrganization(req).then(function (res) {
                    if (res) {
                        _this.display = false;
                        setTimeout(function () {
                            _this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Updated Sucessfully' });
                        }, 1000);
                        _this.getOrg();
                    }
                    else {
                        console.log(res);
                    }
                }, function (error) {
                });
            }
        }
    };
    OrganizationComponent.prototype.ngOnDestroy = function () {
        this._subscriptions.unsubscribe();
    };
    OrganizationComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
        { type: _services_appservices_service__WEBPACK_IMPORTED_MODULE_1__["AppservicesService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _services_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"] }
    ]; };
    OrganizationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-organization',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./organization.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/typography/organization/organization.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./organization.component.scss */ "./src/app/typography/organization/organization.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _services_appservices_service__WEBPACK_IMPORTED_MODULE_1__["AppservicesService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _services_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"]])
    ], OrganizationComponent);
    return OrganizationComponent;
}());



/***/ }),

/***/ "./src/app/typography/settings.module.ts":
/*!***********************************************!*\
  !*** ./src/app/typography/settings.module.ts ***!
  \***********************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/growl */ "./node_modules/primeng/growl.js");
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_growl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/sidebar.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_sidebar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/autocomplete.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_autocomplete__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/panel.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_panel__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/tabview.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_tabview__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/paginator */ "./node_modules/primeng/paginator.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_paginator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/toolbar */ "./node_modules/primeng/toolbar.js");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_toolbar__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _typography_timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../typography/timesheet/timesheet.component */ "./src/app/typography/timesheet/timesheet.component.ts");
/* harmony import */ var _department_department_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./department/department.component */ "./src/app/typography/department/department.component.ts");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./settings.routing.module */ "./src/app/typography/settings.routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _typography_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./typography.component */ "./src/app/typography/typography.component.ts");
/* harmony import */ var _typography_document_document_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../typography/document/document.component */ "./src/app/typography/document/document.component.ts");
/* harmony import */ var _typography_users_users_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../typography/users/users.component */ "./src/app/typography/users/users.component.ts");
/* harmony import */ var _typography_location_location_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../typography/location/location.component */ "./src/app/typography/location/location.component.ts");
/* harmony import */ var _typography_organization_organization_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../typography/organization/organization.component */ "./src/app/typography/organization/organization.component.ts");
/* harmony import */ var _typography_designation_designation_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../typography/designation/designation.component */ "./src/app/typography/designation/designation.component.ts");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/progressbar.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(primeng_progressbar__WEBPACK_IMPORTED_MODULE_29__);






























var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _settings_routing_module__WEBPACK_IMPORTED_MODULE_21__["SettingsRoutingModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_22__["SharedModuleModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                primeng_growl__WEBPACK_IMPORTED_MODULE_7__["GrowlModule"],
                primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_8__["ConfirmDialogModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
                primeng_sidebar__WEBPACK_IMPORTED_MODULE_9__["SidebarModule"],
                primeng_fileupload__WEBPACK_IMPORTED_MODULE_11__["FileUploadModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_10__["TableModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_12__["DialogModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_13__["AutoCompleteModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_14__["PanelModule"],
                primeng_tabview__WEBPACK_IMPORTED_MODULE_15__["TabViewModule"],
                primeng_paginator__WEBPACK_IMPORTED_MODULE_16__["PaginatorModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_17__["ToastModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                primeng_toolbar__WEBPACK_IMPORTED_MODULE_18__["ToolbarModule"],
                primeng_progressbar__WEBPACK_IMPORTED_MODULE_29__["ProgressBarModule"]
            ],
            declarations: [
                _typography_component__WEBPACK_IMPORTED_MODULE_23__["TypographyComponent"],
                _typography_designation_designation_component__WEBPACK_IMPORTED_MODULE_28__["DesignationComponent"],
                _typography_organization_organization_component__WEBPACK_IMPORTED_MODULE_27__["OrganizationComponent"],
                _typography_location_location_component__WEBPACK_IMPORTED_MODULE_26__["LocationComponent"],
                _typography_users_users_component__WEBPACK_IMPORTED_MODULE_25__["UsersComponent"],
                _typography_document_document_component__WEBPACK_IMPORTED_MODULE_24__["DocumentComponent"],
                _department_department_component__WEBPACK_IMPORTED_MODULE_20__["DepartmentComponent"],
                _typography_timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_19__["TimesheetComponent"]
            ],
            providers: [
                primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]
            ]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "./src/app/typography/settings.routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/typography/settings.routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _typography_document_document_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../typography/document/document.component */ "./src/app/typography/document/document.component.ts");
/* harmony import */ var _typography_users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../typography/users/users.component */ "./src/app/typography/users/users.component.ts");
/* harmony import */ var _typography_organization_organization_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../typography/organization/organization.component */ "./src/app/typography/organization/organization.component.ts");
/* harmony import */ var _typography_location_location_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../typography/location/location.component */ "./src/app/typography/location/location.component.ts");
/* harmony import */ var _typography_designation_designation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../typography/designation/designation.component */ "./src/app/typography/designation/designation.component.ts");
/* harmony import */ var _typography_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./typography.component */ "./src/app/typography/typography.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _department_department_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./department/department.component */ "./src/app/typography/department/department.component.ts");
/* harmony import */ var _timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timesheet/timesheet.component */ "./src/app/typography/timesheet/timesheet.component.ts");











var routes = [
    {
        path: '', component: _typography_component__WEBPACK_IMPORTED_MODULE_6__["TypographyComponent"]
    },
    {
        path: 'department', component: _department_department_component__WEBPACK_IMPORTED_MODULE_9__["DepartmentComponent"]
    },
    {
        path: 'designation', component: _typography_designation_designation_component__WEBPACK_IMPORTED_MODULE_5__["DesignationComponent"]
    },
    {
        path: 'location', component: _typography_location_location_component__WEBPACK_IMPORTED_MODULE_4__["LocationComponent"]
    },
    {
        path: 'organization', component: _typography_organization_organization_component__WEBPACK_IMPORTED_MODULE_3__["OrganizationComponent"]
    },
    {
        path: 'user', component: _typography_users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"]
    },
    {
        path: 'document', component: _typography_document_document_component__WEBPACK_IMPORTED_MODULE_1__["DocumentComponent"]
    },
    {
        path: 'timesheet', component: _timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_10__["TimesheetComponent"]
    }
];
var SettingsRoutingModule = /** @class */ (function () {
    function SettingsRoutingModule() {
    }
    SettingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
        })
    ], SettingsRoutingModule);
    return SettingsRoutingModule;
}());



/***/ }),

/***/ "./src/app/typography/timesheet/timesheet.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/typography/timesheet/timesheet.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  font-family: Lato; }\n\naside.ng-sidebar--animate.ng-sidebar.ng-sidebar--opened.ng-sidebar--right.ng-sidebar--over {\n  background: yellow;\n  color: white; }\n\n/* chat css start */\n\nbody {\n  margin: 0 auto;\n  max-width: 800px;\n  padding: 0 20px; }\n\n.container {\n  border: 2px solid #dedede;\n  background-color: #f1f1f1;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px 0; }\n\n.darker {\n  border-color: #ccc;\n  background-color: #ddd; }\n\n.container::after {\n  content: \"\";\n  clear: both;\n  display: table; }\n\n.container img {\n  float: left;\n  max-width: 60px;\n  width: 100%;\n  margin-right: 20px;\n  border-radius: 50%; }\n\n.container img.right {\n  float: right;\n  margin-left: 20px;\n  margin-right: 0; }\n\n.time-right {\n  float: right;\n  color: #aaa; }\n\n.time-left {\n  float: left;\n  color: #999; }\n\n/* chat css end */\n\ninput {\n  padding: 4px;\n  /* float: right; */ }\n\nelement.style {\n  z-index: 5000;\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwb2dyYXBoeS90aW1lc2hlZXQvQzpcXFVzZXJzXFxhc3Vua29wcGFkXFxEZXNrdG9wXFxuZXd6b29tXFx6b29tdGVhbXMtd2ViLW5nL3NyY1xcYXBwXFx0eXBvZ3JhcGh5XFx0aW1lc2hlZXRcXHRpbWVzaGVldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBTWQsbUJBQUE7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTs7QUFJeEI7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFjLEVBQUE7O0FBR2hCO0VBQ0UsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBR2IsaUJBQUE7O0FBSUE7RUFDRSxZQUFZO0VBQ1osa0JBQUEsRUFBbUI7O0FBUXJCO0VBQ0ksYUFBYTtFQUNiLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3R5cG9ncmFwaHkvdGltZXNoZWV0L3RpbWVzaGVldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG59XHJcbmFzaWRlLm5nLXNpZGViYXItLWFuaW1hdGUubmctc2lkZWJhci5uZy1zaWRlYmFyLS1vcGVuZWQubmctc2lkZWJhci0tcmlnaHQubmctc2lkZWJhci0tb3ZlciB7XHJcbiAgYmFja2dyb3VuZDogeWVsbG93O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogY2hhdCBjc3Mgc3RhcnQgKi9cclxuXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZGVkZWRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuXHJcbi5kYXJrZXIge1xyXG4gIGJvcmRlci1jb2xvcjogI2NjYztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lcjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi5jb250YWluZXIgaW1nIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXgtd2lkdGg6IDYwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciBpbWcucmlnaHQge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6MDtcclxufVxyXG5cclxuLnRpbWUtcmlnaHQge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBjb2xvcjogI2FhYTtcclxufVxyXG5cclxuLnRpbWUtbGVmdCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbi8qIGNoYXQgY3NzIGVuZCAqL1xyXG5cclxuXHJcblxyXG5pbnB1dCB7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIC8qIGZsb2F0OiByaWdodDsgKi9cclxufVxyXG5cclxuXHJcblxyXG4vLyBwcmltZSBuZ1xyXG5cclxuXHJcbmVsZW1lbnQuc3R5bGUge1xyXG4gICAgei1pbmRleDogNTAwMDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/typography/timesheet/timesheet.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/typography/timesheet/timesheet.component.ts ***!
  \*************************************************************/
/*! exports provided: TimesheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetComponent", function() { return TimesheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimesheetComponent = /** @class */ (function () {
    function TimesheetComponent() {
        this.opened = false;
        this.filterStatus = false;
    }
    TimesheetComponent.prototype.openTab = function () {
        this.opened = true;
    };
    TimesheetComponent.prototype.openTab2 = function () {
        this.filterStatus = true;
    };
    TimesheetComponent.prototype.ngOnInit = function () {
        this.showTabs = {
            'one': true,
            'three': true
        };
    };
    TimesheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timesheet',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./timesheet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/typography/timesheet/timesheet.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./timesheet.component.scss */ "./src/app/typography/timesheet/timesheet.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimesheetComponent);
    return TimesheetComponent;
}());



/***/ }),

/***/ "./src/app/typography/typography.component.css":
/*!*****************************************************!*\
  !*** ./src/app/typography/typography.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn, .navbar .navbar-nav > a.btn {\r\n  border-width: 2px;\r\n  font-weight: 600;\r\n  font-size:10pt;\r\n  line-height: 1.35em;\r\n  border: none;\r\n  margin: 10px 1px;\r\n  border-radius: 0.1875rem;\r\n  padding: 11px 22px;\r\n  cursor: pointer;\r\n  background-color:transparent;\r\n  color: #3498db;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biwgLm5hdmJhciAubmF2YmFyLW5hdiA+IGEuYnRuIHtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZToxMHB0O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM1ZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbjogMTBweCAxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4xODc1cmVtO1xyXG4gIHBhZGRpbmc6IDExcHggMjJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICBjb2xvcjogIzM0OThkYjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/typography/typography.component.ts":
/*!****************************************************!*\
  !*** ./src/app/typography/typography.component.ts ***!
  \****************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    TypographyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-typography',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./typography.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/typography/typography.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./typography.component.css */ "./src/app/typography/typography.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/typography/users/users.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/typography/users/users.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a:not([href]):not([tabindex]) {\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwb2dyYXBoeS91c2Vycy9DOlxcVXNlcnNcXGFzdW5rb3BwYWRcXERlc2t0b3BcXG5ld3pvb21cXHpvb210ZWFtcy13ZWItbmcvc3JjXFxhcHBcXHR5cG9ncmFwaHlcXHVzZXJzXFx1c2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3R5cG9ncmFwaHkvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYTpub3QoW2hyZWZdKTpub3QoW3RhYmluZGV4XSkge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/typography/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/typography/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_master_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var _services_appservices_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/appservices.service */ "./src/app/services/appservices.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);









var UsersComponent = /** @class */ (function () {
    function UsersComponent(_data, messageService, fb, confirmationService, datePipe, masterService) {
        this._data = _data;
        this.messageService = messageService;
        this.fb = fb;
        this.confirmationService = confirmationService;
        this.datePipe = datePipe;
        this.masterService = masterService;
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.noRecord = false;
        this.workDisable = true;
        this.display = false;
        this.arrUser = [];
        this.pagerInfo = [];
        this.fileList = [];
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.setFormControls();
    };
    UsersComponent.prototype.setFormControls = function () {
        this.personalInfo = this.fb.group({
            memberId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            middleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            maritalStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            race: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            ethnicity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            religion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            address2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            cell: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            workPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            workPhoneExt: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            ssn: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            language: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
        });
        this.workInfo = this.fb.group({
            orgName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            orgId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            locationName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            departmentName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            roles: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            doj: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            supervisor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
        this.document = this.fb.group({
            documentType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
        });
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this._subscriptions.add(this._data.getUsers().subscribe(function (data) {
            console.log(data);
            if (!lodash__WEBPACK_IMPORTED_MODULE_8__["isEmpty"](data)) {
                _this.arrUser = data['members'];
                _this.pagerInfo = data['pagerInfo'];
                _this.totalPages = _this.pagerInfo['totalPages'];
                _this.totalRecords = _this.pagerInfo['totalItems'];
                _this.itemsPerPage = _this.pagerInfo['itemsPerPage'];
            }
            else {
                _this.noRecord = true;
            }
            console.log(_this.arrUser);
        }, function () {
            _this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Server not responding' });
        }));
    };
    UsersComponent.prototype.paginate = function (event) {
        var _this = this;
        var pageNo = event.page + 1;
        this._subscriptions.add(this._data.getUserPage(pageNo).subscribe(function (data) {
            _this.arrUser = data['members'];
            _this.pagerInfo = data['pagerInfo'];
            _this.totalPages = _this.pagerInfo['totalPages'];
            _this.totalRecords = _this.pagerInfo['totalItems'];
            _this.itemsPerPage = _this.pagerInfo['itemsPerPage'];
        }));
    };
    UsersComponent.prototype.openAdd = function () {
        this.personalInfo.reset();
        // this.selectedUserOption = passedTitle;
        this.display = true;
    };
    UsersComponent.prototype.openEdit = function (item) {
        this.display = true;
        console.log(item);
        this.getFormControlData(item);
    };
    UsersComponent.prototype.onSavePersonal = function () {
        var _this = this;
        var test = this.masterService.getFormErrorMessage(this.personalInfo, this.personalInfo);
        if (test !== undefined) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error Message',
                detail: test
            });
        }
        else {
            // const req = {
            //   memberId:  this.personalInfo.value.memberId,
            //   "firstName": "Sujit",
            //   "middleName": "S",
            //   "lastName": "Shindhe",
            //   "gender": "M",
            //   "email": "sujit@skycliffit.com",
            //   "dob": "1990-10-05",
            //   "address": "Hubbli",
            //   "city": "Hubli",
            //   "state": "Karnataka",
            //   "postalcode": "2153655",
            //   "cell": "5486551",
            //   "workPhone": "65616",
            //   "workPhoneExt": "2563",
            //   // "DesignationId":27,
            //   // "OrgId":1,
            //   // "createdby":5
            //   };
            var req = {
                memberId: this.personalInfo.value.memberId,
                firstName: this.personalInfo.value.firstName,
                middleName: this.personalInfo.value.MiddleName,
                lastName: this.personalInfo.value.lastName,
                gender: this.personalInfo.value.gender,
                email: this.personalInfo.value.email,
                dob: this.personalInfo.value.dob,
                maritalStatus: this.personalInfo.value.maritalStatus,
                race: this.personalInfo.value.race,
                ethnicity: this.personalInfo.value.ethnicity,
                religion: this.personalInfo.value.religion,
                address: this.personalInfo.value.address,
                address2: this.personalInfo.value.address2,
                city: this.personalInfo.value.city,
                state: this.personalInfo.value.state,
                zipCode: this.personalInfo.value.zipCode,
                cell: this.personalInfo.value.cell,
                workPhone: this.personalInfo.value.workPhone,
                workPhoneExt: this.personalInfo.value.workPhoneExt,
                country: this.personalInfo.value.country,
                // ssn: this.personalInfo.value,
                language: this.personalInfo.value.language,
                orgId: '1',
                createdby: '5'
            };
            console.log(req);
            this._subscriptions.add(this._data.insertUpdateMember(req).subscribe(function (response) {
                _this.messageService.add({ severity: 'info', summary: 'Update', detail: 'Update Successful' });
            }, function (response) {
                _this.messageService.add({ severity: 'error', summary: 'Update', detail: 'Update Not Possible' });
            }));
        }
        this.getUsers();
        this.workDisable = false;
    };
    UsersComponent.prototype.onSaveWork = function () {
        console.log(this.workInfo.value);
    };
    UsersComponent.prototype.saveUpload = function () {
    };
    UsersComponent.prototype.onDeleteUser = function (id) {
        var _this = this;
        this._subscriptions.add(this._data.DeleteUser(id).subscribe(function () {
            _this.messageService.add({ severity: 'success', summary: 'Delete', detail: 'Deletion successfull' });
        }, function () {
            _this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Record Not Deleted' });
        }));
    };
    UsersComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        console.log(id);
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: function () {
                _this.onDeleteUser(id);
            },
            reject: function () {
            }
        });
    };
    UsersComponent.prototype.onClickSearch = function (term) {
        var _this = this;
        var searchTerm = term.toLowerCase();
        this._subscriptions.add(this._data.getUserBySearch(searchTerm).subscribe(function (data) {
            _this.arrUser = data['members'];
            _this.pagerInfo = data['pagerInfo'];
            _this.totalPages = _this.pagerInfo['totalPages'];
            _this.totalRecords = _this.pagerInfo['totalItems'];
            _this.itemsPerPage = _this.pagerInfo['itemsPerPage'];
        }));
    };
    UsersComponent.prototype.getFormControlData = function (item) {
        this.personalInfo.patchValue({
            memberId: item.memberId,
            firstName: item.firstName,
            lastName: item.lastName,
            middleName: item.middleName,
            address: item.address,
            address2: item.address2,
            gender: item.gender,
            dob: this.datePipe.transform(item.dob, 'yyyy-MM-dd'),
            email: item.email,
            zipCode: item.zipCode,
            cell: item.cell,
            workPhone: item.workPhone,
            workPhoneExt: item.workPhoneExt,
            country: item.country,
            ssn: item.ssn,
            language: item.language,
            organizationId: item.organizationId,
            city: item.city,
            state: item.state,
            maritalStatus: item.maritalStatus,
            race: item.race,
            ethnicity: item.ethnicity,
            religion: item.religion,
            supervisor: item.email
        });
        this.workInfo.patchValue({
            orgName: item.orgName,
            orgId: item.orgId,
            locationName: item.locationName,
            designation: item.designation,
            departmentName: item.departmentName,
            roles: item.roles,
            doj: this.datePipe.transform(item.doj, 'yyyy-MM-dd'),
            supervisor: item.spervisor
        });
    };
    UsersComponent.prototype.onChange = function (fileList) {
        var file = fileList[0];
        var fileReader = new FileReader();
        var self = this;
        // fileReader.onloadend = function(x) {
        var alreadyExist = lodash__WEBPACK_IMPORTED_MODULE_8__["filter"](this.fileList, function (e) {
            return e.name === file.name;
        });
        if (lodash__WEBPACK_IMPORTED_MODULE_8__["isEmpty"](alreadyExist)) {
            this.fileList.push(file);
            lodash__WEBPACK_IMPORTED_MODULE_8__["each"](this.fileList, function (val, i) {
                val.id = i + 1;
            });
        }
        else {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'File Name Already Exist Rename and upload...'
            });
        }
    };
    UsersComponent.prototype.removeFile = function (id) {
        this.fileList = lodash__WEBPACK_IMPORTED_MODULE_8__["filter"](this.fileList, function (f) {
            return f.id !== id;
        });
    };
    UsersComponent.prototype.viewFile = function (item) {
        var json = JSON.stringify(item.fileContent);
        var blob = new Blob([json], { type: 'application/json' });
        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = item.name;
        link.click();
    };
    UsersComponent.prototype.ngOnDestroy = function () {
        this._subscriptions.unsubscribe();
    };
    UsersComponent.ctorParameters = function () { return [
        { type: _services_appservices_service__WEBPACK_IMPORTED_MODULE_7__["AppservicesService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
        { type: _services_master_service__WEBPACK_IMPORTED_MODULE_6__["MasterService"] }
    ]; };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-users',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/typography/users/users.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users.component.scss */ "./src/app/typography/users/users.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_appservices_service__WEBPACK_IMPORTED_MODULE_7__["AppservicesService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
            _services_master_service__WEBPACK_IMPORTED_MODULE_6__["MasterService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ })

}]);
//# sourceMappingURL=typography-settings-module.js.map