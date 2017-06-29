var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PickDateCreate } from './pick-date';
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return DatePickerComponent; }),
    multi: true
};
var DatePickerComponent = (function () {
    function DatePickerComponent(cdRef) {
        this.cdRef = cdRef;
        // behaviour
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
        // values
        this.selectedDate = new Date();
        this.selectRange = false;
        this.today = PickDateCreate();
        this.showYearPick = false;
    }
    DatePickerComponent.prototype.ngOnInit = function () {
        if (this.selectedRangeEnd)
            this.selectRange = true;
        this.pickedDate = PickDateCreate(this.selectedDate);
        this.viewDate = PickDateCreate();
        if (this.selectedRangeEnd) {
            this.selectRange = true;
            this.select(PickDateCreate(this.selectedRangeEnd));
        }
        if (!this.minDate)
            this.minDate = new Date(0, 0, 1);
        if (!this.maxDate)
            this.maxDate = new Date(10000, 0, 1);
    };
    /**
     * activate the given date
     */
    DatePickerComponent.prototype.select = function (date) {
        if (!this.selectRange) {
            this.pickedDate = date;
            !!this.onChangeCallback && this.onChangeCallback(this.pickedDate.date);
            return;
        }
        if (this.pickedDate && this.pickedRangeEnd) {
            // reset all
            this.pickedDate = null;
            this.pickedRangeEnd = null;
        }
        else if (this.pickedDate && !this.pickedRangeEnd) {
            this.pickedRangeEnd = date;
        }
        else if (!this.pickedDate) {
            this.pickedDate = date;
        }
        // swap values if pickedDate > pickedRangeEnd
        if (this.pickedRangeEnd &&
            this.pickedDate &&
            this.pickedRangeEnd.date < this.pickedDate.date) {
            this.pickedRangeEnd.date = [this.pickedDate.date, this.pickedDate.date = this.pickedRangeEnd.date][0]; // swap values
        }
        // if more days selected than maxRangeLength, strip days
        if (this.selectRange &&
            this.pickedRangeEnd &&
            this.pickedDate &&
            this.pickedDate.daysInRange(this.pickedRangeEnd) > this.maxRangeLength) {
            var diffDays = this.pickedDate.daysInRange(this.pickedRangeEnd) - this.maxRangeLength;
            this.pickedRangeEnd.moveDays(diffDays * (-1));
        }
        if (this.pickedDate) {
            !!this.onChangeCallback && this.onChangeCallback(this.pickedDate.date);
        }
    };
    /**
     * ui-markers
     */
    DatePickerComponent.prototype.isMarked = function (date) {
        if (!this.selectRange && this.pickedDate && this.pickedDate.isSameDay(date))
            return true;
        return !!this.pickedDate && !!this.pickedRangeEnd && date.inRange(this.pickedDate, this.pickedRangeEnd);
    };
    DatePickerComponent.prototype.isDisabled = function (day) {
        if (!this.viewDate.isSameMonthAndYear(day) ||
            day.gt(this.maxDate) ||
            day.lt(this.minDate)) {
            return true;
        }
        return false;
    };
    /**
     * functions to move viewDate
     */
    DatePickerComponent.prototype.nextMonth = function () {
        if (this.showYearPick)
            this.viewDate = this.viewDate.addYears(1);
        else
            this.viewDate = this.viewDate.incrementMonths(1);
    };
    DatePickerComponent.prototype.prevMonth = function () {
        if (this.showYearPick)
            this.viewDate = this.viewDate.addYears(-1);
        else
            this.viewDate = this.viewDate.incrementMonths(-1);
    };
    DatePickerComponent.prototype.gotoToday = function () {
        this.viewDate = PickDateCreate();
    };
    DatePickerComponent.prototype.gotoSelected = function () {
        this.viewDate = this.pickedDate || PickDateCreate();
    };
    DatePickerComponent.prototype.yearPickSelect = function (year) {
        this.viewDate = this.viewDate.moveToYear(year);
        this.showYearPick = false;
    };
    DatePickerComponent.prototype.writeValue = function (value) {
        this.pickedDate = PickDateCreate(value);
        if (!value)
            this.pickedDate = PickDateCreate();
        this.cdRef.markForCheck();
    };
    DatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    DatePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    return DatePickerComponent;
}());
__decorate([
    Input('closeOnSelect'),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "closeOnSelect", void 0);
__decorate([
    Input('highlightToday'),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "highlightToday", void 0);
__decorate([
    Input('highlightSelected'),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "highlightSelected", void 0);
__decorate([
    Input('displayWeekNumbers'),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "displayWeekNumbers", void 0);
__decorate([
    Input('displayWeekdays'),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "displayWeekdays", void 0);
__decorate([
    Input('prevYearBtnIcon'),
    __metadata("design:type", String)
], DatePickerComponent.prototype, "prevYearBtnIcon", void 0);
__decorate([
    Input('nextYearBtnIcon'),
    __metadata("design:type", String)
], DatePickerComponent.prototype, "nextYearBtnIcon", void 0);
__decorate([
    Input('displayJumpToday'),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "displayJumpToday", void 0);
__decorate([
    Input('displayJumpSelected'),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "displayJumpSelected", void 0);
__decorate([
    Input('selectedDate'),
    __metadata("design:type", Date)
], DatePickerComponent.prototype, "selectedDate", void 0);
__decorate([
    Input('selectRange'),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "selectRange", void 0);
__decorate([
    Input('selectedRangeEnd'),
    __metadata("design:type", Date)
], DatePickerComponent.prototype, "selectedRangeEnd", void 0);
__decorate([
    Input('maxRangeLength'),
    __metadata("design:type", Number)
], DatePickerComponent.prototype, "maxRangeLength", void 0);
__decorate([
    Input('minDate'),
    __metadata("design:type", Date)
], DatePickerComponent.prototype, "minDate", void 0);
__decorate([
    Input('maxDate'),
    __metadata("design:type", Date)
], DatePickerComponent.prototype, "maxDate", void 0);
DatePickerComponent = __decorate([
    Component({
        selector: 'vcl-date-picker',
        template: "<div class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput\"> <div class=\"vclDGRow\"> <div class=\"vclDGCell vclToolbar\"> <div class=\" vclLayoutFlex vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\" role=\"menubar\" aria-level=\"1\"> <button type=\"button\" class=\"vclButton vclTransparent vclSquare\" (click)=\"prevMonth()\"> <div class=\"vclIcogram\"> <div class=\"vclIcon fa fa-angle-left\" aria-hidden=\"false\" aria-label=\"previous\" role=\"img\"></div> </div> </button> <span class=\"vclCalHeaderLabel\" (tap)=\"showYearPick=true\" [class.date-picker-pointer]=\"!showYearPick\"> {{viewDate.getMonthString() | loc}}&nbsp;&nbsp;{{viewDate.getYearString()}} </span> <button type=\"button\" class=\"vclButton vclTransparent vclSquare\" (click)=\"nextMonth()\"> <div class=\"vclIcogram\"> <div class=\"vclIcon fa fa-angle-right\" aria-hidden=\"false\" aria-label=\"next\" role=\"img\"></div> </div> </button> </div> </div> </div> <ng-container *ngIf=\"!showYearPick\"> <div *ngIf=\"displayWeekNumbers || displayWeekdays\" class=\"vclDGRow\"> <div *ngIf=\"displayWeekNumbers\" class=\"vclDGCell vclCalItem vclOtherMonth\"> {{'week' | loc}} </div> <div *ngFor=\"let day of viewDate.getWeekDays()\" class=\"vclDGCell vclWeekdayLabel\"> <ng-container *ngIf=\"displayWeekdays\"> {{day | loc}} </ng-container> </div> </div> <div class=\"vclDGRow\" *ngFor=\"let week of viewDate.getMonthBlock()\"> <div *ngIf=\"displayWeekNumbers && week.length==7\" class=\"vclDGCell\"> {{week[5].getWeekNumber()}} </div> <div *ngFor=\"let day of week\" class=\"vclDGCell vclCalItem\" [class.vclDisabled]=\"isDisabled(day)\" [class.vclSelected]=\"isMarked(day)\" (tap)=\"!isDisabled(day) && select(day)\" [class.vclToday]=\"highlightSelected && day.isToday()\" [class.vclOtherMonth]=\"!day.isSameMonthAndYear()\"> {{day.date.getDate()}} </div> </div> <div *ngIf=\"displayJumpSelected || displayJumpToday\" class=\"vclDGRow\"> <div class=\"vclDGCell\"> <div class=\"vclToolbar vclLayoutFlex vclLayoutHorizontal vclLayoutJustified\" role=\"menubar\" aria-level=\"2\"> <button *ngIf=\"displayJumpToday\" type=\"button\" title=\"go to today\" class=\"vclButton vclTransparent vclLayoutFlex\" (tap)=\"gotoToday()\"> <div class=\" vclIcogram\"> <span class=\"vclText \">go to today</span> </div> </button> <button *ngIf=\"displayJumpSelected\" type=\"button\" title=\"go to selected\" class=\"vclButton vclTransparent vclLayoutFlex\" (tap)=\"gotoSelected()\"> <div class=\" vclIcogram\"> <span class=\"vclText \">go to selected</span> </div> </button> </div> </div> </div> </ng-container> <ng-container *ngIf=\"showYearPick\"> <div class=\"vclDGRow\" role=\"row\" *ngFor=\"let row of viewDate.getYearsBlock()\"> <div *ngFor=\"let year of row\" class=\"vclDGCell vclCalItem\" role=\"gridcell\" [class.vclSelected]=\"viewDate.date.getFullYear()==year\" (click)=\"yearPickSelect(year)\" [class.vclToday]=\"highlightSelected && today.isInYear(year)\"> {{year}} </div> </div> </ng-container> </div> ",
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
export { DatePickerComponent };
