import React, { Component } from 'react';
import styled from 'styled-components';

import Chart from './components/Chart';
import Gauge from './components/Gauge';
import Input from './components/Input';

type State = {
  resetInput: boolean;
  errors: number;
  isCounting: boolean;
  text: string;
  timer: number;
  words: number;
  wordsPerMinute: number[];
};

const texts: string[] = [
  'Domestic confined any but son bachelor advanced remember. How proceed offered her offence shy forming. Returned peculiar pleasant but appetite differed she. Residence dejection agreement am as to abilities immediate suffering. Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.',
  'Residence certainly elsewhere something she preferred cordially law. Age his surprise formerly mrs perceive few stanhill moderate. Of in power match on truth worse voice would. Large an it sense shall an match learn. By expect it result silent in formal of. Ask eat questions abilities described elsewhere assurance. Appetite in unlocked advanced breeding position concerns as. Cheerful get shutters yet for repeated screened. An no am cause hopes at three. Prevent behaved fertile he is mistake on.',
  'Now seven world think timed while her. Spoil large oh he rooms on since an. Am up unwilling eagerness perceived incommode. Are not windows set luckily musical hundred can. Collecting if sympathize middletons be of of reasonably. Horrible so kindness at thoughts exercise no weddings subjects. The mrs gay removed towards journey chapter females offered not. Led distrusts otherwise who may newspaper but. Last he dull am none he mile hold as.',
  'Examine she brother prudent add day ham. Far stairs now coming bed oppose hunted become his. You zealously departure had procuring suspicion. Books whose front would purse if be do decay. Quitting you way formerly disposed perceive ladyship are. Common turned boy direct and yet.',
  'Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.',
  'Now indulgence dissimilar for his thoroughly has terminated. Agreement offending commanded my an. Change wholly say why eldest period. Are projection put celebrated particular unreserved joy unsatiable its. In then dare good am rose bred or. On am in nearer square wanted.',
  'Procuring education on consulted assurance in do. Is sympathize he expression mr no travelling. Preference he he at travelling in resolution. So striking at of to welcomed resolved. Northward by described up household therefore attention. Excellence decisively nay man yet impression for contrasted remarkably. There spoke happy for you are out. Fertile how old address did showing because sitting replied six. Had arose guest visit going off child she new.',
  'Lose eyes get fat shew. Winter can indeed letter oppose way change tended now. So is improve my charmed picture exposed adapted demands. Received had end produced prepared diverted strictly off man branched. Known ye money so large decay voice there to. Preserved be mr cordially incommode as an. He doors quick child an point at. Had share vexed front least style off why him.',
  'Announcing of invitation principles in. Cold in late or deal. Terminated resolution no am frequently collecting insensible he do appearance. Projection invitation affronting admiration if no on or. It as instrument boisterous frequently apartments an in. Mr excellence inquietude conviction is in unreserved particular. You fully seems stand nay own point walls. Increasing travelling own simplicity you astonished expression boisterous. Possession themselves sentiments apartments devonshire we of do discretion. Enjoyment discourse ye continued pronounce we necessary abilities.',
  'Extended kindness trifling remember he confined outlived if. Assistance sentiments yet unpleasing say. Open they an busy they my such high. An active dinner wishes at unable hardly no talked on. Immediate him her resolving his favourite. Wished denote abroad at branch at.',
  'Up branch to easily missed by do. Admiration considered acceptance too led one melancholy expression. Are will took form the nor true. Winding enjoyed minuter her letters evident use eat colonel. He attacks observe mr cottage inquiry am examine gravity. Are dear but near left was. Year kept on over so as this of. She steepest doubtful betrayed formerly him. Active one called uneasy our seeing see cousin tastes its. Ye am it formed indeed agreed relied piqued.',
  'Or neglected agreeable of discovery concluded oh it sportsman. Week to time in john. Son elegance use weddings separate. Ask too matter formed county wicket oppose talent. He immediate sometimes or to dependent in. Everything few frequently discretion surrounded did simplicity decisively. Less he year do with no sure loud.',
  'Manor we shall merit by chief wound no or would. Oh towards between subject passage sending mention or it. Sight happy do burst fruit to woody begin at. Assurance perpetual he in oh determine as. The year paid met him does eyes same. Own marianne improved sociable not out. Thing do sight blush mr an. Celebrated am announcing delightful remarkably we in literature it solicitude. Design use say piqued any gay supply. Front sex match vexed her those great.',
  'Not him old music think his found enjoy merry. Listening acuteness dependent at or an. Apartments thoroughly unsatiable terminated sex how themselves. She are ten hours wrong walls stand early. Domestic perceive on an ladyship extended received do. Why jennings our whatever his learning gay perceive. Is against no he without subject. Bed connection unreserved preference partiality not unaffected. Years merit trees so think in hoped we as.',
  'Yourself off its pleasant ecstatic now law. Ye their mirth seems of songs. Prospect out bed contempt separate. Her inquietude our shy yet sentiments collecting. Cottage fat beloved himself arrived old. Grave widow hours among him ﻿no you led. Power had these met least nor young. Yet match drift wrong his our.',
  'Bringing unlocked me an striking ye perceive. Mr by wound hours oh happy. Me in resolution pianoforte continuing we. Most my no spot felt by no. He he in forfeited furniture sweetness he arranging. Me tedious so to behaved written account ferrars moments. Too objection for elsewhere her preferred allowance her. Marianne shutters mr steepest to me. Up mr ignorant produced distance although is sociable blessing. Ham whom call all lain like.',
  'Letter wooded direct two men indeed income sister. Impression up admiration he by partiality is. Instantly immediate his saw one day perceived. Old blushes respect but offices hearted minutes effects. Written parties winding oh as in without on started. Residence gentleman yet preserved few convinced. Coming regret simple longer little am sister on. Do danger in to adieus ladies houses oh eldest. Gone pure late gay ham. They sigh were not find are rent.',
  'It if sometimes furnished unwilling as additions so. Blessing resolved peculiar fat graceful ham. Sussex on at really ladies in as elinor. Sir sex opinions age properly extended. Advice branch vanity or do thirty living. Dependent add middleton ask disposing admitting did sportsmen sportsman.',
  'For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favourable mrs can projecting own. Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic had but. Drawings offended yet answered jennings perceive laughing six did far.',
  'Endeavor bachelor but add eat pleasure doubtful sociable. Age forming covered you entered the examine. Blessing scarcely confined her contempt wondered shy. Dashwoods contented sportsmen at up no convinced cordially affection. Am so continued resembled frankness disposing engrossed dashwoods. Earnest greater on no observe fortune norland. Hunted mrs ham wishes stairs. Continued he as so breakfast shameless. All men drew its post knew. Of talking of calling however civilly wishing resolve.',
];

const initialSState = {
  resetInput: false,
  errors: 0,
  isCounting: false,
  text: texts[Math.floor(Math.random() * 20)],
  timer: 0,
  words: 0,
  wordsPerMinute: [ 0 ],
};

class App extends Component<void, State> {
  state = {
    ...initialSState,
  };

  updateCountIntervalId: number = 0;

  resetGame = () => {
    this.stopCount();
    this.setState({
      ...initialSState,
      resetInput: true,
    });
  };

  checkIfEndGame = (userInput: string) => {
    if (this.state.text.indexOf(userInput) > -1) {
      alert(
        `DONE IN ${this.state.timer} seconds with ${this.state.errors} errors!`
      );
      return setTimeout(this.resetGame, 500);
    }

    alert('There are still some errors.');
  };

  // INPUT

  handleInput = (userInput: string) => {
    this.countWords(userInput);
    this.countErrors(userInput);

    if (!this.state.isCounting) {
      return this.startCount();
    }

    if (this.state.text.length === userInput.length) {
      this.checkIfEndGame(userInput);
    }

    return;
  };

  newInput = () => {
    this.setState({
      resetInput: false,
    });
  };

  // VELOCITY

  countWords = (userInput: string) => {
    this.setState({
      words: userInput.split(' ').length,
    });
  };

  compareTexts = () => {
    if (!this.state.words || !this.state.timer) {
      return;
    }

    return this.setState(prevState => ({
      wordsPerMinute: [
        ...prevState.wordsPerMinute,
        (this.state.words / this.state.timer) * 60,
      ],
    }));
  };

  // ERRORS

  countErrors = (userInput: string) => {
    if (this.state.text.indexOf(userInput) === -1) {
      this.setState(prevState => ({
        errors: prevState.errors + 1,
      }));
    }
  };

  // TIME

  startCount = () => {
    this.updateCountIntervalId = setInterval(this.updateCount, 1000);
    this.compareTexts();
    setInterval(this.compareTexts, 500);
    this.setState({
      isCounting: true,
    });
  };

  stopCount = () => {
    clearInterval(this.updateCountIntervalId);
    this.setState({
      isCounting: false,
    });
  };

  updateCount = () => {
    this.setState(prevState => ({
      timer: prevState.timer + 1,
    }));
  };

  render() {
    const lastVelocity = this.state.wordsPerMinute.length
      ? Math.round(
          this.state.wordsPerMinute[this.state.wordsPerMinute.length - 1] * 100
        ) / 100
      : 0;

    return (
      <AppDiv>
        <Button disabled={this.state.resetInput} onClick={this.resetGame}>
          Restart
        </Button>
        <Description>
          Check your velocity! Timer starts when you start typing.
        </Description>
        <Input
          handleInput={this.handleInput}
          resetInput={this.state.resetInput}
          text={this.state.text}
          newInput={this.newInput}
        />
        <Velocity>
          <Text>
            <Description>
              The average person types between 38 and 40 WPM. Professional
              typists type on average between 65 and 75 WPM.
            </Description>
            <UserVelocity>Your Velocity: {lastVelocity} WPM.</UserVelocity>
          </Text>
          <Graph>
            <Chart data={this.state.wordsPerMinute} />
            <Gauge data={(this.state.words / this.state.timer) * 60} />
          </Graph>
        </Velocity>
      </AppDiv>
    );
  }
}

export default App;

const AppDiv = styled.div`
  font-family: monospace;
  font-size: 14px;
  line-height: 1.5em;
  position: relative;
  text-align: center;
  padding: 10px;
`;

const Button = styled.button`
  position: absolute;
  padding: 10px;
  right: 15px;
  top: 15px;
  width: 100px;
  border: 3px solid black;
  &:hover {
    transition: 0.3s;
    cursor: pointer;
    background-color: #cccccc;
  }
`;

const Graph = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;

  @media (min-width: 700px) {
    flex-direction: row;
    align-items: baseline;
    justify-content: space-evenly;
  }
`;

const Velocity = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const UserVelocity = styled.div`
  font-size: 20px;
`;
