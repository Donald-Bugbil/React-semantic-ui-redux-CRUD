import  React from 'react';
import { Segment,Grid,Divider  } from 'semantic-ui-react';
import AddNoteForm from './addNotejsx';
import Note from './Note';
import { connect } from 'react-redux';

const AppSegment = (props) => (
    
    <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
            <Grid.Column >
                <AddNoteForm/>
            </Grid.Column>
                
            <Grid.Column verticalAlign='middle' >
                {
                    props.cardDetails.map(({ header,meta,description,key }) => (
                        <Note
                        key={meta}
                        header={header}
                        meta={meta}
                        description={description}
                         />) )
                }
            </Grid.Column>
        
        </Grid>
        <Divider vertical></Divider>
    </Segment>
)

const mapStateToProps = state =>{
    return {
        cardDetails: state.cardDetails
    }
}

export default connect(mapStateToProps)(AppSegment);