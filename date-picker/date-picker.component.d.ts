import { OnInit, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CalendarDate } from './calendar-date';
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class DatePickerComponent implements OnInit, ControlValueAccessor {
    private cdRef;
    closeOnSelect: boolean;
    highlightToday: boolean;
    highlightSelected: boolean;
    displayWeekNumbers: boolean;
    displayWeekdays: boolean;
    prevYearBtnIcon: string;
    nextYearBtnIcon: string;
    displayJumpToday: boolean;
    displayJumpSelected: boolean;
    selectedDate: Date;
    selectRange: boolean;
    selectedRangeEnd: Date | undefined;
    maxRangeLength: number;
    minDate: Date | undefined;
    maxDate: Date | undefined;
    currentDate: CalendarDate | null;
    currentRangeEnd: CalendarDate | null;
    viewDate: CalendarDate;
    today: CalendarDate;
    showYearPick: boolean;
    constructor(cdRef: ChangeDetectorRef);
    ngOnInit(): void;
    /**
     * activate the given date
     */
    select(date: CalendarDate): void;
    /**
     * ui-markers
     */
    isMarked(date: CalendarDate): boolean;
    isDisabled(day: CalendarDate): boolean;
    /**
     * functions to move viewDate
     */
    nextMonth(): void;
    prevMonth(): void;
    gotoToday(): void;
    gotoSelected(): void;
    yearPickSelect(year: number): void;
    /**
     * things needed for ControlValueAccessor-Interface
     */
    private onTouchedCallback;
    private onChangeCallback;
    writeValue(value: Date): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
