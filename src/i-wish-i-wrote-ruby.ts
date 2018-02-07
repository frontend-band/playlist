class IWishIWroteRuby {
  public artist: string = "Radiohead";
  public link  : string = "https://www.youtube.com/watch?v=XFkzRNyygfk";
}

class IWish extends IWishIWroteRuby {

public verse1: string = `
    Committing to your code
    Couldn't look you in the eyes
    You're like John Resig
    My push makes me cry
    It looks like a comma
    In my 'Hello world'
    `;

public preChorus1: string = `
    And I wish I wrote Ruby
    That old fuckin' Ruby
    `;

public chorus: string = `
    But I'm frontend,
    I'm a weirdo.
    What the hell am I doing here?
    I don't belong here.
    `;

public verse2: string = `
    And even on production
    I want to have control
    I want do deployments
    I want have my fall
    I want you to notice
    When I'm not around
    `;

public preChorus2: string = `
    And I wish I wrote Python
    That old fuckin' Python
    `;

// ${this.chorus}

public bridge: string = `
    Node running out again,
    Node running out
    Node run run run run
    `;

public outro: string = `
    It doesn't make me happy
    Whatever I code
    And I wish I wrote Sequel
    That old fuckin' Sequel
    ${this.chorus}
    I don't belong here.
    `;
}

new IWishIWroteRuby();
