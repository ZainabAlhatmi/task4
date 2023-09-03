

import { Component,OnInit } from '@angular/core';
import { Question } from '../app.module';


interface User {
  id: number;
  name: string;
}



@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit{ 
  questions: Question[] = [
    new Question('1. Which of these elements in HTML can be used for making a text bold?', ['<a>', '<pre>','<br>','<b>']
     ),
    new Question('2. Which tag do we use in HTML for inserting a line-break?', ['<a>', '<br>','<b>','<pre>']),
    new Question('3. How to create a hyperlink in HTML?', ['a. <a link = “www.thinkandlearn.com"> thinkandlearn.com </a>', 'b.<" www.thinkandlearn.com">thinkandlearn.com< /a>','c. <"a href = “www.thinkandlearn.com”>thinkandlearn.com </a>','d. <a url = “www.thinkandlearn.com” thinkandlearn.com </a>;']),
    new Question('4. In HTML, how do we insert an image?', ['a. <img src = “jtp.png” />','b.<img href = “jtp.png”>','c.< img link = “jtp.png”>','d.<img url = “jtp.png”>']),
    new Question('5. Which tag do we use to define the options present in the drop-down selection lists?', ['a.<list>', 'b.<option>','c.<dropdown>','d.<selesct>']),
   
   
  ];
  correctAnswers: (string | null)[] = [
    'd. <b>',
    'b. <br>',
    'c. <"a href = “www.thinkandlearn.com”>thinkandlearn.com </a>',
    'a. <img src = “jtp.png” />',
    'b.<option>',
  ];
 // correctAnswer: string | null = null;

  currentQuestionIndex = 0;
  selectedOptionIndex: number | null = null;

  ngOnInit() {
 
  }

  // nextQuestion() {
  //   this.currentQuestionIndex++;
  //   this.selectedOptionIndex = null;
  // }
  nextQuestion() {
    this.currentQuestionIndex++;
    this.selectedOptionIndex = null;
   // this.correctAnswer =null; // Reset the correct answer when moving to the next question
   this.selectedOptionIndex = null;
  }
  allQuestionsAnswered: boolean = false;
  submit() {
    this.allQuestionsAnswered = true;
    if (this.selectedOptionIndex !== null) {
console.log('SUBMIT button clicked with selected option index:', this.selectedOptionIndex);
    } else {
      console.log('Please select an option before submitting.');
        {
       }
     
      }
       
    }
  }

