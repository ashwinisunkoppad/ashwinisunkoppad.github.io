(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projectdashboard-layout-projectdashboard-layout-module"],{

/***/ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/drag-drop.es5.js ***!
  \*********************************************************/
/*! exports provided: DragDrop, DragRef, DropListRef, CdkDropList, CDK_DROP_LIST, CDK_DROP_LIST_CONTAINER, moveItemInArray, transferArrayItem, copyArrayItem, DragDropModule, DragDropRegistry, CdkDropListGroup, CDK_DRAG_CONFIG_FACTORY, CDK_DRAG_CONFIG, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDrop", function() { return DragDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragRef", function() { return DragRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropListRef", function() { return DropListRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropList", function() { return CdkDropList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST", function() { return CDK_DROP_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST_CONTAINER", function() { return CDK_DROP_LIST_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveItemInArray", function() { return moveItemInArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transferArrayItem", function() { return transferArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyArrayItem", function() { return copyArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropModule", function() { return DragDropModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropRegistry", function() { return DragDropRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropListGroup", function() { return CdkDropListGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG_FACTORY", function() { return CDK_DRAG_CONFIG_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG", function() { return CDK_DRAG_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDrag", function() { return CdkDrag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragHandle", function() { return CdkDragHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPreview", function() { return CdkDragPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPlaceholder", function() { return CdkDragPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CDK_DRAG_PARENT; });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Shallow-extends a stylesheet object with another stylesheet object.
 * \@docs-private
 * @param {?} dest
 * @param {?} source
 * @return {?}
 */
function extendStyles(dest, source) {
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            dest[key] = (/** @type {?} */ (source[key]));
        }
    }
    return dest;
}
/**
 * Toggles whether the native drag interactions should be enabled for an element.
 * \@docs-private
 * @param {?} element Element on which to toggle the drag interactions.
 * @param {?} enable Whether the drag interactions should be enabled.
 * @return {?}
 */
function toggleNativeDragInteractions(element, enable) {
    /** @type {?} */
    var userSelect = enable ? '' : 'none';
    extendStyles(element.style, {
        touchAction: enable ? '' : 'none',
        webkitUserDrag: enable ? '' : 'none',
        webkitTapHighlightColor: enable ? '' : 'transparent',
        userSelect: userSelect,
        msUserSelect: userSelect,
        webkitUserSelect: userSelect,
        MozUserSelect: userSelect
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Parses a CSS time value to milliseconds.
 * @param {?} value
 * @return {?}
 */
function parseCssTimeUnitsToMs(value) {
    // Some browsers will return it in seconds, whereas others will return milliseconds.
    /** @type {?} */
    var multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
    return parseFloat(value) * multiplier;
}
/**
 * Gets the transform transition duration, including the delay, of an element in milliseconds.
 * @param {?} element
 * @return {?}
 */
function getTransformTransitionDurationInMs(element) {
    /** @type {?} */
    var computedStyle = getComputedStyle(element);
    /** @type {?} */
    var transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
    /** @type {?} */
    var property = transitionedProperties.find((/**
     * @param {?} prop
     * @return {?}
     */
    function (prop) { return prop === 'transform' || prop === 'all'; }));
    // If there's no transition for `all` or `transform`, we shouldn't do anything.
    if (!property) {
        return 0;
    }
    // Get the index of the property that we're interested in and match
    // it up to the same index in `transition-delay` and `transition-duration`.
    /** @type {?} */
    var propertyIndex = transitionedProperties.indexOf(property);
    /** @type {?} */
    var rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
    /** @type {?} */
    var rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
    return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) +
        parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
/**
 * Parses out multiple values from a computed style into an array.
 * @param {?} computedStyle
 * @param {?} name
 * @return {?}
 */
function parseCssPropertyValue(computedStyle, name) {
    /** @type {?} */
    var value = computedStyle.getPropertyValue(name);
    return value.split(',').map((/**
     * @param {?} part
     * @return {?}
     */
    function (part) { return part.trim(); }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Options that can be used to bind a passive event listener.
 * @type {?}
 */
var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({ passive: true });
/**
 * Options that can be used to bind an active event listener.
 * @type {?}
 */
var activeEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({ passive: false });
/**
 * Time in milliseconds for which to ignore mouse events, after
 * receiving a touch event. Used to avoid doing double work for
 * touch devices where the browser fires fake mouse events, in
 * addition to touch events.
 * @type {?}
 */
var MOUSE_EVENT_IGNORE_TIME = 800;
/**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 * \@docs-private
 * @template T
 */
var  /**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 * \@docs-private
 * @template T
 */
DragRef = /** @class */ (function () {
    function DragRef(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
        var _this = this;
        this._config = _config;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
        /**
         * CSS `transform` applied to the element when it isn't being dragged. We need a
         * passive transform in order for the dragged element to retain its new position
         * after the user has stopped dragging and because we need to know the relative
         * position in case they start dragging again. This corresponds to `element.style.transform`.
         */
        this._passiveTransform = { x: 0, y: 0 };
        /**
         * CSS `transform` that is applied to the element while it's being dragged.
         */
        this._activeTransform = { x: 0, y: 0 };
        /**
         * Emits when the item is being moved.
         */
        this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subscription to pointer movement events.
         */
        this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Subscription to the event that is dispatched when the user lifts their pointer.
         */
        this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Subscription to the viewport being scrolled.
         */
        this._scrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Subscription to the viewport being resized.
         */
        this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Cached reference to the boundary element.
         */
        this._boundaryElement = null;
        /**
         * Whether the native dragging interactions have been enabled on the root element.
         */
        this._nativeInteractionsEnabled = true;
        /**
         * Elements that can be used to drag the draggable item.
         */
        this._handles = [];
        /**
         * Registered handles that are currently disabled.
         */
        this._disabledHandles = new Set();
        /**
         * Layout direction of the item.
         */
        this._direction = 'ltr';
        /**
         * Amount of milliseconds to wait after the user has put their
         * pointer down before starting to drag the element.
         */
        this.dragStartDelay = 0;
        this._disabled = false;
        /**
         * Emits as the drag sequence is being prepared.
         */
        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user starts dragging the item.
         */
        this.started = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */
        this.released = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */
        this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has moved the item into a new container.
         */
        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */
        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user drops the item inside a container.
         */
        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = this._moveEvents.asObservable();
        /**
         * Handler for the `mousedown`/`touchstart` events.
         */
        this._pointerDown = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.beforeStarted.next();
            // Delegate the event based on whether it started from a handle or the element itself.
            if (_this._handles.length) {
                /** @type {?} */
                var targetHandle = _this._handles.find((/**
                 * @param {?} handle
                 * @return {?}
                 */
                function (handle) {
                    /** @type {?} */
                    var target = event.target;
                    return !!target && (target === handle || handle.contains((/** @type {?} */ (target))));
                }));
                if (targetHandle && !_this._disabledHandles.has(targetHandle) && !_this.disabled) {
                    _this._initializeDragSequence(targetHandle, event);
                }
            }
            else if (!_this.disabled) {
                _this._initializeDragSequence(_this._rootElement, event);
            }
        });
        /**
         * Handler that is invoked when the user moves their pointer after they've initiated a drag.
         */
        this._pointerMove = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (!_this._hasStartedDragging) {
                /** @type {?} */
                var pointerPosition = _this._getPointerPositionOnPage(event);
                /** @type {?} */
                var distanceX = Math.abs(pointerPosition.x - _this._pickupPositionOnPage.x);
                /** @type {?} */
                var distanceY = Math.abs(pointerPosition.y - _this._pickupPositionOnPage.y);
                /** @type {?} */
                var isOverThreshold = distanceX + distanceY >= _this._config.dragStartThreshold;
                // Only start dragging after the user has moved more than the minimum distance in either
                // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
                // in the `pointerMove` subscription, because we're not guaranteed to have one move event
                // per pixel of movement (e.g. if the user moves their pointer quickly).
                if (isOverThreshold) {
                    /** @type {?} */
                    var isDelayElapsed = Date.now() >= _this._dragStartTime + (_this.dragStartDelay || 0);
                    if (!isDelayElapsed) {
                        _this._endDragSequence(event);
                        return;
                    }
                    // Prevent other drag sequences from starting while something in the container is still
                    // being dragged. This can happen while we're waiting for the drop animation to finish
                    // and can cause errors, because some elements might still be moving around.
                    if (!_this._dropContainer || !_this._dropContainer.isDragging()) {
                        _this._hasStartedDragging = true;
                        _this._ngZone.run((/**
                         * @return {?}
                         */
                        function () { return _this._startDragSequence(event); }));
                    }
                }
                return;
            }
            // We only need the preview dimensions if we have a boundary element.
            if (_this._boundaryElement) {
                // Cache the preview element rect if we haven't cached it already or if
                // we cached it too early before the element dimensions were computed.
                if (!_this._previewRect || (!_this._previewRect.width && !_this._previewRect.height)) {
                    _this._previewRect = (_this._preview || _this._rootElement).getBoundingClientRect();
                }
            }
            /** @type {?} */
            var constrainedPointerPosition = _this._getConstrainedPointerPosition(event);
            _this._hasMoved = true;
            event.preventDefault();
            _this._updatePointerDirectionDelta(constrainedPointerPosition);
            if (_this._dropContainer) {
                _this._updateActiveDropContainer(constrainedPointerPosition);
            }
            else {
                /** @type {?} */
                var activeTransform = _this._activeTransform;
                activeTransform.x =
                    constrainedPointerPosition.x - _this._pickupPositionOnPage.x + _this._passiveTransform.x;
                activeTransform.y =
                    constrainedPointerPosition.y - _this._pickupPositionOnPage.y + _this._passiveTransform.y;
                _this._applyRootElementTransform(activeTransform.x, activeTransform.y);
                // Apply transform as attribute if dragging and svg element to work for IE
                if (typeof SVGElement !== 'undefined' && _this._rootElement instanceof SVGElement) {
                    /** @type {?} */
                    var appliedTransform = "translate(" + activeTransform.x + " " + activeTransform.y + ")";
                    _this._rootElement.setAttribute('transform', appliedTransform);
                }
            }
            // Since this event gets fired for every pixel while dragging, we only
            // want to fire it if the consumer opted into it. Also we have to
            // re-enter the zone because we run all of the events on the outside.
            if (_this._moveEvents.observers.length) {
                _this._ngZone.run((/**
                 * @return {?}
                 */
                function () {
                    _this._moveEvents.next({
                        source: _this,
                        pointerPosition: constrainedPointerPosition,
                        event: event,
                        distance: _this._getDragDistance(constrainedPointerPosition),
                        delta: _this._pointerDirectionDelta
                    });
                }));
            }
        });
        /**
         * Handler that is invoked when the user lifts their pointer up, after initiating a drag.
         */
        this._pointerUp = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this._endDragSequence(event);
        });
        this.withRootElement(element);
        _dragDropRegistry.registerDragItem(this);
    }
    Object.defineProperty(DragRef.prototype, "disabled", {
        /** Whether starting to drag this element is disabled. */
        get: /**
         * Whether starting to drag this element is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            if (newValue !== this._disabled) {
                this._disabled = newValue;
                this._toggleNativeDragInteractions();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    DragRef.prototype.getPlaceholderElement = /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    function () {
        return this._placeholder;
    };
    /** Returns the root draggable element. */
    /**
     * Returns the root draggable element.
     * @return {?}
     */
    DragRef.prototype.getRootElement = /**
     * Returns the root draggable element.
     * @return {?}
     */
    function () {
        return this._rootElement;
    };
    /** Registers the handles that can be used to drag the element. */
    /**
     * Registers the handles that can be used to drag the element.
     * @template THIS
     * @this {THIS}
     * @param {?} handles
     * @return {THIS}
     */
    DragRef.prototype.withHandles = /**
     * Registers the handles that can be used to drag the element.
     * @template THIS
     * @this {THIS}
     * @param {?} handles
     * @return {THIS}
     */
    function (handles) {
        (/** @type {?} */ (this))._handles = handles.map((/**
         * @param {?} handle
         * @return {?}
         */
        function (handle) { return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(handle); }));
        (/** @type {?} */ (this))._handles.forEach((/**
         * @param {?} handle
         * @return {?}
         */
        function (handle) { return toggleNativeDragInteractions(handle, false); }));
        (/** @type {?} */ (this))._toggleNativeDragInteractions();
        return (/** @type {?} */ (this));
    };
    /**
     * Registers the template that should be used for the drag preview.
     * @param template Template that from which to stamp out the preview.
     */
    /**
     * Registers the template that should be used for the drag preview.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the preview.
     * @return {THIS}
     */
    DragRef.prototype.withPreviewTemplate = /**
     * Registers the template that should be used for the drag preview.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the preview.
     * @return {THIS}
     */
    function (template) {
        (/** @type {?} */ (this))._previewTemplate = template;
        return (/** @type {?} */ (this));
    };
    /**
     * Registers the template that should be used for the drag placeholder.
     * @param template Template that from which to stamp out the placeholder.
     */
    /**
     * Registers the template that should be used for the drag placeholder.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the placeholder.
     * @return {THIS}
     */
    DragRef.prototype.withPlaceholderTemplate = /**
     * Registers the template that should be used for the drag placeholder.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the placeholder.
     * @return {THIS}
     */
    function (template) {
        (/** @type {?} */ (this))._placeholderTemplate = template;
        return (/** @type {?} */ (this));
    };
    /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     */
    /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     * @template THIS
     * @this {THIS}
     * @param {?} rootElement
     * @return {THIS}
     */
    DragRef.prototype.withRootElement = /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     * @template THIS
     * @this {THIS}
     * @param {?} rootElement
     * @return {THIS}
     */
    function (rootElement) {
        /** @type {?} */
        var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(rootElement);
        if (element !== (/** @type {?} */ (this))._rootElement) {
            if ((/** @type {?} */ (this))._rootElement) {
                (/** @type {?} */ (this))._removeRootElementListeners((/** @type {?} */ (this))._rootElement);
            }
            element.addEventListener('mousedown', (/** @type {?} */ (this))._pointerDown, activeEventListenerOptions);
            element.addEventListener('touchstart', (/** @type {?} */ (this))._pointerDown, passiveEventListenerOptions);
            (/** @type {?} */ (this))._initialTransform = undefined;
            (/** @type {?} */ (this))._rootElement = element;
        }
        return (/** @type {?} */ (this));
    };
    /**
     * Element to which the draggable's position will be constrained.
     */
    /**
     * Element to which the draggable's position will be constrained.
     * @template THIS
     * @this {THIS}
     * @param {?} boundaryElement
     * @return {THIS}
     */
    DragRef.prototype.withBoundaryElement = /**
     * Element to which the draggable's position will be constrained.
     * @template THIS
     * @this {THIS}
     * @param {?} boundaryElement
     * @return {THIS}
     */
    function (boundaryElement) {
        var _this = this;
        (/** @type {?} */ (this))._boundaryElement = boundaryElement ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(boundaryElement) : null;
        (/** @type {?} */ (this))._resizeSubscription.unsubscribe();
        if (boundaryElement) {
            (/** @type {?} */ (this))._resizeSubscription = (/** @type {?} */ (this))._viewportRuler
                .change(10)
                .subscribe((/**
             * @return {?}
             */
            function () { return (/** @type {?} */ (_this))._containInsideBoundaryOnResize(); }));
        }
        return (/** @type {?} */ (this));
    };
    /** Removes the dragging functionality from the DOM element. */
    /**
     * Removes the dragging functionality from the DOM element.
     * @return {?}
     */
    DragRef.prototype.dispose = /**
     * Removes the dragging functionality from the DOM element.
     * @return {?}
     */
    function () {
        this._removeRootElementListeners(this._rootElement);
        // Do this check before removing from the registry since it'll
        // stop being considered as dragged once it is removed.
        if (this.isDragging()) {
            // Since we move out the element to the end of the body while it's being
            // dragged, we have to make sure that it's removed if it gets destroyed.
            removeElement(this._rootElement);
        }
        this._destroyPreview();
        this._destroyPlaceholder();
        this._dragDropRegistry.removeDragItem(this);
        this._removeSubscriptions();
        this.beforeStarted.complete();
        this.started.complete();
        this.released.complete();
        this.ended.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this._moveEvents.complete();
        this._handles = [];
        this._disabledHandles.clear();
        this._dropContainer = undefined;
        this._boundaryElement = this._rootElement = this._placeholderTemplate =
            this._previewTemplate = this._nextSibling = (/** @type {?} */ (null));
    };
    /** Checks whether the element is currently being dragged. */
    /**
     * Checks whether the element is currently being dragged.
     * @return {?}
     */
    DragRef.prototype.isDragging = /**
     * Checks whether the element is currently being dragged.
     * @return {?}
     */
    function () {
        return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
    };
    /** Resets a standalone drag item to its initial position. */
    /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    DragRef.prototype.reset = /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    function () {
        this._rootElement.style.transform = this._initialTransform || '';
        this._activeTransform = { x: 0, y: 0 };
        this._passiveTransform = { x: 0, y: 0 };
    };
    /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param handle Handle element that should be disabled.
     */
    /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param {?} handle Handle element that should be disabled.
     * @return {?}
     */
    DragRef.prototype.disableHandle = /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param {?} handle Handle element that should be disabled.
     * @return {?}
     */
    function (handle) {
        if (this._handles.indexOf(handle) > -1) {
            this._disabledHandles.add(handle);
        }
    };
    /**
     * Enables a handle, if it has been disabled.
     * @param handle Handle element to be enabled.
     */
    /**
     * Enables a handle, if it has been disabled.
     * @param {?} handle Handle element to be enabled.
     * @return {?}
     */
    DragRef.prototype.enableHandle = /**
     * Enables a handle, if it has been disabled.
     * @param {?} handle Handle element to be enabled.
     * @return {?}
     */
    function (handle) {
        this._disabledHandles.delete(handle);
    };
    /** Sets the layout direction of the draggable item. */
    /**
     * Sets the layout direction of the draggable item.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    DragRef.prototype.withDirection = /**
     * Sets the layout direction of the draggable item.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    function (direction) {
        (/** @type {?} */ (this))._direction = direction;
        return (/** @type {?} */ (this));
    };
    /** Sets the container that the item is part of. */
    /**
     * Sets the container that the item is part of.
     * @param {?} container
     * @return {?}
     */
    DragRef.prototype._withDropContainer = /**
     * Sets the container that the item is part of.
     * @param {?} container
     * @return {?}
     */
    function (container) {
        this._dropContainer = container;
    };
    /**
     * Gets the current position in pixels the draggable outside of a drop container.
     */
    /**
     * Gets the current position in pixels the draggable outside of a drop container.
     * @return {?}
     */
    DragRef.prototype.getFreeDragPosition = /**
     * Gets the current position in pixels the draggable outside of a drop container.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var position = this.isDragging() ? this._activeTransform : this._passiveTransform;
        return { x: position.x, y: position.y };
    };
    /**
     * Sets the current position in pixels the draggable outside of a drop container.
     * @param value New position to be set.
     */
    /**
     * Sets the current position in pixels the draggable outside of a drop container.
     * @template THIS
     * @this {THIS}
     * @param {?} value New position to be set.
     * @return {THIS}
     */
    DragRef.prototype.setFreeDragPosition = /**
     * Sets the current position in pixels the draggable outside of a drop container.
     * @template THIS
     * @this {THIS}
     * @param {?} value New position to be set.
     * @return {THIS}
     */
    function (value) {
        (/** @type {?} */ (this))._activeTransform = { x: 0, y: 0 };
        (/** @type {?} */ (this))._passiveTransform.x = value.x;
        (/** @type {?} */ (this))._passiveTransform.y = value.y;
        if (!(/** @type {?} */ (this))._dropContainer) {
            (/** @type {?} */ (this))._applyRootElementTransform(value.x, value.y);
        }
        return (/** @type {?} */ (this));
    };
    /** Updates the item's sort order based on the last-known pointer position. */
    /**
     * Updates the item's sort order based on the last-known pointer position.
     * @return {?}
     */
    DragRef.prototype._sortFromLastPointerPosition = /**
     * Updates the item's sort order based on the last-known pointer position.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var position = this._pointerPositionAtLastDirectionChange;
        if (position && this._dropContainer) {
            this._updateActiveDropContainer(position);
        }
    };
    /** Unsubscribes from the global subscriptions. */
    /**
     * Unsubscribes from the global subscriptions.
     * @private
     * @return {?}
     */
    DragRef.prototype._removeSubscriptions = /**
     * Unsubscribes from the global subscriptions.
     * @private
     * @return {?}
     */
    function () {
        this._pointerMoveSubscription.unsubscribe();
        this._pointerUpSubscription.unsubscribe();
        this._scrollSubscription.unsubscribe();
    };
    /** Destroys the preview element and its ViewRef. */
    /**
     * Destroys the preview element and its ViewRef.
     * @private
     * @return {?}
     */
    DragRef.prototype._destroyPreview = /**
     * Destroys the preview element and its ViewRef.
     * @private
     * @return {?}
     */
    function () {
        if (this._preview) {
            removeElement(this._preview);
        }
        if (this._previewRef) {
            this._previewRef.destroy();
        }
        this._preview = this._previewRef = (/** @type {?} */ (null));
    };
    /** Destroys the placeholder element and its ViewRef. */
    /**
     * Destroys the placeholder element and its ViewRef.
     * @private
     * @return {?}
     */
    DragRef.prototype._destroyPlaceholder = /**
     * Destroys the placeholder element and its ViewRef.
     * @private
     * @return {?}
     */
    function () {
        if (this._placeholder) {
            removeElement(this._placeholder);
        }
        if (this._placeholderRef) {
            this._placeholderRef.destroy();
        }
        this._placeholder = this._placeholderRef = (/** @type {?} */ (null));
    };
    /**
     * Clears subscriptions and stops the dragging sequence.
     * @param event Browser event object that ended the sequence.
     */
    /**
     * Clears subscriptions and stops the dragging sequence.
     * @private
     * @param {?} event Browser event object that ended the sequence.
     * @return {?}
     */
    DragRef.prototype._endDragSequence = /**
     * Clears subscriptions and stops the dragging sequence.
     * @private
     * @param {?} event Browser event object that ended the sequence.
     * @return {?}
     */
    function (event) {
        var _this = this;
        // Note that here we use `isDragging` from the service, rather than from `this`.
        // The difference is that the one from the service reflects whether a dragging sequence
        // has been initiated, whereas the one on `this` includes whether the user has passed
        // the minimum dragging threshold.
        if (!this._dragDropRegistry.isDragging(this)) {
            return;
        }
        this._removeSubscriptions();
        this._dragDropRegistry.stopDragging(this);
        this._toggleNativeDragInteractions();
        if (this._handles) {
            this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
        }
        if (!this._hasStartedDragging) {
            return;
        }
        this.released.next({ source: this });
        if (this._dropContainer) {
            // Stop scrolling immediately, instead of waiting for the animation to finish.
            this._dropContainer._stopScrolling();
            this._animatePreviewToPlaceholder().then((/**
             * @return {?}
             */
            function () {
                _this._cleanupDragArtifacts(event);
                _this._cleanupCachedDimensions();
                _this._dragDropRegistry.stopDragging(_this);
            }));
        }
        else {
            // Convert the active transform into a passive one. This means that next time
            // the user starts dragging the item, its position will be calculated relatively
            // to the new passive transform.
            this._passiveTransform.x = this._activeTransform.x;
            this._passiveTransform.y = this._activeTransform.y;
            this._ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.ended.next({
                    source: _this,
                    distance: _this._getDragDistance(_this._getPointerPositionOnPage(event))
                });
            }));
            this._cleanupCachedDimensions();
            this._dragDropRegistry.stopDragging(this);
        }
    };
    /** Starts the dragging sequence. */
    /**
     * Starts the dragging sequence.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._startDragSequence = /**
     * Starts the dragging sequence.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Emit the event on the item before the one on the container.
        this.started.next({ source: this });
        if (isTouchEvent(event)) {
            this._lastTouchEventTime = Date.now();
        }
        this._toggleNativeDragInteractions();
        if (this._dropContainer) {
            /** @type {?} */
            var element = this._rootElement;
            // Grab the `nextSibling` before the preview and placeholder
            // have been created so we don't get the preview by accident.
            this._nextSibling = element.nextSibling;
            /** @type {?} */
            var preview = this._preview = this._createPreviewElement();
            /** @type {?} */
            var placeholder = this._placeholder = this._createPlaceholderElement();
            // We move the element out at the end of the body and we make it hidden, because keeping it in
            // place will throw off the consumer's `:last-child` selectors. We can't remove the element
            // from the DOM completely, because iOS will stop firing all subsequent events in the chain.
            element.style.display = 'none';
            this._document.body.appendChild((/** @type {?} */ (element.parentNode)).replaceChild(placeholder, element));
            getPreviewInsertionPoint(this._document).appendChild(preview);
            this._dropContainer.start();
        }
    };
    /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @param referenceElement Element that started the drag sequence.
     * @param event Browser event object that started the sequence.
     */
    /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @private
     * @param {?} referenceElement Element that started the drag sequence.
     * @param {?} event Browser event object that started the sequence.
     * @return {?}
     */
    DragRef.prototype._initializeDragSequence = /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @private
     * @param {?} referenceElement Element that started the drag sequence.
     * @param {?} event Browser event object that started the sequence.
     * @return {?}
     */
    function (referenceElement, event) {
        var _this = this;
        // Always stop propagation for the event that initializes
        // the dragging sequence, in order to prevent it from potentially
        // starting another sequence for a draggable parent somewhere up the DOM tree.
        event.stopPropagation();
        /** @type {?} */
        var isDragging = this.isDragging();
        /** @type {?} */
        var isTouchSequence = isTouchEvent(event);
        /** @type {?} */
        var isAuxiliaryMouseButton = !isTouchSequence && ((/** @type {?} */ (event))).button !== 0;
        /** @type {?} */
        var rootElement = this._rootElement;
        /** @type {?} */
        var isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime &&
            this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
        // If the event started from an element with the native HTML drag&drop, it'll interfere
        // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
        // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
        // it's flaky and it fails if the user drags it away quickly. Also note that we only want
        // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
        // events from firing on touch devices.
        if (event.target && ((/** @type {?} */ (event.target))).draggable && event.type === 'mousedown') {
            event.preventDefault();
        }
        // Abort if the user is already dragging or is using a mouse button other than the primary one.
        if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent) {
            return;
        }
        // If we've got handles, we need to disable the tap highlight on the entire root element,
        // otherwise iOS will still add it, even though all the drag interactions on the handle
        // are disabled.
        if (this._handles.length) {
            this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor;
            rootElement.style.webkitTapHighlightColor = 'transparent';
        }
        this._hasStartedDragging = this._hasMoved = false;
        this._initialContainer = (/** @type {?} */ (this._dropContainer));
        // Avoid multiple subscriptions and memory leaks when multi touch
        // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)
        this._removeSubscriptions();
        this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
        this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
        this._scrollSubscription = this._dragDropRegistry.scroll.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null)).subscribe((/**
         * @return {?}
         */
        function () {
            _this._scrollPosition = _this._viewportRuler.getViewportScrollPosition();
        }));
        if (this._boundaryElement) {
            this._boundaryRect = this._boundaryElement.getBoundingClientRect();
        }
        // If we have a custom preview template, the element won't be visible anyway so we avoid the
        // extra `getBoundingClientRect` calls and just move the preview next to the cursor.
        this._pickupPositionInElement = this._previewTemplate && this._previewTemplate.template ?
            { x: 0, y: 0 } :
            this._getPointerPositionInElement(referenceElement, event);
        /** @type {?} */
        var pointerPosition = this._pickupPositionOnPage = this._getPointerPositionOnPage(event);
        this._pointerDirectionDelta = { x: 0, y: 0 };
        this._pointerPositionAtLastDirectionChange = { x: pointerPosition.x, y: pointerPosition.y };
        this._dragStartTime = Date.now();
        this._dragDropRegistry.startDragging(this, event);
    };
    /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */
    /**
     * Cleans up the DOM artifacts that were added to facilitate the element being dragged.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._cleanupDragArtifacts = /**
     * Cleans up the DOM artifacts that were added to facilitate the element being dragged.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        // Restore the element's visibility and insert it at its old position in the DOM.
        // It's important that we maintain the position, because moving the element around in the DOM
        // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
        // while moving the existing elements in all other cases.
        this._rootElement.style.display = '';
        if (this._nextSibling) {
            (/** @type {?} */ (this._nextSibling.parentNode)).insertBefore(this._rootElement, this._nextSibling);
        }
        else {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this._initialContainer.element).appendChild(this._rootElement);
        }
        this._destroyPreview();
        this._destroyPlaceholder();
        this._boundaryRect = this._previewRect = undefined;
        // Re-enter the NgZone since we bound `document` events on the outside.
        this._ngZone.run((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var container = (/** @type {?} */ (_this._dropContainer));
            /** @type {?} */
            var currentIndex = container.getItemIndex(_this);
            /** @type {?} */
            var pointerPosition = _this._getPointerPositionOnPage(event);
            /** @type {?} */
            var distance = _this._getDragDistance(_this._getPointerPositionOnPage(event));
            /** @type {?} */
            var isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
            _this.ended.next({ source: _this, distance: distance });
            _this.dropped.next({
                item: _this,
                currentIndex: currentIndex,
                previousIndex: _this._initialContainer.getItemIndex(_this),
                container: container,
                previousContainer: _this._initialContainer,
                isPointerOverContainer: isPointerOverContainer,
                distance: distance
            });
            container.drop(_this, currentIndex, _this._initialContainer, isPointerOverContainer, distance);
            _this._dropContainer = _this._initialContainer;
        }));
    };
    /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     */
    /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     * @private
     * @param {?} __0
     * @return {?}
     */
    DragRef.prototype._updateActiveDropContainer = /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     * @private
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var x = _a.x, y = _a.y;
        // Drop container that draggable has been moved into.
        /** @type {?} */
        var newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
        // If we couldn't find a new container to move the item into, and the item has left its
        // initial container, check whether the it's over the initial container. This handles the
        // case where two containers are connected one way and the user tries to undo dragging an
        // item into a new container.
        if (!newContainer && this._dropContainer !== this._initialContainer &&
            this._initialContainer._isOverContainer(x, y)) {
            newContainer = this._initialContainer;
        }
        if (newContainer && newContainer !== this._dropContainer) {
            this._ngZone.run((/**
             * @return {?}
             */
            function () {
                // Notify the old container that the item has left.
                _this.exited.next({ item: _this, container: (/** @type {?} */ (_this._dropContainer)) });
                (/** @type {?} */ (_this._dropContainer)).exit(_this);
                // Notify the new container that the item has entered.
                _this._dropContainer = (/** @type {?} */ (newContainer));
                _this._dropContainer.enter(_this, x, y);
                _this.entered.next({
                    item: _this,
                    container: (/** @type {?} */ (newContainer)),
                    currentIndex: (/** @type {?} */ (newContainer)).getItemIndex(_this)
                });
            }));
        }
        (/** @type {?} */ (this._dropContainer))._startScrollingIfNecessary(x, y);
        (/** @type {?} */ (this._dropContainer))._sortItem(this, x, y, this._pointerDirectionDelta);
        this._preview.style.transform =
            getTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
    };
    /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     */
    /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     * @private
     * @return {?}
     */
    DragRef.prototype._createPreviewElement = /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var previewConfig = this._previewTemplate;
        /** @type {?} */
        var previewTemplate = previewConfig ? previewConfig.template : null;
        /** @type {?} */
        var preview;
        if (previewTemplate) {
            /** @type {?} */
            var viewRef = (/** @type {?} */ (previewConfig)).viewContainer.createEmbeddedView(previewTemplate, (/** @type {?} */ (previewConfig)).context);
            preview = getRootNode(viewRef, this._document);
            this._previewRef = viewRef;
            preview.style.transform =
                getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
        }
        else {
            /** @type {?} */
            var element = this._rootElement;
            /** @type {?} */
            var elementRect = element.getBoundingClientRect();
            preview = deepCloneNode(element);
            preview.style.width = elementRect.width + "px";
            preview.style.height = elementRect.height + "px";
            preview.style.transform = getTransform(elementRect.left, elementRect.top);
        }
        extendStyles(preview.style, {
            // It's important that we disable the pointer events on the preview, because
            // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
            pointerEvents: 'none',
            // We have to reset the margin, because can throw off positioning relative to the viewport.
            margin: '0',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '1000'
        });
        toggleNativeDragInteractions(preview, false);
        preview.classList.add('cdk-drag-preview');
        preview.setAttribute('dir', this._direction);
        return preview;
    };
    /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @returns Promise that resolves when the animation completes.
     */
    /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @private
     * @return {?} Promise that resolves when the animation completes.
     */
    DragRef.prototype._animatePreviewToPlaceholder = /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @private
     * @return {?} Promise that resolves when the animation completes.
     */
    function () {
        var _this = this;
        // If the user hasn't moved yet, the transitionend event won't fire.
        if (!this._hasMoved) {
            return Promise.resolve();
        }
        /** @type {?} */
        var placeholderRect = this._placeholder.getBoundingClientRect();
        // Apply the class that adds a transition to the preview.
        this._preview.classList.add('cdk-drag-animating');
        // Move the preview to the placeholder position.
        this._preview.style.transform = getTransform(placeholderRect.left, placeholderRect.top);
        // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
        // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
        // apply its style, we take advantage of the available info to figure out whether we need to
        // bind the event in the first place.
        /** @type {?} */
        var duration = getTransformTransitionDurationInMs(this._preview);
        if (duration === 0) {
            return Promise.resolve();
        }
        return this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            return new Promise((/**
             * @param {?} resolve
             * @return {?}
             */
            function (resolve) {
                /** @type {?} */
                var handler = (/** @type {?} */ (((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    if (!event || (event.target === _this._preview && event.propertyName === 'transform')) {
                        _this._preview.removeEventListener('transitionend', handler);
                        resolve();
                        clearTimeout(timeout);
                    }
                }))));
                // If a transition is short enough, the browser might not fire the `transitionend` event.
                // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
                // fire if the transition hasn't completed when it was supposed to.
                /** @type {?} */
                var timeout = setTimeout((/** @type {?} */ (handler)), duration * 1.5);
                _this._preview.addEventListener('transitionend', handler);
            }));
        }));
    };
    /** Creates an element that will be shown instead of the current element while dragging. */
    /**
     * Creates an element that will be shown instead of the current element while dragging.
     * @private
     * @return {?}
     */
    DragRef.prototype._createPlaceholderElement = /**
     * Creates an element that will be shown instead of the current element while dragging.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var placeholderConfig = this._placeholderTemplate;
        /** @type {?} */
        var placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
        /** @type {?} */
        var placeholder;
        if (placeholderTemplate) {
            this._placeholderRef = (/** @type {?} */ (placeholderConfig)).viewContainer.createEmbeddedView(placeholderTemplate, (/** @type {?} */ (placeholderConfig)).context);
            placeholder = getRootNode(this._placeholderRef, this._document);
        }
        else {
            placeholder = deepCloneNode(this._rootElement);
        }
        placeholder.classList.add('cdk-drag-placeholder');
        return placeholder;
    };
    /**
     * Figures out the coordinates at which an element was picked up.
     * @param referenceElement Element that initiated the dragging.
     * @param event Event that initiated the dragging.
     */
    /**
     * Figures out the coordinates at which an element was picked up.
     * @private
     * @param {?} referenceElement Element that initiated the dragging.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    DragRef.prototype._getPointerPositionInElement = /**
     * Figures out the coordinates at which an element was picked up.
     * @private
     * @param {?} referenceElement Element that initiated the dragging.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    function (referenceElement, event) {
        /** @type {?} */
        var elementRect = this._rootElement.getBoundingClientRect();
        /** @type {?} */
        var handleElement = referenceElement === this._rootElement ? null : referenceElement;
        /** @type {?} */
        var referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
        /** @type {?} */
        var point = isTouchEvent(event) ? event.targetTouches[0] : event;
        /** @type {?} */
        var x = point.pageX - referenceRect.left - this._scrollPosition.left;
        /** @type {?} */
        var y = point.pageY - referenceRect.top - this._scrollPosition.top;
        return {
            x: referenceRect.left - elementRect.left + x,
            y: referenceRect.top - elementRect.top + y
        };
    };
    /** Determines the point of the page that was touched by the user. */
    /**
     * Determines the point of the page that was touched by the user.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._getPointerPositionOnPage = /**
     * Determines the point of the page that was touched by the user.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
        /** @type {?} */
        var point = isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
        return {
            x: point.pageX - this._scrollPosition.left,
            y: point.pageY - this._scrollPosition.top
        };
    };
    /** Gets the pointer position on the page, accounting for any position constraints. */
    /**
     * Gets the pointer position on the page, accounting for any position constraints.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._getConstrainedPointerPosition = /**
     * Gets the pointer position on the page, accounting for any position constraints.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var point = this._getPointerPositionOnPage(event);
        /** @type {?} */
        var constrainedPoint = this.constrainPosition ? this.constrainPosition(point, this) : point;
        /** @type {?} */
        var dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
        if (this.lockAxis === 'x' || dropContainerLock === 'x') {
            constrainedPoint.y = this._pickupPositionOnPage.y;
        }
        else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
            constrainedPoint.x = this._pickupPositionOnPage.x;
        }
        if (this._boundaryRect) {
            var _a = this._pickupPositionInElement, pickupX = _a.x, pickupY = _a.y;
            /** @type {?} */
            var boundaryRect = this._boundaryRect;
            /** @type {?} */
            var previewRect = (/** @type {?} */ (this._previewRect));
            /** @type {?} */
            var minY = boundaryRect.top + pickupY;
            /** @type {?} */
            var maxY = boundaryRect.bottom - (previewRect.height - pickupY);
            /** @type {?} */
            var minX = boundaryRect.left + pickupX;
            /** @type {?} */
            var maxX = boundaryRect.right - (previewRect.width - pickupX);
            constrainedPoint.x = clamp(constrainedPoint.x, minX, maxX);
            constrainedPoint.y = clamp(constrainedPoint.y, minY, maxY);
        }
        return constrainedPoint;
    };
    /** Updates the current drag delta, based on the user's current pointer position on the page. */
    /**
     * Updates the current drag delta, based on the user's current pointer position on the page.
     * @private
     * @param {?} pointerPositionOnPage
     * @return {?}
     */
    DragRef.prototype._updatePointerDirectionDelta = /**
     * Updates the current drag delta, based on the user's current pointer position on the page.
     * @private
     * @param {?} pointerPositionOnPage
     * @return {?}
     */
    function (pointerPositionOnPage) {
        var x = pointerPositionOnPage.x, y = pointerPositionOnPage.y;
        /** @type {?} */
        var delta = this._pointerDirectionDelta;
        /** @type {?} */
        var positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
        // Amount of pixels the user has dragged since the last time the direction changed.
        /** @type {?} */
        var changeX = Math.abs(x - positionSinceLastChange.x);
        /** @type {?} */
        var changeY = Math.abs(y - positionSinceLastChange.y);
        // Because we handle pointer events on a per-pixel basis, we don't want the delta
        // to change for every pixel, otherwise anything that depends on it can look erratic.
        // To make the delta more consistent, we track how much the user has moved since the last
        // delta change and we only update it after it has reached a certain threshold.
        if (changeX > this._config.pointerDirectionChangeThreshold) {
            delta.x = x > positionSinceLastChange.x ? 1 : -1;
            positionSinceLastChange.x = x;
        }
        if (changeY > this._config.pointerDirectionChangeThreshold) {
            delta.y = y > positionSinceLastChange.y ? 1 : -1;
            positionSinceLastChange.y = y;
        }
        return delta;
    };
    /** Toggles the native drag interactions, based on how many handles are registered. */
    /**
     * Toggles the native drag interactions, based on how many handles are registered.
     * @private
     * @return {?}
     */
    DragRef.prototype._toggleNativeDragInteractions = /**
     * Toggles the native drag interactions, based on how many handles are registered.
     * @private
     * @return {?}
     */
    function () {
        if (!this._rootElement || !this._handles) {
            return;
        }
        /** @type {?} */
        var shouldEnable = this._handles.length > 0 || !this.isDragging();
        if (shouldEnable !== this._nativeInteractionsEnabled) {
            this._nativeInteractionsEnabled = shouldEnable;
            toggleNativeDragInteractions(this._rootElement, shouldEnable);
        }
    };
    /** Removes the manually-added event listeners from the root element. */
    /**
     * Removes the manually-added event listeners from the root element.
     * @private
     * @param {?} element
     * @return {?}
     */
    DragRef.prototype._removeRootElementListeners = /**
     * Removes the manually-added event listeners from the root element.
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
        element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
    };
    /**
     * Applies a `transform` to the root element, taking into account any existing transforms on it.
     * @param x New transform value along the X axis.
     * @param y New transform value along the Y axis.
     */
    /**
     * Applies a `transform` to the root element, taking into account any existing transforms on it.
     * @private
     * @param {?} x New transform value along the X axis.
     * @param {?} y New transform value along the Y axis.
     * @return {?}
     */
    DragRef.prototype._applyRootElementTransform = /**
     * Applies a `transform` to the root element, taking into account any existing transforms on it.
     * @private
     * @param {?} x New transform value along the X axis.
     * @param {?} y New transform value along the Y axis.
     * @return {?}
     */
    function (x, y) {
        /** @type {?} */
        var transform = getTransform(x, y);
        // Cache the previous transform amount only after the first drag sequence, because
        // we don't want our own transforms to stack on top of each other.
        if (this._initialTransform == null) {
            this._initialTransform = this._rootElement.style.transform || '';
        }
        // Preserve the previous `transform` value, if there was one. Note that we apply our own
        // transform before the user's, because things like rotation can affect which direction
        // the element will be translated towards.
        this._rootElement.style.transform = this._initialTransform ?
            transform + ' ' + this._initialTransform : transform;
    };
    /**
     * Gets the distance that the user has dragged during the current drag sequence.
     * @param currentPosition Current position of the user's pointer.
     */
    /**
     * Gets the distance that the user has dragged during the current drag sequence.
     * @private
     * @param {?} currentPosition Current position of the user's pointer.
     * @return {?}
     */
    DragRef.prototype._getDragDistance = /**
     * Gets the distance that the user has dragged during the current drag sequence.
     * @private
     * @param {?} currentPosition Current position of the user's pointer.
     * @return {?}
     */
    function (currentPosition) {
        /** @type {?} */
        var pickupPosition = this._pickupPositionOnPage;
        if (pickupPosition) {
            return { x: currentPosition.x - pickupPosition.x, y: currentPosition.y - pickupPosition.y };
        }
        return { x: 0, y: 0 };
    };
    /** Cleans up any cached element dimensions that we don't need after dragging has stopped. */
    /**
     * Cleans up any cached element dimensions that we don't need after dragging has stopped.
     * @private
     * @return {?}
     */
    DragRef.prototype._cleanupCachedDimensions = /**
     * Cleans up any cached element dimensions that we don't need after dragging has stopped.
     * @private
     * @return {?}
     */
    function () {
        this._boundaryRect = this._previewRect = undefined;
    };
    /**
     * Checks whether the element is still inside its boundary after the viewport has been resized.
     * If not, the position is adjusted so that the element fits again.
     */
    /**
     * Checks whether the element is still inside its boundary after the viewport has been resized.
     * If not, the position is adjusted so that the element fits again.
     * @private
     * @return {?}
     */
    DragRef.prototype._containInsideBoundaryOnResize = /**
     * Checks whether the element is still inside its boundary after the viewport has been resized.
     * If not, the position is adjusted so that the element fits again.
     * @private
     * @return {?}
     */
    function () {
        var _a = this._passiveTransform, x = _a.x, y = _a.y;
        if ((x === 0 && y === 0) || this.isDragging() || !this._boundaryElement) {
            return;
        }
        /** @type {?} */
        var boundaryRect = this._boundaryElement.getBoundingClientRect();
        /** @type {?} */
        var elementRect = this._rootElement.getBoundingClientRect();
        /** @type {?} */
        var leftOverflow = boundaryRect.left - elementRect.left;
        /** @type {?} */
        var rightOverflow = elementRect.right - boundaryRect.right;
        /** @type {?} */
        var topOverflow = boundaryRect.top - elementRect.top;
        /** @type {?} */
        var bottomOverflow = elementRect.bottom - boundaryRect.bottom;
        // If the element has become wider than the boundary, we can't
        // do much to make it fit so we just anchor it to the left.
        if (boundaryRect.width > elementRect.width) {
            if (leftOverflow > 0) {
                x += leftOverflow;
            }
            if (rightOverflow > 0) {
                x -= rightOverflow;
            }
        }
        else {
            x = 0;
        }
        // If the element has become taller than the boundary, we can't
        // do much to make it fit so we just anchor it to the top.
        if (boundaryRect.height > elementRect.height) {
            if (topOverflow > 0) {
                y += topOverflow;
            }
            if (bottomOverflow > 0) {
                y -= bottomOverflow;
            }
        }
        else {
            y = 0;
        }
        if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
            this.setFreeDragPosition({ y: y, x: x });
        }
    };
    return DragRef;
}());
/**
 * Gets a 3d `transform` that can be applied to an element.
 * @param {?} x Desired position of the element along the X axis.
 * @param {?} y Desired position of the element along the Y axis.
 * @return {?}
 */
function getTransform(x, y) {
    // Round the transforms since some browsers will
    // blur the elements for sub-pixel transforms.
    return "translate3d(" + Math.round(x) + "px, " + Math.round(y) + "px, 0)";
}
/**
 * Creates a deep clone of an element.
 * @param {?} node
 * @return {?}
 */
function deepCloneNode(node) {
    /** @type {?} */
    var clone = (/** @type {?} */ (node.cloneNode(true)));
    /** @type {?} */
    var descendantsWithId = clone.querySelectorAll('[id]');
    /** @type {?} */
    var descendantCanvases = node.querySelectorAll('canvas');
    // Remove the `id` to avoid having multiple elements with the same id on the page.
    clone.removeAttribute('id');
    for (var i = 0; i < descendantsWithId.length; i++) {
        descendantsWithId[i].removeAttribute('id');
    }
    // `cloneNode` won't transfer the content of `canvas` elements so we have to do it ourselves.
    // We match up the cloned canvas to their sources using their index in the DOM.
    if (descendantCanvases.length) {
        /** @type {?} */
        var cloneCanvases = clone.querySelectorAll('canvas');
        for (var i = 0; i < descendantCanvases.length; i++) {
            /** @type {?} */
            var correspondingCloneContext = cloneCanvases[i].getContext('2d');
            if (correspondingCloneContext) {
                correspondingCloneContext.drawImage(descendantCanvases[i], 0, 0);
            }
        }
    }
    return clone;
}
/**
 * Clamps a value between a minimum and a maximum.
 * @param {?} value
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
/**
 * Helper to remove an element from the DOM and to do all the necessary null checks.
 * @param {?} element Element to be removed.
 * @return {?}
 */
function removeElement(element) {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}
/**
 * Determines whether an event is a touch event.
 * @param {?} event
 * @return {?}
 */
function isTouchEvent(event) {
    // This function is called for every pixel that the user has dragged so we need it to be
    // as fast as possible. Since we only bind mouse events and touch events, we can assume
    // that if the event's name starts with `t`, it's a touch event.
    return event.type[0] === 't';
}
/**
 * Gets the element into which the drag preview should be inserted.
 * @param {?} documentRef
 * @return {?}
 */
function getPreviewInsertionPoint(documentRef) {
    // We can't use the body if the user is in fullscreen mode,
    // because the preview will render under the fullscreen element.
    // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.
    return documentRef.fullscreenElement ||
        documentRef.webkitFullscreenElement ||
        documentRef.mozFullScreenElement ||
        documentRef.msFullscreenElement ||
        documentRef.body;
}
/**
 * Gets the root HTML element of an embedded view.
 * If the root is not an HTML element it gets wrapped in one.
 * @param {?} viewRef
 * @param {?} _document
 * @return {?}
 */
function getRootNode(viewRef, _document) {
    /** @type {?} */
    var rootNode = viewRef.rootNodes[0];
    if (rootNode.nodeType !== _document.ELEMENT_NODE) {
        /** @type {?} */
        var wrapper = _document.createElement('div');
        wrapper.appendChild(rootNode);
        return wrapper;
    }
    return (/** @type {?} */ (rootNode));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Moves an item one index in an array to another.
 * @template T
 * @param {?} array Array in which to move the item.
 * @param {?} fromIndex Starting index of the item.
 * @param {?} toIndex Index to which the item should be moved.
 * @return {?}
 */
function moveItemInArray(array, fromIndex, toIndex) {
    /** @type {?} */
    var from = clamp$1(fromIndex, array.length - 1);
    /** @type {?} */
    var to = clamp$1(toIndex, array.length - 1);
    if (from === to) {
        return;
    }
    /** @type {?} */
    var target = array[from];
    /** @type {?} */
    var delta = to < from ? -1 : 1;
    for (var i = from; i !== to; i += delta) {
        array[i] = array[i + delta];
    }
    array[to] = target;
}
/**
 * Moves an item from one array to another.
 * @template T
 * @param {?} currentArray Array from which to transfer the item.
 * @param {?} targetArray Array into which to put the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 * @return {?}
 */
function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    /** @type {?} */
    var from = clamp$1(currentIndex, currentArray.length - 1);
    /** @type {?} */
    var to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
    }
}
/**
 * Copies an item from one array to another, leaving it in its
 * original position in current array.
 * @template T
 * @param {?} currentArray Array from which to copy the item.
 * @param {?} targetArray Array into which is copy the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 *
 * @return {?}
 */
function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    /** @type {?} */
    var to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray[currentIndex]);
    }
}
/**
 * Clamps a number between zero and a maximum.
 * @param {?} value
 * @param {?} max
 * @return {?}
 */
function clamp$1(value, max) {
    return Math.max(0, Math.min(max, value));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique ids for drop refs.
 * @type {?}
 */
var _uniqueIdCounter = 0;
/**
 * Proximity, as a ratio to width/height, at which a
 * dragged item will affect the drop container.
 * @type {?}
 */
var DROP_PROXIMITY_THRESHOLD = 0.05;
/**
 * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
 * viewport. The value comes from trying it out manually until it feels right.
 * @type {?}
 */
var SCROLL_PROXIMITY_THRESHOLD = 0.05;
/**
 * Number of pixels to scroll for each frame when auto-scrolling an element.
 * The value comes from trying it out manually until it feels right.
 * @type {?}
 */
var AUTO_SCROLL_STEP = 2;
/**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 * \@docs-private
 * @template T
 */
var  /**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 * \@docs-private
 * @template T
 */
DropListRef = /** @class */ (function () {
    function DropListRef(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
        var _this = this;
        this._dragDropRegistry = _dragDropRegistry;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        /**
         * Unique ID for the drop list.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 8.0.0
         */
        this.id = "cdk-drop-list-ref-" + _uniqueIdCounter++;
        /**
         * Whether starting a dragging sequence from this container is disabled.
         */
        this.disabled = false;
        /**
         * Whether sorting items within the list is disabled.
         */
        this.sortingDisabled = false;
        /**
         * Whether auto-scrolling the view when the user
         * moves their pointer close to the edges is disabled.
         */
        this.autoScrollDisabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = (/**
         * @return {?}
         */
        function () { return true; });
        /**
         * Emits right before dragging has started.
         */
        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user drops an item inside the container.
         */
        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */
        this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Whether an item in the list is being dragged.
         */
        this._isDragging = false;
        /**
         * Cache of the dimensions of all the items inside the container.
         */
        this._itemPositions = [];
        /**
         * Keeps track of the container's scroll position.
         */
        this._scrollPosition = { top: 0, left: 0 };
        /**
         * Keeps track of the scroll position of the viewport.
         */
        this._viewportScrollPosition = { top: 0, left: 0 };
        /**
         * Keeps track of the item that was last swapped with the dragged item, as
         * well as what direction the pointer was moving in when the swap occured.
         */
        this._previousSwap = { drag: (/** @type {?} */ (null)), delta: 0 };
        /**
         * Drop lists that are connected to the current one.
         */
        this._siblings = [];
        /**
         * Direction in which the list is oriented.
         */
        this._orientation = 'vertical';
        /**
         * Connected siblings that currently have a dragged item.
         */
        this._activeSiblings = new Set();
        /**
         * Layout direction of the drop list.
         */
        this._direction = 'ltr';
        /**
         * Subscription to the window being scrolled.
         */
        this._viewportScrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Vertical direction in which the list is currently scrolling.
         */
        this._verticalScrollDirection = 0 /* NONE */;
        /**
         * Horizontal direction in which the list is currently scrolling.
         */
        this._horizontalScrollDirection = 0 /* NONE */;
        /**
         * Used to signal to the current auto-scroll sequence when to stop.
         */
        this._stopScrollTimers = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Handles the container being scrolled. Has to be an arrow function to preserve the context.
         */
        this._handleScroll = (/**
         * @return {?}
         */
        function () {
            if (!_this.isDragging()) {
                return;
            }
            /** @type {?} */
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(_this.element);
            _this._updateAfterScroll(_this._scrollPosition, element.scrollTop, element.scrollLeft);
        });
        /**
         * Starts the interval that'll auto-scroll the element.
         */
        this._startScrollInterval = (/**
         * @return {?}
         */
        function () {
            _this._stopScrolling();
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(0, rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._stopScrollTimers))
                .subscribe((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var node = _this._scrollNode;
                if (_this._verticalScrollDirection === 1 /* UP */) {
                    incrementVerticalScroll(node, -AUTO_SCROLL_STEP);
                }
                else if (_this._verticalScrollDirection === 2 /* DOWN */) {
                    incrementVerticalScroll(node, AUTO_SCROLL_STEP);
                }
                if (_this._horizontalScrollDirection === 1 /* LEFT */) {
                    incrementHorizontalScroll(node, -AUTO_SCROLL_STEP);
                }
                else if (_this._horizontalScrollDirection === 2 /* RIGHT */) {
                    incrementHorizontalScroll(node, AUTO_SCROLL_STEP);
                }
            }));
        });
        /** @type {?} */
        var nativeNode = this.element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(element);
        this._shadowRoot = getShadowRoot(nativeNode) || _document;
        _dragDropRegistry.registerDropContainer(this);
    }
    /** Removes the drop list functionality from the DOM element. */
    /**
     * Removes the drop list functionality from the DOM element.
     * @return {?}
     */
    DropListRef.prototype.dispose = /**
     * Removes the drop list functionality from the DOM element.
     * @return {?}
     */
    function () {
        this._stopScrolling();
        this._stopScrollTimers.complete();
        this._removeListeners();
        this.beforeStarted.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this.sorted.complete();
        this._activeSiblings.clear();
        this._scrollNode = (/** @type {?} */ (null));
        this._dragDropRegistry.removeDropContainer(this);
    };
    /** Whether an item from this list is currently being dragged. */
    /**
     * Whether an item from this list is currently being dragged.
     * @return {?}
     */
    DropListRef.prototype.isDragging = /**
     * Whether an item from this list is currently being dragged.
     * @return {?}
     */
    function () {
        return this._isDragging;
    };
    /** Starts dragging an item. */
    /**
     * Starts dragging an item.
     * @return {?}
     */
    DropListRef.prototype.start = /**
     * Starts dragging an item.
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
        this.beforeStarted.next();
        this._isDragging = true;
        this._cacheItems();
        this._siblings.forEach((/**
         * @param {?} sibling
         * @return {?}
         */
        function (sibling) { return sibling._startReceiving(_this); }));
        this._removeListeners();
        // @breaking-change 9.0.0 Remove check for _ngZone once it's marked as a required param.
        if (this._ngZone) {
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return element.addEventListener('scroll', _this._handleScroll); }));
        }
        else {
            element.addEventListener('scroll', this._handleScroll);
        }
        // @breaking-change 9.0.0 Remove check for _viewportRuler once it's marked as a required param.
        if (this._viewportRuler) {
            this._listenToScrollEvents();
        }
    };
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param item Item that was moved into the container.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     */
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    DropListRef.prototype.enter = /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    function (item, pointerX, pointerY) {
        this.start();
        // If sorting is disabled, we want the item to return to its starting
        // position if the user is returning it to its initial container.
        /** @type {?} */
        var newIndex = this.sortingDisabled ? this._draggables.indexOf(item) : -1;
        if (newIndex === -1) {
            // We use the coordinates of where the item entered the drop
            // zone to figure out at which index it should be inserted.
            newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
        }
        /** @type {?} */
        var activeDraggables = this._activeDraggables;
        /** @type {?} */
        var currentIndex = activeDraggables.indexOf(item);
        /** @type {?} */
        var placeholder = item.getPlaceholderElement();
        /** @type {?} */
        var newPositionReference = activeDraggables[newIndex];
        // If the item at the new position is the same as the item that is being dragged,
        // it means that we're trying to restore the item to its initial position. In this
        // case we should use the next item from the list as the reference.
        if (newPositionReference === item) {
            newPositionReference = activeDraggables[newIndex + 1];
        }
        // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
        // into another container and back again), we have to ensure that it isn't duplicated.
        if (currentIndex > -1) {
            activeDraggables.splice(currentIndex, 1);
        }
        // Don't use items that are being dragged as a reference, because
        // their element has been moved down to the bottom of the body.
        if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
            /** @type {?} */
            var element = newPositionReference.getRootElement();
            (/** @type {?} */ (element.parentElement)).insertBefore(placeholder, element);
            activeDraggables.splice(newIndex, 0, item);
        }
        else {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element).appendChild(placeholder);
            activeDraggables.push(item);
        }
        // The transform needs to be cleared so it doesn't throw off the measurements.
        placeholder.style.transform = '';
        // Note that the positions were already cached when we called `start` above,
        // but we need to refresh them since the amount of items has changed.
        this._cacheItemPositions();
        this.entered.next({ item: item, container: this, currentIndex: this.getItemIndex(item) });
    };
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param item Item that was dragged out.
     */
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    DropListRef.prototype.exit = /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    function (item) {
        this._reset();
        this.exited.next({ item: item, container: this });
    };
    /**
     * Drops an item into this container.
     * @param item Item being dropped into the container.
     * @param currentIndex Index at which the item should be inserted.
     * @param previousContainer Container from which the item got dragged in.
     * @param isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @param distance Distance the user has dragged since the start of the dragging sequence.
     * @breaking-change 9.0.0 `distance` parameter to become required.
     */
    /**
     * Drops an item into this container.
     * \@breaking-change 9.0.0 `distance` parameter to become required.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @param {?=} distance Distance the user has dragged since the start of the dragging sequence.
     * @return {?}
     */
    DropListRef.prototype.drop = /**
     * Drops an item into this container.
     * \@breaking-change 9.0.0 `distance` parameter to become required.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @param {?=} distance Distance the user has dragged since the start of the dragging sequence.
     * @return {?}
     */
    function (item, currentIndex, previousContainer, isPointerOverContainer, distance) {
        if (distance === void 0) { distance = { x: 0, y: 0 }; }
        this._reset();
        this.dropped.next({
            item: item,
            currentIndex: currentIndex,
            previousIndex: previousContainer.getItemIndex(item),
            container: this,
            previousContainer: previousContainer,
            isPointerOverContainer: isPointerOverContainer,
            distance: distance
        });
    };
    /**
     * Sets the draggable items that are a part of this list.
     * @param items Items that are a part of this list.
     */
    /**
     * Sets the draggable items that are a part of this list.
     * @template THIS
     * @this {THIS}
     * @param {?} items Items that are a part of this list.
     * @return {THIS}
     */
    DropListRef.prototype.withItems = /**
     * Sets the draggable items that are a part of this list.
     * @template THIS
     * @this {THIS}
     * @param {?} items Items that are a part of this list.
     * @return {THIS}
     */
    function (items) {
        var _this = this;
        (/** @type {?} */ (this))._draggables = items;
        items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item._withDropContainer((/** @type {?} */ (_this))); }));
        if ((/** @type {?} */ (this)).isDragging()) {
            (/** @type {?} */ (this))._cacheItems();
        }
        return (/** @type {?} */ (this));
    };
    /** Sets the layout direction of the drop list. */
    /**
     * Sets the layout direction of the drop list.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    DropListRef.prototype.withDirection = /**
     * Sets the layout direction of the drop list.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    function (direction) {
        (/** @type {?} */ (this))._direction = direction;
        return (/** @type {?} */ (this));
    };
    /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @param connectedTo Other containers that the current containers should be connected to.
     */
    /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @template THIS
     * @this {THIS}
     * @param {?} connectedTo Other containers that the current containers should be connected to.
     * @return {THIS}
     */
    DropListRef.prototype.connectedTo = /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @template THIS
     * @this {THIS}
     * @param {?} connectedTo Other containers that the current containers should be connected to.
     * @return {THIS}
     */
    function (connectedTo) {
        (/** @type {?} */ (this))._siblings = connectedTo.slice();
        return (/** @type {?} */ (this));
    };
    /**
     * Sets the orientation of the container.
     * @param orientation New orientation for the container.
     */
    /**
     * Sets the orientation of the container.
     * @template THIS
     * @this {THIS}
     * @param {?} orientation New orientation for the container.
     * @return {THIS}
     */
    DropListRef.prototype.withOrientation = /**
     * Sets the orientation of the container.
     * @template THIS
     * @this {THIS}
     * @param {?} orientation New orientation for the container.
     * @return {THIS}
     */
    function (orientation) {
        (/** @type {?} */ (this))._orientation = orientation;
        return (/** @type {?} */ (this));
    };
    /**
     * Figures out the index of an item in the container.
     * @param item Item whose index should be determined.
     */
    /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    DropListRef.prototype.getItemIndex = /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    function (item) {
        if (!this._isDragging) {
            return this._draggables.indexOf(item);
        }
        // Items are sorted always by top/left in the cache, however they flow differently in RTL.
        // The rest of the logic still stands no matter what orientation we're in, however
        // we need to invert the array when determining the index.
        /** @type {?} */
        var items = this._orientation === 'horizontal' && this._direction === 'rtl' ?
            this._itemPositions.slice().reverse() : this._itemPositions;
        return findIndex(items, (/**
         * @param {?} currentItem
         * @return {?}
         */
        function (currentItem) { return currentItem.drag === item; }));
    };
    /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     */
    /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     * @return {?}
     */
    DropListRef.prototype.isReceiving = /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     * @return {?}
     */
    function () {
        return this._activeSiblings.size > 0;
    };
    /**
     * Sorts an item inside the container based on its position.
     * @param item Item to be sorted.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @param pointerDelta Direction in which the pointer is moving along each axis.
     */
    /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    DropListRef.prototype._sortItem = /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    function (item, pointerX, pointerY, pointerDelta) {
        // Don't sort the item if sorting is disabled or it's out of range.
        if (this.sortingDisabled || !this._isPointerNearDropContainer(pointerX, pointerY)) {
            return;
        }
        /** @type {?} */
        var siblings = this._itemPositions;
        /** @type {?} */
        var newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
        if (newIndex === -1 && siblings.length > 0) {
            return;
        }
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        var currentIndex = findIndex(siblings, (/**
         * @param {?} currentItem
         * @return {?}
         */
        function (currentItem) { return currentItem.drag === item; }));
        /** @type {?} */
        var siblingAtNewPosition = siblings[newIndex];
        /** @type {?} */
        var currentPosition = siblings[currentIndex].clientRect;
        /** @type {?} */
        var newPosition = siblingAtNewPosition.clientRect;
        /** @type {?} */
        var delta = currentIndex > newIndex ? 1 : -1;
        this._previousSwap.drag = siblingAtNewPosition.drag;
        this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
        // How many pixels the item's placeholder should be offset.
        /** @type {?} */
        var itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
        // How many pixels all the other items should be offset.
        /** @type {?} */
        var siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
        // Save the previous order of the items before moving the item to its new index.
        // We use this to check whether an item has been moved as a result of the sorting.
        /** @type {?} */
        var oldOrder = siblings.slice();
        // Shuffle the array in place.
        moveItemInArray(siblings, currentIndex, newIndex);
        this.sorted.next({
            previousIndex: currentIndex,
            currentIndex: newIndex,
            container: this,
            item: item
        });
        siblings.forEach((/**
         * @param {?} sibling
         * @param {?} index
         * @return {?}
         */
        function (sibling, index) {
            // Don't do anything if the position hasn't changed.
            if (oldOrder[index] === sibling) {
                return;
            }
            /** @type {?} */
            var isDraggedItem = sibling.drag === item;
            /** @type {?} */
            var offset = isDraggedItem ? itemOffset : siblingOffset;
            /** @type {?} */
            var elementToOffset = isDraggedItem ? item.getPlaceholderElement() :
                sibling.drag.getRootElement();
            // Update the offset to reflect the new position.
            sibling.offset += offset;
            // Since we're moving the items with a `transform`, we need to adjust their cached
            // client rects to reflect their new position, as well as swap their positions in the cache.
            // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
            // elements may be mid-animation which will give us a wrong result.
            if (isHorizontal) {
                // Round the transforms since some browsers will
                // blur the elements, for sub-pixel transforms.
                elementToOffset.style.transform = "translate3d(" + Math.round(sibling.offset) + "px, 0, 0)";
                adjustClientRect(sibling.clientRect, 0, offset);
            }
            else {
                elementToOffset.style.transform = "translate3d(0, " + Math.round(sibling.offset) + "px, 0)";
                adjustClientRect(sibling.clientRect, offset, 0);
            }
        }));
    };
    /**
     * Checks whether the user's pointer is close to the edges of either the
     * viewport or the drop list and starts the auto-scroll sequence.
     * @param pointerX User's pointer position along the x axis.
     * @param pointerY User's pointer position along the y axis.
     */
    /**
     * Checks whether the user's pointer is close to the edges of either the
     * viewport or the drop list and starts the auto-scroll sequence.
     * @param {?} pointerX User's pointer position along the x axis.
     * @param {?} pointerY User's pointer position along the y axis.
     * @return {?}
     */
    DropListRef.prototype._startScrollingIfNecessary = /**
     * Checks whether the user's pointer is close to the edges of either the
     * viewport or the drop list and starts the auto-scroll sequence.
     * @param {?} pointerX User's pointer position along the x axis.
     * @param {?} pointerY User's pointer position along the y axis.
     * @return {?}
     */
    function (pointerX, pointerY) {
        var _a;
        if (this.autoScrollDisabled) {
            return;
        }
        /** @type {?} */
        var scrollNode;
        /** @type {?} */
        var verticalScrollDirection = 0 /* NONE */;
        /** @type {?} */
        var horizontalScrollDirection = 0 /* NONE */;
        // Check whether we should start scrolling the container.
        if (this._isPointerNearDropContainer(pointerX, pointerY)) {
            /** @type {?} */
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
            _a = getElementScrollDirections(element, this._clientRect, pointerX, pointerY), verticalScrollDirection = _a[0], horizontalScrollDirection = _a[1];
            if (verticalScrollDirection || horizontalScrollDirection) {
                scrollNode = element;
            }
        }
        // @breaking-change 9.0.0 Remove null check for _viewportRuler once it's a required parameter.
        // Otherwise check if we can start scrolling the viewport.
        if (this._viewportRuler && !verticalScrollDirection && !horizontalScrollDirection) {
            var _b = this._viewportRuler.getViewportSize(), width = _b.width, height = _b.height;
            /** @type {?} */
            var clientRect = { width: width, height: height, top: 0, right: width, bottom: height, left: 0 };
            verticalScrollDirection = getVerticalScrollDirection(clientRect, pointerY);
            horizontalScrollDirection = getHorizontalScrollDirection(clientRect, pointerX);
            scrollNode = window;
        }
        if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection ||
            horizontalScrollDirection !== this._horizontalScrollDirection ||
            scrollNode !== this._scrollNode)) {
            this._verticalScrollDirection = verticalScrollDirection;
            this._horizontalScrollDirection = horizontalScrollDirection;
            this._scrollNode = scrollNode;
            if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
                // @breaking-change 9.0.0 Remove null check for `_ngZone` once it is made required.
                if (this._ngZone) {
                    this._ngZone.runOutsideAngular(this._startScrollInterval);
                }
                else {
                    this._startScrollInterval();
                }
            }
            else {
                this._stopScrolling();
            }
        }
    };
    /** Stops any currently-running auto-scroll sequences. */
    /**
     * Stops any currently-running auto-scroll sequences.
     * @return {?}
     */
    DropListRef.prototype._stopScrolling = /**
     * Stops any currently-running auto-scroll sequences.
     * @return {?}
     */
    function () {
        this._stopScrollTimers.next();
    };
    /** Caches the position of the drop list. */
    /**
     * Caches the position of the drop list.
     * @private
     * @return {?}
     */
    DropListRef.prototype._cacheOwnPosition = /**
     * Caches the position of the drop list.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
        this._clientRect = getMutableClientRect(element);
        this._scrollPosition = { top: element.scrollTop, left: element.scrollLeft };
    };
    /** Refreshes the position cache of the items and sibling containers. */
    /**
     * Refreshes the position cache of the items and sibling containers.
     * @private
     * @return {?}
     */
    DropListRef.prototype._cacheItemPositions = /**
     * Refreshes the position cache of the items and sibling containers.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        this._itemPositions = this._activeDraggables.map((/**
         * @param {?} drag
         * @return {?}
         */
        function (drag) {
            /** @type {?} */
            var elementToMeasure = _this._dragDropRegistry.isDragging(drag) ?
                // If the element is being dragged, we have to measure the
                // placeholder, because the element is hidden.
                drag.getPlaceholderElement() :
                drag.getRootElement();
            return { drag: drag, offset: 0, clientRect: getMutableClientRect(elementToMeasure) };
        })).sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            return isHorizontal ? a.clientRect.left - b.clientRect.left :
                a.clientRect.top - b.clientRect.top;
        }));
    };
    /** Resets the container to its initial state. */
    /**
     * Resets the container to its initial state.
     * @private
     * @return {?}
     */
    DropListRef.prototype._reset = /**
     * Resets the container to its initial state.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._isDragging = false;
        // TODO(crisbeto): may have to wait for the animations to finish.
        this._activeDraggables.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.getRootElement().style.transform = ''; }));
        this._siblings.forEach((/**
         * @param {?} sibling
         * @return {?}
         */
        function (sibling) { return sibling._stopReceiving(_this); }));
        this._activeDraggables = [];
        this._itemPositions = [];
        this._previousSwap.drag = null;
        this._previousSwap.delta = 0;
        this._stopScrolling();
        this._removeListeners();
    };
    /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @param currentIndex Index of the item currently being dragged.
     * @param siblings All of the items in the list.
     * @param delta Direction in which the user is moving.
     */
    /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @private
     * @param {?} currentIndex Index of the item currently being dragged.
     * @param {?} siblings All of the items in the list.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    DropListRef.prototype._getSiblingOffsetPx = /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @private
     * @param {?} currentIndex Index of the item currently being dragged.
     * @param {?} siblings All of the items in the list.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    function (currentIndex, siblings, delta) {
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        var currentPosition = siblings[currentIndex].clientRect;
        /** @type {?} */
        var immediateSibling = siblings[currentIndex + delta * -1];
        /** @type {?} */
        var siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;
        if (immediateSibling) {
            /** @type {?} */
            var start = isHorizontal ? 'left' : 'top';
            /** @type {?} */
            var end = isHorizontal ? 'right' : 'bottom';
            // Get the spacing between the start of the current item and the end of the one immediately
            // after it in the direction in which the user is dragging, or vice versa. We add it to the
            // offset in order to push the element to where it will be when it's inline and is influenced
            // by the `margin` of its siblings.
            if (delta === -1) {
                siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
            }
            else {
                siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
            }
        }
        return siblingOffset;
    };
    /**
     * Checks whether the pointer coordinates are close to the drop container.
     * @param pointerX Coordinates along the X axis.
     * @param pointerY Coordinates along the Y axis.
     */
    /**
     * Checks whether the pointer coordinates are close to the drop container.
     * @private
     * @param {?} pointerX Coordinates along the X axis.
     * @param {?} pointerY Coordinates along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._isPointerNearDropContainer = /**
     * Checks whether the pointer coordinates are close to the drop container.
     * @private
     * @param {?} pointerX Coordinates along the X axis.
     * @param {?} pointerY Coordinates along the Y axis.
     * @return {?}
     */
    function (pointerX, pointerY) {
        var _a = this._clientRect, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
        /** @type {?} */
        var xThreshold = width * DROP_PROXIMITY_THRESHOLD;
        /** @type {?} */
        var yThreshold = height * DROP_PROXIMITY_THRESHOLD;
        return pointerY > top - yThreshold && pointerY < bottom + yThreshold &&
            pointerX > left - xThreshold && pointerX < right + xThreshold;
    };
    /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @param currentPosition Current position of the item.
     * @param newPosition Position of the item where the current item should be moved.
     * @param delta Direction in which the user is moving.
     */
    /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @private
     * @param {?} currentPosition Current position of the item.
     * @param {?} newPosition Position of the item where the current item should be moved.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    DropListRef.prototype._getItemOffsetPx = /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @private
     * @param {?} currentPosition Current position of the item.
     * @param {?} newPosition Position of the item where the current item should be moved.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    function (currentPosition, newPosition, delta) {
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        var itemOffset = isHorizontal ? newPosition.left - currentPosition.left :
            newPosition.top - currentPosition.top;
        // Account for differences in the item width/height.
        if (delta === -1) {
            itemOffset += isHorizontal ? newPosition.width - currentPosition.width :
                newPosition.height - currentPosition.height;
        }
        return itemOffset;
    };
    /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @param item Item that is being sorted.
     * @param pointerX Position of the user's pointer along the X axis.
     * @param pointerY Position of the user's pointer along the Y axis.
     * @param delta Direction in which the user is moving their pointer.
     */
    /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @private
     * @param {?} item Item that is being sorted.
     * @param {?} pointerX Position of the user's pointer along the X axis.
     * @param {?} pointerY Position of the user's pointer along the Y axis.
     * @param {?=} delta Direction in which the user is moving their pointer.
     * @return {?}
     */
    DropListRef.prototype._getItemIndexFromPointerPosition = /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @private
     * @param {?} item Item that is being sorted.
     * @param {?} pointerX Position of the user's pointer along the X axis.
     * @param {?} pointerY Position of the user's pointer along the Y axis.
     * @param {?=} delta Direction in which the user is moving their pointer.
     * @return {?}
     */
    function (item, pointerX, pointerY, delta) {
        var _this = this;
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        return findIndex(this._itemPositions, (/**
         * @param {?} __0
         * @param {?} _
         * @param {?} array
         * @return {?}
         */
        function (_a, _, array) {
            var drag = _a.drag, clientRect = _a.clientRect;
            if (drag === item) {
                // If there's only one item left in the container, it must be
                // the dragged item itself so we use it as a reference.
                return array.length < 2;
            }
            if (delta) {
                /** @type {?} */
                var direction = isHorizontal ? delta.x : delta.y;
                // If the user is still hovering over the same item as last time, and they didn't change
                // the direction in which they're dragging, we don't consider it a direction swap.
                if (drag === _this._previousSwap.drag && direction === _this._previousSwap.delta) {
                    return false;
                }
            }
            return isHorizontal ?
                // Round these down since most browsers report client rects with
                // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
                pointerX >= Math.floor(clientRect.left) && pointerX <= Math.floor(clientRect.right) :
                pointerY >= Math.floor(clientRect.top) && pointerY <= Math.floor(clientRect.bottom);
        }));
    };
    /** Caches the current items in the list and their positions. */
    /**
     * Caches the current items in the list and their positions.
     * @private
     * @return {?}
     */
    DropListRef.prototype._cacheItems = /**
     * Caches the current items in the list and their positions.
     * @private
     * @return {?}
     */
    function () {
        this._activeDraggables = this._draggables.slice();
        this._cacheItemPositions();
        this._cacheOwnPosition();
    };
    /**
     * Updates the internal state of the container after a scroll event has happened.
     * @param scrollPosition Object that is keeping track of the scroll position.
     * @param newTop New top scroll position.
     * @param newLeft New left scroll position.
     * @param extraClientRect Extra `ClientRect` object that should be updated, in addition to the
     *  ones of the drag items. Useful when the viewport has been scrolled and we also need to update
     *  the `ClientRect` of the list.
     */
    /**
     * Updates the internal state of the container after a scroll event has happened.
     * @private
     * @param {?} scrollPosition Object that is keeping track of the scroll position.
     * @param {?} newTop New top scroll position.
     * @param {?} newLeft New left scroll position.
     * @param {?=} extraClientRect Extra `ClientRect` object that should be updated, in addition to the
     *  ones of the drag items. Useful when the viewport has been scrolled and we also need to update
     *  the `ClientRect` of the list.
     * @return {?}
     */
    DropListRef.prototype._updateAfterScroll = /**
     * Updates the internal state of the container after a scroll event has happened.
     * @private
     * @param {?} scrollPosition Object that is keeping track of the scroll position.
     * @param {?} newTop New top scroll position.
     * @param {?} newLeft New left scroll position.
     * @param {?=} extraClientRect Extra `ClientRect` object that should be updated, in addition to the
     *  ones of the drag items. Useful when the viewport has been scrolled and we also need to update
     *  the `ClientRect` of the list.
     * @return {?}
     */
    function (scrollPosition, newTop, newLeft, extraClientRect) {
        var _this = this;
        /** @type {?} */
        var topDifference = scrollPosition.top - newTop;
        /** @type {?} */
        var leftDifference = scrollPosition.left - newLeft;
        if (extraClientRect) {
            adjustClientRect(extraClientRect, topDifference, leftDifference);
        }
        // Since we know the amount that the user has scrolled we can shift all of the client rectangles
        // ourselves. This is cheaper than re-measuring everything and we can avoid inconsistent
        // behavior where we might be measuring the element before its position has changed.
        this._itemPositions.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var clientRect = _a.clientRect;
            adjustClientRect(clientRect, topDifference, leftDifference);
        }));
        // We need two loops for this, because we want all of the cached
        // positions to be up-to-date before we re-sort the item.
        this._itemPositions.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var drag = _a.drag;
            if (_this._dragDropRegistry.isDragging(drag)) {
                // We need to re-sort the item manually, because the pointer move
                // events won't be dispatched while the user is scrolling.
                drag._sortFromLastPointerPosition();
            }
        }));
        scrollPosition.top = newTop;
        scrollPosition.left = newLeft;
    };
    /** Removes the event listeners associated with this drop list. */
    /**
     * Removes the event listeners associated with this drop list.
     * @private
     * @return {?}
     */
    DropListRef.prototype._removeListeners = /**
     * Removes the event listeners associated with this drop list.
     * @private
     * @return {?}
     */
    function () {
        Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element).removeEventListener('scroll', this._handleScroll);
        this._viewportScrollSubscription.unsubscribe();
    };
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param x Pointer position along the X axis.
     * @param y Pointer position along the Y axis.
     */
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._isOverContainer = /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    function (x, y) {
        return isInsideClientRect(this._clientRect, x, y);
    };
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param item Drag item that is being moved.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._getSiblingContainerFromPosition = /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    function (item, x, y) {
        return this._siblings.find((/**
         * @param {?} sibling
         * @return {?}
         */
        function (sibling) { return sibling._canReceive(item, x, y); }));
    };
    /**
     * Checks whether the drop list can receive the passed-in item.
     * @param item Item that is being dragged into the list.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    /**
     * Checks whether the drop list can receive the passed-in item.
     * @param {?} item Item that is being dragged into the list.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._canReceive = /**
     * Checks whether the drop list can receive the passed-in item.
     * @param {?} item Item that is being dragged into the list.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    function (item, x, y) {
        if (!this.enterPredicate(item, this) || !isInsideClientRect(this._clientRect, x, y)) {
            return false;
        }
        /** @type {?} */
        var elementFromPoint = (/** @type {?} */ (this._shadowRoot.elementFromPoint(x, y)));
        // If there's no element at the pointer position, then
        // the client rect is probably scrolled out of the view.
        if (!elementFromPoint) {
            return false;
        }
        /** @type {?} */
        var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
        // The `ClientRect`, that we're using to find the container over which the user is
        // hovering, doesn't give us any information on whether the element has been scrolled
        // out of the view or whether it's overlapping with other containers. This means that
        // we could end up transferring the item into a container that's invisible or is positioned
        // below another one. We use the result from `elementFromPoint` to get the top-most element
        // at the pointer position and to find whether it's one of the intersecting drop containers.
        return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
    };
    /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param sibling Sibling in which dragging has started.
     */
    /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param {?} sibling Sibling in which dragging has started.
     * @return {?}
     */
    DropListRef.prototype._startReceiving = /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param {?} sibling Sibling in which dragging has started.
     * @return {?}
     */
    function (sibling) {
        /** @type {?} */
        var activeSiblings = this._activeSiblings;
        if (!activeSiblings.has(sibling)) {
            activeSiblings.add(sibling);
            this._cacheOwnPosition();
            this._listenToScrollEvents();
        }
    };
    /**
     * Called by a connected drop list when dragging has stopped.
     * @param sibling Sibling whose dragging has stopped.
     */
    /**
     * Called by a connected drop list when dragging has stopped.
     * @param {?} sibling Sibling whose dragging has stopped.
     * @return {?}
     */
    DropListRef.prototype._stopReceiving = /**
     * Called by a connected drop list when dragging has stopped.
     * @param {?} sibling Sibling whose dragging has stopped.
     * @return {?}
     */
    function (sibling) {
        this._activeSiblings.delete(sibling);
        this._viewportScrollSubscription.unsubscribe();
    };
    /**
     * Starts listening to scroll events on the viewport.
     * Used for updating the internal state of the list.
     */
    /**
     * Starts listening to scroll events on the viewport.
     * Used for updating the internal state of the list.
     * @private
     * @return {?}
     */
    DropListRef.prototype._listenToScrollEvents = /**
     * Starts listening to scroll events on the viewport.
     * Used for updating the internal state of the list.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._viewportScrollPosition = (/** @type {?} */ (this._viewportRuler)).getViewportScrollPosition();
        this._viewportScrollSubscription = this._dragDropRegistry.scroll.subscribe((/**
         * @return {?}
         */
        function () {
            if (_this.isDragging()) {
                /** @type {?} */
                var newPosition = (/** @type {?} */ (_this._viewportRuler)).getViewportScrollPosition();
                _this._updateAfterScroll(_this._viewportScrollPosition, newPosition.top, newPosition.left, _this._clientRect);
            }
            else if (_this.isReceiving()) {
                _this._cacheOwnPosition();
            }
        }));
    };
    return DropListRef;
}());
/**
 * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
 * @param {?} clientRect `ClientRect` that should be updated.
 * @param {?} top Amount to add to the `top` position.
 * @param {?} left Amount to add to the `left` position.
 * @return {?}
 */
function adjustClientRect(clientRect, top, left) {
    clientRect.top += top;
    clientRect.bottom = clientRect.top + clientRect.height;
    clientRect.left += left;
    clientRect.right = clientRect.left + clientRect.width;
}
/**
 * Finds the index of an item that matches a predicate function. Used as an equivalent
 * of `Array.prototype.findIndex` which isn't part of the standard Google typings.
 * @template T
 * @param {?} array Array in which to look for matches.
 * @param {?} predicate Function used to determine whether an item is a match.
 * @return {?}
 */
function findIndex(array, predicate) {
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
/**
 * Checks whether some coordinates are within a `ClientRect`.
 * @param {?} clientRect ClientRect that is being checked.
 * @param {?} x Coordinates along the X axis.
 * @param {?} y Coordinates along the Y axis.
 * @return {?}
 */
function isInsideClientRect(clientRect, x, y) {
    var top = clientRect.top, bottom = clientRect.bottom, left = clientRect.left, right = clientRect.right;
    return y >= top && y <= bottom && x >= left && x <= right;
}
/**
 * Gets a mutable version of an element's bounding `ClientRect`.
 * @param {?} element
 * @return {?}
 */
function getMutableClientRect(element) {
    /** @type {?} */
    var clientRect = element.getBoundingClientRect();
    // We need to clone the `clientRect` here, because all the values on it are readonly
    // and we need to be able to update them. Also we can't use a spread here, because
    // the values on a `ClientRect` aren't own properties. See:
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes
    return {
        top: clientRect.top,
        right: clientRect.right,
        bottom: clientRect.bottom,
        left: clientRect.left,
        width: clientRect.width,
        height: clientRect.height
    };
}
/**
 * Increments the vertical scroll position of a node.
 * @param {?} node Node whose scroll position should change.
 * @param {?} amount Amount of pixels that the `node` should be scrolled.
 * @return {?}
 */
function incrementVerticalScroll(node, amount) {
    if (node === window) {
        ((/** @type {?} */ (node))).scrollBy(0, amount);
    }
    else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
        ((/** @type {?} */ (node))).scrollTop += amount;
    }
}
/**
 * Increments the horizontal scroll position of a node.
 * @param {?} node Node whose scroll position should change.
 * @param {?} amount Amount of pixels that the `node` should be scrolled.
 * @return {?}
 */
function incrementHorizontalScroll(node, amount) {
    if (node === window) {
        ((/** @type {?} */ (node))).scrollBy(amount, 0);
    }
    else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
        ((/** @type {?} */ (node))).scrollLeft += amount;
    }
}
/**
 * Gets whether the vertical auto-scroll direction of a node.
 * @param {?} clientRect Dimensions of the node.
 * @param {?} pointerY Position of the user's pointer along the y axis.
 * @return {?}
 */
function getVerticalScrollDirection(clientRect, pointerY) {
    var top = clientRect.top, bottom = clientRect.bottom, height = clientRect.height;
    /** @type {?} */
    var yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
    if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
        return 1 /* UP */;
    }
    else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
        return 2 /* DOWN */;
    }
    return 0 /* NONE */;
}
/**
 * Gets whether the horizontal auto-scroll direction of a node.
 * @param {?} clientRect Dimensions of the node.
 * @param {?} pointerX Position of the user's pointer along the x axis.
 * @return {?}
 */
function getHorizontalScrollDirection(clientRect, pointerX) {
    var left = clientRect.left, right = clientRect.right, width = clientRect.width;
    /** @type {?} */
    var xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
    if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
        return 1 /* LEFT */;
    }
    else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
        return 2 /* RIGHT */;
    }
    return 0 /* NONE */;
}
/**
 * Gets the directions in which an element node should be scrolled,
 * assuming that the user's pointer is already within it scrollable region.
 * @param {?} element Element for which we should calculate the scroll direction.
 * @param {?} clientRect Bounding client rectangle of the element.
 * @param {?} pointerX Position of the user's pointer along the x axis.
 * @param {?} pointerY Position of the user's pointer along the y axis.
 * @return {?}
 */
function getElementScrollDirections(element, clientRect, pointerX, pointerY) {
    /** @type {?} */
    var computedVertical = getVerticalScrollDirection(clientRect, pointerY);
    /** @type {?} */
    var computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
    /** @type {?} */
    var verticalScrollDirection = 0 /* NONE */;
    /** @type {?} */
    var horizontalScrollDirection = 0 /* NONE */;
    // Note that we here we do some extra checks for whether the element is actually scrollable in
    // a certain direction and we only assign the scroll direction if it is. We do this so that we
    // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
    // This allows us to handle cases where the scroll regions of two scrollable elements overlap.
    if (computedVertical) {
        /** @type {?} */
        var scrollTop = element.scrollTop;
        if (computedVertical === 1 /* UP */) {
            if (scrollTop > 0) {
                verticalScrollDirection = 1 /* UP */;
            }
        }
        else if (element.scrollHeight - scrollTop > element.clientHeight) {
            verticalScrollDirection = 2 /* DOWN */;
        }
    }
    if (computedHorizontal) {
        /** @type {?} */
        var scrollLeft = element.scrollLeft;
        if (computedHorizontal === 1 /* LEFT */) {
            if (scrollLeft > 0) {
                horizontalScrollDirection = 1 /* LEFT */;
            }
        }
        else if (element.scrollWidth - scrollLeft > element.clientWidth) {
            horizontalScrollDirection = 2 /* RIGHT */;
        }
    }
    return [verticalScrollDirection, horizontalScrollDirection];
}
/**
 * Gets the shadow root of an element, if any.
 * @param {?} element
 * @return {?}
 */
function getShadowRoot(element) {
    if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["_supportsShadowDom"])()) {
        /** @type {?} */
        var rootNode = element.getRootNode ? element.getRootNode() : null;
        if (rootNode instanceof ShadowRoot) {
            return rootNode;
        }
    }
    return null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Event options that can be used to bind an active, capturing event.
 * @type {?}
 */
var activeCapturingEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({
    passive: false,
    capture: true
});
/**
 * Service that keeps track of all the drag item and drop container
 * instances, and manages global event listeners on the `document`.
 * \@docs-private
 * @template I, C
 */
// Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
// to avoid circular imports. If we were to reference them here, importing the registry into the
// classes that are registering themselves will introduce a circular import.
var DragDropRegistry = /** @class */ (function () {
    function DragDropRegistry(_ngZone, _document) {
        var _this = this;
        this._ngZone = _ngZone;
        /**
         * Registered drop container instances.
         */
        this._dropInstances = new Set();
        /**
         * Registered drag item instances.
         */
        this._dragInstances = new Set();
        /**
         * Drag item instances that are currently being dragged.
         */
        this._activeDragInstances = new Set();
        /**
         * Keeps track of the event listeners that we've bound to the `document`.
         */
        this._globalListeners = new Map();
        /**
         * Emits the `touchmove` or `mousemove` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits the `touchend` or `mouseup` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the viewport has been scrolled while the user is dragging an item.
         */
        this.scroll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Event listener that will prevent the default browser action while the user is dragging.
         * @param event Event whose default action should be prevented.
         */
        this._preventDefaultWhileDragging = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (_this._activeDragInstances.size) {
                event.preventDefault();
            }
        });
        this._document = _document;
    }
    /** Adds a drop container to the registry. */
    /**
     * Adds a drop container to the registry.
     * @param {?} drop
     * @return {?}
     */
    DragDropRegistry.prototype.registerDropContainer = /**
     * Adds a drop container to the registry.
     * @param {?} drop
     * @return {?}
     */
    function (drop) {
        if (!this._dropInstances.has(drop)) {
            if (this.getDropContainer(drop.id)) {
                throw Error("Drop instance with id \"" + drop.id + "\" has already been registered.");
            }
            this._dropInstances.add(drop);
        }
    };
    /** Adds a drag item instance to the registry. */
    /**
     * Adds a drag item instance to the registry.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.registerDragItem = /**
     * Adds a drag item instance to the registry.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        var _this = this;
        this._dragInstances.add(drag);
        // The `touchmove` event gets bound once, ahead of time, because WebKit
        // won't preventDefault on a dynamically-added `touchmove` listener.
        // See https://bugs.webkit.org/show_bug.cgi?id=184250.
        if (this._dragInstances.size === 1) {
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                // The event handler has to be explicitly active,
                // because newer browsers make it passive by default.
                _this._document.addEventListener('touchmove', _this._preventDefaultWhileDragging, activeCapturingEventOptions);
            }));
        }
    };
    /** Removes a drop container from the registry. */
    /**
     * Removes a drop container from the registry.
     * @param {?} drop
     * @return {?}
     */
    DragDropRegistry.prototype.removeDropContainer = /**
     * Removes a drop container from the registry.
     * @param {?} drop
     * @return {?}
     */
    function (drop) {
        this._dropInstances.delete(drop);
    };
    /** Removes a drag item instance from the registry. */
    /**
     * Removes a drag item instance from the registry.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.removeDragItem = /**
     * Removes a drag item instance from the registry.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        this._dragInstances.delete(drag);
        this.stopDragging(drag);
        if (this._dragInstances.size === 0) {
            this._document.removeEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
        }
    };
    /**
     * Starts the dragging sequence for a drag instance.
     * @param drag Drag instance which is being dragged.
     * @param event Event that initiated the dragging.
     */
    /**
     * Starts the dragging sequence for a drag instance.
     * @param {?} drag Drag instance which is being dragged.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    DragDropRegistry.prototype.startDragging = /**
     * Starts the dragging sequence for a drag instance.
     * @param {?} drag Drag instance which is being dragged.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    function (drag, event) {
        var _this = this;
        // Do not process the same drag twice to avoid memory leaks and redundant listeners
        if (this._activeDragInstances.has(drag)) {
            return;
        }
        this._activeDragInstances.add(drag);
        if (this._activeDragInstances.size === 1) {
            /** @type {?} */
            var isTouchEvent = event.type.startsWith('touch');
            /** @type {?} */
            var moveEvent = isTouchEvent ? 'touchmove' : 'mousemove';
            /** @type {?} */
            var upEvent = isTouchEvent ? 'touchend' : 'mouseup';
            // We explicitly bind __active__ listeners here, because newer browsers will default to
            // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
            // use `preventDefault` to prevent the page from scrolling while the user is dragging.
            this._globalListeners
                .set(moveEvent, {
                handler: (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.pointerMove.next((/** @type {?} */ (e))); }),
                options: activeCapturingEventOptions
            })
                .set(upEvent, {
                handler: (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.pointerUp.next((/** @type {?} */ (e))); }),
                options: true
            })
                .set('scroll', {
                handler: (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.scroll.next(e); }),
                // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
                // the document. See https://github.com/angular/components/issues/17144.
                options: true
            })
                // Preventing the default action on `mousemove` isn't enough to disable text selection
                // on Safari so we need to prevent the selection event as well. Alternatively this can
                // be done by setting `user-select: none` on the `body`, however it has causes a style
                // recalculation which can be expensive on pages with a lot of elements.
                .set('selectstart', {
                handler: this._preventDefaultWhileDragging,
                options: activeCapturingEventOptions
            });
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this._globalListeners.forEach((/**
                 * @param {?} config
                 * @param {?} name
                 * @return {?}
                 */
                function (config, name) {
                    _this._document.addEventListener(name, config.handler, config.options);
                }));
            }));
        }
    };
    /** Stops dragging a drag item instance. */
    /**
     * Stops dragging a drag item instance.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.stopDragging = /**
     * Stops dragging a drag item instance.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        this._activeDragInstances.delete(drag);
        if (this._activeDragInstances.size === 0) {
            this._clearGlobalListeners();
        }
    };
    /** Gets whether a drag item instance is currently being dragged. */
    /**
     * Gets whether a drag item instance is currently being dragged.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.isDragging = /**
     * Gets whether a drag item instance is currently being dragged.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        return this._activeDragInstances.has(drag);
    };
    /**
     * Gets a drop container by its id.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 8.0.0
     */
    /**
     * Gets a drop container by its id.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 8.0.0
     * @param {?} id
     * @return {?}
     */
    DragDropRegistry.prototype.getDropContainer = /**
     * Gets a drop container by its id.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 8.0.0
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return Array.from(this._dropInstances).find((/**
         * @param {?} instance
         * @return {?}
         */
        function (instance) { return instance.id === id; }));
    };
    /**
     * @return {?}
     */
    DragDropRegistry.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._dragInstances.forEach((/**
         * @param {?} instance
         * @return {?}
         */
        function (instance) { return _this.removeDragItem(instance); }));
        this._dropInstances.forEach((/**
         * @param {?} instance
         * @return {?}
         */
        function (instance) { return _this.removeDropContainer(instance); }));
        this._clearGlobalListeners();
        this.pointerMove.complete();
        this.pointerUp.complete();
    };
    /** Clears out the global event listeners from the `document`. */
    /**
     * Clears out the global event listeners from the `document`.
     * @private
     * @return {?}
     */
    DragDropRegistry.prototype._clearGlobalListeners = /**
     * Clears out the global event listeners from the `document`.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._globalListeners.forEach((/**
         * @param {?} config
         * @param {?} name
         * @return {?}
         */
        function (config, name) {
            _this._document.removeEventListener(name, config.handler, config.options);
        }));
        this._globalListeners.clear();
    };
    DragDropRegistry.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    DragDropRegistry.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ DragDropRegistry.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"])({ factory: function DragDropRegistry_Factory() { return new DragDropRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])); }, token: DragDropRegistry, providedIn: "root" });
    return DragDropRegistry;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default configuration to be used when creating a `DragRef`.
 * @type {?}
 */
var DEFAULT_CONFIG = {
    dragStartThreshold: 5,
    pointerDirectionChangeThreshold: 5
};
/**
 * Service that allows for drag-and-drop functionality to be attached to DOM elements.
 */
var DragDrop = /** @class */ (function () {
    function DragDrop(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
    }
    /**
     * Turns an element into a draggable item.
     * @param element Element to which to attach the dragging functionality.
     * @param config Object used to configure the dragging behavior.
     */
    /**
     * Turns an element into a draggable item.
     * @template T
     * @param {?} element Element to which to attach the dragging functionality.
     * @param {?=} config Object used to configure the dragging behavior.
     * @return {?}
     */
    DragDrop.prototype.createDrag = /**
     * Turns an element into a draggable item.
     * @template T
     * @param {?} element Element to which to attach the dragging functionality.
     * @param {?=} config Object used to configure the dragging behavior.
     * @return {?}
     */
    function (element, config) {
        if (config === void 0) { config = DEFAULT_CONFIG; }
        return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
    };
    /**
     * Turns an element into a drop list.
     * @param element Element to which to attach the drop list functionality.
     */
    /**
     * Turns an element into a drop list.
     * @template T
     * @param {?} element Element to which to attach the drop list functionality.
     * @return {?}
     */
    DragDrop.prototype.createDropList = /**
     * Turns an element into a drop list.
     * @template T
     * @param {?} element Element to which to attach the drop list functionality.
     * @return {?}
     */
    function (element) {
        return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
    };
    DragDrop.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    DragDrop.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ViewportRuler"] },
        { type: DragDropRegistry }
    ]; };
    /** @nocollapse */ DragDrop.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"])({ factory: function DragDrop_Factory() { return new DragDrop(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(DragDropRegistry)); }, token: DragDrop, providedIn: "root" });
    return DragDrop;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that is used to provide a CdkDropList instance to CdkDrag.
 * Used for avoiding circular imports.
 * @type {?}
 */
var CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CDK_DROP_LIST');
/**
 * Injection token that is used to provide a CdkDropList instance to CdkDrag.
 * Used for avoiding circular imports.
 * @deprecated Use `CDK_DROP_LIST` instead.
 * \@breaking-change 8.0.0
 * @type {?}
 */
var CDK_DROP_LIST_CONTAINER = CDK_DROP_LIST;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
 * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
 * to avoid circular imports.
 * \@docs-private
 * @type {?}
 */
var CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CDK_DRAG_PARENT');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Handle that can be used to drag and CdkDrag instance.
 */
var CdkDragHandle = /** @class */ (function () {
    function CdkDragHandle(element, parentDrag) {
        this.element = element;
        /**
         * Emits when the state of the handle has changed.
         */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._disabled = false;
        this._parentDrag = parentDrag;
        toggleNativeDragInteractions(element.nativeElement, false);
    }
    Object.defineProperty(CdkDragHandle.prototype, "disabled", {
        /** Whether starting to drag through this handle is disabled. */
        get: /**
         * Whether starting to drag through this handle is disabled.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            this._stateChanges.next(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkDragHandle.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._stateChanges.complete();
    };
    CdkDragHandle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[cdkDragHandle]',
                    host: {
                        'class': 'cdk-drag-handle'
                    }
                },] },
    ];
    /** @nocollapse */
    CdkDragHandle.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [CDK_DRAG_PARENT,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] }
    ]; };
    CdkDragHandle.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragHandleDisabled',] }]
    };
    return CdkDragHandle;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element that will be used as a template for the placeholder of a CdkDrag when
 * it is being dragged. The placeholder is displayed in place of the element being dragged.
 * @template T
 */
var CdkDragPlaceholder = /** @class */ (function () {
    function CdkDragPlaceholder(templateRef) {
        this.templateRef = templateRef;
    }
    CdkDragPlaceholder.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: 'ng-template[cdkDragPlaceholder]'
                },] },
    ];
    /** @nocollapse */
    CdkDragPlaceholder.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"] }
    ]; };
    CdkDragPlaceholder.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return CdkDragPlaceholder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element that will be used as a template for the preview
 * of a CdkDrag when it is being dragged.
 * @template T
 */
var CdkDragPreview = /** @class */ (function () {
    function CdkDragPreview(templateRef) {
        this.templateRef = templateRef;
    }
    CdkDragPreview.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: 'ng-template[cdkDragPreview]'
                },] },
    ];
    /** @nocollapse */
    CdkDragPreview.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"] }
    ]; };
    CdkDragPreview.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return CdkDragPreview;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to configure the behavior of `CdkDrag`.
 * @type {?}
 */
var CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CDK_DRAG_CONFIG', {
    providedIn: 'root',
    factory: CDK_DRAG_CONFIG_FACTORY
});
/**
 * \@docs-private
 * @return {?}
 */
function CDK_DRAG_CONFIG_FACTORY() {
    return { dragStartThreshold: 5, pointerDirectionChangeThreshold: 5 };
}
/**
 * Element that can be moved inside a CdkDropList container.
 * @template T
 */
var CdkDrag = /** @class */ (function () {
    function CdkDrag(element, dropContainer, _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef) {
        var _this = this;
        this.element = element;
        this.dropContainer = dropContainer;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Amount of milliseconds to wait after the user has put their
         * pointer down before starting to drag the element.
         */
        this.dragStartDelay = 0;
        this._disabled = false;
        /**
         * Emits when the user starts dragging the item.
         */
        this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */
        this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */
        this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user has moved the item into a new container.
         */
        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */
        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user drops the item inside a container.
         */
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var subscription = _this._dragRef.moved.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
             * @param {?} movedEvent
             * @return {?}
             */
            function (movedEvent) { return ({
                source: _this,
                pointerPosition: movedEvent.pointerPosition,
                event: movedEvent.event,
                delta: movedEvent.delta,
                distance: movedEvent.distance
            }); }))).subscribe(observer);
            return (/**
             * @return {?}
             */
            function () {
                subscription.unsubscribe();
            });
        }));
        this._dragRef = dragDrop.createDrag(element, config);
        this._dragRef.data = this;
        this._syncInputs(this._dragRef);
        this._handleEvents(this._dragRef);
    }
    Object.defineProperty(CdkDrag.prototype, "boundaryElementSelector", {
        /**
         * Selector that will be used to determine the element to which the draggable's position will
         * be constrained. Matching starts from the element's parent and goes up the DOM until a matching
         * element has been found
         * @deprecated Use `boundaryElement` instead.
         * @breaking-change 9.0.0
         */
        get: /**
         * Selector that will be used to determine the element to which the draggable's position will
         * be constrained. Matching starts from the element's parent and goes up the DOM until a matching
         * element has been found
         * @deprecated Use `boundaryElement` instead.
         * \@breaking-change 9.0.0
         * @return {?}
         */
        function () {
            return typeof this.boundaryElement === 'string' ? this.boundaryElement : (/** @type {?} */ (undefined));
        },
        set: /**
         * @param {?} selector
         * @return {?}
         */
        function (selector) {
            this.boundaryElement = selector;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkDrag.prototype, "disabled", {
        /** Whether starting to drag this element is disabled. */
        get: /**
         * Whether starting to drag this element is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || (this.dropContainer && this.dropContainer.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            this._dragRef.disabled = this._disabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    CdkDrag.prototype.getPlaceholderElement = /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    function () {
        return this._dragRef.getPlaceholderElement();
    };
    /** Returns the root draggable element. */
    /**
     * Returns the root draggable element.
     * @return {?}
     */
    CdkDrag.prototype.getRootElement = /**
     * Returns the root draggable element.
     * @return {?}
     */
    function () {
        return this._dragRef.getRootElement();
    };
    /** Resets a standalone drag item to its initial position. */
    /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    CdkDrag.prototype.reset = /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    function () {
        this._dragRef.reset();
    };
    /**
     * Gets the pixel coordinates of the draggable outside of a drop container.
     */
    /**
     * Gets the pixel coordinates of the draggable outside of a drop container.
     * @return {?}
     */
    CdkDrag.prototype.getFreeDragPosition = /**
     * Gets the pixel coordinates of the draggable outside of a drop container.
     * @return {?}
     */
    function () {
        return this._dragRef.getFreeDragPosition();
    };
    /**
     * @return {?}
     */
    CdkDrag.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // We need to wait for the zone to stabilize, in order for the reference
        // element to be in the proper place in the DOM. This is mostly relevant
        // for draggable elements inside portals since they get stamped out in
        // their original DOM position and then they get transferred to the portal.
        this._ngZone.onStable.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this._updateRootElement();
            // Listen for any newly-added handles.
            _this._handles.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(_this._handles), 
            // Sync the new handles with the DragRef.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((/**
             * @param {?} handles
             * @return {?}
             */
            function (handles) {
                /** @type {?} */
                var childHandleElements = handles
                    .filter((/**
                 * @param {?} handle
                 * @return {?}
                 */
                function (handle) { return handle._parentDrag === _this; }))
                    .map((/**
                 * @param {?} handle
                 * @return {?}
                 */
                function (handle) { return handle.element; }));
                _this._dragRef.withHandles(childHandleElements);
            })), 
            // Listen if the state of any of the handles changes.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((/**
             * @param {?} handles
             * @return {?}
             */
            function (handles) {
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, handles.map((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item._stateChanges; })));
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._destroyed)).subscribe((/**
             * @param {?} handleInstance
             * @return {?}
             */
            function (handleInstance) {
                // Enabled/disable the handle that changed in the DragRef.
                /** @type {?} */
                var dragRef = _this._dragRef;
                /** @type {?} */
                var handle = handleInstance.element.nativeElement;
                handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
            }));
            if (_this.freeDragPosition) {
                _this._dragRef.setFreeDragPosition(_this.freeDragPosition);
            }
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CdkDrag.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var rootSelectorChange = changes['rootElementSelector'];
        /** @type {?} */
        var positionChange = changes['freeDragPosition'];
        // We don't have to react to the first change since it's being
        // handled in `ngAfterViewInit` where it needs to be deferred.
        if (rootSelectorChange && !rootSelectorChange.firstChange) {
            this._updateRootElement();
        }
        // Skip the first change since it's being handled in `ngAfterViewInit`.
        if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
            this._dragRef.setFreeDragPosition(this.freeDragPosition);
        }
    };
    /**
     * @return {?}
     */
    CdkDrag.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next();
        this._destroyed.complete();
        this._dragRef.dispose();
    };
    /** Syncs the root element with the `DragRef`. */
    /**
     * Syncs the root element with the `DragRef`.
     * @private
     * @return {?}
     */
    CdkDrag.prototype._updateRootElement = /**
     * Syncs the root element with the `DragRef`.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.element.nativeElement;
        /** @type {?} */
        var rootElement = this.rootElementSelector ?
            getClosestMatchingAncestor(element, this.rootElementSelector) : element;
        if (rootElement && rootElement.nodeType !== this._document.ELEMENT_NODE) {
            throw Error("cdkDrag must be attached to an element node. " +
                ("Currently attached to \"" + rootElement.nodeName + "\"."));
        }
        this._dragRef.withRootElement(rootElement || element);
    };
    /** Gets the boundary element, based on the `boundaryElement` value. */
    /**
     * Gets the boundary element, based on the `boundaryElement` value.
     * @private
     * @return {?}
     */
    CdkDrag.prototype._getBoundaryElement = /**
     * Gets the boundary element, based on the `boundaryElement` value.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var boundary = this.boundaryElement;
        if (!boundary) {
            return null;
        }
        if (typeof boundary === 'string') {
            return getClosestMatchingAncestor(this.element.nativeElement, boundary);
        }
        /** @type {?} */
        var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(boundary);
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["isDevMode"])() && !element.contains(this.element.nativeElement)) {
            throw Error('Draggable element is not inside of the node passed into cdkDragBoundary.');
        }
        return element;
    };
    /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */
    /**
     * Syncs the inputs of the CdkDrag with the options of the underlying DragRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDrag.prototype._syncInputs = /**
     * Syncs the inputs of the CdkDrag with the options of the underlying DragRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        ref.beforeStarted.subscribe((/**
         * @return {?}
         */
        function () {
            if (!ref.isDragging()) {
                /** @type {?} */
                var dir = _this._dir;
                /** @type {?} */
                var placeholder = _this._placeholderTemplate ? {
                    template: _this._placeholderTemplate.templateRef,
                    context: _this._placeholderTemplate.data,
                    viewContainer: _this._viewContainerRef
                } : null;
                /** @type {?} */
                var preview = _this._previewTemplate ? {
                    template: _this._previewTemplate.templateRef,
                    context: _this._previewTemplate.data,
                    viewContainer: _this._viewContainerRef
                } : null;
                ref.disabled = _this.disabled;
                ref.lockAxis = _this.lockAxis;
                ref.dragStartDelay = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(_this.dragStartDelay);
                ref.constrainPosition = _this.constrainPosition;
                ref
                    .withBoundaryElement(_this._getBoundaryElement())
                    .withPlaceholderTemplate(placeholder)
                    .withPreviewTemplate(preview);
                if (dir) {
                    ref.withDirection(dir.value);
                }
            }
        }));
    };
    /** Handles the events from the underlying `DragRef`. */
    /**
     * Handles the events from the underlying `DragRef`.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDrag.prototype._handleEvents = /**
     * Handles the events from the underlying `DragRef`.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        ref.started.subscribe((/**
         * @return {?}
         */
        function () {
            _this.started.emit({ source: _this });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            _this._changeDetectorRef.markForCheck();
        }));
        ref.released.subscribe((/**
         * @return {?}
         */
        function () {
            _this.released.emit({ source: _this });
        }));
        ref.ended.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.ended.emit({ source: _this, distance: event.distance });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            _this._changeDetectorRef.markForCheck();
        }));
        ref.entered.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.entered.emit({
                container: event.container.data,
                item: _this,
                currentIndex: event.currentIndex
            });
        }));
        ref.exited.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.exited.emit({
                container: event.container.data,
                item: _this
            });
        }));
        ref.dropped.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                isPointerOverContainer: event.isPointerOverContainer,
                item: _this,
                distance: event.distance
            });
        }));
    };
    CdkDrag.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[cdkDrag]',
                    exportAs: 'cdkDrag',
                    host: {
                        'class': 'cdk-drag',
                        '[class.cdk-drag-disabled]': 'disabled',
                        '[class.cdk-drag-dragging]': '_dragRef.isDragging()',
                    },
                    providers: [{ provide: CDK_DRAG_PARENT, useExisting: CdkDrag }]
                },] },
    ];
    /** @nocollapse */
    CdkDrag.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [CDK_DROP_LIST,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [CDK_DRAG_CONFIG,] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
        { type: DragDrop },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
    ]; };
    CdkDrag.propDecorators = {
        _handles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [CdkDragHandle, { descendants: true },] }],
        _previewTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [CdkDragPreview, { static: false },] }],
        _placeholderTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [CdkDragPlaceholder, { static: false },] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragData',] }],
        lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragLockAxis',] }],
        rootElementSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragRootElement',] }],
        boundaryElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragBoundary',] }],
        dragStartDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragStartDelay',] }],
        freeDragPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragFreeDragPosition',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragDisabled',] }],
        constrainPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragConstrainPosition',] }],
        started: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragStarted',] }],
        released: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragReleased',] }],
        ended: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragEnded',] }],
        entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragEntered',] }],
        exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragExited',] }],
        dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragDropped',] }],
        moved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragMoved',] }]
    };
    return CdkDrag;
}());
/**
 * Gets the closest ancestor of an element that matches a selector.
 * @param {?} element
 * @param {?} selector
 * @return {?}
 */
function getClosestMatchingAncestor(element, selector) {
    /** @type {?} */
    var currentElement = (/** @type {?} */ (element.parentElement));
    while (currentElement) {
        // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
        if (currentElement.matches ? currentElement.matches(selector) :
            ((/** @type {?} */ (currentElement))).msMatchesSelector(selector)) {
            return currentElement;
        }
        currentElement = currentElement.parentElement;
    }
    return null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
 * elements that are placed inside a `cdkDropListGroup` will be connected to each other
 * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
 * from `cdkDropList`.
 * @template T
 */
var CdkDropListGroup = /** @class */ (function () {
    function CdkDropListGroup() {
        /**
         * Drop lists registered inside the group.
         */
        this._items = new Set();
        this._disabled = false;
    }
    Object.defineProperty(CdkDropListGroup.prototype, "disabled", {
        /** Whether starting a dragging sequence from inside this group is disabled. */
        get: /**
         * Whether starting a dragging sequence from inside this group is disabled.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkDropListGroup.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._items.clear();
    };
    CdkDropListGroup.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[cdkDropListGroup]',
                    exportAs: 'cdkDropListGroup',
                },] },
    ];
    CdkDropListGroup.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListGroupDisabled',] }]
    };
    return CdkDropListGroup;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique ids for drop zones.
 * @type {?}
 */
var _uniqueIdCounter$1 = 0;
var ɵ0 = undefined;
// @breaking-change 8.0.0 `CdkDropList` implements `CdkDropListContainer` for backwards
// compatiblity. The implements clause, as well as all the methods that it enforces can
// be removed when `CdkDropListContainer` is deleted.
/**
 * Container that wraps a set of draggable items.
 * @template T
 */
var CdkDropList = /** @class */ (function () {
    function CdkDropList(element, dragDrop, _changeDetectorRef, _dir, _group) {
        var _this = this;
        this.element = element;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._group = _group;
        /**
         * Emits when the list has been destroyed.
         */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Other draggable containers that this container is connected to and into which the
         * container's items can be transferred. Can either be references to other drop containers,
         * or their unique IDs.
         */
        this.connectedTo = [];
        /**
         * Direction in which the list is oriented.
         */
        this.orientation = 'vertical';
        /**
         * Unique ID for the drop zone. Can be used as a reference
         * in the `connectedTo` of another `CdkDropList`.
         */
        this.id = "cdk-drop-list-" + _uniqueIdCounter$1++;
        this._disabled = false;
        this._sortingDisabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = (/**
         * @return {?}
         */
        function () { return true; });
        /**
         * Whether to auto-scroll the view when the user moves their pointer close to the edges.
         */
        this.autoScrollDisabled = false;
        /**
         * Emits when the user drops an item inside the container.
         */
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */
        this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this._dropListRef = dragDrop.createDropList(element);
        this._dropListRef.data = this;
        this._dropListRef.enterPredicate = (/**
         * @param {?} drag
         * @param {?} drop
         * @return {?}
         */
        function (drag, drop) {
            return _this.enterPredicate(drag.data, drop.data);
        });
        this._syncInputs(this._dropListRef);
        this._handleEvents(this._dropListRef);
        CdkDropList._dropLists.push(this);
        if (_group) {
            _group._items.add(this);
        }
    }
    Object.defineProperty(CdkDropList.prototype, "disabled", {
        /** Whether starting a dragging sequence from this container is disabled. */
        get: /**
         * Whether starting a dragging sequence from this container is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || (!!this._group && this._group.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkDropList.prototype, "sortingDisabled", {
        /** Whether sorting within this drop list is disabled. */
        get: /**
         * Whether sorting within this drop list is disabled.
         * @return {?}
         */
        function () { return this._sortingDisabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._sortingDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkDropList.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._draggables.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this._draggables), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed))
            .subscribe((/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            _this._dropListRef.withItems(items.map((/**
             * @param {?} drag
             * @return {?}
             */
            function (drag) { return drag._dragRef; })));
        }));
    };
    /**
     * @return {?}
     */
    CdkDropList.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var index = CdkDropList._dropLists.indexOf(this);
        if (index > -1) {
            CdkDropList._dropLists.splice(index, 1);
        }
        if (this._group) {
            this._group._items.delete(this);
        }
        this._dropListRef.dispose();
        this._destroyed.next();
        this._destroyed.complete();
    };
    /** Starts dragging an item. */
    /**
     * Starts dragging an item.
     * @return {?}
     */
    CdkDropList.prototype.start = /**
     * Starts dragging an item.
     * @return {?}
     */
    function () {
        this._dropListRef.start();
    };
    /**
     * Drops an item into this container.
     * @param item Item being dropped into the container.
     * @param currentIndex Index at which the item should be inserted.
     * @param previousContainer Container from which the item got dragged in.
     * @param isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     */
    /**
     * Drops an item into this container.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @return {?}
     */
    CdkDropList.prototype.drop = /**
     * Drops an item into this container.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @return {?}
     */
    function (item, currentIndex, previousContainer, isPointerOverContainer) {
        this._dropListRef.drop(item._dragRef, currentIndex, ((/** @type {?} */ (previousContainer)))._dropListRef, isPointerOverContainer);
    };
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param item Item that was moved into the container.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     */
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    CdkDropList.prototype.enter = /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    function (item, pointerX, pointerY) {
        this._dropListRef.enter(item._dragRef, pointerX, pointerY);
    };
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param item Item that was dragged out.
     */
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    CdkDropList.prototype.exit = /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    function (item) {
        this._dropListRef.exit(item._dragRef);
    };
    /**
     * Figures out the index of an item in the container.
     * @param item Item whose index should be determined.
     */
    /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    CdkDropList.prototype.getItemIndex = /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    function (item) {
        return this._dropListRef.getItemIndex(item._dragRef);
    };
    /**
     * Sorts an item inside the container based on its position.
     * @param item Item to be sorted.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @param pointerDelta Direction in which the pointer is moving along each axis.
     */
    /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    CdkDropList.prototype._sortItem = /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    function (item, pointerX, pointerY, pointerDelta) {
        return this._dropListRef._sortItem(item._dragRef, pointerX, pointerY, pointerDelta);
    };
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param item Drag item that is being moved.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    CdkDropList.prototype._getSiblingContainerFromPosition = /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    function (item, x, y) {
        /** @type {?} */
        var result = this._dropListRef._getSiblingContainerFromPosition(item._dragRef, x, y);
        return result ? result.data : null;
    };
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param x Pointer position along the X axis.
     * @param y Pointer position along the Y axis.
     */
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    CdkDropList.prototype._isOverContainer = /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    function (x, y) {
        return this._dropListRef._isOverContainer(x, y);
    };
    /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */
    /**
     * Syncs the inputs of the CdkDropList with the options of the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDropList.prototype._syncInputs = /**
     * Syncs the inputs of the CdkDropList with the options of the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        if (this._dir) {
            this._dir.change
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this._dir.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed))
                .subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return ref.withDirection(value); }));
        }
        ref.beforeStarted.subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var siblings = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(_this.connectedTo).map((/**
             * @param {?} drop
             * @return {?}
             */
            function (drop) {
                return typeof drop === 'string' ?
                    (/** @type {?} */ (CdkDropList._dropLists.find((/**
                     * @param {?} list
                     * @return {?}
                     */
                    function (list) { return list.id === drop; })))) : drop;
            }));
            if (_this._group) {
                _this._group._items.forEach((/**
                 * @param {?} drop
                 * @return {?}
                 */
                function (drop) {
                    if (siblings.indexOf(drop) === -1) {
                        siblings.push(drop);
                    }
                }));
            }
            ref.disabled = _this.disabled;
            ref.lockAxis = _this.lockAxis;
            ref.sortingDisabled = _this.sortingDisabled;
            ref.autoScrollDisabled = _this.autoScrollDisabled;
            ref
                .connectedTo(siblings.filter((/**
             * @param {?} drop
             * @return {?}
             */
            function (drop) { return drop && drop !== _this; })).map((/**
             * @param {?} list
             * @return {?}
             */
            function (list) { return list._dropListRef; })))
                .withOrientation(_this.orientation);
        }));
    };
    /** Handles events from the underlying DropListRef. */
    /**
     * Handles events from the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDropList.prototype._handleEvents = /**
     * Handles events from the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        ref.beforeStarted.subscribe((/**
         * @return {?}
         */
        function () {
            _this._changeDetectorRef.markForCheck();
        }));
        ref.entered.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.entered.emit({
                container: _this,
                item: event.item.data,
                currentIndex: event.currentIndex
            });
        }));
        ref.exited.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.exited.emit({
                container: _this,
                item: event.item.data
            });
            _this._changeDetectorRef.markForCheck();
        }));
        ref.sorted.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.sorted.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                container: _this,
                item: event.item.data
            });
        }));
        ref.dropped.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                item: event.item.data,
                isPointerOverContainer: event.isPointerOverContainer,
                distance: event.distance
            });
            // Mark for check since all of these events run outside of change
            // detection and we're not guaranteed for something else to have triggered it.
            _this._changeDetectorRef.markForCheck();
        }));
    };
    /**
     * Keeps track of the drop lists that are currently on the page.
     */
    CdkDropList._dropLists = [];
    CdkDropList.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[cdkDropList], cdk-drop-list',
                    exportAs: 'cdkDropList',
                    providers: [
                        // Prevent child drop lists from picking up the same group as their parent.
                        { provide: CdkDropListGroup, useValue: ɵ0 },
                        { provide: CDK_DROP_LIST_CONTAINER, useExisting: CdkDropList },
                    ],
                    host: {
                        'class': 'cdk-drop-list',
                        '[id]': 'id',
                        '[class.cdk-drop-list-disabled]': 'disabled',
                        '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
                        '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()',
                    }
                },] },
    ];
    /** @nocollapse */
    CdkDropList.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: DragDrop },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
        { type: CdkDropListGroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"] }] }
    ]; };
    CdkDropList.propDecorators = {
        _draggables: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])((/**
                     * @return {?}
                     */
                    function () { return CdkDrag; })), {
                        // Explicitly set to false since some of the logic below makes assumptions about it.
                        // The `.withItems` call below should be updated if we ever need to switch this to `true`.
                        descendants: false
                    },] }],
        connectedTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListConnectedTo',] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListData',] }],
        orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListOrientation',] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListLockAxis',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListDisabled',] }],
        sortingDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListSortingDisabled',] }],
        enterPredicate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListEnterPredicate',] }],
        autoScrollDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListAutoScrollDisabled',] }],
        dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDropListDropped',] }],
        entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDropListEntered',] }],
        exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDropListExited',] }],
        sorted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDropListSorted',] }]
    };
    return CdkDropList;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DragDropModule = /** @class */ (function () {
    function DragDropModule() {
    }
    DragDropModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    declarations: [
                        CdkDropList,
                        CdkDropListGroup,
                        CdkDrag,
                        CdkDragHandle,
                        CdkDragPreview,
                        CdkDragPlaceholder,
                    ],
                    exports: [
                        CdkDropList,
                        CdkDropListGroup,
                        CdkDrag,
                        CdkDragHandle,
                        CdkDragPreview,
                        CdkDragPlaceholder,
                    ],
                    providers: [
                        DragDrop,
                    ]
                },] },
    ];
    return DragDropModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=drag-drop.es5.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/customfields/customfields.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/customfields/customfields.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n<div class=\"container-fluid\">\r\n  <h4>Manage Custom Fields</h4>\r\n  <!-- <div class=\"col-md-8\" style=\"margin-top: 10px;\">\r\n  </div> -->\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"mat-tab\">\r\n            <mat-tab-group>\r\n              <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                  <mat-icon class=\"tab-icon\">work</mat-icon>\r\n                  Work Item\r\n                </ng-template>\r\n                <button type=\"button\" class=\"float-right mt-2\"  mat-button mat-raised-button color='primary'\r\n                (click)='openDialog(\"Add\")'>Add</button>\r\n                <h5 class=\"text-secondary\"> Work Items Custom Fields</h5>\r\n                <mat-table [dataSource]=\"dataSource\" matSort id=\"CloneTableRow\">\r\n\r\n                  <!-- ID Column -->\r\n                  <ng-container matColumnDef=\"id\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> ID</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let element\" data-label=\"id\"> {{element.id}} </mat-cell>\r\n                  </ng-container>\r\n\r\n                  <!-- Progress Column -->\r\n                  <ng-container matColumnDef=\"Field Label\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> Field Label </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let element\" data-label=\"Field Label\"> {{element.fieldlabel}}</mat-cell>\r\n                  </ng-container>\r\n\r\n                  <!-- Name Column -->\r\n                  <ng-container matColumnDef=\"Field Type\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>Field Type </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let element\" data-label=\"Field Type\"> {{element.fieldtype}} </mat-cell>\r\n                  </ng-container>\r\n\r\n                  <!-- Color Column -->\r\n                  <ng-container matColumnDef=\"Format\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> Format</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let element\" data-label=\"Format\"> {{element.format}} </mat-cell>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"Actions\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>Actions</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let element\" data-label=\"Actions\">\r\n                      <a><i class=\"fas fa-pencil-alt\" (click)='openDialogEdit(\"Edit\",element)'></i></a>\r\n                      <a><i class=\"far fa-copy\" (click)='onClone(element)'></i></a>\r\n                      <a><i class=\"fas fa-trash-alt\" (click)='confirmDelete(element)'></i></a>\r\n                    </mat-cell>\r\n                  </ng-container>\r\n\r\n                  <mat-header-row *matHeaderRowDef=\"displayedColumns sticky:true\"></mat-header-row>\r\n                  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n                </mat-table>\r\n\r\n                <!-- <mat-paginator [pageSizefieldForm]=\"[5, 10, 25, 100]\"></mat-paginator> -->\r\n              </mat-tab>\r\n              <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                  <mat-icon class=\"tab-icon\">supervised_user_circle</mat-icon>\r\n                  Customers\r\n                </ng-template>\r\n                <div class=\"float-right mt-2\">\r\n                  <button type=\"button\" class=\"mr-2\"  mat-button mat-raised-button color='primary'\r\n                  (click)='openDialog(\"Add\")'>Add</button>\r\n                  <button type=\"button\" mat-button mat-raised-button color='primary' [routerLink]=\"['../fieldtemplates']\">\r\n                    Manage Field Layout</button>\r\n                </div>\r\n                <h5 class=\"text-secondary\"> Customers Custom Fields</h5>\r\n                <mat-table [dataSource]=\"\" matSort id=\"CloneTableRow\">\r\n                  <!-- ID Column -->\r\n                  <ng-container matColumnDef=\"id\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> ID</mat-header-cell>\r\n                    <!-- <mat-cell *matCellDef=\"let element\" data-label=\"id\"> {{element.id}} </mat-cell> -->\r\n                    <h5 class=\"text-secondary text-center\"> There are no custom fields for Customers</h5>\r\n                  </ng-container>\r\n\r\n                  <!-- Progress Column -->\r\n                  <ng-container matColumnDef=\"Field Label\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> Field Label </mat-header-cell>\r\n                    <!-- <mat-cell *matCellDef=\"let element\" data-label=\"Field Label\"> {{element.fieldlabel}}</mat-cell> -->\r\n                  </ng-container>\r\n\r\n                  <!-- Name Column -->\r\n                  <ng-container matColumnDef=\"Field Type\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>Field Type </mat-header-cell>\r\n                    <!-- <mat-cell *matCellDef=\"let element\" data-label=\"Field Type\"> {{element.fieldtype}} </mat-cell> -->\r\n                  </ng-container>\r\n\r\n                  <!-- Color Column -->\r\n                  <ng-container matColumnDef=\"Format\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> Format</mat-header-cell>\r\n                    <!-- <mat-cell *matCellDef=\"let element\" data-label=\"Format\"> {{element.format}} </mat-cell> -->\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"Actions\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>Actions</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let element\" data-label=\"Actions\">\r\n                      <a><i class=\"fas fa-pencil-alt\" (click)='openDialogEdit(\"Edit\",element)'></i></a>\r\n                      <a><i class=\"far fa-copy\" (click)='onClone(element)'></i></a>\r\n                      <a><i class=\"fas fa-trash-alt\" (click)='confirmDelete(element)'></i></a>\r\n                    </mat-cell>\r\n                  </ng-container>\r\n\r\n                  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n                </mat-table>\r\n\r\n                <p class=\"text-info\">There are no custom fields for Customers.</p>\r\n              </mat-tab>\r\n              <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                  <mat-icon class=\"tab-icon\">contacts</mat-icon>\r\n                  Contacts\r\n                </ng-template>\r\n                <div class=\"float-right mt-2\">\r\n                  <button type=\"button\" class=\"mr-2\" mat-button mat-raised-button color='primary'>Add</button>\r\n                <button type=\"button\" mat-button mat-raised-button color='primary' [routerLink]=\"['../fieldtemplates']\">Manage\r\n                  Field Layout</button>\r\n                </div>\r\n                  <h5 class=\"text-secondary\"> Contacts Custom Fields</h5>\r\n                  <mat-table [dataSource]=\"\" matSort id=\"CloneTableRow\">\r\n                    <!-- ID Column -->\r\n                    <ng-container matColumnDef=\"id\">\r\n                      <mat-header-cell *matHeaderCellDef mat-sort-header> ID</mat-header-cell>\r\n                      <!-- <mat-cell *matCellDef=\"let element\" data-label=\"id\"> {{element.id}} </mat-cell> -->\r\n                      <h5 class=\"text-secondary text-center\"> There are no custom fields for Contacts</h5>\r\n                    </ng-container>\r\n\r\n                    <!-- Progress Column -->\r\n                    <ng-container matColumnDef=\"Field Label\">\r\n                      <mat-header-cell *matHeaderCellDef mat-sort-header> Field Label </mat-header-cell>\r\n                      <!-- <mat-cell *matCellDef=\"let element\" data-label=\"Field Label\"> {{element.fieldlabel}}</mat-cell> -->\r\n                    </ng-container>\r\n\r\n                    <!-- Name Column -->\r\n                    <ng-container matColumnDef=\"Field Type\">\r\n                      <mat-header-cell *matHeaderCellDef mat-sort-header>Field Type </mat-header-cell>\r\n                      <!-- <mat-cell *matCellDef=\"let element\" data-label=\"Field Type\"> {{element.fieldtype}} </mat-cell> -->\r\n                    </ng-container>\r\n\r\n                    <!-- Color Column -->\r\n                    <ng-container matColumnDef=\"Format\">\r\n                      <mat-header-cell *matHeaderCellDef mat-sort-header> Format</mat-header-cell>\r\n                      <!-- <mat-cell *matCellDef=\"let element\" data-label=\"Format\"> {{element.format}} </mat-cell> -->\r\n                    </ng-container>\r\n\r\n                    <ng-container matColumnDef=\"Actions\">\r\n                      <mat-header-cell *matHeaderCellDef mat-sort-header>Actions</mat-header-cell>\r\n                      <mat-cell *matCellDef=\"let element\" data-label=\"Actions\">\r\n                        <a><i class=\"fas fa-pencil-alt\" (click)='openDialogEdit(\"Edit\",element)'></i></a>\r\n                        <a><i class=\"far fa-copy\" (click)='onClone(element)'></i></a>\r\n                      <a><i class=\"fas fa-trash-alt\" (click)='confirmDelete(element)'></i></a>\r\n                    </mat-cell>\r\n                  </ng-container>\r\n\r\n                  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n                </mat-table>\r\n                <p class=\"text-info\">There are no custom fields for Contacts.</p>\r\n              </mat-tab>\r\n              <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                  <mat-icon>list</mat-icon>\r\n                  Projects\r\n                </ng-template>\r\n                <div class=\"float-right mt-2\">\r\n                  <button type=\"button\" class=\"mr-2\" mat-button mat-raised-button color='primary'>Add</button>\r\n                  <button type=\"button\" mat-button mat-raised-button color='primary' [routerLink]=\"['../fieldtemplates']\">Manage\r\n                    Field Layout</button>\r\n                </div>\r\n                  <h5 class=\"text-secondary\"> Projects Custom Fields</h5>\r\n                  <mat-table [dataSource]=\"\" matSort id=\"CloneTableRow\">\r\n                    <!-- ID Column -->\r\n                    <ng-container matColumnDef=\"id\">\r\n                      <mat-header-cell *matHeaderCellDef mat-sort-header> ID</mat-header-cell>\r\n                      <!-- <mat-cell *matCellDef=\"let element\" data-label=\"id\"> {{element.id}} </mat-cell> -->\r\n                      <h5 class=\"text-secondary text-center\"> There are no custom fields for Customers</h5>\r\n                    </ng-container>\r\n\r\n                    <!-- Progress Column -->\r\n                    <ng-container matColumnDef=\"Field Label\">\r\n                      <mat-header-cell *matHeaderCellDef mat-sort-header> Field Label </mat-header-cell>\r\n                      <!-- <mat-cell *matCellDef=\"let element\" data-label=\"Field Label\"> {{element.fieldlabel}}</mat-cell> -->\r\n                    </ng-container>\r\n\r\n                    <!-- Name Column -->\r\n                    <ng-container matColumnDef=\"Field Type\">\r\n                      <mat-header-cell *matHeaderCellDef mat-sort-header>Field Type </mat-header-cell>\r\n                      <!-- <mat-cell *matCellDef=\"let element\" data-label=\"Field Type\"> {{element.fieldtype}} </mat-cell> -->\r\n                    </ng-container>\r\n\r\n                    <!-- Color Column -->\r\n                    <ng-container matColumnDef=\"Format\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> Format</mat-header-cell>\r\n                    <!-- <mat-cell *matCellDef=\"let element\" data-label=\"Format\"> {{element.format}} </mat-cell> -->\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"Actions\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>Actions</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let element\" data-label=\"Actions\">\r\n                      <a><i class=\"fas fa-pencil-alt\" (click)='openDialogEdit(\"Edit\",element)'></i></a>\r\n                      <a><i class=\"far fa-copy\" (click)='onClone(element)'></i></a>\r\n                      <a><i class=\"fas fa-trash-alt\" (click)='confirmDelete(element)'></i></a>\r\n                    </mat-cell>\r\n                  </ng-container>\r\n\r\n                  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n                </mat-table>\r\n                <p class=\"text-info\">There are no custom fields for Projects.</p>\r\n              </mat-tab>\r\n              <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                  <mat-icon>bookmark</mat-icon>\r\n                  Work Logs\r\n                </ng-template>\r\n                <div class=\"float-right mt-2\">\r\n                  <button type=\"button\" class=\"mr-2\" mat-button mat-raised-button color='primary'>Add</button>\r\n                  <button type=\"button\" mat-button mat-raised-button color='primary' [routerLink]=\"['../fieldtemplates']\">Manage\r\n                    Field Layout</button>\r\n                </div>\r\n                  <h5 class=\"text-secondary\"> Work Logs Custom Fields</h5>\r\n                  <mat-table [dataSource]=\"\" matSort id=\"CloneTableRow\">\r\n                    <!-- ID Column -->\r\n                    <ng-container matColumnDef=\"id\">\r\n                      <mat-header-cell *matHeaderCellDef mat-sort-header> ID</mat-header-cell>\r\n                      <!-- <mat-cell *matCellDef=\"let element\" data-label=\"id\"> {{element.id}} </mat-cell> -->\r\n                      <h5 class=\"text-secondary text-center\"> There are no custom fields for Customers</h5>\r\n                    </ng-container>\r\n\r\n                    <!-- Progress Column -->\r\n                    <ng-container matColumnDef=\"Field Label\">\r\n                      <mat-header-cell *matHeaderCellDef mat-sort-header> Field Label </mat-header-cell>\r\n                      <!-- <mat-cell *matCellDef=\"let element\" data-label=\"Field Label\"> {{element.fieldlabel}}</mat-cell> -->\r\n                    </ng-container>\r\n\r\n                    <!-- Name Column -->\r\n                    <ng-container matColumnDef=\"Field Type\">\r\n                      <mat-header-cell *matHeaderCellDef mat-sort-header>Field Type </mat-header-cell>\r\n                      <!-- <mat-cell *matCellDef=\"let element\" data-label=\"Field Type\"> {{element.fieldtype}} </mat-cell> -->\r\n                    </ng-container>\r\n\r\n                    <!-- Color Column -->\r\n                    <ng-container matColumnDef=\"Format\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> Format</mat-header-cell>\r\n                    <!-- <mat-cell *matCellDef=\"let element\" data-label=\"Format\"> {{element.format}} </mat-cell> -->\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"Actions\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>Actions</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let element\" data-label=\"Actions\">\r\n                      <a><i class=\"fas fa-pencil-alt\" (click)='openDialogEdit(\"Edit\",element)'></i></a>\r\n                      <a><i class=\"far fa-copy\" (click)='onClone(element)'></i></a>\r\n                      <a><i class=\"fas fa-trash-alt\" (click)='confirmDelete(element)'></i></a>\r\n                    </mat-cell>\r\n                  </ng-container>\r\n\r\n                  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n                </mat-table>\r\n                <p class=\"text-info\">There are no custom fields for Work Logs.</p>\r\n              </mat-tab>\r\n            </mat-tab-group>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<p-confirmDialog [style]=\"{width: '50vw'}\"></p-confirmDialog>\r\n<ng-template #matdialog>\r\n  <div id=\"mat-header\">\r\n    <a><i matTooltip=\"Close\" class=\"pi pi-times float-right\" (click)=\"this.dialog.closeAll();\"\r\n      style=\"cursor: pointer; color: red;\"></i></a>\r\n      <h1 mat-dialog-title >{{dialogTitle}} Custom Fields</h1>\r\n  </div>\r\n  <mat-dialog-content>\r\n    <form class=\"example-container\" [formGroup]=\"fieldForm\" [style.fontSize.px]=\"getFontSize()\">\r\n      <mat-form-field [color]=\"color\">\r\n        <input matInput type=\"text\" placeholder=\"Field Label\" formControlName=\"fieldlabel\">\r\n        <mat-error *ngIf=\"fieldForm.get('fontSize')?.invalid\"></mat-error>\r\n      </mat-form-field>\r\n      <!-- &nbsp;&nbsp;&nbsp; -->\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Select Field Type\" formControlName=\"fieldtype\"\r\n          (ngModelChange)='onSelectedList(fieldForm.value.fieldtype)'>\r\n          <mat-option [value]='item.fieldName' *ngFor=\"let item of fieldCategory\">{{item.fieldName}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <div class=\"form-group\" *ngIf=\"listSelected\">\r\n        <mat-form-field [color]=\"fieldForm.value.listvalue\">\r\n          <mat-select placeholder=\"ListValue\" formControlName=\"listvalue\">\r\n            <mat-option [value]='item.id' *ngFor=\"let item of listCategory\">{{item.listName}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </form>\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions id=\"mat-footer\">\r\n    <button type='submit' mat-button mat-button mat-raised-button color='primary'\r\n      (click)='onFieldSave()'>Save</button>\r\n    <button mat-button mat-dialog-close>Cancel</button>\r\n  </mat-dialog-actions>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/fieldtemplates/fieldtemplates.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/fieldtemplates/fieldtemplates.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"mat-tab\">\r\n            <mat-tab-group>\r\n              <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                  <mat-icon class=\"tab-icon\">work</mat-icon>\r\n                  Work Item\r\n                </ng-template>\r\n                <button type=\"button\" class=\"float-right\" mat-button mat-raised-button color='primary'\r\n                  (click)='openDialog()'>Add</button>\r\n                <h5 class=\"text-secondary\"> Work Item Field Templates</h5>\r\n                <mat-table [dataSource]=\"dataSource\" matSort id=\"CloneTableRow\">\r\n                  <!-- Progress Column -->\r\n                  <ng-container matColumnDef=\"Field Template Name\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>Field Template Name</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let element\" data-label=\"Field Template Name\"> {{element.templateName}}\r\n                    </mat-cell>\r\n                  </ng-container>\r\n\r\n                  <!-- Name Column -->\r\n                  <ng-container matColumnDef=\"Description\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>Description</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let element\" data-label=\"Description\"> {{element.description}} </mat-cell>\r\n                  </ng-container>\r\n\r\n                  <!-- Color Column -->\r\n                  <ng-container matColumnDef=\"Is Active\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> Is Active</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let element\" data-label=\"Is Active\">\r\n                      <mat-checkbox [checked]=element.templateFlag></mat-checkbox>\r\n                    </mat-cell>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"Actions\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>Actions</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let element\" data-label=\"Actions\">\r\n                      <a><i class=\"fas fa-pencil-alt\" (click)='openDialogEdit(element)'></i></a>\r\n                      <a><i class=\"far fa-copy\" (click)='onClone(element)'></i></a>\r\n                      <a><i class=\"fas fa-trash-alt\" (click)='confirmDelete(element)'></i></a>\r\n                    </mat-cell>\r\n                  </ng-container>\r\n\r\n                  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n                </mat-table>\r\n                <!-- <mat-paginator [pageSizefieldForm]=\"[5, 10, 25, 100]\"></mat-paginator> -->\r\n              </mat-tab>\r\n              <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                  <mat-icon class=\"tab-icon\">supervised_user_circle</mat-icon>\r\n                  Projects, Customers, Contacts, Work Logs Field Templates\r\n                </ng-template>\r\n                <h4 class=\"text-secondary\">Projects, Customers, Contacts, Work Logs Field Templates</h4>\r\n              </mat-tab>\r\n            </mat-tab-group>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<p-confirmDialog [style]=\"{width: '50vw'}\"></p-confirmDialog>\r\n<ng-template #matdialog class=\"resp\">\r\n  <div class=\"res\">\r\n    <div id=\"mat-header\">\r\n      <a><i matTooltip=\"Close\" class=\"pi pi-times float-right\" (click)=\"this.dialog.closeAll();\"\r\n          style=\"cursor: pointer; color: red;\"></i></a>\r\n      <h1 mat-dialog-title>{{dialogTitle}} Custom Field Templates</h1>\r\n    </div>\r\n    <mat-dialog-content>\r\n      <div class=\"container\">\r\n\r\n          <form class=\"example-container\" [formGroup]=\"templateForm\" [style.fontSize.px]=\"getFontSize()\">\r\n            <div class=\"row col-sm-12 col-md-12 col-lg-12\">\r\n            <div class=\"col-lg-6 col-md-6\">\r\n              <mat-form-field [color]=\"color\">\r\n                <input matInput type=\"text\" placeholder=\"Field Label\" formControlName=\"templateName\">\r\n                <!-- <mat-error *ngIf=\"templateForm.get('templateName')\"></mat-error> -->\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6\">\r\n              <mat-form-field>\r\n                <input matInput type=\"text\" placeholder=\"Field Label\" formControlName=\"description\">\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          </form>\r\n\r\n        <div class=\"row col-sm-12 col-md-12 col-lg-12\">\r\n          <div class=\"col-lg-4 bg-info\">\r\n            <div class=\"example-container\">\r\n              <h6>Field List</h6>\r\n              <div cdkDropList #todoList=\"cdkDropList\" [cdkDropListData]=\"fieldsList\"\r\n                [cdkDropListConnectedTo]=\"[doneList]\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\r\n                <div class=\"example-box\" *ngFor=\"let item of fieldsList\" cdkDrag>{{item.fieldlabel}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-8 bg-default\">\r\n            <div class=\"example-container\">\r\n              <h6>Forms</h6>\r\n              <div cdkDropList #doneList=\"cdkDropList\" [cdkDropListData]=\"templateFieldsList\"\r\n                [cdkDropListConnectedTo]=\"[todoList]\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\r\n\r\n                <form [innerHTML]=\"inputpdf\">\r\n                    <!-- <span [innerHTML]=\"inputpdf\"></span> -->\r\n                  <div class=\"example-box\" *ngFor=\"let item of templateFieldsList\" cdkDrag >\r\n                      <!-- <p [innerHTML]=\"(item.attribute)\"></p> -->\r\n                      <!-- <div class=\"form-group\">\r\n                        <label class=\"text-info\">label</label>\r\n                        <div [innerHTML]=\"inputpdf\"></div>\r\n                      </div> -->\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </mat-dialog-content>\r\n    <mat-dialog-actions id=\"mat-footer\">\r\n      <button type='submit' mat-button mat-button mat-raised-button color='primary'\r\n        (click)='onFieldTemplateSave()'>Save</button>\r\n      <button mat-button mat-dialog-close>Cancel</button>\r\n    </mat-dialog-actions>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/lists/lists.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/lists/lists.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"container-fluid\">\r\n  <div class=\"maintitle\">\r\n   <h1 mat-dialog-title><b>Manage List</b></h1>\r\n </div>\r\n   <div class=\"container\">\r\n    <form>\r\n         <div class=\"row\">\r\n           <div class=\"col\">\r\n             <mat-card class=\"card1\">\r\n \r\n               <button type=\"button\"  mat-button  mat-button mat-raised-button color='primary' (click)='openAddListDialog(\"Add\")'>List</button>\r\n \r\n               <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n                 <ng-container matColumnDef=\"name\">\r\n                   <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n                   <mat-cell *matCellDef=\"let element; let i = index\" data-label=\"name\" style=\"cursor: pointer;\" (click)=\"changeTableContent(element, i)\"\r\n                   > {{element.name}} </mat-cell>\r\n                 </ng-container>\r\n \r\n                 <ng-container matColumnDef=\"action\">\r\n                   <mat-header-cell *matHeaderCellDef > Actions </mat-header-cell>\r\n                   <mat-cell *matCellDef=\"let details\" data-label=\"Actions\">\r\n                     <a><i class=\"fas fa-pencil-alt\" (click)='openListEdit(\"Edit\",details)'></i></a>\r\n                    <a><i class=\"fas fa-trash-alt\" (click)=\"confirmDelete(details)\" style=\"cursor: pointer;\"></i></a>\r\n                    <!-- <a><i class=\"fa fa-plus\"></i></a> -->\r\n                   </mat-cell>\r\n                 </ng-container>\r\n \r\n                 <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                 <mat-row  *matRowDef=\"let row; columns: displayedColumns; let i = index\" [ngClass]=\"{'activeCls': i == testId }\"></mat-row>\r\n               </mat-table>\r\n             </mat-card>\r\n             <p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n           </div>\r\n           <div class=\"col\">\r\n             <mat-card class=\"card2\">\r\n               <button type=\"button\"  mat-button  mat-button mat-raised-button color='primary' (click)='openListValueDialog(\"Add\")'>List Value</button>\r\n               <mat-table [dataSource]=\"selected_Array\" class=\"mat-elevation-z8\">\r\n \r\n \r\n                 <ng-container matColumnDef=\"name\">\r\n                   <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n                   <mat-cell *matCellDef=\"let element\"  data-label=\"Name\" style='cursor: pointer;'> {{element.Name}} </mat-cell>\r\n                 </ng-container>\r\n                 <!-- <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                 <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr> -->\r\n                 <ng-container matColumnDef=\"action\">\r\n                   <mat-header-cell *matHeaderCellDef> <b>Action</b> </mat-header-cell>\r\n                   <mat-cell *matCellDef=\"let details\" data-label=\"Actions\">\r\n \r\n                     <a><i class=\"fas fa-pencil-alt\"\r\n                       (click)='openListValueEdit(\"Edit\",details)'></i> </a>\r\n                    <a> <i class=\"fas fa-trash-alt\" (click)=\"confirmDelete1(details)\"></i></a>\r\n                   </mat-cell>\r\n                 </ng-container>\r\n                 <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                 <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n               </mat-table>\r\n             </mat-card>\r\n           </div>\r\n \r\n         </div>\r\n       </form>\r\n \r\n   </div>\r\n \r\n   <!--Adding List -->\r\n   <div class=\"container\">\r\n     <ng-template #matdialog5>\r\n \r\n       <!-- <div id=\"mat-header\">\r\n         <i matTooltip=\"Close\" class=\"pi pi-times float-right\" (click)=\"this.dialog.closeAll();\"\r\n           ></i>\r\n       <h5>{{dialogTitle}} List</h5>\r\n       </div> -->\r\n      <a> <i matTooltip=\"Close\" class=\"pi pi-times float-right\" (click)=\"this.dialog.closeAll();\"\r\n        ></i></a>\r\n       <h5><b>{{dialogTitle}} List </b></h5>\r\n \r\n       <div>\r\n \r\n         <form class=\"example-container\" [formGroup]=\"listForm\" (ngSubmit)='onListSave()'>\r\n \r\n           <mat-form-field>\r\n              <input matInput type=\"text\" placeholder=\"List name\" formControlName=\"name\">\r\n             <mat-error *ngIf=\"listForm.get('name').hasError('required') && !listForm.get('name').pristine\">Enter name</mat-error>\r\n           </mat-form-field>\r\n           &nbsp;&nbsp;&nbsp;\r\n \r\n           <div mat-dialog-actions>\r\n             <button [disabled]='!listForm.valid' mat-button  mat-button mat-raised-button color='primary'>Save</button>\r\n             <button mat-button mat-dialog-close>Cancel</button>\r\n           </div>\r\n         </form>\r\n       </div>\r\n     </ng-template>\r\n   </div>\r\n \r\n \r\n \r\n \r\n   <!--Adding List Value-->\r\n   <div class=\"container\">\r\n     <ng-template #matdialog6>\r\n \r\n       <a><i matTooltip=\"Close\" class=\"pi pi-times float-right\" (click)=\"this.dialog.closeAll();\"\r\n         style=\"cursor: pointer; color:black;\"></i></a>\r\n       <h5> <b>{{dialogTitle}} List Value</b></h5>\r\n \r\n       <div>\r\n         <form class=\"example-container\" [formGroup]=\"listForm\" (ngSubmit)='onListValueSave()'>\r\n \r\n           <mat-form-field>\r\n              <input matInput type=\"text\" placeholder=\"List Value\" formControlName=\"name\">\r\n             <label *ngIf=\"listForm.get('name').hasError('required') && !listForm.get('name').pristine\"></label>\r\n           </mat-form-field>\r\n           &nbsp;&nbsp;&nbsp;\r\n \r\n           <div mat-dialog-actions>\r\n             <button [disabled]='!listForm.valid'  mat-button  mat-button mat-raised-button color='primary'>Save</button>\r\n             <button mat-button mat-dialog-close>Cancel</button>\r\n           </div>\r\n         </form>\r\n       </div>\r\n     </ng-template>\r\n   </div>\r\n \r\n \r\n  <p-confirmDialog [style]=\"{ width: '50vw' }\"></p-confirmDialog>\r\n </div>\r\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/notification/notification.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/notification/notification.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <h5>Notifications</h5>\r\n  <!-- <div class=\"col-md-8\" style=\"margin-top: 10px;\">\r\n    <h3>Notifications</h3>\r\n  </div> -->\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n          <!-- <h4 class=\"text-secondary\"> Work Items Custom Fields</h4> -->\r\n          <!-- <button mat-raised-button (click)=\"openDialog()\">Add</button> -->\r\n      <div class=\"col-md-8\" style=\"margin-top: 10px;\">\r\n      </div>\r\n      <div class=\"example-header\">\r\n        <mat-form-field>\r\n          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n        </mat-form-field>\r\n        <button type=\"button\" class=\"float-right\"  mat-button mat-raised-button color='primary' (click)='openDialog(\"\")'>Add</button>\r\n      </div>\r\n      <mat-table [dataSource]=\"dataSource\" matSort id=\"CloneTableRow\">\r\n        <!-- ID Column -->\r\n        <ng-container matColumnDef=\"id\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header>\r\n            ID\r\n          </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\" data-label=\"id\">\r\n            {{element.id}}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <!-- Progress Column -->\r\n        <ng-container matColumnDef=\"Field Label\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header>\r\n            Name\r\n          </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\" data-label=\"Field Label\">\r\n            {{element.fieldlabel}}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"Field Type\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header>\r\n            Change Type\r\n          </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\" data-label=\"Field Type\">\r\n            {{element.fieldtype}}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <!-- Color Column -->\r\n        <ng-container matColumnDef=\"Format\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header>\r\n            Is Active\r\n          </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\" data-label=\"Format\">\r\n            {{element.format}}\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"Actions\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header>\r\n            Actions\r\n          </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\" data-label=\"Actions\">\r\n            <a>\r\n              <i class=\"fas fa-pencil-alt\" (click)='openDialogEdit(\"Edit\",element)'></i>\r\n            </a>\r\n            <a>\r\n              <i class=\"far fa-copy\" (click)='onClone(element)'></i>\r\n            </a>\r\n            <a>\r\n              <i class=\"fas fa-trash-alt\" (click)='confirmDelete(element)'></i>\r\n            </a>\r\n          </mat-cell>\r\n        </ng-container>\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns sticky:true\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n      </mat-table>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <app-footer></app-footer> -->\r\n<p-confirmDialog [style]=\"{width: '50vw'}\"></p-confirmDialog>\r\n  <ng-template #matdialog>\r\n    <div class=\"container-fluid\">\r\n\r\n        <i matTooltip=\"Close\" class=\"pi pi-times float-right\" (click)=\"this.dialog.closeAll();\" style=\"cursor: pointer; color: red;\"></i>\r\n        <h1 mat-dialog-title>\r\n          {{dialogTitle}} Notifications\r\n          <!-- {{data.name}} -->\r\n        </h1>\r\n        <div class=\"row\">\r\n        <mat-dialog-content>\r\n\r\n          <form class=\"example-container\" [formGroup]=\"fieldForm\" [style.fontSize.px]=\"getFontSize()\" (ngSubmit)='onFieldSave()'>\r\n            <mat-form-field [color]=\"color\">\r\n              <input matInput type=\"text\" placeholder=\"Notification Name\" formControlName=\"fieldlabel\">\r\n              <mat-error *ngIf=\"fieldForm.get('fontSize')?.invalid\"></mat-error>\r\n            </mat-form-field>&nbsp;&nbsp;&nbsp;\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Select Change Type\" formControlName=\"fieldtype\" >\r\n                <!-- (ngModelChange)='onSelectedList(fieldForm.value.fieldtype)' -->\r\n                <mat-option [value]='item.fieldName' *ngFor=\"let item of fieldCategory\">\r\n                  {{item.fieldName}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>&nbsp;&nbsp;&nbsp;\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Notification applies to\" formControlName=\"fieldtype\" >\r\n                <!-- (ngModelChange)='onSelectedList(fieldForm.value.fieldtype)' -->\r\n                <mat-option [value]='item.proName' *ngFor=\"let item of proCategory\">\r\n                  {{item.proName}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </form>\r\n            <h6>\r\n              When will this Notification run?\r\n            </h6>\r\n            <mat-radio-group aria-label=\"Select an option\">\r\n              <mat-radio-button value=\"1\">When any field values are updated</mat-radio-button>&nbsp;&nbsp;&nbsp;\r\n              <mat-radio-button value=\"2\">When specific field values are updated</mat-radio-button>\r\n            </mat-radio-group>\r\n\r\n            <div class=\"row\">\r\n              <ng-container  cdkDropListGroup >\r\n                <div class=\"container\" >\r\n              <div class=\"list\" cdkDropList (cdkDropListDropped)=\"drop($event)\" [cdkDropListData]=\"todo\" >\r\n                <div class=\"list-item\"  cdkDrag *ngFor=\"let item of todo\" >{{item}}</div>\r\n              </div>\r\n              </div>\r\n\r\n              <div class=\"container\" >\r\n              <div class=\"list\" cdkDropList (cdkDropListDropped)=\"drop($event)\" [cdkDropListData]=\"done\"  >\r\n                <div class=\"list-item\" cdkDrag *ngFor=\"let item of done\" >{{item}}</div>\r\n              </div>\r\n              </div>\r\n              </ng-container>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"container-fluid\">\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"Fields\" formControlName=\"fieldtype\" >\r\n                    <!-- (ngModelChange)='onSelectedList(fieldForm.value.fieldtype)' -->\r\n                    <mat-option [value]='item.fName' *ngFor=\"let item of fCategory\">\r\n                      {{item.fName}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n                <div class=\"container-fluid\">\r\n                  <mat-radio-group aria-label=\"Select an option\">\r\n                    <mat-radio-button value=\"1\">Change to anything</mat-radio-button>&nbsp;&nbsp;&nbsp;\r\n                    <mat-radio-button value=\"2\">Set To</mat-radio-button>&nbsp;&nbsp;&nbsp;\r\n                    <mat-radio-button value=\"3\">Doesn't change</mat-radio-button>&nbsp;&nbsp;&nbsp;\r\n                    <mat-radio-button value=\"4\">Changes from/to</mat-radio-button>\r\n                  </mat-radio-group>\r\n                </div>\r\n\r\n                <div class=\"container-fluid\">\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"Priority\" formControlName=\"fieldtype\" >\r\n                    <!-- (ngModelChange)='onSelectedList(fieldForm.value.fieldtype)' -->\r\n                    <mat-option [value]='item.pName' *ngFor=\"let item of pCategory\">\r\n                      {{item.pName}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"container-fluid\">\r\n              <button type='submit' mat-button mat-button mat-raised-button color='secondary'>Add Condition</button>\r\n            </div>\r\n            </div>\r\n              <div class=\"col-md-6\">\r\n                <mat-radio-group aria-label=\"Select an option\">\r\n                  <mat-radio-button value=\"1\">When any field values are updated</mat-radio-button>\r\n                  <mat-radio-button value=\"2\">When specific field values are updated</mat-radio-button>\r\n                </mat-radio-group>\r\n\r\n                <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n                  <!--- Note that these columns can be defined in any order.\r\n                        The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n                  <!-- Position Column -->\r\n                  <ng-container matColumnDef=\"position\">\r\n                    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Name Column -->\r\n                  <ng-container matColumnDef=\"field\">\r\n                    <th mat-header-cell *matHeaderCellDef> Field </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.field}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Weight Column -->\r\n                  <ng-container matColumnDef=\"description\">\r\n                    <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                  </ng-container>\r\n\r\n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumn\"></tr>\r\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumn;\"></tr>\r\n                </table>\r\n              </div>\r\n            </div>\r\n\r\n<div class=\"container-fluid\">\r\n  <h6>\r\n    Recipient\r\n  </h6>\r\n  <h6>\r\n    Enter the Names,Emails or Phone Number of the people that should be updated when this Notification is triggered\r\n  </h6>\r\n  <div class=\"container-fluid\">\r\n  <form class=\"example-container\" [formGroup]=\"fieldForm\" [style.fontSize.px]=\"getFontSize()\">\r\n    <mat-form-field [color]=\"color\">\r\n      <input matInput type=\"text\" placeholder=\"Add Recipient\" formControlName=\"fieldlabel\">\r\n      <mat-error *ngIf=\"fieldForm.get('fontSize')?.invalid\"></mat-error>\r\n    </mat-form-field>&nbsp;&nbsp;&nbsp;\r\n       <div class=\"form-group\"></div>\r\n  </form>\r\n</div>\r\n</div>\r\n<div class=\"container-fluid\">\r\n<mat-dialog-actions id=\"mat-footer\">\r\n  <button type='submit' [disabled]='fieldForm.invalid' mat-button mat-button mat-raised-button color='primary'\r\n    (click)='onFieldSave()'>Save</button>\r\n  <button mat-button mat-dialog-close>Cancel</button>\r\n</mat-dialog-actions>\r\n</div>\r\n\r\n</mat-dialog-content>\r\n</div>\r\n\r\n<!-- [disabled]='fieldForm.invalid' -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/security-roles/administrator/administrator.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/security-roles/administrator/administrator.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Angular Material Tree-Node Start -->\r\n\r\n<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\r\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\r\n    <button mat-icon-button disabled></button>\r\n    <mat-checkbox class=\"checklist-leaf-node\"\r\n                  [checked]=\"checklistSelection.isSelected(node)\"\r\n                  (change)=\"checklistSelection.toggle(node);\">{{node.item}}</mat-checkbox>\r\n  </mat-tree-node>\r\n\r\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasNoContent\" matTreeNodePadding>\r\n    <button mat-icon-button disabled></button>\r\n    <mat-form-field>\r\n      <input matInput #itemValue placeholder=\"New item...\">\r\n    </mat-form-field>\r\n    <button mat-button (click)=\"saveNode(node, itemValue.value)\">Save</button>\r\n  </mat-tree-node>\r\n\r\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\r\n    <button mat-icon-button matTreeNodeToggle\r\n            [attr.aria-label]=\"'toggle ' + node.filename\">\r\n      <mat-icon class=\"mat-icon-rtl-mirror\">\r\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n      </mat-icon>\r\n    </button>\r\n    <mat-checkbox [checked]=\"descendantsAllSelected(node)\"\r\n                  [indeterminate]=\"descendantsPartiallySelected(node)\"\r\n                  (change)=\"todoItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\r\n    <button mat-icon-button (click)=\"addNewItem(node)\"><mat-icon>add</mat-icon></button>\r\n  </mat-tree-node>\r\n</mat-tree>\r\n\r\n<!-- Angular Material Tree-Node End -->\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/security-roles/projectprivilages1/projectprivilages1.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/security-roles/projectprivilages1/projectprivilages1.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Angular Material Tree-Node Start -->\r\n\r\n\r\n<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\r\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\r\n    <button mat-icon-button disabled></button>\r\n    <mat-checkbox class=\"checklist-leaf-node\"\r\n                  [checked]=\"checklistSelection.isSelected(node)\"\r\n                  (change)=\"checklistSelection.toggle(node);\">{{node.item}}</mat-checkbox>\r\n  </mat-tree-node>\r\n\r\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasNoContent\" matTreeNodePadding>\r\n    <button mat-icon-button disabled></button>\r\n    <mat-form-field>\r\n      <input matInput #itemValue placeholder=\"New item...\">\r\n    </mat-form-field>\r\n    <button mat-button (click)=\"saveNode(node, itemValue.value)\">Save</button>\r\n  </mat-tree-node>\r\n\r\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\r\n    <button mat-icon-button matTreeNodeToggle\r\n            [attr.aria-label]=\"'toggle ' + node.filename\">\r\n      <mat-icon class=\"mat-icon-rtl-mirror\">\r\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n      </mat-icon>\r\n    </button>\r\n    <mat-checkbox [checked]=\"descendantsAllSelected(node)\"\r\n                  [indeterminate]=\"descendantsPartiallySelected(node)\"\r\n                  (change)=\"todoItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\r\n    <button mat-icon-button (click)=\"addNewItem(node)\"><mat-icon>add</mat-icon></button>\r\n  </mat-tree-node>\r\n</mat-tree>\r\n\r\n\r\n<!-- Angular Material Tree-Node End -->\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/security-roles/projectprivilages2/projectprivilages2.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/security-roles/projectprivilages2/projectprivilages2.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Angular Material Tree-Node Start -->\r\n\r\n<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\r\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\r\n    <button mat-icon-button disabled></button>\r\n    <mat-checkbox class=\"checklist-leaf-node\"\r\n                  [checked]=\"checklistSelection.isSelected(node)\"\r\n                  (change)=\"checklistSelection.toggle(node);\">{{node.item}}</mat-checkbox>\r\n  </mat-tree-node>\r\n\r\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasNoContent\" matTreeNodePadding>\r\n    <button mat-icon-button disabled></button>\r\n    <mat-form-field>\r\n      <input matInput #itemValue placeholder=\"New item...\">\r\n    </mat-form-field>\r\n    <button mat-button (click)=\"saveNode(node, itemValue.value)\">Save</button>\r\n  </mat-tree-node>\r\n\r\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\r\n    <button mat-icon-button matTreeNodeToggle\r\n            [attr.aria-label]=\"'toggle ' + node.filename\">\r\n      <mat-icon class=\"mat-icon-rtl-mirror\">\r\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n      </mat-icon>\r\n    </button>\r\n    <mat-checkbox [checked]=\"descendantsAllSelected(node)\"\r\n                  [indeterminate]=\"descendantsPartiallySelected(node)\"\r\n                  (change)=\"todoItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\r\n    <button mat-icon-button (click)=\"addNewItem(node)\"><mat-icon>add</mat-icon></button>\r\n  </mat-tree-node>\r\n</mat-tree>\r\n\r\n<!-- Angular Material Tree-Node End -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/security-roles/reports/reports.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/security-roles/reports/reports.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Angular Material Tree-Node Start -->\r\n\r\n<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\r\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\r\n    <button mat-icon-button disabled></button>\r\n    <mat-checkbox class=\"checklist-leaf-node\"\r\n                  [checked]=\"checklistSelection.isSelected(node)\"\r\n                  (change)=\"checklistSelection.toggle(node);\">{{node.item}}</mat-checkbox>\r\n  </mat-tree-node>\r\n\r\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasNoContent\" matTreeNodePadding>\r\n    <button mat-icon-button disabled></button>\r\n    <mat-form-field>\r\n      <input matInput #itemValue placeholder=\"New item...\">\r\n    </mat-form-field>\r\n    <button mat-button (click)=\"saveNode(node, itemValue.value)\">Save</button>\r\n  </mat-tree-node>\r\n\r\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\r\n    <button mat-icon-button matTreeNodeToggle\r\n            [attr.aria-label]=\"'toggle ' + node.filename\">\r\n      <mat-icon class=\"mat-icon-rtl-mirror\">\r\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n      </mat-icon>\r\n    </button>\r\n    <mat-checkbox [checked]=\"descendantsAllSelected(node)\"\r\n                  [indeterminate]=\"descendantsPartiallySelected(node)\"\r\n                  (change)=\"todoItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\r\n    <button mat-icon-button (click)=\"addNewItem(node)\"><mat-icon>add</mat-icon></button>\r\n  </mat-tree-node>\r\n</mat-tree>\r\n\r\n<!-- Angular Material Tree-Node End -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/security-roles/security-roles.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/security-roles/security-roles.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n<div class=\"container-fluid\">\r\n  <h4>Security Roles</h4>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"mat-tab\">\r\n            <mat-tab-group>\r\n              <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                  <mat-icon class=\"tab-icon\">info</mat-icon>\r\n                 Role Info\r\n                </ng-template>\r\n                <button type=\"button\" class=\"float-right mt-2\" mat-button mat-raised-button color='primary'\r\n                  (click)='openDialog()'>Add</button>\r\n                <h5 class=\"text-secondary\">Security Roles</h5>\r\n                <mat-table [dataSource]=\"dataSource\" matSort id=\"CloneTableRow\" class=\"table scrollbar scrollbar-ripe-malinka\">\r\n\r\n                  <!-- ID Column -->\r\n                  <ng-container matColumnDef=\"Id\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> Id </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let role\" data-label=\"id\"> {{role.id}} </mat-cell>\r\n                  </ng-container>\r\n\r\n                  <!-- Name Column -->\r\n                  <ng-container matColumnDef=\"Name\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let role\" data-label=\"Name\"> {{role.name}}</mat-cell>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"Actions\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> Actions </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let role\" data-label=\"Actions\">\r\n                      <a><i class=\"fas fa-pencil-alt\" (click)='openDialogEdit(role)'></i></a>\r\n                      <a><i class=\"far fa-copy\" (click)='onClone(role)'></i></a>\r\n                      <a><i class=\"fas fa-trash-alt\" (click)='confirmDelete(role)'></i></a>\r\n                    </mat-cell>\r\n                  </ng-container>\r\n\r\n                  <mat-header-row *matHeaderRowDef=\"displayedColumns sticky:true\"></mat-header-row>\r\n                  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n                </mat-table>\r\n                <!-- <mat-paginator [pageSizefieldForm]=\"[5, 10, 25, 100]\"></mat-paginator> -->\r\n              </mat-tab>\r\n\r\n              <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                  <mat-icon class=\"tab-icon\">file_copy</mat-icon>\r\n                  Project Privilages\r\n                </ng-template>\r\n             <!-- Angular Material Tree-Node Start -->\r\n                <div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-6 border bg-secondary\">\r\n                      <p><b>These Privilages</b></p>\r\n\r\n                      <mat-dialog-content class=\"scrollbar scrollbar-ripe-malinka\">\r\n                      <app-projectprivilages1></app-projectprivilages1>\r\n                      </mat-dialog-content>\r\n\r\n                    </div>\r\n                    <div class=\"col-6 border bg-secondary\" >\r\n                      <p><b>For These Projects</b></p>\r\n\r\n                      <mat-dialog-content class=\"scrollbar scrollbar-ripe-malinka\">\r\n                      <app-projectprivilages2></app-projectprivilages2>\r\n                      </mat-dialog-content>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n               <!-- Angular Material Tree-Node End -->\r\n              </mat-tab>\r\n\r\n              <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                  <mat-icon class=\"tab-icon\">accessibility</mat-icon>\r\n                  Administrator\r\n                </ng-template>\r\n                <!-- Angular Material Tree-Node Start -->\r\n                <div class=\"border bg-secondary\">\r\n                <p><b>Apply These Administrative Privilages</b></p>\r\n              <mat-dialog-content class=\"scrollbar scrollbar-ripe-malinka\">\r\n                <app-administrator></app-administrator>\r\n              </mat-dialog-content>\r\n                </div>\r\n                <!-- Angular Material Tree-Node End -->\r\n              </mat-tab>\r\n\r\n              <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                  <mat-icon class=\"tab-icon\">report</mat-icon>\r\n                  Reports\r\n                </ng-template>\r\n               <!-- Angular Material Tree-Node Start -->\r\n                <div class=\"border bg-secondary\">\r\n              <p><b>Apply These Report Privilages</b></p>\r\n              <mat-dialog-content>\r\n              <app-reports></app-reports>\r\n              </mat-dialog-content>\r\n                </div>\r\n                 <!-- Angular Material Tree-Node End -->\r\n              </mat-tab>\r\n\r\n              <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                  <mat-icon class=\"tab-icon\">text_fields</mat-icon>\r\n                  Field Level\r\n                </ng-template>\r\n\r\n                <mat-tab-group>\r\n                  <mat-tab>\r\n                    <ng-template mat-tab-label>\r\n                      <mat-icon class=\"tab-icon\">work</mat-icon>\r\n                      Work Items\r\n                    </ng-template>\r\n              <!-- Angular Material Tree-Node Start -->\r\n                    <div class=\"border bg-secondary\">\r\n              <mat-dialog-content>\r\n              <app-workitems></app-workitems>\r\n              </mat-dialog-content>\r\n                    </div>\r\n              <!-- Angular Material Tree-Node End -->\r\n                  </mat-tab>\r\n                  <mat-tab>\r\n                    <ng-template mat-tab-label>\r\n                      <mat-icon class=\"tab-icon\">payment</mat-icon>\r\n                      Tickets\r\n                    </ng-template>\r\n                    <h1>Six</h1>\r\n                  </mat-tab>\r\n                </mat-tab-group>\r\n              </mat-tab>\r\n              </mat-tab-group>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<p-confirmDialog [style]=\"{width: '50vw'}\"></p-confirmDialog>\r\n<ng-template #matdialog>\r\n  <div id=\"mat-header\">\r\n    <a><i matTooltip=\"Close\" class=\"pi pi-times float-right\" (click)=\"this.dialog.closeAll();\"\r\n        style=\"cursor: pointer; color: red;\"></i></a>\r\n    <h1 mat-dialog-title>{{dialogTitle}} Security Roles</h1>\r\n  </div>\r\n  <mat-dialog-content>\r\n    <div class=\"container\">\r\n      <form class=\"example-container\" [formGroup]=\"secuForm\" [style.fontSize.px]=\"getFontSize()\">\r\n\r\n      <mat-form-field [color]=\"color\">\r\n        <input matInput type=\"text\" placeholder=\"Name\" formControlName=\"name\">\r\n        <mat-error *ngIf=\"secuForm.get('fontSize')?.invalid\"></mat-error>\r\n      </mat-form-field>\r\n      </form>\r\n      </div>\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions id=\"mat-footer\">\r\n    <button class=\"float-right\" type='submit' mat-button mat-button mat-raised-button color='primary'\r\n    (click)='onFieldTemplateSave()'>Save</button>\r\n  </mat-dialog-actions>\r\n</ng-template>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/security-roles/workitems/workitems.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/security-roles/workitems/workitems.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Angular Material Tree-Node Start -->\r\n\r\n<mat-toolbar>\r\n  <div class=\"ui-toolbar-group-left\">\r\n  <button mat-raised-button color=\"primary\" (click)=\"checkAll()\">Check All</button>&nbsp;&nbsp;\r\n  <button mat-raised-button color=\"primary\" (click)=\"uncheckAll()\">Uncheck All</button>\r\n </div>\r\n</mat-toolbar>\r\n\r\n<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\r\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\r\n    <button mat-icon-button disabled></button>\r\n    <mat-checkbox class=\"checklist-leaf-node\"\r\n                  [checked]=\"checklistSelection.isSelected(node)\"\r\n                  (change)=\"checklistSelection.toggle(node);\">{{node.item}}</mat-checkbox>\r\n  </mat-tree-node>\r\n\r\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasNoContent\" matTreeNodePadding>\r\n    <button mat-icon-button disabled></button>\r\n    <mat-form-field>\r\n      <input matInput #itemValue placeholder=\"New item...\">\r\n    </mat-form-field>\r\n    <button mat-button (click)=\"saveNode(node, itemValue.value)\">Save</button>\r\n  </mat-tree-node>\r\n\r\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\r\n    <button mat-icon-button matTreeNodeToggle\r\n            [attr.aria-label]=\"'toggle ' + node.filename\">\r\n      <mat-icon class=\"mat-icon-rtl-mirror\">\r\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n      </mat-icon>\r\n    </button>\r\n    <mat-checkbox [checked]=\"descendantsAllSelected(node)\"\r\n                  [indeterminate]=\"descendantsPartiallySelected(node)\"\r\n                  (change)=\"todoItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\r\n    <button mat-icon-button (click)=\"addNewItem(node)\"><mat-icon>add</mat-icon></button>\r\n  </mat-tree-node>\r\n</mat-tree>\r\n\r\n<!-- Angular Material Tree-Node End -->\r\n\r\n");

/***/ }),

/***/ "./src/app/projectdashboard-layout/components/customfields/customfields.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/projectdashboard-layout/components/customfields/customfields.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("i {\n  padding: 6px; }\n\ntable {\n  width: 100%; }\n\n.tab-icon {\n  margin-right: 8px; }\n\nth {\n  font-weight: bold; }\n\nmat-cell:last-of-type, mat-footer-cell:last-of-type, mat-header-cell:last-of-type {\n  padding-right: 0px; }\n\n@media screen and (max-width: 960px) {\n  mat-cell:first-of-type, mat-footer-cell:first-of-type, mat-header-cell:first-of-type {\n    padding-left: 0px; }\n  .mat-table {\n    border: 0;\n    vertical-align: middle; }\n  mat-footer-row, mat-header-row, mat-row {\n    display: none; }\n  .mat-table caption {\n    font-size: 1em; }\n  /*  Enable this to hide header\r\n  .mat-table .mat-header-cell {\r\n\r\n    border: 10px solid;\r\n    clip: rect(0 0 0 0);\r\n    height: 1px;\r\n    margin: -1px;\r\n    padding: 0;\r\n    position: absolute;\r\n    width: 1px;\r\n  }\r\n  */\n  .mat-table .mat-row {\n    border-bottom: 5px solid #ddd;\n    display: block;\n    padding: 10px; }\n  /*\r\n  .mat-table .mat-row:nth-child(even) {background: #CCC}\r\n  .mat-table .mat-row:nth-child(odd) {background: #FFF}\r\n  */\n  .mat-table .mat-cell {\n    border-bottom: 1px solid #ddd;\n    display: block;\n    font-size: 1em;\n    text-align: right;\n    font-weight: bold;\n    height: 30px;\n    margin-bottom: 4%; }\n  .mat-table .mat-cell:before {\n    /*\r\n    * aria-label has no advantage, it won't be read inside a table\r\n    content: attr(aria-label);\r\n    */\n    content: attr(data-label);\n    float: left;\n    text-transform: uppercase;\n    font-weight: normal;\n    font-size: .85em; }\n  .mat-table .mat-cell:last-child {\n    border-bottom: 0; }\n  .mat-table .mat-cell:first-child {\n    margin-top: 4%; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdGRhc2hib2FyZC1sYXlvdXQvY29tcG9uZW50cy9jdXN0b21maWVsZHMvQzpcXFVzZXJzXFxhc3Vua29wcGFkXFxEZXNrdG9wXFxuZXd6b29tXFx6b29tdGVhbXMtd2ViLW5nL3NyY1xcYXBwXFxwcm9qZWN0ZGFzaGJvYXJkLWxheW91dFxcY29tcG9uZW50c1xcY3VzdG9tZmllbGRzXFxjdXN0b21maWVsZHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2plY3RkYXNoYm9hcmQtbGF5b3V0L2NvbXBvbmVudHMvY3VzdG9tZmllbGRzL2N1c3RvbWZpZWxkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNBLFlBQVksRUFBQTs7QUFHWjtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNHLGtCQUFrQixFQUFBOztBQUdyQjtFQUNFO0lBQ0csaUJBQWlCLEVBQUE7RUFFcEI7SUFDRSxTQUFTO0lBQ1Qsc0JBQ0YsRUFBQTtFQUNBO0lBQ0UsYUFBYSxFQUFBO0VBRWY7SUFDRSxjQUFjLEVBQUE7RUFHaEI7Ozs7Ozs7Ozs7O0dDR0M7RURTRDtJQUNFLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsYUFBYSxFQUFBO0VBRWY7OztHQ05DO0VEVUQ7SUFDRSw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVc7SUFDWCxpQkFBaUIsRUFBQTtFQUVuQjtJQUNFOzs7S0NQQztJRFdELHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUVuQixnQkFBZ0IsRUFBQTtFQUVsQjtJQUNFLGdCQUFnQixFQUFBO0VBRWhCO0lBQ0EsY0FBYyxFQUFBLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0ZGFzaGJvYXJkLWxheW91dC9jb21wb25lbnRzL2N1c3RvbWZpZWxkcy9jdXN0b21maWVsZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaXtcclxucGFkZGluZzogNnB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRhYi1pY29uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG50aHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5tYXQtY2VsbDpsYXN0LW9mLXR5cGUsIG1hdC1mb290ZXItY2VsbDpsYXN0LW9mLXR5cGUsIG1hdC1oZWFkZXItY2VsbDpsYXN0LW9mLXR5cGUge1xyXG4gICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgbWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSwgbWF0LWZvb3Rlci1jZWxsOmZpcnN0LW9mLXR5cGUsIG1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcclxuICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG4gIC5tYXQtdGFibGUge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZVxyXG4gIH1cclxuICBtYXQtZm9vdGVyLXJvdywgbWF0LWhlYWRlci1yb3csIG1hdC1yb3cge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLm1hdC10YWJsZSBjYXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gIH1cclxuXHJcbiAgLyogIEVuYWJsZSB0aGlzIHRvIGhpZGUgaGVhZGVyXHJcbiAgLm1hdC10YWJsZSAubWF0LWhlYWRlci1jZWxsIHtcclxuXHJcbiAgICBib3JkZXI6IDEwcHggc29saWQ7XHJcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBtYXJnaW46IC0xcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDFweDtcclxuICB9XHJcbiAgKi9cclxuICAubWF0LXRhYmxlIC5tYXQtcm93IHtcclxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZGRkO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICAvKlxyXG4gIC5tYXQtdGFibGUgLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kOiAjQ0NDfVxyXG4gIC5tYXQtdGFibGUgLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCkge2JhY2tncm91bmQ6ICNGRkZ9XHJcbiAgKi9cclxuICAubWF0LXRhYmxlIC5tYXQtY2VsbCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgaGVpZ2h0OjMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICB9XHJcbiAgLm1hdC10YWJsZSAubWF0LWNlbGw6YmVmb3JlIHtcclxuICAgIC8qXHJcbiAgICAqIGFyaWEtbGFiZWwgaGFzIG5vIGFkdmFudGFnZSwgaXQgd29uJ3QgYmUgcmVhZCBpbnNpZGUgYSB0YWJsZVxyXG4gICAgY29udGVudDogYXR0cihhcmlhLWxhYmVsKTtcclxuICAgICovXHJcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHJcbiAgICBmb250LXNpemU6IC44NWVtO1xyXG4gIH1cclxuICAubWF0LXRhYmxlIC5tYXQtY2VsbDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgfVxyXG4gICAgLm1hdC10YWJsZSAubWF0LWNlbGw6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgfVxyXG59XHJcbiIsImkge1xuICBwYWRkaW5nOiA2cHg7IH1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTsgfVxuXG4udGFiLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDhweDsgfVxuXG50aCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbm1hdC1jZWxsOmxhc3Qtb2YtdHlwZSwgbWF0LWZvb3Rlci1jZWxsOmxhc3Qtb2YtdHlwZSwgbWF0LWhlYWRlci1jZWxsOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICBtYXQtY2VsbDpmaXJzdC1vZi10eXBlLCBtYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSwgbWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctbGVmdDogMHB4OyB9XG4gIC5tYXQtdGFibGUge1xuICAgIGJvcmRlcjogMDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG4gIG1hdC1mb290ZXItcm93LCBtYXQtaGVhZGVyLXJvdywgbWF0LXJvdyB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAubWF0LXRhYmxlIGNhcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMWVtOyB9XG4gIC8qICBFbmFibGUgdGhpcyB0byBoaWRlIGhlYWRlclxyXG4gIC5tYXQtdGFibGUgLm1hdC1oZWFkZXItY2VsbCB7XHJcblxyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkO1xyXG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgbWFyZ2luOiAtMXB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgfVxyXG4gICovXG4gIC5tYXQtdGFibGUgLm1hdC1yb3cge1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZGRkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHg7IH1cbiAgLypcclxuICAubWF0LXRhYmxlIC5tYXQtcm93Om50aC1jaGlsZChldmVuKSB7YmFja2dyb3VuZDogI0NDQ31cclxuICAubWF0LXRhYmxlIC5tYXQtcm93Om50aC1jaGlsZChvZGQpIHtiYWNrZ3JvdW5kOiAjRkZGfVxyXG4gICovXG4gIC5tYXQtdGFibGUgLm1hdC1jZWxsIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNCU7IH1cbiAgLm1hdC10YWJsZSAubWF0LWNlbGw6YmVmb3JlIHtcbiAgICAvKlxyXG4gICAgKiBhcmlhLWxhYmVsIGhhcyBubyBhZHZhbnRhZ2UsIGl0IHdvbid0IGJlIHJlYWQgaW5zaWRlIGEgdGFibGVcclxuICAgIGNvbnRlbnQ6IGF0dHIoYXJpYS1sYWJlbCk7XHJcbiAgICAqL1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogLjg1ZW07IH1cbiAgLm1hdC10YWJsZSAubWF0LWNlbGw6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMDsgfVxuICAubWF0LXRhYmxlIC5tYXQtY2VsbDpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXRvcDogNCU7IH0gfVxuIl19 */");

/***/ }),

/***/ "./src/app/projectdashboard-layout/components/customfields/customfields.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/projectdashboard-layout/components/customfields/customfields.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CustomfieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomfieldsComponent", function() { return CustomfieldsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/local-storage.service */ "./src/app/shared/local-storage.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_8__);









var CustomfieldsComponent = /** @class */ (function () {
    function CustomfieldsComponent(localStorageService, router, dialog, fb, confirmationService, messageService, masterService) {
        this.localStorageService = localStorageService;
        this.router = router;
        this.dialog = dialog;
        this.fb = fb;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.masterService = masterService;
        this.listCategory = [
            { id: 1, listName: 'Priority Types', listValue: ['Low', 'Medium', 'High'] },
            { id: 2, listName: 'Status Types', listValue: ['Open', 'On Hold', 'In progress', 'Re-Opened', 'Testing', 'Closed'] },
            { id: 3, listName: 'Severity Types', listValue: ['No Impact', 'Low Impact', 'Medium Impact', 'High Impact', 'Critical'] },
            { id: 4, listName: 'Release Types', listValue: ['\'product\':{\'Concept\',\'In Progress\', \'Canceled\'}', '\'Version\':{\'Planning\',\'Design\',\'Development & Test\',\'Released\',\'Canceled\'}', '\'Sprint\':{\'Planned\',\'In Progress\',\'Completed\'}'] }
        ];
        this.fieldData = [
            {
                id: 1, fieldlabel: 'Item Type', fieldtype: 'List', format: '', attribute: "<input type=\"text\" placeholder=\"\" name=\"\">",
                listid: this.listCategory
            },
            { id: 2, fieldlabel: 'Test Iteration', fieldtype: 'Number', format: 'Integer', attribute: "<input type=\"text\" placeholder=\"\" name=\"\">" },
            { id: 3, fieldlabel: 'Build', fieldtype: 'Checkbox', format: '', attribute: "<input type=\"text\" placeholder=\"\" name=\"\">" },
        ];
        this.data = Object.assign(this.fieldData);
        this.displayedColumns = ['id', 'Field Label', 'Field Type', 'Format', 'Actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.fieldData);
        this.selectDatasource = this.fieldData;
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.fieldForm = this.fb.group({
            id: [],
            fieldtype: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fieldlabel: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[_A-z0-9]*((-| )*[_A-z0-9])*$')]],
            listvalue: []
        });
    }
    CustomfieldsComponent.prototype.ngOnInit = function () {
        this.fieldCategory = [
            { id: 1, fieldName: 'Number', fieldFormat: '', List: [] },
            { id: 2, fieldName: 'List', fieldFormat: '', List: this.listCategory },
            { id: 3, fieldName: 'Text', fieldFormat: '', List: [] },
            { id: 4, fieldName: 'Checkbox', fieldFormat: '', List: [] },
        ];
    };
    CustomfieldsComponent.prototype.openDialog = function (passedTitle) {
        this.dialogTitle = passedTitle;
        var dialogRef = this.dialog.open(this.matdialog, {
            disableClose: true
        });
        this.fieldForm.reset();
        this._subscriptions.add(dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        }));
    };
    CustomfieldsComponent.prototype.openDialogEdit = function (passedTitle, formData) {
        this.dialogTitle = passedTitle;
        // console.log(formData);
        this.fieldForm.patchValue({
            id: formData.id,
            fieldtype: formData.fieldtype,
            fieldlabel: formData.fieldlabel,
            listvalue: formData.listvalue
        });
        this.dialog.open(this.matdialog, {
            disableClose: true
            // height: '400px',
            // width: '600px',
        });
    };
    CustomfieldsComponent.prototype.onFieldSave = function () {
        var test = this.masterService.getFormErrorMessage(this.fieldForm, this.fieldForm);
        if (test !== undefined) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error Message',
                detail: test
            });
        }
        else {
            if (this.fieldForm.value.id === null) {
                var req = {
                    id: this.fieldData.length + 1,
                    fieldlabel: this.fieldForm.value.fieldlabel,
                    fieldtype: this.fieldForm.value.fieldtype,
                    listvalue: this.fieldForm.value.listvalue,
                    format: '',
                };
                this.data.push(req);
                this.messageService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'Added Successfully'
                });
            }
            else {
                for (var i = 0; i < this.data.length; i++) {
                    if (this.data[i].id === this.fieldForm.value.id) {
                        this.data[i].id = this.fieldForm.value.id;
                        this.data[i].fieldlabel = this.fieldForm.value.fieldlabel;
                        this.data[i].fieldtype = this.fieldForm.value.fieldtype;
                        this.data[i].format = this.fieldForm.value.format;
                        this.data[i].listvalue = this.fieldForm.value.listvalue;
                    }
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Updated Successfully'
                    });
                    this.dialog.closeAll();
                }
                this.fieldForm.reset();
            }
        }
        this.dialog.closeAll();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.data);
    };
    CustomfieldsComponent.prototype.confirmDelete = function (item) {
        var _this = this;
        console.log(item);
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete?' + ' ' + item.fieldlabel,
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: function () {
                _this.onDeleteField(item);
            },
            reject: function () {
            }
        });
    };
    CustomfieldsComponent.prototype.onDeleteField = function (deleteItem) {
        this.data.splice(this.fieldData.indexOf(deleteItem), 1);
        this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: deleteItem.fieldlabel + ' ' + 'Deleted '
        });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.data);
    };
    CustomfieldsComponent.prototype.onClone = function (cloneElement) {
        var clonedata = {
            id: this.fieldData.length + 1,
            fieldlabel: cloneElement.fieldlabel + ' ' + 'copy',
            fieldtype: cloneElement.fieldtype,
            format: cloneElement.format
        };
        this.data.push(clonedata);
        this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: cloneElement.fieldlabel + ' ' + 'Copied '
        });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.data);
    };
    CustomfieldsComponent.prototype.onSelectedList = function () {
        if (this.fieldForm.value.fieldtype === 'List') {
            this.listSelected = true;
            this.listCategory = [
                { id: 1, listName: 'Priority Types', listValue: ['Low', 'Medium', 'High'] },
                { id: 2, listName: 'Status Types', listValue: ['Open', 'On Hold', 'In progress', 'Re-Opened', 'Testing', 'Closed'] },
                { id: 3, listName: 'Severity Types', listValue: ['No Impact', 'Low Impact', 'Medium Impact', 'High Impact', 'Critical'] },
                { id: 4, listName: 'Release Types', listValue: ['\'product\':{\'Concept\',\'In Progress\', \'Canceled\'}', '\'Version\':{\'Planning\',\'Design\',\'Development & Test\',\'Released\',\'Canceled\'}', '\'Sprint\':{\'Planned\',\'In Progress\',\'Completed\'}'] }
            ];
        }
        else {
            this.listSelected = false;
        }
    };
    CustomfieldsComponent.prototype.logout = function () {
        // remove user from local storage to log user out
        this.localStorageService.clearAllItem();
        this.router.navigate(['login']);
    };
    CustomfieldsComponent.prototype.getFontSize = function () {
        // return Math.max(10, this.fieldForm.value.fontSize);
    };
    CustomfieldsComponent.prototype.ngOnDestroy = function () {
        this._subscriptions.unsubscribe();
    };
    CustomfieldsComponent.ctorParameters = function () { return [
        { type: _shared_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["ConfirmationService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"] },
        { type: _services_master_service__WEBPACK_IMPORTED_MODULE_2__["MasterService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('matdialog', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"])
    ], CustomfieldsComponent.prototype, "matdialog", void 0);
    CustomfieldsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-customfields',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customfields.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/customfields/customfields.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customfields.component.scss */ "./src/app/projectdashboard-layout/components/customfields/customfields.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            primeng_api__WEBPACK_IMPORTED_MODULE_8__["ConfirmationService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"],
            _services_master_service__WEBPACK_IMPORTED_MODULE_2__["MasterService"]])
    ], CustomfieldsComponent);
    return CustomfieldsComponent;
}());



/***/ }),

/***/ "./src/app/projectdashboard-layout/components/fieldtemplates/fieldtemplates.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/projectdashboard-layout/components/fieldtemplates/fieldtemplates.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-dialog-container#mat-dialog-0 {\n  margin-left: 170px !important;\n  margin-right: -81px !important; }\n\ni {\n  padding: 6px; }\n\ntable {\n  width: 100%; }\n\n.tab-icon {\n  margin-right: 8px; }\n\nth {\n  font-weight: bold; }\n\nmat-cell:last-of-type, mat-footer-cell:last-of-type, mat-header-cell:last-of-type {\n  padding-right: 0px; }\n\n@media screen and (max-width: 960px) {\n  mat-cell:first-of-type, mat-footer-cell:first-of-type, mat-header-cell:first-of-type {\n    padding-left: 0px; }\n  .mat-table {\n    border: 0;\n    vertical-align: middle; }\n  mat-footer-row, mat-header-row, mat-row {\n    display: none; }\n  .mat-table caption {\n    font-size: 1em; }\n  /*  Enable this to hide header\r\n  .mat-table .mat-header-cell {\r\n\r\n    border: 10px solid;\r\n    clip: rect(0 0 0 0);\r\n    height: 1px;\r\n    margin: -1px;\r\n    padding: 0;\r\n    position: absolute;\r\n    width: 1px;\r\n  }\r\n  */\n  .mat-table .mat-row {\n    border-bottom: 5px solid #ddd;\n    display: block; }\n  /*\r\n  .mat-table .mat-row:nth-child(even) {background: #CCC}\r\n  .mat-table .mat-row:nth-child(odd) {background: #FFF}\r\n  */\n  .mat-table .mat-cell {\n    border-bottom: 1px solid #ddd;\n    display: block;\n    font-size: 1em;\n    text-align: right;\n    font-weight: bold;\n    height: 30px;\n    margin-bottom: 4%; }\n  .mat-table .mat-cell:before {\n    /*\r\n    * aria-label has no advantage, it won't be read inside a table\r\n    content: attr(aria-label);\r\n    */\n    content: attr(data-label);\n    float: left;\n    text-transform: uppercase;\n    font-weight: normal;\n    font-size: .85em; }\n  .mat-table .mat-cell:last-child {\n    border-bottom: 0; }\n  .mat-table .mat-cell:first-child {\n    margin-top: 4%; } }\n\n/* drag and drop */\n\n.example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top; }\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block; }\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px; }\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.cdk-drag-placeholder {\n  opacity: 0; }\n\n.cdk-drag-animating {\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.example-box:last-child {\n  border: none; }\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdGRhc2hib2FyZC1sYXlvdXQvY29tcG9uZW50cy9maWVsZHRlbXBsYXRlcy9DOlxcVXNlcnNcXGFzdW5rb3BwYWRcXERlc2t0b3BcXG5ld3pvb21cXHpvb210ZWFtcy13ZWItbmcvc3JjXFxhcHBcXHByb2plY3RkYXNoYm9hcmQtbGF5b3V0XFxjb21wb25lbnRzXFxmaWVsZHRlbXBsYXRlc1xcZmllbGR0ZW1wbGF0ZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2plY3RkYXNoYm9hcmQtbGF5b3V0L2NvbXBvbmVudHMvZmllbGR0ZW1wbGF0ZXMvZmllbGR0ZW1wbGF0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDRSw2QkFBNkI7RUFDN0IsOEJBQThCLEVBQUE7O0FBSWhDO0VBQ0EsWUFBWSxFQUFBOztBQUdaO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0csa0JBQWtCLEVBQUE7O0FBR3JCO0VBQ0U7SUFDRyxpQkFBaUIsRUFBQTtFQUVwQjtJQUNFLFNBQVM7SUFDVCxzQkFDRixFQUFBO0VBQ0E7SUFDRSxhQUFhLEVBQUE7RUFFZjtJQUNFLGNBQWMsRUFBQTtFQUdoQjs7Ozs7Ozs7Ozs7R0NSQztFRG9CRDtJQUNFLDZCQUE2QjtJQUM3QixjQUFjLEVBQUE7RUFFaEI7OztHQ2pCQztFRHFCRDtJQUNFLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBVztJQUNYLGlCQUFpQixFQUFBO0VBRW5CO0lBQ0U7OztLQ2xCQztJRHNCRCx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFFbkIsZ0JBQWdCLEVBQUE7RUFFbEI7SUFDRSxnQkFBZ0IsRUFBQTtFQUVoQjtJQUNBLGNBQWMsRUFBQSxFQUNmOztBQUdILGtCQUFBOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIseUJBQThCO1VBQTlCLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixxSEFFOEMsRUFBQTs7QUFHaEQ7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxzRUFBc0Q7RUFBdEQsOERBQXNEO0VBQXRELHNEQUFzRDtFQUF0RCwwR0FBc0QsRUFBQTs7QUFHeEQ7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxzRUFBc0Q7RUFBdEQsOERBQXNEO0VBQXRELHNEQUFzRDtFQUF0RCwwR0FBc0QsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RkYXNoYm9hcmQtbGF5b3V0L2NvbXBvbmVudHMvZmllbGR0ZW1wbGF0ZXMvZmllbGR0ZW1wbGF0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjNweCkge1xyXG4vLyAgIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogMTcwcHggIWltcG9ydGFudDtcclxuLy8gICAgIG1hcmdpbi1yaWdodDogLTgxcHggIWltcG9ydGFudDtcclxuLy8gICB9XHJcbi8vIH1cclxuLy8gI21hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuLy8gICBtYXJnaW4tbGVmdDogMTcwcHggIWltcG9ydGFudDtcclxuLy8gICBtYXJnaW4tcmlnaHQ6IC04MXB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxubWF0LWRpYWxvZy1jb250YWluZXIjbWF0LWRpYWxvZy0wIHtcclxuICBtYXJnaW4tbGVmdDogMTcwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IC04MXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLy8gbWFyZ2luLWxlZnQ6IDE3MHB4O1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiAtODFweDtcclxuaXtcclxucGFkZGluZzogNnB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRhYi1pY29uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG50aHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5tYXQtY2VsbDpsYXN0LW9mLXR5cGUsIG1hdC1mb290ZXItY2VsbDpsYXN0LW9mLXR5cGUsIG1hdC1oZWFkZXItY2VsbDpsYXN0LW9mLXR5cGUge1xyXG4gICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgbWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSwgbWF0LWZvb3Rlci1jZWxsOmZpcnN0LW9mLXR5cGUsIG1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcclxuICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG4gIC5tYXQtdGFibGUge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZVxyXG4gIH1cclxuICBtYXQtZm9vdGVyLXJvdywgbWF0LWhlYWRlci1yb3csIG1hdC1yb3cge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLm1hdC10YWJsZSBjYXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gIH1cclxuXHJcbiAgLyogIEVuYWJsZSB0aGlzIHRvIGhpZGUgaGVhZGVyXHJcbiAgLm1hdC10YWJsZSAubWF0LWhlYWRlci1jZWxsIHtcclxuXHJcbiAgICBib3JkZXI6IDEwcHggc29saWQ7XHJcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBtYXJnaW46IC0xcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDFweDtcclxuICB9XHJcbiAgKi9cclxuICAubWF0LXRhYmxlIC5tYXQtcm93IHtcclxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZGRkO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC8qXHJcbiAgLm1hdC10YWJsZSAubWF0LXJvdzpudGgtY2hpbGQoZXZlbikge2JhY2tncm91bmQ6ICNDQ0N9XHJcbiAgLm1hdC10YWJsZSAubWF0LXJvdzpudGgtY2hpbGQob2RkKSB7YmFja2dyb3VuZDogI0ZGRn1cclxuICAqL1xyXG4gIC5tYXQtdGFibGUgLm1hdC1jZWxsIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gIH1cclxuICAubWF0LXRhYmxlIC5tYXQtY2VsbDpiZWZvcmUge1xyXG4gICAgLypcclxuICAgICogYXJpYS1sYWJlbCBoYXMgbm8gYWR2YW50YWdlLCBpdCB3b24ndCBiZSByZWFkIGluc2lkZSBhIHRhYmxlXHJcbiAgICBjb250ZW50OiBhdHRyKGFyaWEtbGFiZWwpO1xyXG4gICAgKi9cclxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogLjg1ZW07XHJcbiAgfVxyXG4gIC5tYXQtdGFibGUgLm1hdC1jZWxsOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICB9XHJcbiAgICAubWF0LXRhYmxlIC5tYXQtY2VsbDpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxuICB9XHJcbn1cclxuXHJcbi8qIGRyYWcgYW5kIGRyb3AgKi9cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCAyNXB4IDI1cHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLmV4YW1wbGUtbGlzdCB7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcclxuICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZXhhbXBsZS1ib3gge1xyXG4gIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjdXJzb3I6IG1vdmU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuIiwibWF0LWRpYWxvZy1jb250YWluZXIjbWF0LWRpYWxvZy0wIHtcbiAgbWFyZ2luLWxlZnQ6IDE3MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogLTgxcHggIWltcG9ydGFudDsgfVxuXG5pIHtcbiAgcGFkZGluZzogNnB4OyB9XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLnRhYi1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7IH1cblxudGgge1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG5tYXQtY2VsbDpsYXN0LW9mLXR5cGUsIG1hdC1mb290ZXItY2VsbDpsYXN0LW9mLXR5cGUsIG1hdC1oZWFkZXItY2VsbDpsYXN0LW9mLXR5cGUge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgbWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSwgbWF0LWZvb3Rlci1jZWxsOmZpcnN0LW9mLXR5cGUsIG1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDsgfVxuICAubWF0LXRhYmxlIHtcbiAgICBib3JkZXI6IDA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxuICBtYXQtZm9vdGVyLXJvdywgbWF0LWhlYWRlci1yb3csIG1hdC1yb3cge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLm1hdC10YWJsZSBjYXB0aW9uIHtcbiAgICBmb250LXNpemU6IDFlbTsgfVxuICAvKiAgRW5hYmxlIHRoaXMgdG8gaGlkZSBoZWFkZXJcclxuICAubWF0LXRhYmxlIC5tYXQtaGVhZGVyLWNlbGwge1xyXG5cclxuICAgIGJvcmRlcjogMTBweCBzb2xpZDtcclxuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIG1hcmdpbjogLTFweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gIH1cclxuICAqL1xuICAubWF0LXRhYmxlIC5tYXQtcm93IHtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2RkZDtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAvKlxyXG4gIC5tYXQtdGFibGUgLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kOiAjQ0NDfVxyXG4gIC5tYXQtdGFibGUgLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCkge2JhY2tncm91bmQ6ICNGRkZ9XHJcbiAgKi9cbiAgLm1hdC10YWJsZSAubWF0LWNlbGwge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0JTsgfVxuICAubWF0LXRhYmxlIC5tYXQtY2VsbDpiZWZvcmUge1xuICAgIC8qXHJcbiAgICAqIGFyaWEtbGFiZWwgaGFzIG5vIGFkdmFudGFnZSwgaXQgd29uJ3QgYmUgcmVhZCBpbnNpZGUgYSB0YWJsZVxyXG4gICAgY29udGVudDogYXR0cihhcmlhLWxhYmVsKTtcclxuICAgICovXG4gICAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAuODVlbTsgfVxuICAubWF0LXRhYmxlIC5tYXQtY2VsbDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tOiAwOyB9XG4gIC5tYXQtdGFibGUgLm1hdC1jZWxsOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiA0JTsgfSB9XG5cbi8qIGRyYWcgYW5kIGRyb3AgKi9cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMjVweCAyNXB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDsgfVxuXG4uZXhhbXBsZS1saXN0IHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgbWluLWhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLmV4YW1wbGUtYm94IHtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBtb3ZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4OyB9XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDsgfVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpOyB9XG5cbi5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lOyB9XG5cbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7IH1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/projectdashboard-layout/components/fieldtemplates/fieldtemplates.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/projectdashboard-layout/components/fieldtemplates/fieldtemplates.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: FieldtemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldtemplatesComponent", function() { return FieldtemplatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/local-storage.service */ "./src/app/shared/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");










var FieldtemplatesComponent = /** @class */ (function () {
    function FieldtemplatesComponent(localStorageService, router, dialog, fb, confirmationService, messageService, _sanitizer) {
        this.localStorageService = localStorageService;
        this.router = router;
        this.dialog = dialog;
        this.fb = fb;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this._sanitizer = _sanitizer;
        this.templateData = [
            { id: 1, templateName: 'Starter Field Template', description: 'List', templateFlag: false, fieldList: [] },
            { id: 2, templateName: 'Portal Field Template', description: 'Number', templateFlag: true },
            { id: 3, templateName: 'Development field Template', description: 'Checkbox', templateFlag: true },
        ];
        this.fieldsList = [
            { id: 1, fieldlabel: 'Item Type', fieldtype: 'List', format: '', attribute: " <label for=\"exampleFormControlSelect1\">Example select</label>\n    <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n      <option></option>\n      <option>2</option>\n    </select>" },
            { id: 2, fieldlabel: 'Test Iterations', fieldtype: 'Number', format: 'Integer', attribute: "<p><input type='number'></p>" },
            { id: 3, fieldlabel: 'Build', fieldtype: 'Checkbox', format: '', attribute: "<div><input type=\"text\" placeholder=\"\" name=\"name\"><div>" },
        ];
        this.templateFieldsList = [
            { id: 1, fieldlabel: 'Item Type', fieldtype: 'List', format: '', attribute: "<mat-form-field>\n    <input matInput type=\"text\" placeholder=\"Field Label\">\n  </mat-form-field>" },
        ];
        this.data = Object.assign(this.templateData);
        this.displayedColumns = ['Field Template Name', 'Description', 'Is Active', 'Actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.templateData);
        this.selectDatasource = this.templateData;
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        /* innerHtml Sanitizer*/
        this._inputpdf = '<input type="text" name="fname" placholder="input here">';
        this.color = 'primary',
            this.templateForm = this.fb.group({
                id: [],
                description: [null],
                templateName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                tempflag: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
    }
    FieldtemplatesComponent.prototype.ngOnInit = function () {
        console.log(this.templateData[0].templateFlag);
        // this.defaultTemplate = [
        //   {id: 1, templateName: 'Number', description: '', List: []},
        //   {id: 2, templateName: 'List', description: '', List: this.listCategory},
        //   {id: 3, templateName: 'Text', description: '', List: []},
        //   {id: 4, templateName: 'Checkbox', description: '', List: []},
        // ];
    };
    FieldtemplatesComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(this.matdialog, { disableClose: true
            // maxWidth: '100vw',
            // maxHeight: '100vh',
            // width: '750px',
            // height: '85vh',
            // data:''
            // height: '400px',
            // width: '600px',
            // data: {name: this.name, animal: this.animal}
        });
        this._subscriptions.add(dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.animal = result;
            _this.templateForm.reset();
        }));
    };
    FieldtemplatesComponent.prototype.openDialogEdit = function (formData) {
        // console.log(formData);
        this.templateForm.patchValue({
            id: formData.id,
            description: formData.description,
            templateName: formData.templateName,
            tempflag: formData.templateFlag
        });
        this.dialog.open(this.matdialog, {
        // height: '400px',
        // width: '600px',
        });
    };
    FieldtemplatesComponent.prototype.onFieldTemplateSave = function () {
        // console.log(this.templateForm.value.id);
        if (this.templateForm.value.id === null) {
            var req = {
                id: this.templateData.length + 1,
                templateName: this.templateForm.value.templateName,
                description: this.templateForm.value.description,
                templateFlag: this.templateForm.value.tempflag
            };
            this.data.push(req);
            this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Added Successfully'
            });
        }
        else {
            for (var i = 0; i <= this.data.length; i++) {
                // console.log(this.data);
                // console.log(this.data[i].id);
                if (this.data[i].id === this.templateForm.value.id) {
                    // alert(this.templateForm.value.id);
                    this.data[i].id = this.templateForm.value.id;
                    this.data[i].templateName = this.templateForm.value.templateName;
                    this.data[i].description = this.templateForm.value.description;
                    this.data[i].templateFlag = this.templateForm.value.tempflag;
                }
                this.messageService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'Updated Successfully'
                });
            }
        }
        this.dialog.closeAll();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.data);
        // console.log(templateData);
    };
    FieldtemplatesComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        console.log(id);
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?' + ' ',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: function () {
                _this.onDeleteField(id);
            },
            reject: function () {
            }
        });
    };
    FieldtemplatesComponent.prototype.onDeleteField = function (deleteItem) {
        this.data.splice(this.templateData.indexOf(deleteItem), 1);
        this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: deleteItem.templateName + ' ' + 'Deleted '
        });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.data);
    };
    FieldtemplatesComponent.prototype.onClone = function (cloneElement) {
        var clonedata = {
            id: this.templateData.length + 1,
            templateName: cloneElement.templateName + ' ' + 'copy',
            description: cloneElement.description,
            templateFlag: cloneElement.templateFlag
        };
        this.data.push(clonedata);
        this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: cloneElement.templateName + ' ' + 'Copied '
        });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.data);
        console.log(this.data);
    };
    FieldtemplatesComponent.prototype.logout = function () {
        // remove user from local storage to log user out
        this.localStorageService.clearAllItem();
        this.router.navigate(['login']);
    };
    FieldtemplatesComponent.prototype.getFontSize = function () {
        return Math.max(10, this.templateForm.value.fontSize);
    };
    FieldtemplatesComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            console.log('Previous Container' + event.previousContainer);
            console.log('container' + event.container);
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            console.log(event.container.data);
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    Object.defineProperty(FieldtemplatesComponent.prototype, "inputpdf", {
        get: function () {
            return this._sanitizer.bypassSecurityTrustHtml(this.templateFieldsList[0].attribute);
        },
        enumerable: true,
        configurable: true
    });
    /* */
    FieldtemplatesComponent.prototype.ngOnDestroy = function () {
        this._subscriptions.unsubscribe();
    };
    FieldtemplatesComponent.ctorParameters = function () { return [
        { type: _shared_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('matdialog', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])
    ], FieldtemplatesComponent.prototype, "matdialog", void 0);
    FieldtemplatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-fieldtemplates',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fieldtemplates.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/fieldtemplates/fieldtemplates.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fieldtemplates.component.scss */ "./src/app/projectdashboard-layout/components/fieldtemplates/fieldtemplates.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            primeng_api__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]])
    ], FieldtemplatesComponent);
    return FieldtemplatesComponent;
}());



/***/ }),

/***/ "./src/app/projectdashboard-layout/components/lists/list.ts":
/*!******************************************************************!*\
  !*** ./src/app/projectdashboard-layout/components/lists/list.ts ***!
  \******************************************************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var List = /** @class */ (function () {
    function List(id, name, Child_id, children) {
        this.id = id;
        this.name = name;
        this.Child_id = Child_id;
    }
    return List;
}());



/***/ }),

/***/ "./src/app/projectdashboard-layout/components/lists/lists.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/projectdashboard-layout/components/lists/lists.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-dialog-container#mat-dialog-2 {\n  /* margin-right: -46px; */\n  margin-left: 241px;\n  height: 1000px; }\n\n.maintitle {\n  margin-left: 501px; }\n\nmat-card.mat-card {\n  width: 540px;\n  height: auto; }\n\nbutton.btn.btn-secondary[_ngcontent-lcf-c10] {\n  margin-right: 405px;\n  float: right; }\n\n.mat-dialog-container {\n  display: block;\n  padding: 35px;\n  border-radius: 4px;\n  box-sizing: border-box;\n  overflow: auto;\n  outline: 0;\n  width: 100%;\n  height: 120%;\n  min-height: inherit;\n  max-height: inherit; }\n\ntable {\n  width: 70%; }\n\nmat-dialog-container#mat-dialog-1 {\n  height: 832px; }\n\n.mat-dialog-title {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin-top: 111px;\n  font-size: 25px; }\n\n@media screen and (max-width: 960px) {\n  mat-cell:first-of-type,\n  mat-footer-cell:first-of-type,\n  mat-header-cell:first-of-type {\n    padding-left: 0px; }\n  .mat-table {\n    border: 0;\n    vertical-align: middle; }\n  mat-footer-row,\n  mat-header-row,\n  mat-row {\n    display: none; }\n  .mat-table caption {\n    font-size: 1em; }\n  .mat-table .mat-row {\n    border-bottom: 10px solid #ddd;\n    display: block; }\n  .mat-table .mat-cell {\n    border-bottom: 1px solid #ddd;\n    display: block;\n    font-size: 1em;\n    text-align: right;\n    font-weight: bold;\n    height: 30px;\n    margin-bottom: 4%;\n    margin-left: 4%;\n    margin-right: 4%; }\n  .mat-table .mat-cell:before {\n    content: attr(data-label);\n    float: left;\n    text-transform: uppercase;\n    font-weight: normal;\n    font-size: 0.85em; }\n  .mat-table .mat-cell:last-child {\n    border-bottom: 0; }\n  .mat-table .mat-cell:first-child {\n    margin-top: 4%; } }\n\n@media screen and (max-width: 960px) {\n  .mat-table .mat-cell:last-child {\n    border-bottom: 0;\n    margin-bottom: -52px; } }\n\n@media screen and (max-width: 960px) {\n  .maintitle {\n    margin-left: 123px; } }\n\n@media (min-width: 768px) and (max-width: 959px) {\n  .maintitle {\n    margin-left: 126px; } }\n\n@media (min-width: 961px) and (max-width: 991px) {\n  .maintitle {\n    margin-left: 140px; } }\n\n@media (min-width: 992px) and (max-width: 1023px) {\n  .maintitle {\n    margin-left: 100px; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  mat-card.mat-card {\n    width: 330px; } }\n\n@media (min-width: 767px) and (max-width: 1024px) {\n  mat-card.mat-card {\n    width: 320px; } }\n\n@media (min-width: 992px) and (max-width: 1024px) {\n  mat-card.mat-card {\n    width: 320px; } }\n\n@media (min-width: 1024) and (max-width: 1449) {\n  mat-card.mat-card {\n    width: 320px; } }\n\n@media (min-width: 992px) and (max-width: 1024px) {\n  h1#mat-dialog-title-0 {\n    margin-left: -80px; } }\n\n@media (min-width: 425px) and (max-width: 375px) {\n  mat-card.mat-card {\n    width: 320px; } }\n\n@media (min-width: 1024px) and (max-width: 1399px) {\n  mat-card.mat-card {\n    width: 330px; } }\n\n@media (min-width: 1024px) and (max-width: 1399px) {\n  h1#mat-dialog-title-0 {\n    margin-left: -478px; } }\n\n@media (min-width: 320px) and (max-width: 374px) {\n  mat-card.mat-card {\n    width: 320px; } }\n\n@media (min-width: 320px) and (max-width: 374px) {\n  h1#mat-dialog-title-0 {\n    margin-left: -85; } }\n\n@media (min-width: 1440px) and (max-width: 2560px) {\n  mat-card.mat-card {\n    width: 540px; } }\n\n@media (min-width: 1439px) and (max-width: 1460px) {\n  h1#mat-dialog-title-0 {\n    margin-left: -475px; } }\n\n@media (min-width: 1461px) and (max-width: 1523px) {\n  h1#mat-dialog-title-0 {\n    margin-left: -435px; } }\n\n@media (min-width: 1524px) and (max-width: 1622px) {\n  h1#mat-dialog-title-0 {\n    margin-left: -385px; } }\n\n@media (min-width: 1623px) and (max-width: 2384px) {\n  h1#mat-dialog-title-0 {\n    margin-left: -260px; } }\n\n@media (min-width: 2385px) and (max-width: 2560px) {\n  h1#mat-dialog-title-0 {\n    margin-left: 85px; } }\n\n@media (min-width: 768px) and (max-width: 960px) {\n  h1#mat-dialog-title-0 {\n    margin-left: -100px; } }\n\n@media (min-width: 320px) and (max-width: 374px) {\n  h1#mat-dialog-title-0 {\n    margin-left: -100px; } }\n\n@media (min-width: 375px) and (max-width: 766px) {\n  h1#mat-dialog-title-0 {\n    margin-left: -100px; } }\n\n@media (min-width: 1400px) and (max-width: 1438px) {\n  h1#mat-dialog-title-0 {\n    margin-left: -477px; } }\n\n@media (min-width: 1400px) and (max-width: 1429px) {\n  mat-card.mat-card {\n    width: 510px; } }\n\n@media (min-width: 1100px) and (max-width: 1399px) {\n  mat-card.mat-card {\n    width: 360px; } }\n\n.activeCls {\n  background-color: #7993c5 !important; }\n\ni.fas.fa-trash-alt {\n  margin-left: 5px; }\n\n.mat-header-cell.mat-sort-header-sorted {\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdGRhc2hib2FyZC1sYXlvdXQvY29tcG9uZW50cy9saXN0cy9DOlxcVXNlcnNcXGFzdW5rb3BwYWRcXERlc2t0b3BcXG5ld3pvb21cXHpvb210ZWFtcy13ZWItbmcvc3JjXFxhcHBcXHByb2plY3RkYXNoYm9hcmQtbGF5b3V0XFxjb21wb25lbnRzXFxsaXN0c1xcbGlzdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBRWhCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFHZDtFQUNFLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxVQUFVLEVBQUE7O0FBRVo7RUFDRSxhQUFhLEVBQUE7O0FBRWY7RUFDRSx3REFBd0Q7RUFDeEQsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFLakI7RUFDRTs7O0lBR0UsaUJBQWlCLEVBQUE7RUFFbkI7SUFDRSxTQUFTO0lBQ1Qsc0JBQXNCLEVBQUE7RUFFeEI7OztJQUdFLGFBQWEsRUFBQTtFQUVmO0lBQ0UsY0FBYyxFQUFBO0VBRWhCO0lBQ0UsOEJBQThCO0lBQzlCLGNBQWMsRUFBQTtFQUVoQjtJQUNFLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7RUFFbEI7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsaUJBQWlCLEVBQUE7RUFFbkI7SUFDRSxnQkFBZ0IsRUFBQTtFQUVsQjtJQUNFLGNBQWMsRUFBQSxFQUNmOztBQUVIO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsb0JBQW9CLEVBQUEsRUFDckI7O0FBR0g7RUFDRTtJQUdJLGtCQUFrQixFQUFBLEVBQ3JCOztBQUVEO0VBQ0U7SUFDRSxrQkFBa0IsRUFBQSxFQUNyQjs7QUFFQztFQUNFO0lBQ0Usa0JBQWtCLEVBQUEsRUFDckI7O0FBSUM7RUFDRTtJQUNFLGtCQUFrQixFQUFBLEVBQ3JCOztBQUtQO0VBQ0U7SUFDRSxZQUFZLEVBQUEsRUFDYjs7QUFJSDtFQUNFO0lBQ0UsWUFBWSxFQUFBLEVBQ2I7O0FBSUg7RUFDRTtJQUNFLFlBQVksRUFBQSxFQUNiOztBQUVIO0VBQ0U7SUFDRSxZQUFZLEVBQUEsRUFDYjs7QUFHSDtFQUNFO0lBRUUsa0JBQWtCLEVBQUEsRUFDbkI7O0FBRUg7RUFDRTtJQUNFLFlBQVksRUFBQSxFQUNiOztBQUdIO0VBQ0U7SUFDRSxZQUFZLEVBQUEsRUFDYjs7QUFHSDtFQUNFO0lBQ0UsbUJBQW1CLEVBQUEsRUFFcEI7O0FBR0g7RUFDRTtJQUNFLFlBQVksRUFBQSxFQUNiOztBQUdIO0VBQ0U7SUFDRSxnQkFBZ0IsRUFBQSxFQUNqQjs7QUFJSDtFQUNFO0lBQ0UsWUFBWSxFQUFBLEVBQ2I7O0FBR0g7RUFDRTtJQUNFLG1CQUFtQixFQUFBLEVBQ3BCOztBQUdIO0VBQ0U7SUFDRSxtQkFBbUIsRUFBQSxFQUNwQjs7QUFFSDtFQUNFO0lBRUUsbUJBQW1CLEVBQUEsRUFDcEI7O0FBRUg7RUFDRTtJQUVFLG1CQUFtQixFQUFBLEVBQ3RCOztBQUdEO0VBQ0U7SUFDRSxpQkFBaUIsRUFBQSxFQUNwQjs7QUFHRDtFQUNFO0lBQ0UsbUJBQW1CLEVBQUEsRUFDdEI7O0FBR0Q7RUFDRTtJQUNFLG1CQUFtQixFQUFBLEVBQ3RCOztBQUdEO0VBQ0U7SUFDRSxtQkFBbUIsRUFBQSxFQUN0Qjs7QUFVRDtFQUNFO0lBQ0UsbUJBQW1CLEVBQUEsRUFDcEI7O0FBU0g7RUFDRTtJQUNFLFlBQVksRUFBQSxFQUNiOztBQUdIO0VBQ0U7SUFDRSxZQUFZLEVBQUEsRUFFYjs7QUFLSDtFQUVFLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RkYXNoYm9hcmQtbGF5b3V0L2NvbXBvbmVudHMvbGlzdHMvbGlzdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZGlhbG9nLWNvbnRhaW5lciNtYXQtZGlhbG9nLTIge1xyXG4gIC8qIG1hcmdpbi1yaWdodDogLTQ2cHg7ICovXHJcbiAgbWFyZ2luLWxlZnQ6IDI0MXB4O1xyXG4gIGhlaWdodDogMTAwMHB4O1xyXG59XHJcbi5tYWludGl0bGUge1xyXG4gIG1hcmdpbi1sZWZ0OiA1MDFweDtcclxufVxyXG5cclxubWF0LWNhcmQubWF0LWNhcmQge1xyXG4gIHdpZHRoOiA1NDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbmJ1dHRvbi5idG4uYnRuLXNlY29uZGFyeVtfbmdjb250ZW50LWxjZi1jMTBdIHtcclxuICBtYXJnaW4tcmlnaHQ6IDQwNXB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAzNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMjAlO1xyXG4gIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbWF4LWhlaWdodDogaW5oZXJpdDtcclxufVxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5tYXQtZGlhbG9nLWNvbnRhaW5lciNtYXQtZGlhbG9nLTEge1xyXG4gIGhlaWdodDogODMycHg7XHJcbn1cclxuLm1hdC1kaWFsb2ctdGl0bGUge1xyXG4gIGZvbnQ6IDUwMCAyMHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luLXRvcDogMTExcHg7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgbWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSxcclxuICBtYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSxcclxuICBtYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICB9XHJcbiAgLm1hdC10YWJsZSB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuICBtYXQtZm9vdGVyLXJvdyxcclxuICBtYXQtaGVhZGVyLXJvdyxcclxuICBtYXQtcm93IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5tYXQtdGFibGUgY2FwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICB9XHJcbiAgLm1hdC10YWJsZSAubWF0LXJvdyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNkZGQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLm1hdC10YWJsZSAubWF0LWNlbGwge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0JTtcclxuICB9XHJcbiAgLm1hdC10YWJsZSAubWF0LWNlbGw6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XHJcbiAgfVxyXG4gIC5tYXQtdGFibGUgLm1hdC1jZWxsOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLm1hdC10YWJsZSAubWF0LWNlbGw6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgLm1hdC10YWJsZSAubWF0LWNlbGw6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTUycHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gIC5tYWludGl0bGUge1xyXG4gIFxyXG4gICAgICAvLyBtYXJnaW4tbGVmdDogMzNweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEyM3B4O1xyXG4gIH1cclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcclxuICAgIC5tYWludGl0bGUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTI2cHg7XHJcbiAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk2MXB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgLm1haW50aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE0MHB4O1xyXG4gICAgfVxyXG4gICAgICB9XHJcbiAgXHJcblxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcclxuICAgICAgICAubWFpbnRpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgbWF0LWNhcmQubWF0LWNhcmQge1xyXG4gICAgd2lkdGg6IDMzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIG1hdC1jYXJkLm1hdC1jYXJkIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICBtYXQtY2FyZC5tYXQtY2FyZCB7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0KSBhbmQgKG1heC13aWR0aDogMTQ0OSkge1xyXG4gIG1hdC1jYXJkLm1hdC1jYXJkIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIGgxI21hdC1kaWFsb2ctdGl0bGUtMCB7XHJcbiAgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IC04MHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDI1cHgpIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gIG1hdC1jYXJkLm1hdC1jYXJkIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOiAxMzk5cHgpIHtcclxuICBtYXQtY2FyZC5tYXQtY2FyZCB7XHJcbiAgICB3aWR0aDogMzMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDogMTM5OXB4KSB7XHJcbiAgaDEjbWF0LWRpYWxvZy10aXRsZS0wIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNDc4cHg7XHJcbiAgICBcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDM3NHB4KSB7XHJcbiAgbWF0LWNhcmQubWF0LWNhcmQge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMzc0cHgpIHtcclxuICBoMSNtYXQtZGlhbG9nLXRpdGxlLTAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC04NTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTQ0MHB4KSBhbmQgKG1heC13aWR0aDogMjU2MHB4KSB7XHJcbiAgbWF0LWNhcmQubWF0LWNhcmQge1xyXG4gICAgd2lkdGg6IDU0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDE0MzlweCkgYW5kIChtYXgtd2lkdGg6IDE0NjBweCkge1xyXG4gIGgxI21hdC1kaWFsb2ctdGl0bGUtMCB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTQ3NXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDE0NjFweCkgYW5kIChtYXgtd2lkdGg6IDE1MjNweCkge1xyXG4gIGgxI21hdC1kaWFsb2ctdGl0bGUtMCB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTQzNXB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTUyNHB4KSBhbmQgKG1heC13aWR0aDogMTYyMnB4KSB7XHJcbiAgaDEjbWF0LWRpYWxvZy10aXRsZS0wIHtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAtNDM1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTM4NXB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTYyM3B4KSBhbmQgKG1heC13aWR0aDogMjM4NHB4KSB7XHJcbiAgaDEjbWF0LWRpYWxvZy10aXRsZS0wIHtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAtMzg1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI2MHB4O1xyXG59XHJcbiAgXHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDIzODVweCkgYW5kIChtYXgtd2lkdGg6IDI1NjBweCkge1xyXG4gIGgxI21hdC1kaWFsb2ctdGl0bGUtMCB7XHJcbiAgICBtYXJnaW4tbGVmdDogODVweDtcclxufVxyXG4gIFxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgaDEjbWF0LWRpYWxvZy10aXRsZS0wIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbn1cclxuICBcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAzNzRweCkge1xyXG4gIGgxI21hdC1kaWFsb2ctdGl0bGUtMCB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwMHB4O1xyXG59XHJcbiAgXHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDM3NXB4KSBhbmQgKG1heC13aWR0aDogNzY2cHgpIHtcclxuICBoMSNtYXQtZGlhbG9nLXRpdGxlLTAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcclxufVxyXG4gIFxyXG59XHJcblxyXG4vLyBAbWVkaWEgKG1pbi13aWR0aDogMTQzOXB4KSBhbmQgKG1heC13aWR0aDogMjU2MHB4KSB7XHJcbi8vICAgaDEjbWF0LWRpYWxvZy10aXRsZS0wIHtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAtNDM3cHg7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSBhbmQgKG1heC13aWR0aDogMTQzOHB4KSB7XHJcbiAgaDEjbWF0LWRpYWxvZy10aXRsZS0wIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNDc3cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBAbWVkaWEgKG1pbi13aWR0aDogMTQ2MXB4KSBhbmQgKG1heC13aWR0aDogMTUyMykge1xyXG4vLyAgIGgxI21hdC1kaWFsb2ctdGl0bGUtMCB7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogLTQ3N3B4O1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkgYW5kIChtYXgtd2lkdGg6IDE0MjlweCkge1xyXG4gIG1hdC1jYXJkLm1hdC1jYXJkIHtcclxuICAgIHdpZHRoOiA1MTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMTAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMzk5cHgpIHtcclxuICBtYXQtY2FyZC5tYXQtY2FyZCB7XHJcbiAgICB3aWR0aDogMzYwcHg7XHJcbiAgICAvLyB3aWR0aDogNDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi5hY3RpdmVDbHMge1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5M2M1ICFpbXBvcnRhbnQ7XHJcbiAgLy8gYm9yZGVyOiAycHggc29saWQ7XHJcbn1cclxuaS5mYXMuZmEtdHJhc2gtYWx0IHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5tYXQtaGVhZGVyLWNlbGwubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/projectdashboard-layout/components/lists/lists.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/projectdashboard-layout/components/lists/lists.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsComponent", function() { return ListsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list */ "./src/app/projectdashboard-layout/components/lists/list.ts");
/* harmony import */ var _services_master_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../services/master.service */ "./src/app/services/master.service.ts");











// import { MasterService } from 'C:/Users/akshata sheelvant/zoomteams-web-ng/src/app/services/master.service';
// import { AppConstant } from './../../../app.constant';

var ELEMENT_DATA = [
    { Name: 'Low', id: 1, listid: 1 },
    { Name: 'Medium', id: 2, listid: 1 },
    { Name: 'High', id: 3, listid: 1 },
    { Name: 'TO DO', id: 4, listid: 2 },
    { Name: 'In progress', id: 5, listid: 2 },
    { Name: 'Completed', id: 6, listid: 2 },
    { Name: 'QA Testing', id: 7, listid: 2 },
    { Name: 'System testing', id: 8, listid: 2 },
    { Name: 'Severity', id: 9, listid: 3 },
    { Name: 'Major', id: 10, listid: 3 },
    { Name: 'Minor', id: 11, listid: 3 },
    { Name: 'Chrome', id: 12, listid: 4 },
    { Name: 'Opera', id: 13, listid: 4 },
    { Name: 'Safari', id: 14, listid: 4 },
    { Name: 'Fire fox', id: 15, listid: 4 },
];
var ListsComponent = /** @class */ (function () {
    function ListsComponent(http, modalService, fb, dialog, confirmationService, messageService, masterService) {
        this.http = http;
        this.modalService = modalService;
        this.fb = fb;
        this.dialog = dialog;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.masterService = masterService;
        this.arr = [
            new _list__WEBPACK_IMPORTED_MODULE_10__["List"](1, "priority Types", 111),
            new _list__WEBPACK_IMPORTED_MODULE_10__["List"](2, "Status Types", 222),
            new _list__WEBPACK_IMPORTED_MODULE_10__["List"](3, "Severity Types", 333),
            new _list__WEBPACK_IMPORTED_MODULE_10__["List"](4, "Browser", 444),
        ];
        // @ViewChild('matdialog7', { static: false }) matdialog7: TemplateRef<any>;
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.selectDatasource = this.arr;
        this.name = "";
        this.value = "";
        this.listvalue = "";
        this.msg = 'Are You Sure!';
        this.displayedColumns = ['name', 'action'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](this.arr);
        this.msgs = [];
    }
    ListsComponent.prototype.changeTableContent = function (data, index) {
        this.lid = data.id;
        if (index !== undefined) {
            this.testId = index;
        }
        if (data.id === undefined) {
            this.lid = data;
        }
        else {
            this.lid = data.id;
        }
        var _loop_1 = function (i) {
            if (ELEMENT_DATA[i].listid === this_1.lid) {
                console.log('if');
                this_1.selected_Array = lodash__WEBPACK_IMPORTED_MODULE_6__["filter"](ELEMENT_DATA, function (s) {
                    return s.listid == ELEMENT_DATA[i].listid;
                });
                return "break";
                console.log(this_1.selected_Array);
            }
            else {
                this_1.selected_Array = [];
                console.log(this_1.selected_Array);
            }
        };
        var this_1 = this;
        for (var i = 0; i < ELEMENT_DATA.length; i++) {
            var state_1 = _loop_1(i);
            if (state_1 === "break")
                break;
        }
    };
    ListsComponent.prototype.ngOnInit = function () {
        this.listForm = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
        });
    };
    // List Operation
    ListsComponent.prototype.openAddListDialog = function (passedTitle) {
        var _this = this;
        this.dialogTitle = passedTitle;
        var dialogRef = this.dialog.open(this.matdialog5, {
            disableClose: true,
        });
        this.listForm.reset();
        this._subscriptions.add(dialogRef.afterClosed().subscribe(function (result) {
            _this.arr;
            console.log('The dialog was closed');
        }));
    };
    ListsComponent.prototype.openListEdit = function (passedTitle, formdata) {
        this.dialogTitle = passedTitle;
        this.id = formdata.id;
        this.listForm.patchValue({
            id: formdata.id,
            name: formdata.name,
            Child_id: formdata.Child_id
        });
        this.dialog.open(this.matdialog5, { disableClose: true, });
    };
    ListsComponent.prototype.onListSave = function () {
        var _this = this;
        var test = this.masterService.getFormErrorMessage(this.listForm, this.listForm);
        console.log(test);
        if (test !== undefined) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error Message',
                detail: test
            });
        }
        else {
            if (this.listForm.value.id === null) {
                this.arr.push(new _list__WEBPACK_IMPORTED_MODULE_10__["List"](this.arr.length + 1, this.listForm.value.name, this.listForm.value.Child_id));
                // this.changeTableContent('');
                this.messageService.add({
                    severity: 'success',
                    summary: 'Success Message',
                    detail: 'Added Sucessfully'
                });
                this.changeTableContent('', '');
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](this.arr);
                // console.log(this.arr);
                this.listForm.reset();
            }
            else {
                lodash__WEBPACK_IMPORTED_MODULE_6__["forEach"](this.arr, function (data, index) {
                    if (_this.id === data.id) {
                        // console.log(this.id);
                        // console.log(data.id);
                        data.name = _this.listForm.value.name;
                    }
                });
                this.messageService.add({
                    severity: 'success',
                    summary: 'Success Message',
                    detail: 'Updated Sucessfully'
                });
                this.listForm.reset();
            }
            this.listForm.reset();
            this.dialog.closeAll();
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](this.arr);
        }
    };
    //List Value operations
    ListsComponent.prototype.openListValueDialog = function (passedTitle) {
        this.dialogTitle = passedTitle + ' ' + this.listName;
        var dialogRef = this.dialog.open(this.matdialog6, {
            disableClose: true,
        });
        this.listForm.reset();
        this._subscriptions.add(dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        }));
    };
    ListsComponent.prototype.openListValueEdit = function (passedTitle, formData) {
        this.dialogTitle = passedTitle + ' ' + formData.Name;
        // this.dialogTitle = passedTitle;
        this.id = formData.id;
        // alert(formData.id);
        this.listForm.patchValue({
            name: formData.Name,
            id: formData.id
        });
        this.display4 = true;
        this.dialog.open(this.matdialog6, { disableClose: true,
        });
    };
    ListsComponent.prototype.onListValueSave = function () {
        var _this = this;
        console.log(this.listForm);
        var test = this.masterService.getFormErrorMessage(this.listForm, this.listForm);
        console.log(test);
        if (test !== undefined) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error Message',
                detail: test
            });
        }
        else {
            if (this.listForm.value.id === null) {
                var req = {
                    Name: this.listForm.value.name,
                    id: ELEMENT_DATA.length + 1,
                    listid: this.lid
                };
                console.log(this.lid);
                ELEMENT_DATA.push((req));
                this.changeTableContent(this.lid, '');
                this.messageService.add({
                    severity: 'success',
                    summary: 'Success Message',
                    detail: 'Added Sucessfully'
                });
                console.log(this.lid);
                console.log(this.lid);
                console.log(this.selected_Array);
                this.listForm.reset();
                this.lid = 0;
            }
            else {
                lodash__WEBPACK_IMPORTED_MODULE_6__["forEach"](this.selected_Array, function (data, index) {
                    if (_this.listForm.value.id === data.id) {
                        // alert(data.id);
                        data.Name = _this.listForm.value.name;
                    }
                });
                this.messageService.add({
                    severity: 'success',
                    summary: 'Success Message',
                    detail: 'updated Sucessfully'
                });
            }
            this.listForm.reset();
            this.dialog.closeAll();
            this.dialog.closeAll();
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](this.arr);
        }
    };
    ListsComponent.prototype.onDelete = function (data) {
        console.log();
        this.arr.splice(this.arr.indexOf(data), 1);
        this.messageService.add({
            severity: 'success',
            summary: 'Success Message',
            detail: 'Deleted Sucessfully'
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](this.arr);
        this.changeTableContent('', '');
    };
    ListsComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        console.log(id);
        this.confirmationService.confirm({
            message: "Are you sure that you want to proceed?",
            header: "Confirmation",
            icon: "pi pi-exclamation-triangle",
            accept: function () {
                _this.onDelete(id);
            },
            reject: function () {
            }
        });
    };
    ListsComponent.prototype.confirmDelete1 = function (id) {
        var _this = this;
        console.log(id);
        this.confirmationService.confirm({
            message: "Are you sure that you want to proceed?",
            header: "Confirmation",
            icon: "pi pi-exclamation-triangle",
            accept: function () {
                _this.onDeleteList(id);
            },
            reject: function () {
            }
        });
    };
    ListsComponent.prototype.onDeleteList = function (data) {
        console.log(data);
        ELEMENT_DATA.splice(ELEMENT_DATA.indexOf(data), 1);
        this.messageService.add({
            severity: 'success',
            summary: 'Success Message',
            detail: 'Deleted Sucessfully'
        });
        this.changeTableContent(data.listid, '');
        // this.changeTableContent(data.listid);
    };
    ListsComponent.prototype.ngOnDestroy = function () {
        this._subscriptions.unsubscribe();
    };
    ListsComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["ConfirmationService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"] },
        { type: _services_master_service__WEBPACK_IMPORTED_MODULE_11__["MasterService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('matdialog5', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])
    ], ListsComponent.prototype, "matdialog5", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('matdialog6', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])
    ], ListsComponent.prototype, "matdialog6", void 0);
    ListsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-lists',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lists.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/lists/lists.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lists.component.scss */ "./src/app/projectdashboard-layout/components/lists/lists.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            primeng_api__WEBPACK_IMPORTED_MODULE_8__["ConfirmationService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"],
            _services_master_service__WEBPACK_IMPORTED_MODULE_11__["MasterService"]])
    ], ListsComponent);
    return ListsComponent;
}());



/***/ }),

/***/ "./src/app/projectdashboard-layout/components/notification/notification.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/projectdashboard-layout/components/notification/notification.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("i {\n  padding: 6px; }\n\ntable {\n  width: 100%; }\n\n.tab-icon {\n  margin-right: 8px; }\n\nth {\n  font-weight: bold; }\n\nmat-cell:last-of-type, mat-footer-cell:last-of-type, mat-header-cell:last-of-type {\n  padding-right: 0px; }\n\n@media screen and (max-width: 960px) {\n  mat-cell:first-of-type, mat-footer-cell:first-of-type, mat-header-cell:first-of-type {\n    padding-left: 0px; }\n  .mat-table {\n    border: 0;\n    vertical-align: middle; }\n  mat-footer-row, mat-header-row, mat-row {\n    display: none; }\n  .mat-table caption {\n    font-size: 1em; }\n  /*  Enable this to hide header\r\n      .mat-table .mat-header-cell {\r\n    \r\n        border: 10px solid;\r\n        clip: rect(0 0 0 0);\r\n        height: 1px;\r\n        margin: -1px;\r\n        padding: 0;\r\n        position: absolute;\r\n        width: 1px;\r\n      }\r\n      */\n  .mat-table .mat-row {\n    border-bottom: 5px solid #ddd;\n    display: block;\n    padding: 10px; }\n  /*\r\n      .mat-table .mat-row:nth-child(even) {background: #CCC}\r\n      .mat-table .mat-row:nth-child(odd) {background: #FFF}\r\n      */\n  .mat-table .mat-cell {\n    border-bottom: 1px solid #ddd;\n    display: block;\n    font-size: 1em;\n    text-align: right;\n    font-weight: bold;\n    height: 30px;\n    margin-bottom: 4%; }\n  .mat-table .mat-cell:before {\n    /*\r\n        * aria-label has no advantage, it won't be read inside a table\r\n        content: attr(aria-label);\r\n        */\n    content: attr(data-label);\n    float: left;\n    text-transform: uppercase;\n    font-weight: normal;\n    font-size: .85em; }\n  .mat-table .mat-cell:last-child {\n    border-bottom: 0; }\n  .mat-table .mat-cell:first-child {\n    margin-top: 4%; } }\n\n.example-drag {\n  height: 125px;\n  width: 125px;\n  background: blue; }\n\n.example-drag-box {\n  height: 500px;\n  width: 500px;\n  border: 3px dotted black; }\n\n.container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 20px;\n  display: inline-block;\n  vertical-align: top; }\n\n.list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  display: block;\n  overflow: hidden; }\n\n.list-item {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  color: black;\n  font-size: 14px; }\n\n.list-item:last-child {\n  border: none; }\n\n/* Highlight the list item that is being dragged. */\n\n.cdk-drag-preview {\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n/* Animate items as they're being sorted. */\n\n.cdk-drop-dragging .cdk-drag {\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.cdk-drag-animating {\n  -webkit-transition: -webkit-transform 300ms cubic-bezier(0, 0, 0.2, 1);\n  transition: -webkit-transform 300ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 300ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 300ms cubic-bezier(0, 0, 0.2, 1); }\n\n.cdk-drag-placeholder {\n  opacity: 0; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdGRhc2hib2FyZC1sYXlvdXQvY29tcG9uZW50cy9ub3RpZmljYXRpb24vQzpcXFVzZXJzXFxhc3Vua29wcGFkXFxEZXNrdG9wXFxuZXd6b29tXFx6b29tdGVhbXMtd2ViLW5nL3NyY1xcYXBwXFxwcm9qZWN0ZGFzaGJvYXJkLWxheW91dFxcY29tcG9uZW50c1xcbm90aWZpY2F0aW9uXFxub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2plY3RkYXNoYm9hcmQtbGF5b3V0L2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQVksRUFBQTs7QUFHWjtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNHLGtCQUFrQixFQUFBOztBQUdyQjtFQUNFO0lBQ0csaUJBQWlCLEVBQUE7RUFFcEI7SUFDRSxTQUFTO0lBQ1Qsc0JBQ0YsRUFBQTtFQUNBO0lBQ0UsYUFBYSxFQUFBO0VBRWY7SUFDRSxjQUFjLEVBQUE7RUFHaEI7Ozs7Ozs7Ozs7O09DR0M7RURTRDtJQUNFLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsYUFBYSxFQUFBO0VBRWY7OztPQ05DO0VEVUQ7SUFDRSw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVc7SUFDWCxpQkFBaUIsRUFBQTtFQUVuQjtJQUNFOzs7U0NQQztJRFdELHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUVuQixnQkFBZ0IsRUFBQTtFQUVsQjtJQUNFLGdCQUFnQixFQUFBO0VBRWhCO0lBQ0EsY0FBYyxFQUFBLEVBQ2Y7O0FBVUg7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFlLEVBQUE7O0FBRWpCO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWix3QkFBd0IsRUFBQTs7QUFFMUI7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsWUFBWSxFQUFBOztBQUdkLG1EQUFBOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFIQUU4QyxFQUFBOztBQUdoRCwyQ0FBQTs7QUFDQTtFQUNFLHNFQUFzRDtFQUF0RCw4REFBc0Q7RUFBdEQsc0RBQXNEO0VBQXRELDBHQUFzRCxFQUFBOztBQUd4RDtFQUNFLHNFQUFzRDtFQUF0RCw4REFBc0Q7RUFBdEQsc0RBQXNEO0VBQXRELDBHQUFzRCxFQUFBOztBQUd4RDtFQUNFLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RkYXNoYm9hcmQtbGF5b3V0L2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pe1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0YWJsZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnRhYi1pY29uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcbiAgICB0aHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICBtYXQtY2VsbDpsYXN0LW9mLXR5cGUsIG1hdC1mb290ZXItY2VsbDpsYXN0LW9mLXR5cGUsIG1hdC1oZWFkZXItY2VsbDpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgICBtYXQtY2VsbDpmaXJzdC1vZi10eXBlLCBtYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSwgbWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIH1cclxuICAgICAgLm1hdC10YWJsZSB7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcclxuICAgICAgfVxyXG4gICAgICBtYXQtZm9vdGVyLXJvdywgbWF0LWhlYWRlci1yb3csIG1hdC1yb3cge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgLm1hdC10YWJsZSBjYXB0aW9uIHtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC8qICBFbmFibGUgdGhpcyB0byBoaWRlIGhlYWRlclxyXG4gICAgICAubWF0LXRhYmxlIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgXHJcbiAgICAgICAgYm9yZGVyOiAxMHB4IHNvbGlkO1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XHJcbiAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgbWFyZ2luOiAtMXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgIH1cclxuICAgICAgKi9cclxuICAgICAgLm1hdC10YWJsZSAubWF0LXJvdyB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAvKlxyXG4gICAgICAubWF0LXRhYmxlIC5tYXQtcm93Om50aC1jaGlsZChldmVuKSB7YmFja2dyb3VuZDogI0NDQ31cclxuICAgICAgLm1hdC10YWJsZSAubWF0LXJvdzpudGgtY2hpbGQob2RkKSB7YmFja2dyb3VuZDogI0ZGRn1cclxuICAgICAgKi9cclxuICAgICAgLm1hdC10YWJsZSAubWF0LWNlbGwge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgICB9XHJcbiAgICAgIC5tYXQtdGFibGUgLm1hdC1jZWxsOmJlZm9yZSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICAqIGFyaWEtbGFiZWwgaGFzIG5vIGFkdmFudGFnZSwgaXQgd29uJ3QgYmUgcmVhZCBpbnNpZGUgYSB0YWJsZVxyXG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoYXJpYS1sYWJlbCk7XHJcbiAgICAgICAgKi9cclxuICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogLjg1ZW07XHJcbiAgICAgIH1cclxuICAgICAgLm1hdC10YWJsZSAubWF0LWNlbGw6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgfVxyXG4gICAgICAgIC5tYXQtdGFibGUgLm1hdC1jZWxsOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0JTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLmV4YW1wbGUtZHJhZ3tcclxuICAgICAgaGVpZ2h0OiAxMjVweDtcclxuICAgICAgd2lkdGg6IDEyNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOmJsdWU7XHJcbiAgICB9XHJcbiAgICAuZXhhbXBsZS1kcmFnLWJveHtcclxuICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICBib3JkZXI6IDNweCBkb3R0ZWQgYmxhY2s7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5saXN0IHtcclxuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcclxuICAgICAgbWluLWhlaWdodDogNjBweDtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5saXN0LWl0ZW0ge1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBjdXJzb3I6IG1vdmU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxpc3QtaXRlbTpsYXN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBIaWdobGlnaHQgdGhlIGxpc3QgaXRlbSB0aGF0IGlzIGJlaW5nIGRyYWdnZWQuICovXHJcbiAgICAuY2RrLWRyYWctcHJldmlldyB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBBbmltYXRlIGl0ZW1zIGFzIHRoZXkncmUgYmVpbmcgc29ydGVkLiAqL1xyXG4gICAgLmNkay1kcm9wLWRyYWdnaW5nIC5jZGstZHJhZyB7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH0iLCJpIHtcbiAgcGFkZGluZzogNnB4OyB9XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLnRhYi1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7IH1cblxudGgge1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG5tYXQtY2VsbDpsYXN0LW9mLXR5cGUsIG1hdC1mb290ZXItY2VsbDpsYXN0LW9mLXR5cGUsIG1hdC1oZWFkZXItY2VsbDpsYXN0LW9mLXR5cGUge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgbWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSwgbWF0LWZvb3Rlci1jZWxsOmZpcnN0LW9mLXR5cGUsIG1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDsgfVxuICAubWF0LXRhYmxlIHtcbiAgICBib3JkZXI6IDA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxuICBtYXQtZm9vdGVyLXJvdywgbWF0LWhlYWRlci1yb3csIG1hdC1yb3cge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLm1hdC10YWJsZSBjYXB0aW9uIHtcbiAgICBmb250LXNpemU6IDFlbTsgfVxuICAvKiAgRW5hYmxlIHRoaXMgdG8gaGlkZSBoZWFkZXJcclxuICAgICAgLm1hdC10YWJsZSAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIFxyXG4gICAgICAgIGJvcmRlcjogMTBweCBzb2xpZDtcclxuICAgICAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xyXG4gICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgIG1hcmdpbjogLTFweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMXB4O1xyXG4gICAgICB9XHJcbiAgICAgICovXG4gIC5tYXQtdGFibGUgLm1hdC1yb3cge1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZGRkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHg7IH1cbiAgLypcclxuICAgICAgLm1hdC10YWJsZSAubWF0LXJvdzpudGgtY2hpbGQoZXZlbikge2JhY2tncm91bmQ6ICNDQ0N9XHJcbiAgICAgIC5tYXQtdGFibGUgLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCkge2JhY2tncm91bmQ6ICNGRkZ9XHJcbiAgICAgICovXG4gIC5tYXQtdGFibGUgLm1hdC1jZWxsIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNCU7IH1cbiAgLm1hdC10YWJsZSAubWF0LWNlbGw6YmVmb3JlIHtcbiAgICAvKlxyXG4gICAgICAgICogYXJpYS1sYWJlbCBoYXMgbm8gYWR2YW50YWdlLCBpdCB3b24ndCBiZSByZWFkIGluc2lkZSBhIHRhYmxlXHJcbiAgICAgICAgY29udGVudDogYXR0cihhcmlhLWxhYmVsKTtcclxuICAgICAgICAqL1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogLjg1ZW07IH1cbiAgLm1hdC10YWJsZSAubWF0LWNlbGw6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMDsgfVxuICAubWF0LXRhYmxlIC5tYXQtY2VsbDpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXRvcDogNCU7IH0gfVxuXG4uZXhhbXBsZS1kcmFnIHtcbiAgaGVpZ2h0OiAxMjVweDtcbiAgd2lkdGg6IDEyNXB4O1xuICBiYWNrZ3JvdW5kOiBibHVlOyB9XG5cbi5leGFtcGxlLWRyYWctYm94IHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDUwMHB4O1xuICBib3JkZXI6IDNweCBkb3R0ZWQgYmxhY2s7IH1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB9XG5cbi5saXN0IHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgbWluLWhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLmxpc3QtaXRlbSB7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogbW92ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNHB4OyB9XG5cbi5saXN0LWl0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogbm9uZTsgfVxuXG4vKiBIaWdobGlnaHQgdGhlIGxpc3QgaXRlbSB0aGF0IGlzIGJlaW5nIGRyYWdnZWQuICovXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi8qIEFuaW1hdGUgaXRlbXMgYXMgdGhleSdyZSBiZWluZyBzb3J0ZWQuICovXG4uY2RrLWRyb3AtZHJhZ2dpbmcgLmNkay1kcmFnIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpOyB9XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7IH1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDsgfVxuIl19 */");

/***/ }),

/***/ "./src/app/projectdashboard-layout/components/notification/notification.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/projectdashboard-layout/components/notification/notification.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/local-storage.service */ "./src/app/shared/local-storage.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");









var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(localStorageService, router, dialog, fb, confirmationService) {
        this.localStorageService = localStorageService;
        this.router = router;
        this.dialog = dialog;
        this.fb = fb;
        this.confirmationService = confirmationService;
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.displayedColumn = ['position', 'field', 'description'];
        this.todo = [
            "Actual Duration",
            "Archived",
            "Assigned To",
            "Attachment",
            "Build Number"
        ];
        this.done = ["Build Number of Fix"];
        this.fieldData = [
            { id: 1, fieldlabel: 'Work Item Created', fieldtype: 'Created', format: 'True' },
            { id: 2, fieldlabel: 'Work Item Updated', fieldtype: 'Updated', format: 'True' },
            { id: 3, fieldlabel: 'Work Item Deleted', fieldtype: 'Deleted', format: 'True' },
        ];
        this.data = Object.assign(this.fieldData);
        this.displayedColumns = ['id', 'Field Label', 'Field Type', 'Format', 'Actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.fieldData);
        this.selectDatasource = this.fieldData;
        this.color = 'primary',
            this.fieldForm = this.fb.group({
                id: [],
                fieldtype: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                fieldlabel: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                listvalue: []
            });
    }
    NotificationComponent.prototype.drop = function (event) {
        if (event.previousContainer == event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["moveItemInArray"])(this.todo, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    NotificationComponent.prototype.ngOnInit = function () {
        this.fieldCategory = [
            { id: 1, fieldName: 'Created', fieldFormat: '', List: [] },
            { id: 2, fieldName: 'Updated', fieldFormat: '', List: this.listCategory },
            { id: 3, fieldName: 'Deleted', fieldFormat: '', List: [] },
        ];
        this.proCategory = [
            { id: 1, proName: 'All Project', proFormat: '', List: [] },
            { id: 1, proName: 'ZoomTeams', proFormat: '', List: [] },
            { id: 1, proName: 'YourDrs', proFormat: '', List: [] },
            { id: 1, proName: 'Web', proFormat: '', List: [] },
        ];
        this.fCategory = [
            { id: 1, fName: 'Actual Duration', fFormat: '', List: [] },
            { id: 1, fName: 'Archived', fFormat: '', List: [] },
            { id: 1, fName: 'Assigned To', fFormat: '', List: [] },
            { id: 1, fName: 'Attachments', fFormat: '', List: [] },
            { id: 1, fName: 'Build Number', fFormat: '', List: [] },
            { id: 1, fName: 'Build Number of Fix', fFormat: '', List: [] },
            { id: 1, fName: 'Changed By', fFormat: '', List: [] },
            { id: 1, fName: 'Comments', fFormat: '', List: [] },
            { id: 1, fName: 'Created By', fFormat: '', List: [] },
            { id: 1, fName: 'Created By Email Address', fFormat: '', List: [] },
            { id: 1, fName: 'Created Date', fFormat: '', List: [] },
            { id: 1, fName: 'Customer Contact', fFormat: '', List: [] },
            { id: 1, fName: 'Date Fixed', fFormat: '', List: [] },
            { id: 1, fName: 'Date Found', fFormat: '', List: [] },
            { id: 1, fName: 'Description', fFormat: '', List: [] },
            { id: 1, fName: 'Due Date', fFormat: '', List: [] },
            { id: 1, fName: 'Emails', fFormat: '', List: [] },
            { id: 1, fName: 'Initial Estimate', fFormat: '', List: [] },
            { id: 1, fName: 'Priority', fFormat: '', List: [] },
        ];
        this.pCategory = [
            { id: 1, pName: 'High', pFormat: '', List: [] },
            { id: 1, pName: 'Medium', pFormat: '', List: [] },
            { id: 1, pName: 'Low', pFormat: '', List: [] }
        ];
        var E_DATA = [
            { position: 1, field: 'Priority', description: 'high' },
            { position: 2, field: 'Actual Duration', description: 'low' },
            { position: 3, field: 'Assigned To', description: 'medium' }
        ];
    };
    NotificationComponent.prototype.openDialog = function (passedTitle) {
        var _this = this;
        this.dialogTitle = passedTitle;
        var dialogRef = this.dialog.open(this.matdialog, { disableClose: true
        });
        this._subscriptions.add(dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.animal = result;
            _this.fieldForm.reset();
        }));
    };
    NotificationComponent.prototype.openDialogEdit = function (passedTitle, formData) {
        this.dialogTitle = passedTitle;
        // console.log(formData);
        this.fieldForm.patchValue({
            id: formData.id,
            fieldtype: formData.fieldtype,
            fieldlabel: formData.fieldlabel,
            listvalue: formData.listvalue
        });
        this.dialog.open(this.matdialog, {
        // height: '400px',
        // width: '600px',
        });
    };
    NotificationComponent.prototype.onFieldSave = function () {
        // console.log(this.fieldForm.value.id);
        if (this.fieldForm.value.id === null) {
            var req = {
                id: this.fieldData.length + 1,
                fieldlabel: this.fieldForm.value.fieldlabel,
                fieldtype: this.fieldForm.value.fieldtype,
                listvalue: this.fieldForm.value.listvalue,
                format: ''
            };
            console.log(req);
            stop;
            this.data.push(req);
        }
        else {
            for (var i = 0; i < this.data.length; i++) {
                // console.log(this.data);
                // console.log(this.data[i].id);
                if (this.data[i].id === this.fieldForm.value.id) {
                    console.log('if');
                    // alert(this.fieldForm.value.id);
                    this.data[i].id = this.fieldForm.value.id;
                    this.data[i].fieldlabel = this.fieldForm.value.fieldlabel;
                    this.data[i].fieldtype = this.fieldForm.value.fieldtype;
                    this.data[i].format = this.fieldForm.value.format;
                    this.data[i].listvalue = this.fieldForm.value.listvalue;
                }
                else {
                    console.log('else');
                }
                this.fieldForm.reset();
                this.dialog.closeAll();
            }
        }
        this.dialog.closeAll();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.data);
        // console.log(fieldData);
    };
    NotificationComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        console.log(id);
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: function () {
                _this.onDeleteField(id);
            },
            reject: function () {
            }
        });
    };
    NotificationComponent.prototype.onDeleteField = function (deleteItem) {
        this.data.splice(this.fieldData.indexOf(deleteItem), 1);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.data);
    };
    NotificationComponent.prototype.onClone = function (cloneElement) {
        var clonedata = {
            id: this.fieldData.length + 1,
            fieldlabel: cloneElement.fieldlabel + ' ' + 'copy',
            fieldtype: cloneElement.fieldtype,
            format: cloneElement.format
        };
        this.data.push(clonedata);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.data);
    };
    NotificationComponent.prototype.logout = function () {
        // remove user from local storage to log user out
        this.localStorageService.clearAllItem();
        this.router.navigate(['login']);
    };
    NotificationComponent.prototype.getFontSize = function () {
        // return Math.max(10, this.fieldForm.value.fontSize);
    };
    NotificationComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    NotificationComponent.prototype.ngOnDestroy = function () {
        this._subscriptions.unsubscribe();
    };
    NotificationComponent.ctorParameters = function () { return [
        { type: _shared_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('matdialog', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], NotificationComponent.prototype, "matdialog", void 0);
    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-notification',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/notification/notification.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notification.component.scss */ "./src/app/projectdashboard-layout/components/notification/notification.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            primeng_api__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/projectdashboard-layout/components/security-roles/administrator/administrator.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/projectdashboard-layout/components/security-roles/administrator/administrator.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RkYXNoYm9hcmQtbGF5b3V0L2NvbXBvbmVudHMvc2VjdXJpdHktcm9sZXMvYWRtaW5pc3RyYXRvci9hZG1pbmlzdHJhdG9yLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/projectdashboard-layout/components/security-roles/administrator/administrator.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/projectdashboard-layout/components/security-roles/administrator/administrator.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: TodoItemNode, TodoItemFlatNode, ChecklistDatabase3, AdministratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemNode", function() { return TodoItemNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemFlatNode", function() { return TodoItemFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistDatabase3", function() { return ChecklistDatabase3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministratorComponent", function() { return AdministratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// Angular Material Tree-Node Start

var TodoItemNode = /** @class */ (function () {
    function TodoItemNode() {
    }
    return TodoItemNode;
}());

/** Flat to-do item node with expandable and level information */
var TodoItemFlatNode = /** @class */ (function () {
    function TodoItemFlatNode() {
    }
    return TodoItemFlatNode;
}());

/**
 * The Json object for to-do list data.
 */
var TREE_DATA = {
    'Manage': [
        'Manage Users'
    ],
    'User & Teams': [
        'View The Orginize Panel Tree',
        'Add',
        'Edit',
        'Delete'
    ],
    'Releases': [
        'View The Orginize Panel Tree(And Release Planner)',
        'Add',
        'Edit',
        'Delete'
    ],
    'General Features': [
        'Export',
        'Import',
        'Link Related Items',
        'View Standup'
    ],
    'Dashboard': [
        'View Dashboards',
        'Edit Public Dashboards',
        'Edit Private Dashboards'
    ]
};
/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
var ChecklistDatabase3 = /** @class */ (function () {
    function ChecklistDatabase3() {
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this.initialize();
    }
    Object.defineProperty(ChecklistDatabase3.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    ChecklistDatabase3.prototype.initialize = function () {
        // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
        //     file node as children.
        var data = this.buildFileTree(TREE_DATA, 0);
        // Notify the change.
        this.dataChange.next(data);
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     */
    ChecklistDatabase3.prototype.buildFileTree = function (value, level) {
        var data = [];
        for (var k in value) {
            var v = value[k];
            var node = new TodoItemNode();
            node.item = "" + k;
            if (v === null || v === undefined) {
                // no action
            }
            else if (typeof v === 'object') {
                node.children = this.buildFileTree(v, level + 1);
            }
            else {
                node.item = v;
            }
            data.push(node);
        }
        return data;
    };
    /** Add an item to to-do list */
    ChecklistDatabase3.prototype.insertItem = function (parent, name) {
        var child = { item: name };
        if (parent.children) {
            parent.children.push(child);
            this.dataChange.next(this.data);
        }
    };
    ChecklistDatabase3.prototype.updateItem = function (node, name) {
        node.item = name;
        this.dataChange.next(this.data);
    };
    ChecklistDatabase3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChecklistDatabase3);
    return ChecklistDatabase3;
}());

// Angular Material Tree-Node End





var AdministratorComponent = /** @class */ (function () {
    // Angular Material Tree-Node End
    function AdministratorComponent(
    // Angular Material Tree-Node Start
    database
    // Angular Material Tree-Node End
    ) {
        // Angular Material Tree-Node Start
        var _this = this;
        this.database = database;
        // Angular Material Tree-Node Start
        /** Map from flat node to nested node. This helps us finding the nested node to be modified */
        this.flatNodeMap = new Map();
        /** Map from nested node to flattened node. This helps us to keep the same object for selection */
        this.nestedNodeMap = new Map();
        /** A selected parent node to be inserted */
        this.selectedParent = null;
        /** The new item's name */
        this.newItemName = '';
        /** The selection for checklist */
        this.checklistSelection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true /* multiple */);
        // Angular Material Tree-Node Start
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.getChildren = function (node) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(node.children);
        };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.hasNoContent = function (_, _nodeData) { return _nodeData.item === ''; };
        /**
         * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
         */
        this.transformer = function (node, level) {
            var flatNode = _this.nestedNodeMap.has(node) && _this.nestedNodeMap.get(node).item === node.item
                ? _this.nestedNodeMap.get(node)
                : new TodoItemFlatNode();
            flatNode.item = node.item;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            _this.flatNodeMap.set(flatNode, node);
            _this.nestedNodeMap.set(node, flatNode);
            return flatNode;
        };
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlattener"](this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(function (data) {
            _this.dataSource.data = data;
        });
        // Angular Material Tree-Node End
    }
    AdministratorComponent.prototype.ngOnInit = function () {
    };
    /** Whether all the descendants of the node are selected */
    AdministratorComponent.prototype.descendantsAllSelected = function (node) {
        var _this = this;
        var descendants = this.treeControl.getDescendants(node);
        return descendants.every(function (child) { return _this.checklistSelection.isSelected(child); });
    };
    /** Whether part of the descendants are selected */
    AdministratorComponent.prototype.descendantsPartiallySelected = function (node) {
        var _this = this;
        var descendants = this.treeControl.getDescendants(node);
        var result = descendants.some(function (child) { return _this.checklistSelection.isSelected(child); });
        return result && !this.descendantsAllSelected(node);
    };
    /** Toggle the to-do item selection. Select/deselect all the descendants node */
    AdministratorComponent.prototype.todoItemSelectionToggle = function (node) {
        var _a, _b;
        this.checklistSelection.toggle(node);
        var descendants = this.treeControl.getDescendants(node);
        this.checklistSelection.isSelected(node)
            ? (_a = this.checklistSelection).select.apply(_a, descendants) : (_b = this.checklistSelection).deselect.apply(_b, descendants);
    };
    /** Select the category so we can insert the new item. */
    AdministratorComponent.prototype.addNewItem = function (node) {
        var parentNode = this.flatNodeMap.get(node);
        this.database.insertItem(parentNode, '');
        this.treeControl.expand(node);
    };
    /** Save the node to database */
    AdministratorComponent.prototype.saveNode = function (node, itemValue) {
        var nestedNode = this.flatNodeMap.get(node);
        this.database.updateItem(nestedNode, itemValue);
    };
    AdministratorComponent.ctorParameters = function () { return [
        { type: ChecklistDatabase3 }
    ]; };
    AdministratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-administrator',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./administrator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/security-roles/administrator/administrator.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./administrator.component.scss */ "./src/app/projectdashboard-layout/components/security-roles/administrator/administrator.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ChecklistDatabase3
            // Angular Material Tree-Node End
        ])
    ], AdministratorComponent);
    return AdministratorComponent;
}());



/***/ }),

/***/ "./src/app/projectdashboard-layout/components/security-roles/projectprivilages1/projectprivilages1.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/projectdashboard-layout/components/security-roles/projectprivilages1/projectprivilages1.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RkYXNoYm9hcmQtbGF5b3V0L2NvbXBvbmVudHMvc2VjdXJpdHktcm9sZXMvcHJvamVjdHByaXZpbGFnZXMxL3Byb2plY3Rwcml2aWxhZ2VzMS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/projectdashboard-layout/components/security-roles/projectprivilages1/projectprivilages1.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/projectdashboard-layout/components/security-roles/projectprivilages1/projectprivilages1.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: TodoItemNode, TodoItemFlatNode, ChecklistDatabase1, Projectprivilages1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemNode", function() { return TodoItemNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemFlatNode", function() { return TodoItemFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistDatabase1", function() { return ChecklistDatabase1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projectprivilages1Component", function() { return Projectprivilages1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// Angular Material Tree-Node Start

var TodoItemNode = /** @class */ (function () {
    function TodoItemNode() {
    }
    return TodoItemNode;
}());

/** Flat to-do item node with expandable and level information */
var TodoItemFlatNode = /** @class */ (function () {
    function TodoItemFlatNode() {
    }
    return TodoItemFlatNode;
}());

/**
 * The Json object for to-do list data.
 */
var TREE_DATA = {
    'Work Items': [
        'View Work Item',
        'Add Work Item',
        'Edit Work Item Using Project Template',
        'Edit Work Item Using Workflow Template',
        'Delete Work Item',
        'View Work Item Attachments',
        'Add Work Item Attachments',
        'Edit Work Item Attachments',
        'Delete Work Item Attachments',
        'Work Logs-View',
        'Work Logs-Add/Edit/Delete',
        'Add Other Users Work Logs',
        'Edit Other Users Work Logs',
        'Delete Other Users Work Logs',
        'View Work Item Emails',
        'Send Work Item Emails',
        'Delete Work Item Emails',
        'View Work Item History',
        'Work Item Source Control'
    ]
};
/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
var ChecklistDatabase1 = /** @class */ (function () {
    function ChecklistDatabase1() {
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this.initialize();
    }
    Object.defineProperty(ChecklistDatabase1.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    ChecklistDatabase1.prototype.initialize = function () {
        // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
        //     file node as children.
        var data = this.buildFileTree(TREE_DATA, 0);
        // Notify the change.
        this.dataChange.next(data);
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     */
    ChecklistDatabase1.prototype.buildFileTree = function (value, level) {
        var data = [];
        for (var k in value) {
            var v = value[k];
            var node = new TodoItemNode();
            node.item = "" + k;
            if (v === null || v === undefined) {
                // no action
            }
            else if (typeof v === 'object') {
                node.children = this.buildFileTree(v, level + 1);
            }
            else {
                node.item = v;
            }
            data.push(node);
        }
        return data;
    };
    /** Add an item to to-do list */
    ChecklistDatabase1.prototype.insertItem = function (parent, name) {
        var child = { item: name };
        if (parent.children) {
            parent.children.push(child);
            this.dataChange.next(this.data);
        }
    };
    ChecklistDatabase1.prototype.updateItem = function (node, name) {
        node.item = name;
        this.dataChange.next(this.data);
    };
    ChecklistDatabase1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChecklistDatabase1);
    return ChecklistDatabase1;
}());

// Angular Material Tree-Node End





var Projectprivilages1Component = /** @class */ (function () {
    // Angular Material Tree-Node End
    function Projectprivilages1Component(
    // Angular Material Tree-Node Start
    database
    // Angular Material Tree-Node End
    ) {
        // Angular Material Tree-Node Start
        var _this = this;
        this.database = database;
        // Angular Material Tree-Node Start
        /** Map from flat node to nested node. This helps us finding the nested node to be modified */
        this.flatNodeMap = new Map();
        /** Map from nested node to flattened node. This helps us to keep the same object for selection */
        this.nestedNodeMap = new Map();
        /** A selected parent node to be inserted */
        this.selectedParent = null;
        /** The new item's name */
        this.newItemName = '';
        /** The selection for checklist */
        this.checklistSelection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true /* multiple */);
        // Angular Material Tree-Node Start
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.getChildren = function (node) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(node.children);
        };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.hasNoContent = function (_, _nodeData) { return _nodeData.item === ''; };
        /**
         * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
         */
        this.transformer = function (node, level) {
            var flatNode = _this.nestedNodeMap.has(node) && _this.nestedNodeMap.get(node).item === node.item
                ? _this.nestedNodeMap.get(node)
                : new TodoItemFlatNode();
            flatNode.item = node.item;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            _this.flatNodeMap.set(flatNode, node);
            _this.nestedNodeMap.set(node, flatNode);
            return flatNode;
        };
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlattener"](this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(function (data) {
            _this.dataSource.data = data;
        });
        // Angular Material Tree-Node End
    }
    Projectprivilages1Component.prototype.ngOnInit = function () {
    };
    /** Whether all the descendants of the node are selected */
    Projectprivilages1Component.prototype.descendantsAllSelected = function (node) {
        var _this = this;
        var descendants = this.treeControl.getDescendants(node);
        return descendants.every(function (child) { return _this.checklistSelection.isSelected(child); });
    };
    /** Whether part of the descendants are selected */
    Projectprivilages1Component.prototype.descendantsPartiallySelected = function (node) {
        var _this = this;
        var descendants = this.treeControl.getDescendants(node);
        var result = descendants.some(function (child) { return _this.checklistSelection.isSelected(child); });
        return result && !this.descendantsAllSelected(node);
    };
    /** Toggle the to-do item selection. Select/deselect all the descendants node */
    Projectprivilages1Component.prototype.todoItemSelectionToggle = function (node) {
        var _a, _b;
        this.checklistSelection.toggle(node);
        var descendants = this.treeControl.getDescendants(node);
        this.checklistSelection.isSelected(node)
            ? (_a = this.checklistSelection).select.apply(_a, descendants) : (_b = this.checklistSelection).deselect.apply(_b, descendants);
    };
    /** Select the category so we can insert the new item. */
    Projectprivilages1Component.prototype.addNewItem = function (node) {
        var parentNode = this.flatNodeMap.get(node);
        this.database.insertItem(parentNode, '');
        this.treeControl.expand(node);
    };
    /** Save the node to database */
    Projectprivilages1Component.prototype.saveNode = function (node, itemValue) {
        var nestedNode = this.flatNodeMap.get(node);
        this.database.updateItem(nestedNode, itemValue);
    };
    Projectprivilages1Component.ctorParameters = function () { return [
        { type: ChecklistDatabase1 }
    ]; };
    Projectprivilages1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projectprivilages1',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projectprivilages1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/security-roles/projectprivilages1/projectprivilages1.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projectprivilages1.component.scss */ "./src/app/projectdashboard-layout/components/security-roles/projectprivilages1/projectprivilages1.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ChecklistDatabase1
            // Angular Material Tree-Node End
        ])
    ], Projectprivilages1Component);
    return Projectprivilages1Component;
}());



/***/ }),

/***/ "./src/app/projectdashboard-layout/components/security-roles/projectprivilages2/projectprivilages2.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/projectdashboard-layout/components/security-roles/projectprivilages2/projectprivilages2.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RkYXNoYm9hcmQtbGF5b3V0L2NvbXBvbmVudHMvc2VjdXJpdHktcm9sZXMvcHJvamVjdHByaXZpbGFnZXMyL3Byb2plY3Rwcml2aWxhZ2VzMi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/projectdashboard-layout/components/security-roles/projectprivilages2/projectprivilages2.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/projectdashboard-layout/components/security-roles/projectprivilages2/projectprivilages2.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: TodoItemNode, TodoItemFlatNode, ChecklistDatabase2, Projectprivilages2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemNode", function() { return TodoItemNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemFlatNode", function() { return TodoItemFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistDatabase2", function() { return ChecklistDatabase2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projectprivilages2Component", function() { return Projectprivilages2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// Angular Material Tree-Node Start

var TodoItemNode = /** @class */ (function () {
    function TodoItemNode() {
    }
    return TodoItemNode;
}());

/** Flat to-do item node with expandable and level information */
var TodoItemFlatNode = /** @class */ (function () {
    function TodoItemFlatNode() {
    }
    return TodoItemFlatNode;
}());

/**
 * The Json object for to-do list data.
 */
var TREE_DATA = {
    'All Projects': {
        'Death Star (Example Projects)': {
            'Defence': null,
            'Infrastructure': null,
            'Weapon System': null,
        },
        'Death Star1 (Example Projects)': {
            'Defence': null,
            'Infrastructure': null,
            'Weapon System': null,
        },
        'Death Star2 (Example Projects)': {
            'Defence': null,
            'Infrastructure': null,
            'Weapon System': null,
        }
    }
};
/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
var ChecklistDatabase2 = /** @class */ (function () {
    function ChecklistDatabase2() {
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this.initialize();
    }
    Object.defineProperty(ChecklistDatabase2.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    ChecklistDatabase2.prototype.initialize = function () {
        // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
        //     file node as children.
        var data = this.buildFileTree(TREE_DATA, 0);
        // Notify the change.
        this.dataChange.next(data);
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     */
    ChecklistDatabase2.prototype.buildFileTree = function (value, level) {
        var data = [];
        for (var k in value) {
            var v = value[k];
            var node = new TodoItemNode();
            node.item = "" + k;
            if (v === null || v === undefined) {
                // no action
            }
            else if (typeof v === 'object') {
                node.children = this.buildFileTree(v, level + 1);
            }
            else {
                node.item = v;
            }
            data.push(node);
        }
        return data;
    };
    /** Add an item to to-do list */
    ChecklistDatabase2.prototype.insertItem = function (parent, name) {
        var child = { item: name };
        if (parent.children) {
            parent.children.push(child);
            this.dataChange.next(this.data);
        }
    };
    ChecklistDatabase2.prototype.updateItem = function (node, name) {
        node.item = name;
        this.dataChange.next(this.data);
    };
    ChecklistDatabase2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChecklistDatabase2);
    return ChecklistDatabase2;
}());

// Angular Material Tree-Node End





var Projectprivilages2Component = /** @class */ (function () {
    // Angular Material Tree-Node End
    function Projectprivilages2Component(
    // Angular Material Tree-Node Start
    database
    // Angular Material Tree-Node End
    ) {
        // Angular Material Tree-Node Start
        var _this = this;
        this.database = database;
        // Angular Material Tree-Node Start
        /** Map from flat node to nested node. This helps us finding the nested node to be modified */
        this.flatNodeMap = new Map();
        /** Map from nested node to flattened node. This helps us to keep the same object for selection */
        this.nestedNodeMap = new Map();
        /** A selected parent node to be inserted */
        this.selectedParent = null;
        /** The new item's name */
        this.newItemName = '';
        /** The selection for checklist */
        this.checklistSelection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true /* multiple */);
        // Angular Material Tree-Node Start
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.getChildren = function (node) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(node.children);
        };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.hasNoContent = function (_, _nodeData) { return _nodeData.item === ''; };
        /**
         * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
         */
        this.transformer = function (node, level) {
            var flatNode = _this.nestedNodeMap.has(node) && _this.nestedNodeMap.get(node).item === node.item
                ? _this.nestedNodeMap.get(node)
                : new TodoItemFlatNode();
            flatNode.item = node.item;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            _this.flatNodeMap.set(flatNode, node);
            _this.nestedNodeMap.set(node, flatNode);
            return flatNode;
        };
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlattener"](this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(function (data) {
            _this.dataSource.data = data;
        });
        // Angular Material Tree-Node End
    }
    Projectprivilages2Component.prototype.ngOnInit = function () {
    };
    /** Whether all the descendants of the node are selected */
    Projectprivilages2Component.prototype.descendantsAllSelected = function (node) {
        var _this = this;
        var descendants = this.treeControl.getDescendants(node);
        return descendants.every(function (child) { return _this.checklistSelection.isSelected(child); });
    };
    /** Whether part of the descendants are selected */
    Projectprivilages2Component.prototype.descendantsPartiallySelected = function (node) {
        var _this = this;
        var descendants = this.treeControl.getDescendants(node);
        var result = descendants.some(function (child) { return _this.checklistSelection.isSelected(child); });
        return result && !this.descendantsAllSelected(node);
    };
    /** Toggle the to-do item selection. Select/deselect all the descendants node */
    Projectprivilages2Component.prototype.todoItemSelectionToggle = function (node) {
        var _a, _b;
        this.checklistSelection.toggle(node);
        var descendants = this.treeControl.getDescendants(node);
        this.checklistSelection.isSelected(node)
            ? (_a = this.checklistSelection).select.apply(_a, descendants) : (_b = this.checklistSelection).deselect.apply(_b, descendants);
    };
    /** Select the category so we can insert the new item. */
    Projectprivilages2Component.prototype.addNewItem = function (node) {
        var parentNode = this.flatNodeMap.get(node);
        this.database.insertItem(parentNode, '');
        this.treeControl.expand(node);
    };
    /** Save the node to database */
    Projectprivilages2Component.prototype.saveNode = function (node, itemValue) {
        var nestedNode = this.flatNodeMap.get(node);
        this.database.updateItem(nestedNode, itemValue);
    };
    Projectprivilages2Component.ctorParameters = function () { return [
        { type: ChecklistDatabase2 }
    ]; };
    Projectprivilages2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projectprivilages2',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projectprivilages2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/security-roles/projectprivilages2/projectprivilages2.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projectprivilages2.component.scss */ "./src/app/projectdashboard-layout/components/security-roles/projectprivilages2/projectprivilages2.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ChecklistDatabase2
            // Angular Material Tree-Node End
        ])
    ], Projectprivilages2Component);
    return Projectprivilages2Component;
}());



/***/ }),

/***/ "./src/app/projectdashboard-layout/components/security-roles/reports/reports.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/projectdashboard-layout/components/security-roles/reports/reports.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RkYXNoYm9hcmQtbGF5b3V0L2NvbXBvbmVudHMvc2VjdXJpdHktcm9sZXMvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/projectdashboard-layout/components/security-roles/reports/reports.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/projectdashboard-layout/components/security-roles/reports/reports.component.ts ***!
  \************************************************************************************************/
/*! exports provided: TodoItemNode, TodoItemFlatNode, ChecklistDatabase4, ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemNode", function() { return TodoItemNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemFlatNode", function() { return TodoItemFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistDatabase4", function() { return ChecklistDatabase4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// Angular Material Tree-Node Start

var TodoItemNode = /** @class */ (function () {
    function TodoItemNode() {
    }
    return TodoItemNode;
}());

/** Flat to-do item node with expandable and level information */
var TodoItemFlatNode = /** @class */ (function () {
    function TodoItemFlatNode() {
    }
    return TodoItemFlatNode;
}());

/**
 * The Json object for to-do list data.
 */
var TREE_DATA = {
    'Work Item Reports': [
        'Wrok Item List',
        'Work Item Details',
        'Work Item By Status Chart',
        'Work Item By User Chart',
        'Work Item By User',
        'Work Item Estimated Vs Actual',
        'Work Item Request By Week',
        'Work Item Completed By Week',
    ],
    'Tickets Reports': [
        'Tickets List',
        'Tickets Details',
        'Tickets By Users',
        'Tickets By Escalations',
        'Tickets Reported By Day',
        'Tickets Reported By Week',
        'Tickets Reported By Month',
        'Tickets By Escalations',
    ],
    'All Items Reports': [
        'Item List'
    ],
    'Project Reports': [
        'Project Lsit'
    ],
    'Work Log Reports': [
        'Work Log Lists'
    ]
};
/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
var ChecklistDatabase4 = /** @class */ (function () {
    function ChecklistDatabase4() {
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this.initialize();
    }
    Object.defineProperty(ChecklistDatabase4.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    ChecklistDatabase4.prototype.initialize = function () {
        // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
        //     file node as children.
        var data = this.buildFileTree(TREE_DATA, 0);
        // Notify the change.
        this.dataChange.next(data);
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     */
    ChecklistDatabase4.prototype.buildFileTree = function (value, level) {
        var data = [];
        for (var k in value) {
            var v = value[k];
            var node = new TodoItemNode();
            node.item = "" + k;
            if (v === null || v === undefined) {
                // no action
            }
            else if (typeof v === 'object') {
                node.children = this.buildFileTree(v, level + 1);
            }
            else {
                node.item = v;
            }
            data.push(node);
        }
        return data;
    };
    /** Add an item to to-do list */
    ChecklistDatabase4.prototype.insertItem = function (parent, name) {
        var child = { item: name };
        if (parent.children) {
            parent.children.push(child);
            this.dataChange.next(this.data);
        }
    };
    ChecklistDatabase4.prototype.updateItem = function (node, name) {
        node.item = name;
        this.dataChange.next(this.data);
    };
    ChecklistDatabase4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChecklistDatabase4);
    return ChecklistDatabase4;
}());

// Angular Material Tree-Node End





var ReportsComponent = /** @class */ (function () {
    // Angular Material Tree-Node End
    function ReportsComponent(
    // Angular Material Tree-Node Start
    database
    // Angular Material Tree-Node End
    ) {
        // Angular Material Tree-Node Start
        var _this = this;
        this.database = database;
        // Angular Material Tree-Node Start
        /** Map from flat node to nested node. This helps us finding the nested node to be modified */
        this.flatNodeMap = new Map();
        /** Map from nested node to flattened node. This helps us to keep the same object for selection */
        this.nestedNodeMap = new Map();
        /** A selected parent node to be inserted */
        this.selectedParent = null;
        /** The new item's name */
        this.newItemName = '';
        /** The selection for checklist */
        this.checklistSelection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true /* multiple */);
        // Angular Material Tree-Node Start
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.getChildren = function (node) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(node.children);
        };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.hasNoContent = function (_, _nodeData) { return _nodeData.item === ''; };
        /**
         * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
         */
        this.transformer = function (node, level) {
            var flatNode = _this.nestedNodeMap.has(node) && _this.nestedNodeMap.get(node).item === node.item
                ? _this.nestedNodeMap.get(node)
                : new TodoItemFlatNode();
            flatNode.item = node.item;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            _this.flatNodeMap.set(flatNode, node);
            _this.nestedNodeMap.set(node, flatNode);
            return flatNode;
        };
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlattener"](this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(function (data) {
            _this.dataSource.data = data;
        });
        // Angular Material Tree-Node End
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    /** Whether all the descendants of the node are selected */
    ReportsComponent.prototype.descendantsAllSelected = function (node) {
        var _this = this;
        var descendants = this.treeControl.getDescendants(node);
        return descendants.every(function (child) { return _this.checklistSelection.isSelected(child); });
    };
    /** Whether part of the descendants are selected */
    ReportsComponent.prototype.descendantsPartiallySelected = function (node) {
        var _this = this;
        var descendants = this.treeControl.getDescendants(node);
        var result = descendants.some(function (child) { return _this.checklistSelection.isSelected(child); });
        return result && !this.descendantsAllSelected(node);
    };
    /** Toggle the to-do item selection. Select/deselect all the descendants node */
    ReportsComponent.prototype.todoItemSelectionToggle = function (node) {
        var _a, _b;
        this.checklistSelection.toggle(node);
        var descendants = this.treeControl.getDescendants(node);
        this.checklistSelection.isSelected(node)
            ? (_a = this.checklistSelection).select.apply(_a, descendants) : (_b = this.checklistSelection).deselect.apply(_b, descendants);
    };
    /** Select the category so we can insert the new item. */
    ReportsComponent.prototype.addNewItem = function (node) {
        var parentNode = this.flatNodeMap.get(node);
        this.database.insertItem(parentNode, '');
        this.treeControl.expand(node);
    };
    /** Save the node to database */
    ReportsComponent.prototype.saveNode = function (node, itemValue) {
        var nestedNode = this.flatNodeMap.get(node);
        this.database.updateItem(nestedNode, itemValue);
    };
    ReportsComponent.ctorParameters = function () { return [
        { type: ChecklistDatabase4 }
    ]; };
    ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reports',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/security-roles/reports/reports.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reports.component.scss */ "./src/app/projectdashboard-layout/components/security-roles/reports/reports.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ChecklistDatabase4
            // Angular Material Tree-Node End
        ])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/projectdashboard-layout/components/security-roles/security-roles.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/projectdashboard-layout/components/security-roles/security-roles.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("i {\n  padding: 6px; }\n\ntable {\n  width: 100%; }\n\n.tab-icon {\n  margin-right: 8px; }\n\nth {\n  font-weight: bold; }\n\nmat-cell:last-of-type, mat-footer-cell:last-of-type, mat-header-cell:last-of-type {\n  padding-right: 0px; }\n\n@media screen and (max-width: 960px) {\n  mat-cell:first-of-type, mat-footer-cell:first-of-type, mat-header-cell:first-of-type {\n    padding-left: 0px; }\n  .mat-table {\n    border: 0;\n    vertical-align: middle; }\n  mat-footer-row, mat-header-row, mat-row {\n    display: none; }\n  .mat-table caption {\n    font-size: 1em; }\n  /*  Enable this to hide header\r\n    .mat-table .mat-header-cell {\r\n\r\n      border: 10px solid;\r\n      clip: rect(0 0 0 0);\r\n      height: 1px;\r\n      margin: -1px;\r\n      padding: 0;\r\n      position: absolute;\r\n      width: 1px;\r\n    }\r\n    */\n  .mat-table .mat-row {\n    border-bottom: 5px solid #ddd;\n    display: block; }\n  /*\r\n    .mat-table .mat-row:nth-child(even) {background: #CCC}\r\n    .mat-table .mat-row:nth-child(odd) {background: #FFF}\r\n    */\n  .mat-table .mat-cell {\n    border-bottom: 1px solid #ddd;\n    display: block;\n    font-size: 1em;\n    text-align: right;\n    font-weight: bold;\n    height: 30px;\n    margin-bottom: 4%; }\n  .mat-table .mat-cell:before {\n    /*\r\n      * aria-label has no advantage, it won't be read inside a table\r\n      content: attr(aria-label);\r\n      */\n    content: attr(data-label);\n    float: left;\n    text-transform: uppercase;\n    font-weight: normal;\n    font-size: .85em; }\n  .mat-table .mat-cell:last-child {\n    border-bottom: 0; }\n  .mat-table .mat-cell:first-child {\n    margin-top: 4%; } }\n\n/* drag and drop */\n\n.example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top; }\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block; }\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px; }\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.cdk-drag-placeholder {\n  opacity: 0; }\n\n.cdk-drag-animating {\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.example-box:last-child {\n  border: none; }\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.table {\n  height: 300px;\n  overflow: auto; }\n\nb {\n  color: white; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdGRhc2hib2FyZC1sYXlvdXQvY29tcG9uZW50cy9zZWN1cml0eS1yb2xlcy9DOlxcVXNlcnNcXGFzdW5rb3BwYWRcXERlc2t0b3BcXG5ld3pvb21cXHpvb210ZWFtcy13ZWItbmcvc3JjXFxhcHBcXHByb2plY3RkYXNoYm9hcmQtbGF5b3V0XFxjb21wb25lbnRzXFxzZWN1cml0eS1yb2xlc1xcc2VjdXJpdHktcm9sZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2plY3RkYXNoYm9hcmQtbGF5b3V0L2NvbXBvbmVudHMvc2VjdXJpdHktcm9sZXMvc2VjdXJpdHktcm9sZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUE7RUFDRSxZQUFZLEVBQUE7O0FBR1o7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRyxrQkFBa0IsRUFBQTs7QUFHckI7RUFDRTtJQUNHLGlCQUFpQixFQUFBO0VBRXBCO0lBQ0UsU0FBUztJQUNULHNCQUNGLEVBQUE7RUFDQTtJQUNFLGFBQWEsRUFBQTtFQUVmO0lBQ0UsY0FBYyxFQUFBO0VBR2hCOzs7Ozs7Ozs7OztLQ1RDO0VEcUJEO0lBQ0UsNkJBQTZCO0lBQzdCLGNBQWMsRUFBQTtFQUVoQjs7O0tDbEJDO0VEc0JEO0lBQ0UsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFXO0lBQ1gsaUJBQWlCLEVBQUE7RUFFbkI7SUFDRTs7O09DbkJDO0lEdUJELHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUVuQixnQkFBZ0IsRUFBQTtFQUVsQjtJQUNFLGdCQUFnQixFQUFBO0VBRWhCO0lBQ0EsY0FBYyxFQUFBLEVBQ2Y7O0FBR0gsa0JBQUE7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHFIQUU4QyxFQUFBOztBQUdoRDtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLHNFQUFzRDtFQUF0RCw4REFBc0Q7RUFBdEQsc0RBQXNEO0VBQXRELDBHQUFzRCxFQUFBOztBQUd4RDtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLHNFQUFzRDtFQUF0RCw4REFBc0Q7RUFBdEQsc0RBQXNEO0VBQXRELDBHQUFzRCxFQUFBOztBQUcxRDtFQUNFLGFBQWE7RUFDWixjQUFjLEVBQUE7O0FBRWQ7RUFDQyxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0ZGFzaGJvYXJkLWxheW91dC9jb21wb25lbnRzL3NlY3VyaXR5LXJvbGVzL3NlY3VyaXR5LXJvbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLm1hdC1lbGV2YXRpb257XHJcbi8vICAgcGFkZGluZzogMjBweDtcclxuLy8gfVxyXG4vLyAudGFibGV7XHJcbi8vICAgaGVpZ2h0OiAyMDBweDtcclxuLy8gICBvdmVyZmxvdzogYXV0bztcclxuLy8gfVxyXG4vLyBpe1xyXG4vLyAgIHBhZGRpbmc6IDZweDtcclxuLy8gfVxyXG5cclxuXHJcblxyXG5pe1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICB9XHJcblxyXG4gIHRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAudGFiLWljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG4gIHRoe1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIG1hdC1jZWxsOmxhc3Qtb2YtdHlwZSwgbWF0LWZvb3Rlci1jZWxsOmxhc3Qtb2YtdHlwZSwgbWF0LWhlYWRlci1jZWxsOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgIG1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsIG1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlLCBtYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICB9XHJcbiAgICAubWF0LXRhYmxlIHtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXHJcbiAgICB9XHJcbiAgICBtYXQtZm9vdGVyLXJvdywgbWF0LWhlYWRlci1yb3csIG1hdC1yb3cge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm1hdC10YWJsZSBjYXB0aW9uIHtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB9XHJcblxyXG4gICAgLyogIEVuYWJsZSB0aGlzIHRvIGhpZGUgaGVhZGVyXHJcbiAgICAubWF0LXRhYmxlIC5tYXQtaGVhZGVyLWNlbGwge1xyXG5cclxuICAgICAgYm9yZGVyOiAxMHB4IHNvbGlkO1xyXG4gICAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xyXG4gICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgbWFyZ2luOiAtMXB4O1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICB9XHJcbiAgICAqL1xyXG4gICAgLm1hdC10YWJsZSAubWF0LXJvdyB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZGRkO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC8qXHJcbiAgICAubWF0LXRhYmxlIC5tYXQtcm93Om50aC1jaGlsZChldmVuKSB7YmFja2dyb3VuZDogI0NDQ31cclxuICAgIC5tYXQtdGFibGUgLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCkge2JhY2tncm91bmQ6ICNGRkZ9XHJcbiAgICAqL1xyXG4gICAgLm1hdC10YWJsZSAubWF0LWNlbGwge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICAgIH1cclxuICAgIC5tYXQtdGFibGUgLm1hdC1jZWxsOmJlZm9yZSB7XHJcbiAgICAgIC8qXHJcbiAgICAgICogYXJpYS1sYWJlbCBoYXMgbm8gYWR2YW50YWdlLCBpdCB3b24ndCBiZSByZWFkIGluc2lkZSBhIHRhYmxlXHJcbiAgICAgIGNvbnRlbnQ6IGF0dHIoYXJpYS1sYWJlbCk7XHJcbiAgICAgICovXHJcbiAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG5cclxuICAgICAgZm9udC1zaXplOiAuODVlbTtcclxuICAgIH1cclxuICAgIC5tYXQtdGFibGUgLm1hdC1jZWxsOmxhc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgICAubWF0LXRhYmxlIC5tYXQtY2VsbDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDQlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogZHJhZyBhbmQgZHJvcCAqL1xyXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgMjVweCAyNXB4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtbGlzdCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xyXG4gICAgbWluLWhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtYm94IHtcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICAuY2RrLWRyYWctcHJldmlldyB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgfVxyXG5cclxuICAuY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIC5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbiAgfVxyXG5cclxuLnRhYmxle1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICB9XHJcbiAgIGIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiIsImkge1xuICBwYWRkaW5nOiA2cHg7IH1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTsgfVxuXG4udGFiLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDhweDsgfVxuXG50aCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbm1hdC1jZWxsOmxhc3Qtb2YtdHlwZSwgbWF0LWZvb3Rlci1jZWxsOmxhc3Qtb2YtdHlwZSwgbWF0LWhlYWRlci1jZWxsOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICBtYXQtY2VsbDpmaXJzdC1vZi10eXBlLCBtYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSwgbWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctbGVmdDogMHB4OyB9XG4gIC5tYXQtdGFibGUge1xuICAgIGJvcmRlcjogMDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG4gIG1hdC1mb290ZXItcm93LCBtYXQtaGVhZGVyLXJvdywgbWF0LXJvdyB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAubWF0LXRhYmxlIGNhcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMWVtOyB9XG4gIC8qICBFbmFibGUgdGhpcyB0byBoaWRlIGhlYWRlclxyXG4gICAgLm1hdC10YWJsZSAubWF0LWhlYWRlci1jZWxsIHtcclxuXHJcbiAgICAgIGJvcmRlcjogMTBweCBzb2xpZDtcclxuICAgICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcclxuICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgIG1hcmdpbjogLTFweDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMXB4O1xyXG4gICAgfVxyXG4gICAgKi9cbiAgLm1hdC10YWJsZSAubWF0LXJvdyB7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNkZGQ7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cbiAgLypcclxuICAgIC5tYXQtdGFibGUgLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kOiAjQ0NDfVxyXG4gICAgLm1hdC10YWJsZSAubWF0LXJvdzpudGgtY2hpbGQob2RkKSB7YmFja2dyb3VuZDogI0ZGRn1cclxuICAgICovXG4gIC5tYXQtdGFibGUgLm1hdC1jZWxsIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNCU7IH1cbiAgLm1hdC10YWJsZSAubWF0LWNlbGw6YmVmb3JlIHtcbiAgICAvKlxyXG4gICAgICAqIGFyaWEtbGFiZWwgaGFzIG5vIGFkdmFudGFnZSwgaXQgd29uJ3QgYmUgcmVhZCBpbnNpZGUgYSB0YWJsZVxyXG4gICAgICBjb250ZW50OiBhdHRyKGFyaWEtbGFiZWwpO1xyXG4gICAgICAqL1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogLjg1ZW07IH1cbiAgLm1hdC10YWJsZSAubWF0LWNlbGw6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMDsgfVxuICAubWF0LXRhYmxlIC5tYXQtY2VsbDpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXRvcDogNCU7IH0gfVxuXG4vKiBkcmFnIGFuZCBkcm9wICovXG4uZXhhbXBsZS1jb250YWluZXIge1xuICB3aWR0aDogNDAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDI1cHggMjVweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7IH1cblxuLmV4YW1wbGUtbGlzdCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5leGFtcGxlLWJveCB7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogbW92ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDsgfVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7IH1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTsgfVxuXG4uZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogbm9uZTsgfVxuXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpOyB9XG5cbi50YWJsZSB7XG4gIGhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93OiBhdXRvOyB9XG5cbmIge1xuICBjb2xvcjogd2hpdGU7IH1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/projectdashboard-layout/components/security-roles/security-roles.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/projectdashboard-layout/components/security-roles/security-roles.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: SecurityRolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityRolesComponent", function() { return SecurityRolesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_master_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/master.service */ "./src/app/services/master.service.ts");







var SecurityRolesComponent = /** @class */ (function () {
    function SecurityRolesComponent(router, dialog, fb, confirmationService, messageService, masterService) {
        this.router = router;
        this.dialog = dialog;
        this.fb = fb;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.masterService = masterService;
        this.roleData = [
            { id: 1, name: 'Administrator' },
            { id: 2, name: 'Developer' },
            { id: 3, name: 'Product Owner' },
            { id: 4, name: 'Project Manager' },
            { id: 5, name: 'Scrum Master' },
            { id: 6, name: 'Support Engineer' },
            { id: 7, name: 'Tester' },
        ];
        this.data = Object.assign(this.roleData);
        this.displayedColumns = ['Id', 'Name', 'Actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.roleData);
        this.selectDatasource = this.roleData;
        this.submitted = false;
        this.color = 'primary',
            this.secuForm = this.fb.group({
                id: [],
                name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
    }
    SecurityRolesComponent.prototype.ngOnInit = function () {
        this.secuForm = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    SecurityRolesComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(this.matdialog, { disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.secuForm.reset();
        });
    };
    SecurityRolesComponent.prototype.openDialogEdit = function (secformData) {
        this.secuForm.patchValue({
            id: secformData.id,
            name: secformData.name
        });
        this.dialog.open(this.matdialog, { disableClose: true
            // height: '400px',
            // width: '600px',
        });
    };
    SecurityRolesComponent.prototype.onFieldTemplateSave = function () {
        var test = this.masterService.getFormErrorMessage(this.secuForm, this.secuForm);
        if (test !== undefined) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error Message',
                detail: test
            });
        }
        else {
            this.submitted = true;
            if (this.secuForm.value.id === null) {
                var req = {
                    id: this.roleData.length + 1,
                    name: this.secuForm.value.name
                };
                this.data.push(req);
                this.messageService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'Added Successfully'
                });
            }
            else {
                for (var i = 0; i <= this.data.length; i++) {
                    if (this.data[i].id === this.secuForm.value.id) {
                        this.data[i].id = this.secuForm.value.id;
                        this.data[i].name = this.secuForm.value.name;
                    }
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Updated Successfully'
                    });
                }
            }
            this.dialog.closeAll();
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.data);
        }
    };
    SecurityRolesComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        console.log(id);
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?' + ' ',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: function () {
                _this.onDeleteField(id);
            },
            reject: function () {
            }
        });
    };
    SecurityRolesComponent.prototype.onDeleteField = function (deleteItem) {
        this.data.splice(this.roleData.indexOf(deleteItem), 1);
        this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: deleteItem.name + ' ' + 'Deleted Successfully'
        });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.data);
    };
    SecurityRolesComponent.prototype.onClone = function (cloneRole) {
        var clonedata = {
            id: this.roleData.length + 1,
            name: cloneRole.name
        };
        this.data.push(clonedata);
        this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: cloneRole.name + ' ' + 'Copied '
        });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.data);
        console.log(this.data);
    };
    SecurityRolesComponent.prototype.getFontSize = function () {
    };
    SecurityRolesComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    SecurityRolesComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
        { type: _services_master_service__WEBPACK_IMPORTED_MODULE_6__["MasterService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('matdialog', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])
    ], SecurityRolesComponent.prototype, "matdialog", void 0);
    SecurityRolesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-security-roles',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./security-roles.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/security-roles/security-roles.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./security-roles.component.scss */ "./src/app/projectdashboard-layout/components/security-roles/security-roles.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _services_master_service__WEBPACK_IMPORTED_MODULE_6__["MasterService"]])
    ], SecurityRolesComponent);
    return SecurityRolesComponent;
}());



/***/ }),

/***/ "./src/app/projectdashboard-layout/components/security-roles/workitems/workitems.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/projectdashboard-layout/components/security-roles/workitems/workitems.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RkYXNoYm9hcmQtbGF5b3V0L2NvbXBvbmVudHMvc2VjdXJpdHktcm9sZXMvd29ya2l0ZW1zL3dvcmtpdGVtcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/projectdashboard-layout/components/security-roles/workitems/workitems.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/projectdashboard-layout/components/security-roles/workitems/workitems.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: TodoItemNode, TodoItemFlatNode, ChecklistDatabase5, WorkitemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemNode", function() { return TodoItemNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemFlatNode", function() { return TodoItemFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistDatabase5", function() { return ChecklistDatabase5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkitemsComponent", function() { return WorkitemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// Angular Material Tree-Node Start

var TodoItemNode = /** @class */ (function () {
    function TodoItemNode() {
    }
    return TodoItemNode;
}());

/** Flat to-do item node with expandable and level information */
var TodoItemFlatNode = /** @class */ (function () {
    function TodoItemFlatNode() {
    }
    return TodoItemFlatNode;
}());

/**
 * The Json object for to-do list data.
 */
var TREE_DATA = {
    'Field-Level': [
        'Actual Duration',
        'Assigned To',
        'Comments',
        'Completion Date',
        'Customer Contact',
        'Description',
        'Due Date',
        'Initial Estimate',
        'Notes',
        'Percent Complete',
        'Planned Build Number',
        'Priority',
        'Projects',
        'Release',
        'Remaining Estimate',
        'Requested By',
        'Show On Portal',
        'Start Date',
        'Status'
    ]
};
/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
var ChecklistDatabase5 = /** @class */ (function () {
    function ChecklistDatabase5() {
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this.initialize();
    }
    Object.defineProperty(ChecklistDatabase5.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    ChecklistDatabase5.prototype.initialize = function () {
        // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
        //     file node as children.
        var data = this.buildFileTree(TREE_DATA, 0);
        // Notify the change.
        this.dataChange.next(data);
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     */
    ChecklistDatabase5.prototype.buildFileTree = function (value, level) {
        var data = [];
        for (var k in value) {
            var v = value[k];
            var node = new TodoItemNode();
            node.item = "" + k;
            if (v === null || v === undefined) {
                // no action
            }
            else if (typeof v === 'object') {
                node.children = this.buildFileTree(v, level + 1);
            }
            else {
                node.item = v;
            }
            data.push(node);
        }
        return data;
    };
    /** Add an item to to-do list */
    ChecklistDatabase5.prototype.insertItem = function (parent, name) {
        var child = { item: name };
        if (parent.children) {
            parent.children.push(child);
            this.dataChange.next(this.data);
        }
    };
    ChecklistDatabase5.prototype.updateItem = function (node, name) {
        node.item = name;
        this.dataChange.next(this.data);
    };
    ChecklistDatabase5 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChecklistDatabase5);
    return ChecklistDatabase5;
}());

// Angular Material Tree-Node End





var WorkitemsComponent = /** @class */ (function () {
    // Angular Material Tree-Node End
    function WorkitemsComponent(
    // Angular Material Tree-Node Start
    database
    // Angular Material Tree-Node End
    ) {
        // Angular Material Tree-Node Start
        var _this = this;
        this.database = database;
        // Angular Material Tree-Node Start
        /** Map from flat node to nested node. This helps us finding the nested node to be modified */
        this.flatNodeMap = new Map();
        /** Map from nested node to flattened node. This helps us to keep the same object for selection */
        this.nestedNodeMap = new Map();
        /** A selected parent node to be inserted */
        this.selectedParent = null;
        /** The new item's name */
        this.newItemName = '';
        /** The selection for checklist */
        this.checklistSelection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true /* multiple */);
        // Angular Material Tree-Node Start
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.getChildren = function (node) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(node.children);
        };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.hasNoContent = function (_, _nodeData) { return _nodeData.item === ''; };
        /**
         * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
         */
        this.transformer = function (node, level) {
            var flatNode = _this.nestedNodeMap.has(node) && _this.nestedNodeMap.get(node).item === node.item
                ? _this.nestedNodeMap.get(node)
                : new TodoItemFlatNode();
            flatNode.item = node.item;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            _this.flatNodeMap.set(flatNode, node);
            _this.nestedNodeMap.set(node, flatNode);
            return flatNode;
        };
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlattener"](this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(function (data) {
            _this.dataSource.data = data;
        });
        // Angular Material Tree-Node End
    }
    WorkitemsComponent.prototype.ngOnInit = function () {
    };
    /** Whether all the descendants of the node are selected */
    WorkitemsComponent.prototype.descendantsAllSelected = function (node) {
        var _this = this;
        var descendants = this.treeControl.getDescendants(node);
        return descendants.every(function (child) { return _this.checklistSelection.isSelected(child); });
    };
    /** Whether part of the descendants are selected */
    WorkitemsComponent.prototype.descendantsPartiallySelected = function (node) {
        var _this = this;
        var descendants = this.treeControl.getDescendants(node);
        var result = descendants.some(function (child) { return _this.checklistSelection.isSelected(child); });
        return result && !this.descendantsAllSelected(node);
    };
    /** Toggle the to-do item selection. Select/deselect all the descendants node */
    WorkitemsComponent.prototype.todoItemSelectionToggle = function (node) {
        var _a, _b;
        this.checklistSelection.toggle(node);
        var descendants = this.treeControl.getDescendants(node);
        this.checklistSelection.isSelected(node)
            ? (_a = this.checklistSelection).select.apply(_a, descendants) : (_b = this.checklistSelection).deselect.apply(_b, descendants);
    };
    /** Select the category so we can insert the new item. */
    WorkitemsComponent.prototype.addNewItem = function (node) {
        var parentNode = this.flatNodeMap.get(node);
        this.database.insertItem(parentNode, '');
        this.treeControl.expand(node);
    };
    /** Save the node to database */
    WorkitemsComponent.prototype.saveNode = function (node, itemValue) {
        var nestedNode = this.flatNodeMap.get(node);
        this.database.updateItem(nestedNode, itemValue);
    };
    WorkitemsComponent.prototype.checkAll = function () {
        for (var i = 0; i < this.treeControl.dataNodes.length; i++) {
            if (!this.checklistSelection.isSelected(this.treeControl.dataNodes[i]))
                this.checklistSelection.toggle(this.treeControl.dataNodes[i]);
            this.treeControl.expand(this.treeControl.dataNodes[i]);
        }
    };
    WorkitemsComponent.prototype.uncheckAll = function () {
        for (var i = 0; i < this.treeControl.dataNodes.length; i++) {
            if (this.checklistSelection.isSelected(this.treeControl.dataNodes[i]))
                this.checklistSelection.toggle(this.treeControl.dataNodes[i]);
            this.treeControl.expand(this.treeControl.dataNodes[i]);
        }
    };
    WorkitemsComponent.ctorParameters = function () { return [
        { type: ChecklistDatabase5 }
    ]; };
    WorkitemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-workitems',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./workitems.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectdashboard-layout/components/security-roles/workitems/workitems.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./workitems.component.scss */ "./src/app/projectdashboard-layout/components/security-roles/workitems/workitems.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ChecklistDatabase5
            // Angular Material Tree-Node End
        ])
    ], WorkitemsComponent);
    return WorkitemsComponent;
}());



/***/ }),

/***/ "./src/app/projectdashboard-layout/projectdashboard-layout.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/projectdashboard-layout/projectdashboard-layout.module.ts ***!
  \***************************************************************************/
/*! exports provided: ProjectDashBoardLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDashBoardLayoutModule", function() { return ProjectDashBoardLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/tabview.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_tabview__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _projectdashboard_layout_routing__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./projectdashboard-layout.routing */ "./src/app/projectdashboard-layout/projectdashboard-layout.routing.ts");
/* harmony import */ var _components_security_roles_security_roles_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/security-roles/security-roles.component */ "./src/app/projectdashboard-layout/components/security-roles/security-roles.component.ts");
/* harmony import */ var _components_fieldtemplates_fieldtemplates_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/fieldtemplates/fieldtemplates.component */ "./src/app/projectdashboard-layout/components/fieldtemplates/fieldtemplates.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _components_customfields_customfields_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/customfields/customfields.component */ "./src/app/projectdashboard-layout/components/customfields/customfields.component.ts");
/* harmony import */ var _components_lists_lists_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/lists/lists.component */ "./src/app/projectdashboard-layout/components/lists/lists.component.ts");
/* harmony import */ var _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/notification/notification.component */ "./src/app/projectdashboard-layout/components/notification/notification.component.ts");
/* harmony import */ var _components_security_roles_reports_reports_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/security-roles/reports/reports.component */ "./src/app/projectdashboard-layout/components/security-roles/reports/reports.component.ts");
/* harmony import */ var _components_security_roles_workitems_workitems_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/security-roles/workitems/workitems.component */ "./src/app/projectdashboard-layout/components/security-roles/workitems/workitems.component.ts");
/* harmony import */ var _components_security_roles_projectprivilages1_projectprivilages1_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/security-roles/projectprivilages1/projectprivilages1.component */ "./src/app/projectdashboard-layout/components/security-roles/projectprivilages1/projectprivilages1.component.ts");
/* harmony import */ var _components_security_roles_projectprivilages2_projectprivilages2_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/security-roles/projectprivilages2/projectprivilages2.component */ "./src/app/projectdashboard-layout/components/security-roles/projectprivilages2/projectprivilages2.component.ts");
/* harmony import */ var _components_security_roles_administrator_administrator_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/security-roles/administrator/administrator.component */ "./src/app/projectdashboard-layout/components/security-roles/administrator/administrator.component.ts");




























var ProjectDashBoardLayoutModule = /** @class */ (function () {
    function ProjectDashBoardLayoutModule() {
    }
    ProjectDashBoardLayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_projectdashboard_layout_routing__WEBPACK_IMPORTED_MODULE_16__["ProjectDashboardLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_19__["ComponentsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_15__["ToastModule"],
                primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialogModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_14__["TreeModule"],
                primeng_tabview__WEBPACK_IMPORTED_MODULE_13__["TabViewModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"]
            ],
            declarations: [
                _components_security_roles_security_roles_component__WEBPACK_IMPORTED_MODULE_17__["SecurityRolesComponent"],
                _components_fieldtemplates_fieldtemplates_component__WEBPACK_IMPORTED_MODULE_18__["FieldtemplatesComponent"],
                _components_customfields_customfields_component__WEBPACK_IMPORTED_MODULE_20__["CustomfieldsComponent"],
                _components_lists_lists_component__WEBPACK_IMPORTED_MODULE_21__["ListsComponent"],
                _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_22__["NotificationComponent"],
                _components_security_roles_projectprivilages1_projectprivilages1_component__WEBPACK_IMPORTED_MODULE_25__["Projectprivilages1Component"],
                _components_security_roles_projectprivilages2_projectprivilages2_component__WEBPACK_IMPORTED_MODULE_26__["Projectprivilages2Component"],
                _components_security_roles_administrator_administrator_component__WEBPACK_IMPORTED_MODULE_27__["AdministratorComponent"],
                _components_security_roles_reports_reports_component__WEBPACK_IMPORTED_MODULE_23__["ReportsComponent"],
                _components_security_roles_workitems_workitems_component__WEBPACK_IMPORTED_MODULE_24__["WorkitemsComponent"],
            ],
            providers: [
                primeng_api__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"],
                _components_security_roles_projectprivilages1_projectprivilages1_component__WEBPACK_IMPORTED_MODULE_25__["ChecklistDatabase1"],
                _components_security_roles_projectprivilages2_projectprivilages2_component__WEBPACK_IMPORTED_MODULE_26__["ChecklistDatabase2"],
                _components_security_roles_administrator_administrator_component__WEBPACK_IMPORTED_MODULE_27__["ChecklistDatabase3"],
                _components_security_roles_reports_reports_component__WEBPACK_IMPORTED_MODULE_23__["ChecklistDatabase4"],
                _components_security_roles_workitems_workitems_component__WEBPACK_IMPORTED_MODULE_24__["ChecklistDatabase5"],
                primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"],
            ],
        })
    ], ProjectDashBoardLayoutModule);
    return ProjectDashBoardLayoutModule;
}());



/***/ }),

/***/ "./src/app/projectdashboard-layout/projectdashboard-layout.routing.ts":
/*!****************************************************************************!*\
  !*** ./src/app/projectdashboard-layout/projectdashboard-layout.routing.ts ***!
  \****************************************************************************/
/*! exports provided: ProjectDashboardLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDashboardLayoutRoutes", function() { return ProjectDashboardLayoutRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_customfields_customfields_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/customfields/customfields.component */ "./src/app/projectdashboard-layout/components/customfields/customfields.component.ts");
/* harmony import */ var _components_fieldtemplates_fieldtemplates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/fieldtemplates/fieldtemplates.component */ "./src/app/projectdashboard-layout/components/fieldtemplates/fieldtemplates.component.ts");
/* harmony import */ var _components_security_roles_security_roles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/security-roles/security-roles.component */ "./src/app/projectdashboard-layout/components/security-roles/security-roles.component.ts");
/* harmony import */ var _components_lists_lists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/lists/lists.component */ "./src/app/projectdashboard-layout/components/lists/lists.component.ts");
/* harmony import */ var _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/notification/notification.component */ "./src/app/projectdashboard-layout/components/notification/notification.component.ts");






var ProjectDashboardLayoutRoutes = [
    { path: 'fields', component: _components_customfields_customfields_component__WEBPACK_IMPORTED_MODULE_1__["CustomfieldsComponent"] },
    { path: 'securityroles', component: _components_security_roles_security_roles_component__WEBPACK_IMPORTED_MODULE_3__["SecurityRolesComponent"] },
    { path: 'fieldtemplates', component: _components_fieldtemplates_fieldtemplates_component__WEBPACK_IMPORTED_MODULE_2__["FieldtemplatesComponent"] },
    { path: 'list', component: _components_lists_lists_component__WEBPACK_IMPORTED_MODULE_4__["ListsComponent"] },
    { path: 'notifications', component: _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_5__["NotificationComponent"] }
];


/***/ })

}]);
//# sourceMappingURL=projectdashboard-layout-projectdashboard-layout-module.js.map