import  React  from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteNote } from '../Store/Actions.js';
import {Link} from 'react-router-dom';

function Note(props){

    
    
    return (
    
    <Card>
        <Card.Content>
            <Card.Header>{props.header}</Card.Header>
            <Card.Meta>{props.meta}</Card.Meta>
            <Card.Description>{props.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <div className='ui two buttons'>
                <Button basic color ='red' animated='vertical' onClick={() => props.deleteNote(props.meta)}>
                    <Button.Content hidden>
                        Delete
                    </Button.Content>
                    <Button.Content visible>
                        <Icon name='trash'/>
                    </Button.Content>
                </Button>
                <Button basic color ='green' animated='vertical' as={Link} to={`/edit/${props.header}`}>
                    <Button.Content hidden>
                        Edit
                    </Button.Content>
                    <Button.Content visible>
                        <Icon name='edit'/>
                    </Button.Content>
                </Button>
            </div>
        </Card.Content>
    </Card>
    
)}
const mapStateToProps = state =>{
    return {
        cardDetails: state.cardDetails
    }
}
const mapDispatchToProps = {

    deleteNote: deleteNote
}

export default connect(mapStateToProps,mapDispatchToProps)(Note);