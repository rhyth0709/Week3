import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {


  playerdata : Player[] = []

  constructor(private ps :PlayerService) { 

   
  }

 
  ngOnInit(): void {
    this.ps.getPlayers().subscribe((data)=>{this.playerdata.push(...data)})
  }

  onDisplay():void{
    console.log(this.playerdata);
  }


}
