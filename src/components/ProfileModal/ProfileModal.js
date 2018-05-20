import React from 'react';
import styles from './ProfileModal.css';
import puffy_1 from './img/puffy_1.jpg';
import lj_1 from './img/profile_story_lj.jpeg';
import lj_2 from './img/profile_story_lj2.jpg';
import thor_1 from './img/profile_story_thor.jpeg';
import kittens_1 from './img/profile_kittens.jpeg';

export default class ProfileModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [
        {
          name: 'Puffy',
          age: '5 years old',
          gender: 'Female',
          stories: [
            {
              title: 'Puffy was brought to Dr. Song\'s office',
              img_src: puffy_1,
              story: ['Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                      'Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
              ] 
            },{
              title: 'Puffy took out teethes',
              img_src: puffy_1,
              story: [
                'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                'Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
              ]
            }
          ]
        },{
          name: 'Lady Jane',
          age: '6 years old',
          gender: 'Female',
          stories: [
            {
              title: 'Lady Jane was brought to Dr. Song\'s office',
              img_src: lj_1,
              story: [
                'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                'Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
              ]
            },{
              title: 'Lady Jane\'s dump on forehead removed',
              img_src: lj_2,
              story: [
                'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                'Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
              ]
            }
          ]
        },{
          name: 'Thor',
          age: '7 years old',
          gender: 'Male',
          stories: [
            {
              title: 'Thor was brought to Dr. Song\'s office',
              img_src: thor_1,
              story: [
                'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                'Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
              ]
            }
          ]
        },{
          name: 'Kittens',
          age: '2 years old',
          gender: 'Female',
          stories: [
            {
              title: 'Kittens were brought to Dr. Song\'s office',
              img_src: kittens_1,
              story: [
                'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                'Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
              ]
            }
          ]
        }
      ]
    }
  }
  render() {
    const profile = this.state.profiles[this.props.index];
    return (
      <div className="modal fade" id="profileModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{profile.name}</h5>
              <p style={{paddingTop: '5px', paddingLeft: '5px'}}>{`Age: ${profile.age}, Gender: ${profile.gender}`}</p>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {
                Object.keys(this.state.profiles[this.props.index].stories).map((key)=>{
                  return (
                    <div className="media" key={key}>
                      <img className="align-self-start mr-3" src={this.state.profiles[this.props.index].stories[key].img_src} alt="Generic placeholder image" />
                      <div className="media-body">
                        <h5 className="mt-0">{this.state.profiles[this.props.index].stories[key].title}</h5>
                        {
                          Object.keys(this.state.profiles[this.props.index].stories[key].story).map((key2)=><p key={key2}>{this.state.profiles[this.props.index].stories[key].story[key2]}</p>)
                        }
                      </div>
                    </div>)
                })
              }
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

