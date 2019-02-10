class CantHelpFallingInLove {
  public artist: string = "Elvis Presley";
  public link  : string = "https://www.youtube.com/watch?v=vGJTaP6anOU";
}

class FallingInLove extends CantHelpFallingInLove {

  public chorus: string = `
    Wise men say
    Only fools rush in
    But I can't help falling in love with Vue
    Shall I stay?
    Would it be a sin
    If I can't help falling in love with Vue?
  `;

  public partB: string = `
    Who needs Angular?
    React is for fools
    Backbone's history
    Vue, is meant for me
    Take my app,
    Take my whole code, too
    For I can't help falling in love with Vue
    `;

}

new FallingInLove();

