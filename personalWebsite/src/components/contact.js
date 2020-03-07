import React, { Component } from 'react';
import {Grid, Cell,List, ListItem,ListItemContent} from 'react-mdl'
import Avatar from './avatar.jpeg'

class Contact extends Component {

    render() { 
        return (
            <div className = "contact-body">
              <Grid className="contact-grid">
                <Cell col={6}>
                  <h2>Bryant Zhou</h2>
                  <img
                    src= {Avatar}
                    alt="avatar"
                    style={{height:'250px'}}
                    className="avatar-img"
                   />
                   <p style={{width:'95%', paddingTop:'2em', marginLeft:'2em'}}>
                       My official is Tianyi Zhou, and I name myself Bryant because of Kobe Bryant. I am now a sophomore in Econometrics major. I like to play basketball, swim, and practice memorization when I am free.
                   </p>
                </Cell>
                <Cell col={6}>
                  <h2>Contact me</h2>
                  <hr/>
                  <div className='contact-list'>
                <List>
                  <ListItem>
                    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                     <i className="fa fa-phone-square" aria-hidden="true"/>
                    (804)821-8762</ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                     <i className="fa fa-envelope" aria-hidden="true"/>
                     tianyz8@illinois.edu</ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                    <i class="fa fa-facebook-square" aria-hidden="true"></i>
                       Bryant Zhou</ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                       bryant_zhou</ListItemContent>
                  </ListItem>
                </List>
                  </div>
                </Cell>
              </Grid>
            </div>
        );
    }
}
 
export default Contact;