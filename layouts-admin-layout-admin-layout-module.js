(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-admin-layout-admin-layout-module"],{

/***/ "./node_modules/ng2-charts/charts/charts.js":
/*!**************************************************!*\
  !*** ./node_modules/ng2-charts/charts/charts.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var chart_js_1 = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/src/chart.js");
/* tslint:disable-next-line */
var BaseChartDirective = (function () {
    function BaseChartDirective(element) {
        this.labels = [];
        this.options = {};
        this.chartClick = new core_1.EventEmitter();
        this.chartHover = new core_1.EventEmitter();
        this.initFlag = false;
        this.element = element;
    }
    BaseChartDirective.prototype.ngOnInit = function () {
        this.ctx = this.element.nativeElement.getContext('2d');
        this.cvs = this.element.nativeElement;
        this.initFlag = true;
        if (this.data || this.datasets) {
            this.refresh();
        }
    };
    BaseChartDirective.prototype.ngOnChanges = function (changes) {
        if (this.initFlag) {
            // Check if the changes are in the data or datasets
            if (changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets')) {
                if (changes['data']) {
                    this.updateChartData(changes['data'].currentValue);
                }
                else {
                    this.updateChartData(changes['datasets'].currentValue);
                }
                this.chart.update();
            }
            else {
                // otherwise rebuild the chart
                this.refresh();
            }
        }
    };
    BaseChartDirective.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    };
    BaseChartDirective.prototype.getChartBuilder = function (ctx /*, data:Array<any>, options:any*/) {
        var _this = this;
        var datasets = this.getDatasets();
        var options = Object.assign({}, this.options);
        if (this.legend === false) {
            options.legend = { display: false };
        }
        // hock for onHover and onClick events
        options.hover = options.hover || {};
        if (!options.hover.onHover) {
            options.hover.onHover = function (active) {
                if (active && !active.length) {
                    return;
                }
                _this.chartHover.emit({ active: active });
            };
        }
        if (!options.onClick) {
            options.onClick = function (event, active) {
                _this.chartClick.emit({ event: event, active: active });
            };
        }
        var opts = {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: datasets
            },
            options: options
        };
        return new chart_js_1.Chart(ctx, opts);
    };
    BaseChartDirective.prototype.updateChartData = function (newDataValues) {
        if (Array.isArray(newDataValues[0].data)) {
            this.chart.data.datasets.forEach(function (dataset, i) {
                dataset.data = newDataValues[i].data;
                if (newDataValues[i].label) {
                    dataset.label = newDataValues[i].label;
                }
            });
        }
        else {
            this.chart.data.datasets[0].data = newDataValues;
        }
    };
    BaseChartDirective.prototype.getDatasets = function () {
        var _this = this;
        var datasets = void 0;
        // in case if datasets is not provided, but data is present
        if (!this.datasets || !this.datasets.length && (this.data && this.data.length)) {
            if (Array.isArray(this.data[0])) {
                datasets = this.data.map(function (data, index) {
                    return { data: data, label: _this.labels[index] || "Label " + index };
                });
            }
            else {
                datasets = [{ data: this.data, label: "Label 0" }];
            }
        }
        if (this.datasets && this.datasets.length ||
            (datasets && datasets.length)) {
            datasets = (this.datasets || datasets)
                .map(function (elm, index) {
                var newElm = Object.assign({}, elm);
                if (_this.colors && _this.colors.length) {
                    Object.assign(newElm, _this.colors[index]);
                }
                else {
                    Object.assign(newElm, getColors(_this.chartType, index, newElm.data.length));
                }
                return newElm;
            });
        }
        if (!datasets) {
            throw new Error("ng-charts configuration error,\n      data or datasets field are required to render char " + this.chartType);
        }
        return datasets;
    };
    BaseChartDirective.prototype.refresh = function () {
        // if (this.options && this.options.responsive) {
        //   setTimeout(() => this.refresh(), 50);
        // }
        // todo: remove this line, it is producing flickering
        this.ngOnDestroy();
        this.chart = this.getChartBuilder(this.ctx /*, data, this.options*/);
    };
    return BaseChartDirective;
}());
BaseChartDirective.defaultColors = [
    [255, 99, 132],
    [54, 162, 235],
    [255, 206, 86],
    [231, 233, 237],
    [75, 192, 192],
    [151, 187, 205],
    [220, 220, 220],
    [247, 70, 74],
    [70, 191, 189],
    [253, 180, 92],
    [148, 159, 177],
    [77, 83, 96]
];
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], BaseChartDirective.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], BaseChartDirective.prototype, "datasets", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], BaseChartDirective.prototype, "labels", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BaseChartDirective.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BaseChartDirective.prototype, "chartType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], BaseChartDirective.prototype, "colors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BaseChartDirective.prototype, "legend", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], BaseChartDirective.prototype, "chartClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], BaseChartDirective.prototype, "chartHover", void 0);
BaseChartDirective = __decorate([
    core_1.Directive({ selector: 'canvas[baseChart]', exportAs: 'base-chart' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], BaseChartDirective);
exports.BaseChartDirective = BaseChartDirective;
function rgba(colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function formatLineColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.4),
        borderColor: rgba(colors, 1),
        pointBackgroundColor: rgba(colors, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgba(colors, 0.8)
    };
}
function formatBarColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.6),
        borderColor: rgba(colors, 1),
        hoverBackgroundColor: rgba(colors, 0.8),
        hoverBorderColor: rgba(colors, 1)
    };
}
function formatPieColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function () { return '#fff'; }),
        pointBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointBorderColor: colors.map(function () { return '#fff'; }),
        pointHoverBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointHoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
function formatPolarAreaColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function (color) { return rgba(color, 1); }),
        hoverBackgroundColor: colors.map(function (color) { return rgba(color, 0.8); }),
        hoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
function getRandomColor() {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors for line|bar charts
 * @param index
 * @returns {number[]|Color}
 */
function generateColor(index) {
    return BaseChartDirective.defaultColors[index] || getRandomColor();
}
/**
 * Generate colors for pie|doughnut charts
 * @param count
 * @returns {Colors}
 */
function generateColors(count) {
    var colorsArr = new Array(count);
    for (var i = 0; i < count; i++) {
        colorsArr[i] = BaseChartDirective.defaultColors[i] || getRandomColor();
    }
    return colorsArr;
}
/**
 * Generate colors by chart type
 * @param chartType
 * @param index
 * @param count
 * @returns {Color}
 */
function getColors(chartType, index, count) {
    if (chartType === 'pie' || chartType === 'doughnut') {
        return formatPieColors(generateColors(count));
    }
    if (chartType === 'polarArea') {
        return formatPolarAreaColors(generateColors(count));
    }
    if (chartType === 'line' || chartType === 'radar') {
        return formatLineColor(generateColor(index));
    }
    if (chartType === 'bar' || chartType === 'horizontalBar') {
        return formatBarColor(generateColor(index));
    }
    return generateColor(index);
}
var ChartsModule = (function () {
    function ChartsModule() {
    }
    return ChartsModule;
}());
ChartsModule = __decorate([
    core_1.NgModule({
        declarations: [
            BaseChartDirective
        ],
        exports: [
            BaseChartDirective
        ],
        imports: []
    })
], ChartsModule);
exports.ChartsModule = ChartsModule;


/***/ }),

/***/ "./node_modules/ng2-charts/index.js":
/*!******************************************!*\
  !*** ./node_modules/ng2-charts/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./charts/charts */ "./node_modules/ng2-charts/charts/charts.js"));


/***/ }),

/***/ "./node_modules/ngx-quill/index.js":
/*!*****************************************!*\
  !*** ./node_modules/ngx-quill/index.js ***!
  \*****************************************/
/*! exports provided: QuillModule, QuillEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_quill_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/quill.module */ "./node_modules/ngx-quill/src/quill.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuillModule", function() { return _src_quill_module__WEBPACK_IMPORTED_MODULE_0__["QuillModule"]; });

/* harmony import */ var _src_quill_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/quill-editor.component */ "./node_modules/ngx-quill/src/quill-editor.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuillEditorComponent", function() { return _src_quill_editor_component__WEBPACK_IMPORTED_MODULE_1__["QuillEditorComponent"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-quill/src/quill-editor.component.js":
/*!**************************************************************!*\
  !*** ./node_modules/ngx-quill/src/quill-editor.component.js ***!
  \**************************************************************/
/*! exports provided: QuillEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuillEditorComponent", function() { return QuillEditorComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var Quill = undefined;
var QuillEditorComponent = /** @class */ (function () {
    function QuillEditorComponent(elementRef, doc, platformId, renderer, zone) {
        var _this = this;
        this.elementRef = elementRef;
        this.doc = doc;
        this.platformId = platformId;
        this.renderer = renderer;
        this.zone = zone;
        this.emptyArray = [];
        this.defaultModules = {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                // toggled buttons
                ['blockquote', 'code-block'],
                [{ header: 1 }, { header: 2 }],
                // custom button values
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ script: 'sub' }, { script: 'super' }],
                // superscript/subscript
                [{ indent: '-1' }, { indent: '+1' }],
                // outdent/indent
                [{ direction: 'rtl' }],
                // text direction
                [{ size: ['small', false, 'large', 'huge'] }],
                // custom dropdown
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [
                    { color: this.emptyArray.slice() },
                    { background: this.emptyArray.slice() }
                ],
                // dropdown with defaults from theme
                [{ font: this.emptyArray.slice() }],
                [{ align: this.emptyArray.slice() }],
                ['clean'],
                // remove formatting button
                ['link', 'image', 'video'] // link and image, video
            ]
        };
        this.format = 'html';
        this.style = {};
        this.strict = true;
        this.customOptions = [];
        this.onEditorCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onContentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.valueGetter = function (quillEditor, editorElement) {
            var html = editorElement.children[0].innerHTML;
            if (html === '<p><br></p>' || html === '<div><br><div>') {
                html = null;
            }
            var modelValue = html;
            if (_this.format === 'text') {
                modelValue = quillEditor.getText();
            }
            else if (_this.format === 'object') {
                modelValue = quillEditor.getContents();
            }
            return modelValue;
        };
        this.valueSetter = function (quillEditor, value, format) {
            if (_this.format === 'html') {
                return quillEditor.clipboard.convert(value);
            }
            return value;
        };
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    QuillEditorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformServer"])(this.platformId)) {
            return;
        }
        if (!Quill) {
            Quill = __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill.js");
        }
        var toolbarElem = this.elementRef.nativeElement.querySelector('[quill-editor-toolbar]');
        var modules = this.modules || this.defaultModules;
        var placeholder = 'Insert text here ...';
        if (this.placeholder !== null && this.placeholder !== undefined) {
            placeholder = this.placeholder.trim();
        }
        if (toolbarElem) {
            modules['toolbar'] = toolbarElem;
        }
        this.elementRef.nativeElement.insertAdjacentHTML('beforeend', '<div quill-editor-element></div>');
        this.editorElem = this.elementRef.nativeElement.querySelector('[quill-editor-element]');
        if (this.style) {
            Object.keys(this.style).forEach(function (key) {
                _this.renderer.setStyle(_this.editorElem, key, _this.style[key]);
            });
        }
        this.customOptions.forEach(function (customOption) {
            var newCustomOption = Quill.import(customOption.import);
            newCustomOption.whitelist = customOption.whitelist;
            Quill.register(newCustomOption, true);
        });
        this.quillEditor = new Quill(this.editorElem, {
            modules: modules,
            placeholder: placeholder,
            readOnly: this.readOnly || false,
            theme: this.theme || 'snow',
            formats: this.formats,
            bounds: this.bounds ? (this.bounds === 'self' ? this.editorElem : this.bounds) : this.doc.body,
            strict: this.strict,
            scrollingContainer: this.scrollingContainer
        });
        if (this.content) {
            if (this.format === 'object') {
                this.quillEditor.setContents(this.content, 'silent');
            }
            else if (this.format === 'text') {
                this.quillEditor.setText(this.content, 'silent');
            }
            else {
                var contents = this.quillEditor.clipboard.convert(this.content);
                this.quillEditor.setContents(contents, 'silent');
            }
            this.quillEditor.history.clear();
        }
        this.onEditorCreated.emit(this.quillEditor);
        // mark model as touched if editor lost focus
        this.selectionChangeEvent = this.quillEditor.on('selection-change', function (range, oldRange, source) {
            _this.zone.run(function () {
                _this.onSelectionChanged.emit({
                    editor: _this.quillEditor,
                    range: range,
                    oldRange: oldRange,
                    source: source
                });
                if (!range) {
                    _this.onModelTouched();
                }
            });
        });
        // update model if text changes
        this.textChangeEvent = this.quillEditor.on('text-change', function (delta, oldDelta, source) {
            var text = _this.quillEditor.getText();
            var content = _this.quillEditor.getContents();
            var html = _this.editorElem.children[0].innerHTML;
            if (html === '<p><br></p>' || html === '<div><br><div>') {
                html = null;
            }
            _this.zone.run(function () {
                _this.onModelChange(_this.valueGetter(_this.quillEditor, _this.editorElem));
                _this.onContentChanged.emit({
                    editor: _this.quillEditor,
                    html: html,
                    text: text,
                    content: content,
                    delta: delta,
                    oldDelta: oldDelta,
                    source: source
                });
            });
        });
    };
    QuillEditorComponent.prototype.ngOnDestroy = function () {
        if (this.selectionChangeEvent) {
            this.selectionChangeEvent.removeListener('selection-change');
        }
        if (this.textChangeEvent) {
            this.textChangeEvent.removeListener('text-change');
        }
    };
    QuillEditorComponent.prototype.ngOnChanges = function (changes) {
        if (!this.quillEditor) {
            return;
        }
        if (changes['readOnly']) {
            this.quillEditor.enable(!changes['readOnly'].currentValue);
        }
        if (changes['placeholder']) {
            this.quillEditor.root.dataset.placeholder =
                changes['placeholder'].currentValue;
        }
    };
    QuillEditorComponent.prototype.writeValue = function (currentValue) {
        this.content = currentValue;
        if (this.quillEditor) {
            if (currentValue) {
                if (this.format === 'text') {
                    this.quillEditor.setText(currentValue);
                }
                else {
                    this.quillEditor.setContents(this.valueSetter(this.quillEditor, this.content, this.format));
                }
                return;
            }
            this.quillEditor.setText('');
        }
    };
    QuillEditorComponent.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    QuillEditorComponent.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    QuillEditorComponent.prototype.validate = function () {
        if (!this.quillEditor) {
            return null;
        }
        var err = {}, valid = true;
        var textLength = this.quillEditor.getText().trim().length;
        if (this.minLength && textLength && textLength < this.minLength) {
            err.minLengthError = {
                given: textLength,
                minLength: this.minLength
            };
            valid = false;
        }
        if (this.maxLength && textLength > this.maxLength) {
            err.maxLengthError = {
                given: textLength,
                maxLength: this.maxLength
            };
            valid = false;
        }
        if (this.required && !textLength) {
            err.requiredError = {
                empty: true
            };
            valid = false;
        }
        return valid ? null : err;
    };
    QuillEditorComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'quill-editor',
                    template: "\n  <ng-content select=\"[quill-editor-toolbar]\"></ng-content>\n",
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return QuillEditorComponent; }),
                            multi: true
                        },
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return QuillEditorComponent; }),
                            multi: true
                        }
                    ],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
                },] },
    ];
    /** @nocollapse */
    QuillEditorComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] },] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
    ]; };
    QuillEditorComponent.propDecorators = {
        "format": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "theme": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "modules": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "readOnly": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "maxLength": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "minLength": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "required": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "formats": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "style": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "strict": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "scrollingContainer": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "bounds": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "customOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "onEditorCreated": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
        "onContentChanged": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
        "onSelectionChanged": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
        "valueGetter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "valueSetter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    };
    return QuillEditorComponent;
}());

//# sourceMappingURL=quill-editor.component.js.map

/***/ }),

/***/ "./node_modules/ngx-quill/src/quill.module.js":
/*!****************************************************!*\
  !*** ./node_modules/ngx-quill/src/quill.module.js ***!
  \****************************************************/
/*! exports provided: QuillModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuillModule", function() { return QuillModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quill_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quill-editor.component */ "./node_modules/ngx-quill/src/quill-editor.component.js");


var QuillModule = /** @class */ (function () {
    function QuillModule() {
    }
    QuillModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        _quill_editor_component__WEBPACK_IMPORTED_MODULE_1__["QuillEditorComponent"]
                    ],
                    imports: [],
                    exports: [_quill_editor_component__WEBPACK_IMPORTED_MODULE_1__["QuillEditorComponent"]],
                    providers: []
                },] },
    ];
    return QuillModule;
}());

//# sourceMappingURL=quill.module.js.map

/***/ }),

/***/ "./node_modules/primeng/button.js":
/*!****************************************!*\
  !*** ./node_modules/primeng/button.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/button/button */ "./node_modules/primeng/components/button/button.js"));

/***/ }),

/***/ "./node_modules/primeng/calendar.js":
/*!******************************************!*\
  !*** ./node_modules/primeng/calendar.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/calendar/calendar */ "./node_modules/primeng/components/calendar/calendar.js"));

/***/ }),

/***/ "./node_modules/primeng/checkbox.js":
/*!******************************************!*\
  !*** ./node_modules/primeng/checkbox.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/checkbox/checkbox */ "./node_modules/primeng/components/checkbox/checkbox.js"));

/***/ }),

/***/ "./node_modules/primeng/dropdown.js":
/*!******************************************!*\
  !*** ./node_modules/primeng/dropdown.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/dropdown/dropdown */ "./node_modules/primeng/components/dropdown/dropdown.js"));

/***/ }),

/***/ "./node_modules/primeng/editor.js":
/*!****************************************!*\
  !*** ./node_modules/primeng/editor.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/editor/editor */ "./node_modules/primeng/components/editor/editor.js"));

/***/ }),

/***/ "./node_modules/primeng/inputtextarea.js":
/*!***********************************************!*\
  !*** ./node_modules/primeng/inputtextarea.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/inputtextarea/inputtextarea */ "./node_modules/primeng/components/inputtextarea/inputtextarea.js"));

/***/ }),

/***/ "./node_modules/primeng/splitbutton.js":
/*!*********************************************!*\
  !*** ./node_modules/primeng/splitbutton.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/splitbutton/splitbutton */ "./node_modules/primeng/components/splitbutton/splitbutton.js"));

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/holidays/holidays.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/holidays/holidays.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-confirmDialog [style]=\"{ width: '50vw' }\"></p-confirmDialog>\r\n<div class=\"container-fluid\">\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <mat-tab-group>\r\n        <mat-tab label=\"All Holidays\">\r\n          <div class=\"row mt-2\">\r\n            <label class=\"mt-4 ml-xs-1 ml-4\">Select Location</label>\r\n            <div class=\"col-sm-3 col-lg-6 pl-5\">\r\n              <mat-form-field>\r\n                <mat-select [(ngModel)]=\"selectedLocation\" (ngModelChange)=\"changeTableContent()\">\r\n                  <mat-option *ngFor=\"let Locations of locations\" [(value)]=\"Locations.id\">\r\n                    {{Locations.viewValue}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>&nbsp;&nbsp;\r\n            </div>\r\n            <div class=\" col-lg-5\" style=\"text-align:right\">\r\n              <button mat-raised-button color=\"primary\" (click)='showDialogToAdd(\"Add\")'> Add Holiday</button>\r\n            </div>\r\n          </div>\r\n          <p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n\r\n          <mat-table [dataSource]=\"selected_Array1\" class=\"mat-elevation-z8 table \"\r\n            style=\"padding-left: 5px;padding-right: 5px;\" cdkTrapFocus >\r\n\r\n            <ng-container cdkColumnDef=\"name\">\r\n              <mat-header-cell *cdkHeaderCellDef> Name </mat-header-cell>\r\n              <mat-cell *cdkCellDef=\"let element\" data-label=\"name\"> {{element.name}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container cdkColumnDef=\"dates\">\r\n              <mat-header-cell *cdkHeaderCellDef> Date</mat-header-cell>\r\n              <mat-cell *cdkCellDef=\"let element\" data-label=\"dates\"> {{element.dates}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container cdkColumnDef=\"days\">\r\n              <mat-header-cell *cdkHeaderCellDef> Days </mat-header-cell>\r\n              <mat-cell *cdkCellDef=\"let element\" data-label=\"days\"> {{element.days}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container cdkColumnDef=\"Actions\">\r\n              <mat-header-cell *cdkHeaderCellDef>Actions </mat-header-cell>\r\n              <mat-cell *cdkCellDef=\"let element\" data-label=\"Actions\">\r\n                <a><i class=\"fas fa-pencil-alt\" (click)='showDialogToEdit(\"Edit\",element)'\r\n                    style=\"cursor: pointer;\"></i></a>\r\n                 <a><i class=\"fas fa-trash-alt\" (click)='confirmDelete( element)' style=\"cursor: pointer;\"></i></a>\r\n              </mat-cell>\r\n            </ng-container>\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\" ></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n          </mat-table>\r\n        </mat-tab>\r\n\r\n        <mat-tab label=\"My Holidays\">\r\n          <mat-table [dataSource]=\"dataSource1\" class=\" table1 mat-elevation-z8\"\r\n            style=\"padding-left: 5px;padding-right: 5px;\">\r\n            <ng-container cdkColumnDef=\"name\">\r\n              <mat-header-cell *cdkHeaderCellDef> Name </mat-header-cell>\r\n              <mat-cell *cdkCellDef=\"let element\" data-label=\"name\"> {{element.name}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container cdkColumnDef=\"dates\">\r\n              <mat-header-cell *cdkHeaderCellDef> Date </mat-header-cell>\r\n              <mat-cell *cdkCellDef=\"let element\" data-label=\"dates\"> {{element.dates}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container cdkColumnDef=\"days\">\r\n              <mat-header-cell *cdkHeaderCellDef> Days </mat-header-cell>\r\n              <mat-cell *cdkCellDef=\"let element\" data-label=\"days\"> {{element.days}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns1; sticky: true\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns1;\"></mat-row>\r\n          </mat-table>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n  </div>\r\n  <ng-template #matdialog >\r\n    <div id=\"mat-header\"  >\r\n      <i matTooltip=\"Close\" class=\"pi pi-times float-right\" (click)=\"this.dialog.closeAll();\"\r\n        style=\"cursor: pointer; color: red;\"></i>\r\n      <h1 mat-dialog-title> {{dialogTitle}} Holiday</h1>\r\n    </div>\r\n    <mat-dialog-content>\r\n      <form [formGroup]=\"holidayForm\">\r\n\r\n        <div class=\"row col-lg-12 col-md-12 col-sm-12\">\r\n          <div class=\"col-lg-3 col-md-4 col-sm-12\">\r\n            <label>Name<span class=\"text-danger\">*</span></label>\r\n          </div>\r\n          <div class=\"col-lg-5 col-md-4 col-sm-12\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"\" name=\"name\" formControlName=\"name\">\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"row col-lg-12 col-md-12 col-sm-12\">\r\n          <div class=\"col-lg-3 col-md-4 col-sm-12\">\r\n            <label>Date<span class=\"text-danger\">*</span></label>\r\n          </div>\r\n          <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n            <mat-form-field style=\"    width: 165px;\">\r\n              <input matInput [matDatepicker]=\"picker1\" placeholder=\"\" name=\"dates\" formControlName=\"dates\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker1></mat-datepicker>\r\n            </mat-form-field>&nbsp;&nbsp;\r\n          </div>\r\n        </div>\r\n        <div class=\"row col-lg-12 col-md-12 col-sm-12\">\r\n          <div class=\"col-lg-3 col-md-4 col-sm-12\">\r\n            <label>Days<span class=\"text-danger\">*</span></label>\r\n          </div>\r\n          <div class=\"col-lg-5 col-md-4 col-sm-12\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"\" name=\"days\" formControlName=\"days\" type=\"text\" maxlength=\"3\" >\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </mat-dialog-content>\r\n    <mat-dialog-actions align=\"end\" id=\"mat-footer\">\r\n      <button type=\"submit\" mat-raised-button color=\"primary\" (click)='onFormSubmit()'>Submit</button>\r\n    </mat-dialog-actions>\r\n  </ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/icons/icons.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/icons/icons.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\r\n</div>\r\n<div class=\"main-content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5 class=\"title\">Welcome to Zoom Teams</h5>\r\n          <!-- <p class=\"category\">\r\n            <a href=\"https://nucleoapp.com/?ref=1712\">NucleoApp</a>\r\n          </p> -->\r\n        </div>\r\n        <div class=\"card-body all-icons\">\r\n          <div class=\"row\">\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons users_single-02\"></i>\r\n                <p>Employee Management</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons business_money-coins\"></i>\r\n                <p>Payroll Management</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\r\n                <p>arrows-1_minimal-down</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons arrows-1_minimal-left\"></i>\r\n                <p>arrows-1_minimal-left</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons arrows-1_minimal-right\"></i>\r\n                <p>arrows-1_minimal-right</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons arrows-1_minimal-up\"></i>\r\n                <p>arrows-1_minimal-up</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons arrows-1_refresh-69\"></i>\r\n                <p>arrows-1_refresh-69</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons arrows-1_share-66 \"></i>\r\n                <p>arrows-1_share-66</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons business_badge\"></i>\r\n                <p>business_badge</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons business_bank\"></i>\r\n                <p>business_bank</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons business_briefcase-24\"></i>\r\n                <p>business_briefcase-24</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons business_bulb-63\"></i>\r\n                <p>business_bulb-63</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons business_chart-bar-32\"></i>\r\n                <p>business_chart-bar-32</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons business_chart-pie-36\"></i>\r\n                <p>business_chart-pie-36</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons business_globe\"></i>\r\n                <p>business_globe</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons business_money-coins\"></i>\r\n                <p>business_money-coins</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons clothes_tie-bow\"></i>\r\n                <p>clothes_tie-bow</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons design_app\"></i>\r\n                <p>design_app</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons design_bullet-list-67\"></i>\r\n                <p>design_bullet-list-67</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons design_image\"></i>\r\n                <p>design_image</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons design_palette\"></i>\r\n                <p>design_palette</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons design_scissors\"></i>\r\n                <p>design_scissors</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons design_vector\"></i>\r\n                <p>design_vector</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons design-2_html5\"></i>\r\n                <p>design-2_html5</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons design-2_ruler-pencil\"></i>\r\n                <p>design-2_ruler-pencil</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons emoticons_satisfied\"></i>\r\n                <p>emoticons_satisfied</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons files_box\"></i>\r\n                <p>files_box</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons files_paper\"></i>\r\n                <p>files_paper</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons files_single-copy-04\"></i>\r\n                <p>files_single-copy-04</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons health_ambulance\"></i>\r\n                <p>health_ambulance</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons loader_gear\"></i>\r\n                <p>loader_gear</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons loader_refresh\"></i>\r\n                <p>loader_refresh</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons location_bookmark\"></i>\r\n                <p>location_bookmark</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons location_compass-05\"></i>\r\n                <p>location_compass-05</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons location_map-big\"></i>\r\n                <p>location_map-big</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons location_pin\"></i>\r\n                <p>location_pin</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons location_world\"></i>\r\n                <p>location_world</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons media-1_album\"></i>\r\n                <p>media-1_album</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons media-1_button-pause\"></i>\r\n                <p>media-1_button-pause</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons media-1_button-play\"></i>\r\n                <p>media-1_button-play</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons media-1_button-power\"></i>\r\n                <p>media-1_button-power</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons media-1_camera-compact\"></i>\r\n                <p>media-1_camera-compact</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons media-2_note-03\"></i>\r\n                <p>media-2_note-03</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons media-2_sound-wave\"></i>\r\n                <p>media-2_sound-wave</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons objects_diamond\"></i>\r\n                <p>objects_diamond</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons objects_globe\"></i>\r\n                <p>objects_globe</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons objects_key-25\"></i>\r\n                <p>objects_key-25</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons objects_planet\"></i>\r\n                <p>objects_planet</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons objects_spaceship\"></i>\r\n                <p>objects_spaceship</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons objects_support-17\"></i>\r\n                <p>objects_support-17</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons objects_umbrella-13\"></i>\r\n                <p>objects_umbrella-13</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons education_agenda-bookmark\"></i>\r\n                <p>education_agenda-bookmark</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons education_atom\"></i>\r\n                <p>education_atom</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons education_glasses\"></i>\r\n                <p>education_glasses</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons education_hat\"></i>\r\n                <p>education_hat</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons education_paper\"></i>\r\n                <p>education_paper</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons shopping_bag-16\"></i>\r\n                <p>shopping_bag-16</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons shopping_basket\"></i>\r\n                <p>shopping_basket</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons shopping_box\"></i>\r\n                <p>shopping_box</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons shopping_cart-simple\"></i>\r\n                <p>shopping_cart-simple</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons shopping_credit-card\"></i>\r\n                <p>shopping_credit-card</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons shopping_delivery-fast\"></i>\r\n                <p>shopping_delivery-fast</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons shopping_shop\"></i>\r\n                <p>shopping_shop</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons shopping_tag-content\"></i>\r\n                <p>shopping_tag-content</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons sport_trophy\"></i>\r\n                <p>sport_trophy</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons sport_user-run\"></i>\r\n                <p>sport_user-run</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons tech_controller-modern\"></i>\r\n                <p>tech_controller-modern</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons tech_headphones\"></i>\r\n                <p>tech_headphones</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons tech_laptop\"></i>\r\n                <p>tech_laptop</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons tech_mobile\"></i>\r\n                <p>tech_mobile</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons tech_tablet\"></i>\r\n                <p>tech_tablet</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons tech_tv\"></i>\r\n                <p>tech_tv</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons tech_watch-time\"></i>\r\n                <p>tech_watch-time</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons text_align-center\"></i>\r\n                <p>text_align-center</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons text_align-left\"></i>\r\n                <p>text_align-left</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons text_bold\"></i>\r\n                <p>text_bold</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons text_caps-small\"></i>\r\n                <p>text_caps-small</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons gestures_tap-01\"></i>\r\n                <p>gestures_tap-01</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons transportation_air-baloon\"></i>\r\n                <p>transportation_air-baloon</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons transportation_bus-front-12\"></i>\r\n                <p>transportation_bus-front-12</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons travel_info\"></i>\r\n                <p>travel_info</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons travel_istanbul\"></i>\r\n                <p>travel_istanbul</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons ui-1_bell-53\"></i>\r\n                <p>ui-1_bell-53</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons ui-1_check\"></i>\r\n                <p>ui-1_check</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons ui-1_calendar-60\"></i>\r\n                <p>ui-1_calendar-60</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons ui-1_lock-circle-open\"></i>\r\n                <p>ui-1_lock-circle-open</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons ui-1_send\"></i>\r\n                <p>ui-1_send</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\r\n                <p>ui-1_settings-gear-63</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons ui-1_simple-add\"></i>\r\n                <p>ui-1_simple-add</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons ui-1_simple-delete\"></i>\r\n                <p>ui-1_simple-delete</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n                <p>ui-1_simple-remove</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons ui-1_zoom-bold\"></i>\r\n                <p>ui-1_zoom-bold</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons ui-2_chat-round\"></i>\r\n                <p>ui-2_chat-round</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons ui-2_favourite-28\"></i>\r\n                <p>ui-2_favourite-28</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons ui-2_like\"></i>\r\n                <p>ui-2_like</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons ui-2_settings-90\"></i>\r\n                <p>ui-2_settings-90</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons ui-2_time-alarm\"></i>\r\n                <p>ui-2_time-alarm</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons ui-1_email-85\"></i>\r\n                <p>ui-1_email-85</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons users_circle-08\"></i>\r\n                <p>users_circle-08</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n              <div class=\"font-icon-detail\">\r\n                <i class=\"now-ui-icons users_single-02\"></i>\r\n                <p>users_single-02</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/configuration/configuration.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/configuration/configuration.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-toast [style]=\"{ marginTop: '80px' }\"></p-toast>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row col-lg-12 col-md-12 col-sm-12\" style=\"margin-top: 14px; padding-left: 13px;\">\r\n    <form [formGroup]=\"editForm\" (ngSubmit)=\"onFormSubmit(editForm)\">\r\n    <input type=\"text\" [disabled]=\"isDisabled\" formControlName='name' value=\"New payment type\">\r\n    <i class=\"pi pi-pencil\" (click)=\"flip()\"></i>\r\n    <!-- <p *ngIf=\"!isEditable\"> {{name}} </p> -->\r\n    <!-- <mat-form-field *ngIf=\"isEditable\">\r\n      <input matInput placeholder=\"Input\" [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone: true}\">\r\n    </mat-form-field>\r\n    &nbsp;\r\n    <button *ngIf=\"!isEditable\" mat-fab color=\"primary\" (click)=\"onEditClick()\">\r\n      <mat-icon>edit</mat-icon>\r\n    </button>&nbsp; -->\r\n    <button *ngIf=\"isEditable\" type=\"submit\" mat-button mat-raised-button color='primary' >\r\n      Submit\r\n    </button>\r\n    </form>\r\n  </div>\r\n\r\n  <mat-tab-group>\r\n    <mat-tab label=\"Entitlement\">\r\n      <form [formGroup]=\"editForm\" (ngSubmit)=\"onFormSubmit(editForm)\">\r\n        <div class=\"row col-lg-12 col-md-12 col-sm-12\">\r\n          <div class=\"col-lg-2 col-md-2 col-sm-12\">\r\n            <label>Payment type</label>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-3 col-sm-12\">\r\n\r\n            <mat-form-field>\r\n              <mat-select formControlName='name'>\r\n                <mat-option *ngFor=\"let item of payment\" [(value)]=\"item.value\">\r\n                  {{item.viewValue}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n\r\n          <div class=\"col-lg-2 col-md-3 col-sm-12\">\r\n            <label>Carry Forward %</label>\r\n\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-3 col-sm-12\">\r\n\r\n            <mat-form-field>\r\n              <mat-select formControlName='carryforwardpercentage'>\r\n                <mat-option *ngFor=\"let item of carryforword\" [(value)]=\"item.id\">\r\n                  {{item.id}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <span></span>\r\n        <div class=\"row col-lg-12 col-md-12 col-sm-12\">\r\n          <div class=\"col-lg-2 col-md-2 col-sm-12\">\r\n            <label>Accural</label>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-4 col-sm-12\">\r\n            <mat-form-field style=\" width: 165px;\">\r\n              <input matInput [matDatepicker]=\"picker1\" placeholder=\"\" name=\"dates\" (dateChange)=\"formatDate($event.value)\" formControlName=\"accuralDate\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker1></mat-datepicker>\r\n            </mat-form-field>&nbsp;&nbsp;\r\n          </div>\r\n          <div class=\"col-lg-2 col-md-3 col-sm-12\">\r\n            <label>Expires in</label>\r\n          </div>\r\n          <div class=\"col-lg-2 col-md-3 col-sm-12\">\r\n\r\n            <mat-form-field>\r\n              <mat-select formControlName='expiresinmonths'>\r\n                <mat-option *ngFor=\"let item of expiresin\" [(value)]=\"item.id\">\r\n                  {{item.id}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>Months\r\n          </div>\r\n        </div>\r\n        <div class=\"row col-lg-12 col-md-12 col-sm-12\">\r\n          <div class=\"col-lg-2 col-md-2 col-sm-12\">\r\n            <label>Reset</label>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-4 col-sm-12\">\r\n            <mat-form-field style=\" width: 165px;\">\r\n              <input matInput [matDatepicker]=\"picker2\" placeholder=\"\" name=\"dates1\" formControlName=\"resetDate\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker2></mat-datepicker>\r\n            </mat-form-field>&nbsp;&nbsp;\r\n          </div>\r\n          <div class=\"col-lg-2 col-md-3 col-sm-12\">\r\n            <label>Encashment %</label>\r\n          </div>\r\n          <div class=\"col-lg-2 col-md-3 col-sm-12\">\r\n\r\n            <mat-form-field>\r\n              <mat-select formControlName='encashmentpercentage'>\r\n                <mat-option *ngFor=\"let item of encashment\" [(value)]=\"item.id\">\r\n                  {{item.id}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"row col-lg-12 col-md-12 col-sm-12\">\r\n          <div class=\"col-lg-2 col-md-2 col-sm-12\">\r\n            <label>Total days per year</label>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-4 col-sm-12\">\r\n\r\n            <mat-form-field>\r\n              <mat-select formControlName='totalleavesperyear'>\r\n                <mat-option *ngFor=\"let item of totaldays\" [(value)]=\"item.id\">\r\n                  {{item.id}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"row col-lg-12 col-md-12 col-sm-12\">\r\n          <div class=\"col-lg-2 col-md-2 col-sm-12\">\r\n            <label>Max continus leave allowed</label>\r\n          </div>\r\n          <div class=\"col-lg-2 col-md-4 col-sm-12\">\r\n\r\n            <mat-form-field>\r\n              <mat-select formControlName='maxcontinuousleave'>\r\n                <mat-option *ngFor=\"let item of maxleavesallowed\" [(value)]=\"item.id\">\r\n                  {{item.id}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"\">\r\n          <hr>\r\n          <p-footer class=\"button\">\r\n\r\n            <button *ngIf=\"!isEditable\" mat-fab color=\"primary\" (click)=\"onEditClick()\">\r\n              <mat-icon>edit</mat-icon>\r\n            </button>&nbsp;\r\n            <button *ngIf=\"isEditable\" type=\"submit\" mat-button mat-raised-button color='primary'>\r\n              Submit\r\n            </button>\r\n\r\n            <button type=\"submit\" mat-button mat-raised-button color='secondary'>\r\n              Cancel\r\n            </button>\r\n          </p-footer>\r\n\r\n\r\n        </div>\r\n      </form>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Applicable\">\r\n      <form [formGroup]=\"editForm\" (ngSubmit)=\"onFormSubmit(editForm)\">\r\n        <div class=\"row col-lg-12 col-md-12 col-sm-12\">\r\n          <div class=\"col-lg-2 col-md-2 col-sm-12\">\r\n            <label>Gender</label>\r\n          </div>\r\n          <div class=\"rows col-lg-2 col-md-4 col-sm-12\">\r\n            <mat-form-field>\r\n              <mat-select formControlName='genderids'>\r\n                <mat-option *ngFor=\"let item of gender\" [(value)]=\"item.name\">\r\n                  {{item.name}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"row col-lg-12 col-md-12 col-sm-12\">\r\n          <div class=\"col-lg-2 col-md-2 col-sm-12\">\r\n            <label>Department</label>\r\n          </div>\r\n          <div class=\"rows col-lg-2 col-md-4 col-sm-12\">\r\n            <mat-form-field>\r\n              <!-- <mat-label>Department</mat-label> -->\r\n              <mat-select formControlName=\"departmentids\" multiple>\r\n                <mat-option *ngFor=\"let topping of arr1\" [value]=\"topping.description\">{{topping.description}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"row col-lg-12 col-md-12 col-sm-12\">\r\n          <div class=\"col-lg-2 col-md-2 col-sm-12\">\r\n            <label>Designation</label>\r\n          </div>\r\n          <div class=\"rows col-lg-2 col-md-4 col-sm-12\">\r\n\r\n            <mat-form-field>\r\n              <!-- <mat-label>Designation</mat-label> -->\r\n              <mat-select formControlName=\"designationids\" multiple>\r\n                <mat-option *ngFor=\"let topping of arr3\" [value]=\"topping.description\">{{topping.description}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"row col-lg-12 col-md-12 col-sm-12\">\r\n          <div class=\"col-lg-2 col-md-2 col-sm-12\">\r\n            <label>Location</label>\r\n          </div>\r\n          <div class=\"rows col-lg-2 col-md-4 col-sm-12\">\r\n\r\n            <mat-form-field>\r\n              <!-- <mat-label>Location</mat-label> -->\r\n              <mat-select formControlName=\"locationids\" multiple>\r\n                <mat-option *ngFor=\"let topping of ListOfLocations\" [value]=\"topping.city\">{{topping.city}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"row col-lg-12 col-md-12 col-sm-12\">\r\n          <div class=\"col-lg-2 col-md-2 col-sm-12\">\r\n            <label>Role</label>\r\n          </div>\r\n          <div class=\"rows col-lg-2 col-md-4 col-sm-12\">\r\n\r\n            <mat-form-field>\r\n              <!-- <mat-label>Role</mat-label> -->\r\n              <mat-select formControlName=\"roleids\" multiple>\r\n                <mat-option *ngFor=\"let topping of arr2\" [value]=\"topping.name\">{{topping.name}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div class=\"\">\r\n        <hr>\r\n        <p-footer class=\"button\">\r\n          <button type=\"submit\" mat-button mat-raised-button color='primary'>Submit</button>\r\n          <button type=\"button\" pButton icon=\"pi pi-close\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\r\n        </p-footer>\r\n\r\n\r\n      </div>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Restriction\">\r\n      <form style=\"margin-top: 10px;\" [formGroup]=\"editForm\">\r\n        <div class=\"row col-lg-12 col-md-12 col-sm-12\">\r\n          <div class=\"col-lg-2 col-md-3 col-sm-12\">\r\n            <label>Weekends between leaves</label>\r\n          </div>\r\n          <div class=\"col-lg-2 col-md-3 col-sm-12\">\r\n            <label>\r\n              <p-radioButton class=\"radio\" name=\"group1\"></p-radioButton> Do not count\r\n            </label>\r\n          </div>\r\n          <div class=\"col-lg-2 col-md-3 col-sm-12\">\r\n            <label>\r\n              <p-radioButton class=\"radio\" name=\"group1\"></p-radioButton> Count after days\r\n            </label>\r\n          </div>\r\n          <div class=\"col-lg-2 col-md-3 col-sm-12\">\r\n\r\n            <mat-form-field>\r\n              <mat-select formControlName='includeweekendsafterdays'>\r\n                <mat-option *ngFor=\"let item of weekendsbetweenleaves\" [(value)]=\"item.id\">\r\n                  {{item.id}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"row col-lg-12 col-md-12 col-sm-12\">\r\n          <div class=\"col-lg-2 col-md-3 col-sm-12\">\r\n            <label>Holidays between leaves</label>\r\n          </div>\r\n          <div class=\"col-lg-2 col-md-3 col-sm-12\">\r\n            <label>\r\n              <p-radioButton class=\"radio\" name=\"group1\"></p-radioButton> Do not count\r\n            </label>\r\n          </div>\r\n          <div class=\"col-lg-2 col-md-3 col-sm-12\">\r\n            <label>\r\n              <p-radioButton class=\"radio\" name=\"group1\"></p-radioButton> Count after days\r\n            </label>\r\n          </div>\r\n          <div class=\"col-lg-2 col-md-3 col-sm-12\">\r\n\r\n            <mat-form-field>\r\n              <mat-select formControlName='includewholidaysafterdays'>\r\n                <mat-option *ngFor=\"let item of holydaysbetweenleaves\" [(value)]=\"item.id\">\r\n                  {{item.id}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"row col-lg-12 col-md-12 col-sm-12\">\r\n          <div class=\"col-lg-2 col-md-3 col-sm-12\">\r\n            <label>While applying, exceed leave balance</label>\r\n          </div>\r\n          <div class=\"col-lg-2 col-md-3 col-sm-12\">\r\n            <label>\r\n              <p-radioButton class=\"radio\" name=\"group1\"></p-radioButton> Allow\r\n            </label>\r\n          </div>\r\n          <div class=\"col-lg-2 col-md-3 col-sm-12\">\r\n            <label>\r\n              <p-radioButton class=\"radio\" name=\"group1\"></p-radioButton> Do not allow\r\n            </label>\r\n          </div>\r\n          <div class=\"col-lg-2 col-md-3 col-sm-12\">\r\n            <label>\r\n              <p-radioButton class=\"radio\" name=\"group1\"></p-radioButton> Allow and consider as LOP\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"row col-lg-12 col-md-12 col-sm-12\">\r\n          <div class=\"col-lg-2 col-md-3 col-sm-12\">\r\n            <label>Allow half day</label>\r\n          </div>\r\n\r\n          <div class=\"col-lg-2 col-md-2 col-sm-12\">\r\n            <p-checkbox></p-checkbox>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"row col-lg-12 col-md-12 col-sm-12\">\r\n          <div class=\"col-lg-2 col-md-3 col-sm-12\">\r\n            <label>Leave submit before</label>\r\n          </div>\r\n          <div class=\"col-lg-2 col-md-3 col-sm-12\">\r\n\r\n            <mat-form-field>\r\n              <mat-select formControlName='requestLeaveBeforeDays'>\r\n                <mat-option *ngFor=\"let item of leavesubmitfor\" [(value)]=\"item.id\">\r\n                  {{item.id}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"row col-lg-12 col-md-12 col-sm-12\">\r\n          <div class=\"col-lg-2 col-md-3 col-sm-12\">\r\n            <label>Enable file upload</label>\r\n          </div>\r\n          <div class=\"col-lg-2 col-md-2 col-sm-12\">\r\n            <p-checkbox></p-checkbox>\r\n          </div>\r\n        </div>\r\n      </form>\r\n\r\n      <div class=\"\">\r\n        <hr>\r\n        <p-footer class=\"button\">\r\n          <button type=\"submit\" mat-button mat-raised-button color='primary'>Submit</button>\r\n          <button type=\"button\" pButton icon=\"pi pi-close\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\r\n        </p-footer>\r\n\r\n\r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/employesearch/employesearch.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/employesearch/employesearch.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <mat-form-field class=\"design\">\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"col-md-6\">\r\n      <mat-form-field class=\"design1\">\r\n        <mat-label> Select Locations</mat-label>\r\n        <mat-select [(ngModel)]=\"selectedLocation\" (ngModelChange)=\"changeTableContent()\">\r\n          <mat-option *ngFor=\"let Locations of location\" [value]=\"Locations.id\" [(value)]=\"selected_Array\">\r\n            {{Locations.viewValue}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n  <mat-table [dataSource]=\"selected_Array\" class=\"mat-elevation-z8 table1\">\r\n    <ng-container matColumnDef=\"Name\">\r\n      <mat-header-cell *matHeaderCellDef> Name</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\" data-label=\"Name\"> {{element.Name}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"Actions\">\r\n      <mat-header-cell *matHeaderCellDef> Actions</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"showDialogToAdd(element)\">View Details</button>\r\n      </mat-cell>\r\n    </ng-container>\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky:true\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n  </mat-table>\r\n</div>\r\n\r\n\r\n<ng-template #matdialog>\r\n  <div id=\"mat-header\">\r\n    <i matTooltip=\"Close\" class=\"pi pi-times float-right\" (click)=\"this.dialog.closeAll();\"\r\n      style=\"cursor: pointer; color: red;\"></i>\r\n    <h1 mat-dialog-title>Employee Leave Details</h1>\r\n  </div>\r\n\r\n  <div>\r\n    <ul>\r\n      <li>\r\n        <mat-label style=\"font-size: 22px;\">\r\n          Total Leaves {{totalleaves}}\r\n        </mat-label>\r\n      </li>\r\n      <li>\r\n        <mat-label style=\"font-size: 22px;\">\r\n          Earned Leaves {{ernedleaves}}\r\n        </mat-label>\r\n      </li>\r\n      <li>\r\n        <mat-label style=\"font-size: 22px;\" >\r\n          Leaves Used {{leavesused}}\r\n        </mat-label>\r\n      </li>\r\n      <li>\r\n        <mat-label style=\"font-size: 22px;\">\r\n          Sick Leaves {{sickleaves}}\r\n        </mat-label>\r\n      </li>\r\n      <li>\r\n        <mat-label style=\"font-size: 22px;\">\r\n          Casual Leaves {{casualleaves}}\r\n        </mat-label>\r\n      </li>\r\n    </ul>\r\n\r\n  </div>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/employetimesheet/employetimesheet.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/employetimesheet/employetimesheet.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n\r\n<div class=\"container-fluid\">\r\n  <p-toast [style]=\"{ marginTop: '80px' }\"></p-toast>\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-4\"><i style=\"margin:3px 3px 0 0\"></i>\r\n            <input\r\n              class=\"form-control\"\r\n              type=\"text\"\r\n              pInputText\r\n              placeholder=\"Search by Staff Name \"\r\n              (input)=\"search.filterGlobal($event.target.value, 'contains')\"/></div>\r\n\r\n\r\n              <p-tabView>\r\n\r\n                  <button\r\n                    pButton\r\n                    type=\"button\"\r\n                    (click)=\"addDialog()\"\r\n                    label=\"Add Timesheet\"\r\n                  ></button>\r\n\r\n    <p-table  #search  [value]=\"emp_deta\" [responsive]=\"true\"  [globalFilterFields]=\"['name']\">\r\n        <ng-template pTemplate=\"header\">\r\n          <tr>\r\n\r\n            <th>Employee Name</th>\r\n            <th>Project Name</th>\r\n            <th>Module Name</th>\r\n            <th>Task Description</th>\r\n            <th>Time Spent In Hours</th>\r\n            <th>FromDate</th>\r\n\r\n            <th>Status</th>\r\n            <th>option</th>\r\n            <th>Actions</th>\r\n\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-details>\r\n          <tr>\r\n\r\n\r\n            <td><span class=\"ui-column-title\">Name</span>{{ details.name }}</td>\r\n            <td><span class=\"ui-column-title\">Project Name</span>{{ details.projectname }}</td>\r\n            <td><span class=\"ui-column-title\">Module Name</span>{{ details.modulename }}</td>\r\n            <td><span class=\"ui-column-title\">Task Description</span>{{ details.taskdescription}}</td>\r\n            <td><span class=\"ui-column-title\">From Date</span>{{ details.fromdate }}</td>\r\n            <td><span class=\"ui-column-title\">Time Spent</span>{{ details.timespent}}</td>\r\n            <td><span class=\"ui-column-title\">Status</span>{{ details.status }}</td>\r\n              <td>\r\n              <p-dropdown\r\n                [options]=\"timesheetstatus\"\r\n                placeholder=\"select\"\r\n                optionLabel=\"name\"\r\n                [(ngModel)] = 'details.status'\r\n                (onChange)='chanestaus(details)'\r\n              ></p-dropdown>\r\n            </td>\r\n\r\n            <td class=\"iconaligncenter\">\r\n                <i class=\"pi pi-user-edit\"  style=\"cursor: pointer;\"  (click)=\"showDialogToEdit(details)\"></i>|\r\n                <i class=\"pi pi-trash\" (click)=\"onDelete()\" style=\"cursor: pointer;\"></i>\r\n              </td>\r\n\r\n          </tr>\r\n        </ng-template>\r\n      </p-table>\r\n\r\n</p-tabView>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"container\">\r\n    <p-dialog\r\n    header=\"RequestForLEave\"\r\n    [(visible)]=\"display\"\r\n    [modal]=\"true\"\r\n    [responsive]=\"true\"\r\n    [style]=\"{ width: '500px', minWidth: '300px' }\"\r\n    [minY]=\"70\"\r\n    [maximizable]=\"true\"\r\n\r\n    [baseZIndex]=\"10000\"\r\n    [positionTop] =\"10\"\r\n    [style] =\"{'minWidth': '500px !important'}\"\r\n  >\r\n  <form [formGroup]=\"taskreactive\" (ngSubmit)=\"onFormsubmit()\">\r\n  <div class=\"container-fluid\">\r\n\r\n      <div class=\"ui-g-12\">\r\n      <div class=\"form-group row\">\r\n        <label for=\"leaveDateFrom\" class=\"col-sm-4 col-form-label\"\r\n          >Employee Name<span class=\"text-danger\">*</span></label\r\n        >\r\n        <div class=\"col-sm-8\">\r\n          <input\r\n            type=\"text\"\r\n            id=\"leaveDateFrom\"\r\n            class=\"form-control\"\r\n            formControlName=\"name\"\r\n            placeholder=\"Employee Name\" autocomplete=\"off\"\r\n\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"leaveDateFrom\" class=\"col-sm-4 col-form-label\"\r\n          >Project Name<span class=\"text-danger\">*</span></label\r\n        >\r\n        <div class=\"col-sm-8\">\r\n          <input\r\n            type=\"text\"\r\n            id=\"leaveDateFrom\"\r\n            class=\"form-control\"\r\n            formControlName=\"projectname\"\r\n            placeholder=\"Project Name\"\r\n            autocomplete=\"off\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"leaveDateFrom\" class=\"col-sm-4 col-form-label\"\r\n          >Module Name<span class=\"text-danger\">*</span></label\r\n        >\r\n        <div class=\"col-sm-8\">\r\n          <input\r\n            type=\"text\"\r\n            id=\"leaveDateFrom\"\r\n            class=\"form-control\"\r\n            formControlName=\"modulename\"\r\n            placeholder=\"Module Name\"\r\n\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"leaveDateFrom\" class=\"col-sm-4 col-form-label\"\r\n          >Task Description<span class=\"text-danger\">*</span></label\r\n        >\r\n        <div class=\"col-sm-8\">\r\n          <input\r\n            type=\"text\"\r\n            id=\"leaveDateFrom\"\r\n            class=\"form-control\"\r\n            formControlName=\"taskdescription\"\r\n            placeholder=\"Task Description\"\r\n\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"leaveDateFrom\" class=\"col-sm-4 col-form-label\"\r\n          >Date From<span class=\"text-danger\">*</span></label\r\n        >\r\n        <div class=\"col-sm-8\">\r\n          <input\r\n            type=\"text\"\r\n            id=\"leaveDateFrom\"\r\n            class=\"form-control\"\r\n            formControlName=\"fromdate\"\r\n            placeholder=\"Date From\"\r\n\r\n          />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label for=\"leaveDateTo\" class=\"col-sm-4 col-form-label\"\r\n          >Time Spent in Hours<span class=\"text-danger\">*</span></label\r\n        >\r\n        <div class=\"col-sm-8\">\r\n          <input\r\n            type=\"text\"\r\n            id=\"leaveDateTo\"\r\n            class=\"form-control\"\r\n            formControlName=\"timespent\"\r\n            bsDatepicker\r\n            placeholder=\"Timespent \"\r\n\r\n          />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label for=\"leaveDateTo\" class=\"col-sm-4 col-form-label\"\r\n          >Status<span class=\"text-danger\">*</span></label\r\n        >\r\n        <div class=\"col-sm-8\">\r\n          <input\r\n            type=\"text\"\r\n            id=\"leaveDateTo\"\r\n            class=\"form-control\"\r\n            formControlName=\"status\"\r\n            bsDatepicker\r\n            placeholder=\"Status \"\r\n\r\n          />\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n</div>\r\n</form>\r\n      <p-footer>\r\n        <button type=\"submit\" pButton label=\"Submit\" (click)=\"onFormsubmit()\"></button>\r\n        <button\r\n          type=\"button\"\r\n          pButton\r\n          icon=\"pi pi-close\"\r\n          (click)=\"display = false\"\r\n          label=\"No\"\r\n          class=\"ui-button-secondary\"\r\n        ></button>\r\n      </p-footer>\r\n\r\n  </p-dialog>\r\n</div>\r\n</div> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\" style=\"text-align:left\">\r\n      <mat-form-field style=\"padding-right: 80%;\">\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-lg-6\" style=\"text-align:right\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"showDialogToAdd('Add')\">Add Timesheet</button>\r\n    </div>\r\n  </div>\r\n  <p-toast [style]=\"{ marginTop: '80px' }\"></p-toast>\r\n  <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 table1\">\r\n    <div>\r\n      <ng-container matColumnDef=\"Name\">\r\n\r\n        <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\" data-label=\"Name\">{{element.name}}</mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"Project Name\">\r\n        <mat-header-cell *matHeaderCellDef>Project Name</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\" data-label=\"Project Name\">{{element.projectname}}</mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"Module Name\">\r\n        <mat-header-cell *matHeaderCellDef>Module Name</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\" data-label=\"Module Name\">{{element.modulename}}</mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"Task Description\">\r\n        <mat-header-cell *matHeaderCellDef>Task Description</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\" data-label=\"Project Name\">{{element.taskdescription}}</mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"From Date\">\r\n        <mat-header-cell *matHeaderCellDef>From Date</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\" data-label=\"Task Description\">{{element.fromdate}}</mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"Time Spent\">\r\n        <mat-header-cell *matHeaderCellDef>Time Spent</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\" data-label=\"Time Spent\">{{element.timespent}}</mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"Status\">\r\n        <mat-header-cell *matHeaderCellDef>Status</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\" data-label=\"Status\">{{element.status}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container cdkColumnDef=\"Actions\">\r\n        <mat-header-cell *cdkHeaderCellDef>Actions </mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let element\" data-label=\"Actions\">\r\n         <a> <i class=\"fas fa-pencil-alt\" (click)=\"showDialogToEdit(element,'Edit')\" style=\"cursor: pointer;\"></i></a>\r\n          <a><i class=\"fas fa-trash-alt\" (click)='confirmDelete(element)' style=\"cursor: pointer;\"></i></a>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns;sticky: true\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n    </div>\r\n  </mat-table>\r\n</div>\r\n<p-confirmDialog [style]=\"{ width: '50vw' }\"></p-confirmDialog>\r\n\r\n\r\n<ng-template #matdialog>\r\n\r\n    <div id=\"mat-header\">\r\n      <i matTooltip=\"Close\" class=\"pi pi-times float-right\" (click)=\"this.dialog.closeAll();\"\r\n        style=\"cursor: pointer; color: red;\"></i>\r\n    <h1 mat-dialog-title >{{dialogTitle}} Timesheet</h1>\r\n    </div>\r\n  \r\n\r\n  <div>\r\n    <form class=\"example-container\" [formGroup]=\"taskreactive\" (ngSubmit)='onFormSubmit()'>\r\n      <mat-form-field>\r\n        <label>Name</label>\r\n        <input matInput formControlName=\"name\" name=\"name\">\r\n      </mat-form-field>&nbsp;&nbsp;\r\n      <mat-form-field>\r\n        <label>project Name</label>\r\n        <input matInput name=\"projectname\" formControlName=\"projectname\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <label>Module Name</label>\r\n        <input matInput name=\"modulename\" formControlName=\"modulename\">\r\n      </mat-form-field>\r\n\r\n\r\n      <mat-form-field>\r\n        <label>Task Description</label>\r\n        <input matInput name=\"taskdescription\" formControlName=\"taskdescription\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <label>From Date</label>\r\n        <input matInput [matDatepicker]=\"picker1\" placeholder=\"\" name=\"fromdate\" formControlName=\"fromdate\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker1></mat-datepicker>\r\n      </mat-form-field>\r\n\r\n\r\n      <mat-form-field>\r\n        <label>Time Spent</label>\r\n        <input matInput name=\"timespent\" formControlName=\"timespent\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n\r\n        <label>Status</label>\r\n        <input matInput name=\"status\" formControlName=\"status\">\r\n      </mat-form-field>\r\n\r\n      <div mat-dialog-actions style=\"float: right;\">\r\n        <button type=\"submit\" mat-button>Submit</button>\r\n        <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Cancel</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/leavetype/leavetype.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/leavetype/leavetype.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\" \" style=\"text-align:right\">\r\n  <button mat-raised-button color=\"primary\" (click)='showDialogToAdd()'> Add New Configuration</button>\r\n  </div>\r\n  <p-toast [style]=\"{ marginTop: '80px' }\"></p-toast>\r\n  <mat-table [dataSource]=\"leavetypedetails\" class=\"mat-elevation-z8 \">\r\n  <div>\r\n  <ng-container matColumnDef=\"Name\">\r\n  <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>\r\n  <mat-cell *matCellDef=\"let element\" data-label=\"name\">{{element.organizationName}}</mat-cell>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"Leave Type\">\r\n  <mat-header-cell *matHeaderCellDef>Leave Type</mat-header-cell>\r\n  <mat-cell *matCellDef=\"let element\" data-label=\"leavetype\">{{element.name}}</mat-cell>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"Total Days Per year\">\r\n  <mat-header-cell *matHeaderCellDef>Total Days Per year</mat-header-cell>\r\n  <mat-cell *matCellDef=\"let element\" data-label=\"Total Days Per year\">{{element.totalleavesperyear}}</mat-cell>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"Location Id\">\r\n  <mat-header-cell *matHeaderCellDef>Location </mat-header-cell>\r\n  <mat-cell *matCellDef=\"let element\" data-label=\"Location Id\">{{element.locationids}}</mat-cell>\r\n  </ng-container>\r\n\r\n\r\n  <ng-container matColumnDef=\"Gender\">\r\n  <mat-header-cell *matHeaderCellDef>Gender</mat-header-cell>\r\n  <mat-cell *matCellDef=\"let element\" data-label=\"Gender\">{{element.genderids}}</mat-cell>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"Department\">\r\n  <mat-header-cell *matHeaderCellDef>Department</mat-header-cell>\r\n  <mat-cell *matCellDef=\"let element\" data-label=\"Department\">{{element.departmentids}}</mat-cell>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"Designation\">\r\n  <mat-header-cell *matHeaderCellDef>Designation</mat-header-cell>\r\n  <mat-cell *matCellDef=\"let element\" data-label=\"Designation\">{{element.designationids}}</mat-cell>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"Role\">\r\n  <mat-header-cell *matHeaderCellDef>Role</mat-header-cell>\r\n  <mat-cell *matCellDef=\"let element\" data-label=\"Role\">{{element.roleids}}</mat-cell>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"Actions\">\r\n  <mat-header-cell *matHeaderCellDef>Actions </mat-header-cell>\r\n  <mat-cell *matCellDef=\"let element\" data-label=\"Actions\">\r\n  <i class=\"fa fa-book\" aria-hidden=\"true\" (click)='onClick(element)'></i>\r\n  </mat-cell>\r\n  </ng-container>\r\n\r\n  <mat-header-row *matHeaderRowDef=\"displayedColumns;sticky: true\"></mat-header-row>\r\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n  </div>\r\n  </mat-table>\r\n  </div>\r\n  <p-confirmDialog [style]=\"{ width: '50vw' }\"></p-confirmDialog>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/leavecomp/leavecomp.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/leavecomp/leavecomp.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-confirmDialog [style]=\"{ width: '50vw' }\"></p-confirmDialog>\r\n\r\n<p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n\r\n<div class=\"container-fluid\">\r\n\r\n  <div class=\"row\" *ngIf=\"role != 'HR'\">\r\n    <div class=\"col-xl-3 col-md-6 mb-4 col-xs-6\">\r\n      <div class=\"card bg-gradient-danger border-left-primary shadow h-100 py-2 heading-footer\">\r\n\r\n        <div class=\"row no-gutters align-items-center\">\r\n          <div class=\"col mr-2\" style=\"text-align: center;font-size: 10px;\">\r\n\r\n            <div class=\"h5 mb-0 font-weight-bold text-gray-800\">Total Balance Leave 10</div>\r\n            <div class=\"col mr-2\" style=\"text-align: center;font-size: 10px;\">\r\n\r\n              <div class=\"h5 font-weight-bold text-gray-800\"></div>\r\n              <div class=\"text-sm font-weight-bold text-uppercase mb-1 cursor-pointer\"\r\n                (click)=\" openDialogWithoutRef('SickLeave') \">\r\n                <h6>Sick&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>3/10</span></h6>\r\n              </div>\r\n              <div class=\"text-sm font-weight-bold text-uppercase mb-1 cursor-pointer\"\r\n                (click)=\" openDialogWithoutRef('Casual')\">\r\n                Casual <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3/10</span>\r\n              </div>\r\n              <div class=\"text-sm font-weight-bold text-uppercase mb-1 cursor-pointer\"\r\n                (click)=\" openDialogWithoutRef('Emergency')\">\r\n                Emergency <span>&nbsp;4/10</span>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"col-auto\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-xl-3 col-md-6 mb-4 col-xs-6\">\r\n      <div class=\"card border-left-primary shadow h-100 py-2 heading-footer\">\r\n        <div class=\"row no-gutters align-items-center\">\r\n          <div class=\"col mr-2\" style=\"text-align: center;font-size: 10px;\">\r\n\r\n            <div class=\"h5 font-weight-bold text-gray-800\">Total Requested 06</div>\r\n            <div class=\"text-sm font-weight-bold text-uppercase mb-1 cursor-pointer\" (click)=\"navigateTab1('Approved')\">\r\n              <h6> Approved Request <span>2/6</span></h6>\r\n            </div>\r\n            <div class=\"text-sm font-weight-bold text-uppercase mb-1 cursor-pointer\" (click)=\"navigateTab('Pending')\">\r\n              Pending Request <span>&nbsp;3/6</span>\r\n            </div>\r\n            <div class=\"text-sm font-weight-bold text-uppercase mb-1 cursor-pointer\" (click)=\"navigateTab('Cancelled')\">\r\n              Cancel Request <span>&nbsp;1/6</span>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"col-auto\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <div class=\"mat-tab\">\r\n        <mat-tab-group class=\"res\" #selectedTab>\r\n\r\n          <mat-tab label=\"Leaves\" *ngIf=\"role != 'HR'\">\r\n            <div class=\"example-container mat-elevation-z8\">\r\n              <div class=\"\">\r\n                <mat-form-field>\r\n                  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n\r\n                </mat-form-field>&nbsp;&nbsp;\r\n                <mat-form-field>\r\n                  <mat-label>Status filter</mat-label>\r\n                  <mat-select (ngModelChange)=\"selectedFilter($event.value)\">\r\n                    <mat-option *ngFor=\"let food of arr\" [value]=\"food.leaveId\">\r\n                      {{food.lTypeName}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <button mat-button mat-raised-button color='primary' class=\"float-right mt-2\" type=\"button\"\r\n                  (click)=\"addDialog()\">Add Leave</button>\r\n              </div>\r\n\r\n\r\n              <div>\r\n                <mat-table [dataSource]=\"dataSource\" class=\"res material-table-scroll\">\r\n                  <ng-container matColumnDef=\"leaveType\">\r\n                    <mat-header-cell *matHeaderCellDef> LeaveType </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\" data-label=\"leaveType\">\r\n                      {{row.leaveType}}\r\n\r\n                    </mat-cell>\r\n                  </ng-container>\r\n                  <ng-container matColumnDef=\"startDate\">\r\n                    <mat-header-cell *matHeaderCellDef> From </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\" data-label=\"startDate\"> {{row.startDate | date:'dd-MM-yyyy'}}\r\n                    </mat-cell>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"endDate\">\r\n                    <mat-header-cell *matHeaderCellDef> To </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\" data-label=\"endDate\"> {{row.endDate | date:'dd-MM-yyyy'}}</mat-cell>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"numberofDays\">\r\n                    <mat-header-cell *matHeaderCellDef> Days </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\" data-label=\"numberofDays\">\r\n                      {{row.numberofDays}}\r\n\r\n                    </mat-cell>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"requesterComments\">\r\n                    <mat-header-cell *matHeaderCellDef> Reasons </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\" data-label=\"requesterComments\"> {{row.requesterComments}}\r\n                    </mat-cell>\r\n                  </ng-container>\r\n\r\n\r\n                  <ng-container matColumnDef=\"leaveStatus\">\r\n                    <mat-header-cell *matHeaderCellDef> Status </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\" data-label=\"leaveStatus\"> {{row.leaveStatus}} </mat-cell>\r\n                  </ng-container>\r\n\r\n\r\n                  <ng-container matColumnDef=\"action\">\r\n                    <mat-header-cell *matHeaderCellDef> Action </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\" data-label=\"Action\">\r\n\r\n                      <a><i class=\"pi pi-user-edit\" (click)=\"openedit(row)\"></i></a>\r\n\r\n                      <a><i class=\"pi pi-trash\" style=\"cursor: pointer;\" (click)=\"confirmDelete(row)\"></i></a>\r\n\r\n                    </mat-cell>\r\n                  </ng-container>\r\n\r\n\r\n                  <mat-header-row *matHeaderRowDef=\"displayedColumns sticky:true\"></mat-header-row>\r\n                  <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n                  </mat-row>\r\n                </mat-table>\r\n\r\n                <!-- <mat-paginator #paginator [pageSizeOptions]=\"[ 5,10, 25, 100]\"></mat-paginator> -->\r\n              </div>\r\n            </div>\r\n          </mat-tab>\r\n\r\n          <mat-tab label=\"Requests\">\r\n            <div class=\"example-container mat-elevation-z8\">\r\n              <div>\r\n                <mat-form-field class=\"row col-sm-12\">\r\n                  <input matInput class=\"row col-sm-12\" (keyup)=\"applyFilter1($event.target.value)\" placeholder=\"Filter\">\r\n                </mat-form-field>\r\n                <i (click)=\"refresh()\" class=\"fas fa-sync float-right mt-2\"></i>\r\n              </div>\r\n              <mat-table [dataSource]=\"requestDataSource\" class=\"res\">\r\n                <ng-container matColumnDef=\"id\">\r\n                  <mat-header-cell *matHeaderCellDef> UserId </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\" data-label=\"id\">\r\n                    {{row.id}}\r\n\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"leaveType\">\r\n                  <mat-header-cell *matHeaderCellDef> LeaveType </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\" data-label=\"leaveType\">\r\n                    {{row.leaveType}}\r\n\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"startDate\">\r\n                  <mat-header-cell *matHeaderCellDef> From </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\" data-label=\"startDate\"> {{row.startDate | date:'dd-MM-yyyy'}}\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"endDate\">\r\n                  <mat-header-cell *matHeaderCellDef> To </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\" data-label=\"endDate\"> {{row.endDate | date:'dd-MM-yyyy'}}</mat-cell>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"numberofDays\">\r\n                  <mat-header-cell *matHeaderCellDef> Days </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\" data-label=\"numberofDays\"> {{row.numberofDays}}</mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- <ng-container matColumnDef=\"requesterComments\">\r\n                    <mat-header-cell *matHeaderCellDef> Reasons </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\" data-label=\"requesterComments\"> {{row.requesterComments}} </mat-cell>\r\n                  </ng-container> -->\r\n                <ng-container matColumnDef=\"approverComments\">\r\n                  <mat-header-cell *matHeaderCellDef>Comments </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\" data-label=\"approverComments\"> {{row.approverComments}} </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"leaveStatus\">\r\n                  <mat-header-cell *matHeaderCellDef> Status </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\" data-label=\"leaveStatus\"> {{row.leaveStatus}} </mat-cell>\r\n                </ng-container>\r\n\r\n\r\n                <!-- <ng-container matColumnDef=\"action\">\r\n                    <mat-header-cell *matHeaderCellDef> Action </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\" data-label=\"Action\">\r\n\r\n\r\n                    </mat-cell>\r\n                  </ng-container> -->\r\n                <ng-container matColumnDef=\"action\">\r\n                  <mat-header-cell *matHeaderCellDef> Action </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\" data-label=\"Action\">\r\n                    <mat-select [(placeholder)]=\"row.leaveStatus\">\r\n                      <mat-option *ngFor=\"let item of checkstatus\" [value]=\"item.name\"\r\n                        (click)=\"openDialogforApproveCancelReq(item.id,row.id)\">\r\n\r\n                        {{item.name}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-cell>\r\n                </ng-container>\r\n\r\n\r\n                <mat-header-row *matHeaderRowDef=\"displayedColumnsForRequests\"></mat-header-row>\r\n                <mat-row *matRowDef=\"let row; columns: displayedColumnsForRequests;\">\r\n                </mat-row>\r\n\r\n              </mat-table>\r\n\r\n              <!-- <mat-paginator #paginator1 [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator> -->\r\n            </div>\r\n          </mat-tab>\r\n        </mat-tab-group>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #matdialog #secondDialog>\r\n  <div class=\"container\">\r\n    <div id=\"mat-header\">\r\n      <i matTooltip=\"Close\" class=\"pi pi-times float-right\" (click)=\"this.dialog.closeAll();\"\r\n        style=\"cursor: pointer; color: rgb(15, 15, 15);\"></i>\r\n      <h1 mat-dialog-title><strong>Apply Leaves </strong> </h1>\r\n    </div>\r\n    <mat-dialog-content>\r\n      <form [formGroup]=\"taskreactive\">\r\n\r\n\r\n\r\n        <div class=\"row col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n          <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n            <label>LeaveType<span class=\"text-danger\">*</span></label>\r\n          </div>\r\n          <!-- <div class=\"col-lg-5 col-md-4 col-sm-12 col-xs-12\">\r\n            <input type=\"text\"  class=\"form-control\" formControlName=\"leaveType\">\r\n          </div> -->\r\n          <td>\r\n            <select formControlName=\"leaveType\" class=\"custom-select\">\r\n              <option *ngFor=\"let item of arr\" [value]=\"item.leaveId\">{{item.lTypeName}}</option>\r\n            </select>\r\n          </td>\r\n        </div><br>\r\n        <div class=\"row col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n          <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n            <label>RequesterComments<span class=\"text-danger\">*</span></label>\r\n          </div>\r\n          <div class=\"col-lg-5 col-md-4 col-sm-12 col-xs-12\">\r\n            <textarea row='10' cols='40' formControlName=\"requesterComments\" rows=\"4\" id=\"comment\"\r\n              placeholder=\"Reason for leave\"></textarea>\r\n          </div>\r\n        </div><br>\r\n        <div class=\"row col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n          <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n            <label>From<span class=\"text-danger\">*</span></label>\r\n          </div>\r\n          <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n            <mat-form-field style=\"width: 165px;\">\r\n              <input matInput [matDatepicker]=\"picker1\" [min]=\"minDate\" placeholder=\"\" name=\"dates\"\r\n                formControlName=\"startDate\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker1></mat-datepicker>\r\n            </mat-form-field>&nbsp;&nbsp;\r\n            &nbsp;&nbsp;\r\n          </div>\r\n        </div><br>\r\n        <div class=\"row col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n          <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n            <label>To<span class=\"text-danger\">*</span></label>\r\n          </div>\r\n          <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n            <mat-form-field style=\"    width: 165px;\">\r\n              <input matInput [matDatepicker]=\"picker2\" placeholder=\"\" [min]=\"minDate\" name=\"dates\"\r\n                formControlName=\"endDate\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker2></mat-datepicker>\r\n            </mat-form-field>&nbsp;&nbsp;\r\n          </div>\r\n        </div><br>\r\n\r\n        <div class=\"row col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n          <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n            <label>Days<span class=\"text-danger\">*</span></label>\r\n          </div>\r\n          <div class=\"col-lg-5 col-md-4 col-sm-12 col-xs-12\">\r\n            <input type=\"number\" formControlName=\"numberofDays\">\r\n          </div>\r\n        </div><br>\r\n\r\n        <span></span>\r\n      </form>\r\n    </mat-dialog-content>\r\n\r\n    <mat-dialog-actions id=\"mat-footer\">\r\n      <button type=\"submit\" mat-flat-button color=\"primary\" (click)='onFormSubmit(taskreactive)'>Submit</button>\r\n      <button mat-button mat-dialog-close cdkFocusInitial>Cancel</button>\r\n    </mat-dialog-actions>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n\r\n<ng-template #cancel>\r\n  <div class=\"container\">\r\n    <div id=\"mat-header\">\r\n      <i matTooltip=\"Close\" class=\"pi pi-times float-right\" (click)=\"this.dialog.closeAll();\"\r\n        style=\"cursor: pointer; color: rgb(15, 15, 15);\"></i>\r\n      <h1 mat-dialog-title><strong>Comment</strong> </h1>\r\n    </div>\r\n    <mat-dialog-content>\r\n      <form [formGroup]=\"approveCancelReq\">\r\n        <!-- <input type='text' formControlName='requesterComments' placeholder=\"Write comment \"> -->\r\n        <textarea row='10' cols='40' formControlName=\"requesterComments\" rows=\"5\" placeholder=\"Comment here\"></textarea>\r\n      </form>\r\n    </mat-dialog-content>\r\n\r\n    <mat-dialog-actions id=\"mat-footer\" class=\"float\">\r\n      <button type=\"submit\" mat-flat-button color=\"primary\" (click)='submitApproveCancel()'>Submit</button>\r\n      <button mat-button cdkFocusInitial (click)=\"closeDialog()\">Cancel</button>\r\n    </mat-dialog-actions>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/maps/maps.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maps/maps.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\r\n</div>\r\n<div class=\"main-content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card \">\r\n        <div class=\"card-header \">\r\n          Google Maps\r\n        </div>\r\n        <div class=\"card-body \">\r\n          <div id=\"map\" class=\"map\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header\">\r\n  <div class=\"header text-center\">\r\n    <h2 class=\"title\">Notifications</h2>\r\n    <p class=\"category\">Please checkout the\r\n      <a href=\"https://scttcper.github.io/ngx-toastr/\" target=\"_blank\">full documentation.</a>\r\n    </p>\r\n  </div>\r\n</div>\r\n<div class=\"main-content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Notifications Style</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"alert alert-info\">\r\n            <span>This is a plain notification</span>\r\n          </div>\r\n          <div class=\"alert alert-info\">\r\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\r\n              <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n            </button>\r\n            <span>This is a notification with close button.</span>\r\n          </div>\r\n          <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\r\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\r\n              <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n            </button>\r\n            <span data-notify=\"icon\" class=\"now-ui-icons ui-1_bell-53\"></span>\r\n            <span data-notify=\"message\">This is a notification with close button and icon.</span>\r\n          </div>\r\n          <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\r\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\r\n              <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n            </button>\r\n            <span data-notify=\"icon\" class=\"now-ui-icons ui-1_bell-53\"></span>\r\n            <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Notification states</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"alert alert-primary\">\r\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\r\n              <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n            </button>\r\n            <span>\r\n              <b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\r\n          </div>\r\n          <div class=\"alert alert-info\">\r\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\r\n              <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n            </button>\r\n            <span>\r\n              <b> Info - </b> This is a regular notification made with \".alert-info\"</span>\r\n          </div>\r\n          <div class=\"alert alert-success\">\r\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\r\n              <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n            </button>\r\n            <span>\r\n              <b> Success - </b> This is a regular notification made with \".alert-success\"</span>\r\n          </div>\r\n          <div class=\"alert alert-warning\">\r\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\r\n              <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n            </button>\r\n            <span>\r\n              <b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\r\n          </div>\r\n          <div class=\"alert alert-danger\">\r\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\r\n              <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n            </button>\r\n            <span>\r\n              <b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"places-buttons\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 ml-auto mr-auto text-center\">\r\n                <h4 class=\"card-title\">\r\n                  Notifications Places\r\n                  <p class=\"category\">Click to view notifications</p>\r\n                </h4>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-8 ml-auto mr-auto\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                    <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-8 ml-auto mr-auto\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                    <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p-toolbar >\r\n  <div class=\"ui-toolbar-group-left\">\r\n    <h5>My Profile</h5>\r\n  </div>\r\n</p-toolbar ><br>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-3\">\r\n      <p-card [style]=\"{width: '300px'}\" class=\"col-md-3 border-left-primary\">\r\n        <img src=\"Card\" src=\"assets/employeementalhealth.jpg\" width=\"250px\" height=\"180px\"   >\r\n        <h6 style=\"text-align: center;\">Logged-in User</h6>\r\n        <p-fileUpload #fubauto mode=\"basic\" name=\"demo[]\" url=\"./upload.php\" accept=\"image/*\" maxFileSize=\"100000\" (onUpload)=\"onUpload($event)\" [auto]=\"true\" chooseLabel=\"Change Profile\"></p-fileUpload>\r\n\r\n      </p-card>\r\n    </div>\r\n<div class=\"col-lg-9\">\r\n  <p-tabView class=\"col-md-7\">\r\n    <p-tabPanel header=\"User Info\" >\r\n        <p-table [value]=\"arr\" >\r\n           <ng-template pTemplate=\"header\">\r\n            <tr>\r\n              <th> Username</th>\r\n              <th>Fullname </th>\r\n              <th> E-mail</th>\r\n              <th> Desigantion</th>\r\n              <th> Phone no</th>\r\n              <th> Date of birth</th>\r\n              <th> Gender</th>\r\n              <th> Adress</th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template pTemplate=\"body\" let-Profile>\r\n            <tr>\r\n              <td>{{ Profile.username }}</td>\r\n\r\n          <td> {{ Profile.fullname}} </td>\r\n          <td> {{ Profile.email }} </td>\r\n          <td> {{ Profile.designation }} </td>\r\n          <td> {{ Profile.phoneno }} </td>\r\n          <td> {{ Profile.dateofbirth }} </td>\r\n          <td> {{ Profile.gender }} </td>\r\n          <td> {{ Profile.address }} </td>\r\n        </tr>\r\n          </ng-template>\r\n        </p-table>\r\n      </p-tabPanel>\r\n    <p-tabPanel header=\"Edit Info\">\r\n <div class=\"container\">\r\n  <div class=\"row\">\r\n    <form #f=\"ngForm\" (ngSubmit)=\"onFormSubmit(f)\">\r\n       <div class=\"ui-g-12\">\r\n    <div class=\"row\">\r\n      <div class=\"ui-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Name</label>\r\n          <div class=\"\">\r\n            <input name=\"username\" class=\"form-control\" [(ngModel)]=\"username\" placeholder=\"Name\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"description\">Fullname</label>\r\n          <div class=\"\">\r\n            <input  class=\"form-control\" name=\"fullname\" [(ngModel)]=\"fullname\"    placeholder=\"Fullname\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"ui-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"description\">Email</label>\r\n          <div class=\"\">\r\n            <input  class=\"form-control\" name=\"email\" [(ngModel)]=\"email\"\r\n              placeholder=\"email\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"ui-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Designation</label>\r\n          <div class=\"\">\r\n            <input  class=\"form-control\" name=\"designation\" [(ngModel)]=\"designation\"  placeholder=\"designation\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"description\">Phoneno</label>\r\n          <div class=\"\">\r\n            <input   class=\"form-control\" name=\"phoneno\"[(ngModel)]=\"phoneno\"      placeholder=\"phoneno\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"ui-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"description\">Date of birth</label>\r\n          <div class=\"\">\r\n            <input    class=\"form-control\" name=\"dateofbirth\"[(ngModel)]=\"dateofbirth\"        placeholder=\"Date of birth\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"ui-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Gender</label>\r\n          <div class=\"\">\r\n            <input  class=\"form-control\"  name=\"gender\"[(ngModel)]=\"gender\"  placeholder=\"Gender\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"description\">Address</label>\r\n          <div class=\"\">\r\n            <input  class=\"form-control\"  name=\"address\"[(ngModel)]=\"address\"      placeholder=\"Address\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n   <button pButton label='Submit' (click)=\"onFormSubmit()\"></button>\r\n   </form>\r\n        </div>\r\n        </div>\r\n\r\n    </p-tabPanel>\r\n  <p-tabPanel header=\"Change Password\"  >\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <form class=\"\">\r\n           <div class=\"form-group\">\r\n            <label> Current password <span class=\"text-danger\">*</span></label>\r\n            <input type=\"text\" pInputText class=\"form-control\" />\r\n           </div>\r\n           <div class=\"form-group\">\r\n            <label>New password  <span class=\"text-danger\">*</span></label>\r\n            <input type=\"text\" pInputText class=\"form-control\"/>\r\n           </div>\r\n           <div class=\"form-group\">\r\n            <label>Confirm password  <span class=\"text-danger\">*</span></label>\r\n            <input type=\"text\" pInputText class=\"form-control\"/>\r\n           </div>\r\n           <button pButton label='Save'></button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </p-tabPanel>\r\n</p-tabView>\r\n\r\n</div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <p-card [style]=\"{width: '300px'}\" class=\"col-md-2\">\r\n        <h6 style=\"text-align: center;\">Leave Info</h6>\r\n      <p-table [value]=\"arr1\" [responsive]=\"true\">\r\n        <ng-template pTemplate=\"header\">\r\n          <tr>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-leave>\r\n          <tr>\r\n            <td>\r\n              <span class=\"ui-column-title\">Name</span>{{ leave.leavename }}\r\n            </td>\r\n\r\n          </tr>\r\n        </ng-template>\r\n      </p-table>\r\n\r\n      </p-card>\r\n    </div>\r\n</div> -->\r\n<!-- <div class=\"container\">\r\n<p-card  header=\"Profile edit\"[style]=\"{width: '800px'}\">\r\n<form>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"ui-md-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">First Name</label>\r\n          <div class=\"\">\r\n            <input name=\"First Name\" class=\"form-control\" placeholder=\"First Name\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-md-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Last Name</label>\r\n          <div class=\"\">\r\n            <input name=\"lastname\" class=\"form-control\" placeholder=\"Last Name\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"ui-md-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Address</label>\r\n          <div class=\"\">\r\n            <input name=\"address\" class=\"form-control\" placeholder=\"Address\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-md-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Phone No</label>\r\n          <div class=\"\">\r\n            <input name=\"phoneno\" class=\"form-control\" placeholder=\"Phone No\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"ui-md-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">E-mail</label>\r\n          <div class=\"\">\r\n            <input name=\"email\" class=\"form-control\" placeholder=\"E-mail\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-md-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Designation</label>\r\n          <div class=\"\">\r\n            <input name=\"designation\" class=\"form-control\" placeholder=\"Designation\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n      <button pButton label='Save' ></button>\r\n    </div>\r\n\r\n</form>\r\n</p-card>\r\n\r\n</div> -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"display: inline-block; vertical-align: top;padding-top:30px; padding-left:10px\">\r\n  <div id=\"dvSearch\">\r\n    <div style=\"font-size:large; font-weight: 600px\" >\r\n      <label style=\"font-weight: 700px\">Search</label>\r\n      <label class=\"pull-right\" style=\"font-weight: 700px\">My Article\r\n        <input type=\"checkbox\" id=\"checkboxmyarticle\" [(ngModel)]=\"isFlag\" (change)=\"myArticleCheckedUnchecked($event)\">\r\n      </label>\r\n    </div>\r\n    <form class=\"form-inline mr-auto \">\r\n      <input type=\"search\" pInputText #searchInput class=\"form-control\" id=\"txtbxsearch\"  name='n1' placeholder=\" Article Name / Description\">\r\n      <button class=\"btn btn-primary btn-sm\" (click)=\"onSearchClick(searchInput.value)\" style=\" background-color: #34495e; border-color: #34495e; color: #fff;\" >Search</button>\r\n    </form>\r\n    <hr style=\"border: 1px solid #d4cfc3;\">\r\n    <h3 style=\"margin-top:30px;\">Categories</h3>\r\n    <ul style=\"list-style: none;padding-left: 0px;width: 100%;\">\r\n      <label  style=\"border-bottom: 1px solid #cecece;padding:7px;\" (click)=\"showall()\">Show All</label>\r\n      <div class=\"form-group\">\r\n        <div *ngFor=\"let option of category_disp\">\r\n          <label  style=\"border-bottom: 1px solid #cecece;padding:7px;\"(click)=\"updateCheckedOptions(option)\">\r\n            <p-checkbox *ngIf=\"option.isCheck\" name=\"options\" binary=\"true\" (click)=\"updateCheckedOptions(option)\" [(ngModel)]=\"option.categoryId\"></p-checkbox>{{option.categoryName}}\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/table-list/table-list.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table-list/table-list.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\r\n</div>\r\n<div class=\"main-content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\"> Simple Table</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n              <thead class=\" text-primary\">\r\n                <th>\r\n                  Name\r\n                </th>\r\n                <th>\r\n                  Country\r\n                </th>\r\n                <th>\r\n                  City\r\n                </th>\r\n                <th class=\"text-right\">\r\n                  Salary\r\n                </th>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <td>\r\n                    Dakota Rice\r\n                  </td>\r\n                  <td>\r\n                    Niger\r\n                  </td>\r\n                  <td>\r\n                    Oud-Turnhout\r\n                  </td>\r\n                  <td class=\"text-right\">\r\n                    $36,738\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    Minerva Hooper\r\n                  </td>\r\n                  <td>\r\n                    Curaçao\r\n                  </td>\r\n                  <td>\r\n                    Sinaai-Waas\r\n                  </td>\r\n                  <td class=\"text-right\">\r\n                    $23,789\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    Sage Rodriguez\r\n                  </td>\r\n                  <td>\r\n                    Netherlands\r\n                  </td>\r\n                  <td>\r\n                    Baileux\r\n                  </td>\r\n                  <td class=\"text-right\">\r\n                    $56,142\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    Philip Chaney\r\n                  </td>\r\n                  <td>\r\n                    Korea, South\r\n                  </td>\r\n                  <td>\r\n                    Overland Park\r\n                  </td>\r\n                  <td class=\"text-right\">\r\n                    $38,735\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    Doris Greene\r\n                  </td>\r\n                  <td>\r\n                    Malawi\r\n                  </td>\r\n                  <td>\r\n                    Feldkirchen in Kärnten\r\n                  </td>\r\n                  <td class=\"text-right\">\r\n                    $63,542\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    Mason Porter\r\n                  </td>\r\n                  <td>\r\n                    Chile\r\n                  </td>\r\n                  <td>\r\n                    Gloucester\r\n                  </td>\r\n                  <td class=\"text-right\">\r\n                    $78,615\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    Jon Porter\r\n                  </td>\r\n                  <td>\r\n                    Portugal\r\n                  </td>\r\n                  <td>\r\n                    Gloucester\r\n                  </td>\r\n                  <td class=\"text-right\">\r\n                    $98,615\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card card-plain\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\"> Table on Plain Background</h4>\r\n          <p class=\"category\"> Here is a subtitle for this table</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n              <thead class=\" text-primary\">\r\n                <th>\r\n                  Name\r\n                </th>\r\n                <th>\r\n                  Country\r\n                </th>\r\n                <th>\r\n                  City\r\n                </th>\r\n                <th class=\"text-right\">\r\n                  Salary\r\n                </th>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <td>\r\n                    Dakota Rice\r\n                  </td>\r\n                  <td>\r\n                    Niger\r\n                  </td>\r\n                  <td>\r\n                    Oud-Turnhout\r\n                  </td>\r\n                  <td class=\"text-right\">\r\n                    $36,738\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    Minerva Hooper\r\n                  </td>\r\n                  <td>\r\n                    Curaçao\r\n                  </td>\r\n                  <td>\r\n                    Sinaai-Waas\r\n                  </td>\r\n                  <td class=\"text-right\">\r\n                    $23,789\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    Sage Rodriguez\r\n                  </td>\r\n                  <td>\r\n                    Netherlands\r\n                  </td>\r\n                  <td>\r\n                    Baileux\r\n                  </td>\r\n                  <td class=\"text-right\">\r\n                    $56,142\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    Philip Chaney\r\n                  </td>\r\n                  <td>\r\n                    Korea, South\r\n                  </td>\r\n                  <td>\r\n                    Overland Park\r\n                  </td>\r\n                  <td class=\"text-right\">\r\n                    $38,735\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    Doris Greene\r\n                  </td>\r\n                  <td>\r\n                    Malawi\r\n                  </td>\r\n                  <td>\r\n                    Feldkirchen in Kärnten\r\n                  </td>\r\n                  <td class=\"text-right\">\r\n                    $63,542\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    Mason Porter\r\n                  </td>\r\n                  <td>\r\n                    Chile\r\n                  </td>\r\n                  <td>\r\n                    Gloucester\r\n                  </td>\r\n                  <td class=\"text-right\">\r\n                    $78,615\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    Jon Porter\r\n                  </td>\r\n                  <td>\r\n                    Portugal\r\n                  </td>\r\n                  <td>\r\n                    Gloucester\r\n                  </td>\r\n                  <td class=\"text-right\">\r\n                    $98,615\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/upgrade/upgrade.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upgrade/upgrade.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\r\n</div>\r\n<div class=\"main-content\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card card-upgrade\">\r\n        <div class=\"card-header\">\r\n          <h5 class=\"card-title\">Now UI Dashboard PRO Angular</h5>\r\n            <p class=\"category\">Are you looking for more components? Please check our Premium Version of Now UI Dashboard PRO Angular.</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"table-responsive table-upgrade\">\r\n            <table class=\"table\">\r\n              <thead>\r\n                <th></th>\r\n                <th class=\"text-center\">Free</th>\r\n                <th class=\"text-center\">PRO</th>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <td>Components</td>\r\n                  <td class=\"text-center\">16</td>\r\n                  <td class=\"text-center\">160</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Plugins</td>\r\n                  <td class=\"text-center\">4</td>\r\n                  <td class=\"text-center\">12</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Example Pages</td>\r\n                  <td class=\"text-center\">7</td>\r\n                  <td class=\"text-center\">27</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Documentation</td>\r\n                  <td class=\"text-center\"><i class=\"now-ui-icons ui-1_check text-success\"></i></td>\r\n                  <td class=\"text-center\"><i class=\"now-ui-icons ui-1_check text-success\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                  <td>SASS Files</td>\r\n                  <td class=\"text-center\"><i class=\"now-ui-icons ui-1_check text-success\"></i></td>\r\n                  <td class=\"text-center\"><i class=\"now-ui-icons ui-1_check text-success\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Mini Sidebar</td>\r\n                  <td class=\"text-center\"><i class=\"now-ui-icons ui-1_simple-remove text-danger\"></i></td>\r\n                  <td class=\"text-center\"><i class=\"now-ui-icons ui-1_check text-success\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Premium Support</td>\r\n                  <td class=\"text-center\"><i class=\"now-ui-icons ui-1_simple-remove text-danger\"></i></td>\r\n                  <td class=\"text-center\"><i class=\"now-ui-icons ui-1_check text-success\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Login, Register, Pricing, Lock Pages</td>\r\n                  <td class=\"text-center\"><i class=\"now-ui-icons ui-1_simple-remove text-danger\"></i></td>\r\n                  <td class=\"text-center\"><i class=\"now-ui-icons ui-1_check text-success\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                  <td></td>\r\n                  <td class=\"text-center\">Free</td>\r\n                  <td class=\"text-center\">Just $59</td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"text-center\"></td>\r\n                  <td class=\"text-center\">\r\n                    <a href=\"#\" class=\"btn btn-round btn-default disabled\">Current Version</a>\r\n                  </td>\r\n                  <td class=\"text-center\">\r\n                    <a target=\"_blank\" href=\"https://www.creative-tim.com/product/now-ui-dashboard-pro-angular?ref=nud-angular-upgrade-live\" class=\"btn btn-round btn-primary\">Upgrade to PRO</a>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/addarticle/addarticle.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/addarticle/addarticle.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <!-- <div class=\"panel-header panel-header-sm\"></div> -->\r\n  <div class=\"main-container\">\r\n      <p-toast [style]=\"{marginTop: '80px'}\" ></p-toast>\r\n    <div class=\"main-container\">\r\n      <form [formGroup]=\"addForm\" (ngSubmit)=\"onAddArticle()\">\r\n        <div class=\"container form-box\"><br/>\r\n          <table class=\"table table-bordered \">\r\n            <tbody>\r\n              <tr>\r\n                <td>Category</td>\r\n                <td>\r\n                  <select  formControlName=\"category_id\" class=\"custom-select\" >\r\n                    <option  *ngFor=\"let item of category_disp\" [value]=\"item.categoryId\">{{item.categoryName}}</option>\r\n                  </select>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td style=\"width:150px;\">Name<span  class=\"text-danger\">  *</span></td>\r\n                <td><input type=\"text\" class='form-control' formControlName=\"article_name\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td>Description</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <p-editor formControlName=\"content\" [style]=\"{'height':'320px'}\"></p-editor><br>\r\n        </div>\r\n        <div class=\"container form-box\">\r\n          <div class=\"row custom-wrapper\">\r\n            <div class=\"col-md-12 btn-box\">\r\n              <button type=\"submit\" class=\"btn btn-primary btn-sm text-white btn-save\" style=\"margin-left:6px; background-color: #34495e; border-color: #34495e; color: #fff;\">Save</button>&nbsp;&nbsp;\r\n              <button type=\"button\" class=\"btn btn-warning btn-sm text-white btn-cancel\" (click)='onClickClose()'>Close</button> <br/>\r\n            </div>\r\n          </div>\r\n        </div><br/>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/editarticle/editarticle.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/editarticle/editarticle.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"panel-header panel-header-sm\"></div> -->\r\n<div class=\"main-container\">\r\n  <div class=\"container-fluid second-card\">\r\n      <p-toast [style]=\"{marginTop: '80px'}\" ></p-toast>\r\n      <form [formGroup]=\"editForm\" (ngSubmit)=\"onEditArticle()\">\r\n      <div class=\"container\"><br />\r\n        <table class=\"table table-bordered \" style=\"margin-left: 0px !important;\">\r\n          <tbody>\r\n            <tr>\r\n              <td style=\"width:150px;\"> Article Name<span class=\"text-danger\"> *</span></td>\r\n              <td><input type=\"text\" class='form-control' formControlName=\"ArticleName\"></td>\r\n            </tr>\r\n            <tr>\r\n              <td>category</td>\r\n              <td>\r\n                <select formControlName=\"CategoryId\" class=\"custom-select\">\r\n                  <option value=\"\">Choose your category</option>\r\n                  <option *ngFor=\"let item of arr\" [value]=\"item.categoryId\">{{item.categoryName}}</option>\r\n                </select>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>Description</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <!-- <quill-editor></quill-editor> -->\r\n        <quill-editor formControlName=\"Content\" (onEditorCreated)=\"getEditorInstance($event)\"></quill-editor>\r\n        <input type=\"file\" style=\"display: none\" id=\"fileInputField\"/>\r\n        <!-- <p-editor formControlName=\"Content\"  [style]=\"{'height':'320px'}\"></p-editor><br> -->\r\n      </div>\r\n      <div class=\"container form-box\">\r\n        <div class=\"row custom-wrapper\">\r\n          <div class=\"col-md-12 btn-box\">\r\n            <button type=\"submit\" class=\"btn btn-primary btn-sm text-white btn-save\" style=\"margin-left:6px; background-color: #34495e; border-color: #34495e; color: #fff;\">Save</button>&nbsp;&nbsp;\r\n            <button type=\"button\" class=\"btn btn-warning btn-sm text-white btn-cancel\" (click)='onClickClose()'>Close</button> <br/>\r\n          </div>\r\n        </div>\r\n      </div><br/>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/readmore/readmore.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/readmore/readmore.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br><br>\r\n<div class=\"container\">\r\n  <p-panel>\r\n    <p-header>\r\n      <a class=\"pull-left\" >\r\n        <img src=\"/assets/profile_img.jpg\" alt=\"profile-picture\" class=\"avatar\" style=\" width:65px; border-radius:50%;float:left;\">\r\n      </a>\r\n      <div class=\"media-body\">\r\n       <small>Created By:<span class=\"font-bold\"></span></small><br>\r\n       <small class=\"text-muted\">Date:{{read_more?.createdDate}}</small><br>\r\n        <small class=\"text-muted\"></small>\r\n      </div>\r\n    </p-header>\r\n    <div>\r\n      <h3 class=\" title\">{{read_more?.articleName}}</h3>\r\n    </div>\r\n    <!-- <h2 >{{read_more?.content}}</h2> -->\r\n    <p [innerHtml]=\"read_more?.content\"></p>\r\n    <p-footer>\r\n      <div class=\"container\">\r\n        <button *ngIf=\"read_more?.createdBy==1\" class=\"btn btn-info btn-sm\"  (click)=\"onEditArticle(read_more)\" ><i class=\"fa fa-pencil\"></i> Edit</button>\r\n        <button type=\"button\" class=\"btn btn-warning btn-sm text-white btn-cancel\" (click)='onClickClose()'>Back</button> <br/>\r\n      </div>\r\n    </p-footer>\r\n  </p-panel>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n<div  >\r\n<div *ngIf=\"!norecordfound\" >\r\n  <!-- <div class=\"panel-header panel-header-sm\"></div> -->\r\n   <div  class=\"container-fliud \" style=\"background-color:rgba(246, 242, 242, 0.863);\">\r\n    <div class=\"row\" style=\"padding-left: 15px;\">\r\n      <div class=\"first\" class=\" card col-md-9\" style=\"display: inline-block;border-right:1px solid grey;padding-top:20px;background-color:rgba(246, 242, 242, 0.863);\">\r\n          <!-- <div class=\"card col-md-12\" style=\"max-width: 540px ;\"> -->\r\n              <!-- <div class=\"row no-gutters\"> -->\r\n          <div id=\"dvarticlecontainer\">\r\n            <div id=\"allarticletabview\">\r\n              <div class=\"col-md-12\" style=\"padding-bottom:50px; display: inline-block; padding-top:20px\">\r\n                <div *ngFor=\"let item of all_articles \">\r\n                  <div class=\"container\">\r\n                      <p-card  subheader=\"{{item.createdDate |date:'short'}}&nbsp;&nbsp;{{item.categoryName}} &nbsp;&nbsp; {{item.createdByName}} \"   styleClass=\"ui-card-shadow\">\r\n                        <p-header>\r\n                            <div class=\"container\"><br>\r\n                              <img src=\"./assets/profile_img.jpg\" style=\"width:70px; border-radius:100%;float:left;\" alt=\"profile-picture\">\r\n                            </div><h3><b>&nbsp;&nbsp;{{item.articleName}}</b></h3>\r\n                          </p-header>\r\n                          <!-- <div><i class=\"icon-folder-o mr-2\"></i> &nbsp;&nbsp;    </div> -->\r\n                          <div [innerHtml]=\"item.previewContent\"></div>\r\n                          <p-footer>\r\n                              <button pButton type=\"button\" label=\"Readmore\"  style=\" background-color: #34495e; border-color: #34495e; color: #fff;\" (click)='onReadMore(item)'></button>&nbsp;&nbsp;\r\n                              <button pButton type=\"button\" label=\"Edit\" icon=\"pi pi-pencil\" class=\"ui-button-primary\" (click)='onEditArticle(item)' *ngIf=\"item.createdByName=='Admin Manjunath'\"></button>\r\n                          </p-footer>\r\n                      </p-card>\r\n                  </div>\r\n                  <br>\r\n\r\n                 <!-- <div class=\"container-fluid\">\r\n                      <div class=\"card \" style=\"max-width: 856px;background-color:rgba(246, 242, 242, 0.863);\">\r\n                          <div class=\"row no-gutters\" style=\" padding-top: 7px; \">&nbsp;&nbsp;&nbsp;&nbsp;\r\n                    <img src=\"./assets/profile_img.jpg\" style=\" width:100px; border-radius:80%;float:left;\" alt=\"profile-picture\"><br>\r\n                      <div>\r\n                          <h3  style=\"margin-left:12px;\">{{item.articleName}}</h3>\r\n\r\n                          <i class=\"icon-calendar mr-2\"  style=\"margin-left:8px;\"></i>{{item.createdDate | date}}\r\n                          <i class=\"icon-folder-o mr-2\"></i> {{item.categoryName}}\r\n                          <i class=\"fa fa-user\"></i>&nbsp;&nbsp;{{item.createdByName}}\r\n                          <p  style=\"margin-left:18px;\" [innerHtml]=\"item.previewContent\"></p>\r\n                      </div>\r\n                      <div>\r\n                      <p>\r\n                        <span style=\"padding-right:20px;\">\r\n                          <button type='button' class=\"btn btn-primary btn-sm\" style=\"margin-left:130px; background-color: #34495e; border-color: #34495e; color: #fff;\"\r\n                          (click)='onReadMore(item)'>Read More</button>\r\n                        </span>\r\n                        <span style=\"padding-right:20px;\"><button class=\"btn btn-info btn-sm\" (click)='onEditArticle(item)' *ngIf=\"item.createdByName=='Admin Manjunath'\">\r\n                          <i class=\"fa fa-pencil\"> </i>Edit</button></span>\r\n                      </p>\r\n                      </div>\r\n                      </div>\r\n                    </div>\r\n                  </div> -->\r\n                </div>\r\n              </div>\r\n            <!-- </div> -->\r\n          </div>\r\n        <!-- </div> -->\r\n          </div>\r\n          <div>\r\n              <div class=\"justify-content-center\">\r\n                 <p-paginator *ngIf=\"pageVariable\" [rows]=\"totalItems\" [totalRecords]=\"totalItem\" (onPageChange)=\"loadPage($event)\" ></p-paginator>\r\n            <p *ngIf=\"pageVariable\" ><span class=\"badge badge-secondary\">{{\"Showing: \"+firstvalue+\"-\"+secondvalue+\" of \" +totalPages}}</span></p><br>\r\n              </div>\r\n            </div>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"pageVariable\" class=\"first\" class=\"col-md-3\" style=\"background-color:rgba(246, 242, 242, 0.863);display: inline-block; vertical-align: top;padding-top:30px; padding-left:10px\">\r\n        <div id=\"dvSearch\">\r\n            <div style=\"display: inline-block; vertical-align: top;padding-top:30px; padding-left:10px\">\r\n                <div id=\"dvSearch\">\r\n                  <div style=\"font-size:large; font-weight: 600px\" >\r\n                    <label style=\"font-weight: 700px\">Search</label>\r\n                    <label class=\"pull-right\" style=\"font-weight: 700px\">My Article\r\n                      <input type=\"checkbox\" id=\"checkboxmyarticle\" [(ngModel)]=\"isFlag\" (change)=\"myArticleCheckedUnchecked($event)\">\r\n                    </label>\r\n                  </div>\r\n                  <form class=\"form-inline mr-auto \">\r\n                    <input type=\"search\" pInputText #searchInput class=\"form-control\" id=\"txtbxsearch\"  name='n1' placeholder=\" Article Name / Description\">\r\n                    <button class=\"btn btn-primary btn-sm\" (click)=\"onSearchClick(searchInput.value)\" style=\" background-color: #34495e; border-color: #34495e; color: #fff;\" >Search</button>\r\n                  </form>\r\n                  <hr style=\"border: 1px solid #d4cfc3;\">\r\n                  <h3 style=\"margin-top:30px;\">Categories</h3>\r\n                  <ul style=\"list-style: none;padding-left: 0px;width: 100%;\">\r\n                    <label  style=\"border-bottom: 1px solid #cecece;padding:7px;\" (click)=\"onShowClick()\">Show All</label>\r\n                    <div class=\"form-group\">\r\n                      <div *ngFor=\"let option of category_disp\">\r\n                        <label  style=\"border-bottom: 1px solid #cecece;padding:7px;\"(click)=\"onFilterCheck(option)\">\r\n                          <p-checkbox *ngIf=\"option.isCheck\" name=\"options\" binary=\"true\" (click)=\"onFilterCheck(option)\" [(ngModel)]=\"option.categoryId\"></p-checkbox>{{option.categoryName}}\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n</div>\r\n</div>\r\n<ng-template #elseblock>\r\n  <div class=\"container\" >\r\n    <div class=\"row mt-5 ml-5\">\r\n      <div class=\"col-8 mt-5 ml-5\">\r\n        <div class=\"mt-5 ml-5\">\r\n          <div class=\"mt-5\">\r\n            <h1 class=\"mt-5 ml-5\">\r\n              <i class=\"fa fa-exclamation-triangle text-warning\"></i>\r\n              <b class=\"text-warning\">No Records Found</b>\r\n            </h1>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/Models/kbarticles.ts":
/*!**************************************!*\
  !*** ./src/app/Models/kbarticles.ts ***!
  \**************************************/
/*! exports provided: KBArticles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KBArticles", function() { return KBArticles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var KBArticles = /** @class */ (function () {
    function KBArticles(articleId, articleName, content, previewContent, categoryId, categoryName, createdBy, createdByName, createdDate, modifiedBy, modifiedByName, modifiedDate) {
        this.articleId = articleId;
        this.articleName = articleName;
        this.content = content;
        this.previewContent = previewContent;
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.createdBy = createdBy;
        this.createdByName = createdByName;
        this.createdDate = createdDate;
        this.modifiedBy = modifiedBy;
        this.modifiedByName = modifiedByName;
        this.modifiedDate = modifiedDate;
    }
    return KBArticles;
}());



/***/ }),

/***/ "./src/app/holidays/holidays.component.scss":
/*!**************************************************!*\
  !*** ./src/app/holidays/holidays.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#mat-header {\n  border-bottom: solid 1px lightgray; }\n\n#mat-footer {\n  border-top: solid 1px lightgray; }\n\n.mat-dialog-content {\n  padding-top: 13px;\n  padding-bottom: 13px; }\n\ntable {\n  width: 100%; }\n\n.table {\n  height: 400px;\n  overflow: auto; }\n\n.table1 {\n  height: 400px;\n  overflow: auto; }\n\nmat-header-cell {\n  font-weight: bold;\n  font-size: 15px; }\n\ni {\n  padding: 10px; }\n\n@media screen and (max-width: 960px) {\n  mat-cell:first-of-type, mat-footer-cell:first-of-type, mat-header-cell:first-of-type {\n    padding-left: 0px; }\n  .mat-table {\n    border: 0;\n    vertical-align: middle; }\n  mat-footer-row, mat-header-row, mat-row {\n    display: none; }\n  .mat-table caption {\n    font-size: 1em; }\n  .mat-table .mat-row {\n    border-bottom: 5px solid #ddd;\n    display: block; }\n  .mat-table .mat-cell {\n    border-bottom: 1px solid #ddd;\n    display: block;\n    font-size: 1em;\n    text-align: right;\n    font-weight: bold;\n    height: 30px;\n    margin-bottom: 4%; }\n  .mat-table .mat-cell:before {\n    content: attr(data-label);\n    float: left;\n    text-transform: uppercase;\n    font-weight: normal;\n    font-size: .85em; }\n  .mat-table .mat-cell:last-child {\n    border-bottom: 0; }\n  .mat-table .mat-cell:first-child {\n    margin-top: 4%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9saWRheXMvQzpcXFVzZXJzXFxhc3Vua29wcGFkXFxEZXNrdG9wXFxuZXd6b29tXFx6b29tdGVhbXMtd2ViLW5nL3NyY1xcYXBwXFxob2xpZGF5c1xcaG9saWRheXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQSxrQ0FBbUMsRUFBQTs7QUFFbkM7RUFDQSwrQkFBaUMsRUFBQTs7QUFFakM7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUE7O0FBRXRCO0VBQ0UsV0FBVyxFQUFBOztBQVFiO0VBQ0UsYUFBYTtFQUNiLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxhQUFhO0VBQ2IsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsYUFBYSxFQUFBOztBQUtmO0VBQ0U7SUFDQSxpQkFBaUIsRUFBQTtFQUVqQjtJQUNBLFNBQVM7SUFDVCxzQkFDQSxFQUFBO0VBQ0E7SUFDQSxhQUFhLEVBQUE7RUFFYjtJQUNBLGNBQWMsRUFBQTtFQUVkO0lBQ0EsNkJBQTZCO0lBQzdCLGNBQWMsRUFBQTtFQUViO0lBQ0QsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFXO0lBQ1gsaUJBQWlCLEVBQUE7RUFFakI7SUFDQyx5QkFBeUI7SUFDMUIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZ0JBQWdCLEVBQUE7RUFFaEI7SUFDQSxnQkFBZ0IsRUFBQTtFQUVoQjtJQUNBLGNBQWMsRUFBQSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvaG9saWRheXMvaG9saWRheXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI21hdC1oZWFkZXIge1xyXG5ib3JkZXItYm90dG9tOiBzb2xpZCAxcHggbGlnaHRncmF5IDtcclxufVxyXG4jbWF0LWZvb3RlciB7XHJcbmJvcmRlci10b3AgOiBzb2xpZCAxcHggbGlnaHRncmF5IDtcclxufVxyXG4ubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICBwYWRkaW5nLXRvcDogMTNweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICB9XHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLy8gLm1hdC10YWJsZSB7ICAgICAgICAgICAgLy9TY3JvbGwgdGFibGVcclxuLy8gICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4vLyAgIGhlaWdodDogNDAwcHg7XHJcbi8vICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuLy8gICB9XHJcbi50YWJsZSB7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4udGFibGUxIHtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbm1hdC1oZWFkZXItY2VsbHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuaXtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICBtYXQtY2VsbDpmaXJzdC1vZi10eXBlLCBtYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSwgbWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUge1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIH1cclxuICAubWF0LXRhYmxlIHtcclxuICBib3JkZXI6IDA7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZVxyXG4gIH1cclxuICBtYXQtZm9vdGVyLXJvdywgbWF0LWhlYWRlci1yb3csIG1hdC1yb3cge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5tYXQtdGFibGUgY2FwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgfVxyXG4gIC5tYXQtdGFibGUgLm1hdC1yb3cge1xyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZGRkO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAgLm1hdC10YWJsZSAubWF0LWNlbGwge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGhlaWdodDozMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gIH1cclxuICAubWF0LXRhYmxlIC5tYXQtY2VsbDpiZWZvcmUge1xyXG4gICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IC44NWVtO1xyXG4gIH1cclxuICAubWF0LXRhYmxlIC5tYXQtY2VsbDpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tOiAwO1xyXG4gIH1cclxuICAubWF0LXRhYmxlIC5tYXQtY2VsbDpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLXRvcDogNCU7XHJcbiAgfVxyXG4gIH1cclxuIl19 */");

/***/ }),

/***/ "./src/app/holidays/holidays.component.ts":
/*!************************************************!*\
  !*** ./src/app/holidays/holidays.component.ts ***!
  \************************************************/
/*! exports provided: HolidaysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidaysComponent", function() { return HolidaysComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_master_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var _shared_local_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/local-storage.service */ "./src/app/shared/local-storage.service.ts");









var ELEMENT_DATA = [
    { id: 1, name: 'New Year', dates: '01-01-2020', days: 1, location: 1 },
    { id: 2, name: 'Ugadi', dates: '02-11-2020', days: 1, location: 2 },
    { id: 3, name: 'Ramzan', dates: '03-15-2020', days: 1, location: 3 },
    { id: 4, name: 'Ganesha Festival', dates: '04-21-2020', days: 1, location: 2 },
    { id: 5, name: 'Independence day', dates: '05-31-2020', days: 1, location: 3 },
    { id: 6, name: 'Republic Day', dates: '06-11-2020', days: 1, location: 1 },
    { id: 7, name: 'Dasara', dates: '07-19-2020', days: 1, location: 2 },
    { id: 8, name: 'Diwali', dates: '08-01-2020', days: 1, location: 3 },
    { id: 9, name: 'Good Friday', dates: '09-25-2020', days: 1, location: 1 },
    { id: 10, name: 'Christmas', dates: '12-25-2020', days: 1, location: 1 },
    { id: 11, name: 'Ganesha Festival', dates: '04-21-2020', days: 1, location: 2 },
    { id: 12, name: 'Independence day', dates: '05-31-2020', days: 1, location: 3 },
    { id: 13, name: 'Republic Day', dates: '06-11-2020', days: 1, location: 1 },
    { id: 14, name: 'Dasara', dates: '07-19-2020', days: 1, location: 2 },
    { id: 15, name: 'Diwali', dates: '08-01-2020', days: 1, location: 3 },
    { id: 16, name: 'Good Friday', dates: '09-25-2020', days: 1, location: 1 },
    { id: 17, name: 'Christmas', dates: '12-25-2020', days: 1, location: 1 },
];
var HolidayData = [
    { name: 'New Year', dates: '01-01-2020', days: 1 },
    { name: 'Ugadi', dates: '02-11-2020', days: 1 },
    { name: 'Ramzan', dates: '03-15-2020', days: 1 },
    { name: 'New Year', dates: '01-01-2020', days: 1 },
    { name: 'Ugadi', dates: '02-11-2020', days: 1 },
    { name: 'Ramzan', dates: '03-15-2020', days: 1 },
    { name: 'Ganesha Festival', dates: '04-21-2020', days: 1 },
    { name: 'Independence day', dates: '05-31-2020', days: 1 },
    { name: 'Republic Day', dates: '6-11-2020', days: 1 },
    { name: 'Dasara', dates: '07-19-2020', days: 1 },
    { name: 'Diwali', dates: '08-01-2020', days: 1 },
    { name: 'Good Friday', dates: '09-25-2020', days: 1 },
    { name: 'Christmas', dates: '12-25-2020', days: 1 },
    { name: 'Republic Day', dates: '06-11-2020', days: 1 },
    { name: 'Dasara', dates: '07-19-2020', days: 1 },
    { name: 'Diwali', dates: '08-01-2020', days: 1 },
    { name: 'Good Friday', dates: '09-25-2020', days: 1 },
    { name: 'Christmas', dates: '12-25-2020', days: 1 },
];
var HolidaysComponent = /** @class */ (function () {
    function HolidaysComponent(dialog, fb, datePipe, messageService, masterService, localStorageService, confirmationService) {
        this.dialog = dialog;
        this.fb = fb;
        this.datePipe = datePipe;
        this.messageService = messageService;
        this.masterService = masterService;
        this.localStorageService = localStorageService;
        this.confirmationService = confirmationService;
        this.data1 = Object.assign(HolidayData);
        this.selectDatasource = ELEMENT_DATA;
        this.selectDatasource1 = HolidayData;
        this.submitted = false;
        this.displayedColumns = ['name', 'dates', 'days', 'Actions'];
        this.displayedColumns1 = ['name', 'dates', 'days'];
        this.dataSource1 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](HolidayData);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        this.locations = [
            { id: 1, value: 'Bangalore-0', viewValue: 'Bangalore' },
            { id: 2, value: 'Dharwad-1', viewValue: 'Dharwad' },
            { id: 3, value: 'USA-2', viewValue: 'USA' }
        ];
        {
            // this.userinfo = this.localStorageService.getItem(AppConstant.API_CONFIG.LOCALSTORAGE.USERINFO);
            // // this.role = this.userinfo[0].role;
            // console.log('role', this.role);
        }
    }
    HolidaysComponent.prototype.ngOnInit = function () {
        this.holidayForm = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            dates: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            days: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
        // const defaultLoc = this.userinfo[0].location;
        // this.selectedLocation = defaultLoc;
        this.changeTableContent();
    };
    HolidaysComponent.prototype.showDialogToAdd = function (passedTitle) {
        this.dialogTitle = passedTitle;
        var dialogRef = this.dialog.open(this.matdialog, {
            disableClose: true,
            height: '330px',
            width: '500px',
            autoFocus: true,
        });
        this.holidayForm.reset();
    };
    HolidaysComponent.prototype.showDialogToEdit = function (passedTitle, ELEMENT_DATA) {
        this.dialogTitle = passedTitle;
        var dates = new Date(ELEMENT_DATA.dates);
        this.holidayForm.patchValue({
            id: ELEMENT_DATA.id,
            name: ELEMENT_DATA.name,
            dates: dates,
            days: ELEMENT_DATA.days
        });
        var dialogRef = this.dialog.open(this.matdialog, {
            disableClose: true,
            height: '330px',
            width: '500px',
        });
    };
    HolidaysComponent.prototype.onFormSubmit = function () {
        var _this = this;
        var test = this.masterService.getFormErrorMessage(this.holidayForm, this.holidayForm);
        if (test !== undefined) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error Message',
                detail: test
            });
        }
        else {
            this.submitted = true;
            if (this.holidayForm.value.id === null) {
                var req = {
                    id: ELEMENT_DATA.length + 1,
                    name: this.holidayForm.value.name,
                    dates: this.datePipe.transform(this.holidayForm.value.dates, 'MM-dd-yyyy'),
                    days: this.holidayForm.value.days,
                    location: this.selectedLocation
                };
                this.selectDatasource.push(req);
                this.dialog.closeAll();
                setTimeout(function () {
                    _this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Added Sucessfully' });
                }, 2000);
            }
            else {
                for (var i = 0; i < this.selectDatasource.length; i++) {
                    if (this.selectDatasource[i].id === this.holidayForm.value.id) {
                        this.selectDatasource[i].id = this.holidayForm.value.id;
                        this.selectDatasource[i].name = this.holidayForm.value.name;
                        this.selectDatasource[i].dates = this.datePipe.transform(this.holidayForm.value.dates, 'MM-dd-yyyy');
                        this.selectDatasource[i].days = this.holidayForm.value.days;
                        setTimeout(function () {
                            _this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Updated Sucessfully' });
                        }, 1000);
                    }
                    this.dialog.closeAll();
                }
            }
        }
        this.changeTableContent();
    };
    HolidaysComponent.prototype.removeFromList = function (Item) {
        this.selectDatasource.splice(ELEMENT_DATA.indexOf(Item), 1);
        this.messageService.add({
            severity: 'success',
            summary: 'Success Message',
            detail: 'Deleted Sucessfully'
        });
        this.changeTableContent();
    };
    HolidaysComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        console.log(id);
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: function () {
                _this.removeFromList(id);
            },
            reject: function () { }
        });
    };
    HolidaysComponent.prototype.changeTableContent = function () {
        var _this = this;
        this.selected_Array1 = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.filter(this.selectDatasource, function (s) {
            return s.location === _this.selectedLocation;
        });
        console.log(this.selected_Array1);
    };
    HolidaysComponent.prototype.selected_Array = function (selected_Array1) {
        throw new Error('Method not implemented.');
    };
    HolidaysComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"] },
        { type: _services_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"] },
        { type: _shared_local_storage_service__WEBPACK_IMPORTED_MODULE_8__["LocalStorageService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('matdialog', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], HolidaysComponent.prototype, "matdialog", void 0);
    HolidaysComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-holidays',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./holidays.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/holidays/holidays.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./holidays.component.scss */ "./src/app/holidays/holidays.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
            primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            _services_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"],
            _shared_local_storage_service__WEBPACK_IMPORTED_MODULE_8__["LocalStorageService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]])
    ], HolidaysComponent);
    return HolidaysComponent;
}());



/***/ }),

/***/ "./src/app/icons/icons.component.css":
/*!*******************************************!*\
  !*** ./src/app/icons/icons.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ljb25zL2ljb25zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/icons/icons.component.ts":
/*!******************************************!*\
  !*** ./src/app/icons/icons.component.ts ***!
  \******************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    IconsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-icons',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./icons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/icons/icons.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./icons.component.css */ "./src/app/icons/icons.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/growl */ "./node_modules/primeng/growl.js");
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_growl__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/editor */ "./node_modules/primeng/editor.js");
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_editor__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/paginator */ "./node_modules/primeng/paginator.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_paginator__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/panel.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_panel__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/tabview.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(primeng_tabview__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/index.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _leavecomp_leavecomp_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../leavecomp/leavecomp.component */ "./src/app/leavecomp/leavecomp.component.ts");
/* harmony import */ var _user_profile_readmore_readmore_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./../../user-profile/readmore/readmore.component */ "./src/app/user-profile/readmore/readmore.component.ts");
/* harmony import */ var _user_profile_editarticle_editarticle_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./../../user-profile/editarticle/editarticle.component */ "./src/app/user-profile/editarticle/editarticle.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./../../search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./admin-layout.routing */ "./src/app/layouts/admin-layout/admin-layout.routing.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../table-list/table-list.component */ "./src/app/table-list/table-list.component.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../icons/icons.component */ "./src/app/icons/icons.component.ts");
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../maps/maps.component */ "./src/app/maps/maps.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../notifications/notifications.component */ "./src/app/notifications/notifications.component.ts");
/* harmony import */ var _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../upgrade/upgrade.component */ "./src/app/upgrade/upgrade.component.ts");
/* harmony import */ var _user_profile_addarticle_addarticle_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../user-profile/addarticle/addarticle.component */ "./src/app/user-profile/addarticle/addarticle.component.ts");
/* harmony import */ var _app_shared_base64_encode_decode__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../app/shared/base64-encode-decode */ "./src/app/shared/base64-encode-decode.ts");
/* harmony import */ var _employetimesheet_employetimesheet_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./employetimesheet/employetimesheet.component */ "./src/app/layouts/admin-layout/employetimesheet/employetimesheet.component.ts");
/* harmony import */ var _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./configuration/configuration.component */ "./src/app/layouts/admin-layout/configuration/configuration.component.ts");
/* harmony import */ var _leavetype_leavetype_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../leavetype/leavetype.component */ "./src/app/layouts/leavetype/leavetype.component.ts");
/* harmony import */ var _holidays_holidays_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../holidays/holidays.component */ "./src/app/holidays/holidays.component.ts");
/* harmony import */ var _employesearch_employesearch_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./employesearch/employesearch.component */ "./src/app/layouts/admin-layout/employesearch/employesearch.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! primeng/toolbar */ "./node_modules/primeng/toolbar.js");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(primeng_toolbar__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! primeng/splitbutton */ "./node_modules/primeng/splitbutton.js");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(primeng_splitbutton__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/inputtextarea.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_55__);



























































var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_34__["AdminLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_14__["ChartsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                primeng_editor__WEBPACK_IMPORTED_MODULE_20__["EditorModule"],
                primeng_growl__WEBPACK_IMPORTED_MODULE_16__["GrowlModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_17__["ToastModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_18__["CardModule"],
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_19__["CheckboxModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                primeng_paginator__WEBPACK_IMPORTED_MODULE_22__["PaginatorModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_23__["PanelModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_28__["QuillModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_29__["ButtonModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_24__["TableModule"],
                primeng_tabview__WEBPACK_IMPORTED_MODULE_26__["TabViewModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_27__["DialogModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_25__["DropdownModule"],
                primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_49__["ConfirmDialogModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_50__["CalendarModule"],
                primeng_toolbar__WEBPACK_IMPORTED_MODULE_51__["ToolbarModule"],
                primeng_splitbutton__WEBPACK_IMPORTED_MODULE_52__["SplitButtonModule"],
                primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_53__["InputTextareaModule"],
                primeng_fileupload__WEBPACK_IMPORTED_MODULE_54__["FileUploadModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_55__["RadioButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_13__["CdkTableModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_55__["MultiSelectModule"]
            ],
            declarations: [
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_35__["UserProfileComponent"],
                _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_36__["TableListComponent"],
                _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_40__["UpgradeComponent"],
                _icons_icons_component__WEBPACK_IMPORTED_MODULE_37__["IconsComponent"],
                _maps_maps_component__WEBPACK_IMPORTED_MODULE_38__["MapsComponent"],
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_39__["NotificationsComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_33__["SearchComponent"],
                _user_profile_addarticle_addarticle_component__WEBPACK_IMPORTED_MODULE_41__["AddarticleComponent"],
                _user_profile_editarticle_editarticle_component__WEBPACK_IMPORTED_MODULE_32__["EditarticleComponent"],
                _user_profile_readmore_readmore_component__WEBPACK_IMPORTED_MODULE_31__["ReadmoreComponent"],
                _leavecomp_leavecomp_component__WEBPACK_IMPORTED_MODULE_30__["LeavecompComponent"],
                _holidays_holidays_component__WEBPACK_IMPORTED_MODULE_46__["HolidaysComponent"],
                _employesearch_employesearch_component__WEBPACK_IMPORTED_MODULE_47__["EmployesearchComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_48__["ProfileComponent"],
                _employetimesheet_employetimesheet_component__WEBPACK_IMPORTED_MODULE_43__["EmployetimesheetComponent"],
                _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_44__["ConfigurationComponent"],
                _leavetype_leavetype_component__WEBPACK_IMPORTED_MODULE_45__["LeavetypeComponent"]
            ],
            providers: [_app_shared_base64_encode_decode__WEBPACK_IMPORTED_MODULE_42__["Base64EncodeDecode"], primeng_api__WEBPACK_IMPORTED_MODULE_21__["MessageService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], primeng_api__WEBPACK_IMPORTED_MODULE_21__["ConfirmationService"],
            ]
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/*! exports provided: AdminLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function() { return AdminLayoutRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration/configuration.component */ "./src/app/layouts/admin-layout/configuration/configuration.component.ts");
/* harmony import */ var _leavecomp_leavecomp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../leavecomp/leavecomp.component */ "./src/app/leavecomp/leavecomp.component.ts");
/* harmony import */ var _user_profile_readmore_readmore_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../user-profile/readmore/readmore.component */ "./src/app/user-profile/readmore/readmore.component.ts");
/* harmony import */ var _user_profile_editarticle_editarticle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../user-profile/editarticle/editarticle.component */ "./src/app/user-profile/editarticle/editarticle.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../table-list/table-list.component */ "./src/app/table-list/table-list.component.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons/icons.component */ "./src/app/icons/icons.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../notifications/notifications.component */ "./src/app/notifications/notifications.component.ts");
/* harmony import */ var _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../upgrade/upgrade.component */ "./src/app/upgrade/upgrade.component.ts");
/* harmony import */ var _user_profile_addarticle_addarticle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../user-profile/addarticle/addarticle.component */ "./src/app/user-profile/addarticle/addarticle.component.ts");
/* harmony import */ var _holidays_holidays_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../holidays/holidays.component */ "./src/app/holidays/holidays.component.ts");
/* harmony import */ var _employesearch_employesearch_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./employesearch/employesearch.component */ "./src/app/layouts/admin-layout/employesearch/employesearch.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _employetimesheet_employetimesheet_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./employetimesheet/employetimesheet.component */ "./src/app/layouts/admin-layout/employetimesheet/employetimesheet.component.ts");
/* harmony import */ var _leavetype_leavetype_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../leavetype/leavetype.component */ "./src/app/layouts/leavetype/leavetype.component.ts");
















var AdminLayoutRoutes = [
    { path: 'dashboard', loadChildren: '../../dashboard/dashboard.module#DashboardModule' },
    { path: 'user-profile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["UserProfileComponent"] },
    { path: 'table-list', component: _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_6__["TableListComponent"] },
    { path: 'settings', loadChildren: '../../typography/settings.module#SettingsModule' },
    { path: 'icons', component: _icons_icons_component__WEBPACK_IMPORTED_MODULE_7__["IconsComponent"] },
    // { path: 'taskboards', component: ProjectdashboardLayoutComponent },
    { path: 'notifications', component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__["NotificationsComponent"] },
    { path: 'upgrade', component: _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_9__["UpgradeComponent"] },
    { path: 'add', component: _user_profile_addarticle_addarticle_component__WEBPACK_IMPORTED_MODULE_10__["AddarticleComponent"] },
    { path: 'edit', component: _user_profile_editarticle_editarticle_component__WEBPACK_IMPORTED_MODULE_4__["EditarticleComponent"] },
    {
        path: 'readmore', component: _user_profile_readmore_readmore_component__WEBPACK_IMPORTED_MODULE_3__["ReadmoreComponent"]
    },
    {
        path: 'Leave', component: _leavecomp_leavecomp_component__WEBPACK_IMPORTED_MODULE_2__["LeavecompComponent"]
    },
    {
        path: 'holiday', component: _holidays_holidays_component__WEBPACK_IMPORTED_MODULE_11__["HolidaysComponent"]
    },
    {
        path: 'search', component: _employesearch_employesearch_component__WEBPACK_IMPORTED_MODULE_12__["EmployesearchComponent"]
    },
    {
        path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"]
    },
    {
        path: 'timesheet', component: _employetimesheet_employetimesheet_component__WEBPACK_IMPORTED_MODULE_14__["EmployetimesheetComponent"]
    },
    {
        path: 'configuration', component: _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_1__["ConfigurationComponent"]
    },
    {
        path: 'LeaveTypes', component: _leavetype_leavetype_component__WEBPACK_IMPORTED_MODULE_15__["LeavetypeComponent"]
    }
];


/***/ }),

/***/ "./src/app/layouts/admin-layout/configuration/config.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/configuration/config.ts ***!
  \**************************************************************/
/*! exports provided: PaymentType, Gender, MaxLeavesAllowed, TotalDays, CarrForword, ExpiresIn, Encashment, WeekEndsBetweenLeaves, HolyDaysBetweenLeaves, LeaveSubmitFor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentType", function() { return PaymentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gender", function() { return Gender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxLeavesAllowed", function() { return MaxLeavesAllowed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalDays", function() { return TotalDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrForword", function() { return CarrForword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpiresIn", function() { return ExpiresIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Encashment", function() { return Encashment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekEndsBetweenLeaves", function() { return WeekEndsBetweenLeaves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolyDaysBetweenLeaves", function() { return HolyDaysBetweenLeaves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveSubmitFor", function() { return LeaveSubmitFor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var PaymentType = /** @class */ (function () {
    function PaymentType(value, viewValue) {
        this.value = value;
        this.viewValue = viewValue;
    }
    return PaymentType;
}());

var Gender = /** @class */ (function () {
    function Gender(id, name) {
        this.id = id;
        this.name = name;
    }
    return Gender;
}());

var MaxLeavesAllowed = /** @class */ (function () {
    function MaxLeavesAllowed(id) {
        this.id = id;
    }
    return MaxLeavesAllowed;
}());

var TotalDays = /** @class */ (function () {
    function TotalDays(id) {
        this.id = id;
    }
    return TotalDays;
}());

var CarrForword = /** @class */ (function () {
    function CarrForword(id) {
        this.id = id;
    }
    return CarrForword;
}());

var ExpiresIn = /** @class */ (function () {
    function ExpiresIn(id) {
        this.id = id;
    }
    return ExpiresIn;
}());

var Encashment = /** @class */ (function () {
    function Encashment(id) {
        this.id = id;
    }
    return Encashment;
}());

var WeekEndsBetweenLeaves = /** @class */ (function () {
    function WeekEndsBetweenLeaves(id) {
        this.id = id;
    }
    return WeekEndsBetweenLeaves;
}());

var HolyDaysBetweenLeaves = /** @class */ (function () {
    function HolyDaysBetweenLeaves(id) {
        this.id = id;
    }
    return HolyDaysBetweenLeaves;
}());

var LeaveSubmitFor = /** @class */ (function () {
    function LeaveSubmitFor(id) {
        this.id = id;
    }
    return LeaveSubmitFor;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/configuration/configuration.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/layouts/admin-layout/configuration/configuration.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body .ui-tabview.ui-tabview-top .ui-tabview-nav li {\n  margin-right: 2px;\n  border: 0px; }\n\n.ui-dropdown-label-container {\n  width: 100%; }\n\n.mat-tab-group {\n  height: 100%; }\n\n.mat-tab-body-wrapper {\n  -webkit-box-flex: 1;\n          flex-grow: 1; }\n\n.mat-tab-body {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.mat-tab-body-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex-grow: 1; }\n\n.row {\n  padding: 5px; }\n\n.space {\n  padding-right: 3px; }\n\n.border {\n  border-top: 5px solid; }\n\nbody .ui-tabview.ui-tabview-top .ui-tabview-nav li {\n  margin-right: 2px;\n  border: 0px; }\n\n.ui-dropdown-label-container {\n  width: 100%; }\n\n.mat-tab-group {\n  height: 100%; }\n\n.mat-tab-body-wrapper {\n  -webkit-box-flex: 1;\n          flex-grow: 1; }\n\n.mat-tab-body {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.mat-tab-body-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex-grow: 1; }\n\n.row {\n  padding: 5px; }\n\n.space {\n  padding-right: 3px; }\n\np-footer.button {\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9hZG1pbi1sYXlvdXQvY29uZmlndXJhdGlvbi9DOlxcVXNlcnNcXGFzdW5rb3BwYWRcXERlc2t0b3BcXG5ld3pvb21cXHpvb210ZWFtcy13ZWItbmcvc3JjXFxhcHBcXGxheW91dHNcXGFkbWluLWxheW91dFxcY29uZmlndXJhdGlvblxcY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBS1g7RUFDQSxXQUFXLEVBQUE7O0FBR1g7RUFDQSxZQUFZLEVBQUE7O0FBRVo7RUFDQSxtQkFBWTtVQUFaLFlBQVksRUFBQTs7QUFHWjtFQUNBLCtCQUF3QjtFQUF4Qix3QkFBd0I7RUFDeEIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTs7QUFHdEI7RUFDQSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixtQkFBWTtVQUFaLFlBQVksRUFBQTs7QUFFWjtFQUNBLFlBQVksRUFBQTs7QUFFWjtFQUNBLGtCQUFrQixFQUFBOztBQUVsQjtFQUNBLHFCQUFxQixFQUFBOztBQU1yQjtFQUNBLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBS1g7RUFDQSxXQUFXLEVBQUE7O0FBR1g7RUFDQSxZQUFZLEVBQUE7O0FBRVo7RUFDQSxtQkFBWTtVQUFaLFlBQVksRUFBQTs7QUFHWjtFQUNBLCtCQUF3QjtFQUF4Qix3QkFBd0I7RUFDeEIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTs7QUFHdEI7RUFDQSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixtQkFBWTtVQUFaLFlBQVksRUFBQTs7QUFFWjtFQUNBLFlBQVksRUFBQTs7QUFFWjtFQUNBLGtCQUFrQixFQUFBOztBQUdsQjtFQUNBLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5ib2R5IC51aS10YWJ2aWV3LnVpLXRhYnZpZXctdG9wIC51aS10YWJ2aWV3LW5hdiBsaSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC51aS1kcm9wZG93bi1sYWJlbC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1hdC10YWItZ3JvdXB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAubWF0LXRhYi1ib2R5LXdyYXBwZXIge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICB9XHJcblxyXG4gIC5tYXQtdGFiLWJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLm1hdC10YWItYm9keS1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIH1cclxuICAucm93e1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbiAgLnNwYWNle1xyXG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcclxuICB9XHJcbiAgLmJvcmRlcntcclxuICBib3JkZXItdG9wOiA1cHggc29saWQ7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICBib2R5IC51aS10YWJ2aWV3LnVpLXRhYnZpZXctdG9wIC51aS10YWJ2aWV3LW5hdiBsaSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC51aS1kcm9wZG93bi1sYWJlbC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1hdC10YWItZ3JvdXB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAubWF0LXRhYi1ib2R5LXdyYXBwZXIge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICB9XHJcblxyXG4gIC5tYXQtdGFiLWJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLm1hdC10YWItYm9keS1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIH1cclxuICAucm93e1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbiAgLnNwYWNle1xyXG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcclxuICB9XHJcblxyXG4gIHAtZm9vdGVyLmJ1dHRvbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuIl19 */");

/***/ }),

/***/ "./src/app/layouts/admin-layout/configuration/configuration.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layouts/admin-layout/configuration/configuration.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function() { return ConfigurationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_appservices_leavemanagement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/appservices/leavemanagement.service */ "./src/app/services/appservices/leavemanagement.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_master_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _leavetype_leavetypess__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../leavetype/leavetypess */ "./src/app/layouts/leavetype/leavetypess.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config */ "./src/app/layouts/admin-layout/configuration/config.ts");











var ConfigurationComponent = /** @class */ (function () {
    function ConfigurationComponent(_data, fb, masterService, messageService, _router) {
        var _this = this;
        this._data = _data;
        this.fb = fb;
        this.masterService = masterService;
        this.messageService = messageService;
        this._router = _router;
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.submitted = false;
        this.name = 'New payment type';
        this.isEditable = false;
        this.payment = [
            new _config__WEBPACK_IMPORTED_MODULE_10__["PaymentType"](1, 'Paid'),
            new _config__WEBPACK_IMPORTED_MODULE_10__["PaymentType"](2, 'Unpaid'),
        ];
        this.gender = [
            new _config__WEBPACK_IMPORTED_MODULE_10__["Gender"](1, 'male'),
            new _config__WEBPACK_IMPORTED_MODULE_10__["Gender"](2, 'Female'),
            new _config__WEBPACK_IMPORTED_MODULE_10__["Gender"](3, 'Others')
        ];
        this.maxleavesallowed = [
            new _config__WEBPACK_IMPORTED_MODULE_10__["MaxLeavesAllowed"](0),
            new _config__WEBPACK_IMPORTED_MODULE_10__["MaxLeavesAllowed"](1),
            new _config__WEBPACK_IMPORTED_MODULE_10__["MaxLeavesAllowed"](2)
        ];
        this.totaldays = [
            new _config__WEBPACK_IMPORTED_MODULE_10__["TotalDays"](0),
            new _config__WEBPACK_IMPORTED_MODULE_10__["TotalDays"](1),
            new _config__WEBPACK_IMPORTED_MODULE_10__["TotalDays"](2),
            new _config__WEBPACK_IMPORTED_MODULE_10__["TotalDays"](3),
            new _config__WEBPACK_IMPORTED_MODULE_10__["TotalDays"](4),
            new _config__WEBPACK_IMPORTED_MODULE_10__["TotalDays"](5),
            new _config__WEBPACK_IMPORTED_MODULE_10__["TotalDays"](6),
            new _config__WEBPACK_IMPORTED_MODULE_10__["TotalDays"](7),
            new _config__WEBPACK_IMPORTED_MODULE_10__["TotalDays"](8),
            new _config__WEBPACK_IMPORTED_MODULE_10__["TotalDays"](9),
            new _config__WEBPACK_IMPORTED_MODULE_10__["TotalDays"](10),
            new _config__WEBPACK_IMPORTED_MODULE_10__["TotalDays"](11),
            new _config__WEBPACK_IMPORTED_MODULE_10__["TotalDays"](12),
            new _config__WEBPACK_IMPORTED_MODULE_10__["TotalDays"](13),
            new _config__WEBPACK_IMPORTED_MODULE_10__["TotalDays"](14),
            new _config__WEBPACK_IMPORTED_MODULE_10__["TotalDays"](15),
            new _config__WEBPACK_IMPORTED_MODULE_10__["TotalDays"](16),
            new _config__WEBPACK_IMPORTED_MODULE_10__["TotalDays"](17),
            new _config__WEBPACK_IMPORTED_MODULE_10__["TotalDays"](18),
            new _config__WEBPACK_IMPORTED_MODULE_10__["TotalDays"](19),
            new _config__WEBPACK_IMPORTED_MODULE_10__["TotalDays"](20)
        ];
        this.carryforword = [
            new _config__WEBPACK_IMPORTED_MODULE_10__["CarrForword"](10),
            new _config__WEBPACK_IMPORTED_MODULE_10__["CarrForword"](20),
            new _config__WEBPACK_IMPORTED_MODULE_10__["CarrForword"](30),
            new _config__WEBPACK_IMPORTED_MODULE_10__["CarrForword"](50),
            new _config__WEBPACK_IMPORTED_MODULE_10__["CarrForword"](25),
        ];
        this.encashment = [
            new _config__WEBPACK_IMPORTED_MODULE_10__["Encashment"](40),
            new _config__WEBPACK_IMPORTED_MODULE_10__["Encashment"](70),
            new _config__WEBPACK_IMPORTED_MODULE_10__["Encashment"](60),
            new _config__WEBPACK_IMPORTED_MODULE_10__["Encashment"](45),
            new _config__WEBPACK_IMPORTED_MODULE_10__["Encashment"](55),
        ];
        this.expiresin = [
            new _config__WEBPACK_IMPORTED_MODULE_10__["ExpiresIn"](5),
            new _config__WEBPACK_IMPORTED_MODULE_10__["ExpiresIn"](0),
            new _config__WEBPACK_IMPORTED_MODULE_10__["ExpiresIn"](2),
            new _config__WEBPACK_IMPORTED_MODULE_10__["ExpiresIn"](3),
            new _config__WEBPACK_IMPORTED_MODULE_10__["ExpiresIn"](3),
        ];
        this.weekendsbetweenleaves = [
            new _config__WEBPACK_IMPORTED_MODULE_10__["WeekEndsBetweenLeaves"](0),
            new _config__WEBPACK_IMPORTED_MODULE_10__["WeekEndsBetweenLeaves"](1),
            new _config__WEBPACK_IMPORTED_MODULE_10__["WeekEndsBetweenLeaves"](2),
            new _config__WEBPACK_IMPORTED_MODULE_10__["WeekEndsBetweenLeaves"](3),
            new _config__WEBPACK_IMPORTED_MODULE_10__["WeekEndsBetweenLeaves"](4),
            new _config__WEBPACK_IMPORTED_MODULE_10__["WeekEndsBetweenLeaves"](5),
            new _config__WEBPACK_IMPORTED_MODULE_10__["WeekEndsBetweenLeaves"](6),
            new _config__WEBPACK_IMPORTED_MODULE_10__["WeekEndsBetweenLeaves"](7),
            new _config__WEBPACK_IMPORTED_MODULE_10__["WeekEndsBetweenLeaves"](8),
            new _config__WEBPACK_IMPORTED_MODULE_10__["WeekEndsBetweenLeaves"](9),
            new _config__WEBPACK_IMPORTED_MODULE_10__["WeekEndsBetweenLeaves"](10),
            new _config__WEBPACK_IMPORTED_MODULE_10__["WeekEndsBetweenLeaves"](11),
            new _config__WEBPACK_IMPORTED_MODULE_10__["WeekEndsBetweenLeaves"](12),
            new _config__WEBPACK_IMPORTED_MODULE_10__["WeekEndsBetweenLeaves"](13),
            new _config__WEBPACK_IMPORTED_MODULE_10__["WeekEndsBetweenLeaves"](14),
            new _config__WEBPACK_IMPORTED_MODULE_10__["WeekEndsBetweenLeaves"](15),
            new _config__WEBPACK_IMPORTED_MODULE_10__["WeekEndsBetweenLeaves"](16),
            new _config__WEBPACK_IMPORTED_MODULE_10__["WeekEndsBetweenLeaves"](17),
            new _config__WEBPACK_IMPORTED_MODULE_10__["WeekEndsBetweenLeaves"](18),
            new _config__WEBPACK_IMPORTED_MODULE_10__["WeekEndsBetweenLeaves"](19),
            new _config__WEBPACK_IMPORTED_MODULE_10__["WeekEndsBetweenLeaves"](20)
        ];
        this.holydaysbetweenleaves = [
            new _config__WEBPACK_IMPORTED_MODULE_10__["HolyDaysBetweenLeaves"](0),
            new _config__WEBPACK_IMPORTED_MODULE_10__["HolyDaysBetweenLeaves"](1),
            new _config__WEBPACK_IMPORTED_MODULE_10__["HolyDaysBetweenLeaves"](2),
            new _config__WEBPACK_IMPORTED_MODULE_10__["HolyDaysBetweenLeaves"](3),
            new _config__WEBPACK_IMPORTED_MODULE_10__["HolyDaysBetweenLeaves"](4),
            new _config__WEBPACK_IMPORTED_MODULE_10__["HolyDaysBetweenLeaves"](5),
            new _config__WEBPACK_IMPORTED_MODULE_10__["HolyDaysBetweenLeaves"](6),
            new _config__WEBPACK_IMPORTED_MODULE_10__["HolyDaysBetweenLeaves"](7),
            new _config__WEBPACK_IMPORTED_MODULE_10__["HolyDaysBetweenLeaves"](8),
            new _config__WEBPACK_IMPORTED_MODULE_10__["HolyDaysBetweenLeaves"](9),
            new _config__WEBPACK_IMPORTED_MODULE_10__["HolyDaysBetweenLeaves"](10),
            new _config__WEBPACK_IMPORTED_MODULE_10__["HolyDaysBetweenLeaves"](11),
            new _config__WEBPACK_IMPORTED_MODULE_10__["HolyDaysBetweenLeaves"](12),
            new _config__WEBPACK_IMPORTED_MODULE_10__["HolyDaysBetweenLeaves"](13),
            new _config__WEBPACK_IMPORTED_MODULE_10__["HolyDaysBetweenLeaves"](14),
            new _config__WEBPACK_IMPORTED_MODULE_10__["HolyDaysBetweenLeaves"](15),
            new _config__WEBPACK_IMPORTED_MODULE_10__["HolyDaysBetweenLeaves"](16),
            new _config__WEBPACK_IMPORTED_MODULE_10__["HolyDaysBetweenLeaves"](17),
            new _config__WEBPACK_IMPORTED_MODULE_10__["HolyDaysBetweenLeaves"](18),
            new _config__WEBPACK_IMPORTED_MODULE_10__["HolyDaysBetweenLeaves"](19),
            new _config__WEBPACK_IMPORTED_MODULE_10__["HolyDaysBetweenLeaves"](20)
        ];
        this.leavesubmitfor = [
            new _config__WEBPACK_IMPORTED_MODULE_10__["LeaveSubmitFor"](0),
            new _config__WEBPACK_IMPORTED_MODULE_10__["LeaveSubmitFor"](1),
            new _config__WEBPACK_IMPORTED_MODULE_10__["LeaveSubmitFor"](2),
            new _config__WEBPACK_IMPORTED_MODULE_10__["LeaveSubmitFor"](3),
            new _config__WEBPACK_IMPORTED_MODULE_10__["LeaveSubmitFor"](4),
            new _config__WEBPACK_IMPORTED_MODULE_10__["LeaveSubmitFor"](5),
            new _config__WEBPACK_IMPORTED_MODULE_10__["LeaveSubmitFor"](6),
            new _config__WEBPACK_IMPORTED_MODULE_10__["LeaveSubmitFor"](7),
            new _config__WEBPACK_IMPORTED_MODULE_10__["LeaveSubmitFor"](8),
            new _config__WEBPACK_IMPORTED_MODULE_10__["LeaveSubmitFor"](9),
            new _config__WEBPACK_IMPORTED_MODULE_10__["LeaveSubmitFor"](10),
            new _config__WEBPACK_IMPORTED_MODULE_10__["LeaveSubmitFor"](11),
            new _config__WEBPACK_IMPORTED_MODULE_10__["LeaveSubmitFor"](12),
            new _config__WEBPACK_IMPORTED_MODULE_10__["LeaveSubmitFor"](13),
            new _config__WEBPACK_IMPORTED_MODULE_10__["LeaveSubmitFor"](14),
            new _config__WEBPACK_IMPORTED_MODULE_10__["LeaveSubmitFor"](15),
            new _config__WEBPACK_IMPORTED_MODULE_10__["LeaveSubmitFor"](16),
            new _config__WEBPACK_IMPORTED_MODULE_10__["LeaveSubmitFor"](17),
            new _config__WEBPACK_IMPORTED_MODULE_10__["LeaveSubmitFor"](18),
            new _config__WEBPACK_IMPORTED_MODULE_10__["LeaveSubmitFor"](19),
            new _config__WEBPACK_IMPORTED_MODULE_10__["LeaveSubmitFor"](20)
        ];
        // For Adding LeaveTypeName
        // onAddLeaveTypeName() {
        // if (this.editForm.value.content === null) {
        // const validationMessage = 'Editor is empty';
        // this.messageService.add({
        // severity: 'error',
        // summary: 'Error Message',
        // detail: validationMessage
        // });
        // } else {
        // this._data.addEditLeaveName1(
        // new LeaveTypes(
        // this.editForm.value.id,
        // this.editForm.value.organizationid,
        // this.editForm.value.locationid,
        // this.editForm.value.name,
        // this.editForm.value.organizationName,
        // this.editForm.value.carryforwardpercentage,
        // this.editForm.value.encashmentpercentage,
        // this.editForm.value.accuralDate,
        // this.editForm.value.resetDate,
        // this.editForm.value.totalleavesperyear,
        // this.editForm.value.maxcontinuousleave,
        // this.editForm.value.isactive,
        // this.editForm.value.createdate,
        // this.editForm.value.createdby,
        // this.editForm.value.modifieddate,
        // this.editForm.value.modifiedby,
        // this.editForm.value.expiresinmonths,
        // this.editForm.value.includeweekendsafterdays,
        // this.editForm.value.includewholidaysafterdays,
        // this.editForm.value.exceedleave,
        // this.editForm.value.exceedLeaveAsLOP,
        // this.editForm.value.allowHalfDay,
        // this.editForm.value.requestLeaveBeforeDays,
        // this.editForm.value.leavetype,
        // this.editForm.value.enableFileUpload,
        // this.editForm.value.genderids,
        // this.editForm.value.departmentids,
        // this.editForm.value.designationids,
        // this.editForm.value.locationids,
        // this.editForm.value.roleids
        // )
        // ).subscribe(
        // (x) => {
        // const successMessage = 'Article Added Successfuly';
        // this.messageService.add({
        // severity: 'success',
        // summary: 'Success',
        // detail: successMessage
        // });
        // },
        // error=>{
        // this.messageService.add({severity:'error',detail:'server not responding'});
        // }
        // );
        // }
        // this._router.navigate(['/LeaveTypes']);
        // }
        this.isDisabled = true;
        this._subscriptions.add(this._subscriptions.add(this._router.routerState.root.queryParams.subscribe(function (params) {
            _this.queryparams = params['id'];
            console.log(_this.queryparams);
        })));
    }
    ConfigurationComponent.prototype.ngOnInit = function () {
        this.getAllDepartments();
        this.getAllRoles();
        this.getAllDesig();
        this.getAllLocations();
        this.getLeaveTypesForEdit();
        this.editForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            carryforwardpercentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            encashmentpercentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            accuralDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            resetDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            totalleavesperyear: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            maxcontinuousleave: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            isactive: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            createdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            createdby: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            modifieddate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            modifiedby: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            expiresinmonths: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            includeweekendsafterdays: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            includewholidaysafterdays: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            exceedleave: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            exceedLeaveAsLOP: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            allowHalfDay: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            requestLeaveBeforeDays: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            locationids: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            genderids: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            departmentids: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            designationids: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            roleids: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
        });
    };
    ConfigurationComponent.prototype.getLeaveTypesForEdit = function () {
        var _this = this;
        this.messageService.add({
            severity: 'success',
            detail: 'Processing...'
        });
        this._subscriptions.add(this._data.getLeaveTypes().subscribe(function (data) {
            _this.leavetypedetails = data;
            console.log(_this.leavetypedetails);
            _this.selectedleave = lodash__WEBPACK_IMPORTED_MODULE_8__["filter"](_this.leavetypedetails, function (l) {
                return l.id == _this.queryparams;
            });
            console.log(_this.selectedleave);
            _this.editForm.patchValue({
                name: _this.selectedleave[0].name,
                accuralDate: _this.selectedleave[0].accuralDate,
                resetDate: _this.selectedleave[0].resetDate,
                totalleavesperyear: _this.selectedleave[0].totalleavesperyear,
                maxcontinuousleave: _this.selectedleave[0].maxcontinuousleave,
                carryforwardpercentage: _this.selectedleave[0].carryforwardpercentage,
                expiresinmonths: _this.selectedleave[0].expiresinmonths,
                encashmentpercentage: _this.selectedleave[0].encashmentpercentage,
                includeweekendsafterdays: _this.selectedleave[0].includeweekendsafterdays,
                includewholidaysafterdays: _this.selectedleave[0].includewholidaysafterdays,
                requestLeaveBeforeDays: _this.selectedleave[0].requestLeaveBeforeDays,
                allowHalfDay: _this.selectedleave[0].allowHalfDay,
            });
            // console.log(this.leavetypedetails.name);
        }));
    };
    ConfigurationComponent.prototype.onFormSubmit = function (editForm) {
        var _this = this;
        var ErrorMsgNotification = this.masterService.getFormErrorMessage(editForm, this.editForm);
        if (ErrorMsgNotification !== undefined) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error Message',
                detail: ErrorMsgNotification
            });
        }
        else {
            this.submitted = true;
            var accuralDate = new Date(this.editForm.value.accuralDate).toISOString().slice(0, 10);
            this.editForm.value.accuralDate = accuralDate;
            var resetDate = new Date(this.editForm.value.resetDate).toISOString().slice(0, 10);
            this.editForm.value.accuralDate = resetDate;
            if (this.id !== undefined) {
                this._data.addEditLeavesTypes(new _leavetype_leavetypess__WEBPACK_IMPORTED_MODULE_9__["LeaveTypes"](this.editForm.value.id, this.editForm.value.organizationid, this.editForm.value.locationid, this.editForm.value.name, this.editForm.value.organizationName, this.editForm.value.carryforwardpercentage, this.editForm.value.encashmentpercentage, this.editForm.value.accuralDate, this.editForm.value.resetDate, this.editForm.value.totalleavesperyear, this.editForm.value.maxcontinuousleave, this.editForm.value.isactive, this.editForm.value.createdate, this.editForm.value.createdby, this.editForm.value.modifieddate, this.editForm.value.modifiedby, this.editForm.value.expiresinmonths, this.editForm.value.includeweekendsafterdays, this.editForm.value.includewholidaysafterdays, this.editForm.value.exceedleave, this.editForm.value.exceedLeaveAsLOP, this.editForm.value.allowHalfDay, this.editForm.value.requestLeaveBeforeDays, this.editForm.value.leavetype, this.editForm.value.enableFileUpload, this.editForm.value.genderids, this.editForm.value.departmentids, this.editForm.value.designationids, this.editForm.value.locationids, this.editForm.value.roleids))
                    .subscribe(function (x) {
                    var successMessage = 'Addated Successfuly';
                    _this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: successMessage
                    });
                    setTimeout(function () {
                        _this._router.navigate(['/LeaveTypes']);
                    }, 1000);
                }, function (error) {
                    _this.messageService.add({ severity: 'error', detail: 'server not responding' });
                });
            }
            else {
                if (this.editForm.value.Content === null) {
                    var validationMessage = 'Editor is empty';
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error Message',
                        detail: validationMessage
                    });
                }
                else {
                    var req = {
                        name: this.editForm.value.name,
                        accuralDate: this.editForm.value.accuralDate,
                        resetDate: this.editForm.value.resetDate,
                        totalleavesperyear: this.editForm.value.totalleavesperyear,
                        maxcontinuousleave: this.editForm.value.maxcontinuousleave,
                        carryforwardpercentage: this.editForm.value.carryforwardpercentage,
                        expiresinmonths: this.editForm.value.expiresinmonths,
                        encashmentpercentage: this.editForm.value.encashmentpercentage,
                        locationids: this.editForm.value.locationids
                    };
                    this._subscriptions.add(this._data.addEditLeavesTypes(req).subscribe(function (res) {
                        if (res) {
                            var successMessage = 'Updated Successfuly';
                            _this.messageService.add({
                                severity: 'success',
                                summary: 'Success',
                                detail: successMessage
                            });
                            setTimeout(function () {
                                _this._router.navigate(['/LeaveTypes']);
                            }, 1000);
                        }
                    }, function (error) {
                    }));
                }
            }
        }
        this._router.navigate(['/LeaveTypes']);
    };
    ConfigurationComponent.prototype.flip = function () {
        this.isDisabled = !this.isDisabled;
    };
    ConfigurationComponent.prototype.onEditClick = function () {
        this.isEditable = true;
    };
    ConfigurationComponent.prototype.getAllDepartments = function () {
        var _this = this;
        this._subscriptions.add(this._data.getdepartment().subscribe(function (data) {
            _this.arr1 = data;
            // console.log('location list:', this.arr1);
        }));
    };
    ConfigurationComponent.prototype.getAllRoles = function () {
        var _this = this;
        this._subscriptions.add(this._data.getroles().subscribe(function (data) {
            _this.arr2 = data;
            // console.log('location list:', this.arr2);
        }));
    };
    ConfigurationComponent.prototype.getAllDesig = function () {
        var _this = this;
        this._subscriptions.add(this._data.getdesig().subscribe(function (data) {
            _this.arr3 = data;
            // console.log('location list:', this.arr3);
        }));
    };
    ConfigurationComponent.prototype.getAllLocations = function () {
        var _this = this;
        this._subscriptions.add(this._data.getlocations().subscribe(function (data) {
            _this.ListOfLocations = data;
            // console.log('location list:', this.ListOfLocations);
        }));
    };
    // getName(){
    // this._data.getLeaveTypes()
    // }
    ConfigurationComponent.prototype.formatDate = function (date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }
        return [year, month, day].join('-');
    };
    ConfigurationComponent.prototype.ngOnDestroy = function () {
        this._subscriptions.unsubscribe();
    };
    ConfigurationComponent.ctorParameters = function () { return [
        { type: _services_appservices_leavemanagement_service__WEBPACK_IMPORTED_MODULE_3__["LeavemanagementService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _services_master_service__WEBPACK_IMPORTED_MODULE_5__["MasterService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    ConfigurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-configuration',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./configuration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/configuration/configuration.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./configuration.component.scss */ "./src/app/layouts/admin-layout/configuration/configuration.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_appservices_leavemanagement_service__WEBPACK_IMPORTED_MODULE_3__["LeavemanagementService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_master_service__WEBPACK_IMPORTED_MODULE_5__["MasterService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], ConfigurationComponent);
    return ConfigurationComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/employeetimesheet.ts":
/*!***********************************************************!*\
  !*** ./src/app/layouts/admin-layout/employeetimesheet.ts ***!
  \***********************************************************/
/*! exports provided: Employeetimesheet, Checkstatus1, Checkstatus2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employeetimesheet", function() { return Employeetimesheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkstatus1", function() { return Checkstatus1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkstatus2", function() { return Checkstatus2; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Employeetimesheet = /** @class */ (function () {
    function Employeetimesheet(id, name, projectname, modulename, taskdescription, timespent, 
    // public fromdate: string,
    fromdate, status) {
        this.id = id;
        this.name = name;
        this.projectname = projectname;
        this.modulename = modulename;
        this.taskdescription = taskdescription;
        this.timespent = timespent;
        this.fromdate = fromdate;
        this.status = status;
    }
    return Employeetimesheet;
}());

var Checkstatus1 = /** @class */ (function () {
    function Checkstatus1(id, name) {
        this.id = id;
        this.name = name;
    }
    return Checkstatus1;
}());

var Checkstatus2 = /** @class */ (function () {
    function Checkstatus2(name1, name2) {
        this.name1 = name1;
        this.name2 = name2;
    }
    return Checkstatus2;
}());

// export interface Car {
//   vin;
//   year;
//   brand;
//   color;
// }


/***/ }),

/***/ "./src/app/layouts/admin-layout/employesearch/employesearch.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/layouts/admin-layout/employesearch/employesearch.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n  padding-left: 10px;\n  padding-right: 10px; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n.mat-table {\n  width: 100%;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-left: 15px;\n  margin-right: 15px; }\n\n.design {\n  padding-left: 2%;\n  padding-right: 80%; }\n\n.design1 {\n  padding-left: 80%;\n  float: right; }\n\n.mat-paginator {\n  margin-left: 15px; }\n\nmat-header-cell {\n  font-weight: bold;\n  font-size: 15px; }\n\n.container-fluid {\n  width: 100%;\n  padding-right: 36px;\n  padding-left: 7px;\n  margin-right: auto;\n  margin-left: auto; }\n\n.mat-paginator {\n  margin-left: 15px;\n  margin-right: -15px; }\n\n.row {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n  padding-left: 0.3%; }\n\n.mat-lable {\n  font-size: 22px; }\n\n@media (min-width: 767px) {\n  .mat-dialog-container.mat-label {\n    font-size: 17px; } }\n\n@media screen and (max-width: 960px) {\n  mat-cell:first-of-type, mat-footer-cell:first-of-type, mat-header-cell:first-of-type {\n    padding-left: 0px; }\n  .mat-table {\n    border: 0;\n    vertical-align: middle; }\n  mat-footer-row, mat-header-row, mat-row {\n    display: none; }\n  .mat-table caption {\n    font-size: 1em; }\n  .mat-table .mat-row {\n    border-bottom: 5px solid #ddd;\n    display: block; }\n  .mat-table .mat-cell {\n    border-bottom: 1px solid #ddd;\n    display: block;\n    font-size: 1em;\n    text-align: right;\n    font-weight: bold;\n    height: 30px;\n    margin-bottom: 4%;\n    margin-left: 4%;\n    margin-right: 4%; }\n  .mat-table .mat-cell:before {\n    content: attr(data-label);\n    float: left;\n    text-transform: uppercase;\n    font-weight: normal;\n    font-size: .85em; }\n  .mat-table .mat-cell:last-child {\n    border-bottom: 0; }\n  .mat-table .mat-cell:first-child {\n    margin-top: 4%; } }\n\n#body {\n  padding-top: 85px;\n  padding-bottom: 60px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9hZG1pbi1sYXlvdXQvZW1wbG95ZXNlYXJjaC9DOlxcVXNlcnNcXGFzdW5rb3BwYWRcXERlc2t0b3BcXG5ld3pvb21cXHpvb210ZWFtcy13ZWItbmcvc3JjXFxhcHBcXGxheW91dHNcXGFkbWluLWxheW91dFxcZW1wbG95ZXNlYXJjaFxcZW1wbG95ZXNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDZCxtQkFBbUIsRUFBQTs7QUFHekI7RUFDRSxlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUViO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxpQkFBaUI7RUFDakIsWUFBWSxFQUFBOztBQUlkO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUlwQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRTtJQUNFLGVBQWUsRUFBQSxFQUNoQjs7QUFJSDtFQUNFO0lBQ0EsaUJBQWlCLEVBQUE7RUFFakI7SUFDQSxTQUFTO0lBQ1Qsc0JBQ0EsRUFBQTtFQUNBO0lBQ0EsYUFBYSxFQUFBO0VBRWI7SUFDQSxjQUFjLEVBQUE7RUFFZDtJQUNBLDZCQUE2QjtJQUM3QixjQUFjLEVBQUE7RUFFYjtJQUNELDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7RUFFaEI7SUFDQyx5QkFBeUI7SUFDMUIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZ0JBQWdCLEVBQUE7RUFFaEI7SUFDQSxnQkFBZ0IsRUFBQTtFQUVoQjtJQUNBLGNBQWMsRUFBQSxFQUNiOztBQUlEO0VBRUUsaUJBQWlCO0VBRWxCLG9CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9hZG1pbi1sYXlvdXQvZW1wbG95ZXNlYXJjaC9lbXBsb3llc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1hdC10YWJsZXtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuLmRlc2lnbntcclxuICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDgwJTtcclxufVxyXG4uZGVzaWduMXtcclxuICBwYWRkaW5nLWxlZnQ6IDgwJTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcblxyXG4ubWF0LXBhZ2luYXRvcntcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xyXG4gIHBhZGRpbmctbGVmdDogN3B4O1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4ubWF0LXBhZ2luYXRvcntcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG59XHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMC4zJTtcclxuICBcclxufVxyXG5cclxuLm1hdC1sYWJsZXtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjc2N3B4KXtcclxuICAubWF0LWRpYWxvZy1jb250YWluZXIubWF0LWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgbWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSwgbWF0LWZvb3Rlci1jZWxsOmZpcnN0LW9mLXR5cGUsIG1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICB9XHJcbiAgLm1hdC10YWJsZSB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcclxuICB9XHJcbiAgbWF0LWZvb3Rlci1yb3csIG1hdC1oZWFkZXItcm93LCBtYXQtcm93IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAubWF0LXRhYmxlIGNhcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIH1cclxuICAubWF0LXRhYmxlIC5tYXQtcm93IHtcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2RkZDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgIC5tYXQtdGFibGUgLm1hdC1jZWxsIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDFlbTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBoZWlnaHQ6MzBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICBtYXJnaW4tbGVmdDogNCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0JTtcclxuICB9XHJcbiAgLm1hdC10YWJsZSAubWF0LWNlbGw6YmVmb3JlIHtcclxuICAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcclxuICBmbG9hdDogbGVmdDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAuODVlbTtcclxuICB9XHJcbiAgLm1hdC10YWJsZSAubWF0LWNlbGw6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLm1hdC10YWJsZSAubWF0LWNlbGw6Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbi10b3A6IDQlO1xyXG4gIH1cclxuICBcclxuICB9XHJcblxyXG4gICNib2R5IHtcclxuICAgIC8vIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDg1cHg7XHJcbiAgIC8vIHBhZGRpbmc6MTBweDtcclxuICAgcGFkZGluZy1ib3R0b206NjBweDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/layouts/admin-layout/employesearch/employesearch.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layouts/admin-layout/employesearch/employesearch.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EmployesearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployesearchComponent", function() { return EmployesearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _shared_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../shared/local-storage.service */ "./src/app/shared/local-storage.service.ts");






var ELEMENT_DATA = [
    { no: '1', Name: 'kiran', LeaveType: 'sick', location: 1, TotalLeaves: 24, EarnedLeves: 14, LeavesUsed: 10, SickLeaves: 5, CasualLeaves: 5 },
    { no: '1', Name: 'madan', LeaveType: 'emg', location: 2, TotalLeaves: 24, EarnedLeves: 16, LeavesUsed: 8, SickLeaves: 5, CasualLeaves: 3 },
    { no: '2', Name: 'hari', LeaveType: 'sick', location: 2, TotalLeaves: 24, EarnedLeves: 10, LeavesUsed: 14, SickLeaves: 9, CasualLeaves: 5 },
    { no: '3', Name: 'mahesh', LeaveType: 'emg', location: 2, TotalLeaves: 24, EarnedLeves: 14, LeavesUsed: 10, SickLeaves: 5, CasualLeaves: 5 },
    { no: '2', Name: 'samarth', LeaveType: 'sick', location: 1, TotalLeaves: 24, EarnedLeves: 16, LeavesUsed: 8, SickLeaves: 5, CasualLeaves: 3 },
    { no: '4', Name: 'anannya', LeaveType: 'emg', location: 2, TotalLeaves: 24, EarnedLeves: 20, LeavesUsed: 4, SickLeaves: 3, CasualLeaves: 1 },
    { no: '3', Name: 'kavya', LeaveType: 'sick', location: 1, TotalLeaves: 24, EarnedLeves: 8, LeavesUsed: 16, SickLeaves: 10, CasualLeaves: 6 },
    { no: '5', Name: 'karan', LeaveType: 'emg', location: 2, TotalLeaves: 24, EarnedLeves: 16, LeavesUsed: 8, SickLeaves: 5, CasualLeaves: 3 },
    { no: '6', Name: 'vinay', LeaveType: 'sick', location: 2, TotalLeaves: 24, EarnedLeves: 18, LeavesUsed: 6, SickLeaves: 4, CasualLeaves: 2 },
    { no: '7', Name: 'shiva', LeaveType: 'emg', location: 2, TotalLeaves: 24, EarnedLeves: 14, LeavesUsed: 10, SickLeaves: 5, CasualLeaves: 5 },
    { no: '4', Name: 'rishi', LeaveType: 'sick', location: 1, TotalLeaves: 24, EarnedLeves: 12, LeavesUsed: 12, SickLeaves: 5, CasualLeaves: 7 },
    { no: '8', Name: 'krishna', LeaveType: 'emg', location: 2, TotalLeaves: 24, EarnedLeves: 16, LeavesUsed: 8, SickLeaves: 5, CasualLeaves: 3 },
];
var EmployesearchComponent = /** @class */ (function () {
    function EmployesearchComponent(dialog, localStorageService) {
        this.dialog = dialog;
        this.localStorageService = localStorageService;
        this.data = Object.assign(ELEMENT_DATA);
        this.Locations = [];
        this.selectDatasource = ELEMENT_DATA;
        this.displayedColumns = ['Name', 'Actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](ELEMENT_DATA);
        this.location = [
            { id: 1, value: 'Bangalore-0', viewValue: 'Bangalore' },
            { id: 2, value: 'Dharwad-1', viewValue: 'Dharwad' }
        ];
    }
    EmployesearchComponent.prototype.showDialogToAdd = function (item) {
        console.log(item);
        var dialogRef = this.dialog.open(this.matdialog, {
            disableClose: true,
            height: '350px',
            width: '500px',
        });
        this.totalleaves = item.TotalLeaves;
        this.earnedleaves = item.EarnedLeves;
        this.leavesused = item.LeavesUsed;
        this.sickleaves = item.SickLeaves;
        this.casualleaves = item.CasualLeaves;
    };
    EmployesearchComponent.prototype.ngOnInit = function () {
        this.changeTableContent();
    };
    EmployesearchComponent.prototype.applyFilter = function (filterValue) {
        this.selected_Array.filter = filterValue.trim().toLowerCase();
    };
    EmployesearchComponent.prototype.changeTableContent = function () {
        var _this = this;
        // alert(this.selectedLocation);
        ELEMENT_DATA.forEach(function (element) {
            if (element.location === _this.selectedLocation) {
                console.log(element.location);
                _this.selected_Array = lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](ELEMENT_DATA, function (s) {
                    return s.location == element.location;
                });
                console.log(_this.selected_Array);
            }
        });
    };
    EmployesearchComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _shared_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], EmployesearchComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('matdialog', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], EmployesearchComponent.prototype, "matdialog", void 0);
    EmployesearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employesearch',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employesearch.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/employesearch/employesearch.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employesearch.component.scss */ "./src/app/layouts/admin-layout/employesearch/employesearch.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _shared_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]])
    ], EmployesearchComponent);
    return EmployesearchComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/employetimesheet/employetimesheet.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/layouts/admin-layout/employetimesheet/employetimesheet.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n  padding-left: 15px;\n  padding-right: 10px; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n.mat-table {\n  background: #fff;\n  height: 800px;\n  overflow: scroll; }\n\nth.mat-header-cell.cdk-column-no.mat-column-no.ng-star-inserted {\n  color: white; }\n\nmat-header-cell {\n  font-weight: bold;\n  font-size: 15px; }\n\ntable {\n  width: 100%; }\n\ni {\n  padding: 10px; }\n\n@media screen and (max-width: 960px) {\n  mat-cell:first-of-type, mat-footer-cell:first-of-type, mat-header-cell:first-of-type {\n    padding-left: 0px; }\n  .mat-table {\n    border: 0;\n    vertical-align: middle; }\n  mat-footer-row, mat-header-row, mat-row {\n    display: none; }\n  .mat-table caption {\n    font-size: 1em; }\n  .mat-table .mat-row {\n    border-bottom: 5px solid #ddd;\n    display: block; }\n  .mat-table .mat-cell {\n    border-bottom: 1px solid #ddd;\n    display: block;\n    font-size: 1em;\n    text-align: right;\n    font-weight: bold;\n    height: 30px;\n    margin-bottom: 4%;\n    margin-left: 4%;\n    margin-right: 4%; }\n  .mat-table .mat-cell:before {\n    content: attr(data-label);\n    float: left;\n    text-transform: uppercase;\n    font-weight: normal;\n    font-size: .85em; }\n  .mat-table .mat-cell:last-child {\n    border-bottom: 0; }\n  .mat-table .mat-cell:first-child {\n    margin-top: 4%; } }\n\n#body {\n  padding-top: 85px;\n  padding-bottom: 60px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9hZG1pbi1sYXlvdXQvZW1wbG95ZXRpbWVzaGVldC9DOlxcVXNlcnNcXGFzdW5rb3BwYWRcXERlc2t0b3BcXG5ld3pvb21cXHpvb210ZWFtcy13ZWItbmcvc3JjXFxhcHBcXGxheW91dHNcXGFkbWluLWxheW91dFxcZW1wbG95ZXRpbWVzaGVldFxcZW1wbG95ZXRpbWVzaGVldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDZCxtQkFBbUIsRUFBQTs7QUFHekI7RUFDRSxlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUViO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFLbEI7RUFDQSxZQUFZLEVBQUE7O0FBR1o7RUFDRSxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUdqQjtFQUNBLFdBQVcsRUFBQTs7QUFHWDtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFO0lBQ0EsaUJBQWlCLEVBQUE7RUFFakI7SUFDQSxTQUFTO0lBQ1Qsc0JBQ0EsRUFBQTtFQUNBO0lBQ0EsYUFBYSxFQUFBO0VBRWI7SUFDQSxjQUFjLEVBQUE7RUFFZDtJQUNBLDZCQUE2QjtJQUM3QixjQUFjLEVBQUE7RUFFYjtJQUNELDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7RUFFaEI7SUFDQyx5QkFBeUI7SUFDMUIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZ0JBQWdCLEVBQUE7RUFFaEI7SUFDQSxnQkFBZ0IsRUFBQTtFQUVoQjtJQUNBLGNBQWMsRUFBQSxFQUNiOztBQUlEO0VBRUUsaUJBQWlCO0VBRWxCLG9CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9hZG1pbi1sYXlvdXQvZW1wbG95ZXRpbWVzaGVldC9lbXBsb3lldGltZXNoZWV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1hdC10YWJsZSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBoZWlnaHQ6IDgwMHB4O1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuXHJcblxyXG5cclxudGgubWF0LWhlYWRlci1jZWxsLmNkay1jb2x1bW4tbm8ubWF0LWNvbHVtbi1uby5uZy1zdGFyLWluc2VydGVkIHtcclxuY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbndpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pe1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgbWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSwgbWF0LWZvb3Rlci1jZWxsOmZpcnN0LW9mLXR5cGUsIG1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICB9XHJcbiAgLm1hdC10YWJsZSB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcclxuICB9XHJcbiAgbWF0LWZvb3Rlci1yb3csIG1hdC1oZWFkZXItcm93LCBtYXQtcm93IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAubWF0LXRhYmxlIGNhcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIH1cclxuICAubWF0LXRhYmxlIC5tYXQtcm93IHtcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2RkZDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgIC5tYXQtdGFibGUgLm1hdC1jZWxsIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDFlbTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBoZWlnaHQ6MzBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICBtYXJnaW4tbGVmdDogNCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0JTtcclxuICB9XHJcbiAgLm1hdC10YWJsZSAubWF0LWNlbGw6YmVmb3JlIHtcclxuICAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcclxuICBmbG9hdDogbGVmdDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAuODVlbTtcclxuICB9XHJcbiAgLm1hdC10YWJsZSAubWF0LWNlbGw6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLm1hdC10YWJsZSAubWF0LWNlbGw6Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbi10b3A6IDQlO1xyXG4gIH1cclxuICBcclxuICB9XHJcblxyXG4gICNib2R5IHtcclxuICAgIC8vIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDg1cHg7XHJcbiAgIC8vIHBhZGRpbmc6MTBweDtcclxuICAgcGFkZGluZy1ib3R0b206NjBweDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/layouts/admin-layout/employetimesheet/employetimesheet.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/layouts/admin-layout/employetimesheet/employetimesheet.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EmployetimesheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployetimesheetComponent", function() { return EmployetimesheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../employeetimesheet */ "./src/app/layouts/admin-layout/employeetimesheet.ts");
/* harmony import */ var _services_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");

// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
// import { MasterService } from 'src/app/services/master.service';
// import { Component, OnInit, Inject, ViewChild, TemplateRef } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { MatDialog, MatTableDataSource, } from '@angular/material';








var ELEMENT_DATA = [
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](1, 'test1', 'zoomteams', 'xyz', 'zoomteamsreson', '9 hr', '4-21-2020', 'pending'),
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](2, 'test2', 'zoomteams', 'xyz', 'zoomteamsreson', '9 hr', '4-21-2020', 'pending'),
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](3, 'test3', 'zoomteams', 'xyz', 'emgreson', '7 hr', '4-21-2020', 'pending'),
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](4, 'test4', 'zoomteams', 'xyz', 'zoomteamsreson', '5 hr', '4-21-2020', 'pending'),
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](5, 'test5', 'zoomteams', 'xyz', 'emgreson', '8 hr', '4-21-2020', 'pending'),
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](6, 'test6', 'zoomteams', 'xyz', 'zoomteamsreson', '9 hr', '5-21-2020', 'pending'),
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](7, 'test7', 'zoomteams', 'xyz', 'zoomteamsreson', '9 hr', '4-21-2020', 'pending'),
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](8, 'test8', 'zoomteams', 'xyz', 'zoomteamsreson', '9 hr', '4-21-2020', 'pending'),
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](9, 'test9', 'zoomteams', 'xyz', 'emgreson', '7 hr', '6-21-2020', 'pending'),
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](10, 'test10', 'zoomteams', 'xyz', 'zoomteamsreson', '5 hr', '4-21-2020', 'pending'),
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](11, 'test11', 'zoomteams', 'xyz', 'emgreson', '8 hr', '4-21-2020', 'pending'),
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](12, 'test12', 'zoomteams', 'xyz', 'zoomteamsreson', '9 hr', '5-21-2020', 'pending'),
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](13, 'test13', 'zoomteams', 'xyz', 'zoomteamsreson', '9 hr', '4-21-2020', 'pending'),
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](14, 'test14', 'zoomteams', 'xyz', 'zoomteamsreson', '9 hr', '4-21-2020', 'pending'),
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](15, 'test15', 'zoomteams', 'xyz', 'emgreson', '7 hr', '6-21-2020', 'pending'),
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](16, 'test16', 'zoomteams', 'xyz', 'zoomteamsreson', '5 hr', '4-21-2020', 'pending'),
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](17, 'test17', 'zoomteams', 'xyz', 'emgreson', '8 hr', '4-21-2020', 'pending'),
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](18, 'test18', 'zoomteams', 'xyz', 'zoomteamsreson', '9 hr', '5-21-2020', 'pending'),
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](19, 'test7', 'zoomteams', 'xyz', 'zoomteamsreson', '9 hr', '4-21-2020', 'pending'),
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](20, 'test8', 'zoomteams', 'xyz', 'zoomteamsreson', '9 hr', '4-21-2020', 'pending'),
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](21, 'test9', 'zoomteams', 'xyz', 'emgreson', '7 hr', '6-21-2020', 'pending'),
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](22, 'test10', 'zoomteams', 'xyz', 'zoomteamsreson', '5 hr', '4-21-2020', 'pending'),
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](23, 'test11', 'zoomteams', 'xyz', 'emgreson', '8 hr', '4-21-2020', 'pending'),
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](24, 'test12', 'zoomteams', 'xyz', 'zoomteamsreson', '9 hr', '5-21-2020', 'pending'),
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](25, 'test13', 'zoomteams', 'xyz', 'zoomteamsreson', '9 hr', '4-21-2020', 'pending'),
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](26, 'test14', 'zoomteams', 'xyz', 'zoomteamsreson', '9 hr', '4-21-2020', 'pending'),
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](27, 'test15', 'zoomteams', 'xyz', 'emgreson', '7 hr', '6-21-2020', 'pending'),
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](28, 'test16', 'zoomteams', 'xyz', 'zoomteamsreson', '5 hr', '4-21-2020', 'pending'),
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](29, 'test17', 'zoomteams', 'xyz', 'emgreson', '8 hr', '4-21-2020', 'pending'),
    new _employeetimesheet__WEBPACK_IMPORTED_MODULE_2__["Employeetimesheet"](30, 'test18', 'zoomteams', 'xyz', 'zoomteamsreson', '9 hr', '5-21-2020', 'pending'),
];
var EmployetimesheetComponent = /** @class */ (function () {
    function EmployetimesheetComponent(dialog, fb, messageService, masterService, datePipe, confirmationService) {
        this.dialog = dialog;
        this.fb = fb;
        this.messageService = messageService;
        this.masterService = masterService;
        this.datePipe = datePipe;
        this.confirmationService = confirmationService;
        this.data = Object.assign(ELEMENT_DATA);
        this.selectDatasource = ELEMENT_DATA;
        this.submitted = false;
        this.displayedColumns = ['Name', 'Project Name', 'Module Name', 'Task Description', 'From Date', 'Time Spent', 'Status', 'Actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](ELEMENT_DATA);
    }
    EmployetimesheetComponent.prototype.ngOnInit = function () {
        this.taskreactive = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            projectname: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            modulename: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            taskdescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            fromdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            timespent: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
        });
        this.dataSource.paginator = this.paginator;
    };
    EmployetimesheetComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    EmployetimesheetComponent.prototype.showDialogToAdd = function (passedTitle) {
        this.dialogTitle = passedTitle;
        var dialogRef = this.dialog.open(this.matdialog, {
            disableClose: true,
            height: '750px',
            width: '400px',
        });
        this.taskreactive.reset();
    };
    EmployetimesheetComponent.prototype.showDialogToEdit = function (ELEMENT_DATA, passedTitle) {
        this.dialogTitle = passedTitle;
        var fromdate = new Date(ELEMENT_DATA.fromdate);
        console.log(this.ELEMENT_DATA);
        this.display = true;
        this.taskreactive.patchValue({
            id: ELEMENT_DATA.id,
            name: ELEMENT_DATA.name,
            projectname: ELEMENT_DATA.projectname,
            modulename: ELEMENT_DATA.modulename,
            taskdescription: ELEMENT_DATA.taskdescription,
            fromdate: fromdate,
            timespent: ELEMENT_DATA.timespent,
            status: ELEMENT_DATA.status
        });
        var dialogRef = this.dialog.open(this.matdialog, {
            disableClose: true,
            height: '750px',
            width: '400px',
        });
    };
    EmployetimesheetComponent.prototype.onFormSubmit = function () {
        var _this = this;
        var test = this.masterService.getFormErrorMessage(this.taskreactive, this.taskreactive);
        if (test !== undefined) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error Message',
                detail: test
            });
        }
        else {
            this.submitted = true;
            if (this.taskreactive.value.id === null) {
                var req = {
                    id: ELEMENT_DATA.length + 1,
                    name: this.taskreactive.value.name,
                    projectname: this.taskreactive.value.projectname,
                    modulename: this.taskreactive.value.modulename,
                    taskdescription: this.taskreactive.value.taskdescription,
                    fromdate: this.datePipe.transform(this.taskreactive.value.fromdate, 'MM-dd-yyyy'),
                    timespent: this.taskreactive.value.timespent,
                    status: this.taskreactive.value.status,
                };
                this.selectDatasource.push(req);
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](ELEMENT_DATA);
                this.dialog.closeAll();
                this.taskreactive.reset();
                setTimeout(function () {
                    _this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Added Sucessfully' });
                }, 2000);
            }
            else {
                for (var i = 0; i < this.selectDatasource.length; i++) {
                    if (this.selectDatasource[i].id === this.taskreactive.value.id) {
                        this.selectDatasource[i].id = this.taskreactive.value.id;
                        this.selectDatasource[i].name = this.taskreactive.value.name;
                        this.selectDatasource[i].projectname = this.taskreactive.value.projectname;
                        this.selectDatasource[i].modulename = this.taskreactive.value.modulename;
                        this.selectDatasource[i].taskdescription = this.taskreactive.value.taskdescription;
                        this.selectDatasource[i].fromdate = this.datePipe.transform(this.taskreactive.value.fromdate, 'MM-dd-yyyy');
                        this.selectDatasource[i].timespent = this.taskreactive.value.timespent;
                        this.selectDatasource[i].status = this.taskreactive.value.status;
                    }
                    this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](ELEMENT_DATA);
                    this.taskreactive.reset();
                    this.dialog.closeAll();
                }
                setTimeout(function () {
                    _this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Upadated Sucessfully' });
                }, 2000);
            }
        }
    };
    EmployetimesheetComponent.prototype.removeFromList = function (Item) {
        ELEMENT_DATA.splice(ELEMENT_DATA.indexOf(Item), 1);
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Deleted Sucessfully' });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](ELEMENT_DATA);
    };
    EmployetimesheetComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        console.log(id);
        this.confirmationService.confirm({
            message: "Are you sure that you want to proceed?",
            header: "Confirmation",
            icon: "pi pi-exclamation-triangle",
            accept: function () {
                _this.removeFromList(id);
            },
            reject: function () {
            }
        });
    };
    EmployetimesheetComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"] },
        { type: _services_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], EmployetimesheetComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('matdialog', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"])
    ], EmployetimesheetComponent.prototype, "matdialog", void 0);
    EmployetimesheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-employetimesheet',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employetimesheet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/employetimesheet/employetimesheet.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employetimesheet.component.scss */ "./src/app/layouts/admin-layout/employetimesheet/employetimesheet.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"],
            _services_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            primeng_api__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]])
    ], EmployetimesheetComponent);
    return EmployetimesheetComponent;
}());

// display: boolean;
// id: number;
// name;
// projectname;
// modulename;
// taskdescription;
// fromdate;
// status;
// timespent;
// status1: any[];
// taskreactive: FormGroup;
// msg: string;
// config: any;
// collection = [];
// documentsdata: any;
// constructor(private fb: FormBuilder,
//   private masterService: MasterService,
//   private messageService: MessageService, private act: ActivatedRoute, ) {
//   this.documentsdata = this.act.snapshot.data[''];
//   this.config = {
//     itemsPerPage: 5,
//     currentPage: 2,
//     totalItems: this.collection.length
//   };
// }
// emp_deta: Employeetimesheet[] = [
// new Employeetimesheet(1, 'test1', 'zoomteams', 'xyz', 'zoomteamsreson', '4-21-2020', '6 hr', 'pending'),
// new Employeetimesheet(2, 'test2', 'zoomteams', 'xyz', 'zoomteamsreson', '4-21-2020', '9 hr', 'pending'),
// new Employeetimesheet(3, 'test3', 'zoomteams', 'xyz', 'emgreson', '6-21-2020', '7 hr', 'pending'),
// new Employeetimesheet(4, 'test4', 'zoomteams', 'xyz', 'zoomteamsreson', '4-21-2020', '5 hr', 'pending'),
// new Employeetimesheet(5, 'test5', 'zoomteams', 'xyz', 'emgreson', '4-21-2020', '8 hr', 'pending'),
// new Employeetimesheet(6, 'test6', 'zoomteams', 'xyz', 'zoomteamsreson', '5-21-2020', '9 hr', 'pending'),
// new Employeetimesheet(1, 'test1', 'zoomteams', 'xyz', 'zoomteamsreson', '4-21-2020', '6 hr', 'pending'),
// new Employeetimesheet(2, 'test2', 'zoomteams', 'xyz', 'zoomteamsreson', '4-21-2020', '9 hr', 'pending'),
// new Employeetimesheet(3, 'test3', 'zoomteams', 'xyz', 'emgreson', '6-21-2020', '7 hr', 'pending'),
// new Employeetimesheet(4, 'test4', 'zoomteams', 'xyz', 'zoomteamsreson', '4-21-2020', '5 hr', 'pending'),
// new Employeetimesheet(5, 'test5', 'zoomteams', 'xyz', 'emgreson', '4-21-2020', '8 hr', 'pending'),
// new Employeetimesheet(6, 'test6', 'zoomteams', 'xyz', 'zoomteamsreson', '5-21-2020', '9 hr', 'pending'),
// new Employeetimesheet(1, 'test1', 'zoomteams', 'xyz', 'zoomteamsreson', '4-21-2020', '6 hr', 'pending'),
// new Employeetimesheet(2, 'test2', 'zoomteams', 'xyz', 'zoomteamsreson', '4-21-2020', '9 hr', 'pending'),
// new Employeetimesheet(3, 'test3', 'zoomteams', 'xyz', 'emgreson', '6-21-2020', '7 hr', 'pending'),
// new Employeetimesheet(4, 'test4', 'zoomteams', 'xyz', 'zoomteamsreson', '4-21-2020', '5 hr', 'pending'),
// new Employeetimesheet(5, 'test5', 'zoomteams', 'xyz', 'emgreson', '4-21-2020', '8 hr', 'pending'),
// new Employeetimesheet(6, 'test6', 'zoomteams', 'xyz', 'zoomteamsreson', '5-21-2020', '9 hr', 'pending'),
// ];
// timesheetstatus: Checkstatus1[] = [
//   new Checkstatus1(1, 'Pending'),
//   new Checkstatus1(2, 'Completed'),
// ];
// ngOnInit() {
//   this.ReactiveForm();
// }
// ReactiveForm() {
//   this.taskreactive = this.fb.group(
//     {
//       id: new FormControl(),
//       name: new FormControl(),
//       projectname: new FormControl(),
//       modulename: new FormControl(),
//       taskdescription: new FormControl(),
//       fromdate: new FormControl(),
//       timespent: new FormControl(),
//       status: new FormControl(),
//     }
//   );
// }
// onDelete(data) {
//   console.log();
//   if (confirm(this.msg) === true) {
//     this.emp_deta.splice(this.emp_deta.indexOf(data), 1);
//   }
// }
// showDialogToEdit(item) {
//   console.log(this.emp_deta);
//   this.display = true;
//   this.taskreactive.patchValue({
//     id: item.id,
//     name: item.name,
//     projectname: item.projectname,
//     modulename: item.modulename,
//     taskdescription: item.taskdescription,
//     fromdate: item.fromdate,
//     timespent: item.timespent,
//     status: item.status
//   });
// }
// addDialog() {
//   this.taskreactive.reset();
//   this.id = undefined;
//   this.display = true;
// }
// onFormsubmit() {
// const test = this.masterService.getFormErrorMessage(this.taskreactive, this.taskreactive);
// if (test !== undefined) {
//   this.messageService.add({
//     severity: 'error',
//     summary: 'Error Message',
//     detail: test
//   });
// }
// if (this.id == undefined) {
//   this.emp_deta.push(new Employeetimesheet(
//     this.taskreactive.value.id,
//     this.taskreactive.value.name,
//     this.taskreactive.value.projectname,
//     this.taskreactive.value.modulename,
//     this.taskreactive.value.taskdescription,
//     this.taskreactive.value.fromdate,
//     this.taskreactive.value.timespent,
//     this.taskreactive.value.status,
//   ));
//   this.display = false;
//   setTimeout(() => {
//     this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Added Sucessfully' });
//   }, 2000);
//   this.ngOnInit();
// }
// else {
//   _.forEach(this.emp_deta, (data, index) => {
//     if (this.id === data.id) {
//       data.name = this.taskreactive.value.name;
//       data.projectname = this.taskreactive.value.projectname;
//       data.modulename = this.taskreactive.value.modulename;
//       data.taskdescription = this.taskreactive.value.taskdescription;
//       data.fromdate = this.taskreactive.value.fromdate;
//       data.timespent = this.taskreactive.value.timespent;
//       data.status = this.taskreactive.value.status;
//     }
//   });
//   this.display = false;
//   setTimeout(() => {
//     this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Updated Sucessfully' });
//   }, 1000);
// }
// }
// chanestaus(emp_data) {
//   console.log(emp_data);
//   emp_data.status = emp_data.status.name;
// }


/***/ }),

/***/ "./src/app/layouts/leavetype/leavetype.component.scss":
/*!************************************************************!*\
  !*** ./src/app/layouts/leavetype/leavetype.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n.mat-table {\n  background: #fff;\n  width: 100%;\n  padding-left: 15px;\n  padding-right: 10px; }\n\n.row {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: 1px;\n  margin-left: -2px; }\n\nth.mat-header-cell.cdk-column-no.mat-column-no.ng-star-inserted {\n  color: white; }\n\nmat-header-cell {\n  font-weight: bold;\n  font-size: 15px; }\n\ntable {\n  width: 100%; }\n\ni {\n  padding: 10px; }\n\n.mat-form-field-flex {\n  margin-top: -15px; }\n\n@media screen and (max-width: 960px) {\n  mat-cell:first-of-type, mat-footer-cell:first-of-type, mat-header-cell:first-of-type {\n    padding-left: 0px; }\n  .mat-table {\n    border: 0;\n    vertical-align: middle; }\n  mat-footer-row, mat-header-row, mat-row {\n    display: none; }\n  .mat-table caption {\n    font-size: 1em; }\n  .mat-table .mat-row {\n    border-bottom: 5px solid #ddd;\n    display: block; }\n  .mat-table .mat-cell {\n    border-bottom: 1px solid #ddd;\n    display: block;\n    font-size: 1em;\n    text-align: right;\n    font-weight: bold;\n    height: 30px;\n    margin-bottom: 4%;\n    margin-left: 4%;\n    margin-right: 4%; }\n  .mat-table .mat-cell:before {\n    content: attr(data-label);\n    float: left;\n    text-transform: uppercase;\n    font-weight: normal;\n    font-size: .85em; }\n  .mat-table .mat-cell:last-child {\n    border-bottom: 0; }\n  .mat-table .mat-cell:first-child {\n    margin-top: 4%; } }\n\n@media (max-width: 367px) {\n  .mat-dialog-container {\n    width: 500px;\n    height: 500px;\n    max-height: 558px;\n    overflow: scroll; } }\n\n#body {\n  padding-top: 85px;\n  padding-bottom: 60px; }\n\n@media (max-width: 945px) {\n  .mat-dialog-container {\n    display: block;\n    padding: 24px;\n    border-radius: 4px;\n    box-sizing: border-box;\n    overflow: auto;\n    outline: 0;\n    width: 100%;\n    height: 80%;\n    min-height: inherit;\n    max-height: inherit; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9sZWF2ZXR5cGUvQzpcXFVzZXJzXFxhc3Vua29wcGFkXFxEZXNrdG9wXFxuZXd6b29tXFx6b29tdGVhbXMtd2ViLW5nL3NyY1xcYXBwXFxsYXlvdXRzXFxsZWF2ZXR5cGVcXGxlYXZldHlwZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWI7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNkLG1CQUFtQixFQUFBOztBQUV6QjtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBSW5CO0VBQ0EsWUFBWSxFQUFBOztBQUdaO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHakI7RUFDQSxXQUFXLEVBQUE7O0FBR1g7RUFDRSxhQUFhLEVBQUE7O0FBRWY7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRTtJQUNBLGlCQUFpQixFQUFBO0VBRWpCO0lBQ0EsU0FBUztJQUNULHNCQUNBLEVBQUE7RUFDQTtJQUNBLGFBQWEsRUFBQTtFQUViO0lBQ0EsY0FBYyxFQUFBO0VBRWQ7SUFDQSw2QkFBNkI7SUFDN0IsY0FBYyxFQUFBO0VBRWI7SUFDRCw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQixFQUFBO0VBRWhCO0lBQ0MseUJBQXlCO0lBQzFCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGdCQUFnQixFQUFBO0VBRWhCO0lBQ0EsZ0JBQWdCLEVBQUE7RUFFaEI7SUFDQSxjQUFjLEVBQUEsRUFDYjs7QUFJRDtFQUNFO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUEsRUFDbkI7O0FBRUQ7RUFFRSxpQkFBaUI7RUFFbEIsb0JBQW1CLEVBQUE7O0FBR3BCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixtQkFBbUIsRUFBQSxFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvbGVhdmV0eXBlL2xlYXZldHlwZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIFxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLm1hdC10YWJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICB9XHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTJweDtcclxufVxyXG4gIFxyXG4gXHJcbiAgdGgubWF0LWhlYWRlci1jZWxsLmNkay1jb2x1bW4tbm8ubWF0LWNvbHVtbi1uby5uZy1zdGFyLWluc2VydGVkIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1oZWFkZXItY2VsbHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICB0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIGl7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgIG1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsIG1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlLCBtYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIH1cclxuICAgIC5tYXQtdGFibGUge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZVxyXG4gICAgfVxyXG4gICAgbWF0LWZvb3Rlci1yb3csIG1hdC1oZWFkZXItcm93LCBtYXQtcm93IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubWF0LXRhYmxlIGNhcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB9XHJcbiAgICAubWF0LXRhYmxlIC5tYXQtcm93IHtcclxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZGRkO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAgLm1hdC10YWJsZSAubWF0LWNlbGwge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGhlaWdodDozMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xyXG4gICAgfVxyXG4gICAgLm1hdC10YWJsZSAubWF0LWNlbGw6YmVmb3JlIHtcclxuICAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogLjg1ZW07XHJcbiAgICB9XHJcbiAgICAubWF0LXRhYmxlIC5tYXQtY2VsbDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAubWF0LXRhYmxlIC5tYXQtY2VsbDpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6MzY3cHgpe1xyXG4gICAgICAubWF0LWRpYWxvZy1jb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNTU4cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIH1cclxuICAgICAgfVxyXG4gICAgI2JvZHkge1xyXG4gICAgICAvLyBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgICAgcGFkZGluZy10b3A6IDg1cHg7XHJcbiAgICAgLy8gcGFkZGluZzoxMHB4O1xyXG4gICAgIHBhZGRpbmctYm90dG9tOjYwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDo5NDVweCl7XHJcbiAgICAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcGFkZGluZzogMjRweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgb3V0bGluZTogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIH1cclxuICB9XHJcbiAgXHJcblxyXG5cclxuXHJcbi8vICAgbmV3IGNzc1xyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/layouts/leavetype/leavetype.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/layouts/leavetype/leavetype.component.ts ***!
  \**********************************************************/
/*! exports provided: LeavetypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavetypeComponent", function() { return LeavetypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_appservices_leavemanagement_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/appservices/leavemanagement.service */ "./src/app/services/appservices/leavemanagement.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





// import { Router } from '@angular/router';


var LeavetypeComponent = /** @class */ (function () {
    function LeavetypeComponent(dialog, fb, _data, router) {
        this.dialog = dialog;
        this.fb = fb;
        this._data = _data;
        this.router = router;
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        this.displayedColumns = ['Name', 'Leave Type', 'Total Days Per year', 'Location Id', 'Gender',
            'Department', 'Designation', 'Role', 'Actions'];
        this.datasource = this.leavetypedetails;
    }
    LeavetypeComponent.prototype.ngOnInit = function () {
        this.getLeavetypes();
        this.taskreactive = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            leavetype: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            totaldaysperyear: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            locationid: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            department: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    };
    LeavetypeComponent.prototype.getLeavetypes = function () {
        var _this = this;
        this._subscriptions.add(this._data.getLeaveTypes().subscribe(function (data) {
            _this.leavetypedetails = data;
            console.log(_this.leavetypedetails);
            console.log(_this.datasource);
        }));
    };
    LeavetypeComponent.prototype.onClick = function (item) {
        console.log(item);
        alert(item.id);
        this.router.navigate(['/configuration'], { queryParams: { id: item.id } });
    };
    LeavetypeComponent.prototype.showDialogToAdd = function () {
        console.log();
        this.router.navigateByUrl('/configuration');
    };
    LeavetypeComponent.prototype.ngOnDestroy = function () {
        this._subscriptions.unsubscribe();
    };
    LeavetypeComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_appservices_leavemanagement_service__WEBPACK_IMPORTED_MODULE_4__["LeavemanagementService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('matdialog', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], LeavetypeComponent.prototype, "matdialog", void 0);
    LeavetypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leavetype',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./leavetype.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/leavetype/leavetype.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./leavetype.component.scss */ "./src/app/layouts/leavetype/leavetype.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_appservices_leavemanagement_service__WEBPACK_IMPORTED_MODULE_4__["LeavemanagementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LeavetypeComponent);
    return LeavetypeComponent;
}());



/***/ }),

/***/ "./src/app/layouts/leavetype/leavetypess.ts":
/*!**************************************************!*\
  !*** ./src/app/layouts/leavetype/leavetypess.ts ***!
  \**************************************************/
/*! exports provided: LeaveTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveTypes", function() { return LeaveTypes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// export class LeaveTypes {
//   public constructor(
//     public id: number,
//     public locationid: number,
//     public name: string,
//     public leavetype: string,
//     public gender: string,
//     public department: string,
//     public designation: string,
//     public role: string,
//     public totalleavesperyear: number,
//     public enableFileUpload: boolean,
//     public genderids: string,
//     public departmentids: string,
//     public designationids: string,
//     public locationids: string,
//     public roleids: string

//   ) { }
// }
var LeaveTypes = /** @class */ (function () {
    function LeaveTypes(id, organizationid, locationid, name, organizationName, carryforwardpercentage, encashmentpercentage, accuralDate, resetDate, totalleavesperyear, maxcontinuousleave, isactive, createdate, createdby, modifieddate, modifiedby, expiresinmonths, includeweekendsafterdays, includewholidaysafterdays, exceedleave, exceedLeaveAsLOP, allowHalfDay, requestLeaveBeforeDays, 
    // public ApproverId : number,
    leavetype, enableFileUpload, genderids, departmentids, designationids, locationids, roleids) {
        this.id = id;
        this.organizationid = organizationid;
        this.locationid = locationid;
        this.name = name;
        this.organizationName = organizationName;
        this.carryforwardpercentage = carryforwardpercentage;
        this.encashmentpercentage = encashmentpercentage;
        this.accuralDate = accuralDate;
        this.resetDate = resetDate;
        this.totalleavesperyear = totalleavesperyear;
        this.maxcontinuousleave = maxcontinuousleave;
        this.isactive = isactive;
        this.createdate = createdate;
        this.createdby = createdby;
        this.modifieddate = modifieddate;
        this.modifiedby = modifiedby;
        this.expiresinmonths = expiresinmonths;
        this.includeweekendsafterdays = includeweekendsafterdays;
        this.includewholidaysafterdays = includewholidaysafterdays;
        this.exceedleave = exceedleave;
        this.exceedLeaveAsLOP = exceedLeaveAsLOP;
        this.allowHalfDay = allowHalfDay;
        this.requestLeaveBeforeDays = requestLeaveBeforeDays;
        this.leavetype = leavetype;
        this.enableFileUpload = enableFileUpload;
        this.genderids = genderids;
        this.departmentids = departmentids;
        this.designationids = designationids;
        this.locationids = locationids;
        this.roleids = roleids;
    }
    return LeaveTypes;
}());



/***/ }),

/***/ "./src/app/leavecomp/leavecomp.component.scss":
/*!****************************************************!*\
  !*** ./src/app/leavecomp/leavecomp.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid {\n  padding: 2.75rem 2.25rem;\n  width: 100%;\n  -webkit-box-flex: 1;\n          flex-grow: 1; }\n\n.row {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -20px;\n  margin-left: -20px;\n  box-sizing: border-box; }\n\n.col-md-3 {\n  -webkit-box-flex: 0;\n          flex: 0 0 25%;\n  max-width: 25%; }\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 20px;\n  padding-left: 20px; }\n\n.border-left-primary {\n  border-left: 0.25rem solid #0ad30a !important; }\n\n.card1 {\n  border-radius: 8px 8px 11px;\n  -webkit-transition: 0.4s ease-out;\n  transition: 0.4s ease-out;\n  position: relative; }\n\n.card1:hover {\n  -webkit-transform: scale(0.9, 0.9);\n          transform: scale(0.9, 0.9);\n  box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25), -5px -5px 30px 15px rgba(0, 0, 0, 0.22); }\n\n.heading-footer {\n  background-size: cover;\n  box-shadow: none;\n  border: 0px;\n  color: #141414; }\n\n@media screen and (max-width: 960px) {\n  mat-cell:first-of-type, mat-footer-cell:first-of-type, mat-header-cell:first-of-type {\n    padding-left: 0px; }\n  mat-cell:last-of-type, mat-footer-cell:last-of-type, mat-header-cell:last-of-type {\n    padding-right: 0px; }\n  .mat-table {\n    border: 0;\n    vertical-align: middle; }\n  .mat-header-row {\n    min-height: 0px; }\n  .mat-table caption {\n    font-size: 1em; }\n  .mat-table .mat-header-cell {\n    border: 10px solid;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    padding: 0;\n    position: absolute;\n    width: 1px; }\n  .mat-table .mat-row {\n    border-bottom: 5px solid #ddd;\n    display: block; }\n  /*\r\n  .mat-table .mat-row:nth-child(even) {background: #CCC}\r\n  .mat-table .mat-row:nth-child(odd) {background: #FFF}\r\n  */\n  .mat-table .mat-cell {\n    border-bottom: 1px solid #ddd;\n    display: block;\n    font-size: 1em;\n    text-align: right;\n    font-weight: bold;\n    height: 30px;\n    margin-bottom: 4%; }\n  .mat-table .mat-cell:before {\n    /*\r\n  * aria-label has no advantage, it won't be read inside a table\r\n  content: attr(aria-label);\r\n  */\n    content: attr(data-label);\n    float: left;\n    text-transform: uppercase;\n    font-weight: normal;\n    font-size: .85em; }\n  .mat-table .mat-cell:last-child {\n    border-bottom: 0; }\n  .mat-table .mat-cell:first-child {\n    margin-top: 4%; }\n  .res {\n    padding-left: 6px;\n    padding-right: 6px; } }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 30%; }\n\n.mat-tab {\n  margin-left: 30px;\n  margin-right: 30px; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 12%; }\n\nmat-form-field {\n  width: 90%; }\n\n.id-name {\n  width: 35%;\n  margin-right: 5px; }\n\n.id-number {\n  width: 55%;\n  margin-left: 5px; }\n\n.phone-name {\n  width: 45px;\n  margin-right: 5px; }\n\n.country-code {\n  width: 25%;\n  margin-left: 1px; }\n\n.phone-number {\n  width: 65%;\n  margin-left: 5px; }\n\n.btn-sec {\n  margin-right: 5rem !important;\n  text-align: right;\n  margin-top: 1.5em; }\n\n.Update-btn {\n  margin: 5px; }\n\n.Discard-btn {\n  margin: 5px; }\n\n.text-inside {\n  position: absolute;\n  left: 5px;\n  width: 100%; }\n\n@media (max-width: 800px) {\n  .btn-sec {\n    margin-right: 1rem !important; } }\n\n@media (max-width: 600px) {\n  .btn-sec {\n    margin-right: 1rem !important; } }\n\n.col-xs-6 {\n  width: 50% !important; }\n\n.pb-2, .py-2 {\n  padding-bottom: 1.5rem !important; }\n\n.cursor-pointer {\n  cursor: pointer; }\n\n#popup {\n  position: absolute;\n  width: 350px;\n  height: 150px;\n  display: block;\n  background: #CFCFCF;\n  left: calc(50% - 175px);\n  top: 50px;\n  padding: 5px;\n  z-index: 10;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.8);\n  cursor: default;\n  display: none; }\n\n#popup h3 {\n  border-bottom: 1px solid #999; }\n\n.container-fluid[_ngcontent-lyq-c14] {\n  padding: 0.75rem 1.25rem; }\n\n.float {\n  float: right; }\n\nmat-dialog-content.mat-dialog-content {\n  border-bottom: solid 1px lightgray; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhdmVjb21wL0M6XFxVc2Vyc1xcYXN1bmtvcHBhZFxcRGVza3RvcFxcbmV3em9vbVxcem9vbXRlYW1zLXdlYi1uZy9zcmNcXGFwcFxcbGVhdmVjb21wXFxsZWF2ZWNvbXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xlYXZlY29tcC9sZWF2ZWNvbXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRSx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLG1CQUFZO1VBQVosWUFBWSxFQUFBOztBQUdaO0VBQ0Esb0JBQWE7RUFBYixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7O0FBRXRCO0VBQ0EsbUJBQWE7VUFBYixhQUFhO0VBQ2IsY0FBYyxFQUFBOztBQUVkO0VBQ0Esa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUtsQjtFQUNBLDZDQUEyQyxFQUFBOztBQUUzQztFQUdBLDJCQUEyQjtFQUMzQixpQ0FBeUI7RUFBekIseUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBOztBQUVsQjtFQVFBLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsMEZBQ29DLEVBQUE7O0FBWXJDO0VBR0Qsc0JBQXNCO0VBRXRCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsY0FBc0IsRUFBQTs7QUFlcEI7RUFDQTtJQUNBLGlCQUFpQixFQUFBO0VBRWpCO0lBQ0Esa0JBQWtCLEVBQUE7RUFFbEI7SUFDQSxTQUFTO0lBQ1Qsc0JBQ0EsRUFBQTtFQUNBO0lBQ0EsZUFBZSxFQUFBO0VBRWY7SUFDQSxjQUFjLEVBQUE7RUFJZDtJQUVBLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFVBQVUsRUFBQTtFQUdWO0lBQ0EsNkJBQTZCO0lBQzdCLGNBQWMsRUFBQTtFQUVkOzs7R0NqREM7RURxREQ7SUFDQSw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVc7SUFDWCxpQkFBaUIsRUFBQTtFQUVqQjtJQUNBOzs7R0NsREM7SURzREQseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsbUJBQW1CO0lBRW5CLGdCQUFnQixFQUFBO0VBRWhCO0lBQ0EsZ0JBQWdCLEVBQUE7RUFFaEI7SUFDQSxjQUFjLEVBQUE7RUFFZDtJQUNBLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQSxFQUNqQjs7QUFFRDtFQUNBLGVBQWU7RUFDZixVQUFVLEVBQUE7O0FBRVY7RUFDQSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBRWxCO0VBQ0EsV0FBVyxFQUFBOztBQUVYO0VBQ0EsZUFBZTtFQUNmLFVBQVUsRUFBQTs7QUFXVjtFQUNBLFVBQVUsRUFBQTs7QUFFVjtFQUNBLFVBQVU7RUFDVixpQkFBaUIsRUFBQTs7QUFFakI7RUFDQSxVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7O0FBRWhCO0VBQ0EsV0FBVztFQUNYLGlCQUFpQixFQUFBOztBQUVqQjtFQUNBLFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUFFaEI7RUFDQSxVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7O0FBRWhCO0VBQ0EsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFFakI7RUFDQSxXQUFXLEVBQUE7O0FBRVg7RUFDQSxXQUFXLEVBQUE7O0FBRVg7RUFDQSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVcsRUFBQTs7QUFFWDtFQUNBO0lBQ0EsNkJBQTZCLEVBQUEsRUFDNUI7O0FBRUQ7RUFDQTtJQUNBLDZCQUE2QixFQUFBLEVBQzVCOztBQUVEO0VBQ0EscUJBQXFCLEVBQUE7O0FBRXJCO0VBQ0EsaUNBQWlDLEVBQUE7O0FBRW5DO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxZQUFZO0VBQ1osV0FBVztFQUNYLHNDQUFzQztFQUN0QyxlQUFlO0VBQ2YsYUFBYSxFQUFBOztBQUVmO0VBQ0UsNkJBQ0YsRUFBQTs7QUFDQTtFQUNFLHdCQUF3QixFQUFBOztBQUcxQjtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLGtDQUFrQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGVhdmVjb21wL2xlYXZlY29tcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XHJcbiAgLy8gYmFja2dyb3VuZDogI2YyZWRmMztcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgcGFkZGluZzogMi43NXJlbSAyLjI1cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICB9XHJcblxyXG4gIC5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbi1yaWdodDogLTIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIC5jb2wtbWQtMyB7XHJcbiAgZmxleDogMCAwIDI1JTtcclxuICBtYXgtd2lkdGg6IDI1JTtcclxuICB9XHJcbiAgLmNvbC0xLCAuY29sLTIsIC5jb2wtMywgLmNvbC00LCAuY29sLTUsIC5jb2wtNiwgLmNvbC03LCAuY29sLTgsIC5jb2wtOSwgLmNvbC0xMCwgLmNvbC0xMSwgLmNvbC0xMiwgLmNvbCwgLmNvbC1hdXRvLCAuY29sLXNtLTEsIC5jb2wtc20tMiwgLmNvbC1zbS0zLCAuY29sLXNtLTQsIC5jb2wtc20tNSwgLmNvbC1zbS02LCAuY29sLXNtLTcsIC5jb2wtc20tOCwgLmNvbC1zbS05LCAuY29sLXNtLTEwLCAuY29sLXNtLTExLCAuY29sLXNtLTEyLCAuY29sLXNtLCAuY29sLXNtLWF1dG8sIC5jb2wtbWQtMSwgLmNvbC1tZC0yLCAuY29sLW1kLTMsIC5jb2wtbWQtNCwgLmNvbC1tZC01LCAuY29sLW1kLTYsIC5jb2wtbWQtNywgLmNvbC1tZC04LCAuY29sLW1kLTksIC5jb2wtbWQtMTAsIC5jb2wtbWQtMTEsIC5jb2wtbWQtMTIsIC5jb2wtbWQsIC5jb2wtbWQtYXV0bywgLmNvbC1sZy0xLCAuY29sLWxnLTIsIC5jb2wtbGctMywgLmNvbC1sZy00LCAuY29sLWxnLTUsIC5jb2wtbGctNiwgLmNvbC1sZy03LCAuY29sLWxnLTgsIC5jb2wtbGctOSwgLmNvbC1sZy0xMCwgLmNvbC1sZy0xMSwgLmNvbC1sZy0xMiwgLmNvbC1sZywgLmNvbC1sZy1hdXRvLCAuY29sLXhsLTEsIC5jb2wteGwtMiwgLmNvbC14bC0zLCAuY29sLXhsLTQsIC5jb2wteGwtNSwgLmNvbC14bC02LCAuY29sLXhsLTcsIC5jb2wteGwtOCwgLmNvbC14bC05LCAuY29sLXhsLTEwLCAuY29sLXhsLTExLCAuY29sLXhsLTEyLCAuY29sLXhsLCAuY29sLXhsLWF1dG8ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG4gIC8vIC5jYXJkLWJvZHkge1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZSAhaW1wb3J0YW50O1xyXG4gIC8vIH1cclxuICAuYm9yZGVyLWxlZnQtcHJpbWFyeSB7XHJcbiAgYm9yZGVyLWxlZnQ6IC4yNXJlbSBzb2xpZCAjMGFkMzBhIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNhcmQxXHJcbiAge1xyXG4gIC8vIGJvcmRlci1yYWRpdXM6IDE1cHggNTBweCAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMTFweDtcclxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLmNhcmQxOmhvdmVyIHtcclxuICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG4gIC8vIHRyYW5zaXRpb246IDAuNHMgZWFzZS1vdXQ7XHJcbiAgLy8gZmlsdGVyOiBncmF5c2NhbGUoMCUpO1xyXG4gIC8vIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoMGRlZyk7XHJcbiAgLy8gdHJhbnNmb3JtOiBzY2FsZSgxLjEpO2JveC1zaGFkb3c6IDVweCA1cHggMzBweCA3cHggcmdiYSgwLDAsMCwwLjI1KSwgLTVweCAtNXB4IDMwcHggN3B4IHJnYmEoMCwwLDAsMC4yMik7XHJcbiAgLy8gY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8vIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjksIDAuOSk7XHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCAzMHB4IDE1cHggcmdiYSgwLDAsMCwwLjI1KSxcclxuICAtNXB4IC01cHggMzBweCAxNXB4IHJnYmEoMCwwLDAsMC4yMik7XHJcbiAgfVxyXG5cclxuICAvLyAudGFibGUge1xyXG4gIC8vIGJvcmRlcjogMCBub25lO1xyXG4gIC8vIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAvLyBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIC8vIH1cclxuICAvLyB0aCx0ZHtcclxuICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gfVxyXG5cclxuIC5oZWFkaW5nLWZvb3RlclxyXG57XHJcblxyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4td2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbmJveC1zaGFkb3c6IG5vbmU7XHJcbmJvcmRlcjogMHB4O1xyXG5jb2xvcjogcmdiKDIwLCAyMCwgMjApO1xyXG59XHJcbi8vIHRkLm1hdC1jZWxsLCB0ZC5tYXQtZm9vdGVyLWNlbGwsIHRoLm1hdC1oZWFkZXItY2VsbCB7XHJcbi8vICAgcGFkZGluZzogMDtcclxuLy8gICBib3JkZXItYm90dG9tLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuLy8gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4vLyB9XHJcblxyXG4gIC8vIC51aS1kYXRhdGFibGUgKiB7XHJcbiAgLy8gYm9yZGVyIDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gfVxyXG4gIC8vIC5jb2xvcntcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgLy8gfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gIG1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsIG1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlLCBtYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgfVxyXG4gIG1hdC1jZWxsOmxhc3Qtb2YtdHlwZSwgbWF0LWZvb3Rlci1jZWxsOmxhc3Qtb2YtdHlwZSwgbWF0LWhlYWRlci1jZWxsOmxhc3Qtb2YtdHlwZSB7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gIH1cclxuICAubWF0LXRhYmxlIHtcclxuICBib3JkZXI6IDA7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZVxyXG4gIH1cclxuICAubWF0LWhlYWRlci1yb3cge1xyXG4gIG1pbi1oZWlnaHQ6IDBweDtcclxuICB9XHJcbiAgLm1hdC10YWJsZSBjYXB0aW9uIHtcclxuICBmb250LXNpemU6IDFlbTtcclxuICB9XHJcblxyXG5cclxuICAubWF0LXRhYmxlIC5tYXQtaGVhZGVyLWNlbGwge1xyXG5cclxuICBib3JkZXI6IDEwcHggc29saWQ7XHJcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcclxuICBoZWlnaHQ6IDFweDtcclxuICBtYXJnaW46IC0xcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDFweDtcclxuICB9XHJcblxyXG4gIC5tYXQtdGFibGUgLm1hdC1yb3cge1xyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZGRkO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAvKlxyXG4gIC5tYXQtdGFibGUgLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kOiAjQ0NDfVxyXG4gIC5tYXQtdGFibGUgLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCkge2JhY2tncm91bmQ6ICNGRkZ9XHJcbiAgKi9cclxuICAubWF0LXRhYmxlIC5tYXQtY2VsbCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgaGVpZ2h0OjMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgfVxyXG4gIC5tYXQtdGFibGUgLm1hdC1jZWxsOmJlZm9yZSB7XHJcbiAgLypcclxuICAqIGFyaWEtbGFiZWwgaGFzIG5vIGFkdmFudGFnZSwgaXQgd29uJ3QgYmUgcmVhZCBpbnNpZGUgYSB0YWJsZVxyXG4gIGNvbnRlbnQ6IGF0dHIoYXJpYS1sYWJlbCk7XHJcbiAgKi9cclxuICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHJcbiAgZm9udC1zaXplOiAuODVlbTtcclxuICB9XHJcbiAgLm1hdC10YWJsZSAubWF0LWNlbGw6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLm1hdC10YWJsZSAubWF0LWNlbGw6Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbi10b3A6IDQlO1xyXG4gIH1cclxuICAucmVze1xyXG4gIHBhZGRpbmctbGVmdDogNnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcclxuICB9XHJcbiAgfVxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgfVxyXG4gIC5tYXQtdGFie1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxuICB9XHJcbiAgdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTIlO1xyXG4gIH1cclxuXHJcbiAgLy8gbWF0LWhlYWRlci1yb3cge1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICMyZDJhMmE7XHJcbiAgLy8gfVxyXG4gIC8vIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIC8vIC8gY29sb3I6IHJnYmEoMCwwLDAsLjU0KTsgL1xyXG4gIC8vIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIC8vIH1cclxuXHJcbiAgbWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG4gIC5pZC1uYW1lIHtcclxuICB3aWR0aDogMzUlO1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxuICAuaWQtbnVtYmVyIHtcclxuICB3aWR0aDogNTUlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgfVxyXG4gIC5waG9uZS1uYW1lIHtcclxuICB3aWR0aDogNDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgLmNvdW50cnktY29kZSB7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBtYXJnaW4tbGVmdDogMXB4O1xyXG4gIH1cclxuICAucGhvbmUtbnVtYmVyIHtcclxuICB3aWR0aDogNjUlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgfVxyXG4gIC5idG4tc2VjIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVyZW0gIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBtYXJnaW4tdG9wOiAxLjVlbTtcclxuICB9XHJcbiAgLlVwZGF0ZS1idG4ge1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIH1cclxuICAuRGlzY2FyZC1idG4ge1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIH1cclxuICAudGV4dC1pbnNpZGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5idG4tc2VjIHtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5idG4tc2VjIHtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgfVxyXG4gIC5jb2wteHMtNntcclxuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5wYi0yLCAucHktMiB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5jdXJzb3ItcG9pbnRlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI3BvcHVwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogI0NGQ0ZDRjtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDE3NXB4KTtcclxuICB0b3A6IDUwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiNwb3B1cCBoMyB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTlcclxufVxyXG4uY29udGFpbmVyLWZsdWlkW19uZ2NvbnRlbnQtbHlxLWMxNF0ge1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcclxuXHJcbn1cclxuLmZsb2F0e1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5tYXQtZGlhbG9nLWNvbnRlbnQubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggbGlnaHRncmF5O1xyXG59XHJcbiIsIi5jb250YWluZXItZmx1aWQge1xuICBwYWRkaW5nOiAyLjc1cmVtIDIuMjVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWdyb3c6IDE7IH1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbi5jb2wtbWQtMyB7XG4gIGZsZXg6IDAgMCAyNSU7XG4gIG1heC13aWR0aDogMjUlOyB9XG5cbi5jb2wtMSwgLmNvbC0yLCAuY29sLTMsIC5jb2wtNCwgLmNvbC01LCAuY29sLTYsIC5jb2wtNywgLmNvbC04LCAuY29sLTksIC5jb2wtMTAsIC5jb2wtMTEsIC5jb2wtMTIsIC5jb2wsIC5jb2wtYXV0bywgLmNvbC1zbS0xLCAuY29sLXNtLTIsIC5jb2wtc20tMywgLmNvbC1zbS00LCAuY29sLXNtLTUsIC5jb2wtc20tNiwgLmNvbC1zbS03LCAuY29sLXNtLTgsIC5jb2wtc20tOSwgLmNvbC1zbS0xMCwgLmNvbC1zbS0xMSwgLmNvbC1zbS0xMiwgLmNvbC1zbSwgLmNvbC1zbS1hdXRvLCAuY29sLW1kLTEsIC5jb2wtbWQtMiwgLmNvbC1tZC0zLCAuY29sLW1kLTQsIC5jb2wtbWQtNSwgLmNvbC1tZC02LCAuY29sLW1kLTcsIC5jb2wtbWQtOCwgLmNvbC1tZC05LCAuY29sLW1kLTEwLCAuY29sLW1kLTExLCAuY29sLW1kLTEyLCAuY29sLW1kLCAuY29sLW1kLWF1dG8sIC5jb2wtbGctMSwgLmNvbC1sZy0yLCAuY29sLWxnLTMsIC5jb2wtbGctNCwgLmNvbC1sZy01LCAuY29sLWxnLTYsIC5jb2wtbGctNywgLmNvbC1sZy04LCAuY29sLWxnLTksIC5jb2wtbGctMTAsIC5jb2wtbGctMTEsIC5jb2wtbGctMTIsIC5jb2wtbGcsIC5jb2wtbGctYXV0bywgLmNvbC14bC0xLCAuY29sLXhsLTIsIC5jb2wteGwtMywgLmNvbC14bC00LCAuY29sLXhsLTUsIC5jb2wteGwtNiwgLmNvbC14bC03LCAuY29sLXhsLTgsIC5jb2wteGwtOSwgLmNvbC14bC0xMCwgLmNvbC14bC0xMSwgLmNvbC14bC0xMiwgLmNvbC14bCwgLmNvbC14bC1hdXRvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7IH1cblxuLmJvcmRlci1sZWZ0LXByaW1hcnkge1xuICBib3JkZXItbGVmdDogMC4yNXJlbSBzb2xpZCAjMGFkMzBhICFpbXBvcnRhbnQ7IH1cblxuLmNhcmQxIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAxMXB4O1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLmNhcmQxOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjksIDAuOSk7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMzBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIC01cHggLTVweCAzMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyKTsgfVxuXG4uaGVhZGluZy1mb290ZXIge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMHB4O1xuICBjb2xvcjogIzE0MTQxNDsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICBtYXQtY2VsbDpmaXJzdC1vZi10eXBlLCBtYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSwgbWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctbGVmdDogMHB4OyB9XG4gIG1hdC1jZWxsOmxhc3Qtb2YtdHlwZSwgbWF0LWZvb3Rlci1jZWxsOmxhc3Qtb2YtdHlwZSwgbWF0LWhlYWRlci1jZWxsOmxhc3Qtb2YtdHlwZSB7XG4gICAgcGFkZGluZy1yaWdodDogMHB4OyB9XG4gIC5tYXQtdGFibGUge1xuICAgIGJvcmRlcjogMDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG4gIC5tYXQtaGVhZGVyLXJvdyB7XG4gICAgbWluLWhlaWdodDogMHB4OyB9XG4gIC5tYXQtdGFibGUgY2FwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxZW07IH1cbiAgLm1hdC10YWJsZSAubWF0LWhlYWRlci1jZWxsIHtcbiAgICBib3JkZXI6IDEwcHggc29saWQ7XG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDFweDsgfVxuICAubWF0LXRhYmxlIC5tYXQtcm93IHtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2RkZDtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAvKlxyXG4gIC5tYXQtdGFibGUgLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kOiAjQ0NDfVxyXG4gIC5tYXQtdGFibGUgLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCkge2JhY2tncm91bmQ6ICNGRkZ9XHJcbiAgKi9cbiAgLm1hdC10YWJsZSAubWF0LWNlbGwge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0JTsgfVxuICAubWF0LXRhYmxlIC5tYXQtY2VsbDpiZWZvcmUge1xuICAgIC8qXHJcbiAgKiBhcmlhLWxhYmVsIGhhcyBubyBhZHZhbnRhZ2UsIGl0IHdvbid0IGJlIHJlYWQgaW5zaWRlIGEgdGFibGVcclxuICBjb250ZW50OiBhdHRyKGFyaWEtbGFiZWwpO1xyXG4gICovXG4gICAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAuODVlbTsgfVxuICAubWF0LXRhYmxlIC5tYXQtY2VsbDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tOiAwOyB9XG4gIC5tYXQtdGFibGUgLm1hdC1jZWxsOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiA0JTsgfVxuICAucmVzIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7IH0gfVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAzMCU7IH1cblxuLm1hdC10YWIge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4OyB9XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTIlOyB9XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDkwJTsgfVxuXG4uaWQtbmFtZSB7XG4gIHdpZHRoOiAzNSU7XG4gIG1hcmdpbi1yaWdodDogNXB4OyB9XG5cbi5pZC1udW1iZXIge1xuICB3aWR0aDogNTUlO1xuICBtYXJnaW4tbGVmdDogNXB4OyB9XG5cbi5waG9uZS1uYW1lIHtcbiAgd2lkdGg6IDQ1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4OyB9XG5cbi5jb3VudHJ5LWNvZGUge1xuICB3aWR0aDogMjUlO1xuICBtYXJnaW4tbGVmdDogMXB4OyB9XG5cbi5waG9uZS1udW1iZXIge1xuICB3aWR0aDogNjUlO1xuICBtYXJnaW4tbGVmdDogNXB4OyB9XG5cbi5idG4tc2VjIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cmVtICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxLjVlbTsgfVxuXG4uVXBkYXRlLWJ0biB7XG4gIG1hcmdpbjogNXB4OyB9XG5cbi5EaXNjYXJkLWJ0biB7XG4gIG1hcmdpbjogNXB4OyB9XG5cbi50ZXh0LWluc2lkZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNXB4O1xuICB3aWR0aDogMTAwJTsgfVxuXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmJ0bi1zZWMge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50OyB9IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5idG4tc2VjIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDsgfSB9XG5cbi5jb2wteHMtNiB7XG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDsgfVxuXG4ucGItMiwgLnB5LTIge1xuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7IH1cblxuLmN1cnNvci1wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbiNwb3B1cCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogI0NGQ0ZDRjtcbiAgbGVmdDogY2FsYyg1MCUgLSAxNzVweCk7XG4gIHRvcDogNTBweDtcbiAgcGFkZGluZzogNXB4O1xuICB6LWluZGV4OiAxMDtcbiAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4jcG9wdXAgaDMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk5OTsgfVxuXG4uY29udGFpbmVyLWZsdWlkW19uZ2NvbnRlbnQtbHlxLWMxNF0ge1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07IH1cblxuLmZsb2F0IHtcbiAgZmxvYXQ6IHJpZ2h0OyB9XG5cbm1hdC1kaWFsb2ctY29udGVudC5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggbGlnaHRncmF5OyB9XG4iXX0= */");

/***/ }),

/***/ "./src/app/leavecomp/leavecomp.component.ts":
/*!**************************************************!*\
  !*** ./src/app/leavecomp/leavecomp.component.ts ***!
  \**************************************************/
/*! exports provided: LeavecompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavecompComponent", function() { return LeavecompComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_appservices_leavemanagement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/appservices/leavemanagement.service */ "./src/app/services/appservices/leavemanagement.service.ts");
/* harmony import */ var _services_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _leavereq__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./leavereq */ "./src/app/leavecomp/leavereq.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");











var LeavecompComponent = /** @class */ (function () {
    function LeavecompComponent(fb, masterService, messageService, dialog, _data, confirmationService) {
        this.fb = fb;
        this.masterService = masterService;
        this.messageService = messageService;
        this.dialog = dialog;
        this._data = _data;
        this.confirmationService = confirmationService;
        this.submitted = false;
        this.arr = [];
        this.cancelReason = false;
        this.data_clone = [];
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subscription"]();
        this.today = new Date().toJSON();
        this.minDate = new Date(this.today);
        this.checkstatus = [
            //  new Checkstatus(1,'Pending'),
            new _leavereq__WEBPACK_IMPORTED_MODULE_8__["Checkstatus"](2, 'Approved'),
            new _leavereq__WEBPACK_IMPORTED_MODULE_8__["Checkstatus"](3, 'Cancel'),
        ];
        this.displayedColumns = ['leaveType', 'startDate', 'endDate', 'numberofDays', 'requesterComments', 'leaveStatus', 'action'];
        this.displayedColumnsForRequests = ['id', 'leaveType', 'startDate', 'endDate', 'numberofDays', 'approverComments', 'leaveStatus', 'action'];
    }
    LeavecompComponent.prototype.ngOnInit = function () {
        this.getLeave();
        this.getleavebalancetodispayoncard_group();
        this.getshowrequstleave_group();
        this.getleaverequest();
        this.getaprovereqfromcontrol();
        this.leavetypedropdown();
        this.taskreactive = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            leaveTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            leaveType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            requesterComments: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            numberofDays: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            statusId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            leaveStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            approverId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
        });
    };
    LeavecompComponent.prototype.OnstatusChange = function (status, leaveId) {
        var _this = this;
        var data = {
            id: leaveId,
            statusId: status
        };
        if (status === 3) {
            this.cancelReason = true;
            this.confirmationService.confirm({
                message: 'Are you sure that you want to denied?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: function () {
                    _this._data.aprroveorreject(data).subscribe(function (data) {
                        console.log(data);
                        _this.getleaverequest();
                    }, function (e) { return console.log(e); });
                },
                reject: function () {
                }
            });
        }
        else if (status === 2) {
            this._data.aprroveorreject(data).subscribe(function (data) {
                console.log(data);
                _this.getleaverequest();
            }, function (e) { return console.log(e); });
        }
    };
    LeavecompComponent.prototype.showbalance_leave = function () {
        this.taskreactive2 = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            leaveTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            allotedLeaves: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            claimedLeaves: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            carryforwardedLeaves: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            balanceLeaves: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            approverId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
        });
    };
    LeavecompComponent.prototype.getaprovereqfromcontrol = function () {
        this.approveCancelReq = this.fb.group({
            requesterComments: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            statusId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
        });
    };
    LeavecompComponent.prototype.getshowrequstleave_group = function () {
        this.taskreactive3 = this.fb.group({
            leaveTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            leaveType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            numberofDays: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            statusId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            leaveStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            requesterComments: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            approverComments: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            approverId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
        });
    };
    LeavecompComponent.prototype.getleaverequest = function () {
        var _this = this;
        this._subscriptions.add(this._data.getLeaveRequest().subscribe(function (data) {
            _this.leaverequstsclass = data;
            _this.data_clone = lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](_this.leaverequstsclass);
            _this.requestDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](_this.leaverequstsclass);
            console.log(_this.leaverequstsclass);
        }));
    };
    LeavecompComponent.prototype.getleavebalancetodispayoncard_group = function () {
        var _this = this;
        this._subscriptions.add(this._data.getLeaveBalance().subscribe(function (data) {
            _this.classnameforbalance = data;
            console.log(_this.classnameforbalance);
        }));
    };
    LeavecompComponent.prototype.getLeave = function () {
        var _this = this;
        this._subscriptions.add(this._data.getLeave().subscribe(function (data) {
            _this.mydetails = data;
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](_this.mydetails);
            console.log(_this.mydetails);
        }));
    };
    LeavecompComponent.prototype.addDialog = function () {
        this.dialog.open(this.matdialog, {});
        this.taskreactive.reset();
        this.id = undefined;
        this.display = true;
    };
    LeavecompComponent.prototype.openedit = function (item) {
        this.dialog.open(this.matdialog, {});
        this.display = true;
        var startDate = new Date(item.startDate);
        var endDate = new Date(item.endDate);
        this.id = item.id;
        this.taskreactive.patchValue({
            leaveType: item.leaveTypeId,
            startDate: startDate,
            endDate: endDate,
            leaveStatus: item.leaveStatus,
            numberofDays: item.numberofDays,
            requesterComments: item.requesterComments,
            approverComments: item.approverComments,
            approverId: item.approverId,
        });
    };
    LeavecompComponent.prototype.onFormSubmit = function (addForm) {
        var _this = this;
        var test = this.masterService.getFormErrorMessage(addForm, this.taskreactive);
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
            if (this.id === undefined) {
                // const req = {
                //   memberId: 2,
                //   leaveTypeId: 1,
                //   leaveType: addForm.value.leaveType,
                //   startDate: addForm.value.startDate,
                //   endDate: addForm.value.endDate,
                //   numberofDays: addForm.value.numberofDays,
                //   statusId: 1,
                //   leaveStatus: 'Pending',
                //   requesterComments: addForm.value.requesterComments,
                //   approverComments: 'Waiting',
                //   approverId: 0,
                // };
                console.log(addForm.value);
                this._subscriptions.add(this._data
                    .addEditLeaves(new _leavereq__WEBPACK_IMPORTED_MODULE_8__["MemberLeaveTransactions"](this.id, 2, addForm.value.leaveType, addForm.value.leaveId, addForm.value.startDate, addForm.value.endDate, addForm.value.numberofDays, 1, 'Pending', addForm.value.requesterComments, '', 0))
                    .subscribe(function (x) {
                    _this.getLeave();
                    _this.display = false;
                    var successMessage = 'Applyed Successfuly';
                    _this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: successMessage
                    });
                }));
                this.dialog.closeAll();
            }
            else {
                this.submitted = true;
                this._subscriptions.add(this._data
                    .addEditLeaves(new _leavereq__WEBPACK_IMPORTED_MODULE_8__["MemberLeaveTransactions"](this.id, 2, addForm.value.leaveType, addForm.value.leaveId, addForm.value.startDate, addForm.value.endDate, addForm.value.numberofDays, 1, addForm.value.leaveStatus, addForm.value.requesterComments, '', addForm.value.approverId))
                    .subscribe(function () {
                    _this.ngOnInit();
                    _this.messageService.add({
                        severity: 'success',
                        summary: 'Update',
                        detail: 'Update Successfull'
                    });
                }));
                this.dialog.closeAll();
            }
        }
    };
    LeavecompComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    LeavecompComponent.prototype.applyFilter1 = function (filterValue) {
        this.requestDataSource.filter = filterValue.trim().toLowerCase();
    };
    LeavecompComponent.prototype.selectedFilter = function (item) {
        var test = lodash__WEBPACK_IMPORTED_MODULE_6__["filter"](this.data_clone, function (c) {
            return (c.leaveTypeId == item);
        });
        this.data_clone = lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](this.leaverequstsclass);
        this.requestDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](test);
    };
    LeavecompComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        console.log(id);
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: function () {
                _this.onItemDeleted(id);
            },
            reject: function () { }
        });
    };
    LeavecompComponent.prototype.onItemDeleted = function (id) {
        var _this = this;
        this._subscriptions.add(this._data.deleteleave(id).subscribe(function (data) {
            _this.messageService.add({
                severity: 'success',
                summary: 'Success Message',
                detail: 'Deleted Sucessfully'
            });
            _this.getLeave();
        }));
    };
    LeavecompComponent.prototype.navigateTab = function (status) {
        this.requestDataSource.filter = status.trim().toLowerCase();
        this.selectedTab.selectedIndex = 1;
    };
    LeavecompComponent.prototype.navigateTab1 = function (approvedstatus) {
        this.requestDataSource.filter = approvedstatus.trim().toLowerCase();
        this.selectedTab.selectedIndex = 1;
    };
    LeavecompComponent.prototype.navigateTab3 = function (cancelstatus) {
        this.requestDataSource.filter = cancelstatus.trim().toLowerCase();
        this.selectedTab.selectedIndex = 1;
    };
    LeavecompComponent.prototype.filterdata = function (status) {
        this.dataSource.filter = status.trim().toLowerCase();
    };
    LeavecompComponent.prototype.openDialogWithTemplateRef = function (templateRef) {
        this.dialog.open(templateRef);
    };
    LeavecompComponent.prototype.openDialogWithoutRef = function (id) {
        this.taskreactive.patchValue({
            leaveTypeId: id.leaveTypeId,
        });
        this.dialog.open(this.secondDialog);
        console.log(this.taskreactive.value.leaveType);
    };
    LeavecompComponent.prototype.openDialogforApproveCancelReq = function (status, leaveId) {
        this.approveCancelReq.reset();
        this.approveCancelReq.patchValue({
            id: leaveId,
            statusId: status,
        });
        if (status === 3) {
            this.cancelReason = true;
            this.dialog.open(this.cancel);
        }
        else if (status === 2) {
            this.dialog.open(this.cancel);
        }
    };
    LeavecompComponent.prototype.leavetypedropdown = function () {
        var _this = this;
        this._subscriptions.add(this._data.getdropdownleavetypes().subscribe(function (data) {
            _this.arr = data;
            console.log(_this.arr);
        }));
    };
    LeavecompComponent.prototype.submitApproveCancel = function () {
        var _this = this;
        var reqdata = {
            id: this.approveCancelReq.value.id,
            statusId: this.approveCancelReq.value.statusId,
            approverComments: this.approveCancelReq.value.requesterComments
        };
        console.log(reqdata);
        this._subscriptions.add(this._data.aprroveorreject(reqdata).subscribe(function (data) {
            console.log(data);
            _this.getleaverequest();
        }, function (e) { return console.log(e); }));
        this.dialog.closeAll();
    };
    LeavecompComponent.prototype.Approvereq = function (data) {
        var _this = this;
        this._subscriptions.add(this._data.aprroveorreject(data).subscribe(function (data) {
            console.log(data);
            _this.getleaverequest();
        }, function (e) { return console.log(e); }));
        this.dialog.closeAll();
    };
    LeavecompComponent.prototype.onStatusChange1 = function (item) {
        if (item.leaveStatus === 'Cancel') {
            this.cancelReason = true;
            this.confirmationService.confirm({
                message: 'Are you sure that you want to denied?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: function () {
                },
            });
        }
        else {
        }
    };
    LeavecompComponent.prototype.closeDialog = function () {
        this.leaverequstsclass = this.data_clone;
        this.data_clone = lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](this.leaverequstsclass);
        this.requestDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](this.leaverequstsclass);
        this.dialog.closeAll();
    };
    LeavecompComponent.prototype.refresh = function () {
        this.getleaverequest();
    };
    LeavecompComponent.prototype.ngOnDestroy = function () {
        this._subscriptions.unsubscribe();
    };
    LeavecompComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_master_service__WEBPACK_IMPORTED_MODULE_2__["MasterService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
        { type: _services_appservices_leavemanagement_service__WEBPACK_IMPORTED_MODULE_1__["LeavemanagementService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('selectedTab', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabGroup"])
    ], LeavecompComponent.prototype, "selectedTab", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('secondDialog', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"])
    ], LeavecompComponent.prototype, "secondDialog", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('cancel', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"])
    ], LeavecompComponent.prototype, "cancel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('paginator', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])
    ], LeavecompComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('paginator1', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])
    ], LeavecompComponent.prototype, "paginator1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('matdialog', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"])
    ], LeavecompComponent.prototype, "matdialog", void 0);
    LeavecompComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-leavecomp',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./leavecomp.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/leavecomp/leavecomp.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./leavecomp.component.scss */ "./src/app/leavecomp/leavecomp.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_master_service__WEBPACK_IMPORTED_MODULE_2__["MasterService"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            _services_appservices_leavemanagement_service__WEBPACK_IMPORTED_MODULE_1__["LeavemanagementService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"]])
    ], LeavecompComponent);
    return LeavecompComponent;
}());



/***/ }),

/***/ "./src/app/leavecomp/leavereq.ts":
/*!***************************************!*\
  !*** ./src/app/leavecomp/leavereq.ts ***!
  \***************************************/
/*! exports provided: MemberLeaveTransactions, MemberLeaveRequest, MemberLeavesData, Checkstatus, leavetypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberLeaveTransactions", function() { return MemberLeaveTransactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberLeaveRequest", function() { return MemberLeaveRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberLeavesData", function() { return MemberLeavesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkstatus", function() { return Checkstatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leavetypes", function() { return leavetypes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var MemberLeaveTransactions = /** @class */ (function () {
    function MemberLeaveTransactions(id, memberId, leaveTypeId, leaveType, startDate, endDate, numberofDays, statusId, leaveStatus, requesterComments, approverComments, approverId) {
        this.id = id;
        this.memberId = memberId;
        this.leaveTypeId = leaveTypeId;
        this.leaveType = leaveType;
        this.startDate = startDate;
        this.endDate = endDate;
        this.numberofDays = numberofDays;
        this.statusId = statusId;
        this.leaveStatus = leaveStatus;
        this.requesterComments = requesterComments;
        this.approverComments = approverComments;
        this.approverId = approverId;
    }
    return MemberLeaveTransactions;
}());

var MemberLeaveRequest = /** @class */ (function () {
    function MemberLeaveRequest(id, memberId, leaveTypeId, leaveType, startDate, endDate, numberofDays, statusId, leaveStatus, requesterComments, approverComments, approverId) {
        this.id = id;
        this.memberId = memberId;
        this.leaveTypeId = leaveTypeId;
        this.leaveType = leaveType;
        this.startDate = startDate;
        this.endDate = endDate;
        this.numberofDays = numberofDays;
        this.statusId = statusId;
        this.leaveStatus = leaveStatus;
        this.requesterComments = requesterComments;
        this.approverComments = approverComments;
        this.approverId = approverId;
    }
    return MemberLeaveRequest;
}());

var MemberLeavesData = /** @class */ (function () {
    function MemberLeavesData(id, memberId, leaveTypeId, allotedLeaves, claimedLeaves, carryforwardedLeaves, balanceLeaves, currentyear, isactive, createDate, createdBy, modifiedDate, modifiedby) {
        this.id = id;
        this.memberId = memberId;
        this.leaveTypeId = leaveTypeId;
        this.allotedLeaves = allotedLeaves;
        this.claimedLeaves = claimedLeaves;
        this.carryforwardedLeaves = carryforwardedLeaves;
        this.balanceLeaves = balanceLeaves;
        this.currentyear = currentyear;
        this.isactive = isactive;
        this.createDate = createDate;
        this.createdBy = createdBy;
        this.modifiedDate = modifiedDate;
        this.modifiedby = modifiedby;
    }
    return MemberLeavesData;
}());

var Checkstatus = /** @class */ (function () {
    function Checkstatus(id, name) {
        this.id = id;
        this.name = name;
    }
    return Checkstatus;
}());

var leavetypes = /** @class */ (function () {
    function leavetypes(leaveId, lTypeName) {
        this.leaveId = leaveId;
        this.lTypeName = lTypeName;
    }
    return leavetypes;
}());

// public class MemberLeavesData
//     {
//         public int Id { get; set; }
//         public int MemberId { get; set; }
//         public int LeaveTypeId { get; set; }
//         public int AllotedLeaves { get; set; }
//         public int ClaimedLeaves { get; set; }
//         public int CarryforwardedLeaves { get; set; }
//         public int BalanceLeaves { get; set; }
//         public int Currentyear { get; set; }
//         public bool isactive { get; set; }
//         public DateTime? CreateDate { get; set; }
//         public int CreatedBy { get; set; }
//         public DateTime? ModifiedDate { get; set; }
//         public int Modifiedby { get; set; }
//     }


/***/ }),

/***/ "./src/app/maps/maps.component.css":
/*!*****************************************!*\
  !*** ./src/app/maps/maps.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcHMvbWFwcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/maps/maps.component.ts":
/*!****************************************!*\
  !*** ./src/app/maps/maps.component.ts ***!
  \****************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MapsComponent = /** @class */ (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
            styles: [{
                    "featureType": "water",
                    "stylers": [{
                            "saturation": 43
                        }, {
                            "lightness": -11
                        }, {
                            "hue": "#0088ff"
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "hue": "#ff0000"
                        }, {
                            "saturation": -100
                        }, {
                            "lightness": 99
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#808080"
                        }, {
                            "lightness": 54
                        }]
                }, {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#ece2d9"
                        }]
                }, {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#ccdca1"
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "color": "#767676"
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                            "color": "#ffffff"
                        }]
                }, {
                    "featureType": "poi",
                    "stylers": [{
                            "visibility": "off"
                        }]
                }, {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "visibility": "on"
                        }, {
                            "color": "#b8cb93"
                        }]
                }, {
                    "featureType": "poi.park",
                    "stylers": [{
                            "visibility": "on"
                        }]
                }, {
                    "featureType": "poi.sports_complex",
                    "stylers": [{
                            "visibility": "on"
                        }]
                }, {
                    "featureType": "poi.medical",
                    "stylers": [{
                            "visibility": "on"
                        }]
                }, {
                    "featureType": "poi.business",
                    "stylers": [{
                            "visibility": "simplified"
                        }]
                }]
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
        });
        // To add the marker to the map, call setMap();
        marker.setMap(map);
    };
    MapsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-maps',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./maps.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/maps/maps.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./maps.component.css */ "./src/app/maps/maps.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());



/***/ }),

/***/ "./src/app/notifications/notifications.component.css":
/*!***********************************************************!*\
  !*** ./src/app/notifications/notifications.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-elevation-z8{\r\n    padding: 20px;\r\n  }\r\n  \r\n  i{\r\n    font-size: 1.5em;\r\n    margin: 0px 5px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  i:hover{\r\n    font-size: 2em;\r\n  }\r\n  \r\n  .fa-pencil-square-o{\r\n    color:#2980b9;\r\n  }\r\n  \r\n  .fa-trash-o{\r\n    color:#c0392b;\r\n  }\r\n  \r\n  .example-radio-group {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    margin: 15px 0;\r\n  }\r\n  \r\n  .example-radio-button {\r\n    margin: 5px;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1lbGV2YXRpb24tejh7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICBpe1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIG1hcmdpbjogMHB4IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgaTpob3ZlcntcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gIH1cclxuICBcclxuICAuZmEtcGVuY2lsLXNxdWFyZS1ve1xyXG4gICAgY29sb3I6IzI5ODBiOTtcclxuICB9XHJcbiAgXHJcbiAgLmZhLXRyYXNoLW97XHJcbiAgICBjb2xvcjojYzAzOTJiO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/notifications/notifications.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/notifications/notifications.component.ts ***!
  \**********************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");



var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(toastr) {
        this.toastr = toastr;
    }
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var color = Math.floor((Math.random() * 5) + 1);
        switch (color) {
            case 1:
                this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
                    timeOut: 8000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-info alert-with-icon",
                    positionClass: 'toast-' + from + '-' + align
                });
                break;
            case 2:
                this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
                    timeOut: 8000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-success alert-with-icon",
                    positionClass: 'toast-' + from + '-' + align
                });
                break;
            case 3:
                this.toastr.warning('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
                    timeOut: 8000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-warning alert-with-icon",
                    positionClass: 'toast-' + from + '-' + align
                });
                break;
            case 4:
                this.toastr.error('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
                    timeOut: 8000,
                    enableHtml: true,
                    closeButton: true,
                    toastClass: "alert alert-danger alert-with-icon",
                    positionClass: 'toast-' + from + '-' + align
                });
                break;
            case 5:
                this.toastr.show('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
                    timeOut: 8000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-primary alert-with-icon",
                    positionClass: 'toast-' + from + '-' + align
                });
                break;
            default:
                break;
        }
    };
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
    ]; };
    NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notifications',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notifications.component.css */ "./src/app/notifications/notifications.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/profile/leave.ts":
/*!**********************************!*\
  !*** ./src/app/profile/leave.ts ***!
  \**********************************/
/*! exports provided: Leave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Leave", function() { return Leave; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Leave = /** @class */ (function () {
    function Leave(leavename) {
        this.leavename = leavename;
    }
    return Leave;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _leave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leave */ "./src/app/profile/leave.ts");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile */ "./src/app/profile/profile.ts");




// import { FormGroup } from '@angular/forms';
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.arr = [
            new _profile__WEBPACK_IMPORTED_MODULE_3__["Profile"]('Ashwini', 'Ashwini Sunkoppad', 'ashwiniss173@gmil.com', 'Developer', '154879553', '15-12-1998', 'Female', 'Hebbal,Bangalore'),
        ];
        this.arr1 = [
            new _leave__WEBPACK_IMPORTED_MODULE_2__["Leave"]('Allowed leaves'),
            new _leave__WEBPACK_IMPORTED_MODULE_2__["Leave"]('Requested leaves'),
            new _leave__WEBPACK_IMPORTED_MODULE_2__["Leave"]('Pending leaves'),
            new _leave__WEBPACK_IMPORTED_MODULE_2__["Leave"]('Emergency leaves'),
            new _leave__WEBPACK_IMPORTED_MODULE_2__["Leave"]('Sick leaves'),
            new _leave__WEBPACK_IMPORTED_MODULE_2__["Leave"]('Total leaves')
        ];
        this.uploadedFiles = [];
        console.log(this.arr[0].username);
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.username = this.arr[0].username;
        this.fullname = this.arr[0].fullname;
        this.email = this.arr[0].email;
        this.designation = this.arr[0].designation;
        this.phoneno = this.arr[0].phoneno;
        this.dateofbirth = this.arr[0].dateofbirth;
        this.gender = this.arr[0].gender;
        this.address = this.arr[0].address;
        this.updatedItem = 0;
    };
    ProfileComponent.prototype.onFormSubmit = function () {
        var data = this.updatedItem;
        for (var i = 0; i < this.arr.length; i++) {
            if (i === data) {
                this.arr[0].username = this.username;
                this.arr[0].fullname = this.fullname;
                this.arr[0].email = this.email;
                this.arr[0].designation = this.designation;
                this.arr[0].phoneno = this.phoneno;
                this.arr[0].dateofbirth = this.dateofbirth;
                this.arr[0].gender = this.gender;
                this.arr[0].address = this.address;
            }
        }
    };
    ProfileComponent.prototype.onUpload = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.uploadedFiles.push(file);
        }
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.ts":
/*!************************************!*\
  !*** ./src/app/profile/profile.ts ***!
  \************************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Profile = /** @class */ (function () {
    function Profile(username, fullname, email, designation, phoneno, dateofbirth, gender, address) {
        this.username = username;
        this.fullname = fullname;
        this.email = email;
        this.designation = designation;
        this.phoneno = phoneno;
        this.dateofbirth = dateofbirth;
        this.gender = gender;
        this.address = address;
    }
    return Profile;
}());



/***/ }),

/***/ "./src/app/search/search.component.scss":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_appservices_kbarticles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/appservices/kbarticles.service */ "./src/app/services/appservices/kbarticles.service.ts");






var SearchComponent = /** @class */ (function () {
    function SearchComponent(_data, actroute) {
        this._data = _data;
        this.actroute = actroute;
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.emit1 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.emit2 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.myarticleChecked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.myarticleUnchecked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.emit3 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedAnswer = [];
        this.showcheckbox = false;
        this.isFlag = false;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subscriptions.add(this._data.getCategory().subscribe(function (data) {
            lodash__WEBPACK_IMPORTED_MODULE_4__["forEach"](data, function (d) {
                d.isCheck = false;
            });
            _this.category_disp = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](data);
            console.log(_this.category_disp);
        }));
        this._subscriptions.add(this._data.userActivated.subscribe(function (id) {
            if (id === true) {
                _this.isFlag = true;
            }
            else {
                _this.isFlag = false;
            }
        }));
    };
    SearchComponent.prototype.showall = function () {
        lodash__WEBPACK_IMPORTED_MODULE_4__["forEach"](this.category_disp, function (a) {
            a.isCheck = false;
        });
        this.emit3.emit();
    };
    SearchComponent.prototype.updateCheckedOptions = function (category) {
        if (category.isCheck === false) {
            category.isCheck = true;
        }
        else {
            category.isCheck = false;
        }
        this.selectedAnswer.push(category);
        this.selectedAnswer = lodash__WEBPACK_IMPORTED_MODULE_4__["filter"](this.selectedAnswer, function (s) {
            return s.isCheck === true;
        });
        console.log(this.selectedAnswer);
        this.emit1.emit(this.selectedAnswer);
    };
    SearchComponent.prototype.onSearchClick = function (searchTerm) {
        this.emit2.emit(searchTerm);
        console.log(searchTerm);
    };
    SearchComponent.prototype.myArticleCheckedUnchecked = function (e) {
        if (e.target.checked) {
            this.myarticleChecked.emit(e);
        }
        else {
            this.myarticleUnchecked.emit();
        }
    };
    SearchComponent.ctorParameters = function () { return [
        { type: _services_appservices_kbarticles_service__WEBPACK_IMPORTED_MODULE_5__["KbarticlesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchComponent.prototype, "emit1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchComponent.prototype, "emit2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchComponent.prototype, "myarticleChecked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchComponent.prototype, "myarticleUnchecked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchComponent.prototype, "emit3", void 0);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_appservices_kbarticles_service__WEBPACK_IMPORTED_MODULE_5__["KbarticlesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/appservices/leavemanagement.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/appservices/leavemanagement.service.ts ***!
  \*****************************************************************/
/*! exports provided: LeavemanagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavemanagementService", function() { return LeavemanagementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_common_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/common-http.service */ "./src/app/shared/common-http.service.ts");






var LeavemanagementService = /** @class */ (function () {
    function LeavemanagementService(http, CommonHttpService) {
        this.http = http;
        this.CommonHttpService = CommonHttpService;
        this.url = "http://b4b4bfee.ngrok.io/api/MemberLeave/GetMemberLeaves?MemberId=2";
        this.url2 = "http://b4b4bfee.ngrok.io/api//MemberLeave/InsUpdateMemberLeaves";
        this.url3 = "http://b4b4bfee.ngrok.io/api/MemberLeave/DeleteMemberLeaves";
        this.urlleavestatus = "http://b4b4bfee.ngrok.io/api/MemberLeavesData/GetMemberLeaveData?MemberId=4";
        this.leavetypes = "http://b4b4bfee.ngrok.io/api/LeaveTypes/GetLeaveTypeNames";
        //api for leave applyd by
        this.urlleaveRequest = "https://b4b4bfee.ngrok.io/api/MemberLeave/GetMemberLeaveRequest?ApproverId=3";
        this.urlforapprovereject = "http://b4b4bfee.ngrok.io/api/MemberLeave/UpdateMemberLeaveRequest";
        this.leavetypesurl1 = 'http://b4b4bfee.ngrok.io/api/LeaveTypes/GetLeaveTypes';
        this.leavetypesurl2 = 'http://b4b4bfee.ngrok.io/api/LeaveTypes/InsUpdateLeaveTypes';
        this.leavetypesurl3 = 'http://b4b4bfee.ngrok.io/api/LeaveTypes/DeleteLeaveTypes';
        // multiselection
        this.depturl = 'https://b4b4bfee.ngrok.io/api/Settings/GetDepartment';
        this.rolesurl = 'https://b4b4bfee.ngrok.io/api/Settings/GetRoles';
        this.desigurl = 'https://b4b4bfee.ngrok.io/api/Settings/GetDesignations';
        this.locationurl = 'https://b4b4bfee.ngrok.io/api/Settings/Getlocations';
        this.insupdateName = ' http://d35fc1ff.ngrok.io/api/LeaveTypes/InsertUpdateLeaveTypeName';
        this.appendpoint = _app_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstant"].API_ENDPOINT;
        this.api_url_leave = this.appendpoint;
        this.SERVER_URL_GET_LEAVE = this.api_url_leave + _app_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstant"].API_CONFIG.API_URL.LEAVEMANAGEMENT.GETLEAVE;
        this.SERVER_URL_INSERT_UPDATE_LEAVES = this.api_url_leave + _app_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstant"].API_CONFIG.API_URL.LEAVEMANAGEMENT.INSERTUPDATELEAVE;
        this.SERVER_URL_DEL_LEAVE = this.api_url_leave + _app_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstant"].API_CONFIG.API_URL.LEAVEMANAGEMENT.DELETELEAVE;
        // api for leave types
        // this.SERVER_URL_GET_LEAVETYPES = this.api_url_leave + AppConstant.API_CONFIG.API_URL.LEAVETYPES.GETLEAVETYPES;
        // this.SERVER_URL_INSERT_UPDATE_LEAVETYPES = this.api_url_leave + AppConstant.API_CONFIG.API_URL.LEAVETYPES.INSERTUPDATELEAVETYPES;
        // this.SERVER_URL_DEL_LEAVETYPES = this.api_url_leave + AppConstant.API_CONFIG.API_URL.LEAVETYPES.DELETELEAVETYPES;
    }
    LeavemanagementService.prototype.getLeave = function () {
        return this.http.get(this.url);
    };
    LeavemanagementService.prototype.addEditLeaves = function (f) {
        console.log(f);
        // console.log(JSON.stringify(f));
        var body = JSON.stringify(f);
        var head = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json');
        // return this.CommonHttpService.globalPostService(this.url2,f);
        return this.http.post(this.url2, body, { headers: head });
    };
    LeavemanagementService.prototype.aprroveorreject = function (f) {
        console.log(f);
        var body = JSON.stringify(f);
        var head = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.http.post(this.urlforapprovereject, body, { headers: head });
    };
    LeavemanagementService.prototype.getdropdownleavetypes = function () {
        return this.http.get(this.leavetypes);
    };
    LeavemanagementService.prototype.deleteleave = function (LeaveId) {
        var body = JSON.stringify(LeaveId);
        var head = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json');
        console.log('getting ID?:' + LeaveId);
        return this.http.post(this.url3, body, { headers: head });
    };
    // below get is only for show the leave on balanca
    LeavemanagementService.prototype.getLeaveBalance = function () {
        return this.http.get(this.urlleavestatus);
    };
    // METHODS FOR LEAVETYPES
    LeavemanagementService.prototype.getLeaveTypes = function () {
        console.log(this.leavetypesurl1);
        return this.http.get(this.leavetypesurl1);
    };
    // getmethod leave request
    LeavemanagementService.prototype.getLeaveRequest = function () {
        return this.http.get(this.urlleaveRequest);
    };
    // method for leave types
    LeavemanagementService.prototype.addEditLeavesTypes = function (f) {
        console.log(f);
        console.log(JSON.stringify(f));
        var body = JSON.stringify(f);
        var head = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json');
        console.log(this.leavetypesurl2, body, {
            headers: head
        });
        return this.http.post(this.leavetypesurl2, body, {
            headers: head
        });
    };
    LeavemanagementService.prototype.deleteleavTypes = function (LeaveId) {
        var head = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json');
        console.log('getting ID?:' + LeaveId);
        return this.http.post(this.leavetypesurl3 + LeaveId, { headers: head });
    };
    LeavemanagementService.prototype.getdepartment = function () {
        return this.http.get(this.depturl);
    };
    LeavemanagementService.prototype.getroles = function () {
        return this.http.get(this.rolesurl);
    };
    LeavemanagementService.prototype.getdesig = function () {
        return this.http.get(this.desigurl);
    };
    LeavemanagementService.prototype.getlocations = function () {
        return this.http.get(this.locationurl);
    };
    LeavemanagementService.prototype.addEditLeaveName1 = function (f) {
        console.log(f);
        console.log(JSON.stringify(f));
        var body = JSON.stringify(f);
        var head = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json');
        console.log(this.insupdateName, body, {
            headers: head
        });
        return this.http.post(this.insupdateName, body, {
            headers: head
        });
    };
    LeavemanagementService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _shared_common_http_service__WEBPACK_IMPORTED_MODULE_4__["CommonHttpService"] }
    ]; };
    LeavemanagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _shared_common_http_service__WEBPACK_IMPORTED_MODULE_4__["CommonHttpService"]])
    ], LeavemanagementService);
    return LeavemanagementService;
}());



/***/ }),

/***/ "./src/app/shared/base64-encode-decode.ts":
/*!************************************************!*\
  !*** ./src/app/shared/base64-encode-decode.ts ***!
  \************************************************/
/*! exports provided: Base64EncodeDecode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base64EncodeDecode", function() { return Base64EncodeDecode; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Base64EncodeDecode = /** @class */ (function () {
    function Base64EncodeDecode() {
        this.PADCHAR = "=";
        this.ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    }
    Base64EncodeDecode.prototype.getByte = function (s, i) {
        var x = s.charCodeAt(i);
        return x;
    };
    Base64EncodeDecode.prototype.getByte64 = function (s, i) {
        var idx = this.ALPHA.indexOf(s.charAt(i));
        return idx;
    };
    Base64EncodeDecode.prototype.decode = function (s) {
        var pads = 0, i, b10, imax = s.length, x = [];
        s = String(s);
        if (imax === 0) {
            return s;
        }
        if (s.charAt(imax - 1) === this.PADCHAR) {
            pads = 1;
            if (s.charAt(imax - 2) === this.PADCHAR) {
                pads = 2;
            }
            imax -= 4;
        }
        for (i = 0; i < imax; i += 4) {
            b10 =
                (this.getByte64(s, i) << 18) |
                    (this.getByte64(s, i + 1) << 12) |
                    (this.getByte64(s, i + 2) << 6) |
                    this.getByte64(s, i + 3);
            x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 255, b10 & 255));
        }
        switch (pads) {
            case 1:
                b10 =
                    (this.getByte64(s, i) << 18) |
                        (this.getByte64(s, i + 1) << 12) |
                        (this.getByte64(s, i + 2) << 6);
                x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 255));
                break;
            case 2:
                b10 = (this.getByte64(s, i) << 18) | (this.getByte64(s, i + 1) << 12);
                x.push(String.fromCharCode(b10 >> 16));
                break;
        }
        return x.join("");
    };
    Base64EncodeDecode.prototype.encode = function (s) {
        s = String(s);
        var i, b10, x = [], imax = s.length - (s.length % 3);
        if (s.length === 0) {
            return s;
        }
        for (i = 0; i < imax; i += 3) {
            b10 =
                (this.getByte(s, i) << 16) |
                    (this.getByte(s, i + 1) << 8) |
                    this.getByte(s, i + 2);
            x.push(this.ALPHA.charAt(b10 >> 18));
            x.push(this.ALPHA.charAt((b10 >> 12) & 63));
            x.push(this.ALPHA.charAt((b10 >> 6) & 63));
            x.push(this.ALPHA.charAt(b10 & 63));
        }
        switch (s.length - imax) {
            case 1:
                b10 = this.getByte(s, i) << 16;
                x.push(this.ALPHA.charAt(b10 >> 18) +
                    this.ALPHA.charAt((b10 >> 12) & 63) +
                    this.PADCHAR +
                    this.PADCHAR);
                break;
            case 2:
                b10 = (this.getByte(s, i) << 16) | (this.getByte(s, i + 1) << 8);
                x.push(this.ALPHA.charAt(b10 >> 18) +
                    this.ALPHA.charAt((b10 >> 12) & 63) +
                    this.ALPHA.charAt((b10 >> 6) & 63) +
                    this.PADCHAR);
                break;
        }
        return x.join("");
    };
    Base64EncodeDecode.prototype.dataURLtoFile = function (dataurl, filename) {
        var arr = dataurl.split(","), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    };
    return Base64EncodeDecode;
}());



/***/ }),

/***/ "./src/app/table-list/table-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/table-list/table-list.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlLWxpc3QvdGFibGUtbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/table-list/table-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/table-list/table-list.component.ts ***!
  \****************************************************/
/*! exports provided: TableListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableListComponent", function() { return TableListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TableListComponent = /** @class */ (function () {
    function TableListComponent() {
    }
    TableListComponent.prototype.ngOnInit = function () {
    };
    TableListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/table-list/table-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table-list.component.css */ "./src/app/table-list/table-list.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TableListComponent);
    return TableListComponent;
}());



/***/ }),

/***/ "./src/app/upgrade/upgrade.component.scss":
/*!************************************************!*\
  !*** ./src/app/upgrade/upgrade.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZ3JhZGUvdXBncmFkZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/upgrade/upgrade.component.ts":
/*!**********************************************!*\
  !*** ./src/app/upgrade/upgrade.component.ts ***!
  \**********************************************/
/*! exports provided: UpgradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeComponent", function() { return UpgradeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UpgradeComponent = /** @class */ (function () {
    function UpgradeComponent() {
    }
    UpgradeComponent.prototype.ngOnInit = function () {
    };
    UpgradeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upgrade',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upgrade.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/upgrade/upgrade.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upgrade.component.scss */ "./src/app/upgrade/upgrade.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UpgradeComponent);
    return UpgradeComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/addarticle/addarticle.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/user-profile/addarticle/addarticle.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("b {\n  color: blue; }\n\n.main-container {\n  margin-top: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL2FkZGFydGljbGUvQzpcXFVzZXJzXFxhc3Vua29wcGFkXFxEZXNrdG9wXFxuZXd6b29tXFx6b29tdGVhbXMtd2ViLW5nL3NyY1xcYXBwXFx1c2VyLXByb2ZpbGVcXGFkZGFydGljbGVcXGFkZGFydGljbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS9hZGRhcnRpY2xlL2FkZGFydGljbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJiIHtcclxuICBjb2xvcjogYmx1ZTtcclxufVxyXG4ubWFpbi1jb250YWluZXJ7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/user-profile/addarticle/addarticle.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user-profile/addarticle/addarticle.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddarticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddarticleComponent", function() { return AddarticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_appservices_kbarticles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/appservices/kbarticles.service */ "./src/app/services/appservices/kbarticles.service.ts");
/* harmony import */ var _Models_kbarticles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Models/kbarticles */ "./src/app/Models/kbarticles.ts");








var AddarticleComponent = /** @class */ (function () {
    function AddarticleComponent(fb, data, route, messageService) {
        this.fb = fb;
        this.data = data;
        this.route = route;
        this.messageService = messageService;
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.category_disp = [];
    }
    AddarticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subscriptions.add(this.data.getCategory().subscribe(function (data) {
            _this.category_disp = data;
            console.log(_this.category_disp);
        }));
        this.addForm = this.fb.group({
            article_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    };
    AddarticleComponent.prototype.onAddArticle = function () {
        var _this = this;
        if (this.addForm.value.content === null) {
            var validationMessage = 'Editor is empty';
            this.messageService.add({
                severity: 'error',
                summary: 'Error Message',
                detail: validationMessage
            });
        }
        else {
            this.data.updateArticle(new _Models_kbarticles__WEBPACK_IMPORTED_MODULE_7__["KBArticles"](this.addForm.value.article_id, this.addForm.value.article_name, this.addForm.value.content, this.addForm.value.previewcontent, this.addForm.value.category_id, this.addForm.value.category_name, this.addForm.value.created_by, this.addForm.value.created_by_name, this.addForm.value.created_date, this.addForm.value.modified_by, this.addForm.value.modified_by_name, this.addForm.value.modified_date)).then(function (x) {
                var successMessage = 'Article Added Successfuly';
                _this.messageService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: successMessage
                });
                setTimeout(function () {
                    _this.route.navigate(['/user-profile']);
                }, 1000);
            }, function (error) {
                _this.messageService.add({ severity: 'error', detail: 'server not responding' });
            });
        }
    };
    AddarticleComponent.prototype.onClickClose = function () {
        this.messageService.add({
            severity: 'warning',
            detail: 'processing...'
        });
        this.route.navigate(['/user-profile']);
    };
    AddarticleComponent.prototype.ngOnDestroy = function () {
        this._subscriptions.unsubscribe();
    };
    AddarticleComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_appservices_kbarticles_service__WEBPACK_IMPORTED_MODULE_6__["KbarticlesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }
    ]; };
    AddarticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-addarticle',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addarticle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/addarticle/addarticle.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addarticle.component.scss */ "./src/app/user-profile/addarticle/addarticle.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_appservices_kbarticles_service__WEBPACK_IMPORTED_MODULE_6__["KbarticlesService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], AddarticleComponent);
    return AddarticleComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/editarticle/editarticle.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/user-profile/editarticle/editarticle.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("b {\n  color: blue; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL2VkaXRhcnRpY2xlL0M6XFxVc2Vyc1xcYXN1bmtvcHBhZFxcRGVza3RvcFxcbmV3em9vbVxcem9vbXRlYW1zLXdlYi1uZy9zcmNcXGFwcFxcdXNlci1wcm9maWxlXFxlZGl0YXJ0aWNsZVxcZWRpdGFydGljbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyLXByb2ZpbGUvZWRpdGFydGljbGUvZWRpdGFydGljbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJiIHtcclxuICBjb2xvcjogYmx1ZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/user-profile/editarticle/editarticle.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user-profile/editarticle/editarticle.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditarticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarticleComponent", function() { return EditarticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_appservices_kbarticles_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/appservices/kbarticles.service */ "./src/app/services/appservices/kbarticles.service.ts");
/* harmony import */ var _shared_base64_encode_decode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/base64-encode-decode */ "./src/app/shared/base64-encode-decode.ts");









var EditarticleComponent = /** @class */ (function () {
    function EditarticleComponent(base64EncodeDecode, messageService, _data, fb, _act, _router) {
        var _this = this;
        this.base64EncodeDecode = base64EncodeDecode;
        this.messageService = messageService;
        this._data = _data;
        this.fb = fb;
        this._act = _act;
        this._router = _router;
        this.arr = [];
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        this.maxUploadFileSize = 1000000;
        this.imagePath = '';
        this.imageHandler = function (image, callback) {
            var input = document.getElementById('fileInputField');
            document.getElementById('fileInputField').onchange = function () {
                var file;
                file = input.files[0];
                // file type is only image.
                if (/^image\//.test(file.type)) {
                    if (file.size > _this.maxUploadFileSize) {
                        // alert('Image needs to be less than 1MB');
                        _this.messageService.add({ severity: 'info', summary: 'info', detail: 'Image needs to be less than 1MB' });
                    }
                    else {
                        var reader_1 = new FileReader();
                        reader_1.onload = function () {
                            var range = _this.quillEditorRef.getSelection();
                            var img = '<img src="' + reader_1.result + '" />';
                            _this.quillEditorRef.clipboard.dangerouslyPasteHTML(range.index, img);
                        };
                        reader_1.readAsDataURL(file);
                        _this.basicUpload(file);
                    }
                }
                else {
                    _this.messageService.add({
                        severity: 'info',
                        summary: 'info',
                        detail: 'You could only upload images.'
                    });
                }
            };
            input.click();
        };
        this._subscriptions.add(this._router.routerState.root.queryParams.subscribe(function (params) {
            _this.queryparams = params['ArticleId'];
            _this.files = [];
            _this.imagePath = '';
        }));
    }
    EditarticleComponent.prototype.ngOnInit = function () {
        this.editForm = this.fb.group({
            ArticleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            CategoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            Content: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
        this.getArticleForEdit();
    };
    EditarticleComponent.prototype.getArticleForEdit = function () {
        var _this = this;
        this.messageService.add({
            severity: 'success',
            detail: 'Processing...'
        });
        this.id = this.queryparams;
        console.log(this.id);
        this._subscriptions.add(this._data.getKbArticleById(this.id).subscribe(function (x) {
            _this.displayArticle = x;
            _this.catid = _this.displayArticle.categoryId;
            console.log(_this.displayArticle);
            _this.editForm.patchValue({
                ArticleName: _this.displayArticle.articleName,
                ArticleId: _this.displayArticle.articleId,
                CategoryId: _this.displayArticle.categoryId,
                CategoryName: _this.displayArticle.categoryName,
                previewcontent: _this.displayArticle.previewContent,
                Content: _this.displayArticle.content
            });
        }, function (error) {
            _this.messageService.add({ severity: 'error', detail: 'server not responding' });
        }));
        this._subscriptions.add(this._data.getCategory().subscribe(function (data) {
            _this.arr = data;
        }));
        console.log(this.catid);
        // this.editForm = this.fb.group({
        //   ArticleName: new FormControl(null),
        //   ArticleId: new FormControl(null),
        //   CategoryName: new FormControl(null),
        //   CategoryId: new FormControl(this.catid),
        //   Content: new FormControl(null),
        //   previewcontent: new FormControl(null)
        // });
    };
    EditarticleComponent.prototype.onEditArticle = function () {
        var _this = this;
        if (this.editForm.value.Content === null) {
            var validationMessage = 'Editor is empty';
            this.messageService.add({
                severity: 'error',
                summary: 'Error Message',
                detail: validationMessage
            });
        }
        else {
            var req = {
                ArticleName: this.editForm.value.ArticleName,
                ArticleId: this.editForm.value.ArticleId,
                CategoryId: this.editForm.value.CategoryId,
                CategoryName: this.editForm.value.CategoryName,
                Content: this.editForm.value.Content,
                previewcontent: this.editForm.value.previewcontent,
                CreatedBy: this.editForm.value.CreatedBy,
                CreatedByName: this.editForm.value.CreatedByName,
                CreatedDate: this.editForm.value.CreatedDate,
                ModifiedBy: this.editForm.value.ModifiedBy,
                ModifiedByName: this.editForm.value.ModifiedByName,
                ModifiedDate: this.editForm.value.ModifiedDate
            };
            /// needed
            var firstimg = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this.editForm.value.Content).find('img:first').attr('src');
            console.log(firstimg);
            this._data.updateArticle(req).then(function (res) {
                if (res) {
                    var successMessage = 'Updated  Successfuly';
                    _this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: successMessage
                    });
                    setTimeout(function () {
                        _this._router.navigate(['/user-profile']);
                    }, 1000);
                }
            }, function (error) {
            });
        }
    };
    EditarticleComponent.prototype.onClickClose = function () {
        this.messageService.add({
            severity: 'error',
            detail: 'Prcossing'
        });
        this._router.navigate(['/user-profile']);
    };
    EditarticleComponent.prototype.getEditorInstance = function (editorInstance) {
        this.quillEditorRef = editorInstance;
        console.log(this.quillEditorRef);
        var toolbar = editorInstance.getModule('toolbar');
        toolbar.addHandler('image', this.imageHandler);
    };
    EditarticleComponent.prototype.basicUpload = function (file) {
        var _this = this;
        var formData = new FormData();
        formData.append('name', file, file.name);
        console.log('data', formData);
        this._subscriptions.add(this._data.getUploadImageName(formData).subscribe(function (res) {
            // let path = res;
        }, function (error) {
            _this.messageService.add({ severity: 'error', detail: 'server not responding' });
        }));
    };
    EditarticleComponent.prototype.ngOnDestroy = function () {
        this._subscriptions.unsubscribe();
    };
    EditarticleComponent.ctorParameters = function () { return [
        { type: _shared_base64_encode_decode__WEBPACK_IMPORTED_MODULE_8__["Base64EncodeDecode"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] },
        { type: _services_appservices_kbarticles_service__WEBPACK_IMPORTED_MODULE_7__["KbarticlesService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    EditarticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editarticle',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editarticle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/editarticle/editarticle.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editarticle.component.scss */ "./src/app/user-profile/editarticle/editarticle.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_base64_encode_decode__WEBPACK_IMPORTED_MODULE_8__["Base64EncodeDecode"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _services_appservices_kbarticles_service__WEBPACK_IMPORTED_MODULE_7__["KbarticlesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditarticleComponent);
    return EditarticleComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/readmore/readmore.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/user-profile/readmore/readmore.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS9yZWFkbW9yZS9yZWFkbW9yZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/user-profile/readmore/readmore.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user-profile/readmore/readmore.component.ts ***!
  \*************************************************************/
/*! exports provided: ReadmoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadmoreComponent", function() { return ReadmoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_appservices_kbarticles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/appservices/kbarticles.service */ "./src/app/services/appservices/kbarticles.service.ts");







var ReadmoreComponent = /** @class */ (function () {
    function ReadmoreComponent(router, _data, messageService, _router) {
        var _this = this;
        this.router = router;
        this._data = _data;
        this.messageService = messageService;
        this._router = _router;
        this.isAdmin = false;
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this._subscriptions.add(this.router.routerState.root.queryParams.subscribe(function (params) {
            _this.queryparams = params['ArticleId'];
        }));
    }
    ReadmoreComponent.prototype.ngOnInit = function () {
        this.getByArticleId();
    };
    ReadmoreComponent.prototype.getByArticleId = function () {
        var _this = this;
        var req = {
            ArticleId: this.queryparams
        };
        console.log(req);
        this._data.getArticleById(req).then(function (res) {
            if (res) {
                if (!lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isEmpty(res)) {
                    _this.read_more = res;
                    console.log(_this.read_more);
                }
                else {
                    _this.read_more;
                    console.log('failed');
                    return false;
                }
            }
        }, function (error) {
        });
    };
    ReadmoreComponent.prototype.onEditArticle = function (item) {
        this.router.navigate(['/edit'], { queryParams: { ArticleId: item.articleId } });
    };
    ReadmoreComponent.prototype.onClickClose = function () {
        this.messageService.add({
            severity: 'error',
            detail: 'Prcossing'
        });
        this._router.navigate(['/user-profile']);
    };
    ReadmoreComponent.prototype.ngOnDestroy = function () {
        this._subscriptions.unsubscribe();
    };
    ReadmoreComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_appservices_kbarticles_service__WEBPACK_IMPORTED_MODULE_6__["KbarticlesService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ReadmoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-readmore',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./readmore.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/readmore/readmore.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./readmore.component.scss */ "./src/app/user-profile/readmore/readmore.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_appservices_kbarticles_service__WEBPACK_IMPORTED_MODULE_6__["KbarticlesService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ReadmoreComponent);
    return ReadmoreComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nbody {\r\n\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  background-color:rgba(246, 242, 242, 0.863);\r\n}\r\n.header {\r\n  overflow: hidden;\r\n  background-color: #f1f1f1;\r\n\r\n}\r\n.navbar{\r\n  background-color: black;\r\n  margin-top: 2px;\r\n\r\n}\r\nmat-progress-spinner.mat-progress-spinner.mat-primary.mat-progress-spinner-indeterminate-animation {\r\n  margin-left: 420px;\r\n  margin-bottom: -52px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7RUFFRSx5Q0FBeUM7RUFDekMsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCOztBQUUzQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7O0FBRWpCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmJvZHkge1xyXG5cclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQ2LCAyNDIsIDI0MiwgMC44NjMpO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuXHJcbn1cclxuLm5hdmJhcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcblxyXG59XHJcblxyXG5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci5tYXQtcHJpbWFyeS5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci1pbmRldGVybWluYXRlLWFuaW1hdGlvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDQyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IC01MnB4O1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_appservices_kbarticles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/appservices/kbarticles.service */ "./src/app/services/appservices/kbarticles.service.ts");
/* harmony import */ var _shared_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/local-storage.service */ "./src/app/shared/local-storage.service.ts");








var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(router, act, _data, messageService, localStorage) {
        var _this = this;
        this.router = router;
        this.act = act;
        this._data = _data;
        this.messageService = messageService;
        this.localStorage = localStorage;
        this.checked = false;
        this.selectedAnswer = [];
        this.norecordfound = false;
        this.show = false;
        this.arr = [];
        this.show_add_article = false;
        this.Page = 1;
        this.Categoryid = 0;
        this.value = '';
        this.pageVariable = false;
        this.queryParamsObject = {};
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.isFlag = false;
        this.showcheckbox = false;
        this._subscriptions.add(this.router.routerState.root.queryParams.subscribe(function (params) {
            _this.queryParamsObject = params;
            _this.Page = _this.queryParamsObject.pagenumber;
            if (_this.Page === undefined) {
                _this.Page = 1;
            }
            // this.onLoad(this.Page);
        }));
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.value);
        this.getPageInfo();
        this._subscriptions.add(this._data.userActivated.subscribe(function (id) {
            if (id === true) {
                _this.isFlag = true;
                _this.getAdminArticles();
            }
            else {
                _this.isFlag = false;
                _this.getArticles();
            }
            // () => {
            _this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Server not responding'
            });
            // };
        }));
        this._subscriptions.add(this._data.getCategory().subscribe(function (data) {
            lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"](data, function (d) {
                d.isCheck = false;
            });
            _this.category_disp = lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](data);
            console.log(_this.category_disp);
        }));
        this._subscriptions.add(this._data.userActivated.subscribe(function (id) {
            if (id === true) {
                _this.isFlag = true;
            }
            else {
                _this.isFlag = false;
            }
        }));
    };
    UserProfileComponent.prototype.getPageInfo = function () {
        var _this = this;
        this._subscriptions.add(this._data.getAllKbArticle().subscribe(function (data) {
            _this.arr = data;
            // console.log(this.arr);
            // console.log(this.arr['ddlCatogoryNames']);
            _this.ddl_category_list = _this.arr['ddlCatogoryNames'];
            _this.pageVariable = true;
            _this.page = data['pagerInfo'];
            _this.firstvalue = 1;
            _this.secondvalue = 10;
            _this.totalItem = _this.page.totalItems;
            _this.totalPages = _this.page.totalPages;
            _this.totalItems = _this.page.itemsPerPage * _this.Page;
            _this.currentPage = _this.page.currentPage;
            _this.all_articles = _this.arr['kbArticles'];
            _this.article = _this.artcle;
        }, function (error) {
            _this.norecordfound = true;
        }, function () {
        }));
    };
    UserProfileComponent.prototype.getArticles = function () {
        var _this = this;
        this._subscriptions.add(this._data.getAllKbArticle().subscribe(function (data) {
            _this.arr = data;
            // console.log(this.arr);
            _this.page = data['pagerInfo'];
            _this.totalItem = _this.page.totalItems;
            _this.totalPages = _this.page.totalPages;
            _this.totalItems = _this.page.itemsPerPage;
            _this.all_articles = _this.arr['kbArticles'];
            console.log(_this.all_articles);
        }, function (error) {
            // console.log('error');
        }, function () {
        }));
        var req = {
            pagenumber: this.queryParamsObject.pagenumber
        };
        this.router.navigate(['/user-profile'], { queryParams: req });
    };
    UserProfileComponent.prototype.onReadMore = function (item) {
        this.messageService.add({
            severity: 'warn',
            summary: 'Warn Message',
            detail: 'There are unsaved changes'
        });
        this.router.navigate(['/readmore'], { queryParams: { ArticleId: item.articleId } });
    };
    UserProfileComponent.prototype.onEditArticle = function (item) {
        this.router.navigate(['/edit'], { queryParams: { ArticleId: item.articleId } });
    };
    // --------------------------- search --------------------------
    UserProfileComponent.prototype.onSearchClick = function (value) {
        var _this = this;
        this.value = value;
        if (value !== '') {
            this._subscriptions.add(this._data.getArticleBySearch(value).subscribe(function (data) {
                window.scroll(0, 0);
                _this.arr = data;
                _this.page = data['pagerInfo'];
                _this.totalItem = _this.page.totalItems;
                _this.totalPages = _this.page.totalPages;
                _this.totalItems = _this.page.itemsPerPage * _this.Page;
                _this.currentPage = _this.page.currentPage;
                if (_this.totalItem >= 10) {
                    _this.secondvalue = _this.totalItems;
                }
                else {
                    _this.secondvalue = _this.totalItem;
                }
                _this.all_articles = _this.arr['kbArticles'];
            }));
        }
        else {
            this._subscriptions.add(this._data.getAllKbArticle().subscribe(function (data) {
                _this.arr = data;
                window.scroll(0, 0);
                _this.all_articles = _this.arr['kbArticles'];
                _this.article = _this.artcle;
            }));
            this.secondvalue = this.totalItems;
            this.getArticles();
        }
    };
    UserProfileComponent.prototype.onFilterCheck = function (category) {
        var _this = this;
        // console.log(category);
        if (category.isCheck === false) {
            category.isCheck = true;
        }
        else {
            category.isCheck = false;
        }
        this.selectedAnswer.push(category);
        this.selectedAnswer = lodash__WEBPACK_IMPORTED_MODULE_5__["filter"](this.selectedAnswer, function (s) {
            return s.isCheck === true;
        });
        if (this.value !== '') {
            // console.log(this.value);
            this._subscriptions.add(this._data.getfiltersearch(category.categoryId, this.value).subscribe(function (data) {
                // this.arr = data;
                _this.all_articles = data['kbArticles'];
            }));
        }
        else {
            this.categoryList = this.selectedAnswer;
            this._subscriptions.add(this._data.getAllKbArticle().subscribe(function (data) {
                _this.arr = data;
                _this.all_articles = _this.arr['kbArticles'];
                if (_this.categoryList.length > 0) {
                    _this.all_articles = lodash__WEBPACK_IMPORTED_MODULE_5__["filter"](_this.all_articles, function (a) {
                        var test1 = lodash__WEBPACK_IMPORTED_MODULE_5__["find"](_this.categoryList, function (c) {
                            if (c.categoryId === a.categoryId) {
                                return a;
                            }
                        });
                        return test1;
                    });
                    _this.secondvalue = _this.all_articles.length;
                    _this.article = _this.all_articles;
                }
            }, function (error) {
                // alert(error);
            }, function () { }));
        }
    };
    UserProfileComponent.prototype.getAdminArticles = function () {
        var _this = this;
        this._subscriptions.add(this._data.getAdminArticles(this.Page).subscribe(function (data) {
            _this.arr = data;
            _this.page = data['pagerInfo'];
            _this.totalItem = _this.page.totalItems;
            _this.totalPages = _this.page.totalPages;
            _this.totalItems = _this.page.itemsPerPage * _this.Page;
            _this.currentPage = _this.page.currentPage;
            _this.all_articles = _this.arr['kbArticles'];
        }));
    };
    UserProfileComponent.prototype.loadPage = function (event) {
        var _this = this;
        this.number = event.page + 1;
        if (this.number !== 1 && this.number <= this.totalPages) {
            this.firstvalue = this.number * this.totalItems - 9;
            this.secondvalue = this.firstvalue + 9;
        }
        else {
            this.firstvalue = 1;
            this.secondvalue = 10;
        }
        if (this.number !== 0) {
            this._subscriptions.add(this._data.getPageByNumber(this.number, this.Categoryid, this.value).subscribe(function (data) {
                _this.arr = data;
                window.scroll(0, 0);
                _this.all_articles = _this.arr['kbArticles'];
                if (_this.categoryList !== undefined) {
                    if (_this.categoryList.length > 0) {
                        _this.all_articles = lodash__WEBPACK_IMPORTED_MODULE_5__["filter"](_this.all_articles, function (a) {
                            var test1 = lodash__WEBPACK_IMPORTED_MODULE_5__["find"](_this.categoryList, function (c) {
                                if (c.categoryId === a.categoryId) {
                                    return a;
                                }
                            });
                            return test1;
                        });
                        _this.article = _this.all_articles;
                    }
                }
            }));
            // var req = {
            //   pagenumber: number
            // };
            // this.router.navigate(['/user-profile'], { queryParams: req });
        }
    };
    UserProfileComponent.prototype.onLoad = function (number) {
        // console.log('pageLoad');
        var req = {
            pagenumber: number
        };
        this.router.navigate(['/user-profile'], { queryParams: req });
    };
    UserProfileComponent.prototype.onShowClick = function () {
        this.getArticles();
    };
    UserProfileComponent.prototype.myArticleCheckedUnchecked = function (e) {
        if (e.target.checked) {
            this.getAdminArticles();
        }
        else {
            this.getArticles();
        }
    };
    UserProfileComponent.prototype.ngOnDestroy = function () {
        this._subscriptions.unsubscribe();
    };
    UserProfileComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_appservices_kbarticles_service__WEBPACK_IMPORTED_MODULE_6__["KbarticlesService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
        { type: _shared_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] }
    ]; };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_appservices_kbarticles_service__WEBPACK_IMPORTED_MODULE_6__["KbarticlesService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _shared_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-admin-layout-admin-layout-module.js.map