import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the test application';
  secret = '42';
  monster = 'Beast';
  story = {
    name: 'The strike'
  };
  tasty = {
    name: 'Cat',
    value: 7
  };
  vehicles = ['cat', 'bat', 'tact']
}

// export class StoryController {
//   var vm = this;
//   vm.story = { id: 100, name: 'The Force' };
// }