import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { TeamDetailsComponent } from './team-details.component';


@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: TeamDetailsComponent }
	])],
	exports: [RouterModule]
})
export class TeamDetailsRoutingModule { }
