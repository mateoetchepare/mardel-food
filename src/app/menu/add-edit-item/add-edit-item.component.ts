import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { foodType } from 'src/app/model/menu-item.interface';
import { CustomErrorStateMatcher } from './custom-error-state-matcher/custom-error-state-matcher.component';

@Component({
  selector: 'add-edit-item',
  templateUrl: `add-edit-item.component.html`,
})
export class AddEditItemComponent implements OnInit { 
  @Input()
  public toDo: string = '';
  public menuItemForm: FormGroup = {} as FormGroup;
  public foodTypes: foodType[] = Object.values(foodType);
  public matcher = new CustomErrorStateMatcher();

  constructor(private formBuilder: FormBuilder, private cd: ChangeDetectorRef) {

  }

  ngOnInit(): void {
      this.menuItemForm = this.formBuilder.group( {
        name: ['', Validators.required],
        description: [''],
        price: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        foodType: ['', [Validators.required]],
        image: [null],
      });
  }

  onSubmit() {

  }

  onFileInput(event: any) {
    const reader = new FileReader();
 
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
  
      reader.onload = () => {
        this.menuItemForm.patchValue({
          image: reader.result
       });
      
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }

}
