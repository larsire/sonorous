import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'app', component: LayoutComponent,
    children: [
      {
        path: 'voiceditems', loadChildren: () => import('src/app/voiced-items/voiced-items.module').then(m => m.VoicedItemsModule)
      },
      {
        path: 'profile', loadChildren: () => import('src/app/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'favorite', loadChildren: () => import('src/app/favorite/favorite.module').then(m => m.FavoriteModule)
      },
      {
        path: 'settings', loadChildren: () => import('src/app/settings/settings.module').then(m => m.SettingsModule)
      }]
  },
  { path: '', redirectTo: '/app/voiceditems', pathMatch: 'full' },
  { path: '**', redirectTo: '/app/voiceditems', pathMatch: 'full' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
