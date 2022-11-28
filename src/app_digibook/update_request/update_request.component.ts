import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerRequest } from 'src/app_digibook/buybook';
import { BookService } from 'src/app_digibook/comp-book/book.service';
import { CompBookComponent } from '../comp-book/comp-book.component';

@Component({
  selector: 'app-update_request',
  templateUrl: './update_request.component.html',
  styleUrls: ['./update_request.component.css']
})
export class UpdateRequestComponent implements OnInit {

  book: CustomerRequest[] = [];
  currentUser: CustomerRequest[] = [];
  //student:FormGroup|any;
  test: object|any;
  
 // currentUser: any;
  constructor(private bookservice: BookService,
    private router: Router) {
     // this.router.getCurrentNavigation()?.extras.state.
     // console.log(this.router.getCurrentNavigation()?.extras.state.example);
   // const navigation = null;
    //const navigation = this.router.getCurrentNavigation();
     const state = this.router.getCurrentNavigation()?.extras.state as {
       
      //  workQueue: boolean,
      //  services: number,
      //  code: string
       title: string,
          id:number,
          description: string,
          status: string,
          comments:string,
          completedDate:string
     };
     this.test={ title:state.title,id: state.id,description:state.description,status:state.status
      ,comments: state.comments,completedDate:state.completedDate};
   console.log(this.test);
   
     }

    ngOnInit(): void {
      console.log("before getAll"+this.test)
      this.fetchSingleReq();
      this.date1();
      console.log("after getAll")
      //this.test.completedDate.get('requestdate').patchValue(this.formatDate(new Date()));

      // this.student = new FormGroup({
      //   name: new FormControl()
      // })
    }
    close(){
      this.router.navigate(['/dashboard']);
    }
  date1(){
   this.currentUser = this.test;
   console.log(this.test+"user")
  }
  fetchSingleReq(){
    this.bookservice.getSearchByupdate(this.test.id).subscribe({
      next: (res:any)=>{
        console.log(res+"teseee")
        this.test = res;
      //  question: Question = {}

        const pokemon = {
          id:this.test.id,
          description: this.test.description,
          comments: this.test.comments,
          completedDate: this.test.completedDate,
          status: this.test.status,
          title: this.test.title
      }
      console.log(pokemon);
      this.test=pokemon;
      },
      error: (err:any)=>{
        console.error(err)
      }
    })
  }
    fetchAllMovies(){
      this.bookservice.getBookList().subscribe({
        next: (res:any)=>{
          console.log(res)
          this.book = res;
        },
        error: (err:any)=>{
          console.error(err)
        }
      })
    }

 


    //create(){
      save(title:string, description:string,status:string,
        completedDate:string,comments:string ){
        // this.buybook.push({title: title, director: director, rating: rating});

    
       let book:CustomerRequest = {id: 0,title:title,description:description,status:status,
        completedDate:completedDate,comments:comments }
   
       this.bookservice.save(book).subscribe({
         next: (res:any)=>{
           this.fetchAllMovies();
         }
       })
     }
     
     deleteRequest(id:string|number){
       //console.log("movie id is : "+id)
       if(window.confirm('Are sure you want to delete this request ?')){
        console.log("if");
       this.bookservice.deleteRequest(id).subscribe({
         next: (res:any)=>{
           console.log("movie id is : "+res);
           this.fetchAllMovies();
         }
       })
      }else{
        console.log("ifelse");
      }
     }
    
    getSearchByStatus(id:String){
       //console.log("movie id is : "+id)
       this.bookservice.getSearchByStatus(id).subscribe({
         next: (res:any)=>{
           console.log("movie id is : "+res.id);
           //this.fetchAllMovies();
           this.book = res;
         }
       })
     }
     update(item:any,idx:any) {

      console.log(item.title);
      console.log(item.id);
      console.log(item.description);
      console.log(item.status);
      console.log(item.comments);
      console.log(item.completedDate);
      this.router.navigate
    }
    updateRequest(item:any,idx:any,idx1:any,idex2:any){

       let book:CustomerRequest = {id: this.test.id,title:this.test.title,description:idex2,
        status:idx,
        completedDate:idx1,comments:item }
        console.log(book+"book"+this.test.status+"comments"+this.test+"122"+item+"s"+idx1);

         this.bookservice.updateRequest(this.test.id,book).subscribe({
         next: (res:any)=>{
           console.log("movie id is : "+res.id);
          this.fetchAllMovies1();
           this.book = res;
         }
       })
    }
    fetchAllMovies1(){
      this.test.description='';
      this.test.completedDate='';
      this.test.comments='';
      this.test.status='';
    }
   
  }