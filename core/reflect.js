import { Component } from '@angular/core';
export function defineMetadata(key, value, target) {
    Reflect.defineMetadata(key, value, target);
}
export function getMetadata(key, target) {
    return Reflect.getMetadata(key, target);
}
export function setAnnotation(cls, key, value) {
    var annotation = getAnnotation(cls);
    // Change metadata
    annotation[key] = value;
    // Set metadata
    Reflect.defineMetadata('annotations', [new Component(annotation)], cls);
}
export function getAnnotation(cls) {
    // Annotation is an array with 1 entry
    // TODO: Check if always one entry
    var clsAnnotations = Reflect.getMetadata('annotations', cls);
    if (!clsAnnotations && clsAnnotations.length < 1) {
        throw new Error('Invalid base class');
    }
    return clsAnnotations[0];
}
export function setAnimations(cls, animations) {
    setAnnotation(cls, 'animations', animations);
}
