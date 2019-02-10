class AllAboutThatBass {
  public artist: string = "Meghan Trainor";
  public link  : string = "https://www.youtube.com/watch?v=7PCkvCPvDXk";
}

const CHORUS_LINE_SHORT = `I'm all about that bash 'Bout that bash`;
const CHORUS_LINE = `${CHORUS_LINE_SHORT}, no frontend`;

class AllAboutThatBash extends AllAboutThatBass {
  public chorus: string = `
    Because you know ${CHORUS_LINE}
    ${CHORUS_LINE}
    ${CHORUS_LINE}
    ${CHORUS_LINE_SHORT} bash bash
  `;

  public partA: string = `
    Yeah, it's pretty clear, I ain't got mouse at all
    But I can type commands, like I'm supposed to do
    'Cause I got these hotkeys that all the boys chase
    And all the right scripts, and all the right aliases
  `;
}

new AllAboutThatBash();
