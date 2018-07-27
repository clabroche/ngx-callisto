# ngx-callisto

![Coverage Status](./documentation/badge.svg)
![Angular Support](https://img.shields.io/badge/angular-%3E5.x-blue.svg?style=flat-square)

Core Module for Angular2+ based applications

## Installation 
Make sure that you are allowed to access this repository and have your ssh agent started
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
npm i git@github.com:clt-informatique-team/ngx-clt-front.git
```

Import module in your RootModule
```javascript
import { BrowserModule } from '@angular/platform-browser';
...
import { CoreModule } from 'ngx-clt-core/dist';

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
All components are exported from top of ``` ngx-clt-core/dist ```, you can import like ``` import { BoxComponent } from 'ngx-clt-core/dist' ```

## Development

To update and build this library, you can launch differents scripts from package json

```
// Launch an instance of all sandboxed applications
npm run start
```
```
// Generate documentaion folder with code coverage
npm run doc
```
```
// Generate a specific version of the library with build and commit
// Launch autoexport script that allow to automatically export all component on module
npm run patch | minor | major
```
