var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CalendarDate } from './calendar-date';
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return DatePickerComponent; }),
    multi: true
};
var DatePickerComponent = (function () {
    function DatePickerComponent(cdRef) {
        this.cdRef = cdRef;
        // behavior
        this.closeOnSelect = false;
        // styling
        this.highlightToday = true;
        this.highlightSelected = true;
        this.displayWeekNumbers = true;
        this.displayWeekdays = true;
        this.prevYearBtnIcon = "fa:chevron-left";
        this.nextYearBtnIcon = "fa:chevron-right";
        this.displayJumpToday = true;
        this.displayJumpSelected = true;
        this.selectRange = false;
        this.maxRangeLength = Infinity;
        this.change = new EventEmitter();
        this.today = new CalendarDate();
        this.showYearPick = false;
    }
    DatePickerComponent.prototype.ngOnInit = function () {
        this.setDate(this.selectedDate);
        if (this.selectedRangeEnd) {
            this.selectRange = true;
            this.select(new CalendarDate(this.selectedRangeEnd));
        }
    };
    DatePickerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.selectedDate) {
            this.setDate(changes.selectedDate.currentValue);
        }
    };
    DatePickerComponent.prototype.setDate = function (date) {
        this.currentDate = new CalendarDate(date);
        this.viewDate = this.currentDate.clone();
    };
    DatePickerComponent.prototype.onDateTap = function (date) {
        if (this.isDisabled(date)) {
            return;
        }
        this.select(date);
        if (!this.selectRange) {
            if (this.currentDate && !this.currentDate.isSameMonthAndYear(this.viewDate)) {
                this.gotoSelected();
            }
            var currentDate = this.currentDate ? this.currentDate.date : undefined;
            this.onChangeCallback && this.onChangeCallback(currentDate);
            this.change.emit(currentDate);
        }
        else {
            var currentDate = this.currentDate ? this.currentDate.date : undefined;
            if (currentDate) {
                this.onChangeCallback && this.onChangeCallback(currentDate);
            }
            this.change.emit([currentDate, this.currentRangeEnd ? this.currentRangeEnd.date : undefined]);
        }
    };
    /**
     * activate the given date
     */
    DatePickerComponent.prototype.select = function (date) {
        if (!this.selectRange) {
            this.currentDate = date;
        }
        else {
            if (this.currentDate && this.currentRangeEnd) {
                // reset all
                this.currentDate = undefined;
                this.currentRangeEnd = undefined;
            }
            else if (this.currentDate && !this.currentRangeEnd) {
                this.currentRangeEnd = date;
            }
            else if (!this.currentDate) {
                this.currentDate = date;
            }
            // swap values if currentDate > currentRangeEnd
            if (this.currentRangeEnd &&
                this.currentDate &&
                this.currentRangeEnd.date < this.currentDate.date) {
                this.currentRangeEnd.date = [this.currentDate.date, this.currentDate.date = this.currentRangeEnd.date][0]; // swap values
            }
            // if more days selected than maxRangeLength, strip days
            if (this.selectRange &&
                this.currentRangeEnd &&
                this.currentDate &&
                this.currentDate.daysInRange(this.currentRangeEnd) > this.maxRangeLength) {
                var diffDays = this.currentDate.daysInRange(this.currentRangeEnd) - this.maxRangeLength;
                this.currentRangeEnd.moveDays(diffDays * (-1));
            }
        }
    };
    /**
     * ui-markers
     */
    DatePickerComponent.prototype.isMarked = function (date) {
        if (!this.selectRange && this.currentDate && this.currentDate.isSameDay(date))
            return true;
        return !!this.currentDate && !!this.currentRangeEnd && date.inRange(this.currentDate, this.currentRangeEnd);
    };
    DatePickerComponent.prototype.isDisabled = function (day) {
        var minDate = this.minDate || new Date(0, 0, 1);
        var maxDate = this.maxDate || new Date(10000, 0, 1);
        return day.gt(maxDate) || day.lt(minDate);
    };
    /**
     * functions to move viewDate
     */
    DatePickerComponent.prototype.nextMonth = function () {
        var viewDate = this.viewDate || new CalendarDate();
        if (this.showYearPick) {
            this.viewDate = viewDate.addYears(1);
        }
        else {
            this.viewDate = viewDate.incrementMonths(1);
        }
    };
    DatePickerComponent.prototype.prevMonth = function () {
        var viewDate = this.viewDate || new CalendarDate();
        if (this.showYearPick) {
            this.viewDate = viewDate.addYears(-1);
        }
        else {
            this.viewDate = viewDate.incrementMonths(-1);
        }
    };
    DatePickerComponent.prototype.gotoToday = function () {
        this.viewDate = new CalendarDate();
    };
    DatePickerComponent.prototype.gotoSelected = function () {
        this.viewDate = this.currentDate || new CalendarDate();
    };
    DatePickerComponent.prototype.yearPickSelect = function (year) {
        var viewDate = this.viewDate || new CalendarDate();
        this.viewDate = viewDate.moveToYear(year);
        this.showYearPick = false;
    };
    DatePickerComponent.prototype.writeValue = function (value) {
        this.currentDate = new CalendarDate(value);
        this.viewDate = this.currentDate;
        this.cdRef.markForCheck();
    };
    DatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    DatePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DatePickerComponent.prototype, "closeOnSelect", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DatePickerComponent.prototype, "highlightToday", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DatePickerComponent.prototype, "highlightSelected", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DatePickerComponent.prototype, "displayWeekNumbers", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DatePickerComponent.prototype, "displayWeekdays", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DatePickerComponent.prototype, "prevYearBtnIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DatePickerComponent.prototype, "nextYearBtnIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DatePickerComponent.prototype, "displayJumpToday", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DatePickerComponent.prototype, "displayJumpSelected", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DatePickerComponent.prototype, "selectedDate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DatePickerComponent.prototype, "selectRange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DatePickerComponent.prototype, "selectedRangeEnd", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], DatePickerComponent.prototype, "maxRangeLength", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DatePickerComponent.prototype, "minDate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DatePickerComponent.prototype, "maxDate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], DatePickerComponent.prototype, "change", void 0);
    DatePickerComponent = __decorate([
        Component({
            selector: 'vcl-date-picker',
            template: "<div class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput\"> <div class=\"vclDGRow\"> <div class=\"vclDGCell vclToolbar\"> <div class=\" vclLayoutFlex vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\" role=\"menubar\" aria-level=\"1\"> <button type=\"button\" class=\"vclButton vclTransparent vclSquare\" (click)=\"prevMonth()\"> <div class=\"vclIcogram\"> <div class=\"vclIcon fa fa-angle-left\" aria-hidden=\"false\" aria-label=\"previous\" role=\"img\"></div> </div> </button> <span class=\"vclCalHeaderLabel\" (click)=\"showYearPick=true\" [class.date-picker-pointer]=\"!showYearPick\"> {{viewDate.getMonthString() | loc}}&nbsp;&nbsp;{{viewDate.getYearString()}} </span> <button type=\"button\" class=\"vclButton vclTransparent vclSquare\" (click)=\"nextMonth()\"> <div class=\"vclIcogram\"> <div class=\"vclIcon fa fa-angle-right\" aria-hidden=\"false\" aria-label=\"next\" role=\"img\"></div> </div> </button> </div> </div> </div> <ng-container *ngIf=\"!showYearPick\"> <div *ngIf=\"displayWeekNumbers || displayWeekdays\" class=\"vclDGRow\"> <div *ngIf=\"displayWeekNumbers\" class=\"vclDGCell vclCalItem vclOtherMonth\"> {{'week' | loc}} </div> <div *ngFor=\"let day of viewDate.getWeekDays()\" class=\"vclDGCell vclWeekdayLabel\"> <ng-container *ngIf=\"displayWeekdays\"> {{day | loc}} </ng-container> </div> </div> <div class=\"vclDGRow\" *ngFor=\"let week of viewDate.getMonthBlock()\"> <div *ngIf=\"displayWeekNumbers && week.length==7\" class=\"vclDGCell\"> {{week[5].getWeekNumber()}} </div> <div *ngFor=\"let day of week\" class=\"vclDGCell vclCalItem\" [class.vclDisabled]=\"isDisabled(day)\" [class.vclOtherMonth]=\"!day.isSameMonthAndYear(viewDate)\" [class.vclSelected]=\"isMarked(day)\" (click)=\"onDateTap(day)\" [class.vclToday]=\"highlightSelected && day.isToday()\"> {{day.date.getDate()}} </div> </div> <div *ngIf=\"displayJumpSelected || displayJumpToday\" class=\"vclDGRow\"> <div class=\"vclDGCell\"> <div class=\"vclToolbar vclLayoutFlex vclLayoutHorizontal vclLayoutJustified\" role=\"menubar\" aria-level=\"2\"> <button *ngIf=\"displayJumpToday\" type=\"button\" title=\"go to today\" class=\"vclButton vclTransparent vclLayoutFlex\" (click)=\"gotoToday()\"> <div class=\" vclIcogram\"> <span class=\"vclText \">go to today</span> </div> </button> <button *ngIf=\"displayJumpSelected\" type=\"button\" title=\"go to selected\" class=\"vclButton vclTransparent vclLayoutFlex\" (click)=\"gotoSelected()\"> <div class=\" vclIcogram\"> <span class=\"vclText \">go to selected</span> </div> </button> </div> </div> </div> </ng-container> <ng-container *ngIf=\"showYearPick\"> <div class=\"vclDGRow\" role=\"row\" *ngFor=\"let row of viewDate.getYearsBlock()\"> <div *ngFor=\"let year of row\" class=\"vclDGCell vclCalItem\" role=\"gridcell\" [class.vclSelected]=\"viewDate.date.getFullYear()==year\" (click)=\"yearPickSelect(year)\" [class.vclToday]=\"highlightSelected && today.isInYear(year)\"> {{year}} </div> </div> </ng-container> </div> ",
            styles: [
                ".hidden{display:none;}\n     .date-picker-pointer{cursor: pointer;}\n    "
            ],
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            changeDetection: ChangeDetectionStrategy.OnPush,
            host: {
                '[class.vclDatePicker]': 'true',
                '[attr.role]': '"listbox"',
                '[attr.aria-multiselectable]': 'false',
                '[style.height]': '"284px"' // TODO this fixes for IE11
            }
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], DatePickerComponent);
    return DatePickerComponent;
}());
export { DatePickerComponent };
