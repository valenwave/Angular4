import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test Application';

  card = {
    name: '',
    imagePath: ''
  }

  colors = ['White', 'Blue', 'Black', 'Red', 'Green'];

  sayGreetings = function(){
    alert("Hello");
  };

  updateColor = function(){
    // TODO: How do I pull selection? 
    //alert("Changing color");
  }

}

// export class StoryController {
//   var vm = this;
//   vm.story = { id: 100, name: 'The Force' };
// }