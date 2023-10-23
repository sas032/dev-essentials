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
import { TermsComponent } from './terms/terms.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ImageBackgroundRemovalComponent } from './image-background-removal/image-background-removal.component';
import { ImageToPdfConverterComponent } from './image-to-pdf-converter/image-to-pdf-converter.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'json-xml-formatter', component: JsonFormatterComponent },
    { path: 'base64-encoder-decoder', component: BaseEncdecComponent},
    { path: 'url-encoder-decoder', component: UrlEncdecComponent},
    { path: 'DB', component: DbClientComponent},
    { path: 'api-client', component: PostClientComponent},
    { path: 'compare', component: TextDifferenceComponent},
    { path: 'regex-tester', component: RegexTesterComponent},
    { path: 'json-yaml', component: JsonYamlComponent},
    { path: 'sqllite', component: SqliteViewerComponent},
    { path: 'markdown', component: MdEditorComponent},
    { path: 'json-csv', component:JsonCsvComponent},
    { path: 'sqllite', component: SqliteViewerComponent},
    { path: 'hmac-generator', component:HmacComponent},
    { path: 'checksum-calculator', component:ChecksumComponent},
    { path: 'password-generator', component: PwdGeneratorComponent},
    { path: 'css-minifier', component:CssMinifierComponent},
    { path: 'js-minifier', component: JsMinifyComponent},
    { path: 'terms-and-conditions', component:TermsComponent},
    { path: 'contact', component:ContactComponent},
    { path: 'privacy-policy', component:PrivacyComponent},
    { path: 'background-remove', component:ImageBackgroundRemovalComponent},
    { path: 'image-to-pdf', component:ImageToPdfConverterComponent},
    { path: 'blog', component: ArticleListComponent },
    { path: 'article/:name', component: ArticleDetailComponent },
  ],
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
