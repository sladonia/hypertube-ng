/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './create-new-passwd.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/common';
import * as i3 from './create-new-passwd.component';
import * as i4 from '@angular/forms';
import * as i5 from '../services/reset.service';
import * as i6 from '@angular/router';
const styles_CreateNewPasswdComponent:any[] = [i0.styles];
export const RenderType_CreateNewPasswdComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_CreateNewPasswdComponent,data:{}});
function View_CreateNewPasswdComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'div',[['class',
      'text-warning text-center']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted((null as any),['UNAUTHORIZED']))],(null as any),
      (null as any));
}
function View_CreateNewPasswdComponent_3(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'div',[['class',
      'text-left']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['should be at least 8 characters long, contain numbers and letters\n              ']))],
      (null as any),(null as any));
}
function View_CreateNewPasswdComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),4,'div',[['class',
      'text-warning']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n              '])),(_l()(),i1.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_CreateNewPasswdComponent_3)),
      i1.ɵdid(16384,(null as any),0,i2.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i1.ɵted((null as any),['\n            ']))],
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _co.passwd.errors.myPassword;
        _ck(_v,3,0,currVal_0);
      },(null as any));
}
export function View_CreateNewPasswdComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),39,'div',[['class',
      'card-preview-container log_in_width ma-auto ma-t-30']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n  '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),36,'div',[['class','card ma-b-60']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          1,'h4',[['class','text-center']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['ENTER A NEW PASSWORD'])),
      (_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_CreateNewPasswdComponent_1)),i1.ɵdid(16384,
          (null as any),0,i2.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵeld(0,
          (null as any),(null as any),27,'div',[['class','text-left ma-t-10']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n      '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),24,'form',[['class',
          'pure-form'],['novalidate','']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',
          (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
          [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
              (null as any)]],[[(null as any),'ngSubmit'],[(null as any),'submit'],
          [(null as any),'reset']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i3.CreateNewPasswdComponent = _v.component;
        if (('submit' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,14).onSubmit($event)) !== false);
          ad = (pd_0 && ad);
        }
        if (('reset' === en)) {
          const pd_1:any = ((<any>i1.ɵnov(_v,14).onReset()) !== false);
          ad = (pd_1 && ad);
        }
        if (('ngSubmit' === en)) {
          const pd_2:any = ((<any>_co.updatePasswd()) !== false);
          ad = (pd_2 && ad);
        }
        return ad;
      },(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i4.ɵbf,([] as any[]),
          (null as any),(null as any)),i1.ɵdid(540672,(null as any),0,i4.FormGroupDirective,
          [[8,(null as any)],[8,(null as any)]],{form:[0,'form']},{ngSubmit:'ngSubmit'}),
      i1.ɵprd(2048,(null as any),i4.ControlContainer,(null as any),[i4.FormGroupDirective]),
      i1.ɵdid(16384,(null as any),0,i4.NgControlStatusGroup,[i4.ControlContainer],
          (null as any),(null as any)),(_l()(),i1.ɵted((null as any),['\n        '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),17,'fieldset',[['class','text-center']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n          '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),11,'div',[['class','ma-b-10 pure-control-group']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n            '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),5,'input',
          [['class','width-100'],['formControlName','passwd'],['id','passwd'],['placeholder',
              'password'],['type','password']],[[2,'ng-untouched',(null as any)],[2,
              'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',
              (null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],
              [2,'ng-pending',(null as any)]],[[(null as any),'input'],[(null as any),
              'blur'],[(null as any),'compositionstart'],[(null as any),'compositionend']],
          (_v,en,$event) => {
            var ad:boolean = true;
            if (('input' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,23)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,23).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i1.ɵnov(_v,23)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i1.ɵnov(_v,23)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i4.DefaultValueAccessor,
          [i1.Renderer2,i1.ElementRef,[2,i4.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i1.ɵprd(1024,(null as any),i4.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i4.DefaultValueAccessor]),i1.ɵdid(671744,(null as any),0,i4.FormControlName,
          [[3,i4.ControlContainer],[8,(null as any)],[8,(null as any)],[2,i4.NG_VALUE_ACCESSOR]],
          {name:[0,'name']},(null as any)),i1.ɵprd(2048,(null as any),i4.NgControl,
          (null as any),[i4.FormControlName]),i1.ɵdid(16384,(null as any),0,i4.NgControlStatus,
          [i4.NgControl],(null as any),(null as any)),(_l()(),i1.ɵted((null as any),
          ['\n            '])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),
          1,(null as any),View_CreateNewPasswdComponent_2)),i1.ɵdid(16384,(null as any),
          0,i2.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),
      (_l()(),i1.ɵted((null as any),['\n          '])),(_l()(),i1.ɵted((null as any),
          ['\n          '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'button',
          [['class','pure-button pure-button-primary']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['SET NEW PASSWORD'])),(_l()(),i1.ɵted((null as any),['\n        '])),(_l()(),
          i1.ɵted((null as any),['\n      '])),(_l()(),i1.ɵted((null as any),['\n    '])),
      (_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),i1.ɵted((null as any),['\n'])),
      (_l()(),i1.ɵted((null as any),['\n']))],(_ck,_v) => {
    var _co:i3.CreateNewPasswdComponent = _v.component;
    const currVal_0:any = _co.unauthorized;
    _ck(_v,8,0,currVal_0);
    const currVal_8:any = _co.form;
    _ck(_v,14,0,currVal_8);
    const currVal_16:any = 'passwd';
    _ck(_v,25,0,currVal_16);
    const currVal_17:any = (_co.passwd.touched && _co.passwd.invalid);
    _ck(_v,30,0,currVal_17);
  },(_ck,_v) => {
    const currVal_1:any = i1.ɵnov(_v,16).ngClassUntouched;
    const currVal_2:any = i1.ɵnov(_v,16).ngClassTouched;
    const currVal_3:any = i1.ɵnov(_v,16).ngClassPristine;
    const currVal_4:any = i1.ɵnov(_v,16).ngClassDirty;
    const currVal_5:any = i1.ɵnov(_v,16).ngClassValid;
    const currVal_6:any = i1.ɵnov(_v,16).ngClassInvalid;
    const currVal_7:any = i1.ɵnov(_v,16).ngClassPending;
    _ck(_v,12,0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6,currVal_7);
    const currVal_9:any = i1.ɵnov(_v,27).ngClassUntouched;
    const currVal_10:any = i1.ɵnov(_v,27).ngClassTouched;
    const currVal_11:any = i1.ɵnov(_v,27).ngClassPristine;
    const currVal_12:any = i1.ɵnov(_v,27).ngClassDirty;
    const currVal_13:any = i1.ɵnov(_v,27).ngClassValid;
    const currVal_14:any = i1.ɵnov(_v,27).ngClassInvalid;
    const currVal_15:any = i1.ɵnov(_v,27).ngClassPending;
    _ck(_v,22,0,currVal_9,currVal_10,currVal_11,currVal_12,currVal_13,currVal_14,currVal_15);
  });
}
export function View_CreateNewPasswdComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'app-create-new-passwd',
      ([] as any[]),(null as any),(null as any),(null as any),View_CreateNewPasswdComponent_0,
      RenderType_CreateNewPasswdComponent)),i1.ɵdid(114688,(null as any),0,i3.CreateNewPasswdComponent,
      [i4.FormBuilder,i5.ResetService,i6.Router,i6.ActivatedRoute],(null as any),(null as any))],
      (_ck,_v) => {
        _ck(_v,1,0);
      },(null as any));
}
export const CreateNewPasswdComponentNgFactory:i1.ComponentFactory<i3.CreateNewPasswdComponent> = i1.ɵccf('app-create-new-passwd',
    i3.CreateNewPasswdComponent,View_CreateNewPasswdComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvc2Vyai9yZXBvL2h5cGVydHViZS1uZy9zcmMvYXBwL2NyZWF0ZS1uZXctcGFzc3dkL2NyZWF0ZS1uZXctcGFzc3dkLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9ob21lL3NlcmovcmVwby9oeXBlcnR1YmUtbmcvc3JjL2FwcC9jcmVhdGUtbmV3LXBhc3N3ZC9jcmVhdGUtbmV3LXBhc3N3ZC5jb21wb25lbnQudHMiLCJuZzovLy9ob21lL3NlcmovcmVwby9oeXBlcnR1YmUtbmcvc3JjL2FwcC9jcmVhdGUtbmV3LXBhc3N3ZC9jcmVhdGUtbmV3LXBhc3N3ZC5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2hvbWUvc2Vyai9yZXBvL2h5cGVydHViZS1uZy9zcmMvYXBwL2NyZWF0ZS1uZXctcGFzc3dkL2NyZWF0ZS1uZXctcGFzc3dkLmNvbXBvbmVudC50cy5DcmVhdGVOZXdQYXNzd2RDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2IGNsYXNzPVwiY2FyZC1wcmV2aWV3LWNvbnRhaW5lciBsb2dfaW5fd2lkdGggbWEtYXV0byBtYS10LTMwXCI+XG4gIDxkaXYgY2xhc3M9XCJjYXJkIG1hLWItNjBcIj5cbiAgICA8aDQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPkVOVEVSIEEgTkVXIFBBU1NXT1JEPC9oND5cbiAgICA8ZGl2ICpuZ0lmPVwidW5hdXRob3JpemVkXCIgY2xhc3M9XCJ0ZXh0LXdhcm5pbmcgdGV4dC1jZW50ZXJcIj5VTkFVVEhPUklaRUQ8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1sZWZ0IG1hLXQtMTBcIj5cbiAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiIChuZ1N1Ym1pdCk9XCJ1cGRhdGVQYXNzd2QoKVwiIGNsYXNzPVwicHVyZS1mb3JtXCI+XG4gICAgICAgIDxmaWVsZHNldCBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1hLWItMTAgcHVyZS1jb250cm9sLWdyb3VwXCI+XG4gICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3dkXCIgY2xhc3M9XCJ3aWR0aC0xMDBcIiBpZD1cInBhc3N3ZFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJwYXNzd2QudG91Y2hlZCAmJiBwYXNzd2QuaW52YWxpZFwiIGNsYXNzPVwidGV4dC13YXJuaW5nXCI+XG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJwYXNzd2QuZXJyb3JzLm15UGFzc3dvcmRcIiBjbGFzcz1cInRleHQtbGVmdFwiPnNob3VsZCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMgbG9uZywgY29udGFpbiBudW1iZXJzIGFuZCBsZXR0ZXJzXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInB1cmUtYnV0dG9uIHB1cmUtYnV0dG9uLXByaW1hcnlcIj5TRVQgTkVXIFBBU1NXT1JEPC9idXR0b24+XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iLCI8YXBwLWNyZWF0ZS1uZXctcGFzc3dkPjwvYXBwLWNyZWF0ZS1uZXctcGFzc3dkPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDR0k7TUFBQTtNQUFBLGdCQUEyRDs7OztvQkFPakQ7TUFBQTtNQUF3RDs7OztvQkFEMUQ7TUFBQTtNQUFtRSxxREFDakU7VUFBQTthQUFBO1VBQUEsd0JBQ007OztRQUREO1FBQUwsV0FBSyxTQUFMOzs7O29CQVZkO01BQUE7TUFBQSw0Q0FBaUU7TUFDL0Q7VUFBQTtNQUEwQiwyQ0FDeEI7VUFBQTtVQUFBLDhCQUF3QjtNQUF5QiwyQ0FDakQ7VUFBQSx1RUFBQTtVQUFBO1VBQUEsZUFBNkUsMkNBQzdFO1VBQUE7VUFBQSwwREFBK0I7VUFBQSxlQUM3QjtVQUFBO1VBQUE7VUFBQTtjQUFBO1VBQUE7UUFBQTtRQUFBO1FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtVQUFBO1VBQUE7UUFBQTtRQUF5QjtVQUFBO1VBQUE7UUFBQTtRQUF6QjtNQUFBLHVDQUFBO1VBQUEsb0NBQUE7VUFBQTthQUFBO2FBQUE7VUFBQSw2QkFBdUU7TUFDckU7VUFBQTtNQUE4QixpREFDNUI7VUFBQTtVQUFBLDBEQUF3QztVQUFBLHFCQUN0QztVQUFBO2NBQUE7Y0FBQTtjQUFBO2NBQUE7Y0FBQTtVQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO1VBQUEsdUNBQUE7VUFBQTtVQUFBLHNCQUFBO1FBQUE7TUFBQSxvQ0FBQTtVQUFBO1VBQUEsd0NBQUE7VUFBQSwyQ0FBQTtVQUFBLDRDQUFxRztVQUFBLHFCQUNyRztVQUFBLHlEQUFBO1VBQUE7TUFHTSxpREFDRjtVQUFBLG1CQUNOO1VBQUE7VUFBQSw0Q0FBZ0Q7VUFBQSx1QkFBeUIsK0NBQ2hFO2lCQUFBLDhCQUNOO01BQ0gseUNBQ0Y7TUFDRjs7SUFoQkc7SUFBTCxXQUFLLFNBQUw7SUFFUTtJQUFOLFlBQU0sU0FBTjtJQUdhO0lBQVAsWUFBTyxVQUFQO0lBQ0s7SUFBTCxZQUFLLFVBQUw7O0lBSk47SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQSxZQUFBLHFFQUFBO0lBR007SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQSxZQUFBLDJFQUFBOzs7O29CQ1JaO01BQUE7eUNBQUEsVUFBQTtNQUFBOztRQUFBOzs7OyJ9