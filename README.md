# Muslimdb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
######  ng-openapi-gen --input <path-to-openapi-json> --output <angular-app-path>/src/app/api
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
## Generation de client api usin swagger code gen with jdk 20
java --add-opens=java.base/java.util=ALL-UNNAMED -jar swagger-codegen-cli-3.0.20.jar generate -i http://localhost:8080/v3/api-docs -l typescript-angular -o D:\HAMIDOU\Projets\Projet_Personnel\Web\angular\muslimdb\src\app\m-api -c config.json
#### additionnal properties for swagger code gen
--additional-properties useOverride=true
#### add provider for eache controllerService.ts 
@Injectable({ providedIn: 'root' })
