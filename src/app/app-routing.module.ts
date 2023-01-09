import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeistComponent } from './components/heist/heist.component';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './components/home/home.component';
import { MembersComponent } from './components/members/members.component';
import { RulesComponent } from './components/rules/rules.component';
import { StatsComponent } from './components/stats/stats.component';
import { TrackerComponent } from './components/tracker/tracker.component';

const routes: Routes = [
  { path: 'tracker', component: TrackerComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'members', component: MembersComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'heist', component: HeistComponent },
  { path: 'home', component: HomeComponent},
  { path: '**', redirectTo: '/home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }