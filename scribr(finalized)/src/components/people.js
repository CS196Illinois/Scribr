import React, { Component } from 'react';
import './people.css';
import Card from '../subComponent/Card';
import Li from '../pictures/albert.jpeg';
import Xu from '../pictures/charles.jpg'
import Penn from '../pictures/davis.jpg';
import Fieldman from '../pictures/alyssa.jpg';
import Zhou from '../pictures/bryant.jpeg';
import Huang from '../pictures/jess.png';
import Oh from '../pictures/julie.jpeg';
import Kang from '../pictures/jon.jpg';
class People extends Component {
    render() {
       const AlbertImage = <img src = {Li} alt = 'li' style={{maxWidth: '100%', minHeight: '100%', float: 'left', display: 'block'}}></img>
       const CharlesImage = <img src = {Xu} alt = 'xu' style={{maxWidth: '100%', minHeight: '100%', float: 'left', display: 'block'}}></img>
       const AlyssaImage = <img src = {Fieldman} alt = 'fieldman' style={{maxWidth: '100%', minHeight: '100%', float: 'left', display: 'block'}}></img>
       const BryantImage = <img src = {Zhou} alt = 'zhou' style={{minWidth: '100%', maxHeight: '100%', float: 'left', display: 'block'}}></img>
       const DavisImage = <img src = {Penn} alt = 'davis' style={{minWidth: '100%', maxHeight: '100%', float: 'left', display: 'block'}}></img>
       const JessicaImage = <img src = {Huang} alt = 'huang' style={{maxWidth: '100%', minHeight: '100%', float: 'left', display: 'block'}}></img>
       const JonImage = <img src = {Kang} alt = 'kang' style={{minWidth: '100%', maxHeight: '100%', float: 'left', display: 'block'}}></img>
       const JulieImage = <img src = {Oh} alt = 'oh' style={{minWidth: '100%', maxHeight: '100%', float: 'left', display: 'block'}}></img>
        return(
          <div class="compre">
            <div class="row">
              <div class="column">
                 <Card name='Albert Li' 
                 intro1 = '• Student' 
                 intro2 = '• Getting Big' 
                 intro3 = '• Trying to get bigger'
                 image = {AlbertImage}
                 />
              </div>
              <div class="column">
               <Card name='Charles Xu' 
               intro1 = '• In-N-Out Enthusiast' 
               intro2 = '• Stack Overflow is my best friend' 
               intro3 = '• Sleep is for the weak'
               image = {CharlesImage}
               />
              </div>
              <div class="column">
               <Card name='Alyssa Fieldman' 
               intro1 = '• Freshman' 
               intro2 = '• Undeclared Major' 
               intro3 = '• Front-end Developer'
               image = {AlyssaImage}
               />
              </div>
              <div class="column">
               <Card name='Bryant Zhou' 
               intro1 = '• Dunker' 
               intro2 = '• Memory Palace User' 
               intro3 = '• Able to mess up anything'
               image = {BryantImage}
               />
              </div>
            </div>
            <div class="row">
              <div class="columnone">
               <Card name='Davis Penn' 
               intro1 = '• Pianist' 
               intro2 = '• Entrepreneur' 
               intro3 = '• Had a physics lab'
               image = {DavisImage}
               />
              </div>
              <div class="columnone">
               <Card name='Jessica Huang' 
               intro1 = '• Pretending not online' 
               intro2 = '• Contact me later' 
               intro3 = '• Front-end Developer'
               image = {JessicaImage}
               />
              </div>
              <div class="columnone">
               <Card name='Jonathan Kang' 
               intro1 = '• UIUC student' 
               intro2 = '• Is asleep somewhere' 
               intro3 = "• Just Vibin' "
               image = {JonImage}
               />
              </div>
              <div class="columnone">
               <Card name='Julie Oh' 
               intro1 = '• An ice-cream snob (no, Im not) ' 
               intro2 = '• UI developer' 
               intro3 = '• Front End developer '
               image = {JulieImage}
               />
              </div>
            </div>
        </div>
      );
   }
}
export default People;