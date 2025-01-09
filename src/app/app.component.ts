import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mreader';
  choosen:string=''
  result:string=''

  ChoosenNumber(event:any){
    if(event.target.value<=10 && event.target.value>=1){
      this.choosen='You have choosen: '+event.target.value

      if(event.target.value==1){
        this.result= " Smiling Can Boost Happiness: Even if you force a smile, it can actually make you feel happier due to the brain's response to facial expressions."
      }

      else if(event.target.value==2){
        this.result= " Memory and Music: Your favorite song can evoke powerful memories because of how the brain stores and connects music with emotional experiences."
      }

      else if(event.target.value==3){
        this.result= " Negativity Bias: The human brain has a negativity bias, meaning we are more affected by negative events than positive ones. This can influence our mood and decision-making."
      }
      else if(event.target.value==4){
        this.result= " Multitasking is a Myth: Our brains are not capable of multitasking effectively; we can only focus on one task at a time without losing efficiency"
      }
      else if(event.target.value==5){
        this.result= " The Power of Stories: Information presented in a story format is more likely to be remembered than facts presented in isolation, enhancing learning and retention"
      }
      else if(event.target.value==6){
        this.result= "Dopamine and Social Media: The brain releases dopamine when we receive likes on social media, creating a reward system similar to winning money"
      }
      else if(event.target.value==7){
        this.result= " The Placebo Effect: This phenomenon shows that believing in the effectiveness of a treatment can lead to real improvements in health, even if the treatment has no therapeutic effect"
      }
      else if(event.target.value==8){
        this.result= " Neuroplasticity: The brain can rewire itself after injury, demonstrating remarkable adaptability and resilience through a process known as neuroplasticity"
      }
      else if(event.target.value==9){
        this.result= " Emotions Are Contagious: Being around happy people can lift your mood because emotions can spread from one person to another, influencing overall well-being"
      }
      else if(event.target.value==10){
        this.result= " Cognitive Dissonance: This psychological phenomenon occurs when individuals hold two contradictory beliefs or values, leading them to change one to align with the other for mental consistency"
      }

    }
    else{
      alert('Please enter the value between 1 to 10')
      window.location.reload()
    }
      
  }

  Restart(){
    window.location.reload()
  }
}
