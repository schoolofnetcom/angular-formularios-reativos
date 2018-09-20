import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    // nameControl = new FormControl('');
    // emailControl = new FormControl('');
    //
    // showError(control) {
    //     return control.invalid && (control.touched || control.dirty);
    // }
    //
    // hasError(control, error) {
    //     return control.errors && control.errors.hasOwnProperty(error);
    // }
    //FormGroup é um agregado de FormControls

    formGroup = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        body: new FormControl('')
    });

    showError(field) {
        const control = this.formGroup.get(field);
        return control.invalid && (control.touched || control.dirty);
    }

    hasError(field, error) {
        const control = this.formGroup.get(field);
        return control.errors && control.errors.hasOwnProperty(error);
    }
}

