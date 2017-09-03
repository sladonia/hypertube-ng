import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CardPreviewComponent } from './card-preview/card-preview.component';
import { GalleryPreviewComponent } from './gallery-preview/gallery-preview.component';
import { PreviewsService } from './previews.service';
import { WatchPageComponent } from './watch-page/watch-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyProfilePageComponent } from './my-profile-page/my-profile-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    GalleryComponent,
    CardPreviewComponent,
    GalleryPreviewComponent,
    WatchPageComponent,
    PageNotFoundComponent,
    MyProfilePageComponent,
    ProfilePageComponent,
    SignInPageComponent,
    SignUpPageComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: GalleryComponent },
      { path: 'watch/:title/:id', component: WatchPageComponent},
      { path: 'my-profile', component: MyProfilePageComponent},
      { path: 'profile', component: ProfilePageComponent},
      { path: 'sign-in', component: SignInPageComponent},
      { path: 'sign-up', component: SignUpPageComponent},
      { path: 'reset-password', component: ResetPasswordComponent},
      { path: '**', component: PageNotFoundComponent},
    ])
  ],
  providers: [PreviewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
