import { Component, OnInit } from '@angular/core';
import { Player } from 'src/models/player.model';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deleteplayer',
  templateUrl: './deleteplayer.component.html',
  styleUrls: ['./deleteplayer.component.css']
})
export class DeleteplayerComponent implements OnInit {


  playerdata :Player
  id :number

  constructor(private as:AdminService,private ar:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    const tid = this.ar.snapshot.paramMap.get('id')
    this.id = Number(tid)
    this.getPlayer(this.id)


  }
  getPlayer(id:number){

    this.as.getPlayer(this.id).subscribe((data:Player)=>{
      this.playerdata = data
    })

  }

  saveData():void{

    this.as.DeletePlayer(this.id).subscribe(()=>{
      alert("Deleted Successfully")
      this.router.navigate(['/listplayer'])
    })
  }

}
