import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';
import { FormsModule } from '@angular/forms';
import { BaseEncdecComponent } from './base-encdec/base-encdec.component';
import { UrlEncdecComponent } from './url-encdec/url-encdec.component';
import { DbClientComponent } from './db-client/db-client.component';
import { PostClientComponent } from './post-client/post-client.component';
import { HttpClientModule } from '@angular/common/http';
import { TextDifferenceComponent } from './text-difference/text-difference.component';
import { RegexTesterComponent } from './regex-tester/regex-tester.component';
import { JsonYamlComponent } from './json-yaml/json-yaml.component';
import { MdEditorComponent } from './md-editor/md-editor.component';
import { SqliteViewerComponent } from './sqlite-viewer/sqlite-viewer.component';
import { JsonCsvComponent } from './json-csv/json-csv.component';
import { SqlliteViewerComponent } from './sqllite-viewer/sqllite-viewer.component';
import { HmacComponent } from './hmac/hmac.component';
import { ChecksumComponent } from './checksum/checksum.component';
import { PwdGeneratorComponent } from './pwd-generator/pwd-generator.component';
import { CssMinifierComponent } from './css-minifier/css-minifier.component';
import { JsMinifyComponent } from './js-minify/js-minify.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    ProfileComponent,
    SettingsComponent,
    JsonFormatterComponent,
    BaseEncdecComponent,
    UrlEncdecComponent,
    DbClientComponent,
    PostClientComponent,
    TextDifferenceComponent,
    RegexTesterComponent,
    JsonYamlComponent,
    MdEditorComponent,
    SqliteViewerComponent,
    JsonCsvComponent,
    SqlliteViewerComponent,
    HmacComponent,
    ChecksumComponent,
    PwdGeneratorComponent,
    CssMinifierComponent,
    JsMinifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
