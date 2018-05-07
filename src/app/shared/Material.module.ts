import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatListModule } from '@angular/material';
@NgModule({
  exports: [MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatListModule],
  imports: [MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatListModule],
})
export class MaterialModule { }
