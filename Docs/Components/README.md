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

[Official Documentation](https://angular.dev/guide/components)
