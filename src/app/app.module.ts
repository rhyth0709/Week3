import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPlayersComponent } from './list-players/list-players.component';
import { ListTeamsComponent } from './list-teams/list-teams.component';
import { AddPlayersComponent } from './add-players/add-players.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlayerComponent } from './player/player.component';
// import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddTeamsComponent } from './add-teams/add-teams.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { DeleteplayerComponent } from './deleteplayer/deleteplayer.component';
import { DeleteTeamComponent } from './delete-team/delete-team.component';
@NgModule({
  declarations: [
    AppComponent,
    ListPlayersComponent,
    ListTeamsComponent,
    AddPlayersComponent,
    PlayerComponent,
    HomeComponent,
    AddTeamsComponent,
    EditPlayerComponent,
    MenuComponent,
    DeleteplayerComponent,
    DeleteTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
