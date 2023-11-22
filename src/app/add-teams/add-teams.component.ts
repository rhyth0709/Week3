import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-add-teams',
  templateUrl: './add-teams.component.html',
  styleUrls: ['./add-teams.component.css']
})
export class AddTeamsComponent implements OnInit {


  teamForm : FormGroup
  newTeam :{id:number,name:string,maximumBudget:number}

  constructor(private as : AdminService) { 

    this.teamForm = new FormGroup({
      name : new FormControl('',[Validators.required]),
      maximumBudget : new FormControl('',[Validators.required])
    })

  }

  onSave():void{
    this.newTeam = this.teamForm.value
    this.as.createTeam(this.newTeam).subscribe(()=>{
      alert("Added Team Successssfully")
      console.log(this.newTeam)
    })

  }

  ngOnInit(): void {
  }

}
