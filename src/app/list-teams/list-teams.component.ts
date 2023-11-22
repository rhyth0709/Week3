import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Team } from 'src/models/team.model';

@Component({
  selector: 'app-list-teams',
  templateUrl: './list-teams.component.html',
  styleUrls: ['./list-teams.component.css']
})
export class ListTeamsComponent implements OnInit {

  constructor(private ms : AdminService) { }

  teams: Team[]=[]

  ngOnInit(): void {

    this.ms.getTeams().subscribe((data)=>{
      this.teams.push(...data)
      console.log(this.teams)
    })
  }

  onDisplay():void{
    console.log(this.teams);
  }



}
