abstract class LosingMyReligion {
  
  public artist: string = "REM";
  public link  : string = "https://www.youtube.com/watch?v=xwtdhWltSIg";

}

class LosingMyConventions extends LosingMyReligion {

  public partA: string = `
    Oh class, it's bigger
    It's bigger than ten
    thousand lines
    The lengths that you will go to
    The distance in your lines
    Oh no, you're using tabs
    I stash it up...
    `;

  public partB: string = `
    That's me in the office
    That's me with my Web Storm
    Losing my conventions
    Trying to keep up with you
    And I don't know if I can merge it
    Oh no, I've seen too much
    I've seen enough
    `;  
}

new LosingMyConventions();
