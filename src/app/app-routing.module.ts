import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';
import { BaseEncdecComponent } from './base-encdec/base-encdec.component';
import { UrlEncdecComponent } from './url-encdec/url-encdec.component';
import { DbClientComponent } from './db-client/db-client.component';
import { PostClientComponent } from './post-client/post-client.component';
import { TextDifferenceComponent } from './text-difference/text-difference.component';
import { RegexTesterComponent } from './regex-tester/regex-tester.component';
import { JsonYamlComponent } from './json-yaml/json-yaml.component';
import { SqliteViewerComponent } from './sqlite-viewer/sqlite-viewer.component';
import { MdEditorComponent } from './md-editor/md-editor.component';
import { JsonCsvComponent } from './json-csv/json-csv.component';
import { HmacComponent } from './hmac/hmac.component';
import { ChecksumComponent } from './checksum/checksum.component';
import { PwdGeneratorComponent } from './pwd-generator/pwd-generator.component';
import { CssMinifierComponent } from './css-minifier/css-minifier.component';
import { JsMinifyComponent } from './js-minify/js-minify.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'formatter', component: JsonFormatterComponent },
    { path: 'base64', component: BaseEncdecComponent},
    { path: 'url', component: UrlEncdecComponent},
    { path: 'DB', component: DbClientComponent},
    { path: 'request', component: PostClientComponent},
    { path: 'compare', component: TextDifferenceComponent},
    { path: 'regex', component: RegexTesterComponent},
    { path: 'json_yaml', component: JsonYamlComponent},
    { path: 'sqllite', component: SqliteViewerComponent},
    { path: 'markdown', component: MdEditorComponent},
    { path: 'json_csv', component:JsonCsvComponent},
    { path: 'sqllite', component: SqliteViewerComponent},
    { path: 'hmac', component:HmacComponent},
    { path: 'checksum', component:ChecksumComponent},
    { path: 'passwordGenerator', component: PwdGeneratorComponent},
    { path: 'css', component:CssMinifierComponent},
    { path: 'js', component: JsMinifyComponent}
  ],
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
