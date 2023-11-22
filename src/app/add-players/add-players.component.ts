import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { Player } from '../../models/player.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup,Validators,Validator,FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-players',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.css']
})
export class AddPlayersComponent implements OnInit {
  

  playerData :Player = {id:0,name:'',age:0,category:'',biddingPrice:0}


  constructor(private fb:FormBuilder,private ms :PlayerService,private router:Router,private ar :ActivatedRoute) { }
 
  playerform = this.fb.group(
    {

      name :['',Validators.required],
      age : ['',Validators.required],
      teamID : ['',Validators.required],
      biddingPrice : ['',Validators.required],
      category : ['',Validators.required],
    


    }
  )


  onSave():void{

   this.playerData = this.playerform.value
   this.ms.AddPlayer(this.playerData).subscribe(()=>{
    alert("Record Added Successfully")
  this.router.navigate(['/listplayer'])
   })
  }


  ngOnInit(): void {
  }

}
