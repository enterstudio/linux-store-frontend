import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from './app-material/app-material.module';

import './rxjs-extensions';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { AppListComponent } from './app-list/app-list.component';
import { AppDetailsComponent } from './app-details/app-details.component';
import { FooterComponent } from './footer/footer.component';
import { LinuxStoreApiService } from './linux-store-api.service';

@NgModule({
  declarations: [
    AppComponent,
    AppListComponent,
    AppDetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppMaterialModule,
    routing
  ],
  providers: [LinuxStoreApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
