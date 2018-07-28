# ngx-callisto

![Coverage Status](./badge.svg)
![Angular Support](https://img.shields.io/badge/angular-%3E5.x-blue.svg?style=flat-square)

Angular UI Components to develop faster

 https://clabroche.github.io/ngx-callisto.github.io/
## Installation 
```bash
npm i git@github.com:clabroche/ngx-callisto.git
```

Import module in your RootModule
```javascript
import { BrowserModule } from '@angular/platform-browser';
...
import { CoreModule } from 'ngx-callisto/dist';

@NgModule({
  declarations: [
      ...
  ],
  imports: [
    BrowserModule,
    ... ,
    CoreModule.forRoot(),
  ],
  providers: [
      ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

All components are exported from top of ``` ngx-callisto/dist ```, you can import like:

``` import { BoxComponent } from 'ngx-callisto/dist' ```

## Development

To update and build this library, you can launch differents scripts from package json

```
// Launch documentation
npm run start
```
```
// Generate documentation folder with code coverage
npm run doc
```
```
// Generate a specific version of the library
npm run patch | minor | major
```
