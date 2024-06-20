# Getting start with Components
## Prerequisites
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) and [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Classes](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Classes)
- [TypeScript fundamentals](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Classes)
- [TypeScript Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)

## What are components?
Components are fundamental building blocks used to structure the user interface (UI) and functionalities of your application. They play a vital role in promoting code reusability, maintainability, and separation of concerns.
Here's a breakdown of why components are essential

- Reusability
- Maintainability
- Separation of Concerns:
  
### Benefits of using Components:
- Separation of Concerns
- Faster Development
- Easier Testing
- Improved Code Quality
- Scalability

#### How to create a component using CLI
`ng generate component ${componentName}`

alias `ng g c ${componentName}`
 it'll generate 4 file 
 ```bash
${componentName}.component.css // style (optional)
${componentName}.component.html //template (optional)
${componentName}.component.spec.ts //test (optional)
${componentName}.component.ts // class definition, and logic
```
### Decorators code example
```tsx
class User {
  constructor(private name: string, private age: number) {}
  logger( callback:(...arg:any[])=>any,context:any,...args: any[]){
    console.log(`start: ${callback.name}`)
    callback.app...
```

[Playground Link](https://www.typescriptlang.org/play/?#code/MYGwhgzhAECqEFMBO0DeAoa1gHsB2EALkgK7CE5IAUADkgJYBuYhC0eYAtggFzREM8AcwA00OkxZswQ3uxKcARsgCUaAL6ZoIHENnVsYECEVhgAax5UAdLbBIhPMHgCeAbQC6KgLwA+Zy4iuHisAB6ETq4ittb2QhB8AZ4qGFhYwRA4IAjWOkJUAAZE9hHQACSowEYmZubWHNzqBSpa6dWmFrE0NCAuVIQAFvQQInEQKgDcrdj4mdm5uoUIeAAmfBVVxh11DQhNLViaWEJICAiEVGqpaRlZOXmFABIIxjhinC7sXGzD5aiDw3q33U1maU0O6C0EhCAEFZJc0NNbvMHgUAJLQLh-AEQWKydTQFwIewwLIrMFaTSadAZQjQEiIFDedgIADucEZVAARAApHADPBcsQAJgArJN0AzkAs9MgqFKkNYTmdCCIFRKFTL9PLGdZoYQ4Qg1YyJZD0AB6c0c+jCaAAEQQuCQLEoEEhADMSHhyPR8NpdLIVgBZc4DHArAA8ABUhiNoDCHDAEOFlisYEkPGIAErnEhIPC+KjTQhxc58fqxvgx4ZiGJjPgJ+JqPzQHOEPN4ERI-BhUoAYXAUBDg3DDqdLqQfZ7ycI0djYgrwyr8+gdcTDcTzd8rdz+d86Cu3YIdO4I5WADlvtBmQBlYg2-LBXtA7imtLQT3ewi+vDQU49MwEG4EJhzDFZFwSaBqzjNd4g3Js+DbDtEXfd9kXuRYCgAAWKJBSgAcgqU8wMvRp8NBA5UPSWY6VOCASBAOlmRLBxzmsTYQAg2s7E3cEqJmAg7hlQosNTPhCNQYjw1IvZyOaaZ31Odt8z-BB6MYviIWmJTkP-cBgCA5ZCFA8MpiOUBIBgeBkGFFCBIEMgKGoCRmFYL5uD4AQHzEFypExWQ+DwBRlCQK4jiwvJAxMlYtGVc4EWuajBJRTDnled5Pl2aBfgqHEXz2Ci+M0CKAwQYNQ3DKFBANeFDzQ2YhNRDEsVy2M8T2QliSQUkQHJCUIWpWl6UZWzmTwNkORs7k+QFIVoDFDURqVU54smIA)

### Component using single file only

```ts
// dummy.component.ts
@Component({
  selector: 'profile-photo', //css selector
  template: `<img src="profile-photo.jpg" alt="Your profile photo">`, //HTML chunk with special syntax.
  style: `img{
    max-width: 200px;
    border-radius:5px;
  }`, // css
  standalone:true
})
export class ProfilePhoto { }
```
### Component using template and style file
we will have different files for styling and template
```ts
// dummy.component.ts
@Component({
  selector: 'profile-photo', //css selector
  templateUrl: './dummy.component.html', 
  styleUrl: './dummy.component.css'
  standalone:true
})
export class ProfilePhoto { }
```
```css
/* dummy.component.css */
img{
    max-width: 200px;
    border-radius: 5px;
  }
```
```html
<!--  dummy.component.html-->
  <img src="profile-photo.jpg" alt="Your profile photo">
```

## Code showcase
  - create a product card using single file
  - Now how can we use these all using seprate style/template files

## Understanding binding
In an Angular template, a binding creates a live connection between a part of the UI created from a template (a DOM element, directive, or component) and the model (the component instance to which the template belongs). This connection can be used to synchronize the view with the model, to notify the model when an event or user action takes place in the view, or both. Angular's Change Detection algorithm is responsible for keeping the view and the model in sync.

### Examples of binding include:
- **text interpolations**
- **property binding**
- **event binding**
- **two-way binding**
  
Bindings always have two parts: a target which will receive the bound value, and a template expression which produces a value from the model.

### Text Interpolations
Interpolation refers to embedding expressions into marked up text. By default, interpolation uses the double curly braces `{{` and `}}` as delimiters.
```ts
<h4>{{ recommended }}</h4>
```
### Property binding
Property binding in Angular helps you set values for properties of HTML elements or directives. Use property binding to do things such as toggle button features, set paths programmatically, and share values between components.

To bind to an element's property, enclose it in square brackets, [], which identifies the property as a target property.
eg-
```ts
<img alt="item 2" [src]="itemImageUrl2">
  ```
### Attribute binding
Attribute binding syntax resembles property binding, but instead of an element property between brackets, you precede the name of the attribute with the prefix attr, followed by a dot. Then, you set the attribute value with an expression that resolves to a string.
```ts
<!-- create and set an aria attribute for assistive technology -->
  <button type="button" [attr.aria-label]="actionName">{{ actionName }} with Aria</button>
  ```

## Class and style binding
Use class and style bindings to add and remove CSS class names from an element's class attribute and to set styles dynamically.

### Binding to a single CSS class
```ts
[class.sale]="onSale" 
```
Angular adds the class when the bound expression, onSale is truthy, and it removes the class when the expression is falsy

### Multi-class binding
 - space seprated class string 
 - Record - {sale:onSale} sale class applies if onSale is truthy
 - String Array


### Binding to a single style
To create a single style binding, use the prefix style followed by a dot and the name of the CSS style.
For example, to set the width style, type the following: 
`[style.width]="width"`

 - To write a style in dash-case, type the following:
 ```ts 
 <nav [style.background-color]="expression"></nav>
 ```
- To write a style in camelCase, type the following:
 ```ts
<nav [style.backgroundColor]="expression"></nav>
```
### Binding to multiple styles
- A string list of styles such as `"width: 100px; height: 100px; background-color: cornflowerblue;"`.
- An object with style names as the keys and style values as the values, such as `{width: '100px', height: '100px', backgroundColor: 'cornflowerblue'}`.
  

  **Note:** binding an `array` to `[style]` is not supported.

## Event binding
Event binding lets you listen for and respond to user actions such as keystrokes, mouse movements, clicks, and touches.

To bind to an event you use the Angular event binding syntax. This syntax consists of a target event name within parentheses to the left of an equal sign, and a quoted template statement to the right.

Create the following example; the target event name is click and the template statement is onSave().
```ts
<button (click)="onSave()">Save</button>
```
<img src="https://angular.dev/assets/images/guide/template-syntax/syntax-diagram.svg" alt="angular event statement"/>

### [Binding to keyboard events](https://angular.dev/guide/templates/event-binding#binding-to-keyboard-events)


## [Two-way binding](https://angular.dev/guide/templates/two-way-binding)
Two-way binding combines `property` binding with `event` binding:
```ts
// parent component
  <app-click-counter [(count)]="parentCounter"></app-click-counter>
```
```ts
// component.ts
export class ClickCounterComponent {
  @Input() count = 0;
  @Output() countChange = new EventEmitter<number>();
  decrement() {
    if (this.count > 0) this.countChange.emit(this.count - 1);
  }
  increment() {
    console.log('increment', (this.count || 0) + 1);
    this.countChange.emit((this.count || 0) + 1);
  }
}
```
[Official Documentation](https://angular.dev/guide/components)
