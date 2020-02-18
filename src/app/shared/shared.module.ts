import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedSingletonService } from './shared.singleton.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: []
})
export class SharedModule {

  static forRoot(sharedSingletonService: SharedSingletonService): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        {provide: SharedSingletonService, useValue: sharedSingletonService}
      ]
    };
  }
}
