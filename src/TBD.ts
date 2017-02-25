abstract class LetItBe {

  public artist: string = "The Beatles";
  public link: string = "https://www.youtube.com/watch?v=rfX0q1aNCos";

}

class TBD extends LetItBe {

  public partA: string = `
    When I find myself in times of trouble,
    deadline is so close to me,    
    I use the words of wisdom - TBD.
     
    I wake up to the daily stand-up
    everyone looks straight at me
    but all i got to say is: TBD       
    `;

  public chorusA: string = `
    TBD, TBD, TBD, yeah TBD.
    I will fix it later, TBD.
    `;

  public partB: string = `           
    And in my hour of darkness
    Where Spagehetti code is all I see,
    Write these words of wisdom - TBD.
                     
    And when the broken-syntax methods
    Living in my code agree
    There must be a stop to - TBD
    `;
    
  public chorusB: string = `
    TBD, TBD, TBD, yeah TBD.
    I will fix it later, TBD.

    TBD, TBD, TBD, yeah TBD.
    No one will remember, TBD.
  `;

  public partC: string = `
    My calender is filled with meetings
    all of them including me
    I look at their description: TBD   
  `

  public chorusC: string = `
    TBD, TBD, TBD, yeah TBD.
    I will fix it later, TBD.    

    TBD, TBD, TBD, yeah TBD.
    Makes your life so simple, TBD.
    `;
}

new TBD();
